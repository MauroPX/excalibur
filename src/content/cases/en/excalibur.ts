/**
 * Contenido — Meta-caso EXCALIBUR (este mismo sitio). — versión EN (traducción de es/excalibur.ts)
 * caseType: 'meta'. Variante: evidencia-viva. Ruta propia /excalibur (no /pruebas-tecnicas).
 *
 * Contenido derivado de hechos verificables del propio repo (CLAUDE.md, ADRs, CI) —
 * no de un doc de caso externo. Se evitan cifras volátiles (nº exacto de tests) a favor
 * de afirmaciones estables y comprobables en el repo.
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import { validateCaseData } from '@/components/templates/CasePage/validateCaseData'

export const excaliburCase: CasePageData = validateCaseData({
  slug: 'excalibur',
  title: 'EXCALIBUR — this very site as a case study',
  description:
    'The TITAN methodology applied to my own product: Blueprint → Forge → Lock governance per component, M3 tokens from a single source, real bilingual i18n with hreflang and accessibility verified per component.',
  tags: ['Next.js 15', 'React 19', 'MUI v6', 'bilingual i18n', 'WCAG 2.2 AA', 'BFL / TITAN'],

  caseType: 'meta',
  caseFormat: 'evidencia-viva',
  badge: { icon: 'compass', label: 'Own case' },

  valor:
    'The same methodology I apply on a client engagement, applied to my own product. This site is the first case study: every component has a blueprint, tests, a story and a version certificate before entering production.',
  situacion:
    'The v1 portfolio lived coupled on Netlify and was hard to evolve. A decoupled base was needed that demonstrated the method, not just described it.',
  objetivo:
    'Build the portfolio with the same governance as a client product — no shortcuts — so the site is living proof of the process, not a showcase.',
  accion: [
    {
      decision: 'Styling system',
      discarded: 'Tailwind',
      chosen: 'MUI v6 + M3 tokens generated from a single source (ADR-002)',
      why: 'Tokens are generated and audited in CI — zero hardcoded hex, a single place where the color changes',
    },
    {
      decision: 'Component governance',
      discarded: 'Informal convention via manual review',
      chosen: 'BFL cycle: Blueprint → Forge → Lock, with a VERSION_CERTIFICATE per piece',
      why: 'Makes every decision traceable and blocks merges without green CI',
    },
  ],
  resultado:
    'Site in production on Vercel, bilingual es/en with [locale] routes, middleware and hreflang. M3 Design System with tokens from a single source and 0 hardcoded hex (verified in CI). Every component passes lint, strict typecheck, Vitest + jest-axe tests, build and build-storybook before the LOCK.',
  aprendizaje:
    'Applying the method to your own work exposes its seams before a client does. Several methodology rules were hardened from frictions found building this site.',

  methodology: [
    { slug: 'bfl-blueprint-forge-lock', label: 'BFL cycle' },
    { slug: 'design-tokens-m3', label: 'M3 tokens from a single source' },
    { slug: 'atomic-design', label: 'Atomic Design + data-atomic' },
  ],
  momentumsApplied: ['M2', 'M3'],
  processTransformation: {
    before: 'v1 portfolio coupled on Netlify, with no component governance or quality pipeline.',
    approach:
      'Rebuild from scratch with a single source of truth per domain (tokens, i18n, content) and a CI that blocks regressions.',
    capabilityInstalled:
      'A repeatable design system and BFL pipeline: adding a new component follows exactly the same verifiable steps, whoever runs them.',
  },

  metrics: [
    { value: 'BFL', label: 'blueprint · forge · lock per component' },
    { value: '0', label: 'hardcoded hex — M3 tokens only' },
    { value: '2', label: 'languages with hreflang (es · en)' },
    { value: 'axe', label: 'jest-axe on every component' },
  ],
  timeline: [
    { company: 'EXCALIBUR', role: 'Infra + M3 theme + bilingual i18n', period: 'Olas 1-2' },
    { company: 'EXCALIBUR', role: 'Atoms → molecules → organisms → templates', period: 'Olas 3-4' },
    { company: 'EXCALIBUR', role: 'Pages + case structure + technical SEO', period: 'Olas 5-6', isLast: true },
  ],
  techStack: [
    { skill: 'Next.js 15 + React 19', level: 90, levelLabel: 'Applied' },
    { skill: 'MUI v6 + M3 tokens', level: 88, levelLabel: 'Applied' },
    { skill: 'next-intl (bilingual i18n)', level: 85, levelLabel: 'Applied' },
    { skill: 'Storybook 8 + Vitest + jest-axe', level: 86, levelLabel: 'Applied' },
  ],

  accessLinks: [
    { kind: 'produccion', label: 'Site in production', href: 'https://excalibur-six-chi.vercel.app' },
    { kind: 'repo', label: 'Repository (v2 branch)', href: 'https://github.com/MauroPX/excalibur/tree/v2' },
  ],

  footerDisclaimer:
    'Own case (meta) — this site is at once the portfolio and its first case study; it is not a client engagement.',
  nextCase: { slug: 'fdn', title: 'FDN — LCP -90% and WCAG 2.1 AA' },
})
