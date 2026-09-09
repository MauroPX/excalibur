/**
 * EN content for /metodologia — Phase G. Full translation of ./es.
 *
 * `slug` and `group` are kept identical to ./es: `slug` is the stable anchor
 * target of each case's `methodology` chips; `group` is the grouping key (the
 * visible group label is translated in the page via the `methodology.groups.*`
 * i18n namespace).
 */
import type { MethodologyEntry } from './es'

export const METHODOLOGY_ENTRIES: MethodologyEntry[] = [
  // ── Narrative & decision ─────────────────────────────────────────────────
  {
    slug: 'star-l',
    label: 'STAR-L (Situation · Task · Action · Result · Learned)',
    group: 'Narrativa y decisión',
    body: 'Backbone of every case. The "L" (Learned) closes with the learning applied afterwards — the piece classic STAR skips. The "Action" is shown as a decision (options discarded → chosen → why), not as a task list.',
  },
  {
    slug: 'decisiones-como-decisiones',
    label: 'Decision → discarded options → why',
    group: 'Narrativa y decisión',
    body: 'Every technical decision is documented with the alternative(s) that were discarded and the reason. Without the alternatives, a decision cannot be evaluated as one.',
  },
  {
    slug: 'content-framing',
    label: 'Content Framing (Situation + Impact + Action)',
    group: 'Narrativa y decisión',
    body: 'Content-design structure used at BBVA for transactional messages: first the situation, then the impact for the person, then the action or solution.',
  },
  {
    slug: 'walkthrough-inmersivo',
    label: 'Immersive Walkthrough',
    group: 'Narrativa y decisión',
    body: 'Evolution from the passive tutorial (a split-screen "Coach Mark") to a full-screen journey where the user only advances by interacting — "learn by doing", with low cognitive load (1 action per screen).',
  },
  {
    slug: 'historias-epicas',
    label: 'Epic User Stories (EUS)',
    group: 'Narrativa y decisión',
    body: 'Structuring technical requirements as epics before breaking them down into features and acceptance criteria — used to lead end-to-end B2B integrations (SuRed).',
  },

  // ── Design systems ──────────────────────────────────────────────────────
  {
    slug: 'atomic-design',
    label: 'Atomic Design',
    group: 'Sistemas de diseño',
    body: 'Atoms → molecules → organisms → templates → pages, with data-atomic attributes for traceability. Foundation of the design systems for Correos Chile (Merkén), La Salle, Ruedaz and of this very site.',
  },
  {
    slug: 'design-tokens-m3',
    label: 'Design Tokens (Material Design 3)',
    group: 'Sistemas de diseño',
    body: 'M3 color roles generated from a single source and audited in CI — zero hardcoded hex. One place where the color of the whole system changes.',
  },
  {
    slug: 'design-tokens-hct',
    label: 'Color tokens in HCT space',
    group: 'Sistemas de diseño',
    body: 'Algorithmic palette generation from a brand color in Material Design 3’s HCT space, with AA contrast verified in light and dark (Solidaria, from #004173).',
  },
  {
    slug: 'material-design-3',
    label: 'Material Design 3 (HCT)',
    group: 'Sistemas de diseño',
    body: 'A system of 34+ color roles per scheme, verified field by field against the official Material Theme Builder export (BCS: 66 automated checks across 6 schemes).',
  },
  {
    slug: 'contrast-audit',
    label: 'Automated contrast audit',
    group: 'Sistemas de diseño',
    body: 'A script that runs every contrast check (official pairs × schemes) in CI. An error caught by hand does not scale to dozens of roles × schemes.',
  },
  {
    slug: 'sistema-gemas',
    label: 'GEMAS system (5 maturity phases)',
    group: 'Sistemas de diseño',
    body: 'Brand → UX writing and cognition → UI/motion → production metrics → business-rule architecture. Governs the production of guided tutorials for any future product/segment (BBVA).',
  },
  {
    slug: 'bfl-blueprint-forge-lock',
    label: 'BFL cycle (Blueprint → Forge → Lock)',
    group: 'Sistemas de diseño',
    body: 'Every component goes through a blueprint (contract + gates), a forge (code + tests + stories) and a lock (version certificate). It blocks merges without a green CI.',
  },

  // ── Research & behavior ─────────────────────────────────────────────────
  {
    slug: 'self-determination-theory',
    label: 'Self-Determination Theory',
    group: 'Investigación y comportamiento',
    body: 'A motivation framework (autonomy, competence, relatedness) used to anchor research hypotheses and to write error messages that do not blame the user (Codesa).',
  },
  {
    slug: 'calm-technology',
    label: 'Calm Technology',
    group: 'Investigación y comportamiento',
    body: 'Principles for technology to demand the minimum attention necessary — applied to the design of a low-friction payment flow.',
  },
  {
    slug: 'design-with-intent',
    label: 'Design with Intent (Dan Lockton)',
    group: 'Investigación y comportamiento',
    body: 'Design patterns for influencing behavior explicitly and ethically — e.g. locking the UI after a click to prevent double charging (Codesa).',
  },
  {
    slug: 'ost-rice-extendido',
    label: 'Opportunity Solution Tree + extended RICE',
    group: 'Investigación y comportamiento',
    body: 'Prioritization with OST + RICE, extended with custom Trust and Inclusion axes when the domain (payments, vulnerable populations) requires it. The extension is declared, not disguised.',
  },
  {
    slug: 'jtbd',
    label: 'Jobs to be Done',
    group: 'Investigación y comportamiento',
    body: 'Modeling what the person is trying to achieve, not the solution they ask for — used to differentiate customer journeys by segment (Ruedaz: recurring B2C vs. corporate B2B).',
  },

  // ── Architecture & data ────────────────────────────────────────────────
  {
    slug: 'ddd',
    label: 'Domain-Driven Design',
    group: 'Arquitectura y datos',
    body: 'Model the domain (bounded contexts, ubiquitous language) before touching the UI. Foundation of the FID Seguros migration and the Solidaria diagnosis. The Guidewire InsuranceSuite research was the prior input for mastering the insurance sector’s patterns.',
  },
  {
    slug: 'ddd-bounded-contexts',
    label: 'DDD — Bounded Contexts (insurance)',
    group: 'Arquitectura y datos',
    body: 'A specific application of DDD to the insurance domain: APD as the upstream context (source of truth for coverages and rules), PolicyCenter/ClaimCenter/BillingCenter as downstream consumers, synchronized but decoupled. Input: self-directed research on Guidewire InsuranceSuite.',
  },
  {
    slug: 'arquitectura-desacoplada',
    label: 'Decoupled architecture (core → REST API → frontend)',
    group: 'Arquitectura y datos',
    body: 'Separate the business core, the API and the frontend so that connecting the real backend is an environment-variable change, not a rewrite (Solidaria).',
  },
  {
    slug: 'bpmn',
    label: 'BPMN 2.0',
    group: 'Arquitectura y datos',
    body: 'Business-process modeling with explicit actors before designing screens — e.g. quote engines and automated underwriting with 4 actors (FID Seguros).',
  },
  {
    slug: 'design-sprint',
    label: 'Design Sprint',
    group: 'Arquitectura y datos',
    body: 'An intensive 3–5 day exercise to prototype and align design variables with the domain model (FID Seguros).',
  },
  {
    slug: 'modelo-datos-er',
    label: 'ER data model',
    group: 'Arquitectura y datos',
    body: 'A UX spec is not finished without its data model: an entity-relationship diagram reviewed with the technical team (Siclo/IDPay: 10 tables).',
  },
  {
    slug: 'openapi',
    label: 'OpenAPI contracts',
    group: 'Arquitectura y datos',
    body: 'Define the API contracts (OpenAPI/Swagger) as part of the design deliverable, not afterwards — it removes the friction between design and backend.',
  },
  {
    slug: 'reglas-negocio',
    label: 'Business-rules engine',
    group: 'Arquitectura y datos',
    body: 'Replace manual Excel matrices with an engine of parameterized rules and validations (Siclo/IDPay: Law 1527, payment-capacity calculation, lending cap).',
  },
  {
    slug: 'seguridad-transaccional',
    label: 'Transactional security (JWT / SHA-256)',
    group: 'Arquitectura y datos',
    body: 'On regulated money channels, security is the product: JWT with short expiry, SHA-256–signed credentials, identity validation against control lists (SuRed).',
  },
  {
    slug: 'conciliacion-sftp',
    label: 'Double-check SFTP reconciliation',
    group: 'Arquitectura y datos',
    body: 'A daily automated process that cross-checks both parties’ transaction consolidations and classifies the discrepancies (codes 10/20/30) with no manual intervention (SuRed).',
  },

  // ── Accessibility ──────────────────────────────────────────────────────
  {
    slug: 'wcag-audit',
    label: 'WCAG 2.1 / 2.2 audit',
    group: 'Accesibilidad',
    body: 'A point-by-point manual audit with screen readers (NVDA/JAWS) and keyboard navigation, plus automated tools (axe DevTools, Lighthouse), with a prioritized gap analysis (FDN: 654 incidents).',
  },
  {
    slug: 'wcag-aaa',
    label: 'WCAG 2.2 AAA',
    group: 'Accesibilidad',
    body: 'When the risk is legal, "meeting the minimum" (AA) is still risk. La Salle: AAA assessing 18 categories with 4 roles per criterion.',
  },
  {
    slug: 'ntc-5854',
    label: 'NTC 5854 · MinTIC Resolution 1519',
    group: 'Accesibilidad',
    body: 'The Colombian accessibility regulation for public entities — audited alongside WCAG, not as a separate checklist.',
  },
  {
    slug: 'core-web-vitals',
    label: 'Core Web Vitals as an accessibility criterion',
    group: 'Accesibilidad',
    body: 'LCP, CLS and INP are treated as part of the accessible experience, not just as performance metrics (FDN: LCP from 25.2s to a <2.5s target).',
  },

  // ── Product & growth ──────────────────────────────────────────────────
  {
    slug: 'ucd',
    label: 'User-Centered Design (UCD)',
    group: 'Producto y crecimiento',
    body: 'Study the real data and the scenarios (happy path, alternatives, errors, edge cases) before opening Figma — diagnosing before designing avoids rework (Correos Chile).',
  },
  {
    slug: 'plg',
    label: 'Product-Led Growth',
    group: 'Producto y crecimiento',
    body: 'The product as the main driver of acquisition and retention — with conversion KPIs and ROI analysis on UX (Ruedaz: +90% recurring use).',
  },
]

