/**
 * Contenido — Prueba técnica FleetControl (Design Engineer UX/UI). — versión EN (traducción de es/fleetcontrol.ts)
 * Variante: evidencia-viva. Fuente verbatim: docs/m1/WORKTEST_CASES.md §Caso 1
 * + docs/m2/spec/CASE_PAGE_CONTENT_STRUCTURE.md §Variante A / FleetControl.
 * Cero reinterpretación de cifras.
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import { validateCaseData } from '@/components/templates/CasePage/validateCaseData'

export const fleetControlCase: CasePageData = validateCaseData({
  slug: 'fleetcontrol',
  title: 'FleetControl — Real-time fleet monitor',
  description:
    "Design Engineer work test: SPA connected to Traccar's real API (open-source GPS tracking) to monitor a vehicle in real time, with loading, error and live-data states — no backend of its own and no WebSocket available on the hosting.",
  tags: ['Design Engineer (UX/UI)', 'Traccar API', 'Next.js', 'Zustand', 'WCAG 2.1 AA'],

  caseType: 'work-test',
  caseFormat: 'evidencia-viva',
  badge: { icon: 'wrench', label: 'Work test' },
  entryRole: 'Design Engineer (UX/UI)',

  valor:
    "I did not accept the AI's constraints as final: when it generated code that broke accessibility semantics or motion UX, I caught it and fixed it with my own judgment, documenting every correction — the difference between using AI and knowing when not to follow it.",
  situacion:
    "Build a SPA connected to Traccar's real API (open-source GPS tracking platform, demo4 instance) to monitor a vehicle's location in real time, including loading, error and live-data states. Hosting constraint: Netlify Functions does not support native WebSockets.",
  objetivo:
    'Demonstrate defensible frontend architecture decisions under real constraints (no backend of its own, no WebSocket available) — not just ship a working UI.',
  accion: [
    {
      decision: 'Status card markup',
      discarded: 'Nested <div>s (what the AI generated)',
      chosen: '<dl><dt><dd>',
      why: 'Semantically correct for label-value pairs — a screen reader announces "Speed: 84.5 km/h" as a coherent unit',
    },
    {
      decision: 'Real-time position update',
      discarded: 'Native WebSocket',
      chosen: '5s polling + requestAnimationFrame interpolation',
      why: 'Netlify Functions does not support WebSockets; interpolation achieves the same visual effect (smooth movement) without the complexity of an additional server',
    },
    {
      decision: 'Global state management',
      discarded: 'React Context',
      chosen: 'Zustand',
      why: 'Polling updates 12 times per minute — with Context every update re-renders the whole tree; with Zustand only the components subscribed to the exact slice',
    },
    {
      decision: 'Network-failure handling',
      discarded: 'Generic error',
      chosen: '"Last known position" with reduced opacity (0.6 + grayscale) + role="alert" + automatic focus on "Retry"',
      why: 'Preserves useful information instead of just showing that something failed',
    },
  ],
  resultado:
    'Demo deployed and functional — app connected to real Traccar data, not a static mockup. WCAG 2.1 AA accessibility verified with axe DevTools: 100% keyboard navigation, prefers-reduced-motion on all animations, minimum 4.5:1 contrast in both modes, aria-live="polite" on the status card and a skip link to the main content.',
  aprendizaje:
    'Correcting the AI with your own judgment is not an optional extra — it is the part of the job an average candidate skips. From this case on, you explicitly document what the AI generated vs. what you corrected in every following project, not just in tests.',

  metrics: [
    { value: '4', label: 'documented architecture decisions' },
    { value: '3', label: 'declared AI corrections' },
    { value: 'AA', label: 'WCAG 2.1 — verified with axe DevTools' },
    { value: '5 s', label: 'polling + rAF interpolation (no WebSocket)' },
  ],
  timeline: [
    { company: 'FleetControl', role: 'Constraint analysis and architecture decisions', period: 'Prueba técnica' },
    { company: 'FleetControl', role: 'Implementation on the Traccar API + AI correction', period: 'Prueba técnica', isLast: true },
  ],
  techStack: [
    { skill: 'Next.js', level: 85, levelLabel: 'Applied' },
    { skill: 'Zustand', level: 82, levelLabel: 'Applied' },
    { skill: 'Traccar API', level: 80, levelLabel: 'Applied' },
    { skill: 'WCAG 2.1 AA (axe DevTools)', level: 88, levelLabel: 'Applied' },
  ],

  accessLinks: [
    { kind: 'produccion', label: 'Production demo', href: 'https://simon-v2-monitor-rmxm.vercel.app/?demo=true' },
    { kind: 'preview', label: 'Preview (Layers 2+3)', href: 'https://simon-v2-monitor-rmxm-git-feat-capa-2-lemaogo-9238s-projects.vercel.app' },
    { kind: 'repo', label: 'Repository', href: 'https://github.com/MauroPX/simon-v2-monitor' },
    { kind: 'doc', label: 'Technical response (MD)', href: 'https://github.com/MauroPX/simon-v2-monitor/blob/feat/capa-2/docs/TECHNICAL_CHALLENGE_RESPONSE.md' },
    { kind: 'video', label: 'Loom walkthrough', href: 'https://www.loom.com/share/dc3ef2ab5fb84e9b8c52709b26b8f915' },
  ],
  aiDeclared: {
    items: [
      'The AI (Claude Sonnet) generated the base authentication hook, the initial layout and the coordinate interpolation function.',
      'Correction 1 — the AI generated the status card with nested <div>s → fixed to <dl><dt><dd> for WCAG 1.3.1 semantics.',
      'Correction 2 — the AI moved the marker with direct setLatLng() → replaced with requestAnimationFrame interpolation for smooth movement.',
      'Correction 3 — the AI did not implement prefers-reduced-motion → added manually on every animation.',
    ],
    source: {
      label: 'TECHNICAL_CHALLENGE_RESPONSE.md',
      href: 'https://github.com/MauroPX/simon-v2-monitor/blob/feat/capa-2/docs/TECHNICAL_CHALLENGE_RESPONSE.md',
    },
  },

  footerDisclaimer: 'Selection work test — not a paid engagement.',
  nextCase: { slug: 'bcs', title: 'BCS — Financial Goals Platform', href: '/pruebas-tecnicas/bcs' },
})
