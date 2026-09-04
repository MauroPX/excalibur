# GSD_TASK_CARD_SYNC-001.md
# EXCALIBUR v2.0 — Work-stream SYNC-001
# TITAN v7.0 | Reconciliación de contenido v1 → v2
# Reemplaza: docs/m3/GSD_TASK_CARD_v2_Sync.md

---

## Estado del work-stream

```
PROYECTO:     EXCALIBUR v2.0 — MauricioGO Portafolio
WORK-STREAM:  SYNC-001 — Reconciliación Portafolio v1 → v2
MOMENTUM:     M3 (ejecución) · análisis en M1
FECHA:        2026-09-03
ESTADO:       IN_PROGRESS — análisis cerrado, ejecución pendiente
BASE:         docs/m1/SYNC-001--Analysis--[base].md
```

---

## Objetivo

Inyectar el contenido profesional heredado de v1 (trayectoria, roles, métricas de caso)
en la arquitectura M3 de v2 mediante migración consciente (**Mapeo por Contexto**), sin
pérdida de identidad ni de valor técnico, y sin tocar la rama `main` / v1 (CONGELADA — ADR-004).

---

## Artefactos del work-stream

| Artefacto | Ruta | Rol | Estado |
|---|---|---|---|
| Análisis base | `docs/m1/SYNC-001--Analysis--[base].md` | fuente de verdad del work-stream | ✅ CONSOLIDADO |
| Blueprint componente | `docs/m3/blueprints/BLUEPRINT_SPEC_EX-v2-MOL-008.json` | contrato de `IdentidadProfesional` | ✅ Gate 1 (BH-1..6) PASS 2026-09-04 — Forge bloqueado por A-01 |
| Task card | `docs/m3/GSD_TASK_CARD_SYNC-001.md` | este archivo | ✅ |
| Borrador descartado | `docs/m3/drafts/IdentidadProfesional.tsx.draft` | referencia visual únicamente | 🗑️ cuarentena |

---

## Requerimientos (checklist)

- [ ] **A-01 — Copy confirmado.** ⏸️ **DEJADO EXPLÍCITAMENTE PENDIENTE por el IC (2026-09-04).**
      El IC valida el texto y las cifras de los 3 ejes de identidad (§5 del análisis base) contra
      el CV maestro privado (commit `abd9c7b`). Bloquea A-03 (Forge) — nada más depende de esto.
- [x] **A-02 — Gate 1.** ✅ Cerrado 2026-09-04. Decisión: **molécula** (no organismo-sección),
      **Ola 7** (paralela, no bloquea Ola 6), SPEC_ID definitivo **EX-v2-MOL-008**.
      Ver `gate_1_decision` en el blueprint.
- [ ] **A-03 — Forge.** `./multi-ia/workflow.sh "EX-v2-MOL-008 — IdentidadProfesional"`
      genera `.tsx` + `.test.tsx` + `.stories.tsx` según el blueprint.
- [ ] **A-04 — Datos T-06.** Cablear los hitos reales del CV en `TimelineStep` (EX-v2-MOL-004).
- [ ] **A-05 — LOCK.** `VERSION_CERTIFICATE.json` + update `COMPONENT_REGISTRY.json` +
      fila LOCKED en `TRACEABILITY_MATRIX.md` + PR mergeado a `v2` con CI 7/7 verde.

---

## Especificaciones de diseño (M3)

- **Componente:** `IdentidadProfesional` — molécula (una tarjeta por eje de identidad).
- **BEM:** `.ex-identidad-profesional__elemento--modificador` (ver blueprint `bem_classes`).
- **Tokens:** exclusivo M3 — `primary`, `tertiary-container` / `on-tertiary-container` (estado activo),
  `secondary-container` / `on-secondary-container` (en desarrollo), `surface-container-low/high`,
  `outline-variant`, `on-surface` / `on-surface-variant`. **0 hex hardcoded** (ADR-002).
- **A11y:** WCAG 2.2 **AAA** (contraste 7:1), `role="article"` + `aria-label` por variante,
  navegación por teclado sin foco perdido, `axe-core` 0 violations.
- **i18n:** `next-intl` — textos de UI por `useTranslations`, contenido por props.

---

## Gate de éxito (LH-1..LH-4)

1. **LH-1 — Trazabilidad:** cada dato mostrado mapea a un ID de `USER_TASKS_MATRIX` (T-04 / T-06).
2. **LH-2 — Calidad:** `pnpm test` verde (incluye jest-axe), `pnpm build` verde, `pnpm lint` 0 errores.
3. **LH-3 — Diseño:** 0 inconsistencias BEM / tokens M3; Chromatic sin regresiones inesperadas.
4. **LH-4 — Registro:** `VERSION_CERTIFICATE.json` generado + `COMPONENT_REGISTRY` y
   `TRACEABILITY_MATRIX` actualizados.

---

## Fuera de alcance

- Migración de datos a Strapi (Ola 8 — Railway).
- Analytics / tracking → work-stream `EX-v2-ANALYTICS-001` (blueprint aparte).
- Cambios a `main` / v1.

---

📍 Momentum: M3 · Work-stream: SYNC-001 · Próximo paso: **A-01 (IC confirma copy) — pendiente por decisión explícita del IC, sin fecha**
