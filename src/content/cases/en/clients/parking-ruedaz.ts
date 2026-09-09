/**
 * Caso de cliente — Parking International / Ruedaz · Ecosistema E2E (2020-2022). — versión EN (traducción de es/clients/parking-ruedaz.ts)
 * Fuente: docs/m1/CONTENT_COPY_STRATEGY.md §5 / §7.5
 * + docs/Career_Dossier/CONSOLIDACION_MAESTRA §8 / CAREER OS SSOT CAPA 2.11.
 * Sin Figma en ninguna fuente revisada.
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import { validateCaseData } from '@/components/templates/CasePage/validateCaseData'

export const parkingRuedazCase: CasePageData = validateCaseData({
  slug: 'parking-ruedaz',
  title: 'Parking International / Ruedaz — E2E ecosystem',
  description:
    'End-to-end product ecosystem for the Ruedaz brand: 5 connected platforms (App, Web, Corporate Portal, Parking Inside, Parking Attendant) with a single design language and shared business rules. +90% recurring use versus traditional payment methods.',
  tags: ['Mobility', 'Product-Led Growth', 'E2E ecosystem', 'DesignOps', 'B2C / B2B'],

  caseType: 'client',
  caseFormat: 'evidencia-viva',

  valor:
    'I did not design a parking app — I designed the 5-platform ecosystem that sustains it, from the end user to the on-site attendant.',
  situacion:
    'Parking International needed an end-to-end product for its Ruedaz brand, covering end user, corporate portal and on-site operation as connected flows, not isolated ones.',
  objetivo:
    'Design the full system (App, Web, Corporate Portal, Parking Inside, Parking Attendant) with a single design language and shared business rules.',
  accion: [
    {
      decision: 'Design order of the 5 platforms',
      discarded: 'Design the end-user app first and solve the rest separately later',
      chosen: 'Ruedaz System Design (WCAG 2.1, Atomic Design) applied from the start to all 5 platforms, with Customer Journeys differentiated by segment (recurring B2C vs. corporate B2B with wallet and courtesy passes) and shared business rules for subscriptions and OCR coupon validation',
      why: 'Solving the platforms separately would have duplicated business rules and broken brand consistency between the end user and the attendant',
    },
  ],
  resultado:
    'Full ecosystem launched in the stores (Jul 2020), with a COP 59,900 monthly subscription billed automatically and an operational corporate virtual-wallet MVP. 90% increase in adoption and recurring use versus traditional payment methods. Omnichannel communications strategy (Push / SMS / E-mail / in-app) with a preventive alert at 165 minutes.',
  aprendizaje:
    'A B2C product with a B2B/operational counterpart requires designing the full system from day 1 — solving only the visible app is designing half the product.',

  methodology: [
    { slug: 'plg', label: 'Product-Led Growth' },
    { slug: 'jtbd', label: 'Jobs to be Done' },
    { slug: 'atomic-design', label: 'Atomic Design' },
  ],

  metrics: [
    { value: '+90%', label: 'recurring use vs. traditional methods' },
    { value: '5', label: 'connected platforms' },
    { value: '$59,900', label: 'COP/mo · automatic billing' },
    { value: 'OCR', label: 'automatic coupon redemption' },
  ],
  timeline: [
    { company: 'Parking International', role: 'Customer Journeys + MOTs (Frontstage/Backstage)', period: '2020' },
    { company: 'Parking International', role: 'Ruedaz System Design (5 platforms)', period: '2020' },
    { company: 'Parking International', role: 'Store launch + corporate wallet MVP', period: '2020-2022', isLast: true },
  ],
  techStack: [
    { skill: 'DesignOps · Atomic Design', level: 88, levelLabel: 'Advanced' },
    { skill: 'OCR (ScanProcess)', level: 82, levelLabel: 'Advanced' },
    { skill: 'Omnichannel (Push / SMS / Email)', level: 85, levelLabel: 'Advanced' },
    { skill: 'Material Design + WCAG 2.1', level: 85, levelLabel: 'Advanced' },
  ],

  nextCase: { slug: 'siclo-idpay', title: 'Siclo / IDPay — agreements module specification' },
})
