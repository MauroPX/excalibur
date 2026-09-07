/**
 * Caso de cliente — BBVA Colombia & Panamá · Sistema GEMAS (2024-2026).
 * Fuente: docs/m1/CONTENT_COPY_STRATEGY.md §5 / §7.5
 * + docs/Career_Dossier/CONSOLIDACION_MAESTRA §1 / CAREER OS SSOT CAPA 2.2.
 * Nota de reconciliación (C4/C5): NO se usa "-75% time-to-market" (sin fuente primaria).
 * Bre-B (1.1M usuarios) es trabajo BBVA de otro scope, no métrica de este caso.
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
    '+600 usuarios internos impactados en los módulos de Gestión de Capital de Trabajo y Mi Pyme Asegurada. 5/5 en la calificación de 3 Product Owners, 100% de cumplimiento de tiempos y presentaciones a nivel VP. La orquestación de IA generativa (Gemini / agente Emilia) para guiones técnicos redujo el tiempo de producción de contenido en un 60%. Sistema reutilizable para cualquier producto o segmento futuro.',
  aprendizaje:
    'Cuando no puedes rediseñar el producto porque ya está en producción, la capa de guía es la palanca — convertir un tutorial pasivo en un sistema gobernado y auditable es tan arquitectura de producto como rediseñar la pantalla.',

  methodology: [
    { slug: 'sistema-gemas', label: 'Sistema GEMAS (5 fases)' },
    { slug: 'content-framing', label: 'Content Framing' },
    { slug: 'walkthrough-inmersivo', label: 'Walkthrough Inmersivo' },
  ],
  momentumsApplied: ['M0', 'M1', 'M2', 'M3'],

  metrics: [
    { value: '5/5', label: 'calificación de 3 Product Owners' },
    { value: '+600', label: 'usuarios internos impactados' },
    { value: '-60%', label: 'tiempo de producción de contenido' },
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
    { skill: 'Orquestación de IA (Gemini)', level: 82, levelLabel: 'Avanzado' },
  ],

  accessLinks: [
    {
      kind: 'figma',
      label: 'Demo Tutorial GEMAS (Sucursal Panamá)',
      href: 'https://www.figma.com/proto/suLl2aXPjYCisSST5i8kta/%F0%9F%8C%9F--BBVA_Sucursal_Panama---Admin_Usuarios--Configuracion?node-id=130-159104&p=f&t=y2dHMbaBS96telVJ-1&scaling=contain&content-scaling=fixed&starting-point-node-id=130%3A159104&show-proto-sidebar=1&page-id=0%3A1',
    },
  ],

  nextCase: { slug: 'fdn', title: 'FDN — Auditoría WCAG 2.1 AA' },
})
