/**
 * Caso de cliente — FID Seguros Generales (Chile) · SmartJob (2024-2025). — versión EN (traducción de es/clients/fid-seguros.ts)
 * Fuente: docs/m1/CONTENT_COPY_STRATEGY.md §5 / §7.5
 * + docs/Career_Dossier/CONSOLIDACION_MAESTRA §4 / CAREER OS SSOT CAPA 2.5
 * + docs/Career_Dossier/[2024]--FID_Seguros_Chile.md.
 * Reconciliación (C9, verificada contra cierre FID 202402.xlsx + Épica 6 v1.8):
 * - NO "+70% CX", NO "46+ entregables" (46 es de BBVA), NO "$15.8M USD" (la hoja
 *   está en CLP; se usa la unidad nativa: 429,53 UF), NO "1.109" (la hoja da 1.169
 *   órdenes de inspección, 822 realizadas), NO "BPMN 4 actores" (diagrama = 2 carriles).
 * - SÍ: ~1.000 filas (orden de magnitud del handoff D↔D), Épica 6, DDD + Dual Track,
 *   lineamientos Carbon + Material (método transversal a todos los DS del portafolio).
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import { validateCaseData } from '@/components/templates/CasePage/validateCaseData'

export const fidSegurosCase: CasePageData = validateCaseData({
  slug: 'fid-seguros',
  title: 'FID Seguros — DesignOps and migration to React',
  description:
    'Design operating system for FID Seguros Generales (Chile): migration from OutSystems (legacy) to React/MUI with Domain-Driven Design and Dual Track, on Carbon + Material guidelines. D↔D handoff model (~1,000 governance rows) built before moving the first screen.',
  tags: ['Insurance', 'DesignOps', 'React / MUI', 'DDD', 'Dual Track'],

  caseType: 'client',
  caseFormat: 'evidencia-viva',

  valor:
    'Before moving a single screen from OutSystems to React, I built the full governance system — without it, the migration fragments into months, not weeks.',
  situacion:
    'Migrating from OutSystems (legacy) to MUI React without a governance framework would have fragmented the system into months.',
  objetivo:
    'Build the full design operating system before touching any screen.',
  accion: [
    {
      decision: 'How to approach the OutSystems-to-React migration',
      discarded: 'Migrate screen by screen, ad-hoc',
      chosen: 'D↔D handoff model (~1,000 governance rows) + WCAG guide with Domain-Driven Design and Dual Track, before migrating the first screen',
      why: 'Without explicit governance, the migration fragments',
    },
  ],
  resultado:
    "End-to-end technical management of the inspection and underwriting cycle: 1,169 inspection orders (822 completed) worth 429.53 UF audited, modeling video, assisted and on-site self-inspection. Functional analysis of Epic 6 (Mortgage Risk Query, HDU 01-09, v1.8) and migration to React/MUI on Carbon + Material guidelines — the same blend applied across the portfolio's other design systems.",
  aprendizaje:
    'Without explicit governance before migrating, the system fragments — building it first is slower at the start, but avoids that collapse.',

  methodology: [
    { slug: 'ddd', label: 'Domain-Driven Design' },
    { slug: 'bpmn', label: 'BPMN 2.0' },
    { slug: 'design-sprint', label: 'Design Sprint (3 days)' },
  ],

  metrics: [
    { value: '~1,000', label: 'rows in the D↔D handoff model' },
    { value: '429.53 UF', label: 'audited value (1,169 inspection orders)' },
    { value: '822', label: 'inspections completed (of 1,169 IO)' },
    { value: 'Epic 6', label: 'Mortgage Risk (HDU 01-09)' },
  ],
  timeline: [
    { company: 'FID Seguros', role: 'D↔D handoff model + WCAG guide (DDD, Dual Track)', period: '2024' },
    { company: 'FID Seguros', role: 'Epic 6 — Mortgage Risk Query (HDU 01-09)', period: '2024' },
    { company: 'FID Seguros', role: 'Management of 1,169 IO (822 completed) + closing reconciliation', period: '2024-2025' },
    { company: 'FID Seguros', role: 'OutSystems → React/MUI migration', period: '2025', isLast: true },
  ],
  techStack: [
    { skill: 'React / MUI (Carbon-informed)', level: 90, levelLabel: 'Expert' },
    { skill: 'Domain-Driven Design', level: 88, levelLabel: 'Advanced' },
    { skill: 'BPMN 2.0', level: 88, levelLabel: 'Advanced' },
    { skill: '3-layer architectural audit', level: 85, levelLabel: 'Advanced' },
  ],

  accessLinks: [
    {
      kind: 'figma',
      label: 'DDD process + Dual Track + Design System',
      href: 'https://www.figma.com/design/QdPkYTZ2XaHrnWgaconjg5/FID--DS--Seguros-Chile?node-id=1-507&t=t3CXy8D5ETFEwYfz-1',
    },
  ],

  nextCase: { slug: 'sured', title: 'SuRed / Matrix Giros — B2B integration' },
})
