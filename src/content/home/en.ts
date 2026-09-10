/**
 * Contenido EN de la portada (Home) — Fase G (traducción de home/es.ts).
 * Cero cifras inventadas: todo se cruza con src/content/cases/** o con
 * docs/m1/CONTENT_COPY_STRATEGY.md §7 (FAQ AEO ya reconciliada).
 */
import type { FaqItem, StackCategory, IndustryEntry } from './es'

// ── FAQ ──────────────────────────────────────────────────────────────────────
// Fuente de verdad: CONTENT_COPY_STRATEGY.md §7 (8 preguntas AEO, ya reconciliadas
// — niveles WCAG correctos, sin el "$3.000–$25.000" retirado esta sesión).
export const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'What does a Staff Product Architect do and how is it different from a senior designer?',
    a: 'A Staff Product Architect designs the architecture of a whole product — Design System, accessibility governance and handoff to development — not just individual screens. Mauricio Gómez has operated in that role at BBVA, Correos Chile and FID Seguros, leading ecosystems of 400+ components.',
  },
  {
    q: 'What is TITAN v7.0?',
    a: 'TITAN v7.0 is a multi-AI product orchestration framework, created by Mauricio Gómez, that automates design governance, WCAG compliance and handoff documentation across 6 product phases (M0–M5). It is compatible with Claude, ChatGPT, Gemini, Cursor, Windsurf and local models.',
  },
  {
    q: 'What level of WCAG accessibility has he implemented?',
    a: 'AAA conformance by scope (beyond the AA regulatory minimum) at Universidad de La Salle, evidenced by automated validation; AA at BBVA Colombia and FID Seguros; and a 654-issue audit under a MinTIC mandate at FDN, with official WCAG 2.1 AA certification (Dec 2023, revalidated Sep 2024).',
  },
  {
    q: 'Is he available for remote projects right now?',
    a: 'Yes. Remote contracts available immediately, compensation in USD, async-first approach, based in Bogotá, Colombia.',
  },
  {
    q: 'Which industries does he have experience in?',
    a: 'Fintech (BBVA, Redeban, IDPay, Siclo, FID Seguros), GovTech (FDN, Aportes en Línea, DNP-SINERGIA), Logistics (Correos de Chile), EdTech (Universidad de La Salle), Health (Colsanitas), regulated gambling (SuRed/Matrix Giros) and Mobility/Parking (Parking International/Ruedaz).',
  },
  {
    q: 'How long does a Design System built from scratch with this process take?',
    a: 'It depends on the scope and the existing backend. At Correos Chile, the Merkén Design System (on the order of 400+ components on M3) was built spanning 3 products — Business Portal, Virtual Branch and App — and accelerated the handoff to development by eliminating spec ambiguity.',
  },
  {
    q: 'Does he work with teams that use Angular as well as React?',
    a: 'Yes. At Universidad de La Salle the accessibility system (AAA target by scope) was built on Angular Material; in most fintech cases (BBVA, Correos Chile, FID Seguros) he worked on React with MUI.',
  },
  {
    q: 'How does he measure the real impact of a Design System, beyond the number of components?',
    a: 'With business and governance metrics, not just delivery ones: at BBVA, 5/5 communication quality (unanimous, 3 Product Owners) and 100% on-time delivery; at Correos Chile, a Design System spanning 3 products; at FID Seguros, a D↔D handoff model (~1,000 governance rows) on Carbon + Material guidelines.',
  },
]

