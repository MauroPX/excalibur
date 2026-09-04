---
base: EX-v2-THEME-001 / DESIGN_SPEC
titulo: Auditoría de gobernanza del Design System — TITAN
momentum: M3
nivel: A
estado: APLICADA (2026-09-03)
rama: fix/v2-ds-governance
alcance: src/components/** · src/theme/** · src/app/globals.css · docs/m2/design/**
---

# Auditoría de gobernanza del Design System — EXCALIBUR v2.0

Barrido completo contra las **prohibiciones y convenciones de `CLAUDE.md`** + `agent_rules.md`
+ `ADR-002`. Cierra el punto P3 ("¿está aplicada toda la gobernanza TITAN del DS, incluido el
atomic data?"). 24 componentes LOCKED auditados uno por uno.

## Resumen

| # | Regla de gobernanza | Antes | Después |
|---|---|---|---|
| 1 | 0 hex hardcodeado en código productivo | ✅ 0 | ✅ 0 |
| 2 | 0 colores nombrados CSS (`red`, `white`...) | ✅ 0 | ✅ 0 |
| 3 | 0 `rgba()/rgb()` con literal numérico de color | ❌ 5 (Button, Chip, ProjectCard) | ✅ 0 — tokenizados |
| 4 | Imports por módulo `@mui/material/X` (ADR-002) | ❌ 22 archivos con barrel | ✅ 0 — migrados + regla ESLint `error` |
| 5 | `data-atomic` en cada componente | ✅ 24/24 | ✅ 24/24 |
| 6 | `data-component` en cada componente | ✅ 24/24 | ✅ 24/24 |
| 7 | Clase BEM `ex-*` en el root de cada componente | ✅ 24/24 | ✅ 24/24 |
| 8 | Paridad de tokens `DESIGN_TOKENS.json` ↔ `tokens.ts` ↔ `globals.css` | ✅ 50×2, 0 diff | ✅ 50×2, 0 diff (+ `--*-rgb` derivados) |
| 9 | `darkTokens` y `lightTokens` con el mismo set de roles | ✅ 50 = 50 | ✅ 50 = 50 |
| 10 | Cada componente LOCKED con `.tsx + index.ts + .test + .stories + blueprint + CERT` | ⚠️ 3 gaps | ⚠️ 1 gap (stories de templates — ver §D) |
| 11 | Cada componente LOCKED con fila en `TRACEABILITY_MATRIX` | ❌ falta ATOM-007 | ✅ añadida |

Verificación final: `pnpm lint` 0 · `pnpm test` 176/176 · `pnpm build` 0 · `pnpm build-storybook` 0 · `workflow_bfl.sh audit` 97%.

---

## A. Colores hardcodeados → tokens M3

**Hallazgo:** 5 usos de `rgba()` con literal numérico (viola "NUNCA hex hardcoded → var(--md-sys-color-[role])"; un `rgba(0,0,0,x)` fijo es un color hardcodeado y además **incorrecto en dark mode**).

| Archivo | Antes | Después |
|---|---|---|
| `atoms/Button/Button.tsx` (disabled bg/text/border) | `rgba(0,0,0,0.12)` · `rgba(0,0,0,0.38)` | `rgba(var(--md-sys-color-on-surface-rgb), 0.12 / 0.38)` |
| `atoms/Button/Button.tsx` (cta shadow) | `rgba(0,0,0,0.2)` | `rgba(var(--md-sys-color-shadow-rgb), 0.2)` |
| `atoms/Chip/Chip.tsx` (hover shadow) | `rgba(0,0,0,0.1)` | `rgba(var(--md-sys-color-shadow-rgb), 0.1)` |
| `molecules/ProjectCard/ProjectCard.tsx` (glass highlight) | `rgba(255,255,255,0.05)` | `rgba(var(--md-sys-color-on-surface-rgb), 0.05)` |
| `molecules/ProjectCard/ProjectCard.tsx` (hover shadow) | `rgba(0,0,0,0.3)` | `rgba(var(--md-sys-color-shadow-rgb), 0.3)` |

**Token nuevo:** `--md-sys-color-shadow-rgb: 0, 0, 0` en `globals.css` (`:root` + `[data-theme="light"]`),
derivado del rol M3 `shadow` (`#000000`). Se suma a los `--*-rgb` ya existentes (`primary`, `surface`,
`on-surface`, `outline`) — variantes numéricas para overlays con opacidad; **no** son roles M3 nuevos,
son derivados de la paleta canónica.

> Mejora colateral: el estado disabled del Button ahora se adapta a light/dark en vez de asumir fondo claro.

## B. Imports MUI — barrel → por módulo (ADR-002)

**Hallazgo:** 22 archivos productivos + 6 de test importaban del barrel `@mui/material` (rompe tree-shaking).

- **22 `.tsx` productivos** migrados: `import { Box, Typography } from '@mui/material'` → `import Box from '@mui/material/Box'` + `import Typography from '@mui/material/Typography'`. `SvgIconProps` → `import type { SvgIconProps } from '@mui/material/SvgIcon'`.
- **6 tests** migrados: `ThemeProvider, createTheme` → `@mui/material/styles` (entry-point canónico, no barrel); `SvgIcon` → `@mui/material/SvgIcon`.
- **Enforcement:** regla `no-restricted-imports` (`error`) en `eslint.config.mjs` para `@mui/material` — la convención deja de ser "en papel" y CI la bloquea a futuro.

Sin cambios de comportamiento (mismos módulos, otra ruta). `pnpm build` + `pnpm test` verdes tras la migración.

## C. Atomic data — `data-atomic` / `data-component`

**✅ Sin hallazgos.** Los 24 componentes emiten en su elemento root:
`data-atomic="atom|molecule|organism|template"` + `data-component="<Nombre>"`.
Verificado con barrido por carpeta. La regla de identidad DOM del blueprint (`dom_identity`) está aplicada al 100%.

## D. Estructura de carpeta por componente

| Gap | Estado |
|---|---|
| `atoms/ThemeToggle/` sin `.blueprint.json` (el `VERSION_CERTIFICATE` lo referenciaba → ref rota) | ✅ **Reconstruido** desde el componente + formato `AudienceCard.blueprint.json`. BH-1..6 documentados. |
| `templates/HomeTemplate/` y `templates/CasePage/` sin `.stories.tsx` (la matriz decía `✅`) | 📝 **Matriz corregida** a `—`. Recomendación de follow-up: stories de template con estados Loading/Empty/Error/HappyPath (estilo BCS `bcs-frontend`). No se generan a medias solo por cerrar la casilla. |
| `infra/Setup/` sin `.tsx/.test/.stories` | ✅ Esperado — es infra (sin componente UI). |

## E. Paridad y estructura de tokens

**✅ Paridad perfecta** entre las 3 fuentes (script de verificación en el commit):

```
DESIGN_TOKENS.json  dark=50  light=50
tokens.ts           dark=50  light=50   ← 0 diferencias vs JSON
globals.css :root/[data-theme=light]    ← 0 diferencias vs JSON y vs tokens.ts
```

- `darkTokens` y `lightTokens` tienen exactamente las mismas 50 claves.
- Seed `#A47540` (Material Theme Builder, 2026-09-03) declarado en las 3 fuentes.
- `cta` / `on-cta` documentados como alias no-estándar del rol `tertiary` (comentado en `tokens.ts`).

**Riesgo residual (preventivo, no conflicto):** las 3 fuentes se mantienen **a mano**. Hoy 0 drift,
pero nada lo garantiza. Recomendación: generador `DESIGN_TOKENS.json (DTCG) → tokens.ts + globals.css`
(patrón `tokens:generate` de `bcs-frontend`). Eliminaría esta clase de bug (fue la causa de los 3
fallos falsos de auditoría del 2026-09-03).

## F. TRACEABILITY_MATRIX — correcciones

| Fila | Antes | Después |
|---|---|---|
| `EX-v2-ATOM-007` ThemeToggle | ausente de la tabla COMPONENTES | añadida (LOCKED, Ola 5) |
| `EX-v2-TMPL-001/002` columna `.stories` | `✅` | `—` (+ nota) |
| Sección nueva "DS — Gobernanza (2026-09-03)" | — | resumen de esta auditoría |

> No se refrescó el resto de la matriz (conteos de test "171", "Ola activa: 2", "i18n no existe") —
> eso es tarea de un LOCK de ola, no de esta auditoría de DS.

---

## Deuda registrada (no bloqueante)

| Item | Prioridad | Nota |
|---|---|---|
| Stories de templates (Loading/Empty/Error/Happy) | media | estilo BCS; los templates ya tienen `.test` de integración |
| Generador DTCG de tokens | media | preventivo anti-drift |
| i18n del `aria-label` de ThemeToggle | baja | deuda transversal `EX-v2-I18N-001` (componentes con strings fijos) |
| Esquemas medium/high-contrast | baja | hoy solo base light/dark; natural si a11y es diferenciador |

---

📍 Momentum: M3 · Auditoría de DS · **gobernanza aplicada al 100% en color, imports y atomic data**
