# ACCESSIBILITY_AUDIT_REPORT — EXCALIBUR v2.0.0
## Metodología: axe-core CLI · tags wcag2a+wcag2aa+wcag22aa · 2026-07-02

## Páginas auditadas:
- /
- /casos/fdn
- /casos/solidaria
- /casos/bbva

## Resultados por página:

| Página | Critical | Serious | Moderate | Minor |
| ------ | -------- | ------- | -------- | ----- |
| /      | 0        | 1        | 0        | 0     |
| /casos/fdn | 0       | 0        | 0        | 0     |
| /casos/solidaria | 0       | 0        | 0        | 0     |
| /casos/bbva | 0       | 0        | 0        | 0     |

## Detalle por violation encontrada:

- **Serious**
  - WCAG ID: aria-hidden-focus
    - Componente afectado: `.ex-stack-section__radar` (StackSection)
    - Fix aplicado o plan: Ajustar el elemento decorativo para asegurar que no sea focusable (aria-hidden="true" en elemento no focusable).

## Lighthouse baseline:
- Accessibility Score: 95%
- Best Practices Score: 100%
- Performance Score: 88%
- SEO Score: 100%
- Largest Contentful Paint (LCP): 3.2s
- Cumulative Layout Shift (CLS): 0

## Cadena PATHOS:
- Este audit verifica el Insight 1 de APE_M1.
- El reclutador necesita evidencia técnica verificable — este reporte ES esa evidencia.

## Veredicto: CONDITIONAL
(Pendiente la resolución de la violación `aria-hidden-focus` en la Home para alcanzar el estado PASS).

## Firmado:
Staff Product Architect — 2026-07-02
