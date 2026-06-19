# PRODUCT_BACKLOG.md
# EXCALIBUR v2.0 — Product Backlog Priorizado
# TITAN v7.0 | M1 | 2026-06-15
# Nivel: B (vivo — se actualiza en cada sprint)

---

## Leyenda

```
P0 — Bloqueante para producción (sin esto el portafolio no funciona)
P1 — Alto valor para el visitante (sin esto el portafolio no cumple su objetivo)
P2 — Mejora importante (sin esto el portafolio funciona pero subóptimo)
P3 — Nice to have (mejoras iterativas)
```

---

## ÉPICA 1 — Infraestructura y Setup (Ola 0)

| ID | Story | P | Estado | Rama | SPEC_ID |
|---|---|---|---|---|---|
| INF-001 | Setup Next.js 15 + MUI v6 + TS strict + pnpm | P0 | ✅ LOCKED | — | EX-v2-INFRA-001 |
| INF-002 | Theme M3 dark + tokens.ts + Roboto Flex | P0 | ❌ Pendiente | feat/v2-theme | EX-v2-THEME-001 |
| INF-003 | next-intl ES/EN + messages/es.json + messages/en.json | P1 | ❌ Pendiente | feat/v2-i18n | EX-v2-I18N-001 |
| INF-004 | Strapi API client + types.ts + fetch helpers | P1 | ❌ Pendiente | feat/v2-strapi | EX-v2-CMS-001 |
| INF-005 | CI/CD GitHub Actions 7 jobs | P0 | ✅ LOCKED | — | EX-v2-CICD-001 |

---

## ÉPICA 2 — Sistema de Diseño Atómico (Ola 1)

| ID | Story | P | Estado | SPEC_ID |
|---|---|---|---|---|
| DS-001 | Átomo Button — 4 variantes + loading + a11y | P0 | ✅ LOCKED | EX-v2-ATOM-001 |
| DS-002 | Átomo Tag — colores M3 + tamaños | P1 | ✅ LOCKED | EX-v2-ATOM-002 |
| DS-003 | Átomo Badge — dot + standard + colores | P1 | ✅ LOCKED | EX-v2-ATOM-003 |
| DS-004 | Átomo Icon — wrapper MUI + tamaños | P1 | ✅ LOCKED | EX-v2-ATOM-004 |
| DS-005 | Átomo Metric — value + label + trend | P0 | ✅ LOCKED | EX-v2-ATOM-005 |
| DS-006 | Átomo Chip — seleccionable + deletable | P1 | ✅ LOCKED | EX-v2-ATOM-006 |
| DS-007 | Molécula NavTab — icon + label + active | P0 | ✅ LOCKED | EX-v2-MOL-001 |
| DS-008 | Molécula ProjectCard — imagen + tags + métricas | P0 | ✅ LOCKED | EX-v2-MOL-002 |
| DS-009 | Molécula SkillBar — progreso + nivel | P1 | ✅ LOCKED | EX-v2-MOL-003 |
| DS-010 | Molécula TimelineStep — dot + connector + info | P1 | ✅ LOCKED | EX-v2-MOL-004 |
| DS-011 | Molécula MetricRow — grid de Metrics | P0 | ✅ LOCKED | EX-v2-MOL-005 |

---

## ÉPICA 3 — Secciones del Portafolio (Ola 2 / Ola 4)