// ── Stack ────────────────────────────────────────────────────────────────────
// Las 6 categorías reales de v1 (#stack-heading). Cada `item` es una herramienta o
// método real — NO se le asigna un "nivel de dominio" (eso era dato fabricado en v2).
// El radar grafica `appliedIn.length`: en cuántos casos reales (src/content/cases/**)
// se aplicó esa categoría — un entero verificable, no un porcentaje inventado.
export const STACK_CATEGORIES: StackCategory[] = [
  {
    id: 'design-systems',
    icon: 'design',
    label: 'Design & Systems',
    items: [
      'Figma (Variables / Tokens)', 'Storybook', 'Material Design 3', 'React / MUI',
      'Angular Material', 'Atomic Design', 'Design Tokens', 'Token Pipelines',
      'Component Architecture', 'Carbon DS', 'Flutter', 'Figma Dev Mode',
    ],
    appliedIn: ['correos-chile', 'bbva', 'lasalle', 'fid-seguros', 'parking-ruedaz', 'solidaria', 'bcs', 'excalibur'],
  },
  {
    id: 'accessibility',
    icon: 'a11y',
    label: 'Accessibility',
    items: [
      'WCAG 2.2 AA/AAA', 'WCAG 2.1', 'Section 508', 'IAAP', 'ARIA', 'axe DevTools',
      'Lighthouse', 'MinTIC / NTC 5854', 'EN 301 549', 'Web Vitals',
      'Screen Reader Testing', 'Keyboard Navigation',
    ],
    appliedIn: ['fdn', 'lasalle', 'bcs', 'fleetcontrol', 'solidaria', 'excalibur', 'parking-ruedaz'],
  },
  {
    id: 'ai-automation',
    icon: 'ai',
    label: 'AI & Automation',
    items: [
      'TITAN v7.0 (autor)', 'Prompt Engineering', 'Claude API', 'Gemini Gems', 'n8n',
      'AI Orchestration', 'Generative UI', 'Cursor', 'Firebase Studio', 'RAG Systems',
    ],
    appliedIn: ['bbva', 'fleetcontrol', 'codesa', 'excalibur'],
  },
  {
    id: 'ux-cx',
    icon: 'strategy',
    label: 'UX/CX Methods',
    items: [
      'Service Blueprint', 'Customer Journey', 'User Research', 'Usability Testing',
      'JTBD', 'Continuous Discovery', 'A/B Testing', 'Information Architecture',
      'HCD', 'Design Sprint', 'Double Diamond', 'Heuristic Evaluation',
    ],
    appliedIn: [
      'correos-chile', 'bbva', 'codesa', 'solidaria', 'parking-ruedaz', 'siclo-idpay',
      'fid-seguros', 'fleetcontrol', 'bcs', 'fdn', 'sured', 'excalibur',
    ],
  },
  {
    id: 'designops',
    icon: 'devops',
    label: 'DesignOps & Process',
    items: [
      'DesignOps', 'BPM', 'DDD', 'SAFe', 'Agile / Scrum', 'Developer Handoff',
      'QA Visual', 'SDLC', 'PLG', 'Craft Excellence', 'Systems Thinking',
    ],
    appliedIn: [
      'correos-chile', 'bbva', 'fid-seguros', 'solidaria', 'siclo-idpay', 'sured',
      'parking-ruedaz', 'excalibur', 'bcs', 'fdn',
    ],
  },
  {
    id: 'analytics-tools',
    icon: 'analytics',
    label: 'Analytics & Tools',
    items: [
      'Amplitude', 'PostHog', 'GA4', 'Hotjar', 'SQL', 'Jira', 'Confluence', 'Notion',
      'Playwright', 'Docker', 'Git', 'FigJam',
    ],
    appliedIn: ['codesa', 'solidaria', 'excalibur', 'bcs', 'fleetcontrol', 'sured', 'fid-seguros', 'parking-ruedaz'],
  },
  {
    id: 'devops',
    icon: 'delivery',
    label: 'DevOps & Continuous Delivery',
    items: [
      'CI/CD (GitHub Actions)', 'Docker', 'Vercel', 'Railway', 'Trunk-based / PRs',
      'Preview Deploys', 'Storybook CI', 'Chromatic', 'Environment config',
      'Observability', 'SDLC',
    ],
    appliedIn: ['excalibur', 'solidaria', 'fleetcontrol', 'sured', 'fid-seguros', 'siclo-idpay', 'bcs'],
    methodologySlug: 'devops-entrega-continua',
  },
  {
    id: 'ddd',
    icon: 'ddd',
    label: 'Domain-Driven Design',
    items: [
      'Bounded Contexts', 'Ubiquitous language', 'Context Mapping', 'Event Storming',
      'BPMN 2.0', 'OpenAPI contracts', 'ER data model', 'Aggregates / Entities',
      'Upstream / Downstream', 'Anti-Corruption Layer',
    ],
    appliedIn: ['fid-seguros', 'solidaria', 'siclo-idpay', 'sured', 'correos-chile', 'bbva', 'excalibur'],
    methodologySlug: 'ddd',
  },
  {
    id: 'data-driven',
    icon: 'data',
    label: 'Data-Driven Design',
    items: [
      'Measurable hypotheses', 'A/B Testing', 'Funnel analysis', 'North Star / KPIs',
      'RICE + Trust/Inclusion', 'Opportunity Solution Tree', 'Event instrumentation',
      'Cohorts', 'ER data model', 'Amplitude / PostHog',
    ],
    appliedIn: ['codesa', 'bbva', 'parking-ruedaz', 'solidaria', 'siclo-idpay', 'fleetcontrol', 'excalibur'],
    methodologySlug: 'data-driven-design',
  },
  {
    id: 'qa-asq',
    icon: 'qa',
    label: 'QA & ASQ',
    items: [
      'Playwright E2E', '@axe-core/playwright', 'jest-axe', 'Testing Library',
      'Visual regression (Chromatic)', 'Manual a11y QA (NVDA/JAWS)',
      'Acceptance criteria', 'Blocking CI gates', 'Lighthouse CI', 'Cross-browser',
    ],
    appliedIn: ['excalibur', 'fdn', 'lasalle', 'bcs', 'fleetcontrol', 'solidaria'],
    methodologySlug: 'qa-asq',
  },
]

