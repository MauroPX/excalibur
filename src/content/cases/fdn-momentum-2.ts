/**
 * Contenido — FDN · Momentum 2 (propuesta de arquitectura).
 *
 * NO es una página de caso propia. Es una SECCIÓN dentro de /casos/fdn, con ancla propia,
 * badge propio ("📐 Estimación propia"), disclaimer propio y enlace cruzado al Momentum 1
 * (auditoría WCAG real, sí confirmada). Regla R-8 del blueprint EX-v2-TMPL-002 v1.1.0:
 * la separación de la narrativa del caso auditado tiene que ser inequívoca.
 *
 * Fuente verbatim: docs/m2/spec/CASE_PAGE_CONTENT_STRUCTURE.md §"Caso: FDN — Momentum 2".
 */
import type { CaseSection, DecisionRow } from '@/components/templates/CasePage/types'

export interface Momentum2Section {
  /** id de ancla — distinto e inequívoco frente al Momentum 1 */
  anchorId: string
  badge: { icon: string; label: string }
  valor: string
  objetivo: string
  accion: DecisionRow[]
  aprendizaje: string
  /** nota de honestidad — por qué esto NO está al mismo nivel que el Momentum 1 */
  honestyNote: string
  sections: CaseSection[]
  /** enlace cruzado de vuelta al caso auditado real (Momentum 1) */
  crossLink: { label: string; href: string }
  /** frase EXACTA — propia de esta sección, no compartida con el caso de cliente */
  footerDisclaimer: string
}

export const fdnMomentum2: Momentum2Section = {
  anchorId: 'momentum-2-propuesta',
  badge: { icon: '📐', label: 'Estimación propia — no construido ni aprobado en su totalidad' },
  valor:
    'Entré a auditar accesibilidad. Al mirar el proceso completo, encontré la causa raíz (un sitio estático en fin de vida) y propuse la arquitectura que la resuelve — la diferencia entre cumplir el mandato y resolver el problema que el mandato no mencionaba.',
  objetivo:
    'Ir más allá de «cumplir el mandato de auditoría» y proponer la arquitectura que resuelve la causa raíz de los 654 incidentes, no solo documentarlos.',
  accion: [
    {
      decision: 'Alcance de la propuesta',
      discarded: 'Solo remediar los 654 incidentes puntuales en Drupal 7',
      chosen: 'Migración completa a Next.js / Strapi / RAG',
      why: 'Drupal 7 está en EOL — remediar incidentes sin migrar es reparar un sistema que de todas formas hay que reemplazar',
    },
  ],
  aprendizaje:
    'Un mandato técnico acotado (auditar) casi siempre esconde un problema más grande (una arquitectura al final de su vida útil). Este es el mismo patrón que en Solidaria y que define cómo abordas cualquier encargo: mirar el sistema completo, no solo la tarea pedida.',
  honestyNote:
    'Distinto del Momentum 1 (auditoría WCAG, sí confirmada) — esto es una propuesta de valor, no un entregable cerrado.',
  sections: [
    {
      num: '01',
      title: 'Por qué',
      body: 'Un sitio estático en EOL no sostiene el rol de referente digital que necesita FDN.',
    },
    {
      num: '02',
      title: 'Arquitectura propuesta',
      body: 'Next.js 14, Strapi v5, PostgreSQL + pgvector, Meilisearch, RAG con Claude API acotado al corpus FDN, PostHog self-hosted por Ley 1581.',
    },
    {
      num: '03',
      title: 'Inversión estimada',
      body: 'CAPEX $100K–$174.5K USD — presentada como propuesta, no como presupuesto ejecutado.',
    },
    {
      num: '04',
      title: 'Calendario objetivo',
      body: 'WCAG AA el 30 de junio de 2026, lanzamiento el 30 de septiembre de 2026.',
    },
  ],
  crossLink: {
    label: 'Basado en los hallazgos de la auditoría real (Momentum 1) →',
    href: '#momentum-1',
  },
  footerDisclaimer:
    'Propuesta de arquitectura — estimación propia, no un entregable ya construido o aprobado.',
}
