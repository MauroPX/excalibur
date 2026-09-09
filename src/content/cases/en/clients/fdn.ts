/**
 * Caso de cliente — FDN · Financiera de Desarrollo Nacional (ActivaMC, 2023-2026). — versión EN (traducción de es/clients/fdn.ts)
 * MOMENTUM 1 (confirmado): auditoría de accesibilidad y rendimiento sobre el sitio real.
 * El Momentum 2 (propuesta de arquitectura, estimación propia) se renderiza como
 * SECCIÓN aparte en la página /casos/fdn — ver src/content/cases/fdn-momentum-2.ts (R-8).
 *
 * Reconciliación (C7): NIVEL = WCAG 2.1 AA (cert 2023, revalidada 2024). NO "AAA"
 * (la AAA es de Universidad de La Salle). La auditoría 2025 detecta la brecha a 2.2.
 *
 * Fuente: docs/m1/CONTENT_COPY_STRATEGY.md §5 (FDN, 2 momentums) / §7.5
 * + docs/Career_Dossier/CONSOLIDACION_MAESTRA §2 / CAREER OS SSOT CAPA 2.1/2.4/2.9/3.2.
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import { validateCaseData } from '@/components/templates/CasePage/validateCaseData'

export const fdnCase: CasePageData = validateCaseData({
  slug: 'fdn',
  title: 'FDN — Accessibility and performance audit',
  description:
    'WCAG 2.2 and Core Web Vitals audit of the institutional portal of Financiera de Desarrollo Nacional (MinTIC mandate), on a Drupal 7 (EOL) site. 654 technical issues, 40 consulting hours (OC AMC 2025074). Includes an own migration proposal (Momentum 2).',
  tags: ['GovTech', 'WCAG 2.1 / 2.2', 'Accessibility', 'Core Web Vitals', 'Audit'],

  caseType: 'client',
  caseFormat: 'evidencia-viva',

  valor:
    'I came in to audit accessibility. Looking at the full process, I found the root cause (a static site at end of life) and proposed the architecture that solves it — the difference between meeting the mandate and solving the problem the mandate did not mention.',
  situacion:
    'The MinTIC mandate requires a full WCAG 2.2 audit of an institutional portal built on Drupal 7, already end of life (EOL).',
  objetivo:
    'Not just document issues — identify and propose the solution to the root cause.',
  accion: [
    {
      decision: 'Scope of the response to the 654 issues',
      discarded: 'Remediate the 654 individual issues on Drupal 7',
      chosen: 'Propose a full migration (Next.js / Strapi / RAG) in addition to delivering the gap analysis',
      why: 'Drupal 7 is EOL — remediating without migrating fixes a system that has to be replaced anyway',
    },
  ],
  resultado:
    'Momentum 1 (confirmed): WCAG 2.1 AA certification (22 Dec 2023) → WCAG 2.1 AA revalidation (16 Sep 2024) → paid audit of 654 issues (Sep 2025, 40 h, OC AMC 2025074) that finds the certified site no longer complies with WCAG 2.2. LCP degraded from 25.2s to a target <2.5s, 85 desktop URLs and 80 mobile URLs affected. Deliverables: 36 Lighthouse reports, prioritized gap analysis and deployment runbook. The migration proposal (Momentum 2) is presented separately as an own estimate.',
  aprendizaje:
    'A narrow technical mandate (audit) almost always hides a bigger problem (an architecture at the end of its useful life). It is the same pattern as in the Solidaria diagnostic.',

  methodology: [
    { slug: 'wcag-audit', label: 'WCAG 2.1 / 2.2 audit' },
    { slug: 'ntc-5854', label: 'NTC 5854 · Resolution 1519' },
    { slug: 'core-web-vitals', label: 'Core Web Vitals' },
  ],

  metrics: [
    { value: '-90%', label: 'LCP target (25.2s → <2.5s)' },
    { value: '654', label: 'technical issues audited (2025)' },
    { value: 'AA', label: 'WCAG 2.1 certified 2023 · reval. 2024' },
    { value: '40 h', label: 'consulting (OC AMC 2025074)' },
  ],
  timeline: [
    { company: 'FDN', role: 'WCAG 2.1 AA certification', period: 'Dic 2023' },
    { company: 'FDN', role: 'WCAG 2.1 AA revalidation', period: 'Sep 2024' },
    { company: 'FDN', role: '654-issue audit + Core Web Vitals', period: 'Sep 2025' },
    { company: 'FDN', role: 'Prioritized gap analysis + deployment runbook', period: 'Sep 2025', isLast: true },
  ],
  techStack: [
    { skill: 'WCAG 2.1 / 2.2 · NTC 5854', level: 95, levelLabel: 'Expert' },
    { skill: 'axe DevTools · Lighthouse · NVDA / JAWS', level: 92, levelLabel: 'Expert' },
    { skill: 'Core Web Vitals (LCP / TTFB)', level: 88, levelLabel: 'Advanced' },
    { skill: 'Gap analysis + runbook', level: 85, levelLabel: 'Advanced' },
  ],

  nextCase: { slug: 'lasalle', title: 'Universidad de La Salle — accessibility AAA by scope' },
})
