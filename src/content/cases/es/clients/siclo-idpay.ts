/**
 * Caso de cliente — Siclo / IDPay (Finauro) · Módulo de gestión de convenios de libranza (2025).
 * Fuente: docs/m1/CONTENT_COPY_STRATEGY.md §5 / §7.5
 * + docs/Career_Dossier/CONSOLIDACION_MAESTRA §3 / CAREER OS SSOT CAPA 2.3 / 7.2.
 * Sin Figma en ninguna fuente revisada.
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import { validateCaseData } from '@/components/templates/CasePage/validateCaseData'

export const sicloIdpayCase: CasePageData = validateCaseData({
  slug: 'siclo-idpay',
  title: 'Siclo / IDPay — Especificación del módulo de convenios',
  description:
    'Especificación UX y técnica completa del módulo de gestión de convenios de libranza para un SaaS B2B (Siclo / IDPay-Finauro): del wireframe al modelo de datos y los contratos de API. Reemplaza una matriz comercial manual de 48 variables en Excel por un motor transaccional con reglas de negocio automatizadas.',
  tags: ['SaaS B2B', 'Especificación técnica', 'Modelo de datos', 'OpenAPI', 'Fintech'],

  caseType: 'client',
  caseFormat: 'evidencia-viva',

  valor:
    'No entregué solo wireframes — entregué la especificación completa: de la pantalla al modelo de datos y los contratos de API que la sostienen.',
  situacion:
    'El módulo de gestión de convenios de libranza operaba sin especificación UX ni técnica completa, sobre una matriz comercial manual de 48 variables en Excel.',
  objetivo:
    'Entregar una especificación que cubra el ciclo de vida completo (UX + técnico), no solo pantallas.',
  accion: [
    {
      decision: 'Alcance del entregable de especificación',
      discarded: 'Entregar solo wireframes',
      chosen: '4 flujos + 11 wireframes + revisión del modelo de datos (10 tablas, diagrama ER) + contratos de API (OpenAPI) + marco de métricas CX (CSAT, CES)',
      why: 'Una especificación sin el modelo de datos detrás no es completa',
    },
  ],
  resultado:
    'Ciclo de vida completo documentado: wizard transaccional de creación de convenios en 6 pasos (información general, renovación, responsables, tipos de contrato, rubros, documentos), motor de reglas comerciales bajo la Ley 1527 (cálculo de capacidad de pago, tope de colocación $100M COP, bloqueo por calificación de riesgo "Z"), tabla única de organizaciones con validación de NIT único, y un Job diario de backend para detección de vencimientos y disparo de notificaciones.',
  aprendizaje:
    'Una especificación UX sin su modelo de datos y contratos de API no está terminada — mismo criterio que en los diagnósticos E2E de otros casos.',

  methodology: [
    { slug: 'modelo-datos-er', label: 'Modelo de datos ER' },
    { slug: 'openapi', label: 'Contratos OpenAPI' },
    { slug: 'reglas-negocio', label: 'Motor de reglas (Ley 1527)' },
  ],

  metrics: [
    { value: '10', label: 'tablas en el modelo de datos ER' },
    { value: '11', label: 'wireframes (4 flujos)' },
    { value: '6', label: 'pasos del wizard de convenios' },
    { value: '48', label: 'variables de Excel reemplazadas por el motor' },
  ],
  timeline: [
    { company: 'Siclo / IDPay', role: 'Análisis de la matriz comercial de 48 variables', period: '2025' },
    { company: 'Siclo / IDPay', role: '4 flujos + 11 wireframes + wizard de 6 pasos', period: '2025' },
    { company: 'Siclo / IDPay', role: 'Modelo ER (10 tablas) + OpenAPI + Job diario', period: '2025', isLast: true },
  ],
  techStack: [
    { skill: 'Modelado de datos ER', level: 88, levelLabel: 'Avanzado' },
    { skill: 'OpenAPI / Swagger', level: 85, levelLabel: 'Avanzado' },
    { skill: 'Reglas de negocio (Ley 1527)', level: 85, levelLabel: 'Avanzado' },
    { skill: 'Métricas CX (CSAT / CES)', level: 82, levelLabel: 'Avanzado' },
  ],

  nextCase: { slug: 'correos-chile', title: 'Correos Chile — Portal Empresas B2B' },
})
