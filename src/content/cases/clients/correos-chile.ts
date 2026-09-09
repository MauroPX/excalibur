/**
 * Caso de cliente — Correos Chile · Portal Empresas B2B (FactorIT / CCL, 2022-2023).
 * Experiencia profesional pagada. Fuente: docs/m1/CONTENT_COPY_STRATEGY.md §4 / §7.5
 * + docs/Career_Dossier/CONSOLIDACION_MAESTRA §7 / CAREER OS SSOT CAPA 2.8.
 * Figma de v1 reusado, no recreado.
 * Reconciliación (C9, verificada contra las hojas de carga masiva del backend):
 * - NO "297 envíos" (las hojas dicen "hasta 250"), NO "13 regiones" (el dropdown
 *   lista 16 → se usa "red postal nacional"), NO "12→6 meses" / "10 devs" / ">95%"
 *   (sin artefacto). SÍ: 250 envíos / 11 campos, DS Merkén (Figma), 400+ sobre M3
 *   por derivación de la spec, transversal a Portal Empresa / Sucursal Virtual / App.
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import { validateCaseData } from '@/components/templates/CasePage/validateCaseData'

export const correosChileCase: CasePageData = validateCaseData({
  slug: 'correos-chile',
  title: 'Correos Chile — Portal Empresas B2B',
  description:
    'Portal Empresas B2B para la red logística postal nacional de Chile. Design System Merkén — del orden de 400+ componentes React/MUI sobre Material Design 3 — construido transversal a 3 productos: Portal Empresa, Sucursal Virtual y App móvil.',
  tags: ['Logística', 'Design System', 'React / MUI', 'B2B', 'MD3'],

  caseType: 'client',
  caseFormat: 'evidencia-viva',

  valor:
    'Antes de abrir Figma, estudié 250 envíos reales y absorbí el manual de marca completo — el resultado no fue una pantalla bonita, fue un Design System que sirvió transversal a los 3 productos del ecosistema y aceleró el handoff a desarrollo.',
  situacion:
    'Áreas desconectadas, datos duplicados y cero trazabilidad en la red logística postal nacional de Chile.',
  objetivo:
    'Conectar operaciones en tiempo real en toda la red postal nacional sin reconstruir la infraestructura.',
  accion: [
    {
      decision: 'Punto de partida del diseño',
      discarded: 'Diseñar sobre supuestos, solo el happy path',
      chosen: 'Estudiar el modelo de datos real (250 envíos, 11 campos) y mapear 5 escenarios por flujo (happy path, alternativos, errores, edge cases) antes de abrir Figma',
      why: 'Cero ambigüedad en desarrollo, cero retrabajo',
    },
  ],
  resultado:
    'Design System Merkén — del orden de 400+ componentes React/MUI sobre Material Design 3, con tokens y guidelines documentados — construido transversal a los 3 productos del ecosistema: Portal Empresa, Sucursal Virtual y App móvil. El sistema aceleró el handoff a desarrollo al eliminar la ambigüedad de spec.',
  aprendizaje:
    'Diagnosticar el dato real antes de diseñar evita el retrabajo — el mismo principio que se repite después en los diagnósticos E2E de otros casos.',

  methodology: [
    { slug: 'ucd', label: 'Diseño Centrado en el Usuario' },
    { slug: 'atomic-design', label: 'Atomic Design' },
    { slug: 'design-tokens-m3', label: 'Design Tokens MD3' },
  ],

  metrics: [
    { value: '3', label: 'productos servidos por un DS (Portal Empresa · Sucursal Virtual · App)' },
    { value: '400+', label: 'componentes sobre M3 (DS Merkén)' },
    { value: '11', label: 'campos del modelo de datos · 5 escenarios/flujo' },
    { value: 'MD3', label: 'tokens del Design System, fuente única' },
  ],
  timeline: [
    { company: 'CorreosChile', role: 'Modelo de datos (250 envíos, 11 campos) + manual de marca', period: '2022' },
    { company: 'CorreosChile', role: '5 escenarios por flujo + Design System Merkén', period: '2022-2023' },
    { company: 'CorreosChile', role: 'DS Merkén transversal: Portal Empresa, Sucursal Virtual, App móvil', period: '2023', isLast: true },
  ],
  techStack: [
    { skill: 'React / MUI', level: 92, levelLabel: 'Experto' },
    { skill: 'Design Tokens MD3', level: 88, levelLabel: 'Avanzado' },
    { skill: 'Modelado de datos + escenarios', level: 90, levelLabel: 'Experto' },
    { skill: 'Identidad de marca (Pantone / tipografía)', level: 82, levelLabel: 'Avanzado' },
  ],

  accessLinks: [
    {
      kind: 'figma',
      label: 'Portal Empresas — funcionalidades',
      href: 'https://www.figma.com/design/5HUHHeTR2Lqs0CBjdcCehj/%E2%9C%85_-CorreosChile-Merken-_-Structura---Funcionalidades-_ID-PE-?node-id=2466-141829&t=6XCg7ewFo7wDu1Ir-1',
    },
    {
      kind: 'figma',
      label: 'Sistema de Diseño Merkén — guidelines',
      href: 'https://www.figma.com/design/9GR3CAgD6kshwsDcilqYum/CorreosChile-Merken_DS_Guidelines?node-id=49823-12141&t=NdP0PvBWbEDqLnmW-1',
    },
  ],

  nextCase: { slug: 'bbva', title: 'BBVA — Sistema GEMAS' },
})
