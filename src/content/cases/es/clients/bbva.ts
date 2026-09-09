/**
 * Caso de cliente — BBVA Colombia & Panamá · Sistema GEMAS (2024-2026).
 * Fuente: docs/m1/CONTENT_COPY_STRATEGY.md §5 / §7.5
 * + docs/Career_Dossier/CONSOLIDACION_MAESTRA §1 / CAREER OS SSOT CAPA 2.2.
 * Reconciliación (C4/C5/C9, verificada contra el Informe de Evolución y Madurez de
 * los demos + Informe Consolidado de Cierre con feedback firmado de 3 POs):
 * - NO "-75% TTM", NO "+600 usuarios internos", NO "-60% producción" (sin fuente).
 * - Bre-B (1.1M usuarios) es trabajo BBVA de otro scope, no métrica de este caso.
 * - SÍ: 5/5 unánime de 3 POs, 100% cumplimiento de tiempos, presentaciones a VP,
 *   Guion Maestro de 46 pasos / 6 bloques / 10 flujos.
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import { validateCaseData } from '@/components/templates/CasePage/validateCaseData'

export const bbvaCase: CasePageData = validateCaseData({
  slug: 'bbva',
  title: 'BBVA — Sistema GEMAS',
  description:
    'Sistema de gobierno de tutoriales guiados para 3 productos B2B de BBVA en Colombia y Panamá (Bre-B, Proyecto Brickell, Contigo Pymes). 5 fases de madurez + rediseño del modelo de interacción de "Coach Mark" a "Walkthrough Inmersivo".',
  tags: ['Banca', 'Fintech', 'Design System', 'Content Design', 'SAFe'],

  caseType: 'client',
  caseFormat: 'evidencia-viva',

  valor:
    'Los tutoriales de producto (Bre-B, Brickell) no podían tocar la funcionalidad de fondo — ya estaba en producción. La única palanca disponible era la capa de guía, así que la convertí en un sistema, no en guiones sueltos.',
  situacion:
    '3 productos B2B en 2 países, cada uno construyendo tutoriales guiados ("coach marks") de forma ad-hoc, sin marca, tono ni motion consistentes entre sí.',
  objetivo:
    'Construir un sistema que orqueste marca, experiencia, movimiento y reglas de negocio para cualquier tutorial futuro — no resolver un tutorial a la vez.',
  accion: [
    {
      decision: 'Cómo escalar la producción de tutoriales',
      discarded: 'Seguir generando guiones caso por caso, manteniendo el modelo "Coach Mark" de pantalla dividida',
      chosen: 'Sistema GEMAS en 5 fases de madurez (marca → UX writing y cognición → UI/motion → métricas de producción → arquitectura de reglas de negocio), más un rediseño del modelo de interacción a "Walkthrough Inmersivo" a pantalla completa y una auditoría de accesibilidad/carga cognitiva (contraste AAA 7:1, paleta "Clean Canvas")',
      why: 'Sin sistema, cada país y cada producto repite el mismo trabajo de diagnóstico y queda inconsistente con la marca',
    },
  ],
  resultado:
    'Calidad de comunicación 5/5 — unánime entre 3 Product Owners de BBVA — y 100% de cumplimiento de tiempos (Informe Consolidado de Cierre + feedback firmado de cada PO). Guion Maestro de 46 pasos en 6 bloques cubriendo 10 flujos. Uso validado en formación de equipos y presentaciones a Vicepresidencia. Orquestación de IA generativa (Gemini Gems) para acelerar la producción de guiones. Sistema reutilizable para cualquier producto o segmento futuro.',
  aprendizaje:
    'Cuando no puedes rediseñar el producto porque ya está en producción, la capa de guía es la palanca — convertir un tutorial pasivo en un sistema gobernado y auditable es tan arquitectura de producto como rediseñar la pantalla.',

  methodology: [
    { slug: 'sistema-gemas', label: 'Sistema GEMAS (5 fases)' },
    { slug: 'content-framing', label: 'Content Framing' },
    { slug: 'walkthrough-inmersivo', label: 'Walkthrough Inmersivo' },
  ],
  momentumsApplied: ['M0', 'M1', 'M2', 'M3'],

  metrics: [
    { value: '5/5', label: 'calidad de comunicación (3 POs de BBVA, unánime)' },
    { value: '46', label: 'pasos del Guion Maestro (6 bloques · 10 flujos)' },
    { value: '100%', label: 'cumplimiento de tiempos de entrega' },
    { value: '3', label: 'productos B2B (2 países)' },
  ],
  timeline: [
    { company: 'BBVA', role: 'Framework GEMAS + Discovery', period: '2024 Q1' },
    { company: 'BBVA', role: 'Proyecto Brickell — contratación Pyme Inbound', period: '2024 Q2-Q3' },
    { company: 'BBVA', role: 'Design System + Figma Variables + motion "Blossom"', period: '2024 Q4' },
    { company: 'BBVA', role: 'Rollout Colombia + Panamá', period: '2025-2026', isLast: true },
  ],
  techStack: [
    { skill: 'Sistema GEMAS (5 fases)', level: 92, levelLabel: 'Experto' },
    { skill: 'Content Framing · UX Writing', level: 90, levelLabel: 'Experto' },
    { skill: 'Figma Variables + DS', level: 88, levelLabel: 'Avanzado' },
    { skill: 'Orquestación de IA (Gemini Gems)', level: 82, levelLabel: 'Avanzado' },
  ],

  accessLinks: [
    {
      kind: 'figma',
      label: 'Sucursal Panamá — activación de usuarios (prototipo)',
      href: 'https://www.figma.com/proto/suLl2aXPjYCisSST5i8kta/%F0%9F%8C%9F--BBVA_Sucursal_Panama---Admin_Usuarios--Configuracion?node-id=130-159104&page-id=0%3A1&starting-point-node-id=130%3A159104&t=S3Lk0CjLrQrAkqpD-1',
    },
    {
      kind: 'demo',
      label: 'Brickell — base del tour guiado (Figma Make)',
      href: 'https://www.figma.com/make/isAZ3lsdcaKcKBUfe0hgsR/-Brickell---Admin_usuario--Tutorial_Guiado?fullscreen=1&t=XtZ8wEu190OXDwBs-1&code-node-id=0-9',
    },
  ],

  nextCase: { slug: 'fdn', title: 'FDN — Auditoría WCAG 2.1 AA' },
})
