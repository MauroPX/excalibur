# CHANGELOG — EXCALIBUR Design System
# SemVer | TITAN v7.0

## v2.0.0 — 2026-06-26
### Added
- Dark mode completo: 30+ tokens M3 (#C4BEFF primary, #0D0F1A surface)
- Light mode: paleta profesional (#5B4CF5 primary, #FDFCFF surface)
- Toggle dark/light con localStorage + prefers-color-scheme fallback
- ThemeToggle atom (EX-v2-ATOM-007)
- Script anti-flash en layout.tsx
- Storybook stories para 6 organismos faltantes

### Fixed
- DESIGN_TOKENS.json sincronizado con src/theme/tokens.ts
- 'use client' en HomeTemplate y CasePage (bug createContext SSR)

## v1.0.0 — 2026-06-15
### Added
- 6 átomos: Button · Tag · Badge · Icon · Metric · Chip
- 7 moléculas: NavTab · ProjectCard · SkillBar · TimelineStep · MetricRow · AudienceCard · RoadmapSplitButton
- 8 organismos: Hero · TitanRAGAgent · NavSystem · CasesSection · TitanSection · StackSection · ContactSection · InquisitorHUD
- 2 templates: HomeTemplate · CasePage
- Sistema BEM con prefijo ex-
- Tokens M3 light (versión inicial)
- Storybook @storybook/nextjs-vite
- 171 tests con jest-axe
