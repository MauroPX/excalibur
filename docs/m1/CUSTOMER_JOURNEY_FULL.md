# CUSTOMER_JOURNEY_FULL.md
# EXCALIBUR v2.0 — Customer Journeys Completos por Audiencia
# TITAN v7.0 | M1 | 2026-06-15
# Nivel: B (vivo — se actualiza al cerrar M3)

---

## Principio de diseño

El portafolio no tiene cuatro versiones. Tiene una versión con señalización
inteligente. El contenido es el mismo para todos; cada audiencia sabe qué
secciones hablan directamente de su contexto. Basado en Laws of UX y en
PORTAFOLIO_AUDIENCE_RULE.md.

---

## Journey A1 — Cliente / C-level con problema sin nombre

**Perfil:** VP de Producto, CTO, Director Digital, Founder.
**Momento:** Tiene un problema que no sabe cómo nombrar.
**Canal de entrada:** LinkedIn, referido, Google "product architect latam".

```
PASO 1 — LLEGADA (0-5 segundos)
  URL: maurogomez.design
  Ve: Hero con propuesta de valor + 1 métrica de impacto + 1 CTA
  Lee: "Un solo perfil que entra en M0 con el diagnóstico y sale
        en M5 con el sistema en producción"
  Ve métrica: "-90% LCP · FDN · 25.2s → 2.5s"
  Decisión: ¿esto suena a lo que necesito?
  ↓ SÍ → continúa

PASO 2 — IDENTIFICACIÓN DE AUDIENCIA (5-10 segundos)
  Ve: pregunta ligera "¿Qué te trajo aquí?"
  Selecciona: "Busco un colaborador o proveedor"
  Sistema: guarda perfil 'cliente' en localStorage
  Los tags [Para clientes] se iluminan en todo el sitio

PASO 3 — NAVEGACIÓN POR SÍNTOMA (10-30 segundos)
  Ve: NavSystem Tab A — "Por síntoma"
  Lee 4 cards:
    → "Mi producto no convierte" [CTA: Ver caso →]
    → "Necesito modernizar un sistema legacy" [CTA: Ver caso →]
    → "Quiero integrar IA sin riesgos" [CTA: Ver caso →]
    → "Diseño y código no coinciden" [CTA: Ver caso →]
  Hace clic en la card que describe su problema exacto

PASO 4 — CASO DE ESTUDIO (30s - 3 minutos)
  Lee el PAR: Problema → Acción → Resultado
  Ve MetricRow: métricas verificables (LCP, TTM, tests, fallas resueltas)
  Ve stack real usado en el proyecto
  Lee el resultado concreto con datos duros
  Decisión: ¿quiero hablar con esta persona?
  ↓ SÍ → continúa

PASO 5 — CONTACTO (3-4 minutos)
  Ve: ContactSection con 1 CTA claro
  Acción: abre modal o copia email lemaogo@gmail.com
  ÉXITO ✅ — tiempo total < 4 minutos

PASO 5B — EXPLORACIÓN ADICIONAL (opcional)
  Revisa otros casos relacionados
  Ve TITAN v7.0 para entender el proceso
  ÉXITO EXTENDIDO ✅
```

**Puntos de fricción eliminados:**
- Hero con 1 solo CTA (antes tenía 3 compitiendo)
- Cards de síntoma con evidencia real, no solo el problema
- Caso de estudio con SSR — carga < 1s

---

## Journey A2 — Reclutador / HR con JD abierta

**Perfil:** Talent Acquisition, HR Manager, Technical Recruiter.
**Momento:** Tiene una JD abierta. Busca por label de rol.
**Canal de entrada:** LinkedIn Easy Apply, ATS, job board.

```
PASO 1 — LLEGADA (0-5 segundos)
  URL: maurogomez.design
  Sistema detecta referrer LinkedIn → sugiere perfil 'reclutador'
  Banner suave: "¿Estás evaluando este perfil? Ver con enfoque
                 de contratación →"
  Acepta → tags [Para reclutadores] se iluminan

PASO 2 — NAVEGACIÓN POR ROL (5-20 segundos)
  Ve: NavSystem Tab B — "Por rol"
  Ve card featured: "No tengo claro qué perfil necesito →"
  Ve grid de roles:
    → UX Designer
    → Product Manager
    → React Developer / Frontend
    → Tech Lead / Arquitecto
    → Staff Product Architect
    → Design Systems Engineer
  Hace clic en el rol que busca

PASO 3 — RESULTADO DEL ROL (20s - 2 minutos)
  Lee: qué entrego en este rol + resultado concreto
  Ve casos de estudio asociados a ese rol
  Ve métricas de alcance: "8 squads · $3.2M ARR · WCAG AAA"
  Lee el timeline de experiencia en ese rol específico

PASO 4 — CV / EXPERIENCIA (2-4 minutos)
  Ve: botón "Descargar CV" con 2 opciones
    → CV Técnico (detallado, para Technical Recruiter)
    → CV Ejecutivo (conciso, para HR Generalist)
  Descarga el formato que necesita
  Ve timeline completo: 10+ años en orden cronológico
  ÉXITO ✅ — tiempo total < 4 minutos

PASO 5 — CONTACTO (opcional)
  Ve: ContactSection con CTA "Agendar llamada" o email directo
  ÉXITO EXTENDIDO ✅
```

**Puntos de fricción eliminados:**
- "Expediente SSOT" / "Master Dossier" renombrados a "CV Técnico" / "CV Ejecutivo"
- Timeline con año, empresa, rol, resultado — sin jerga TITAN
- Detección de LinkedIn para señalización automática sin fricción

