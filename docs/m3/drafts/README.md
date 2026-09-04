# Borradores no integrados — pendientes de ciclo BFL

Archivos generados por Forge (Aider + Ollama) que **no pasaron revisión de arquitectura**
y quedaban fuera de convenciones. Se sacaron de `src/` porque rompían `pnpm build`
(errores de parseo por artefactos markdown + dependencias/arquitectura sin aprobar).

Extensión `.draft` para que TypeScript (`tsconfig` incluye `**/*.ts[x]`) y ESLint los ignoren.

| Archivo | Origen | Por qué está aquí | Blueprint que lo reemplaza |
|---|---|---|---|
| `IdentidadProfesional.tsx.draft` | Forge — molécula | `import React, **{ useState }` y \`\`\` de cierre → parse error. Hex hardcodeado (`#01602D`), strings en JSX (viola i18n), código sin usar (error TS), archivo suelto sin carpeta-módulo. No se importa. | **`docs/m3/blueprints/BLUEPRINT_SPEC_EX-v2-MOL-008.json`** (creado 2026-09-03). Solo sirve como referencia visual de layout. |
| `analytics.ts.draft` | Forge — lib | \`\`\` de cierre → "Unterminated template literal". Depende de `posthog-js` + `@amplitude/analytics-browser` (no instalados); choca con `@vercel/analytics`; `posthog.init({...})` con firma incorrecta. | **`docs/m3/blueprints/BLUEPRINT_SPEC_EX-v2-ANALYTICS-001.json`** + `docs/m3/analytics/TRACKING_PLAN.md` (creados 2026-09-03). Decisión: PostHog solo, pendiente ADR-006. |

`superseded/` — los 12 `.md` sueltos que se consolidaron en bases canónicas (histórico, ver su `README.md`).

## Cómo retomar

```bash
# 1. Blueprint del componente/lib (rol Claude — Arquitecto)
# 2. Forge con el workflow multi-IA:
./multi-ia/workflow_bfl.sh            # auditoría previa
./multi-ia/workflow.sh "EX-v2-MOL-00X — IdentidadProfesional"
# 3. Lock: VERSION_CERTIFICATE.json + COMPONENT_REGISTRY + TRACEABILITY_MATRIX
```

Contexto: quedaron sin trackear en `v2` junto a `docs/m1/SYNC_*.md`, `docs/m3/IDENTIDAD_*.md`,
`docs/m3/PROCESOS_IDENTIDAD.md`, `docs/m3/PRODUCTION_MODULE.md`, `docs/sync_report.md`,
`docs/tracking-plan.md` — trabajo de reconciliación v1→v2 (GSD `SYNC-001`) en curso.
