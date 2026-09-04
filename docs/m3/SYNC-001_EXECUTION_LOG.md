---
base: SYNC-001
momentum: M3
nivel: A
autor: Claude Sonnet 5 (rol Arquitecto — consolidación / resolución de conflictos)
sesion: https://claude.ai/code/session_01TyYh2HyrVGgKyd3L2G8AeK
fecha: 2026-09-03
rama: feat/v2-sync-001-blueprints
---

# SYNC-001 — Log de ejecución (consolidación de docs + blueprints)

Objetivo del encargo del IC:
1. Consolidar los 12 `.md` sueltos sin trackear (work-stream SYNC-001) en ~4 bases canónicas.
2. Registrar cada base en `TRACEABILITY_MATRIX.md` (asociar cada archivo a una base + SPEC_ID).
3. Crear `docs/README.md` (índice del árbol de docs — la "base" que faltaba a nivel raíz).
4. Dejar listos para Forge: blueprint de analytics (punto 1) y de IdentidadProfesional (punto 2).
5. No tocar `src/`.

---

## Inventario de entrada (12 archivos sin trackear en `v2`)

| Archivo | Fecha | Destino |
|---|---|---|
| `docs/m1/SYNC_ANALYSIS.md` | 2026-07-03 | → merge en `SYNC-001--Analysis--[base].md` |
| `docs/m1/SYNC_ANALISIS_ACTUAL.md` | 2026-07-03 | → merge en `SYNC-001--Analysis--[base].md` |
| `docs/m3/SYNC_ANALYSIS_ACTUAL.md` | 2026-07-04 | → merge en `SYNC-001--Analysis--[base].md` |
| `docs/sync_report.md` | 2026-07-03 | → merge en `SYNC-001--Analysis--[base].md` |
| `docs/m3/REFAC_SYNCCONTEXT.md` | 2026-07-05 | → merge en `SYNC-001--Analysis--[base].md` (sección "estado declarado vs real") |
| `docs/m3/IDENTIDAD_PROCESOS.md` | 2026-07-04 | → merge en `BLUEPRINT_SPEC_EX-v2-MOL-008.json` |
| `docs/m3/IDENTIDAD_PROCESOS_V2.md` | 2026-07-05 | → merge en `BLUEPRINT_SPEC_EX-v2-MOL-008.json` |
| `docs/m3/PROCESOS_IDENTIDAD.md` | 2026-07-04 | → merge en `BLUEPRINT_SPEC_EX-v2-MOL-008.json` |
| `docs/m3/REFACTOR_IDENTIDAD.md` | 2026-07-05 | → merge en `BLUEPRINT_SPEC_EX-v2-MOL-008.json` |
| `docs/m3/PRODUCTION_MODULE.md` | 2026-07-05 | → merge en `BLUEPRINT_SPEC_EX-v2-MOL-008.json` (sección "ciclo de producción") |
| `docs/m3/GSD_TASK_CARD_v2_Sync.md` | 2026-07-03 | → reescritura a convención `GSD_TASK_CARD_SYNC-001.md` |
| `docs/tracking-plan.md` | 2026-07-02 | → base de `BLUEPRINT_SPEC_EX-v2-ANALYTICS-001.md` |

Diagnóstico de calidad: los 12 son salida de LLM local (Aider + Ollama) con `auto-commits: true`
que nunca se rameó. Typos abundantes ("Desarrolador", "venificados", "Faltizado", "CAMPONES",
"Linera mática"), afirmaciones de estado no verificables ("Sincronización Exitosa", "COMPLETO"),
y 5 variantes del mismo análisis de brechas. Valor real = la **intención** (preservar T-01/02/04/06
del portafolio v1) + el **plan de tracking** de `tracking-plan.md`, no el texto.

---

## Pasos ejecutados

### Paso 0 — Rama
`git checkout v2 && git checkout -b feat/v2-sync-001-blueprints`. Sin tocar `src/`.

### Paso 1 — Análisis base consolidado
**Creado** `docs/m1/SYNC-001--Analysis--[base].md` (nivel A). Merge de 5 borradores de análisis.
Anclado a `USER_TASKS_MATRIX` (T-01/02/04/06/09/12). Aporta:
- Tabla de activos v1 a preservar → destino v2 → **estado real 2026-09-03** (cruzado con repo).
- Brecha única SYNC-001 (antes descrita 5 veces): falta la molécula de identidad por rol (T-04);
  `TimelineStep` (T-06) existe pero sin datos del CV.
- Tabla "estado declarado vs. real" — desmiente los "COMPLETO / Sincronización Exitosa" de los borradores.
- Plan A-01..A-05 con owners y dependencias.
- §5: los 3 ejes de identidad (contenido para el blueprint) con nota de que el copy final sale del CV maestro.

### Paso 2 — Blueprint IdentidadProfesional
**Creado** `docs/m3/blueprints/BLUEPRINT_SPEC_EX-v2-MOL-008.json`. Merge de 5 borradores de identidad,
estructura tomada de `AudienceCard.blueprint.json`. Decisiones fijadas:
- Es **molécula** (una tarjeta por eje), no sección. `dependencies`: Tag/Chip/Icon atoms (LOCKED).
- `props_contract` tipado sin `any`. 10 `spec_criteria` (CA-001..010). WCAG AAA.
- **Conflictos resueltos vs. `.tsx.draft`:** hex `#01602D` y `color='success'|'warning'` → tokens
  `tertiary-container` / `secondary-container`. Strings en JSX → i18n. Código sin usar → composición de átomos.
- `blueprint_gate`: BH-1..BH-5 **PASS** (verificado contra `tokens.ts` y `package.json`); **BH-6 PENDIENTE**
  (requiere decisión del IC: copy final, molécula vs. organismo, Ola/SPEC_ID).

