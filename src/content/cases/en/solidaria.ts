/**
 * Contenido — Solidaria Portal (diagnóstico autodirigido, preparación de entrevista). — versión EN (traducción de es/solidaria.ts)
 * Variante: evidencia-viva. NO es prueba encargada ni cliente pagado → disclaimer PROPIO
 * ("Diagnóstico por iniciativa propia — no fue un encargo."), distinto al de prueba técnica.
 *
 * Fuente verbatim: docs/m1/WORKTEST_CASES.md §Caso 2 + §Publicación pública / Caso 2
 * + docs/m2/spec/CASE_PAGE_CONTENT_STRUCTURE.md §Variante A / Solidaria Portal.
 * Filtro de confidencialidad aplicado (WORKTEST_CASES §Gobernanza): sin nombres de
 * entrevistadores, sin cifras internas, sin estado del proceso. Solo información pública.
 *
 * ⚠️ Nota de ruteo (para Fase E): ya existe /casos/solidaria como caso enmarcado de
 * Design System. Este módulo es el enmarque canónico "diagnóstico autodirigido" para
 * /pruebas-tecnicas/solidaria — hay que decidir qué pasa con la ruta /casos/solidaria.
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import { validateCaseData } from '@/components/templates/CasePage/validateCaseData'

export const solidariaWorkTestCase: CasePageData = validateCaseData({
  slug: 'solidaria',
  title: 'Solidaria Portal — Self-directed diagnostic of 7 digital channels',
  description:
    'Diagnostic done on my own initiative — Solidaria did not commission it — before an interview: audit of the 7 digital domains of a real insurer, followed by a proposal for a decoupled architecture with an own Design System.',
  tags: ['Self-directed diagnostic', 'Decoupled architecture', 'Design System', 'Insurtech', 'WCAG 2.2 AA'],

  caseType: 'work-test',
  caseFormat: 'evidencia-viva',
  badge: { icon: 'search', label: 'Self-directed diagnostic' },

  valor:
    'Nobody asked me for this. Before an interview, I audited the 7 digital channels of a real insurer and built the architecture proposal that solves the fragmentation I found — the difference between showing up to an interview and showing up with the solution already designed.',
  situacion:
    'Diagnostic on my own initiative as preparation for an interview — Solidaria did not commission it. A confidentiality filter was applied: no interviewer names, no internal figures and no process status. Only what is publicly verifiable is used (the 7 domains, visitable by anyone) and my own technical work.',
  objetivo:
    'Arrive at the interview with real knowledge of the sector and a concrete proposal, not generic opinions about "digital transformation".',
  accion: [
    {
      decision: 'Portal architecture',
      discarded: 'CMS monolith on Azure Blob (HTML + data + logic together)',
      chosen: 'Decoupled architecture: insurance core → REST API → Next.js, with a Design System independent of the backend',
      why: "Connecting Solidaria's real backend would be an environment-variable change; the frontend does not change",
    },
    {
      decision: 'Claims trackers',
      discarded: 'Keep the 2 separate trackers (home and auto) from the original finding',
      chosen: 'A single unified tracker (/siniestros/reportar and /siniestros/consultar)',
      why: 'The fragmentation into 2 different experiences was part of the diagnosed problem',
    },
  ],
  resultado:
    'Portal deployed to production with a navigable demo and a Design System documented in Storybook/Chromatic. 212 tests with 0 axe violations, WCAG 2.2 AA. Full TITAN v7.0 methodology (M0–M3). The (private) repository exists and is versioned; no public access is linked. The portal currently runs on mock data — connecting the real backend would be an environment-variable change.',
  aprendizaje:
    "Going beyond the mandate (which here did not even exist — it was an interview, not an engagement) is what separates showing up with a diagnostic from showing up with a solution. This pattern — looking at the whole process even when the requested role is narrower — recurs in FDN's Momentum 2.",

  methodology: [
    { slug: 'ddd-bounded-contexts', label: 'DDD — bounded contexts (insurance)' },
    { slug: 'arquitectura-desacoplada', label: 'Core → REST API → frontend' },
    { slug: 'design-tokens-hct', label: 'Color tokens in HCT / MD3' },
  ],
  momentumsApplied: ['M0', 'M1', 'M2', 'M3'],
  processTransformation: {
    before:
      '7 digital domains operating as separate experiences, with no unified identity or session: main site, customer portal, payment gateway, two different claims trackers, PQRS filing and a loyalty program.',
    approach:
      'Audit the 7 channels as a system, not as loose pieces; model the insurance domain (bounded contexts, policy lifecycle, underwriting roles) and propose a decoupled architecture core → REST API → Next.js.',
    capabilityInstalled:
      'A navigable portal with an own Design System and a mock mode swappable for real data with an environment-variable change — the base a team can keep building on.',
  },

  metrics: [
    { value: '7', label: 'digital domains audited (publicly verifiable)' },
    { value: '212', label: 'tests · 0 axe violations' },
    { value: 'AA', label: 'WCAG 2.2 in light and dark' },
    { value: '41 → 65', label: 'estimated NPS → 12-month target (public industry source)' },
  ],
  timeline: [
    { company: 'Iniciativa propia', role: 'Audit of the 7 digital channels (public information)', period: 'Pre-entrevista' },
    { company: 'Iniciativa propia', role: 'Conceptual migration to a decoupled architecture + Design System', period: 'Pre-entrevista' },
    { company: 'Iniciativa propia', role: 'V1 baseline (c75a74f) → V2 in production (812ff9b)', period: 'Pre-entrevista', isLast: true },
  ],
  techStack: [
    { skill: 'Next.js + decoupled architecture', level: 86, levelLabel: 'Applied' },
    { skill: 'Design System (HCT / MD3 tokens)', level: 85, levelLabel: 'Applied' },
    { skill: 'Domain modeling (DDD, insurance)', level: 82, levelLabel: 'Applied' },
    { skill: 'Vitest + jest-axe (212 tests)', level: 84, levelLabel: 'Applied' },
  ],

  accessLinks: [
    {
      kind: 'produccion',
      label: 'Portal in production (V2)',
      href: 'https://solidaria-portal.vercel.app',
      note: 'The "How does it work?" button on the landing → guided tour. Demo login: maria@ejemplo.com + OTP 123456 → automatic tour through policies, claims, PQRS and payments.',
    },
    {
      kind: 'preview',
      label: 'V1 — sealed baseline',
      href: 'https://solidaria-portal-c424owwv2-lemaogo-9238s-projects.vercel.app',
      note: 'Baseline commit c75a74f. V2 in production: commit 812ff9b (layered evolution, not a redesign).',
    },
    {
      kind: 'chromatic',
      label: 'Design System (Storybook / Chromatic)',
      href: 'https://6a2d61bf2ded342d004f1b8f-gjmdfbfoac.chromatic.com',
      note: '8 atoms with tokens generated algorithmically from the brand blue #004173 in HCT / MD3, AA contrast in light and dark.',
    },
  ],

  footerDisclaimer: 'Diagnostic on my own initiative — it was not an engagement.',
  nextCase: { slug: 'excalibur', title: 'EXCALIBUR — this very site', href: '/excalibur' },
})
