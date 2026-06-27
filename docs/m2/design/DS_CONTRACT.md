# DS_CONTRACT.md — EXCALIBUR v2.0
# TITAN v7.0 | SKILL_DS_CONTRACT | 2026-06-26
# Firmado: Staff Product Architect (DS + TL)

---

## Configuración

| Campo | Valor |
|---|---|
| Prefijo BEM | `ex-` (excalibur) |
| Framework | React 19 + Next.js 15 |
| Component library | MUI v6 |
| Storybook adapter | @storybook/nextjs-vite |
| Token source | src/theme/tokens.ts → docs/m2/design/DESIGN_TOKENS.json |
| Versión actual | v2.0.0 |
| Estrategia | BUILD desde cero (opción C — dentro del producto) |

## Las 10 Reglas Irrevocables

1. `data-atomic` + `data-component` + `className ex-*` en CADA elemento raíz
2. NUNCA hex hardcoded — solo `var(--md-sys-color-*)`
3. `shouldForwardProp` en props custom de styled()
4. TypeScript strict — zero `any`
5. Export named + export default en cada componente
6. Import MUI por módulo (tree-shaking): `import Button from '@mui/material/Button'`
7. Stories desde `@storybook/nextjs-vite` — NO `@storybook/react`
8. axe() en cada test — `expect.extend(toHaveNoViolations)`
9. Átomos no importan otros componentes del DS
10. Templates no fetchan datos — solo reciben props

## Proceso RFC

1. Abrir `docs/m2/design/DS_RFC_NNN_nombre.md`
2. Review TL en máximo 3 días
3. Branch `ds/v[version]/[nombre]`
4. PR con story + test + axe + CHANGELOG entry
5. Merge + tag de versión SemVer

## Excepciones documentadas

| Componente | Regla | Excepción | Justificación |
|---|---|---|---|
| Button | Regla 2 | `rgba(0,0,0,0.12)` en `.Mui-disabled` | MUI sobreescribe tokens en estados disabled |

## Firmado

Staff Product Architect — Leonel Mauricio Gómez Ocampo — 2026-06-26
