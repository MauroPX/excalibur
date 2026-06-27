# PROJECT_MANIFEST.md
# EXCALIBUR v2.0 — Portafolio Profesional
# TITAN v7.0 | Momentum: M0 | Fecha: 2026-06-15
# Firmado: Staff Product Architect (PO + TL + DS)

---

## Identidad del producto

| Campo | Valor |
|---|---|
| Nombre | MauricioGO — Portafolio Profesional v2 |
| Repositorio | github.com/MauroPX/excalibur |
| Rama producción | v2 → Vercel (producción activa) |
| Rama v2 | feat/v2-sprint-abcd → Vercel (desarrollo) |
| Owner | Leonel Mauricio Gómez Ocampo |
| Rol | Staff Product Architect |
| Fecha inicio | 2026-06-15 |

---

## Problema que resuelve

El portafolio actual (main) tiene tres problemas críticos:

1. **Arquitectura iframe** — el contenido vive en `public/original/index_clean.html` (3,325 líneas HTML estático) servido dentro de un iframe con `overflow: hidden`. Las secciones en scroll son invisibles porque los `IntersectionObserver` nunca disparan dentro del iframe.
2. **DNA incompleta** — el TitanRAGAgent tiene 7 de ~20 proyectos. El agente no puede responder sobre el 65% de la trayectoria real.
3. **TITAN v5.0 en producción** — el sistema actual es v7.0. El portafolio no refleja el estado real del framework.

---

## Solución propuesta

Reconstrucción completa desacoplada:

- **Frontend**: Next.js 15 + React 19 + MUI v6 + M3 Tokens + Storybook 8 — rama `v2` → Vercel
- **Backend**: Strapi v5 + PostgreSQL 16 + pgvector — Railway
- **IA**: Claude Sonnet 4.6 API + RAG con 20 proyectos completos
- **Sin iframe**: todo el contenido migrado a componentes React nativos

---

## Audiencias

| Audiencia | Entrada | Qué busca |
|---|---|---|
| Cliente / C-level | Por síntoma / problema | ¿Resuelve mi problema específico? |
| Reclutador / HR | Por rol / label | ¿Tiene el perfil que busco? |
| Comunidad técnica | Explorar / profundidad | ¿Cómo funciona TITAN? ¿Qué stack usa? |
| Candidato neutral | Conversacional con IA | No sabe qué busca exactamente |

---

## Métricas de éxito

| Métrica | Baseline actual | Objetivo v2 |
|---|---|---|
| Secciones visibles en scroll | ~40% | 100% |
| Proyectos en RAG | 7 | 20+ |
| LCP | 25.2s (FDN-like) | < 1.5s |
| WCAG violations | Desconocido (iframe) | 0 (axe-core en CI/CD) |
| TITAN versión mostrada | v5.0 | v7.0 |

---

## Casos de estudio incluidos

| Proyecto | Sector | Rol | Evidencia TITAN |
|---|---|---|---|
| BBVA Colombia & Panamá | Banca & Fintech | Staff Product Architect | docs/ en repo simon-v2-monitor (referencia) |
| FDN | GovTech | Consultor A11Y + Arquitecto | CONFORMANCE_STATEMENT + LCP −90% |
| Solidaria Portal | Insurtech | Staff Product Architect | github.com/MauroPX/solidaria-portal |
| Simón v2 Monitor | Movilidad / IoT | Design Engineer | github.com/MauroPX/simon-v2-monitor |
| Correos Chile (Merken) | Logística | Design Lead | Framework +400 componentes |
| FID Seguros Chile | Insurtech | Lead Product Designer | 1,109 inspecciones + DS |
| Nivelics / UniLaSalle | EdTech | Staff Architect | WCAG 2.2 AAA + Multi-LLM |
| Ruedaz | Mobility SuperApp | Senior UX Designer | 5 plataformas + PLG |
| Redeban | Fintech | Senior UX + Procesos | $48.9M COP modernización |
| Colsanitas | HealthTech | UX Designer | 58 variables clínicas |
| PROCOLOMBIA | GovTech | UX Designer | SSO global |
| Ecopetrol | Oil & Gas | UX Designer | DS institucional |
| SI-CLO / IDPay | Fintech | Consultor UX + Datos | Ley 1527 + wizard 6 pasos |
| ADL Digital Labs | EdTech | Product Designer | 46 estudiantes validación campo |
| SuRed | Fintech | (via DNA) | JWT + JasperReports |
| TVS+ | Salud | (via DNA) | Terminal Virtual Sanitario |
| Old Mutual / Skandia | Seguros | Senior UX | Portal clientes |
| Dacartec | Multi-sector | Senior UX | Base 2017–2020 |

---

## Stack técnico decidido

| Capa | Tecnología | ADR |
|---|---|---|
| Frontend | Next.js 15 + React 19 + TypeScript 5 | ADR-001 |
| Design System | MUI v6 + M3 Tokens + Storybook 8 | ADR-002 |
| Backend / CMS | Strapi v5 + PostgreSQL 16 + pgvector | ADR-003 |
| Deploy | v2 → Vercel / main → Netlify (sin tocar) | ADR-004 |
| IA / RAG | Claude Sonnet 4.6 API | ADR-005 |
| i18n | next-intl (ES + EN nativo) | ADR-002 |

---

## Scope explícito

### Dentro del scope v2
- Migración completa del HTML estático a componentes Next.js nativos
- Sistema de navegación por audiencias (A: síntoma, B: rol, C: IA, D: explorar)
- DNA completa con 20 proyectos en Strapi + RAG
- TITAN v7.0 showcase actualizado
- InquisitorHUD y TitanRAGAgent migrados como componentes nativos
- Storybook 8 con todos los componentes documentados
- Bilingüe ES/EN nativo con next-intl

### Fuera del scope v2
- Rediseño visual (se mantiene identidad dark actual)
- E-commerce o pagos
- Blog o CMS editorial
- App móvil nativa

---

## Firmado

| Rol | Nombre | Fecha |
|---|---|---|
| PO / Product Owner | Leonel Mauricio Gómez Ocampo | 2026-06-15 |
| TL / Tech Lead | Leonel Mauricio Gómez Ocampo | 2026-06-15 |
| DS / Staff Designer | Leonel Mauricio Gómez Ocampo | 2026-06-15 |

*Proyecto Individual Contributor — los tres roles recaen en el mismo profesional.*

---

📍 Momentum: M0 | Artefacto: PROJECT_MANIFEST | Nivel: A (inmutable sin RFC)
