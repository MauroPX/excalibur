/**
 * Caso de cliente — FID Seguros Generales (Chile) · SmartJob (2024-2025).
 * Fuente: docs/m1/CONTENT_COPY_STRATEGY.md §5 / §7.5
 * + docs/Career_Dossier/CONSOLIDACION_MAESTRA §4 / CAREER OS SSOT CAPA 2.5
 * + docs/Career_Dossier/[2024]--FID_Seguros_Chile.md.
 * Reconciliación (C6): NO se usa "+70% eficiencia CX" ni "46+ entregables sueltos"
 * como métrica headline (sin fuente primaria verificada). Sí: 1.002 filas, BPMN 4
 * actores, 1.109 inspecciones / $15.83M USD.
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import { validateCaseData } from '@/components/templates/CasePage/validateCaseData'

export const fidSegurosCase: CasePageData = validateCaseData({
  slug: 'fid-seguros',
  title: 'FID Seguros — DesignOps y migración a React',
  description:
    'Sistema operativo de diseño para FID Seguros Generales (Chile): migración de OutSystems (legacy) a React/MUI con Domain-Driven Design. BPMN de 4 actores + Framework de Integración D↔D de 1.002 filas, con equipo de desarrollo autónomo desde el sprint 1.',
  tags: ['Seguros', 'DesignOps', 'React / MUI', 'DDD', 'BPMN'],

  caseType: 'client',
  caseFormat: 'evidencia-viva',

  valor:
    'Antes de mover una sola pantalla de OutSystems a React, construí el sistema de gobierno completo — sin eso, la migración se fragmenta en meses, no en semanas.',
  situacion:
    'Migrar de OutSystems (legacy) a MUI React sin un framework de gobierno habría fragmentado el sistema en meses.',
  objetivo:
    'Construir el sistema operativo de diseño completo antes de tocar cualquier pantalla.',
  accion: [
    {
      decision: 'Cómo abordar la migración de OutSystems a React',
      discarded: 'Migrar pantalla por pantalla, ad-hoc',
      chosen: 'BPMN con 4 actores + Framework de Integración D↔D (1.002 filas de gobierno) + guía WCAG con Domain-Driven Design, antes de migrar la primera pantalla',
      why: 'Sin gobierno explícito, la migración se fragmenta',
    },
  ],
  resultado:
    'Equipo de desarrollo autónomo desde el sprint 1. Gestión técnica integral del ciclo de inspección y suscripción: 1.109 inspecciones masivas valoradas en $15,830,788 USD + IVA (429.53 UF), modelando autoinspección por video, asistida y a domicilio. Análisis funcional de la Épica 6 (Consulta de Riesgos Hipotecarios, HDU 01-09) y migración a React/MUI adaptando patrones de Carbon Design System.',
  aprendizaje:
    'Sin gobierno explícito antes de migrar, el sistema se fragmenta — construirlo primero es más lento al inicio, pero evita ese colapso.',

  methodology: [
    { slug: 'ddd', label: 'Domain-Driven Design' },
    { slug: 'bpmn', label: 'BPMN 2.0 (4 actores)' },
    { slug: 'design-sprint', label: 'Design Sprint (3 días)' },
  ],

  metrics: [
    { value: '1.002', label: 'filas del sistema de gobierno de diseño' },
    { value: '$15.8M', label: 'USD en inspecciones gestionadas (1.109)' },
    { value: 'sprint 1', label: 'equipo de desarrollo autónomo desde' },
    { value: '4', label: 'actores en el modelo BPMN' },
  ],
  timeline: [
    { company: 'FID Seguros', role: 'BPMN 4 actores + Framework de Integración D↔D', period: '2024' },
    { company: 'FID Seguros', role: 'Épica 6 — Consulta de Riesgos Hipotecarios (HDU 01-09)', period: '2024' },
    { company: 'FID Seguros', role: 'Gestión de 1.109 inspecciones + cuadre de cierres', period: '2024-2025' },
    { company: 'FID Seguros', role: 'Migración OutSystems → React/MUI', period: '2025', isLast: true },
  ],
  techStack: [
    { skill: 'React / MUI (Carbon-informed)', level: 90, levelLabel: 'Experto' },
    { skill: 'Domain-Driven Design', level: 88, levelLabel: 'Avanzado' },
    { skill: 'BPMN 2.0', level: 88, levelLabel: 'Avanzado' },
    { skill: 'Auditoría arquitectónica en 3 capas', level: 85, levelLabel: 'Avanzado' },
  ],

  accessLinks: [
    {
      kind: 'figma',
      label: 'Proceso DS & DDD',
      href: 'https://www.figma.com/design/QdPkYTZ2XaHrnWgaconjg5/FID--DS--Seguros-Chile?node-id=0-1&t=nzUxQqCWrJTn8vxV-1',
    },
  ],

  nextCase: { slug: 'sured', title: 'SuRed / Matrix Giros — Integración B2B' },
})
