# ARCHITECTURE_RECORD.md
# EXCALIBUR v2.0 — Registro de Arquitectura
# TITAN v7.0 | M2 | 2026-06-15
# Nivel: A (inmutable sin RFC)

---

## Arquitectura v2 — Visión general

```
┌─────────────────────────────────────────────────────────────┐
│                    FRONTEND (Vercel)                        │
│  Next.js 15 · React 19 · TypeScript 5 strict               │
│  MUI v6 + M3 tokens · Storybook 10 · next-intl ES/EN       │
│                                                             │
│  Rama: v2 → Vercel (preview + producción)                   │
│  Node: 24.15.0 | pnpm: 11.2.2                              │
│                                                             │
│  src/app/                                                   │
│  ├── page.tsx              ← Home (Server Component)        │
│  ├── cases/[slug]/page.tsx ← Caso de estudio (SSR)          │
│  └── api/chat/route.ts     ← Chat multi-provider            │
│                                                             │
│  src/components/                                            │
│  ├── atoms/    (6 LOCKED)  ← Button · Tag · Badge ···      │
│  ├── molecules/ (5 LOCKED) ← NavTab · ProjectCard ···      │
│  └── organisms/ (2 LOCKED) ← Hero · TitanRAGAgent          │
└─────────────────────────────────────────────────────────────┘
                   ↕ REST API (ISR cache 1h)
┌─────────────────────────────────────────────────────────────┐
│                    BACKEND (Railway)                        │
│  Strapi v5 · PostgreSQL 16 + pgvector                      │
│                                                             │
│  Content Types:                                             │
│  Project · Experience · Skill · TitanModule                 │
│                                                             │
│  pgvector: embeddings de 20 proyectos para RAG             │
└─────────────────────────────────────────────────────────────┘
                   ↕ API Keys (server-side only)
┌─────────────────────────────────────────────────────────────┐
│                  IA / RAG (Cloud)                           │
│  Anthropic Claude Sonnet 4.6 → Gemini 2.0 Flash → static   │
│  Protocolo quota: cede en 429/529/5xx/timeout(3s)          │
│  TitanRAGAgent: interfaz conversacional en el frontend      │
└─────────────────────────────────────────────────────────────┘
```

---

## ADRs activos (inmutables sin RFC formal)

### ADR-001 — Stack principal
```
Stack:     Next.js 15 · React 19 · TypeScript 5 strict · pnpm 11
Rationale: App Router (RSC), Turbopack, streaming SSR.
           pnpm por performance y compatibilidad con Railway.
Estado:    ACTIVO | Fecha: 2026-06-15
```

### ADR-002 — Design System
```
Stack:     MUI v6 · M3 tokens · Storybook 10 · axe-core
           SIN Tailwind · SIN hex hardcoded
Rationale: MUI v6 es la versión estable con M3 soporte nativo.
           Tailwind genera conflictos con MUI en specificity.
           Los tokens M3 garantizan coherencia visual y a11y.
Estado:    ACTIVO | Fecha: 2026-06-15
```

### ADR-003 — Backend
```
Stack:     Strapi v5 · PostgreSQL 16 · pgvector · Railway
Rationale: Strapi v5 es headless con TypeScript nativo.
           pgvector permite embeddings para el RAG sin
           infraestructura adicional.
Estado:    ACTIVO — pendiente de setup | Fecha: 2026-06-15
```

### ADR-004 — Deploy
```
Producción: Vercel (rama v2)
Staging:    Preview URL automática por PR
Legacy:     main → Netlify (CONGELADO hasta que v2 esté lista)
Rationale:  Vercel tiene integración nativa con Next.js 15.
            main no se toca para mantener el portafolio operativo.
Estado:     ACTIVO | Fecha: 2026-06-15
```

### ADR-005 — IA y RAG
```
Stack:     Claude Sonnet 4.6 (primario) → Gemini 2.0 Flash
           (secundario) → fallback estático
           pgvector para embeddings de 20 proyectos
Rationale: Cadena de fallback garantiza 0 downtime en producción.
           Protocolo quota: cede en 429/529/5xx/timeout(3s).
           API keys nunca expuestas al cliente.
Estado:    ACTIVO (parcial — pgvector pendiente de Strapi) | Fecha: 2026-06-15
```

---

## Decisiones de arquitectura de componentes

### Atomic Design
```
atoms/      → componentes sin dependencias internas
molecules/  → componen ≥ 1 átomo
organisms/  → componen moléculas + lógica de negocio limitada
templates/  → layouts que ensamblan organismos
pages/      → templates con datos reales (Next.js pages)
```

### Convenciones de identidad en DOM
```html
data-atomic="atom|molecule|organism|template"
data-component="NombreComponente"
class="ex-[bloque]__[elemento]--[modificador]"  (BEM estricto)
```

### Rendering strategy
```
Server Components:  páginas, secciones con datos de Strapi
Client Components:  TitanRAGAgent, NavSystem (interactivo)
ISR:                proyectos, experiencia, skills (revalida 1h)
Static:             átomos, moléculas, organisms sin datos
```

---

## Estructura de ramas

```
main          → Netlify (v1.0 — CONGELADO)
v2            → Vercel (rama de integración — CI/CD 7/7)
feat/v2-*     → feature branches (merge via PR con CI/CD verde)
```

**Regla:** Ningún commit directo a `v2` ni a `main`. Siempre via `feat/v2-*` + PR.

---

## Inventario de infraestructura

| Servicio | Provider | Estado | URL |
|---|---|---|---|
| Frontend | Vercel | ✅ Activo | excalibur-v2.vercel.app |
| Backend Strapi | Railway | ❌ Pendiente | — |
| PostgreSQL + pgvector | Railway | ❌ Pendiente | — |
| Dominio propio | — | ❌ Pendiente M4 | maurogomez.design |
| Chromatic | Chromatic.com | ✅ Activo | — |
| CI/CD | GitHub Actions | ✅ Activo | 7 jobs |

---

📍 Momentum: M2 | Artefacto: ARCHITECTURE_RECORD | Nivel: A
Firmado: Leonel Mauricio Gómez Ocampo — Staff Product Architect | 2026-06-15
