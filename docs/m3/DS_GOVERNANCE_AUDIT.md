---
base: EX-v2-THEME-001 / DESIGN_SPEC
titulo: Auditoría de gobernanza del Design System — TITAN
momentum: M3
nivel: A
estado: APLICADA (2026-09-03, extendida 2026-09-04 — generador de tokens + stories de templates)
rama: fix/v2-ds-governance · feat/v2-analytics-posthog (extensión)
alcance: src/components/** · src/theme/** · src/app/globals.css · docs/m2/design/** · scripts/** · .storybook/**
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
| 10 | Cada componente LOCKED con `.tsx + index.ts + .test + .stories + blueprint + CERT` | ⚠️ 3 gaps | ✅ 0 gaps (stories de templates añadidas 2026-09-04 — ver §D) |
| 11 | Cada componente LOCKED con fila en `TRACEABILITY_MATRIX` | ❌ falta ATOM-007 | ✅ añadida |
| 12 | Fuente única de tokens (generador, no mantenimiento a mano) | ❌ no existía | ✅ `scripts/generate-tokens.mjs` + `pnpm tokens:generate`/`tokens:check` — ver §G |
| 13 | Stories renderizan de verdad en Storybook (no solo compilan) | ❌ `useTranslations()` sin provider rompía CasesSection/ContactSection/HomeTemplate en runtime | ✅ decorator global `NextIntlClientProvider` en `.storybook/preview.tsx` — ver §D |

Verificación final (2026-09-04): `pnpm lint` 0 · `pnpm test` 181/181 (25 archivos) · `pnpm build` 0 · `pnpm build-storybook` 0 · `workflow_bfl.sh audit` 97%.

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
| `templates/HomeTemplate/` y `templates/CasePage/` sin `.stories.tsx` (la matriz decía `✅` — falso) | ✅ **Añadidas 2026-09-04**, con datos reales del portafolio (mismos fixtures que los `.stories.tsx` de cada organismo / que `src/app/casos/[slug]/page.tsx`). HomeTemplate: 2 stories. CasePage: 4 stories (FDN, Solidaria, BBVA, sin siguiente caso). No incluyen Loading/Empty/Error porque estos templates no tienen esos estados — son composición estática de props, no fetch. |
| `infra/Setup/` sin `.tsx/.test/.stories` | ✅ Esperado — es infra (sin componente UI). |
| **Bug de runtime descubierto:** `CasesSection`/`ContactSection` (y por herencia `HomeTemplate`) llaman `useTranslations()` sin `NextIntlClientProvider` en Storybook. `pnpm build-storybook` nunca lo detectó porque *empaqueta*, no *renderiza* cada story. | ✅ Decorator global en `.storybook/preview.tsx` con los mensajes reales de `es.json` (mismo patrón que el fix de `4f6ab9e` para los tests). Verificado con un smoke test temporal (render real de `HomeTemplate` con los 2 stories, sin throw) — no se commitea, era solo para esta verificación. |

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

**Riesgo residual — resuelto 2026-09-04.** Las 3 fuentes se mantenían **a mano**; nada garantizaba
que siguieran en sync. Se construyó `scripts/generate-tokens.mjs`: `DESIGN_TOKENS.json` (fuente
única) → genera `tokens.ts` + el bloque de color de `globals.css`. `pnpm tokens:generate` escribe,
`pnpm tokens:check` audita sin escribir (falla con exit 1 si hay drift — listo para CI, no
wireado en `.github/workflows/v2.yml` por decisión de no tocar CI sin pedido explícito).

**El generador encontró un bug real en el primer run:** `--md-sys-color-primary-rgb` en
`[data-theme="light"]` de `globals.css` valía `132, 84, 22` (el RGB de `#845416`, que es
`inverse-primary` de **dark** mode) en vez de `80, 46, 0` (el RGB correcto del `primary` de
**light** mode, `#502E00`). Consecuencia real: `rgba(var(--md-sys-color-primary-rgb), 0.08)`
en el hover de `Button`/`NavTab` en **light mode** pintaba con el tinte equivocado. Corregido
por el propio generador al escribir. Esto es exactamente la clase de bug que motivó construirlo.

## F. TRACEABILITY_MATRIX — correcciones

| Fila | Antes | Después |
|---|---|---|
| `EX-v2-ATOM-007` ThemeToggle | ausente de la tabla COMPONENTES | añadida (LOCKED, Ola 5) |
| `EX-v2-TMPL-001/002` columna `.stories` | `✅` (falso) | `—` (2026-09-03) → `✅` real (2026-09-04, stories añadidas) |
| `EX-v2-MOL-008` / `EX-v2-ANALYTICS-001` (work-streams) | DRAFT / BLUEPRINT | BLUEPRINT_APPROVED / LOCKED — ver `SYNC-001_EXECUTION_LOG.md` y `ADR-006-analytics.md` |
| Sección "DS — Gobernanza" | — | resumen de esta auditoría, extendido 2026-09-04 |

> No se refrescó el resto de la matriz (conteos de test "171", "Ola activa: 2") — eso es tarea
> de un LOCK de ola, no de esta auditoría de DS.

---

## Deuda registrada

| Item | Estado | Nota |
|---|---|---|
| Stories de templates (HomeTemplate, CasePage) | ✅ Resuelto 2026-09-04 | datos reales del portafolio; sin Loading/Empty/Error (no aplican — sin fetch) |
| Generador DTCG de tokens | ✅ Resuelto 2026-09-04 | `scripts/generate-tokens.mjs` — encontró y corrigió el bug de `primary-rgb` arriba |
| Decorator i18n global en Storybook | ✅ Resuelto 2026-09-04 | destapaba un throw en runtime no detectado por el build |
| `pnpm tokens:check` en CI | ⏸️ No bloqueante | script listo; wiring a `.github/workflows/v2.yml` pendiente de pedido explícito del IC |
| i18n del `aria-label` de ThemeToggle | baja | deuda transversal `EX-v2-I18N-001` (componentes con strings fijos) |
| Contraste de texto/iconos por rol, validado contra uso real | ✅ Resuelto 2026-09-04 | ver `docs/m3/COLOR_CONTRAST_AUDIT.md` — 42/48 pares AAA + 36/36 combos icono/texto reales AAA |
| Esquemas medium/high-contrast | baja | hoy solo base light/dark; natural si a11y es diferenciador |

---

## H. Contraste de texto e iconos por rol

Verificación independiente (no se tomó de un commit previo) con la fórmula WCAG de luminancia
relativa, cruzada contra el **uso real** de cada token en `src/components/`. Documento completo:
**`docs/m3/COLOR_CONTRAST_AUDIT.md`**.

Resumen: 42/48 pares semánticos en AAA (los 6 restantes — `fixed-dim`/`on-fixed-variant` — están
en AA y **no se usan en ningún componente hoy**, sin brecha activa). Los 3 puntos donde el código
pasa un color explícito a un icono/texto de apoyo (`primary` en `AudienceCard`/`SkillBar`,
`on-surface-variant` en `NavTab` inactivo) se verificaron contra las 6 superficies reales donde
se renderizan × 2 modos = 36 combinaciones, **36/36 en AAA**. Confirmado también que el cambio
light↔dark es correcto **por construcción** (fuente única de tokens + 0% hex hardcodeado + un
solo mecanismo de swap vía `[data-theme]`), no solo "correcto hoy por casualidad".

---

📍 Momentum: M3 · Auditoría de DS · **gobernanza aplicada al 100% — color, imports, atomic data, fuente de tokens, stories de templates y contraste texto/iconos**
