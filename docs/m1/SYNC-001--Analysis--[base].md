---
base: SYNC-001
spec_id: SYNC-001
titulo: Reconciliación de contenido Portafolio v1 → v2
momentum: M1 (análisis) / M3 (ejecución)
nivel: A
estado: IN_PROGRESS
fuente_de_verdad: docs/m1/USER_TASKS_MATRIX.md
reemplaza:
  - docs/m1/SYNC_ANALYSIS.md
  - docs/m1/SYNC_ANALISIS_ACTUAL.md
  - docs/m3/SYNC_ANALYSIS_ACTUAL.md
  - docs/sync_report.md
  - docs/m3/REFAC_SYNCCONTEXT.md
derivados:
  - docs/m3/blueprints/BLUEPRINT_SPEC_EX-v2-MOL-008.json  (IdentidadProfesional)
  - docs/m3/GSD_TASK_CARD_SYNC-001.md
actualizado: 2026-09-03
---

# SYNC-001 — Análisis de reconciliación v1 → v2

> **Base canónica.** Consolida 5 borradores de análisis generados por Aider/Ollama
> (jul-2026) en un solo documento verificable, anclado a `USER_TASKS_MATRIX.md`.
> Todo lo que aquí se afirma como "hecho" está cruzado contra el repo real a 2026-09-03.

---

## 1. Problema

El portafolio v1 (rama `main`, Netlify, **CONGELADO** por ADR-004) contiene contenido
profesional —trayectoria, roles, métricas de caso— que la v2 debe preservar al migrar a
la arquitectura M3 desacoplada. El riesgo declarado por los borradores: que v2 quede
"estática" (una lista de tecnologías) y pierda el **contexto histórico** que un reclutador
usa para leer la curva de crecimiento profesional.

## 2. Activos a preservar — mapeo a `USER_TASKS_MATRIX`

| ID matriz | Concepto v1 | Valor crítico | Destino v2 | Estado real (2026-09-03) |
|---|---|---|---|---|
| **T-01 / T-02** | Impacto y resultados de caso | Métricas verificables (LCP, TTM, tests) | `CasesSection` → `MetricRow` → `Metric` | ✅ Componentes LOCKED · ⚠️ datos: 3/20 casos estáticos, resto bloqueado por Strapi/Railway |
| **T-04** | Roles de reclutador | Reconocimiento profesional por label de rol | `NavSystem` → tab B "Por rol" + **tarjeta de identidad profesional (nueva)** | ⚠️ NavSystem LOCKED, pero **falta** la molécula que renderiza la identidad por rol → `EX-v2-MOL-008` |
| **T-06** | Trayectoria profesional | Cronología 10+ años | `CasePage` → `TimelineStep` | ✅ `TimelineStep` (MOL-004) LOCKED · ⚠️ falta cablear datos reales del CV |
| **T-09** | Profundidad técnica | Stack por capa | `StackSection` → `SkillBar` + radar (Recharts) | ✅ LOCKED |
| **T-12** | Propuesta de valor | Resumen en < 5s | `Hero` → HeroResult | ✅ LOCKED |

## 3. Brecha real (una, no cinco)

Los 5 borradores describen la misma brecha con distintas palabras. Consolidada:

> **BRECHA SYNC-001.** No existe un componente que proyecte la *identidad profesional por
> rol* (T-04) con datos reales del CV. `NavSystem` tab B expone la navegación pero no hay
> molécula de contenido detrás. `TimelineStep` (T-06) existe pero sin datos del CV cableados.

Todo lo demás que los borradores marcan como "faltante" **ya está resuelto estructuralmente**
(componentes LOCKED); lo que falta es **datos**, y eso depende de `Strapi + Railway` (Ola 8),
no de este work-stream.

## 4. Estrategia de migración — Mapeo por Contexto

Regla única (de `sync_report.md`, la mejor formulación de las 5):

