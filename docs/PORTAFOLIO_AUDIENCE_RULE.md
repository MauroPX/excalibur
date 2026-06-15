# PORTAFOLIO — AUDIENCE DETECTION RULE
**Regla de identificación y señalización de audiencia**
Versión: 1.0 | Junio 2026 | Leonel Mauricio Gómez Ocampo · Staff Product Architect

> Esta regla gobierna cómo el portafolio identifica al lector y cómo le señaliza
> qué contenido es más relevante para él — sin ocultar nada a nadie.

---

## PRINCIPIO

El portafolio no tiene cuatro versiones. Tiene una sola versión con
**señalización inteligente**: el contenido es el mismo para todos,
pero cada audiencia sabe qué secciones hablan directamente de su contexto.

El lector nunca pierde información — solo gana claridad sobre qué leer primero.

---

## LOS 4 PERFILES

| ID | Perfil | Señal visual | Descripción |
|----|--------|-------------|-------------|
| `cliente` | Cliente potencial / prospecto | 🟦 Azul | CTO, Director de Producto, Founder buscando un colaborador o proveedor |
| `reclutador` | Reclutador / Hiring manager | 🟩 Verde | HR Tech, Engineering Manager, VP evaluando seniority |
| `comunidad` | Comunidad técnica / pares | 🟧 Naranja | Staff Engineers, Senior Designers, Tech Leads evaluando rigor |
| `normal` | Visitante general | Sin color | Cualquier persona sin contexto previo — ve el portafolio base |

---

## MECANISMO DE IDENTIFICACIÓN (combinado)

### Capa 1 — Auto-selección al entrar
En la primera visita o desde el hero del portafolio, se presenta una pregunta
ligera y no intrusiva:

```
"¿Qué te trajo aquí?"
  [ Busco un colaborador o proveedor ]   → perfil: cliente
  [ Estoy evaluando un candidato ]       → perfil: reclutador
  [ Soy del mundo tech / diseño ]        → perfil: comunidad
  [ Solo explorando ]                    → perfil: normal
```

- La respuesta se guarda en `localStorage` como `audience_profile`.
- No hay formulario — es un selector de una sola acción, sin fricción.
- El visitante puede cambiar su perfil en cualquier momento con un control
  visible en el header o en el footer: "Ver como: [rol actual] ▾"

### Capa 2 — Detección por comportamiento / contexto
En paralelo, el sistema detecta señales pasivas para refinar o sugerir un perfil:

| Señal | Inferencia |
|-------|-----------|
| Viene de LinkedIn | Probable `reclutador` o `cliente` |
| Viene de GitHub | Probable `comunidad` |
| Viene de un link directo sin referrer | `normal` o invitado por quien lo compartió |
| Pasa más de 60s en la sección de proceso/artefactos | `comunidad` o `reclutador` |
| Pasa más de 60s en casos de estudio con métricas | `cliente` o `reclutador` |
| Hace scroll hasta el stack técnico sin parar en resultados | `comunidad` |

**Comportamiento del sistema:**
- Si hay auto-selección → respeta la elección del usuario. No la sobreescribe.
- Si NO hay auto-selección → usa las señales de comportamiento para mostrar
  un banner suave: "Parece que vienes del mundo técnico — ¿quieres ver el
  portafolio con ese enfoque?" → un clic confirma, otro lo descarta.

---

## MECANISMO DE SEÑALIZACIÓN (resalta sin ocultar)

### Tags de audiencia en secciones y bloques de contenido
Cada sección, caso de estudio o bloque de texto lleva uno o más tags que indican
para qué audiencia es más relevante. El contenido es visible para todos —
los tags son orientadores, no filtros.

**Formato del tag:**
```html
<!-- Implementación sugerida -->
<span class="audience-tag audience-tag--cliente">Para clientes</span>
<span class="audience-tag audience-tag--reclutador">Para reclutadores</span>
<span class="audience-tag audience-tag--comunidad">Para la comunidad</span>
```

**Comportamiento visual por estado:**

| Estado del visitante | Efecto del tag |
|---------------------|---------------|
| Sin perfil seleccionado | Tags visibles pero sin énfasis. Todo en gris neutro. |
| Perfil seleccionado | El tag del perfil activo se ilumina. Los otros se atenúan (opacity 0.4) pero siguen visibles. |
| Hover en tag atenuado | Se restaura visibilidad — el lector puede explorar otros perfiles en cualquier momento. |

### Indicador global de perfil activo
En el header o navegación del portafolio:
```
Viendo como: [ 🟦 Cliente  ▾ ]
```
- Dropdown con los 4 perfiles para cambiar en cualquier momento.
- En móvil: ícono + inicial del perfil (🟦 C) para no ocupar espacio.

### Secciones ancladas por perfil (navegación rápida)
Cada perfil tiene un "salto rápido" a las secciones más relevantes para él:

