# ADR-002 — Design System Strategy
# EXCALIBUR v2.0 | TITAN v7.0 | 2026-06-15
# Estado: ACCEPTED | Nivel: A (inmutable sin RFC)

## Decisión
**Strategy: ADOPT + EXTEND**
MUI v6 + M3 Tokens (titanThemeDark / titanThemeLight) + Storybook 8
Sin Tailwind. @mui/system reemplaza completamente las utilidades de layout.

## Stack DS

| Paquete | Versión | Rol |
|---|---|---|
| @mui/material | ^6.4.0 | Componentes base (React 19 compatible) |
| @mui/system | ^6.4.0 | sx prop — reemplaza Tailwind |
| @emotion/react | ^11.13.0 | CSS-in-JS engine |
| @storybook/react | ^8.4.0 | Componentes en aislamiento |
| @storybook/addon-a11y | ^8.4.0 | axe-core automático por story |
| @storybook/addon-docs | ^8.4.0 | MDX inline por componente |
| @storybook/addon-themes | ^8.4.0 | Toggle dark/light en canvas |
| @storybook/addon-viewport | ^8.4.0 | Breakpoints 375/768/1440/1920 |
| @chromatic-com/storybook | latest | Visual diff por PR |

## Estructura Atomic Design
```
atoms/      Button · Tag · Badge · Metric · Icon · Chip
molecules/  NavTab · ProjectCard · SkillBar · TimelineStep · MetricRow
organisms/  Hero · NavSystem · CaseStudy · TitanSection · InquisitorHUD · TitanRAGAgent
templates/  PortfolioPage · CasePage
```

## Estados obligatorios por story
Default · Hover · Focus · Disabled · Loading · DarkTheme · Mobile375 · Español · AllVariants

## Gate de PR (BFL Lock)
- [ ] Stories con todos los estados obligatorios
- [ ] axe-core 0 violations en addon-a11y
- [ ] WCAG 2.2 contraste AA en dark + light verificado
- [ ] TypeScript strict: 0 any, 0 type assertions sin justificación
- [ ] MDX doc con decisión de diseño + ADR referenciado
- [ ] Chromatic: visual diff aprobado
- [ ] Sin Tailwind: solo MUI + sx prop
- [ ] Barrel export: index.ts por componente

## Integración casos de estudio
- **Solidaria DS** → Storybook propio en Chromatic. CTA "Ver DS en vivo" desde el caso de estudio.
- **Simón v2** → Link al repo + FINAL_RELEASE_CERTIFICATE.json como evidencia TITAN v7.0.

## Firmado
Leonel Mauricio Gómez Ocampo — Staff Product Architect + Staff Designer | 2026-06-15
