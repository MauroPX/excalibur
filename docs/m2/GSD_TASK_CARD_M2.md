# GSD_TASK_CARD_M2.md
# EXCALIBUR v2.0 — Punto de recuperación M2
# TITAN v7.0 | M2 | 2026-06-15
# Nivel: C (snapshot inmutable)

---

## Estado del Momentum

```
PROYECTO:    EXCALIBUR v2.0 — MauricioGO Portafolio
MOMENTUM:    M2 — Arquitectura & Design System
FECHA:       2026-06-15
ESTADO:      COMPLETE ✅
```

---

## Evidencias generadas

| Artefacto | Archivo | Nivel | Estado |
|---|---|---|---|
| DESIGN_SPEC | docs/m2/design/DESIGN_SPEC.md | B | ✅ GENERADO |
| DESIGN_TOKENS | docs/m2/design/DESIGN_TOKENS.json | A | ✅ FIRMADO |
| SPEC_DOCUMENT | docs/m2/spec/SPEC_DOCUMENT.md | A | ✅ FIRMADO |
| TRACEABILITY_MATRIX | docs/m2/spec/TRACEABILITY_MATRIX.md | B | ✅ GENERADO |
| GSD_TASK_CARD_M2 | docs/m2/GSD_TASK_CARD_M2.md | C | ✅ GENERADO |
| API_CONTRACTS | docs/m2/api/API_CONTRACTS.md | A | ✅ GENERADO |
| SCHEMA_SPEC | docs/m2/api/SCHEMA_SPEC.json | A | ✅ GENERADO |
| DATA_CONTRACT | docs/m2/api/DATA_CONTRACT.json | A | ✅ GENERADO |
| ARCHITECTURE_RECORD | docs/m2/arch/ARCHITECTURE_RECORD.md | A | ✅ GENERADO |
| OBSERVABILITY_PLAN | docs/m2/arch/OBSERVABILITY_PLAN.md | B | ✅ GENERADO |
| CI/CD v2.yml (copia) | docs/m2/cicd/v2.yml | B | ✅ COPIADO |

---

## Gate M2 → M3 — PASS ✅

```
✅ SPEC_DOCUMENT firmado PO + TL — 14 SPEC_IDs definidos
✅ DESIGN_SPEC — tokens M3 + BEM + WCAG por componente
✅ DESIGN_TOKENS.json v1.0.0 — paleta dark en tokens M3
✅ TRACEABILITY_MATRIX — SPEC_ITEM → rama → estado
✅ API_CONTRACTS — contratos Strapi → Next.js tipados
✅ SCHEMA_SPEC.json — schemas de todos los Content Types
✅ ARCHITECTURE_RECORD — ADRs activos documentados
```

**Resultado: 7/7 — GATE M2 SELLADO**

---

## Decisiones clave tomadas en M2

1. **MUI v6 + M3 tokens** — sin Tailwind, sin hex hardcoded (ADR-002).
   Todos los valores de color van por `var(--md-sys-color-*)`.

2. **BEM estricto** — `.ex-[bloque]__[elemento]--[modificador]`
   exacto al DESIGN_SPEC. Sin variaciones.

3. **Storybook 10 con @storybook/nextjs-vite** — a11y: 'error' en preview.
   Cualquier violación axe bloquea el CI/CD.

4. **33 SPEC_IDs planificados** — 14 completados en M3, 19 pendientes.

5. **Strapi v5 como CMS headless** — Content Types tipados en TypeScript
   desde SCHEMA_SPEC.json. Sin datos hardcodeados en el frontend.

6. **Protocolo de quota AI** — Claude → Gemini → fallback estático.
   Cede en 429/529/503/502/5xx/timeout (3s). Implementado en /api/chat.

---

## Contexto para M3

M3 ejecuta los SPEC_IDs mediante el ciclo BFL:
- BLUEPRINT → BLUEPRINT_SPEC.json + Gate 1 (BH-1..BH-6)
- FORGE → código + tests + stories + Gate 2 (12/12)
- LOCK → VERSION_CERTIFICATE.json + COMPONENT_REGISTRY + TRACEABILITY

Gate bloqueante para M4: 14/14 P0 SPEC_IDs en LOCKED.

---

📍 Momentum: M2 | Estado: COMPLETE → LOCKED
Firmado: Leonel Mauricio Gómez Ocampo — Staff Product Architect | 2026-06-15
