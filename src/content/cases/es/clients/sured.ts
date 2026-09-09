/**
 * Caso de cliente — SuRed / Matrix Giros y Servicios · Integración B2B Baloto/Miloto (2024).
 * Fuente: docs/m1/CONTENT_COPY_STRATEGY.md §5 / §7.5
 * + docs/Career_Dossier/CONSOLIDACION_MAESTRA §5 / CAREER OS SSOT CAPA 2.7.
 * Sin Figma en ninguna fuente revisada. Repositorio privado (no se enlaza).
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import { validateCaseData } from '@/components/templates/CasePage/validateCaseData'

export const suredCase: CasePageData = validateCaseData({
  slug: 'sured',
  title: 'SuRed / Matrix Giros — Integración B2B Baloto/Miloto',
  description:
    'Integración B2B transaccional para activar los productos de lotería regulada Baloto y Miloto (Operador Nacional de Juegos) en los canales digitales de SuRed. Requerimiento R-759841: seguridad, conciliación diaria auditable, reportería y cumplimiento normativo.',
  tags: ['Fintech', 'Integración B2B', 'Seguridad transaccional', 'Regulación', 'PCI-DSS'],

  caseType: 'client',
  caseFormat: 'evidencia-viva',

  valor:
    'No entregué solo una pantalla de compra — entregué la arquitectura de seguridad y conciliación que hace que mover dinero regulado (apuestas) sea auditable, no solo funcional.',
  situacion:
    'SuRed necesitaba activar los productos de lotería Baloto y Miloto en su App y Web, en alianza con el Operador Nacional de Juegos (ONJ) — un canal de dinero regulado, no un feature de producto común.',
  objetivo:
    'Estructurar los requerimientos técnicos (Historias de Usuario Épicas) y liderar la integración B2B end-to-end: seguridad, conciliación, reportería y cumplimiento normativo.',
  accion: [
    {
      decision: 'Cómo activar un canal de dinero regulado',
      discarded: 'Replicar el flujo de compra estándar de la app sin controles adicionales',
      chosen: 'Arquitectura de seguridad dedicada (JWT con expiración a 60 min + cifrado SHA-256), conciliación automática de doble chequeo diario contra archivos SFTP del ONJ, y validación de identidad contra listas de control gubernamentales (SIPLAFT / PEP)',
      why: 'Un error de conciliación o una identidad no validada en un canal de apuestas es un riesgo legal y financiero directo, no solo un bug de UX',
    },
  ],
  resultado:
    'Canal Baloto/Miloto activo en producción dentro de SuRed, con 6 servicios REST integrados con el ONJ (reglas del juego, sorteos, apuestas, informes, consulta/pago de premio, reverso), tirilla digital en PDF (JasperReports), reportería contable automatizada y conciliación diaria de doble chequeo sin intervención manual (códigos de discrepancia 10/20/30).',
  aprendizaje:
    'En dominios regulados, la seguridad y la conciliación no son "no-funcionales" — son el producto.',

  methodology: [
    { slug: 'historias-epicas', label: 'Historias de Usuario Épicas' },
    { slug: 'seguridad-transaccional', label: 'Seguridad transaccional (JWT / SHA-256)' },
    { slug: 'conciliacion-sftp', label: 'Conciliación SFTP de doble chequeo' },
  ],

  metrics: [
    { value: '6', label: 'servicios REST integrados con el ONJ' },
    { value: '60 min', label: 'expiración del token JWT (SHA-256)' },
    { value: '2×/día', label: 'conciliación automática de doble chequeo' },
    { value: 'PDF', label: 'tirilla digital + reportería contable' },
  ],
  timeline: [
    { company: 'SuRed / Matrix Giros', role: 'Requerimiento R-759841 + Historias de Usuario Épicas', period: '2024' },
    { company: 'SuRed / Matrix Giros', role: 'Servicios REST + arquitectura de seguridad (JWT/SHA-256)', period: '2024' },
    { company: 'SuRed / Matrix Giros', role: 'Conciliación SFTP + tiquetes digitales + go-live', period: '2024', isLast: true },
  ],
  techStack: [
    { skill: 'JWT / SHA-256 · PCI-DSS', level: 88, levelLabel: 'Avanzado' },
    { skill: 'Integración SFTP/SSH', level: 85, levelLabel: 'Avanzado' },
    { skill: 'JasperReports', level: 82, levelLabel: 'Avanzado' },
    { skill: 'Cumplimiento SIPLAFT / Habeas Data', level: 85, levelLabel: 'Avanzado' },
  ],

  nextCase: { slug: 'parking-ruedaz', title: 'Parking International / Ruedaz — Ecosistema E2E' },
})
