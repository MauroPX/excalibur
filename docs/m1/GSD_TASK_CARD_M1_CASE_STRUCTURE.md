# GSD_TASK_CARD_M1_CASE_STRUCTURE.md
# EXCALIBUR v2.0 — Reestructuración de casos: proceso E2E, metodología TITAN y evidencia real
# TITAN v7.0 | [OBSERVER] | 2026-09-06

---

## Estado del Momentum

```
PROYECTO:    EXCALIBUR v2.0 — Reestructuración de Casos (Content Architecture)
MOMENTUM:    M1 (extensión) — Estrategia de contenido de casos
FECHA:       2026-09-06
ESTADO:      EN PROGRESO — Fase 1/6
```

---

## Por qué existe esta task card

Auditoría de la estructura actual de `CasePageData` (ver conversación previa) encontró que el schema mide "qué hice, en qué empresa, con qué resultado" (`timeline: {company, role, period}`, `techStack`, `metrics`) pero no captura el patrón central del perfil profesional: **entrar con un rol específico y terminar interviniendo en el proceso E2E completo al descubrir todo lo que interviene** — ni la metodología TITAN aplicada como dato estructurado y verificable (hoy vive como prosa libre, no comparable entre casos).

Esta task card documenta las 6 fases para corregirlo, en orden de dependencia, sin tocar componentes `LOCKED` sin pasar primero por Blueprint.

---

## Las 6 fases

| # | Fase | Qué produce | Depende de | Estado |
|---|---|---|---|---|
| 1 | **Consolidar contenido real** | `docs/m1/WORKTEST_CASES.md` (Codesa completo + insumo Guidewire/DDD) y `docs/m1/CONTENT_COPY_STRATEGY.md` (FDN en 2 momentums) comiteados al repo real — hoy solo existen en borrador de sesión | — | 🔜 Siguiente |
| 2 | **Blueprint del schema nuevo** | `BLUEPRINT_SPEC` con SPEC_IDs nuevos para `entryRole`, `discoveredScope`, `methodology`, `momentumsApplied`, `processOutcome` — decide si extiende `CasePageData` (template) o crea tipo nuevo; **no toca `ProjectCard` (EX-v2-MOL-002, LOCKED)** sin blueprint propio | Fase 1 | Pendiente |
| 3 | **Rellenar campos con evidencia real, caso por caso** | Cada caso (4 work-tests + casos de cliente ya documentados) con los campos nuevos completos donde hay evidencia, y explícitamente marcados `pendiente — sin verificar` donde no — nunca inferidos | Fase 2 | Pendiente |
| 4 | **Complementar con v1 donde aplique** | Rescate de contexto/tono de la copy v1 solo como complemento narrativo — todo dato factual pasa el mismo filtro de verificación que Fase 3 | Fase 3 (en paralelo, mismo criterio) | Pendiente |
| 5 | **Construir en orden de menor dependencia de gobernanza** | `/metodologia` → páginas de work-tests (`WorkTestCard` nuevo, no reutiliza `ProjectCard`) → casos de cliente actualizados → meta-caso EXCALIBUR | Fases 2-4 | Pendiente |
| 6 | **Iterar sin bloquear** | Cada caso lleva un estado (`completo` / `parcial — falta X`) visible en el dato — el sitio no oculta lo incompleto, lo declara | Fase 5 | Pendiente |

---

## Relación con el proceso TITAN existente

La narrativa de cada caso (Fase 3) se cuenta con la misma forma que Double Diamond, ya usado en TITAN:

```
Mandato de entrada  →  Descubrimiento  →  Intervención E2E  →  Estandarización
   (Discover)            (Discover/Define)    (Develop)           (Deliver)
```

Esto hace que la estructura de cada caso sea, en sí misma, evidencia de que TITAN se aplica — no solo una afirmación en `/metodologia`.

`momentumsApplied` en el schema (Fase 2) registra qué Momentums (M0–M5) corrieron realmente en cada proyecto de cliente/prueba — dato verificable, no narrativo.

---

## Gate de esta fase (1 → 2)

```
⬜ docs/m1/WORKTEST_CASES.md actualizado en el repo real (Codesa + Insumo base Guidewire)
⬜ docs/m1/CONTENT_COPY_STRATEGY.md actualizado en el repo real (FDN en 2 momentums)
⬜ Commit + push a feat/v2-analytics-posthog (o a v2, según se resuelva el merge de rama pendiente)
```

**No se pasa a Fase 2 (Blueprint de schema) sin este gate cerrado** — construir sobre contenido que no está en el repo repite el error que motivó esta task card.

---

📍 Momentum: M1 (extensión) | Estado: EN PROGRESO
✅ Generado: GSD_TASK_CARD_M1_CASE_STRUCTURE — 6 fases documentadas
→ Siguiente: Fase 1 — commit del contenido real al repo
