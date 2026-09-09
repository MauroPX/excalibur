/**
 * Caso de cliente — Universidad de La Salle (Nivelics, 2023-2024).
 * Fuente: docs/m1/CONTENT_COPY_STRATEGY.md §5 / §7.5
 * + docs/Career_Dossier/CONSOLIDACION_MAESTRA §6 / CAREER OS SSOT CAPA 2.6.
 * Figma de v1 reusado, no recreado.
 * Reconciliación (C9): AAA se afirma como objetivo de ALCANCE (por encima del
 * mínimo normativo AA), evidenciado por validación automatizada (axe-core +
 * auditoría de contraste) — método transversal a Excalibur y BCS — NO por
 * certificado en papel ni badge (no hay uno público hoy). Se retira
 * "18 × 4 categorías" y "0 riesgo legal MinTIC" (afirmaciones sin artefacto visible).
 * NOTA: no hay suite Playwright/e2e en Excalibur — si La Salle usó Playwright,
 * confirmar y re-añadir solo para este caso (no como "igual que Excalibur").
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import { validateCaseData } from '@/components/templates/CasePage/validateCaseData'

export const lasalleCase: CasePageData = validateCaseData({
  slug: 'lasalle',
  title: 'Universidad de La Salle — accesibilidad AAA por alcance',
  description:
    'Sistema de diseño institucional (9 facultades, scheme de color por facultad, atomic design) con objetivo de conformidad AAA — por encima del mínimo normativo AA — validado por testing automatizado (axe-core + auditoría de contraste), el mismo método aplicado en Excalibur y BCS.',
  tags: ['EdTech', 'WCAG AAA', 'Design System', 'Testing automatizado', 'Atomic Design'],

  caseType: 'client',
  caseFormat: 'evidencia-viva',

  valor:
    'No apunté al mínimo normativo (AA) — apunté a AAA por alcance, y lo hice verificable: la conformidad se prueba con el pipeline de tests, no con un PDF.',
  situacion:
    'El mínimo normativo (AA) era el piso, no la meta: un ecosistema institucional de 9 facultades necesitaba un sistema de accesibilidad gobernado, no parches por pantalla.',
  objetivo:
    'Alcanzar conformidad AAA por alcance y dejarla auditable en el pipeline, no solo "cumplir".',
  accion: [
    {
      decision: 'Nivel de conformidad objetivo y cómo evidenciarlo',
      discarded: 'Quedarse en AA (el mínimo normativo) con auditoría manual puntual',
      chosen: 'AAA como objetivo de alcance + validación automatizada (axe-core + script de contraste) como evidencia de conformidad',
      why: 'El mínimo cumple la ley pero no gobierna la accesibilidad a escala; la validación automatizada sí, y es verificable',
    },
  ],
  resultado:
    'Conformidad AAA por alcance en la implementación inicial, validada por testing automatizado. Design System atómico en Figma (Variables, Tokens) + Storybook cubriendo 9 unidades académicas, con scheme de color por facultad e integración de formularios a Clientify y de investigación a Gruplac (MinCiencias). Nota: el sitio actual (lasalle.edu.co, migrado a Drupal después del handoff) presenta regresiones de accesibilidad — el Design System y su gobierno original ya no están en producción.',
  aprendizaje:
    'La conformidad AAA vale si es verificable: atarla al pipeline de tests la vuelve auditable y sobrevive al handoff mejor que un certificado en papel — aunque el cliente luego migre de plataforma.',

  methodology: [
    { slug: 'wcag-aaa', label: 'WCAG 2.2 AAA' },
    { slug: 'atomic-design', label: 'Atomic Design' },
    { slug: 'ddd', label: 'Domain-Driven Design' },
  ],

  metrics: [
    { value: 'AAA', label: 'por alcance (vs. AA normativo)' },
    { value: 'axe-core', label: 'validación automatizada de conformidad' },
    { value: '9', label: 'facultades / schemes de color' },
    { value: 'atomic', label: 'design system en Figma + Storybook' },
  ],
  timeline: [
    { company: 'La Salle', role: 'Ecosistema institucional (WebSphere, Angular 8 PWA)', period: '2017-2020' },
    { company: 'La Salle', role: 'Design System atómico en Figma + Storybook', period: '2023' },
    { company: 'La Salle', role: 'Validación automatizada AAA (axe-core + contraste) + scheme por facultad', period: '2024', isLast: true },
  ],
  techStack: [
    { skill: 'WCAG AAA por alcance', level: 95, levelLabel: 'Experto' },
    { skill: 'Angular Material + Design System atómico', level: 88, levelLabel: 'Avanzado' },
    { skill: 'Figma Variables + Storybook', level: 88, levelLabel: 'Avanzado' },
    { skill: 'axe-core · auditoría de contraste · lectores de pantalla', level: 90, levelLabel: 'Experto' },
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
