# ADR-001 — Stack Decisión Frontend
# EXCALIBUR v2.0 | TITAN v7.0 | 2026-06-15
# Estado: ACCEPTED | Nivel: A (inmutable sin RFC)

## Contexto
El portafolio actual sirve contenido en un iframe de HTML estático (3,325 líneas).
La decisión de stack para v2 es estructural — afecta todas las features de M3 en adelante.

## Decisión
**Next.js 15 + React 19 + TypeScript 5 strict + pnpm**
Sin Tailwind. Sin iframe. Todo el contenido como componentes React nativos.

## Opciones evaluadas

| Opción | Decisión | Razón |
|---|---|---|
| Next.js 15 App Router | ✅ ELEGIDA | RSC, API Routes, SSG/SSR, SEO nativo |
| Remix | ❌ | Menor ecosistema LATAM |
| Astro | ❌ | Sin interactividad nativa para RAG agent |
| SvelteKit | ❌ | Menor soporte para MUI |

## Consecuencias
- SSR nativo → contenido indexable por Google (hoy el iframe lo oculta)
- API Routes → Claude Sonnet integrado sin backend separado para el RAG
- App Router → layouts nested por audiencia (C-level / reclutador / comunidad)

## Firmado
Leonel Mauricio Gómez Ocampo — Staff Product Architect | 2026-06-15