// ── Flagship — Correos Chile ─────────────────────────────────────────────────
// Mismo caso que src/content/cases/clients/correos-chile.ts — reconciliado C9
// (250 envíos no 297, sin "12→6"/"10 devs"/">95%", DS transversal a 3 productos).
export const FLAGSHIP = {
  badge: '★ Correos Chile · B2B · Logistics',
  title: 'B2B Business Portal — Full ecosystem',
  summary:
    'Before opening Figma: 250 real shipments studied and the brand manual absorbed. The result was not a screen — it was the Merkén Design System, spanning 3 products.',
  metrics: [
    { value: '3', label: 'products with a single DS (Business Portal · Virtual Branch · App)' },
    { value: '400+', label: 'components on M3 (Merkén DS)' },
    { value: '11', label: 'data-model fields · 5 scenarios/flow' },
    { value: 'MD3', label: 'Design System tokens, single source' },
  ],
  phases: [
    { num: '01', title: 'Real data model', body: '250 shipments, 11 fields — analyzed before designing anything.' },
    { num: '02', title: '5 scenarios per flow', body: 'Happy path, alternatives, errors and edge cases mapped before opening Figma.' },
    { num: '03', title: 'Merkén Design System', body: 'On the order of 400+ React/MUI components on M3, with documented tokens and guidelines.' },
    { num: '04', title: '3 products, a single DS', body: 'Business Portal, Virtual Branch and mobile App — the Merkén Design System served all 3.' },
  ],
  figma: [
    {
      label: 'Business Portal — features',
      href: 'https://www.figma.com/design/5HUHHeTR2Lqs0CBjdcCehj/%E2%9C%85_-CorreosChile-Merken-_-Structura---Funcionalidades-_ID-PE-?node-id=2466-141829&t=6XCg7ewFo7wDu1Ir-1',
    },
    {
      label: 'Merkén Design System — guidelines',
      href: 'https://www.figma.com/design/9GR3CAgD6kshwsDcilqYum/CorreosChile-Merken_DS_Guidelines?node-id=49823-12141&t=NdP0PvBWbEDqLnmW-1',
    },
  ],
  caseHref: '/casos/correos-chile',
}

// ── Industrias ───────────────────────────────────────────────────────────────
// Fuente: CONTENT_COPY_STRATEGY.md §7 pregunta 5 (ya reconciliada). NO se agregan
// los nombres no verificados del grid de v1 (Fingo, Powwi, Skandia, Mentu, …).
export const INDUSTRIES: IndustryEntry[] = [
  { icon: 'fintech', label: 'Fintech / Banking', clients: ['BBVA', 'Siclo / IDPay', 'Redeban'] },
  { icon: 'insurance', label: 'Insurance', clients: ['FID Seguros (Chile)'] },
  { icon: 'govtech', label: 'GovTech / Government', clients: ['FDN — ActivaMC', 'Colegio Médico Colombiano', 'Aportes en Línea', 'DNP-SINERGIA'] },
  { icon: 'logistics', label: 'Logistics', clients: ['Correos de Chile'] },
  { icon: 'edtech', label: 'EdTech / Education', clients: ['Universidad de La Salle', 'ADL Digital Labs'] },
  { icon: 'health', label: 'Health', clients: ['Colsanitas', 'PQEB — ActivaMC'] },
  { icon: 'energy', label: 'Energy', clients: ['Ecopetrol'] },
  { icon: 'media', label: 'Media / Publishing', clients: ['El Tiempo Casa Editorial'] },
  { icon: 'gaming', label: 'Regulated gambling', clients: ['SuRed / Matrix Giros'] },
  { icon: 'parking', label: 'Mobility / Parking', clients: ['Parking International / Ruedaz'] },
]

