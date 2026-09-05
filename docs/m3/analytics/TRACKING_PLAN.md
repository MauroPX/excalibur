---
base: EX-v2-ANALYTICS-001
spec_id: EX-v2-ANALYTICS-001
titulo: Plan de instrumentación analítica — Excalibur Portafolio
momentum: M3
nivel: A
estado: LOCKED — implementado (ADR-006 firmado 2026-09-04)
reemplaza: docs/tracking-plan.md
blueprint: docs/m3/blueprints/BLUEPRINT_SPEC_EX-v2-ANALYTICS-001.json
actualizado: 2026-09-04
---

# Tracking Plan — Excalibur Portafolio

> Consolida `docs/tracking-plan.md` (jul-2026). **Cambio vs. el borrador:** arquitectura
> **PostHog solo**, no dual PostHog+Amplitude (ver blueprint `decision_arquitectura`).

## 1. Arquitectura

```
Componente UI ──▶ track(evento, props) ──▶ src/lib/analytics.ts ──▶ PostHog
                                             │
                                             └─▶ sanitizeProperties()  (E3 — strip PII)
```

| Propósito | Plataforma | Rol |
|---|---|---|
| Product analytics · funnels · session replay · feature flags | **PostHog** | única plataforma de eventos |
| Web Vitals / RUM de performance | `@vercel/speed-insights` | ya instalado — se mantiene |
| Pageviews de respaldo (opcional) | `@vercel/analytics` | ya instalado — decisión del IC si se retira |

**Descartado:** Amplitude / dual dispatch — sin ROI para un portafolio de tráfico bajo,
duplica bundle, config y superficie de PII.

## 2. Taxonomía de eventos (E1)

Convención `objeto_accion` en `snake_case`. Todo evento incluye `page_type` por defecto.
Los nombres viven como **union tipada `EventName`** en `src/lib/analytics.ts` — no string libre.

### FUNNEL 1 — Discovery
- `page_viewed` — navegación global
- `section_viewed` — bloque visible (Hero, Cases, Stack, TITAN, Contact)
- `scroll_depth_reached` — 25 / 50 / 75 / 100
- `nav_tab_clicked` — pestañas internas de NavSystem (A/B/C/D)

### FUNNEL 2 — Engagement con proyectos
- `project_card_clicked` — interés en un caso
- `project_detail_viewed` — profundidad/tiempo de lectura del detalle

### FUNNEL 3 — IA interactiva (TITAN RAG)
- `chat_session_started`
- `chat_message_sent` — `chat_message_text` → **hash SHA-256** antes del dispatch
- `chat_response_received` — latencia + tokens
- `chat_session_ended` — conteo de mensajes

### FUNNEL 4 — Conversión
- `contact_form_started`
- `contact_form_submitted` — canal (Email / LinkedIn); **nunca** el email como propiedad
- `external_link_clicked` — GitHub / LinkedIn / CV

### Eventos especiales
- `high_intent_signal` — compuesto: `scroll_depth_reached ≥ 75` **y** tiempo en página > 90s

## 3. Privacidad y gobierno de datos (E3)

Cumplimiento Ley 1581 (CO) + estándares internacionales.

| Propiedad | Clasificación | Tratamiento |
|---|---|---|
| `chat_message_text` | PII / sensible | Hash SHA-256 antes del dispatch |
| `contact_email` | PII | Nunca se envía; solo booleano de éxito |
| `session_id` | Interno | Gestionado por PostHog |

**Protocolo:**
- **Cero captura:** ningún dato de `input` / `textarea` se procesa salvo whitelist explícita aquí.
- **Session replay:** masking activo por defecto en `input`, `textarea`, `[type=email]`.
- **Vistas excluidas del replay:** `/privacidad`.
- `person_profiles: 'identified_only'` — no se crea perfil para visitantes anónimos.

## 4. Implementación de un evento nuevo (E2)

1. Añadir la definición a este plan + al tipo `EventName`.
2. Llamar `track('nombre_evento', { ...props })` desde el componente.
3. El wrapper valida, sanea (`sanitizeProperties`) y despacha a PostHog.

---

**Estado:** `LOCKED` — implementado. ADR-006 firmado 2026-09-04. Ver `src/lib/analytics.ts` +
`src/components/infra/PostHogProvider/` + `VERSION_CERTIFICATE.json`.
**Owner:** Product Architecture.
