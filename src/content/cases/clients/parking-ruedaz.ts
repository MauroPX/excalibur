/**
 * Caso de cliente — Parking International / Ruedaz · Ecosistema E2E (2020-2022).
 * Fuente: docs/m1/CONTENT_COPY_STRATEGY.md §5 / §7.5
 * + docs/Career_Dossier/CONSOLIDACION_MAESTRA §8 / CAREER OS SSOT CAPA 2.11.
 * Sin Figma en ninguna fuente revisada.
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import { validateCaseData } from '@/components/templates/CasePage/validateCaseData'

export const parkingRuedazCase: CasePageData = validateCaseData({
  slug: 'parking-ruedaz',
  title: 'Parking International / Ruedaz — Ecosistema E2E',
  description:
    'Ecosistema de producto de extremo a extremo para la marca Ruedaz: 5 plataformas conectadas (App, Web, Portal Corporativo, Parking Inside, Parking Attendant) con un mismo lenguaje de diseño y reglas de negocio compartidas. +90% de uso recurrente frente a los medios de pago tradicionales.',
  tags: ['Movilidad', 'Product-Led Growth', 'Ecosistema E2E', 'DesignOps', 'B2C / B2B'],

  caseType: 'client',
  caseFormat: 'evidencia-viva',

  valor:
    'No diseñé una app de parqueo — diseñé el ecosistema de 5 plataformas que la sostiene, desde el usuario final hasta el operador en sitio.',
  situacion:
    'Parking International necesitaba un producto de extremo a extremo para su marca Ruedaz, cubriendo usuario final, portal corporativo y operación en sitio como flujos conectados, no aislados.',
  objetivo:
    'Diseñar el sistema completo (App, Web, Portal Corporativo, Parking Inside, Parking Attendant) con un mismo lenguaje de diseño y reglas de negocio compartidas.',
  accion: [
    {
      decision: 'Orden de diseño de las 5 plataformas',
      discarded: 'Diseñar la app de usuario final primero y resolver el resto por separado después',
      chosen: 'Ruedaz System Design (WCAG 2.1, Atomic Design) aplicado desde el inicio a las 5 plataformas, con Customer Journeys diferenciados por segmento (B2C recurrente vs. B2B corporativo con monedero y cortesías) y reglas de negocio compartidas para suscripciones y validación de cupones por OCR',
      why: 'Resolver las plataformas por separado habría duplicado reglas de negocio y roto la consistencia de marca entre el usuario final y el operador',
    },
  ],
  resultado:
    'Ecosistema completo lanzado en tiendas (jul 2020), con suscripción mensual de $59.900 COP de cobro automático y un MVP corporativo de monedero virtual operativo. Incremento del 90% en la adopción y el uso recurrente frente a los medios de pago tradicionales. Estrategia omnicanal de comunicaciones (Push / SMS / E-mail / in-app) con alerta preventiva a los 165 minutos.',
  aprendizaje:
    'Un producto B2C con contraparte B2B/operativa exige diseñar el sistema completo desde el día 1 — resolver solo la app visible es diseñar la mitad del producto.',

  methodology: [
    { slug: 'plg', label: 'Product-Led Growth' },
    { slug: 'jtbd', label: 'Jobs to be Done' },
    { slug: 'atomic-design', label: 'Atomic Design' },
  ],

  metrics: [
    { value: '+90%', label: 'uso recurrente vs. medios tradicionales' },
    { value: '5', label: 'plataformas conectadas' },
    { value: '$59.900', label: 'COP/mes · cobro automático' },
    { value: 'OCR', label: 'redención automática de cupones' },
  ],
  timeline: [
    { company: 'Parking International', role: 'Customer Journeys + MOTs (Frontstage/Backstage)', period: '2020' },
    { company: 'Parking International', role: 'Ruedaz System Design (5 plataformas)', period: '2020' },
    { company: 'Parking International', role: 'Lanzamiento en tiendas + MVP monedero corporativo', period: '2020-2022', isLast: true },
  ],
  techStack: [
    { skill: 'DesignOps · Atomic Design', level: 88, levelLabel: 'Avanzado' },
    { skill: 'OCR (ScanProcess)', level: 82, levelLabel: 'Avanzado' },
    { skill: 'Omnicanal (Push / SMS / Email)', level: 85, levelLabel: 'Avanzado' },
    { skill: 'Material Design + WCAG 2.1', level: 85, levelLabel: 'Avanzado' },
  ],

  nextCase: { slug: 'siclo-idpay', title: 'Siclo / IDPay — Especificación del módulo de convenios' },
})
