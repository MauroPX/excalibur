/**
 * Caso de cliente — Correos Chile · Portal Empresas B2B (FactorIT / CCL, 2022-2023).
 * Experiencia profesional pagada. Fuente: docs/m1/CONTENT_COPY_STRATEGY.md §4 / §7.5
 * + docs/Career_Dossier/CONSOLIDACION_MAESTRA §7 / CAREER OS SSOT CAPA 2.8.
 * Figma de v1 reusado, no recreado.
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import { validateCaseData } from '@/components/templates/CasePage/validateCaseData'

export const correosChileCase: CasePageData = validateCaseData({
  slug: 'correos-chile',
  title: 'Correos Chile — Portal Empresas B2B',
  description:
    'Portal B2B para la red logística postal nacional de Chile (13 regiones). Design System Merkén de +400 componentes React/MUI con tokens MD3; ciclo de entrega comprimido de 12 a 6 meses, con 10 desarrolladores autónomos desde el sprint 1.',
  tags: ['Logística', 'Design System', 'React / MUI', 'B2B', 'MD3'],

  caseType: 'client',
  caseFormat: 'evidencia-viva',

  valor:
    'Antes de abrir Figma, estudié 297 envíos reales y absorbí el manual de marca completo — el resultado no fue una pantalla bonita, fue un sistema que redujo el tiempo de entrega a la mitad.',
  situacion:
    'Áreas desconectadas, datos duplicados y cero trazabilidad en la red logística postal nacional de Chile, con operación en 13 regiones.',
  objetivo:
    'Conectar operaciones en tiempo real en 13 regiones sin reconstruir la infraestructura.',
  accion: [
    {
      decision: 'Punto de partida del diseño',
      discarded: 'Diseñar sobre supuestos, solo el happy path',
      chosen: 'Estudiar el modelo de datos real (297 envíos, 11 campos) y mapear 5 escenarios por flujo (happy path, alternativos, errores, edge cases) antes de abrir Figma',
      why: 'Cero ambigüedad en desarrollo, cero retrabajo',
    },
  ],
  resultado:
    'De 12 meses estimados a 6 entregados. +400 componentes React/MUI (Design System Merkén con tokens MD3), 10 desarrolladores autónomos desde el sprint 1, >95% de fidelidad UI–Desarrollo, 3 productos entregados (Portal B2B, Sucursal Virtual, App Móvil) y 2 ciclos extra de mejora dentro del mismo presupuesto.',
  aprendizaje:
    'Diagnosticar el dato real antes de diseñar evita el retrabajo — el mismo principio que se repite después en los diagnósticos E2E de otros casos.',

  methodology: [
    { slug: 'ucd', label: 'Diseño Centrado en el Usuario' },
    { slug: 'atomic-design', label: 'Atomic Design' },
    { slug: 'design-tokens-m3', label: 'Design Tokens MD3' },
  ],

  metrics: [
    { value: '12 → 6', label: 'meses de ciclo de entrega' },
    { value: '+400', label: 'componentes React/MUI (DS Merkén)' },
    { value: '>95%', label: 'fidelidad UI–Desarrollo' },
    { value: '13', label: 'regiones conectadas' },
  ],
  timeline: [
    { company: 'CorreosChile', role: 'Modelo de datos (297 envíos, 11 campos) + manual de marca', period: '2022' },
    { company: 'CorreosChile', role: '5 escenarios por flujo + Design System Merkén', period: '2022-2023' },
    { company: 'CorreosChile', role: '3 productos: Portal B2B, Sucursal Virtual, App Móvil', period: '2023', isLast: true },
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
      label: 'Estructura UI',
      href: 'https://www.figma.com/design/5HUHHeTR2Lqs0CBjdcCehj/%E2%9C%85_%5BM%5D_%5BStructura%5D-%5BFuncionalidades%5D_ID%5BPE%5D?node-id=8072-405168',
    },
    {
      kind: 'figma',
      label: 'Validación de Workflows',
      href: 'https://www.figma.com/proto/5HUHHeTR2Lqs0CBjdcCehj/%E2%9C%85_%5BM%5D_%5BStructura%5D-%5BFuncionalidades%5D_ID%5BPE%5D?page-id=8072%3A405168&node-id=9410-536709',
    },
  ],

  nextCase: { slug: 'bbva', title: 'BBVA — Sistema GEMAS' },
})
