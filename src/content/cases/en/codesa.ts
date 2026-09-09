/**
 * Contenido — Prueba técnica Codesa (Diseñador UX Nivel 3 — estrategia de investigación). — versión EN (traducción de es/codesa.ts)
 * Variante: documento-estrategico. estado: 'parcial' (decisión de publicación abierta —
 * se muestra el entregable final de 17 páginas, no las ~120 de research crudo).
 * Fuente verbatim: docs/m1/WORKTEST_CASES.md §Caso 4
 * + docs/m2/spec/CASE_PAGE_CONTENT_STRUCTURE.md §Variante B / Codesa.
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import { validateCaseData } from '@/components/templates/CasePage/validateCaseData'

export const codesaCase: CasePageData = validateCaseData({
  slug: 'codesa',
  title: 'Codesa — UX research strategy (payments module)',
  description:
    'UX Design Level 3 work test: a financial institution reports that its payments module has 28% completion and there is no prior research. The brief asked for a research strategy — no screens or prototypes — with mandatory disclosure of AI use as one of 7 assessed competencies. Deadline: 7 calendar days.',
  tags: ['UX Research', 'Research strategy', 'RICE + Inclusion', 'AI disclosure', 'Fintech'],

  caseType: 'work-test',
  caseFormat: 'documento-estrategico',
  badge: { icon: 'wrench', label: 'Work test' },
  entryRole: 'UX Designer Level 3',

  estado: 'parcial',
  estadoNota:
    'Publication with an open decision. The case is built only on the 17 pages of the final strategic deliverable. The ~120 pages of raw research (initial collection via AI, with broken citation formatting and duplicated statistics) are mentioned as a work step, not as a result. No app URL: the brief did not ask for code or screens.',

  valor:
    'Faced with a problem with no prior research, I did not guess causes — I posed 5 falsifiable hypotheses, each anchored to a real behavioral framework, and disclosed with full transparency where and how I used AI in the process. Research discipline matters as much as the finding.',
  situacion:
    'A financial institution reports 28% completion in its payments module and there is no prior research on why. The brief explicitly asked for a research strategy with justified methodologies, a prioritization approach and recommendations — no screens or prototypes. AI use was one of 7 assessed competencies, with mandatory disclosure of which tool was used, in what part of the process and how it was validated.',
  objetivo:
    'Design a defensible research strategy for a problem with no prior data, not guess the cause of the 28% completion.',
  accion: [
    {
      decision: 'How to evaluate each hypothesis',
      discarded: 'A single technique (e.g. interviews only)',
      chosen: 'Mixed methodology (funnel + heuristic + interviews + usability + CES)',
      why: 'Each hypothesis requires a different type of evidence — a single method does not cover all 5',
    },
    {
      decision: 'How to prioritize findings',
      discarded: 'Standard RICE',
      chosen: 'RICE + Trust and Inclusion axes',
      why: 'The domain (payments, vulnerable population) demands axes the original RICE does not contemplate',
    },
    {
      decision: 'How to handle a network or gateway failure during payment',
      discarded: "Show an error and lose the user's payment intent",
      chosen: '"Draft Payment" (Outbox Pattern) + Circuit Breaker + Bulkhead + trace_id per attempt (OpenTelemetry)',
      why: "The payment intent is not lost, the gateway is isolated from an external failure, and you can diagnose the exact step where the user stops — justified with a real case (a European bank's gateway outage, Cyber Monday 2024)",
    },
  ],
  resultado:
    'A 17-page strategic document: actors/assumptions/risks table, 5 hypotheses grounded in theoretical frameworks, mixed-methodology selection, prioritization with Opportunity Solution Tree + modified RICE, inclusive participant profile, a day-by-day 4-phase execution plan, a payment-flow resilience and observability block (Outbox Pattern, tracing with OpenTelemetry, Circuit Breaker + Bulkhead), audience-differentiated recommendations, an analytics tracking scheme and OKR-style success metrics.',
  aprendizaje:
    'A standard framework (RICE) is not always enough — sometimes the right discipline is to extend it with your own judgment, and declare that extension explicitly instead of forcing the problem into the original framework.',

  methodology: [
    { slug: 'self-determination-theory', label: 'Self-Determination Theory' },
    { slug: 'calm-technology', label: 'Calm Technology' },
    { slug: 'design-with-intent', label: 'Design with Intent (Lockton)' },
    { slug: 'ost-rice-extendido', label: 'OST + extended RICE' },
  ],

  sections: [
    {
      num: '01',
      title: 'The problem',
      body: '28% completion in the payments module of a financial institution, with no prior research on the cause.',
    },
    {
      num: '02',
      title: '5 hypotheses + theoretical framework',
      body: 'Five falsifiable hypotheses, each anchored to a real behavioral framework: Self-Determination Theory, Calm Technology and Design with Intent (Dan Lockton).',
    },
    {
      num: '03',
      title: 'Mixed methodology',
      body: 'One method per required type of evidence — no method covers all 5 hypotheses on its own.',
      table: {
        headers: ['Method', 'Tool', 'What evidence it provides'],
        rows: [
          ['Funnel analytics', 'PostHog / Amplitude', 'Where exactly completion drops'],
          ['Session recording', 'Hotjar', 'Frictions observed without moderation'],
          ['Heuristic analysis', 'Expert evaluation', 'Interface problems without users'],
          ['Contextual interviews (5)', 'Dovetail', 'Perceived motivations and blockers'],
          ['Moderated usability tests (5)', 'Maze', 'Where they get stuck in a real task'],
          ['CES survey', 'Post-task CES', 'Perceived effort quantified'],
        ],
      },
    },
    {
      num: '04',
      title: 'Representative participants',
      body: 'Inclusive profile focused on the contexts most excluded from the product.',
      chips: ['Low-end Android', 'Rural connectivity', 'Low vision', 'Low digital literacy'],
    },
    {
      num: '05',
      title: 'Prioritization',
      body: 'Opportunity Solution Tree + modified RICE with own Trust and Inclusion axes.',
    },
    {
      num: '06',
      title: '4-phase execution plan',
      body: 'Day-by-day plan in 4 phases, with audience-differentiated recommendations, an analytics tracking scheme and OKR-style success metrics.',
    },
    {
      num: '07',
      title: 'Payment-flow resilience and observability',
      body: 'Within Phase 3 of the plan, the document proposes a "Draft Payment" (Outbox Pattern) so the user\'s payment intent is not lost in the event of a network or gateway failure; Distributed Tracing with OpenTelemetry, generating a unique trace_id per payment attempt to diagnose the exact step where a user stops; and Circuit Breaker + Bulkhead to isolate the payment gateway from an external failure. It is justified with a real case study cited in the document: the payment-gateway outage of a European bank on Cyber Monday 2024.',
      chips: ['Outbox Pattern', 'OpenTelemetry / trace_id', 'Circuit Breaker', 'Bulkhead'],
    },
  ],
  aiDeclared: {
    items: [
      'Tool: "TITAN Research Intelligence Skill v5.1".',
      'Stages where it was used: data classification, Evidence Cards, hypothesis formulation, plan structuring, tracking-plan design.',
      'Declared validation: triangulation with theoretical frameworks, iterative review and internal consistency via traceability IDs.',
      'Ethical principle of the document: "zero hallucinations — no data was presented as real without declaring it was a projection".',
      'Closing of the document itself: "The TITAN Skill did not replace human judgment: it structured it, accelerated it and kept it aligned with the evidence. Every decision we present here passed through the filter of the skill and the team\'s validation."',
    ],
    source: {
      label: 'docs/m1/WORKTEST_CASES.md — Caso 4',
      href: 'https://github.com/MauroPX/excalibur/blob/v2/docs/m1/WORKTEST_CASES.md',
    },
  },

  metrics: [
    { value: '5', label: 'falsifiable hypotheses with theoretical framework' },
    { value: '6', label: 'methods in the mixed strategy' },
    { value: '17 pp.', label: 'final strategic deliverable' },
    { value: '28%', label: 'baseline completion (problem to investigate)' },
  ],
  timeline: [
    { company: 'Codesa', role: 'Problem framing + 5 hypotheses + theoretical framework', period: '7 días' },
    { company: 'Codesa', role: 'Mixed methodology + prioritization + 4-phase plan', period: '7 días', isLast: true },
  ],
  techStack: [
    { skill: 'Mixed research (funnel · heuristic · interviews · usability · CES)', level: 86, levelLabel: 'Applied' },
    { skill: 'OST + extended RICE prioritization', level: 84, levelLabel: 'Applied' },
    { skill: 'Behavioral frameworks (SDT · Calm Tech · DwI)', level: 82, levelLabel: 'Applied' },
  ],

  footerDisclaimer: 'Selection work test — not a paid engagement.',
  nextCase: { slug: 'solidaria', title: 'Solidaria Portal — Self-directed diagnostic', href: '/pruebas-tecnicas/solidaria' },
})
