/**
 * Caso de cliente — FID Seguros Generales (Chile) · SmartJob (2024-2025).
 * Fuente: docs/m1/CONTENT_COPY_STRATEGY.md §5 / §7.5
 * + docs/Career_Dossier/CONSOLIDACION_MAESTRA §4 / CAREER OS SSOT CAPA 2.5
 * + docs/Career_Dossier/[2024]--FID_Seguros_Chile.md.
 * Reconciliación (C9, verificada contra cierre FID 202402.xlsx + Épica 6 v1.8):
 * - NO "+70% CX", NO "46+ entregables" (46 es de BBVA), NO "$15.8M USD" (la hoja
 *   está en CLP; se usa la unidad nativa: 429,53 UF), NO "1.109" (la hoja da 1.169
 *   órdenes de inspección, 822 realizadas), NO "BPMN 4 actores" (diagrama = 2 carriles).
 * - SÍ: ~1.000 filas (orden de magnitud del handoff D↔D), Épica 6, DDD + Dual Track,
 *   lineamientos Carbon + Material (método transversal a todos los DS del portafolio).
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import { validateCaseData } from '@/components/templates/CasePage/validateCaseData'

export const fidSegurosCase: CasePageData = validateCaseData({
  slug: 'fid-seguros',
  title: 'FID Seguros — DesignOps y migración a React',
  description:
    'Sistema operativo de diseño para FID Seguros Generales (Chile): migración de OutSystems (legacy) a React/MUI con Domain-Driven Design y Dual Track, sobre lineamientos Carbon + Material. Modelo de handoff D↔D (~1.000 filas de gobierno) construido antes de mover la primera pantalla.',
  tags: ['Seguros', 'DesignOps', 'React / MUI', 'DDD', 'Dual Track'],

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
      chosen: 'Modelo de handoff D↔D (~1.000 filas de gobierno) + guía WCAG con Domain-Driven Design y Dual Track, antes de migrar la primera pantalla',
      why: 'Sin gobierno explícito, la migración se fragmenta',
    },
  ],
  resultado:
    'Gestión técnica integral del ciclo de inspección y suscripción: 1.169 órdenes de inspección (822 realizadas) por 429,53 UF auditadas, modelando autoinspección por video, asistida y a domicilio. Análisis funcional de la Épica 6 (Consulta de Riesgos Hipotecarios, HDU 01-09, v1.8) y migración a React/MUI sobre lineamientos Carbon + Material — el mismo blend transversal a los demás sistemas de diseño del portafolio.',
  aprendizaje:
    'Sin gobierno explícito antes de migrar, el sistema se fragmenta — construirlo primero es más lento al inicio, pero evita ese colapso.',

  methodology: [
    { slug: 'ddd', label: 'Domain-Driven Design' },
    { slug: 'bpmn', label: 'BPMN 2.0' },
    { slug: 'design-sprint', label: 'Design Sprint (3 días)' },
  ],

  metrics: [
    { value: '~1.000', label: 'filas del modelo de handoff D↔D' },
    { value: '429,53 UF', label: 'valor auditado (1.169 órdenes de inspección)' },
    { value: '822', label: 'inspecciones realizadas (de 1.169 OI)' },
    { value: 'Épica 6', label: 'Riesgos Hipotecarios (HDU 01-09)' },
  ],
  timeline: [
    { company: 'FID Seguros', role: 'Modelo de handoff D↔D + guía WCAG (DDD, Dual Track)', period: '2024' },
    { company: 'FID Seguros', role: 'Épica 6 — Consulta de Riesgos Hipotecarios (HDU 01-09)', period: '2024' },
    { company: 'FID Seguros', role: 'Gestión de 1.169 OI (822 realizadas) + cuadre de cierres', period: '2024-2025' },
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
      label: 'Proceso DDD + Dual Track + Sistema de Diseño',
      href: 'https://www.figma.com/design/QdPkYTZ2XaHrnWgaconjg5/FID--DS--Seguros-Chile?node-id=1-507&t=t3CXy8D5ETFEwYfz-1',
    },
  ],

  nextCase: { slug: 'sured', title: 'SuRed / Matrix Giros — Integración B2B' },
})
