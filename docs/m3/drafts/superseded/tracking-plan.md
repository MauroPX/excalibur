# Analytics Tracking Plan - Excalibur Portfolio

## 1. Overview & Architecture
Este documento define el estándar de instrumentación analítica para el portafolio. El objetivo es mantener la integridad del dato y la privacidad del usuario en todas las plataformas de análisis.

### Dual Dispatch Architecture (E2)
Todo evento debe ser procesado a través del wrapper central `analytics.ts`. 

**Flujo de Datos:**
`Componente UI` -> `track()` -> `Analytics Wrapper` -> `[PostHog + Amplitude]`

| Propósito | Plataforma Principal | Rol en el Ecosistema |
| :--- | :--- | :--- |
| **Session Replay & Flags** | PostHog | Registro de comportamiento visual y funcionalidades de flags. |
| **Predictive Analytics** | Amplitude | Análisis de cohortes profundos, predicciones y embudos complejos. |

> **Nota técnica:** El wrapper garantiza que ambos destinos reciban el mismo set de propiedades simultáneamente para evitar discrepancias entre plataformas.

## 2. Event Taxonomy (E1)
Los eventos siguen la convención `objeto_accion` en `snake_case`. Todos los eventos incluyen la propiedad `page_type` por defecto.

### FUNNEL 1: Discovery
- `page_viewed`: Registro de navegación global.
- `section_viewed`: Interacción con bloques específicos (Hero, Cases, Stack, etc).
- `scroll_depth_reached`: Porcentaje de lectura (25%, 50%, 75%, 100%).

### FUNNEL 2: Engagement with Projects
- `project_card_clicked`: Registro de interés en casos específicos.
- `project_detail_viewed`: Tiempo y profundidad de lectura del detalle.

### FUNNEL 3: Interactive AI (TITAN RAG)
- `chat_session_started`: Inicio de interacción con el modelo.
- `chat_message_sent`: Registro de queries (identificador único para evitar PII).
- `chat_response_received`: Tiempo de respuesta y tokens consumados.
- `chat_session_ended`: Resumen de sesión (conteo total de mensajes).

### FUNNEL 4: Conversion & Lead Gen
- `contact_form_started`: Identificación del campo inicial de contacto.
- `contact_form_submitted`: Éxito de envío (Canal: Email/LinkedIn).
- `external_link_clicked`: Interacción con enlaces externos (GitHub, LinkedIn, CV).

### FUNNEL 5: Platform Preferences
- `theme_toggled`: Cambio entre Light / Dark.
- `language_switched`: Cambio de idioma local.
- `nav_tab_clicked`: Navegación por pestañas internas.

### SPECIAL EVENTS
- `high_intent_signal`: Evento compuesto disparado cuando el usuario muestra señales críticas de interés (Scroll > 75% + Tiempo en página > 90s).

## 3. Data Privacy & Governance (E3)
Cumplimiento con Ley 1581 y estándares internacionales de protección de datos.

| Propiedad | Clasificación | Tratamiento de Datos |
| :--- | :--- | :--- |
| `chat_message_text` | **PII / Sensitive** | Se aplica Hash SHA-256 antes del despacho. |
| `contact_email` | **PII** | Nunca se envía como propiedad; solo confirmación booleana de éxito. |
| `session_id` | **Internal** | Gestionado por las plataformas (PostHog/Amplitude). |

### Protocolo de Seguridad:
- **Cero Captura:** Ningún dato capturado por el selector de texto (input/textarea) será procesado a menos que esté explícitamente en la whitelist de `tracking-plan.md`.
- **Session Replay:** Masking activo por defecto en todos los inputs, textareas y campos de tipo `email`.
- **Excluded Views:** La vista `/privacidad` está estrictamente excluida del registro de replay.

## 4. Technical Implementation (E2)
Para implementar un evento nuevo, el flujo es:
1. Agregar la definición al presente plan (`tracking-plan.md`).
2. Implementar la lógica en el componente usando `track()`.
3. El wrapper se encarga de la validación y despacho a las APIs de PostHog y Amplitude.

---
**Status:** `IMPLEMENTED`
**Owner:** Product Architecture Team
```
