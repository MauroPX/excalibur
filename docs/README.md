# docs/ — Índice maestro · EXCALIBUR v2.0

> **La "base" del árbol de documentación.** Todo `.md` / `.json` de `docs/` debe estar
> listado aquí y asociado a un momentum o work-stream. Un archivo sin fila en este índice
> es un borrador — va a `docs/m3/drafts/` o se consolida.

## Convención de nombres

| Patrón | Significado |
|---|---|
| `*--[base].md` | Documento canónico de un work-stream (fuente de verdad). Frontmatter `base:` obligatorio. |
| `BLUEPRINT_SPEC_<SPEC_ID>.json` | Contrato de un componente/infra antes del Forge. |
| `VERSION_CERTIFICATE_<SPEC_ID>.json` | Sello de LOCK tras el Forge. |
| `GSD_TASK_CARD_<ID>.md` | Punto de recuperación de un momentum o work-stream. |
| `<SPEC_ID>_EXECUTION_LOG.md` | Bitácora paso a paso de una ejecución concreta. |

Frontmatter recomendado en cada doc nuevo: `base:`, `momentum:`, `nivel:`, `estado:`, `actualizado:`.

---

## Fuentes de verdad (leer primero)

| Doc | Rol |
|---|---|
| `m2/spec/TRACEABILITY_MATRIX.md` | Estado real repo vs. plan — qué está LOCKED |
| `m2/spec/SPEC_DOCUMENT.md` | Especificación funcional completa |
| `m1/USER_TASKS_MATRIX.md` | 4 audiencias × 14 tareas (T-01..T-14) — ancla de todo el contenido |
| `m2/design/DESIGN_TOKENS.json` | Tokens M3 (seed `#A47540`) — fuente para `src/theme/` |
| `m2/design/DESIGN_SPEC.md` | BEM + specs visuales por componente |
| `m3/certificates/COMPONENT_REGISTRY.json` | Registro de componentes + grafo de dependencias |

---

## M0 — Foundation ✅ SELLADO

| Doc | Contenido |
|---|---|
| `m0/PROJECT_MANIFEST.md` | Manifiesto del proyecto |
| `m0/GSD_TASK_CARD_M0.md` | Recuperación M0 |
| `m0/adr/ADR-001-stack.md` | Next 15 · React 19 · TS strict · pnpm |
| `m0/adr/ADR-002-design-system.md` | MUI v6 · M3 · Storybook · **sin Tailwind** |
| `m0/adr/ADR-003-backend.md` | Strapi v5 · PostgreSQL 16 · pgvector · Railway |
| `m0/adr/ADR-004-deploy.md` | `main` CONGELADO v1 · `v2` → Vercel |
| `m0/adr/ADR-005-ia-rag.md` | Claude API + pgvector RAG |
| `m0/compliance/QUALITY_POLICY.md` · `WCAG_COMMITMENT.md` | Políticas de calidad y a11y |
| `m0/security/SECURITY_POLICY.md` · `THREAT_MODEL_v0.md` · `THREAT_MODEL.md` | Seguridad |
| `m0/TITAN_SKILL_PERSUASION.md` | Skill APE de persuasión |

## M1 — Strategy ✅ SELLADO

| Doc | Contenido |
|---|---|
| `m1/STRATEGY_BRIEF.md` | Brief estratégico (firmado) |
| `m1/USER_TASKS_MATRIX.md` | Matriz de tareas por audiencia |
| `m1/TASK_JOURNEY_MAPS.md` · `CUSTOMER_JOURNEY_FULL.md` | Journeys |
| `m1/ROADMAP_v1.md` | 4 olas · feature branches |
| `m1/PRODUCT_BACKLOG.md` · `RISK_REGISTER.md` · `SEO_AIO_PLAN.md` | Backlog / riesgos / SEO |
| `m1/THREAT_MODEL.md` | Copia del threat model (gate M2) |
| `m1/APE_DECLARATION_M1.md` | Declaración APE — `APE_GATE_M1: PASS` |
| `m1/GSD_TASK_CARD_M1.md` | Recuperación M1 |
| **`m1/SYNC-001--Analysis--[base].md`** | 🔵 **Work-stream SYNC-001** — reconciliación contenido v1→v2 |

## M2 — Architecture ✅ SELLADO

| Doc | Contenido |
|---|---|
| `m2/spec/SPEC_DOCUMENT.md` · `TRACEABILITY_MATRIX.md` | Spec + matriz de trazabilidad |
| `m2/design/DESIGN_TOKENS.json` · `DESIGN_SPEC.md` · `DS_CONTRACT.md` · `CHANGELOG.md` | Design system |
| `m2/api/API_CONTRACTS.md` · `SCHEMA_SPEC.json` · `DATA_CONTRACT.json` | Contratos de API/datos |
| `m2/arch/ARCHITECTURE_RECORD.md` · `OBSERVABILITY_PLAN.md` | Arquitectura / observabilidad |
| `m2/cicd/v2.yml` | Copia del workflow CI |
| `m2/GSD_TASK_CARD_M2.md` | Recuperación M2 |

## M3 — Execution ⚙️ EN CURSO