- Los datos de v1 **no se copian literalmente**: se re-contextualizan al diseño M3.
- Un dato de v1 que es **éxito de negocio** → aparece como logro/métrica en tarjeta T-04 o T-02.
- Un dato que es **descripción técnica** → va a `StackSection` (T-09).
- Un dato que es **hito temporal** → va a `TimelineStep` (T-06).
- **Cero ruido:** se elimina todo detalle administrativo que no aporte a la lectura del reclutador.

## 5. Los 3 ejes de identidad profesional (input para `EX-v2-MOL-008`)

Consolidado de `IDENTIDAD_PROCESOS*.md` + `PROCESOS_IDENTIDAD.md`. Estos son los datos de
contenido; su contrato de componente vive en el blueprint derivado.

| Eje | Categoría | Skills (de los borradores + DNA) | Descripción (a validar por el IC contra el CV maestro) |
|---|---|---|---|
| **Gestión estratégica** | `gestion` | Estrategia Digital · Product Discovery · Agilidad · Coordinación de equipos | Resolución compleja de problemas y gestión de proyectos multidisciplinarios. |
| **Arquitectura técnica / UX** | `tecnico` | Diseño de Sistemas · BPM · CI/CD · Soporte técnico · Bases de datos | Construcción técnica y visual del portafolio v2; arquitectura y despliegue. |
| **Comunicación / IA** | `ia` | Prompt Engineering · Escritura creativa · Analítica · RAG | Gestión de identidad, procesos y refactorización asistida por IA. |

> ⚠️ El copy exacto y las cifras salen del **CV maestro privado** (commit `abd9c7b` "unifica los
> 2 CVs en un solo archivo maestro privado"), no de los borradores. Pendiente: el IC confirma
> los textos finales antes del Forge.

## 6. Estado declarado vs. estado real

`REFAC_SYNCCONTEXT.md` y `IDENTIDAD_PROCESOS_V2.md` afirmaban "Sincronización Exitosa /
COMPLETO / SSOT activa". **Falso a la fecha de este documento:**

| Afirmación del borrador | Realidad 2026-09-03 |
|---|---|
| "El componente `TimelineStep` ahora contiene la segmentación técnica…" | `TimelineStep` LOCKED pero **sin datos del CV** — usa fixtures |
| "Las tarjetas de Identidad Profesional v2 ahora incluyen…" | **No existe** la molécula — ver `docs/m3/drafts/IdentidadProfesional.tsx.draft` (borrador roto) |
| "Re-contextualización COMPLETA para la fase inicial" | Fase de **análisis** cerrada; ejecución **no iniciada** |

## 7. Plan de acción

| # | Acción | Owner | Depende de | Registro |
|---|---|---|---|---|
| A-01 | Confirmar copy/cifras de los 3 ejes contra el CV maestro | IC | — | este doc §5 |
| A-02 | Gate 1 (BH-1..BH-6) del blueprint `EX-v2-MOL-008` | IC (rol Arquitecto) | A-01 | `BLUEPRINT_SPEC_EX-v2-MOL-008.json` |
| A-03 | Forge `EX-v2-MOL-008` (Aider/Ollama) | qwen2.5-coder:14b + gemma2:9b + qwen2.5:14b | A-02 | `./multi-ia/workflow.sh` |
| A-04 | Cablear datos reales del CV en `TimelineStep` (T-06) | Forge | A-01 | — |
| A-05 | LOCK `EX-v2-MOL-008` + update `COMPONENT_REGISTRY` + `TRACEABILITY_MATRIX` | IC (rol Auditor) | A-03 | `VERSION_CERTIFICATE.json` |

## 8. Fuera de alcance de SYNC-001

- Migración de datos a Strapi (Ola 8 — Railway).
- Analytics / tracking → work-stream separado `EX-v2-ANALYTICS-001`.
- Cualquier cambio a la rama `main` / v1 (CONGELADA — ADR-004).

---

📍 Momentum: M3 · Work-stream: SYNC-001 · Estado: **análisis cerrado, ejecución pendiente A-01**