```
🟦 Cliente     → Casos de estudio con métricas · Propuesta de valor · Contacto
🟩 Reclutador  → Experiencia y decisiones · Stack · Proyectos con alcance
🟧 Comunidad   → TITAN vs Mercado · Artefactos públicos · GitHub · Proceso BFL
⬜ Normal      → Bio · Proyectos destacados · Contacto
```

---

## REGLAS DE ETIQUETADO DE CONTENIDO

Al crear o editar cualquier bloque de contenido del portafolio, declarar
su audiencia primaria y secundaria:

```yaml
# Frontmatter de cada bloque o sección
audience:
  primary: cliente          # audiencia a quien habla directamente
  secondary: [reclutador]   # audiencia que también se beneficia
  visible_to: all           # siempre "all" — nunca se oculta contenido
```

**Regla de etiquetado:**
- Todo bloque tiene exactamente **1 audiencia primaria**.
- Puede tener 0, 1 o 2 audiencias secundarias.
- Ningún bloque tiene `visible_to: none` — ocultar contenido rompe el principio.

---

## INTEGRACIÓN CON EL TONE ORCHESTRATOR

Este sistema trabaja junto con `TITAN_TONE_ORCHESTRATOR.md`:

1. El **Tone Orchestrator** define cómo está escrito cada bloque de texto.
2. Esta **Audience Detection Rule** define a quién se señaliza cada bloque.
3. Un bloque bien construido tiene: tono en capas (Orchestrator) + tag de audiencia (esta regla).

**Al generar nuevo contenido para el portafolio:**
```
1. Escribir con el Tone Orchestrator → estructura en 3 capas
2. Declarar la audiencia primaria → audience.primary
3. Agregar el tag visual → audience-tag--[perfil]
4. Verificar que funciona sin selección de perfil (estado normal)
```

---

## EXPERIENCIA POR PERFIL — RESUMEN

### 🟦 Cliente entra al portafolio
1. Ve la pregunta de auto-selección → elige "Busco un colaborador"
2. Los tags `🟦 Para clientes` se iluminan en todo el sitio
3. Ve un "salto rápido" a casos de estudio con métricas
4. El resto del contenido sigue visible pero en segundo plano visual
5. Puede cambiar a otro perfil en cualquier momento

### 🟩 Reclutador llega desde LinkedIn
1. El sistema detecta el referrer y sugiere perfil `reclutador`
2. Ve un banner: "¿Estás evaluando este perfil? Ver con enfoque de contratación →"
3. Un clic confirma — los tags `🟩 Para reclutadores` se iluminan
4. El header muestra: "Viendo como: 🟩 Reclutador ▾"

### 🟧 Comunidad llega desde GitHub
1. Sistema detecta referrer → sugiere perfil `comunidad`
2. Los tags `🟧 Para la comunidad` se iluminan
3. Salto rápido hacia TITAN vs Mercado, artefactos públicos, proceso técnico
4. El contenido de negocio sigue visible pero atenuado

### ⬜ Visitante general (normal)
1. No selecciona perfil o descarta el banner
2. Ve el portafolio base: todo visible, todos los tags en gris neutro
3. Navega sin señalización — la estructura en capas del texto lo guía naturalmente

---

## STACK DE IMPLEMENTACIÓN SUGERIDO

| Componente | Tecnología |
|------------|-----------|
| Persistencia del perfil | `localStorage` → clave: `portfolio_audience` |
| Detección de referrer | `document.referrer` + UTM params |
| Señalización visual | CSS custom properties + clase en `<body>` → `body.audience-cliente` |
| Control de perfil en header | Componente React/Vue dropdown con `useState` |
| Analytics de perfil | PostHog → evento `audience_selected` con prop `profile` |
| Tags en contenido | Atributo `data-audience="cliente|reclutador|comunidad"` en el DOM |

**Implementación CSS (núcleo del sistema):**
```css
/* Estado base — sin perfil seleccionado */
.audience-tag { opacity: 1; }

/* Con perfil activo en body */
body.audience-cliente .audience-tag:not(.audience-tag--cliente) { opacity: 0.35; }
body.audience-reclutador .audience-tag:not(.audience-tag--reclutador) { opacity: 0.35; }
body.audience-comunidad .audience-tag:not(.audience-tag--comunidad) { opacity: 0.35; }

/* Hover restaura visibilidad */
.audience-tag:hover { opacity: 1 !important; transition: opacity 0.2s; }

/* Secciones con data-audience */
body.audience-cliente [data-audience]:not([data-audience*="cliente"]) { opacity: 0.5; }
```

---

*PORTAFOLIO_AUDIENCE_RULE.md — v1.0 — Junio 2026*
*Nivel IMMUTABILITY: Nivel B — se versiona si cambian los perfiles o el mecanismo de detección*
*Owner: Staff Product Architect · Se carga junto con TITAN_TONE_ORCHESTRATOR.md al trabajar en el portafolio*
