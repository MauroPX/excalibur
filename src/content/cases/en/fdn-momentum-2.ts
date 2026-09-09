/**
 * Contenido — FDN · Momentum 2 (propuesta de arquitectura). — versión EN (traducción de es/fdn-momentum-2.ts)
 *
 * NO es una página de caso propia. Es una SECCIÓN dentro de /casos/fdn, con ancla propia,
 * badge propio ("📐 Estimación propia"), disclaimer propio y enlace cruzado al Momentum 1
 * (auditoría WCAG real, sí confirmada). Regla R-8 del blueprint EX-v2-TMPL-002 v1.1.0:
 * la separación de la narrativa del caso auditado tiene que ser inequívoca.
 *
 * Fuente verbatim: docs/m2/spec/CASE_PAGE_CONTENT_STRUCTURE.md §"Caso: FDN — Momentum 2".
 */
import type { Momentum2Section } from '../es/fdn-momentum-2'

export const fdnMomentum2: Momentum2Section = {
  anchorId: 'momentum-2-propuesta',
  badge: { icon: 'compass', label: 'own estimate — not fully built or approved' },
  valor:
    'I came in to audit accessibility. Looking at the full process, I found the root cause (a static site at end of life) and proposed the architecture that solves it — the difference between meeting the mandate and solving the problem the mandate did not mention.',
  objetivo:
    'Go beyond "meeting the audit mandate" and propose the architecture that solves the root cause of the 654 issues, not just document them.',
  accion: [
    {
      decision: 'Scope of the proposal',
      discarded: 'Only remediate the 654 individual issues on Drupal 7',
      chosen: 'Full migration to Next.js / Strapi / RAG',
      why: 'Drupal 7 is EOL — remediating issues without migrating is repairing a system that has to be replaced anyway',
    },
  ],
  aprendizaje:
    'A narrow technical mandate (audit) almost always hides a bigger problem (an architecture at the end of its useful life). This is the same pattern as in Solidaria and it defines how you approach any engagement: look at the whole system, not just the requested task.',
  honestyNote:
    'Different from Momentum 1 (WCAG audit, confirmed) — this is a value proposition, not a closed deliverable.',
  sections: [
    {
      num: '01',
      title: 'Why',
      body: 'A static site at EOL does not sustain the digital-reference role FDN needs.',
    },
    {
      num: '02',
      title: 'Proposed architecture',
      body: 'Next.js 14, Strapi v5, PostgreSQL + pgvector, Meilisearch, RAG with Claude API scoped to the FDN corpus, self-hosted PostHog per Law 1581.',
    },
    {
      num: '03',
      title: 'Estimated investment',
      body: 'CAPEX $100K–$174.5K USD — presented as a proposal, not as an executed budget.',
    },
    {
      num: '04',
      title: 'Target schedule',
      body: 'WCAG AA on 30 June 2026, launch on 30 September 2026.',
    },
  ],
  crossLink: {
    // apunta al inicio de la narrativa del caso auditado (Momentum 1),
    // que en la plantilla CasePage arranca en el bloque "Valor".
    label: '↑ Based on the findings of the real audit (Momentum 1)',
    href: '#valor-heading',
  },
  footerDisclaimer:
    'Architecture proposal — own estimate, not a deliverable already built or approved.',
}
