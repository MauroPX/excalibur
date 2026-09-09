/**
 * Caso de cliente — SuRed / Matrix Giros y Servicios · Integración B2B Baloto/Miloto (2024). — versión EN (traducción de es/clients/sured.ts)
 * Fuente: docs/m1/CONTENT_COPY_STRATEGY.md §5 / §7.5
 * + docs/Career_Dossier/CONSOLIDACION_MAESTRA §5 / CAREER OS SSOT CAPA 2.7.
 * Sin Figma en ninguna fuente revisada. Repositorio privado (no se enlaza).
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import { validateCaseData } from '@/components/templates/CasePage/validateCaseData'

export const suredCase: CasePageData = validateCaseData({
  slug: 'sured',
  title: 'SuRed / Matrix Giros — Baloto/Miloto B2B integration',
  description:
    "Transactional B2B integration to enable the regulated lottery products Baloto and Miloto (Operador Nacional de Juegos) in SuRed's digital channels. Requirement R-759841: security, auditable daily reconciliation, reporting and regulatory compliance.",
  tags: ['Fintech', 'B2B integration', 'Transactional security', 'Regulation', 'PCI-DSS'],

  caseType: 'client',
  caseFormat: 'evidencia-viva',

  valor:
    'I did not just deliver a purchase screen — I delivered the security and reconciliation architecture that makes moving regulated money (betting) auditable, not just functional.',
  situacion:
    'SuRed needed to enable the Baloto and Miloto lottery products in its App and Web, in partnership with the Operador Nacional de Juegos (ONJ) — a regulated money channel, not an ordinary product feature.',
  objetivo:
    'Structure the technical requirements (Epic User Stories) and lead the end-to-end B2B integration: security, reconciliation, reporting and regulatory compliance.',
  accion: [
    {
      decision: 'How to enable a regulated money channel',
      discarded: "Replicate the app's standard purchase flow with no additional controls",
      chosen: "Dedicated security architecture (JWT expiring at 60 min + SHA-256 encryption), automatic double-check daily reconciliation against the ONJ's SFTP files, and identity validation against government control lists (SIPLAFT / PEP)",
      why: 'A reconciliation error or an unvalidated identity in a betting channel is a direct legal and financial risk, not just a UX bug',
    },
  ],
  resultado:
    'Baloto/Miloto channel live in production within SuRed, with 6 REST services integrated with the ONJ (game rules, draws, bets, reports, prize query/payment, reversal), digital PDF receipt (JasperReports), automated accounting reporting and double-check daily reconciliation with no manual intervention (discrepancy codes 10/20/30).',
  aprendizaje:
    'In regulated domains, security and reconciliation are not "non-functional" — they are the product.',

  methodology: [
    { slug: 'historias-epicas', label: 'Epic User Stories' },
    { slug: 'seguridad-transaccional', label: 'Transactional security (JWT / SHA-256)' },
    { slug: 'conciliacion-sftp', label: 'Double-check SFTP reconciliation' },
  ],

  metrics: [
    { value: '6', label: 'REST services integrated with the ONJ' },
    { value: '60 min', label: 'JWT token expiration (SHA-256)' },
    { value: '2×/day', label: 'automatic double-check reconciliation' },
    { value: 'PDF', label: 'digital receipt + accounting reporting' },
  ],
  timeline: [
    { company: 'SuRed / Matrix Giros', role: 'Requirement R-759841 + Epic User Stories', period: '2024' },
    { company: 'SuRed / Matrix Giros', role: 'REST services + security architecture (JWT/SHA-256)', period: '2024' },
    { company: 'SuRed / Matrix Giros', role: 'SFTP reconciliation + digital receipts + go-live', period: '2024', isLast: true },
  ],
  techStack: [
    { skill: 'JWT / SHA-256 · PCI-DSS', level: 88, levelLabel: 'Advanced' },
    { skill: 'SFTP/SSH integration', level: 85, levelLabel: 'Advanced' },
    { skill: 'JasperReports', level: 82, levelLabel: 'Advanced' },
    { skill: 'SIPLAFT / Habeas Data compliance', level: 85, levelLabel: 'Advanced' },
  ],

  nextCase: { slug: 'parking-ruedaz', title: 'Parking International / Ruedaz — E2E ecosystem' },
})
