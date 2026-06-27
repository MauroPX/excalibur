# RELEASE_NOTES v2.0.0 — EXCALIBUR
# TITAN v7.0 | M4 | 2026-06-26

## Resumen
Primera versión completa del portafolio EXCALIBUR v2.0.
Reconstrucción total desde HTML estático a Next.js 15 + React 19.

## Qué incluye esta versión

### Frontend
- 24 componentes UI LOCKED (6 átomos · 7 moléculas · 8 organismos · 2 templates + 1 ThemeToggle)
- 171 tests pasando con jest-axe (0 violations)
- Storybook 10.4.6 con 52+ stories
- Tema dark/light con toggle persistente
- i18n ES/EN con next-intl
- RadarChart con Recharts en StackSection

### Contenido real
- 3 casos de estudio: FDN · Solidaria · BBVA
- Hero con métricas reales: +10 años · 4 países · 20+ proyectos · 654 fallas WCAG
- TitanRAGAgent con Claude Sonnet 4.6 + Gemini 2.0 Flash fallback

### Infraestructura
- CI/CD 7 jobs en GitHub Actions
- Vercel producción: excalibur-six-chi.vercel.app
- TITAN v7.0 Consejo Multi-IA configurado (5 roles → Ollama local)
- APE SKILL_PERSUASION activo (tríada aristotélica en proceso)

## Bugs resueltos
- createContext SSR: 'use client' en HomeTemplate + CasePage + theme/index.ts
- DESIGN_TOKENS.json sincronizado con tokens.ts (30+ tokens vs 6 anteriores)

## Pendiente para v2.1.0
- Railway + Strapi v5 + pgvector (backend real)
- Chromatic baseline aceptado
- Dominio propio
- ACCESSIBILITY_AUDIT_REPORT formal
- 17 proyectos adicionales en evidence-dna.json

## Stack
Next.js 15 · React 19.2.7 · TypeScript 5 · MUI v6.4
pnpm 11.2.2 · Node 24.15.0 · Storybook 10.4.6
Claude Sonnet 4.6 · Gemini 2.0 Flash
