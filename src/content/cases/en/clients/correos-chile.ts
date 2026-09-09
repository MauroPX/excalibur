/**
 * Caso de cliente — Correos Chile · Portal Empresas B2B (FactorIT / CCL, 2022-2023). — versión EN (traducción de es/clients/correos-chile.ts)
 * Experiencia profesional pagada. Fuente: docs/m1/CONTENT_COPY_STRATEGY.md §4 / §7.5
 * + docs/Career_Dossier/CONSOLIDACION_MAESTRA §7 / CAREER OS SSOT CAPA 2.8.
 * Figma de v1 reusado, no recreado.
 * Reconciliación (C9, verificada contra las hojas de carga masiva del backend):
 * - NO "297 envíos" (las hojas dicen "hasta 250"), NO "13 regiones" (el dropdown
 *   lista 16 → se usa "red postal nacional"), NO "12→6 meses" / "10 devs" / ">95%"
 *   (sin artefacto). SÍ: 250 envíos / 11 campos, DS Merkén (Figma), 400+ sobre M3
 *   por derivación de la spec, transversal a Portal Empresa / Sucursal Virtual / App.
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import { validateCaseData } from '@/components/templates/CasePage/validateCaseData'

export const correosChileCase: CasePageData = validateCaseData({
  slug: 'correos-chile',
  title: 'Correos Chile — B2B Business Portal',
  description:
    "B2B Business Portal for Chile's national postal logistics network. Merkén Design System — on the order of 400+ React/MUI components on Material Design 3 — built spanning 3 products: Business Portal, Virtual Branch and mobile App.",
  tags: ['Logistics', 'Design System', 'React / MUI', 'B2B', 'MD3'],

  caseType: 'client',
  caseFormat: 'evidencia-viva',

  valor:
    'Before opening Figma, I studied 250 real shipments and absorbed the full brand manual — the result was not a pretty screen, it was a Design System that served all 3 products of the ecosystem and accelerated the handoff to development.',
  situacion:
    "Disconnected areas, duplicated data and zero traceability across Chile's national postal logistics network.",
  objetivo:
    'Connect operations in real time across the entire national postal network without rebuilding the infrastructure.',
  accion: [
    {
      decision: 'Design starting point',
      discarded: 'Designing on assumptions, only the happy path',
      chosen: 'Study the real data model (250 shipments, 11 fields) and map 5 scenarios per flow (happy path, alternatives, errors, edge cases) before opening Figma',
      why: 'Zero ambiguity in development, zero rework',
    },
  ],
  resultado:
    'Merkén Design System — on the order of 400+ React/MUI components on Material Design 3, with documented tokens and guidelines — built spanning the 3 products of the ecosystem: Business Portal, Virtual Branch and mobile App. The system accelerated the handoff to development by eliminating spec ambiguity.',
  aprendizaje:
    'Diagnosing the real data before designing avoids rework — the same principle that recurs later in the E2E diagnostics of other cases.',

  methodology: [
    { slug: 'ucd', label: 'User-Centered Design' },
    { slug: 'atomic-design', label: 'Atomic Design' },
    { slug: 'design-tokens-m3', label: 'Design Tokens MD3' },
  ],

  metrics: [
    { value: '3', label: 'products served by one DS (Business Portal · Virtual Branch · App)' },
    { value: '400+', label: 'components on M3 (Merkén DS)' },
    { value: '11', label: 'data-model fields · 5 scenarios/flow' },
    { value: 'MD3', label: 'Design System tokens, single source' },
  ],
  timeline: [
    { company: 'CorreosChile', role: 'Data model (250 shipments, 11 fields) + brand manual', period: '2022' },
    { company: 'CorreosChile', role: '5 scenarios per flow + Merkén Design System', period: '2022-2023' },
    { company: 'CorreosChile', role: 'Merkén DS spanning: Business Portal, Virtual Branch, mobile App', period: '2023', isLast: true },
  ],
  techStack: [
    { skill: 'React / MUI', level: 92, levelLabel: 'Expert' },
    { skill: 'Design Tokens MD3', level: 88, levelLabel: 'Advanced' },
    { skill: 'Data modeling + scenarios', level: 90, levelLabel: 'Expert' },
    { skill: 'Brand identity (Pantone / typography)', level: 82, levelLabel: 'Advanced' },
  ],

  accessLinks: [
    {
      kind: 'figma',
      label: 'Business Portal — features',
      href: 'https://www.figma.com/design/5HUHHeTR2Lqs0CBjdcCehj/%E2%9C%85_-CorreosChile-Merken-_-Structura---Funcionalidades-_ID-PE-?node-id=2466-141829&t=6XCg7ewFo7wDu1Ir-1',
    },
    {
      kind: 'figma',
      label: 'Merkén Design System — guidelines',
      href: 'https://www.figma.com/design/9GR3CAgD6kshwsDcilqYum/CorreosChile-Merken_DS_Guidelines?node-id=49823-12141&t=NdP0PvBWbEDqLnmW-1',
    },
  ],

  nextCase: { slug: 'bbva', title: 'BBVA — GEMAS System' },
})
