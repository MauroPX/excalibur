/**
 * Contenido — Prueba técnica BCS / Banco Caja Social (Diseñador de Interfaz UI). — versión EN (traducción de es/bcs.ts)
 * Variante: evidencia-viva. Fuente verbatim: docs/m1/WORKTEST_CASES.md §Caso 3
 * + docs/m2/spec/CASE_PAGE_CONTENT_STRUCTURE.md §Variante A / BCS.
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import { validateCaseData } from '@/components/templates/CasePage/validateCaseData'

export const bcsCase: CasePageData = validateCaseData({
  slug: 'bcs',
  title: 'BCS — Financial Goals Platform',
  description:
    'Banco Caja Social work test: MVP of a platform for people aged 25-40 to organize financial goals and start personal investing. The brief required only an editable Figma file, a base Design System and a navigable prototype — no code. Deadline: 2 calendar days + a 30-min defense.',
  tags: ['UI Interface Designer', 'Design System', 'Material Design 3', 'WCAG AA/AAA', 'Monorepo'],

  caseType: 'work-test',
  caseFormat: 'evidencia-viva',
  badge: { icon: 'wrench', label: 'Work test' },
  entryRole: 'UI Interface Designer',
  discoveredScope:
    'a systems problem (producing hundreds of screens at scale), not a single-screen one',

  valor:
    'The brief asked for a screen in Figma. I delivered the system that sustains that screen at scale — 34 roles × 6 schemes, automatically verified — because designing an interface and designing the capacity to produce hundreds of them are different problems, and only the second scales with a team.',
  situacion:
    'Banco Caja Social asked to design the MVP of a financial-goals and personal-investment platform for people aged 25-40. The brief required only editable Figma + base Design System + navigable prototype, no code, in 2 calendar days plus a 30-minute defense.',
  objetivo:
    'Show that the minimum requested scope (Figma + prototype) is not the ceiling of what can and should be delivered when the real problem is a systems one, not a screen one.',
  accion: [
    {
      decision: 'Design System contrast verification',
      discarded: 'Figma only, no contrast verification',
      chosen: 'Monorepo + audit script with 66 automatic checks against the official Material Theme Builder export',
      why: 'A contrast error caught manually does not scale to 6 schemes × 34 roles',
    },
    {
      decision: 'An initial own diagnosis turned out to be wrong when verified',
      discarded: 'Silence or fix the error leaving no trace',
      chosen: 'Fix it and declare it as such — independent verification with a Python script (materialyoucolor)',
      why: 'A case that hides its errors is not evidence of discipline; keeping the corrected error visible is',
    },
  ],
  resultado:
    'What was requested was delivered, plus: a Design System of 34 M3 roles across 6 schemes (light/dark × base/medium-contrast/high-contrast) from 3 independent HCT seeds (Primary #0063A7, Secondary #2D4550, Tertiary #97D3B8); a real monorepo (tokens, ui-atoms, web-app) with Storybook on Chromatic and CI on GitHub Actions; and an audit script that runs 66 automatic checks (11 official M3 pairs × 6 schemes), requiring AA in base/medium-contrast and AAA in the high-contrast schemes, verified field by field against the official Material Theme Builder export.',
  aprendizaje:
    'A system that is not automatically verified does not scale beyond whoever created it. From this case on, any design system you deliver includes its own verification script — it does not depend on someone reviewing it by hand.',

  methodology: [
    { slug: 'material-design-3', label: 'Material Design 3 (HCT)' },
    { slug: 'contrast-audit', label: 'Automated contrast audit' },
  ],
  momentumsApplied: ['M0', 'M1', 'M2', 'M3', 'M4'],

  metrics: [
    { value: '34 × 6', label: 'M3 roles × color schemes' },
    { value: '66', label: 'automatic contrast checks' },
    { value: '3', label: 'packages in the monorepo (tokens · ui-atoms · web-app)' },
    { value: '2 days', label: 'brief deadline (only Figma requested)' },
  ],
  timeline: [
    { company: 'Banco Caja Social', role: 'Brief: editable Figma + base Design System + navigable prototype', period: '2 días' },
    { company: 'Banco Caja Social', role: 'Extended delivery: monorepo + 66 checks + defense', period: '2 días + 30 min', isLast: true },
  ],
  techStack: [
    { skill: 'Material Design 3 (HCT)', level: 86, levelLabel: 'Applied' },
    { skill: 'Storybook + Chromatic', level: 84, levelLabel: 'Applied' },
    { skill: 'Monorepo + GitHub Actions', level: 82, levelLabel: 'Applied' },
    { skill: 'Contrast audit (script)', level: 85, levelLabel: 'Applied' },
  ],

  accessLinks: [
    { kind: 'demo', label: 'App', href: 'https://bcs-frontend-web-app.vercel.app' },
    {
      kind: 'figma',
      label: 'UI + Design System (base)',
      href: 'https://www.figma.com/design/TpmLPg0hWma3vitJAKBOPd/BSC--DS---structure-base-?node-id=11-1833&t=i16vy9tghTzF0Nom-1',
    },
    {
      kind: 'storybook',
      label: 'Storybook',
      href: 'https://bcs-frontend-web-app.vercel.app/storybook/?path=/docs/bienvenida-introducci%C3%B3n--docs',
    },
  ],

  footerDisclaimer: 'Selection work test — not a paid engagement.',
  nextCase: { slug: 'codesa', title: 'Codesa — UX Research Strategy', href: '/pruebas-tecnicas/codesa' },
})
