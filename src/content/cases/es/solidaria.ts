/**
 * Contenido — Solidaria Portal (diagnóstico autodirigido, preparación de entrevista).
 * Variante: evidencia-viva. NO es prueba encargada ni cliente pagado → disclaimer PROPIO
 * ("Diagnóstico por iniciativa propia — no fue un encargo."), distinto al de prueba técnica.
 *
 * Fuente verbatim: docs/m1/WORKTEST_CASES.md §Caso 2 + §Publicación pública / Caso 2
 * + docs/m2/spec/CASE_PAGE_CONTENT_STRUCTURE.md §Variante A / Solidaria Portal.
 * Filtro de confidencialidad aplicado (WORKTEST_CASES §Gobernanza): sin nombres de
 * entrevistadores, sin cifras internas, sin estado del proceso. Solo información pública.
 *
 * ⚠️ Nota de ruteo (para Fase E): ya existe /casos/solidaria como caso enmarcado de
 * Design System. Este módulo es el enmarque canónico "diagnóstico autodirigido" para
 * /pruebas-tecnicas/solidaria — hay que decidir qué pasa con la ruta /casos/solidaria.
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import { validateCaseData } from '@/components/templates/CasePage/validateCaseData'

export const solidariaWorkTestCase: CasePageData = validateCaseData({
  slug: 'solidaria',
  title: 'Solidaria Portal — Diagnóstico autodirigido de 7 canales digitales',
  description:
    'Diagnóstico hecho por iniciativa propia — Solidaria no lo encargó — antes de una entrevista: auditoría de los 7 dominios digitales de una aseguradora real, seguida de una propuesta de arquitectura desacoplada con Design System propio.',
  tags: ['Diagnóstico autodirigido', 'Arquitectura desacoplada', 'Design System', 'Insurtech', 'WCAG 2.2 AA'],

  caseType: 'work-test',
  caseFormat: 'evidencia-viva',
  badge: { icon: 'search', label: 'Diagnóstico autodirigido' },

  valor:
    'Nadie me pidió esto. Antes de una entrevista, audité los 7 canales digitales de una aseguradora real y construí la propuesta de arquitectura que resuelve la fragmentación que encontré — la diferencia entre presentarme a una entrevista y presentarme con la solución ya diseñada.',
  situacion:
    'Diagnóstico por iniciativa propia como preparación para una entrevista — Solidaria no lo encargó. Se aplicó filtro de confidencialidad: sin nombres de entrevistadores, sin cifras internas y sin estado del proceso. Solo se usa lo verificable públicamente (los 7 dominios, visitables por cualquiera) y el trabajo técnico propio.',
  objetivo:
    'Llegar a la entrevista con conocimiento real del sector y una propuesta concreta, no con opiniones genéricas sobre «transformación digital».',
  accion: [
    {
      decision: 'Arquitectura del portal',
      discarded: 'Monolito CMS sobre Azure Blob (HTML + datos + lógica juntos)',
      chosen: 'Arquitectura desacoplada: core asegurador → API REST → Next.js, con Design System independiente del backend',
      why: 'Conectar el backend real de Solidaria sería un cambio de variable de entorno; el frontend no cambia',
    },
    {
      decision: 'Trackers de siniestros',
      discarded: 'Mantener los 2 trackers separados (hogar y autos) del hallazgo original',
      chosen: 'Un tracker unificado (/siniestros/reportar y /siniestros/consultar)',
      why: 'La fragmentación en 2 experiencias distintas era parte del problema diagnosticado',
    },
  ],
  resultado:
    'Portal desplegado en producción con demo navegable y Design System documentado en Storybook/Chromatic. 212 tests con 0 violaciones axe, WCAG 2.2 AA. Metodología TITAN v7.0 completa (M0–M3). El repositorio (privado) existe y está versionado; no se enlaza acceso público. El portal corre hoy sobre datos mock — conectar el backend real sería un cambio de variable de entorno.',
  aprendizaje:
    'Ir más allá del mandato (que aquí ni siquiera existía — era una entrevista, no un encargo) es lo que diferencia presentarse con un diagnóstico de presentarse con una solución. Este patrón — mirar el proceso completo aunque el rol pedido sea más estrecho — se repite en el Momentum 2 de FDN.',

  methodology: [
    { slug: 'ddd-bounded-contexts', label: 'DDD — bounded contexts (seguros)' },
    { slug: 'arquitectura-desacoplada', label: 'Core → API REST → frontend' },
    { slug: 'design-tokens-hct', label: 'Tokens de color en HCT / MD3' },
  ],
  momentumsApplied: ['M0', 'M1', 'M2', 'M3'],
  processTransformation: {
    before:
      '7 dominios digitales operando como experiencias separadas, sin identidad ni sesión unificada: sitio principal, portal cliente, pasarela de pagos, dos trackers de siniestros distintos, radicación de PQRS y programa de lealtad.',
    approach:
      'Auditar los 7 canales como un sistema, no como piezas sueltas; modelar el dominio asegurador (bounded contexts, ciclo de vida de póliza, roles de suscripción) y proponer una arquitectura desacoplada core → API REST → Next.js.',
    capabilityInstalled:
      'Un portal navegable con Design System propio y modo mock intercambiable por datos reales con un cambio de variable de entorno — la base sobre la que un equipo puede seguir construyendo.',
  },

  metrics: [
    { value: '7', label: 'dominios digitales auditados (verificable públicamente)' },
    { value: '212', label: 'tests · 0 violaciones axe' },
    { value: 'AA', label: 'WCAG 2.2 en light y dark' },
    { value: '41 → 65', label: 'NPS estimado → objetivo a 12 meses (fuente pública del gremio)' },
  ],
  timeline: [
    { company: 'Iniciativa propia', role: 'Auditoría de los 7 canales digitales (información pública)', period: 'Pre-entrevista' },
    { company: 'Iniciativa propia', role: 'Migración conceptual a arquitectura desacoplada + Design System', period: 'Pre-entrevista' },
    { company: 'Iniciativa propia', role: 'V1 baseline (c75a74f) → V2 en producción (812ff9b)', period: 'Pre-entrevista', isLast: true },
  ],
  techStack: [
    { skill: 'Next.js + arquitectura desacoplada', level: 86, levelLabel: 'Aplicado' },
    { skill: 'Design System (tokens HCT / MD3)', level: 85, levelLabel: 'Aplicado' },
    { skill: 'Modelado de dominio (DDD, seguros)', level: 82, levelLabel: 'Aplicado' },
    { skill: 'Vitest + jest-axe (212 tests)', level: 84, levelLabel: 'Aplicado' },
  ],

  accessLinks: [
    {
      kind: 'produccion',
      label: 'Portal en producción (V2)',
      href: 'https://solidaria-portal.vercel.app',
      note: 'Botón "¿Cómo funciona?" en la landing → tour guiado. Login demo: maria@ejemplo.com + OTP 123456 → tour automático por pólizas, siniestros, PQRS y pagos.',
    },
    {
      kind: 'preview',
      label: 'V1 — baseline sellada',
      href: 'https://solidaria-portal-c424owwv2-lemaogo-9238s-projects.vercel.app',
      note: 'Baseline commit c75a74f. V2 en producción: commit 812ff9b (evolución por capas, no un rediseño).',
    },
    {
      kind: 'chromatic',
      label: 'Design System (Storybook / Chromatic)',
      href: 'https://6a2d61bf2ded342d004f1b8f-gjmdfbfoac.chromatic.com',
      note: '8 átomos con tokens generados algorítmicamente desde el azul de marca #004173 en HCT / MD3, contraste AA en light y dark.',
    },
  ],

  footerDisclaimer: 'Diagnóstico por iniciativa propia — no fue un encargo.',
  nextCase: { slug: 'excalibur', title: 'EXCALIBUR — este mismo sitio', href: '/excalibur' },
})