| Doc | Contenido |
|---|---|
| `m3/blueprints/BLUEPRINT_SPEC_EX-v2-*.json` | Blueprints: CONTENT-001, I18N-002, THEME-002, UX-001, **MOL-008** (IdentidadProfesional), **ANALYTICS-001** |
| `m3/certificates/COMPONENT_REGISTRY.json` | Registro de 24 componentes LOCKED |
| `m3/certificates/*-CERTIFICATE.json` · `VERSION_CERTIFICATE_*.json` | Sellos de LOCK |
| `m3/certificates/GSD_TASK_CARD_*.md` | Task cards por componente (Setup, Button, Tag, Badge) |
| `m3/DS_GOVERNANCE_AUDIT.md` | 🔵 Auditoría de gobernanza del DS (color, imports, atomic data, tokens, stories) |
| `m3/COLOR_CONTRAST_AUDIT.md` | 🔵 Auditoría de contraste WCAG por rol — texto e iconos, light/dark |
| `m3/analytics/TRACKING_PLAN.md` | 🔵 **Work-stream ANALYTICS-001** — plan de tracking (PostHog) — LOCKED |
| `m3/GSD_TASK_CARD_SYNC-001.md` | 🔵 Task card work-stream SYNC-001 |
| `m3/SYNC-001_EXECUTION_LOG.md` | Bitácora de consolidación SYNC-001 (2026-09-03) |
| `m3/GSD_TASK_CARD_M3_TEMPLATE.md` | Plantilla de task card |
| `m3/M3_SETUP_GUIDE.md` · `SETUP_PLAN.md` · `PASO_A_PASO_COMPLETO.md` | Guías de setup M3 |
| `m3/SPRINT_CONSOLIDATED_REPORT.md` | Reporte consolidado de sprints |
| `m3/ape/APE_BATCH_M3_SUMMARY.md` | Resumen APE del batch M3 |
| `m3/audit/audit_individual.py` · `audit_ola.py` | Scripts de auditoría por componente/ola |
| `m3/audit/AUDIT_*.md` | Salidas de auditoría fechadas (generadas por `multi-ia/workflow_bfl.sh`) |
| `m3/drafts/` | Borradores fuera de convención — ver `m3/drafts/README.md` |

## M4 — Release 📦

| Doc | Contenido |
|---|---|
| `m4/MASTER_DOSSIER.md` · `RELEASE_NOTES_v2.0.0.md` · `MIGRATION_DOCUMENT_v2.0.0.md` | Dossier de release |
| `m4/PRODUCTION_READINESS_CHECKLIST.md` · `QUALITY_REPORT.md` | Checklists de producción |
| `m4/ACCESSIBILITY_AUDIT_REPORT.md` · `ACCESSIBILITY_CONFORMANCE_STATEMENT.md` | Auditoría a11y |
| `m4/SECURITY_ASSESSMENT.md` · `EVIDENCE_INVENTORY.md` | Seguridad / evidencia |
| `m4/audit/*.json` | Salidas crudas axe-core + Lighthouse |

## M5 — Operación 🔧

| Doc | Contenido |
|---|---|
| `m5/WEEKLY_HEALTH_REPORT_2026-W27.md` | Reporte semanal de salud |

## Nivel raíz — contexto y estrategia

| Doc | Contenido |
|---|---|
| `PRODUCT_CONTEXT_EXCALIBUR.md` · `ARCHITECTURE.md` · `DESIGN-SYSTEM.md` | Contexto de producto / arquitectura / DS |
| `ACCESSIBILITY.md` · `DESIGNOPS.md` | A11y y DesignOps |
| `ROLES_Y_SKILLS_PORTAFOLIO.md` · `EXPERIENCIA_PORTAFOLIO_BASE.md` · `PORTAFOLIO_AUDIENCE_RULE.md` | Contenido del portafolio |
| `TITAN_VS_MERCADO.md` · `BATTLECARD_TITAN_VS_MERCADO.md` · `TITAN_TONE_ORCHESTRATOR.md` | TITAN — posicionamiento y tono |
| `GSD_TASK_CARD_MASTER_EXCALIBUR.md` · `EXCALIBUR_DIAGNOSTICO_v2_BLUEPRINT.md` · `EXCALIBUR_AUDITORIA_TITAN_COMPLETA.md` | Master cards / diagnósticos |
| `EXCALIBUR_PROMPTS_LOOPS_CIERRE_100.md` | Prompts de cierre |

---

## Work-streams activos

| ID | Base | Estado | Próximo paso |
|---|---|---|---|
| **SYNC-001** | `m1/SYNC-001--Analysis--[base].md` | Gate 1 cerrado, Forge bloqueado | A-01: IC confirma copy de los 3 ejes vs. CV maestro — **pendiente por decisión explícita del IC** |
| **EX-v2-MOL-008** | `m3/blueprints/BLUEPRINT_SPEC_EX-v2-MOL-008.json` | BLUEPRINT_APPROVED (BH-1..6 PASS) | Forge bloqueado por A-01 (contenido, no arquitectura) |
| **EX-v2-ANALYTICS-001** | `m3/blueprints/BLUEPRINT_SPEC_EX-v2-ANALYTICS-001.json` | ✅ LOCKED | Configurar `NEXT_PUBLIC_POSTHOG_KEY`/`_HOST` en Vercel (no-op sin ellas) |

---

_Actualizado: 2026-09-03 · Mantener sincronizado al cerrar cada ola / work-stream._