### Paso 3 — Task card
**Creado** `docs/m3/GSD_TASK_CARD_SYNC-001.md` (reescritura a convención de `GSD_TASK_CARD_M1.md`).
Checklist A-01..A-05, specs de diseño M3, gate LH-1..LH-4. **Reemplaza** `GSD_TASK_CARD_v2_Sync.md`.

### Paso 4 — Blueprint Analytics (punto 1 del IC)
**Creados:**
- `docs/m3/blueprints/BLUEPRINT_SPEC_EX-v2-ANALYTICS-001.json` — decisión de arquitectura:
  **PostHog solo**, no dual con Amplitude. Descarta `analytics.ts.draft` (firma `init` incorrecta,
  deps sin aprobar, choca con `@vercel/analytics`). 10 `spec_criteria`. BH-3 y BH-6 PENDIENTE (ADR-006).
- `docs/m3/analytics/TRACKING_PLAN.md` — consolida `tracking-plan.md`: 4 funnels + eventos especiales,
  gobierno E3 (hash SHA-256 de `chat_message_text`, `contact_email` nunca se envía, masking de replay,
  `/privacidad` excluida). Ajustado a PostHog único.

### Paso 5 — Índice de docs
**Creado** `docs/README.md` — "la base del árbol de docs". Convención de nombres (`--[base].md`,
`BLUEPRINT_SPEC_*`, `VERSION_CERTIFICATE_*`, `GSD_TASK_CARD_*`, `*_EXECUTION_LOG`), fuentes de verdad,
índice por momentum M0–M5 + raíz, y tabla de **work-streams activos**.

### Paso 6 — Registro en TRACEABILITY_MATRIX
**Editado** `docs/m2/spec/TRACEABILITY_MATRIX.md`: nueva sección **"WORK-STREAMS ACTIVOS (post-Ola 5)"**
con 3 filas (SYNC-001, EX-v2-MOL-008, EX-v2-ANALYTICS-001) — cada una con base, estado, blueprint,
estado de Gate 1 y próximo paso. Cambio quirúrgico; no se refrescó el resto de la matriz (eso es tarea de LOCK).

### Paso 7 — Archivado de los 12 originales
**Movidos** a `docs/m3/drafts/superseded/` (no borrados — "nada se pierde") + `README.md` con el mapa
archivo→base. Borrables sin riesgo cuando el IC valide las bases nuevas.

### Paso 8 — Verificación
`pnpm lint` / `pnpm test` / `pnpm build` / `pnpm build-storybook` / `multi-ia/workflow_bfl.sh audit`
— resultados abajo. Ningún cambio tocó `src/`; los `.draft` siguen fuera del grafo TS/ESLint.

---

## Resultado de verificación (2026-09-03, rama `feat/v2-sync-001-blueprints`)

| Gate | Resultado |
|---|---|
| `pnpm test` | ✅ 0 — 176/176 (24 archivos) |
| `pnpm build` | ✅ 0 |
| `pnpm build-storybook` | ✅ 0 |
| `multi-ia/workflow_bfl.sh audit` | ✅ 38 PASS / 0 FAIL / 1 WARN · 97% · PRODUCTION READY |
| `git diff --stat` (código) | 0 archivos de `src/` — solo `docs/` |

WARN único de auditoría: `STRAPI_URL Railway` (SPRINT_F, backend pendiente — no regresión).

> Nota: `pnpm lint` en esta rama todavía reporta los errores de `excalibur-main_V1/` (copia
> local v1, gitignored). Se corrige en la rama `fix/v2-build-unblock` (commit `d87dd9f`,
> `eslint.config.mjs` ignora `excalibur-main_V1/**`). No es introducido por SYNC-001.

## Cambios (todo en `docs/`)

```
 M docs/m2/spec/TRACEABILITY_MATRIX.md          (+ sección WORK-STREAMS ACTIVOS)
 A docs/README.md                               (índice maestro — nuevo)
 A docs/m1/SYNC-001--Analysis--[base].md
 A docs/m3/GSD_TASK_CARD_SYNC-001.md
 A docs/m3/SYNC-001_EXECUTION_LOG.md
 A docs/m3/analytics/TRACKING_PLAN.md
 A docs/m3/blueprints/BLUEPRINT_SPEC_EX-v2-MOL-008.json
 A docs/m3/blueprints/BLUEPRINT_SPEC_EX-v2-ANALYTICS-001.json
 A docs/m3/drafts/README.md                     (+ superseded/README.md)
 A docs/m3/drafts/*.draft                        (cuarentena — sesión previa)
 A docs/m3/drafts/superseded/*.md               (12 originales archivados)
 D 12 borradores sueltos                         (movidos a superseded/)
```

---

## Pendiente de decisión del IC (no ejecutable por Claude)

| # | Decisión | Bloquea |
|---|---|---|
| 1 | Confirmar copy/cifras de los 3 ejes de identidad vs. CV maestro (commit `abd9c7b`) | SYNC-001 A-01 → todo el Forge de MOL-008 |
| 2 | Cerrar BH-6 de `EX-v2-MOL-008`: ¿molécula o organismo-sección? ¿Ola? ¿SPEC_ID definitivo? | Forge de MOL-008 |
| 3 | Firmar **ADR-006** (PostHog): aprobar dep `posthog-js` + 2 env vars; decidir si se retira `@vercel/analytics`; ¿banner de consentimiento? | Forge de ANALYTICS-001 |
| 4 | ¿Borrar `docs/m3/drafts/superseded/` y `docs/m3/drafts/*.draft` una vez validadas las bases? | limpieza final |