---

## Journey A3 — Comunidad técnica / pares

**Perfil:** Staff Engineer, Design Engineer, Product Architect, Tech Lead.
**Momento:** Conoce TITAN o llegó por referencia técnica (Twitter/X, GitHub).
**Canal de entrada:** Twitter/X, GitHub, conferencia, blog técnico.

```
PASO 1 — LLEGADA (0-5 segundos)
  URL: maurogomez.design
  Sistema detecta referrer GitHub → sugiere perfil 'comunidad'
  Banner: "¿Vienes del mundo técnico? Ver con profundidad →"
  Tags [Para la comunidad] se iluminan

PASO 2 — EXPLORACIÓN (5-60 segundos)
  Ve: NavSystem Tab D — "Explorar"
  Ve radar de capacidades por capa:
    → Pensamiento (M0-M1) · Diseño (M2) · Operaciones (TITAN) · Técnico
  Selecciona: "Profundidad técnica"
  Ve flujo end-to-end M0→M5 explicado con artefactos reales

PASO 3 — TITAN v7.0 (1-5 minutos)
  Ve: TitanSection
  Lee features reales:
    → BFL Protocol (Blueprint → Forge → Lock)
    → Consejo de 5 modelos + Blind Review
    → Zero Hallucination en 5 capas
    → Propagation Protocol automático
    → 56 archivos · 180+ comandos
  Ve compatibilidad: Claude / ChatGPT / Gemini / Cursor / Ollama

PASO 4 — EVIDENCIA TÉCNICA (5-15 minutos)
  Hace clic en casos de estudio técnicos:
    → Simón v2: GATE 2 11/12 · ATOMIC_SPEC · VERSION_CERTIFICATE
    → Solidaria: 212 tests · Storybook en Chromatic · WCAG 2.2 AA
    → EXCALIBUR: este mismo portafolio en GitHub
  Hace clic en "View Code": abre repo excalibur
  Abre Storybook de Solidaria en Chromatic
  ÉXITO ✅ — profundidad técnica verificada

PASO 5 — CONEXIÓN (opcional)
  Sigue en GitHub
  Comparte el portafolio con su red
  ÉXITO EXTENDIDO ✅
```

---

## Journey A4 — Visitante neutral / conversacional

**Perfil:** Cualquier persona. Llegó por LinkedIn, referido, Google.
**Momento:** No sabe exactamente qué busca. Tiene curiosidad o una necesidad difusa.
**Canal de entrada:** Cualquiera.

```
PASO 1 — LLEGADA (0-5 segundos)
  No selecciona perfil ni acepta el banner
  Ve el portafolio base: todo visible, tags en gris neutro
  Lee el hero: propuesta de valor + 1 métrica
  Se detiene en el NavSystem

PASO 2 — CONVERSACIÓN CON IA (5-30 segundos)
  Ve: NavSystem Tab C — "Cuéntame tu caso"
  Lee: "Cuéntame qué necesitas o qué está pasando en tu equipo"
  Elige una sugerencia rápida:
    → "¿Cómo resolviste el problema de LCP?"
    → "¿Trabajas con equipos remotos?"
    → "¿Tienes experiencia en mi industria?"
  O escribe libremente su situación

PASO 3 — RESPUESTA DEL AGENTE (30s - 2 minutos)
  TitanRAGAgent procesa la consulta
  Busca en pgvector los 20 proyectos
  Responde con el caso más relevante:
    "Tu situación se parece al caso de FDN: tenían el mismo
     problema de LCP crítico y lo llevamos de 25s a 2.5s..."
  Sugiere: "¿Quieres ver el caso completo? →"

PASO 4 — CASO DE ESTUDIO (2-4 minutos)
  Llega al caso de estudio relevante
  Lee el PAR + métricas
  Entiende qué hace este profesional
  Decide si contacta o sigue explorando
  ÉXITO ✅

PUNTO DE FALLO — Si el agente falla:
  Muestra: fallback estático con los 3 casos más fuertes
  Nunca responde vacío
  ÉXITO DEGRADADO ✅
```

---

## Mapa de fricción y mitigaciones

| Punto de fricción | Audiencia afectada | Mitigación |
|---|---|---|
| Hero con múltiples CTAs | Todas | 1 solo CTA principal |
| Nav con > 4 tabs | Todas | Máximo 4 tabs (Ley de Miller) |
| "Expediente" / "Dossier" | A2 Reclutador | Renombrar a "CV Técnico" / "CV Ejecutivo" |
| Agente sin contexto del proyecto | A4 | 20 proyectos en Strapi + pgvector |
| Caso de estudio lento | A1, A2 | SSR con Strapi → Next.js, cache en Vercel |
| Toggle de audiencia no visible | Todas | Control persistente en header |
| Idioma incorrecto | Todas | Toggle ES/EN en header, persistido en localStorage |

---

## Métricas de éxito por journey

| Journey | Métrica | Objetivo |
|---|---|---|
| A1 — Cliente | Tiempo hasta caso relevante | < 2 clics / < 90 segundos |
| A2 — Reclutador | Tiempo hasta CV descargado | < 3 clics / < 2 minutos |
| A3 — Comunidad | Profundidad alcanzada (scroll depth) | > 60% de la página |
| A4 — Neutral | Conversaciones que llegan a un caso | > 60% |
| Todas | LCP | < 1.5s |
| Todas | WCAG violations | 0 |

---

📍 Momentum: M1 | Artefacto: CUSTOMER_JOURNEY_FULL | Nivel: B
Firmado: Leonel Mauricio Gómez Ocampo — Staff Product Architect | 2026-06-15
