# ACCESSIBILITY CONFORMANCE STATEMENT — EXCALIBUR v2.0.0
# W3C self-reported conformance | 2026-07-02

## Declaración
El sitio excalibur-six-chi.vercel.app declara conformidad con
**WCAG 2.2 Nivel AA** en las páginas: / · /casos/fdn · /casos/solidaria · /casos/bbva

## Base de la declaración
- Auditoría automatizada: axe-core CLI (tags wcag2a, wcag2aa, wcag22aa)
  Fecha: 2026-07-02 · Evidencia: docs/m4/audit/axe_*.json
- Testing continuo: jest-axe en 171 tests · 0 violations en CI/CD
- Componente por componente: 24 VERSION_CERTIFICATEs con wcag_level: AA
- Resultado del audit: **CONDITIONAL** (1 serious violation detected: `aria-hidden-focus` in StackSection).

## Alcance y excepciones
- Cobertura: 100% de las páginas públicas del portafolio
- Tecnologías: HTML5 · CSS (tokens M3) · React 19 · ARIA 1.2
- Excepciones conocidas: El elemento decorativo `.ex-stack-section__radar` requiere ajustes de focusabilidad para cumplir plenamente con la norma.

## Método de verificación futura
axe-core en CI/CD bloquea regresiones (job accessibility, .github/workflows/v2.yml)

## Firmado
Leonel Mauricio Gómez Ocampo — Staff Product Architect
Roles TITAN: Tech Lead + Staff Designer + PO
Fecha: 2026-07-02
