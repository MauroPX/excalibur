/**
 * Contrato de datos de una página de caso — EX-v2-TMPL-002 v1.1.0
 *
 * v1.0.0: slug/title/description/tags/metrics/timeline/techStack/nextCase/audienceTags.
 * v1.1.0: agrega campos OPCIONALES para el backbone Valor/STAR-L, la clasificación
 *         (caseType/caseFormat/badge/footerDisclaimer/estado), la metodología TITAN como
 *         dato estructurado, y el cuerpo por variante (accessLinks | sections + aiDeclared).
 *         Retrocompatible: los 3 casos v1.0.0 (fdn/solidaria/bbva) tipan y renderizan igual.
 *
 * Fuentes: docs/m1/GSD_TASK_CARD_M1_CASE_STRUCTURE.md · docs/m2/spec/CASE_PAGE_CONTENT_STRUCTURE.md
 * Vive aquí (no en CasePage.tsx) para que src/content/cases/*.ts importe tipos sin arrastrar 'use client'.
 */
import type { ReactNode } from 'react'

// ── Uniones ──────────────────────────────────────────────────────────────────
export type CaseType = 'client' | 'work-test' | 'meta'
export type CaseFormat = 'evidencia-viva' | 'documento-estrategico'
export type Momentum = 'M0' | 'M1' | 'M2' | 'M3' | 'M4' | 'M5'
export type CaseEstado = 'completo' | 'parcial'
export type AccessLinkKind =
  | 'produccion'
  | 'preview'
  | 'repo'
  | 'storybook'
  | 'chromatic'
  | 'video'
  | 'doc'
  | 'figma'
  | 'demo'

// ── Sub-objetos ──────────────────────────────────────────────────────────────
export interface MethodologyRef {
  /** slug estable, ancla en /metodologia — ej. 'ddd-bounded-contexts' */
  slug: string
  /** etiqueta visible — ej. 'Domain-Driven Design' */
  label: string
  /** enlace al detalle — ej. '/metodologia#ddd-bounded-contexts' */
  detailHref?: string
}

export interface DecisionRow {
  decision: string
  discarded: string
  chosen: string
  why: string
}

export interface AccessLink {
  kind: AccessLinkKind
  label: string
  href: string
  /** instrucción de acceso — ej. 'login maria@ejemplo.com + OTP 123456 → tour automático' */
  note?: string
}

export interface AiDisclosureData {
  items: string[]
  source?: { label: string; href: string }
}

export interface ProcessTransformation {
  /** el proceso manual/fragmentado real, tal como estaba */
  before: string
  /** cómo se pensó/abordó el problema — lenguaje llano, sin nombrar la marca */
  approach: string
  /** qué quedó operando sin el autor: equipo autónomo, runbook, sistema repetible */
  capabilityInstalled: string
}

export interface CaseSection {
  /** '01', '02', … */
  num: string
  title: string
  body: string
  chips?: string[]
  table?: { headers: string[]; rows: string[][] }
}

/** kind de icono del badge — se mapea a un icono `@mui/icons-material` (currentColor,
 *  sigue el token de color del badge). Antes era un emoji quemado. */
export type CaseBadgeIcon = 'wrench' | 'search' | 'compass'

export interface CaseBadge {
  icon: CaseBadgeIcon
  /** 'Prueba técnica' | 'Diagnóstico autodirigido' | 'Estimación propia' | 'Caso propio' */
  label: string
}

// ── Interfaz principal ───────────────────────────────────────────────────────
export interface CasePageData {
  // ---- v1.0.0 (sin cambios) ----
  slug: string
  title: string
  /** dek corto (= <meta description>). El contexto completo STAR-L va en `situacion`. */
  description: string
  tags: string[]
  /** STAR-L "Resultado" */
  metrics: Array<{ value: string | number; label: string }>
  timeline: Array<{ company: string; role: string; period: string; isLast?: boolean }>
  techStack: Array<{ skill: string; level: number; levelLabel: string }>
  /** `href` opcional: los work-tests navegan a /pruebas-tecnicas/, no a /casos/ */
  nextCase: { slug: string; title: string; href?: string } | null
  audienceTags?: string[]

  // ---- v1.1.0 · clasificación + presentación ----
  /** ausente ⇒ el render asume 'client' */
  caseType?: CaseType
  /** ausente ⇒ 'evidencia-viva' */
  caseFormat?: CaseFormat
  /** explícito por caso — los badges son más granulares que caseType */
  badge?: CaseBadge
  /** frase EXACTA por caso — NO intercambiable (CASE_PAGE_CONTENT_STRUCTURE §194) */
  footerDisclaimer?: string
  /** 'parcial' ⇒ el sitio lo declara, no lo oculta (GSD Fase 6) */
  estado?: CaseEstado
  estadoNota?: string

  // ---- v1.1.0 · patrón "entré con un rol, terminé en el proceso E2E" ----
  entryRole?: string
  discoveredScope?: string

  // ---- v1.1.0 · backbone Valor / STAR-L ----
  /** Insight-gancho, va inmediatamente post-header */
  valor?: string
  /** STAR-L "Situación" — contexto completo */
  situacion?: string
  /** STAR-L "Tarea/Objetivo" — render-obligatorio si caseType !== 'client' */
  objetivo?: string
  /** STAR-L "Acción" — tabla opción descartada → elegida → por qué */
  accion?: DecisionRow[]
  /** frase de resultado en prosa (complementa `metrics`) */
  resultado?: string
  /** STAR-L "Aprendizaje" — render-obligatorio si caseType !== 'client' */
  aprendizaje?: string

  // ---- v1.1.0 · metodología TITAN como dato estructurado ----
  methodology?: MethodologyRef[]
  momentumsApplied?: Momentum[]
  processTransformation?: ProcessTransformation

  // ---- v1.1.0 · cuerpo según variante ----
  /** caseFormat 'evidencia-viva' — múltiples links por caso */
  accessLinks?: AccessLink[]
  /** caseFormat 'documento-estrategico' — secciones numeradas */
  sections?: CaseSection[]
  /** bloque "Uso de IA declarado" — cuando aplica */
  aiDeclared?: AiDisclosureData
}

export interface CasePageProps {
  caseData: CasePageData
  /**
   * v1.1.1 — sección extra compuesta por la página anfitriona, renderizada DENTRO
   * de `<main>` (después del stack, antes del footer/nav). Uso previsto: la sección
   * "Momentum 2 — Estimación propia" dentro de /casos/fdn (R-8), inequívocamente
   * separada de la narrativa del caso auditado. No afecta a los casos que no la pasan.
   */
  appendixSection?: ReactNode
}