| ID | Story | P | Estado | Rama | SPEC_ID |
|---|---|---|---|---|---|
| PORT-001 | Organismo Hero — headline + MetricRow + 1 CTA | P0 | ✅ LOCKED | — | EX-v2-HERO-001 |
| PORT-002 | Molécula AudienceCard — card de síntoma/rol | P0 | ❌ Pendiente | feat/v2-nav-system | EX-v2-MOL-006 |
| PORT-003 | Molécula RoadmapSplitButton — split button con status | P1 | ❌ Pendiente | feat/v2-stack-section | EX-v2-MOL-007 |
| PORT-004 | Organismo NavSystem — 4 tabs A+B+C+D | P0 | ❌ Pendiente | feat/v2-nav-system | EX-v2-ORG-002 |
| PORT-005 | Organismo CasesSection — grid 20 proyectos + filtros | P0 | ❌ Pendiente | feat/v2-cases | EX-v2-ORG-003 |
| PORT-006 | Organismo TitanSection — features v7.0 | P1 | ❌ Pendiente | feat/v2-titan-section | EX-v2-ORG-004 |
| PORT-007 | Organismo StackSection — radar + capas | P1 | ❌ Pendiente | feat/v2-stack-section | EX-v2-ORG-005 |
| PORT-008 | Organismo ContactSection — form + CTA | P0 | ❌ Pendiente | feat/v2-contact | EX-v2-ORG-006 |

---

## ÉPICA 4 — IA y A11Y (Ola 3)

| ID | Story | P | Estado | Rama | SPEC_ID |
|---|---|---|---|---|---|
| IA-001 | Organismo TitanRAGAgent — Claude + Gemini + fallback | P0 | ✅ LOCKED | — | EX-v2-RAG-001 |
| IA-002 | API /api/chat — multi-provider con protocolo quota | P0 | ✅ LOCKED | — | — |
| IA-003 | Organismo InquisitorHUD — migrar a organisms/ | P2 | ❌ Pendiente | feat/v2-inquisitor | EX-v2-A11Y-001 |

---

## ÉPICA 5 — Templates y Página (Ola 4+)

| ID | Story | P | Estado | Rama | SPEC_ID |
|---|---|---|---|---|---|
| TMPL-001 | HomeTemplate — ensambla todos los organismos | P0 | ❌ Pendiente | feat/v2-home-template | EX-v2-TMPL-001 |
| TMPL-002 | CasePage — página individual /cases/[id] | P1 | ❌ Pendiente | feat/v2-cases | EX-v2-TMPL-002 |

---

## ÉPICA 6 — Datos y Contenido

| ID | Story | P | Estado | Detalle |
|---|---|---|---|---|
| DATA-001 | Completar DNA: 20 proyectos en Strapi | P0 | ❌ Pendiente | Actualmente 7/20 |
| DATA-002 | CV Técnico descargable (PDF) | P1 | ❌ Pendiente | Basado en CV_V1_HUMAN_FIRST.md |
| DATA-003 | CV Ejecutivo descargable (PDF) | P1 | ❌ Pendiente | Basado en CV_V2_ATS_KILLER.md |
| DATA-004 | Textos en next-intl ES/EN | P1 | ❌ Pendiente | Depende de INF-003 |

---

## Orden de ejecución (prioridad de unblocking)

```
INF-002 (theme)       → desbloquea diseño visual real
INF-003 (i18n)        → desbloquea textos en portafolio
INF-004 (strapi)      → desbloquea datos dinámicos
PORT-002 (AudienceCard) → desbloquea NavSystem
PORT-004 (NavSystem)  → desbloquea la navegación completa
PORT-005 (CasesSection) → desbloquea el valor principal del portafolio
PORT-008 (Contact)    → desbloquea conversiones
TMPL-001 (HomeTemplate) → ensambla todo
DATA-001 (20 proyectos) → activa el RAG completo
```

---

## Velocidad estimada

| Ola | Stories P0 | Stories P1 | Días estimados |
|---|---|---|---|
| Ola 0 infra (pendiente) | 3 | 2 | 3-4 días |
| Ola 4 secciones | 4 | 4 | 5-7 días |
| Ola 5 templates | 2 | 0 | 2-3 días |
| Datos + contenido | 2 | 3 | 3-4 días |

**Total estimado para producción:** 13-18 días de desarrollo activo.

---

📍 Momentum: M1→M3 | Artefacto: PRODUCT_BACKLOG | Nivel: B
Última actualización: 2026-06-19 | Owner: Leonel Mauricio Gómez Ocampo