/** Base input — not a case. Domain research on Guidewire InsuranceSuite. */
export const GUIDEWIRE_INSUMO = {
  title: 'Base input — Domain research: Guidewire InsuranceSuite',
  tag: 'Self-directed research (building sector knowledge)',
  disclaimer:
    'Not a commissioned test, nor a client, nor a delivered implementation. It is the domain knowledge base built before entering real interviews and diagnostics in the insurance sector (Solidaria, FID Seguros).',
  points: [
    'An integrated 4-layer methodological framework: Domain-Driven Design (strategic), Double Diamond (procedural), Design Ops (operational) and Service Blueprint (visual).',
    'Guidewire’s domain architecture (DDD): APD (Advanced Product Designer) as the upstream bounded context — single source of coverages, rates and rules — and PolicyCenter / ClaimCenter / BillingCenter as downstream consumers, synchronized but decoupled.',
    'The full lifecycle of a policy in 7 phases with their APIs: quoting, underwriting/approval, issuance/binding, billing/collection, endorsements, claims (FNOL to close) and renewal/retention — with the roles that approve each step.',
    'Service Blueprints and Empathy Maps: frontstage/backstage/support mapping of the issuance flow and the emotional states of customer and employee, with the design intervention for each state.',
    'A technical diagnosis of my own with risks and mitigations: concurrency on simultaneous edits (_revision field, 409 error), quoted vs. billed premium discrepancy in the PolicyCenter→BillingCenter sync, and use of Kafka / Composite API to avoid tight coupling.',
  ],
}