// ── Home content moved from page.tsx (was hardcoded ES) ─────────────────────
import type { NavSystemProps } from '@/components/organisms/NavSystem'
import type { TitanModule } from '@/components/organisms/TitanSection'
import type { HeroMetric } from './es'

export const HERO_METRICS: HeroMetric[] = [
  { value: '+10', label: 'years of experience' },
  { value: '4', label: 'countries' },
  { value: '20+', label: 'products in production' },
  { value: '654', label: 'WCAG failures fixed' },
]

export const SYMPTOM_CARDS: NavSystemProps['symptomCards'] = [
  { title: 'My system is inaccessible', description: 'WCAG 2.2 audit and removal of accessibility failures with verifiable technical evidence.', tag: 'cliente', targetSlug: 'fdn' },
  { title: 'Time-to-market is too long', description: 'Diagnose the real data and scenarios before designing: Correos Chile’s Merkén Design System accelerated the handoff to engineering.', tag: 'cliente', targetSlug: 'correos-chile' },
  { title: 'We have no Design System', description: 'Design Systems from scratch with governance, single-source tokens and automated verification.', tag: 'cliente', targetSlug: 'fid-seguros' },
  { title: 'Our platform is legacy', description: 'Migration without explicit governance fragments. FID Seguros: a D↔D framework before moving the first screen.', tag: 'cliente', targetSlug: 'fid-seguros' },
]

export const ROLE_CARDS: NavSystemProps['roleCards'] = [
  { title: 'I’m a CTO / Founder', description: 'End-to-end technical scalability. Correos Chile: one Design System spanning 3 products (Business Portal, Virtual Branch, App).', tag: 'cliente', targetSlug: 'correos-chile' },
  { title: 'I’m a recruiter', description: '10 years, 4 countries, verifiable evidence per case: metrics, decisions and declared AI use.', tag: 'reclutador', targetSlug: 'bbva' },
  { title: 'I’m a PM / PO', description: 'TITAN v7.0: an M0-to-M5 methodology with no context loss between stages.', tag: 'comunidad', targetSlug: 'bbva' },
  { title: 'I’m an engineering lead', description: 'Audit of 654 incidents + Core Web Vitals at FDN. LCP from 25.2s to a <2.5s target.', tag: 'cliente', targetSlug: 'fdn' },
]

export const TITAN_MODULES: TitanModule[] = [
  { hubName: 'Foundation', hubTitle: 'M0 — Vision and structure', description: 'Diagnosis, ADRs and project governance. No solid base without M0.', momentum: 'M0', commandsCount: 12 },
  { hubName: 'Strategy', hubTitle: 'M1 — Backlog and roadmap', description: 'Customer journeys, prioritized backlog and risk map.', momentum: 'M1', commandsCount: 10 },
  { hubName: 'Architecture', hubTitle: 'M2 — Spec and contracts', description: 'SPEC_DOCUMENT, DESIGN_TOKENS and API contracts. No Forge without M2.', momentum: 'M2', commandsCount: 11 },
  { hubName: 'Execution', hubTitle: 'M3 — BFL + CI/CD', description: 'BFL sprints with Blueprint→Forge→Lock: every component passes lint, typecheck, tests, axe, build and a certificate before LOCK.', momentum: 'M3', commandsCount: 26 },
  { hubName: 'Intelligence', hubTitle: 'M4 — RAG and backend', description: 'Strapi v5 + pgvector + Claude API. The AI knows every project in the portfolio.', momentum: 'M4', commandsCount: 8 },
  { hubName: 'Operations', hubTitle: 'M5 — Monitoring and improvement', description: 'Observability, alerts and continuous improvement cycles.', momentum: 'M5', commandsCount: 6 },
]

export const CASE_METRICS: Record<string, HeroMetric> = {
  'correos-chile': { value: '400+', label: 'components on M3 (Merkén DS)' },
  bbva: { value: '5/5', label: 'from 3 Product Owners' },
  fdn: { value: '-90%', label: 'LCP target' },
  lasalle: { value: 'AAA', label: 'by scope (vs. the AA minimum)' },
  'fid-seguros': { value: '~1,000', label: 'D↔D governance rows' },
  sured: { value: '2×/day', label: 'auditable reconciliation' },
  'parking-ruedaz': { value: '+90%', label: 'recurring use' },
  'siclo-idpay': { value: '10', label: 'ER tables + OpenAPI' },
}
