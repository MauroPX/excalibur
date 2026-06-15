# STRATEGY_BRIEF.md
# EXCALIBUR v2.0 — Estrategia del Portafolio
# TITAN v7.0 | M1 | 2026-06-15
# Nivel: A (inmutable sin RFC)

---

## Problema central

El portafolio actual (main) presenta tres síntomas críticos visibles
para cualquier evaluador que llegue a maurogo.netlify.app:

1. **Secciones invisibles** — el 60% del contenido no aparece al hacer
   scroll por un bug de iframe + IntersectionObserver.
2. **Sin propuesta de valor en los primeros 5 segundos** — el hero
   muestra el nombre y una lista de roles separados por pipes.
   El visitante no sabe qué problema resuelve este profesional.
3. **TITAN v5.0 desactualizado** — el sistema actual es v7.0.
   La credibilidad técnica del portafolio está comprometida.

El problema de fondo es estructural: el portafolio está construido
para alguien que ya sabe quién es Mauricio Gómez.
No está construido para el C-level que tiene un problema sin nombre,
ni para el reclutador que busca "UX Designer" y llega sin contexto.

---

## Propuesta de valor diferencial

> **"Un solo perfil que entra en M0 con el diagnóstico
> y sale en M5 con el sistema en producción —
> sin pérdida de contexto entre etapas."**

El diferenciador no es la lista de tecnologías.
Es la capacidad de operar las 4 capas en secuencia
dentro del mismo proyecto:

```
Pensamiento → Diseño → Orquestación → Implementación
(diagnóstico)  (sistema)  (TITAN v7.0)   (código en prod)
```

Con evidencia verificable en cada paso:
- FDN: diagnóstico → 654 fallas WCAG → LCP 25.2s → 2.5s
- BBVA: estrategia → sistema → orquestación → −75% TTM
- Solidaria: 212 tests + 0 axe violations + Storybook en Chromatic
- Simón v2: ATOMIC_SPEC + GATE 2 + WCAG AAA + 9 componentes LOCK

---

## Las 4 audiencias

### A1 — Cliente / C-level
**Perfil:** VP de Producto, CTO, CEO de startup, Director Digital.
No sabe el nombre del rol que necesita. Tiene un problema.
**Lo que busca:** ¿Ha resuelto alguien mi problema antes? ¿Hay evidencia?
**Entrada al portafolio:** Por síntoma — "mi producto no convierte",
"necesito modernizar un sistema legacy", "quiero integrar IA sin riesgos".
**Métrica de éxito:** Llega al caso de estudio relevante en menos de 2 clics.

### A2 — Reclutador / HR
**Perfil:** Talent Acquisition, HR Manager, Technical Recruiter.
Busca por label de rol. Tiene una JD abierta.
**Lo que busca:** ¿Tiene el perfil que busco? ¿Encaja en el equipo?
**Entrada al portafolio:** Por rol — "UX Designer", "Product Manager",
"React Developer", "Tech Lead".
**Métrica de éxito:** Encuentra el rol + resultado concreto + cómo contactar.

### A3 — Comunidad técnica
**Perfil:** Staff Engineer, Design Engineer, Product Architect.
Conoce TITAN o llegó por una referencia técnica.
**Lo que busca:** ¿Cómo funciona TITAN v7.0? ¿Qué stack usa? ¿Cómo lo aplica?
**Entrada al portafolio:** Explorar — métricas, capas, radar de capacidades.
**Métrica de éxito:** Abre el Storybook o el repo de Simón/Solidaria.

### A4 — Visitante neutral
**Perfil:** Alguien que llegó por LinkedIn, referido, o Google.
No sabe exactamente qué busca.
**Lo que busca:** Orientación. ¿Qué hace esta persona? ¿Me sirve?
**Entrada al portafolio:** Conversacional con IA — describe su situación
y el TitanRAGAgent le responde con el caso más relevante.
**Métrica de éxito:** El agente conecta al visitante con el caso correcto
en menos de 30 segundos.

---

## Métricas de éxito del portafolio v2

| Métrica | Objetivo | Cómo se mide |
|---|---|---|
| Tiempo hasta caso de estudio relevante | < 2 clics | Analytics de flujo (PostHog) |
| LCP | < 1.5s | Vercel Analytics |
| WCAG violations | 0 | axe-core CI/CD |
| Secciones visibles en scroll | 100% | QA manual |
| Proyectos en RAG | 20 | DNA en Strapi |
| TITAN versión visible | v7.0 | Visual QA |
| Conversaciones del agente que llegan a un caso | > 60% | PostHog events |

---

## Posicionamiento vs mercado

| Dimensión | Portafolio típico | MauricioGO v2 |
|---|---|---|
| Entrada | Lista de proyectos | 4 entradas por audiencia |
| Diferenciador | Stack de tecnologías | End-to-end sin pérdida de contexto |
| Evidencia | Screenshots de Figma | Código en producción + métricas reales |
| IA | Chatbot genérico | RAG sobre 20 proyectos reales |
| Accesibilidad | Widget externo | WCAG AAA nativo + axe en CI/CD |
| Proceso | Implícito | TITAN v7.0 visible como diferenciador |

---

Firmado: Leonel Mauricio Gómez Ocampo — Staff Product Architect | 2026-06-15

📍 Momentum: M1 | Artefacto: STRATEGY_BRIEF | Nivel: A
