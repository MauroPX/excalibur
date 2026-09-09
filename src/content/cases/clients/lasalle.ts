/**
 * Caso de cliente — Universidad de La Salle (Nivelics, 2023-2024).
 * Fuente: docs/m1/CONTENT_COPY_STRATEGY.md §5 / §7.5
 * + docs/Career_Dossier/CONSOLIDACION_MAESTRA §6 / CAREER OS SSOT CAPA 2.6.
 * Figma de v1 reusado, no recreado.
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import { validateCaseData } from '@/components/templates/CasePage/validateCaseData'

export const lasalleCase: CasePageData = validateCaseData({
  slug: 'lasalle',
  title: 'Universidad de La Salle — WCAG 2.2 AAA',
  description:
    'Conformidad WCAG 2.2 AAA — el nivel más alto — para el ecosistema institucional de la Universidad de La Salle. 18 categorías de accesibilidad evaluadas con 4 roles por criterio; cero riesgo legal bajo normativa MinTIC. Design System en Figma + Storybook.',
  tags: ['EdTech', 'WCAG 2.2 AAA', 'Design System', 'Accesibilidad', 'MinTIC'],

  caseType: 'client',
  caseFormat: 'evidencia-viva',

  valor:
    'No apunté al mínimo aceptable — apunté al nivel más alto posible (AAA), porque bajo obligación normativa, "casi cumplido" sigue siendo riesgo legal.',
  situacion:
    'Ningún nivel de conformidad por debajo de AAA eliminaba el riesgo legal bajo la normativa MinTIC.',
  objetivo:
    'Alcanzar el nivel más alto de conformidad WCAG posible, no solo "cumplir".',
  accion: [
    {
      decision: 'Nivel de conformidad objetivo',
      discarded: 'AA (cumplimiento mínimo aceptable), evaluación superficial',
      chosen: 'AAA + 18 categorías evaluadas con 4 roles por criterio + Web Vitals como criterio de accesibilidad',
      why: 'Bajo obligación normativa, el mínimo sigue siendo riesgo',
    },
  ],
  resultado:
    'WCAG 2.2 AAA logrado (el nivel más alto), riesgo legal cero bajo normativa MinTIC. Design System atómico en Figma (Variables, Tokens) + Storybook cubriendo 9 unidades académicas, con integración de formularios a Clientify y de investigación a Gruplac (MinCiencias). Auditoría con ARC Toolkit, axe DevTools y lectores de pantalla.',
  aprendizaje:
    'Cuando el riesgo es legal, "cumplir lo mínimo" no es una opción válida — se replica después en FDN.',

  methodology: [
    { slug: 'wcag-aaa', label: 'WCAG 2.2 AAA' },
    { slug: 'atomic-design', label: 'Atomic Design' },
    { slug: 'ddd', label: 'Domain-Driven Design' },
  ],

  metrics: [
    { value: 'AAA', label: 'WCAG 2.2 (nivel más alto)' },
    { value: '18 × 4', label: 'categorías × roles por criterio' },
    { value: '9', label: 'unidades académicas cubiertas' },
    { value: '0', label: 'riesgo legal MinTIC' },
  ],
  timeline: [
    { company: 'La Salle', role: 'Ecosistema institucional (WebSphere, Angular 8 PWA)', period: '2017-2020' },
    { company: 'La Salle', role: 'Design System atómico en Figma + Storybook', period: '2023' },
    { company: 'La Salle', role: 'Auditoría 18 categorías + certificación AAA', period: '2024', isLast: true },
  ],
  techStack: [
    { skill: 'WCAG 2.2 AAA', level: 95, levelLabel: 'Experto' },
    { skill: 'Angular Material + IAAP DS', level: 88, levelLabel: 'Avanzado' },
    { skill: 'Figma Variables + Storybook', level: 88, levelLabel: 'Avanzado' },
    { skill: 'ARC Toolkit · axe DevTools', level: 90, levelLabel: 'Experto' },
  ],

  accessLinks: [
    {
      kind: 'figma',
      label: 'Design System base — scheme de color por facultad',
      href: 'https://www.figma.com/design/b8yTDaFRuFpYS6LoK9x9Bt/-LaSALLE-_-DS-?node-id=55140-26811&t=qyMAJwpofM17RYLR-1',
    },
    {
      kind: 'figma',
      label: 'Templates (parte 1) — atomic design',
      href: 'https://www.figma.com/design/hIw6NTrmYxHVLBdUK89XeD/%E2%8E%84--LaSalle-_-Firts---Templates--%E2%9C%8F%EF%B8%8F--Copy-?node-id=171-33445&t=KGQgaC0eVcveRU1H-1',
    },
    {
      kind: 'figma',
      label: 'Templates (parte 2) — atomic design',
      href: 'https://www.figma.com/design/CPbaPfUr2Lb4XXSBez9xW5/%E2%8E%84--LaSalle-_-Second---Templates--%E2%9C%8F%EF%B8%8F-Copy?node-id=171-33445&t=qwB0EM2HuKgUejj2-1',
    },
  ],

  nextCase: { slug: 'fid-seguros', title: 'FID Seguros — DesignOps y migración a React' },
})
