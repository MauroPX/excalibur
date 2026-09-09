/**
 * Caso de cliente — BBVA Colombia & Panamá · Sistema GEMAS (2024-2026). — versión EN (traducción de es/clients/bbva.ts)
 * Fuente: docs/m1/CONTENT_COPY_STRATEGY.md §5 / §7.5
 * + docs/Career_Dossier/CONSOLIDACION_MAESTRA §1 / CAREER OS SSOT CAPA 2.2.
 * Reconciliación (C4/C5/C9, verificada contra el Informe de Evolución y Madurez de
 * los demos + Informe Consolidado de Cierre con feedback firmado de 3 POs):
 * - NO "-75% TTM", NO "+600 usuarios internos", NO "-60% producción" (sin fuente).
 * - Bre-B (1.1M usuarios) es trabajo BBVA de otro scope, no métrica de este caso.
 * - SÍ: 5/5 unánime de 3 POs, 100% cumplimiento de tiempos, presentaciones a VP,
 *   Guion Maestro de 46 pasos / 6 bloques / 10 flujos.
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import { validateCaseData } from '@/components/templates/CasePage/validateCaseData'

export const bbvaCase: CasePageData = validateCaseData({
  slug: 'bbva',
  title: 'BBVA — GEMAS System',
  description:
    'Governance system for guided tutorials across 3 BBVA B2B products in Colombia and Panama (Bre-B, Project Brickell, Contigo Pymes). 5 maturity phases + redesign of the interaction model from "Coach Mark" to "Immersive Walkthrough".',
  tags: ['Banking', 'Fintech', 'Design System', 'Content Design', 'SAFe'],

  caseType: 'client',
  caseFormat: 'evidencia-viva',

  valor:
    'The product tutorials (Bre-B, Brickell) could not touch the underlying functionality — it was already in production. The only available lever was the guidance layer, so I turned it into a system, not a set of loose scripts.',
  situacion:
    '3 B2B products in 2 countries, each building guided tutorials ("coach marks") ad-hoc, with no consistent brand, tone or motion between them.',
  objetivo:
    'Build a system that orchestrates brand, experience, motion and business rules for any future tutorial — not solve one tutorial at a time.',
  accion: [
    {
      decision: 'How to scale tutorial production',
      discarded: 'Keep generating scripts case by case, keeping the split-screen "Coach Mark" model',
      chosen: 'GEMAS system in 5 maturity phases (brand → UX writing and cognition → UI/motion → production metrics → business-rules architecture), plus a redesign of the interaction model to a full-screen "Immersive Walkthrough" and an accessibility/cognitive-load audit (AAA 7:1 contrast, "Clean Canvas" palette)',
      why: 'Without a system, each country and each product repeats the same diagnostic work and ends up inconsistent with the brand',
    },
  ],
  resultado:
    'Communication quality 5/5 — unanimous across 3 BBVA Product Owners — and 100% on-time delivery (Consolidated Closing Report + signed feedback from each PO). 46-step Master Script in 6 blocks covering 10 flows. Use validated in team training and Vice-Presidency presentations. Generative-AI orchestration (Gemini Gems) to speed up script production. System reusable for any future product or segment.',
  aprendizaje:
    'When you cannot redesign the product because it is already in production, the guidance layer is the lever — turning a passive tutorial into a governed, auditable system is as much product architecture as redesigning the screen.',

  methodology: [
    { slug: 'sistema-gemas', label: 'GEMAS System (5 phases)' },
    { slug: 'content-framing', label: 'Content Framing' },
    { slug: 'walkthrough-inmersivo', label: 'Immersive Walkthrough' },
  ],
  momentumsApplied: ['M0', 'M1', 'M2', 'M3'],

  metrics: [
    { value: '5/5', label: 'communication quality (3 BBVA POs, unanimous)' },
    { value: '46', label: 'Master Script steps (6 blocks · 10 flows)' },
    { value: '100%', label: 'on-time delivery' },
    { value: '3', label: 'B2B products (2 countries)' },
  ],
  timeline: [
    { company: 'BBVA', role: 'GEMAS framework + Discovery', period: '2024 Q1' },
    { company: 'BBVA', role: 'Project Brickell — Inbound SME onboarding', period: '2024 Q2-Q3' },
    { company: 'BBVA', role: 'Design System + Figma Variables + "Blossom" motion', period: '2024 Q4' },
    { company: 'BBVA', role: 'Colombia + Panama rollout', period: '2025-2026', isLast: true },
  ],
  techStack: [
    { skill: 'GEMAS System (5 phases)', level: 92, levelLabel: 'Expert' },
    { skill: 'Content Framing · UX Writing', level: 90, levelLabel: 'Expert' },
    { skill: 'Figma Variables + DS', level: 88, levelLabel: 'Advanced' },
    { skill: 'AI orchestration (Gemini Gems)', level: 82, levelLabel: 'Advanced' },
  ],

  accessLinks: [
    {
      kind: 'figma',
      label: 'Panama Branch — user activation (prototype)',
      href: 'https://www.figma.com/proto/suLl2aXPjYCisSST5i8kta/%F0%9F%8C%9F--BBVA_Sucursal_Panama---Admin_Usuarios--Configuracion?node-id=130-159104&page-id=0%3A1&starting-point-node-id=130%3A159104&t=S3Lk0CjLrQrAkqpD-1',
    },
    {
      kind: 'demo',
      label: 'Brickell — guided-tour base (Figma Make)',
      href: 'https://www.figma.com/make/isAZ3lsdcaKcKBUfe0hgsR/-Brickell---Admin_usuario--Tutorial_Guiado?fullscreen=1&t=XtZ8wEu190OXDwBs-1&code-node-id=0-9',
    },
  ],

  nextCase: { slug: 'fdn', title: 'FDN — WCAG 2.1 AA audit' },
})
