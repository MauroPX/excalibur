/**
 * Caso de cliente — Siclo / IDPay (Finauro) · Módulo de gestión de convenios de libranza (2025). — versión EN (traducción de es/clients/siclo-idpay.ts)
 * Fuente: docs/m1/CONTENT_COPY_STRATEGY.md §5 / §7.5
 * + docs/Career_Dossier/CONSOLIDACION_MAESTRA §3 / CAREER OS SSOT CAPA 2.3 / 7.2.
 * Sin Figma en ninguna fuente revisada.
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import { validateCaseData } from '@/components/templates/CasePage/validateCaseData'

export const sicloIdpayCase: CasePageData = validateCaseData({
  slug: 'siclo-idpay',
  title: 'Siclo / IDPay — Agreements module specification',
  description:
    'Full UX and technical specification of the payroll-loan (libranza) agreements management module for a B2B SaaS (Siclo / IDPay-Finauro): from wireframe to data model and API contracts. Replaces a manual 48-variable commercial matrix in Excel with a transactional engine with automated business rules.',
  tags: ['SaaS B2B', 'Technical specification', 'Data model', 'OpenAPI', 'Fintech'],

  caseType: 'client',
  caseFormat: 'evidencia-viva',

  valor:
    'I did not just deliver wireframes — I delivered the full specification: from the screen to the data model and the API contracts that sustain it.',
  situacion:
    'The payroll-loan agreements management module operated without a full UX or technical specification, on top of a manual 48-variable commercial matrix in Excel.',
  objetivo:
    'Deliver a specification that covers the full lifecycle (UX + technical), not just screens.',
  accion: [
    {
      decision: 'Scope of the specification deliverable',
      discarded: 'Deliver only wireframes',
      chosen: '4 flows + 11 wireframes + data-model review (10 tables, ER diagram) + API contracts (OpenAPI) + CX metrics framework (CSAT, CES)',
      why: 'A specification without the data model behind it is not complete',
    },
  ],
  resultado:
    'Full lifecycle documented: transactional 6-step agreement-creation wizard (general information, renewal, owners, contract types, line items, documents), commercial rules engine under Law 1527 (payment-capacity calculation, $100M COP placement cap, block on "Z" risk rating), a single organizations table with unique-NIT validation, and a daily backend Job for expiry detection and notification triggering.',
  aprendizaje:
    'A UX specification without its data model and API contracts is not finished — the same criterion as in the E2E diagnostics of other cases.',

  methodology: [
    { slug: 'modelo-datos-er', label: 'ER data model' },
    { slug: 'openapi', label: 'OpenAPI contracts' },
    { slug: 'reglas-negocio', label: 'Rules engine (Law 1527)' },
  ],

  metrics: [
    { value: '10', label: 'tables in the ER data model' },
    { value: '11', label: 'wireframes (4 flows)' },
    { value: '6', label: 'steps in the agreements wizard' },
    { value: '48', label: 'Excel variables replaced by the engine' },
  ],
  timeline: [
    { company: 'Siclo / IDPay', role: 'Analysis of the 48-variable commercial matrix', period: '2025' },
    { company: 'Siclo / IDPay', role: '4 flows + 11 wireframes + 6-step wizard', period: '2025' },
    { company: 'Siclo / IDPay', role: 'ER model (10 tables) + OpenAPI + daily Job', period: '2025', isLast: true },
  ],
  techStack: [
    { skill: 'ER data modeling', level: 88, levelLabel: 'Advanced' },
    { skill: 'OpenAPI / Swagger', level: 85, levelLabel: 'Advanced' },
    { skill: 'Business rules (Law 1527)', level: 85, levelLabel: 'Advanced' },
    { skill: 'CX metrics (CSAT / CES)', level: 82, levelLabel: 'Advanced' },
  ],

  nextCase: { slug: 'correos-chile', title: 'Correos Chile — B2B Business Portal' },
})
