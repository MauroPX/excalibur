/**
 * Caso de cliente — Universidad de La Salle (Nivelics, 2023-2024). — versión EN (traducción de es/clients/lasalle.ts)
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
  title: 'Universidad de La Salle — accessibility AAA by scope',
  description:
    'Institutional design system (9 faculties, per-faculty color scheme, atomic design) targeting AAA conformance — beyond the AA regulatory minimum — validated by automated testing (axe-core + contrast audit), the same method applied in Excalibur and BCS.',
  tags: ['EdTech', 'WCAG AAA', 'Design System', 'Automated testing', 'Atomic Design'],

  caseType: 'client',
  caseFormat: 'evidencia-viva',

  valor:
    'I did not aim for the regulatory minimum (AA) — I aimed for AAA by scope, and I made it verifiable: conformance is proven with the test pipeline, not with a PDF.',
  situacion:
    'The regulatory minimum (AA) was the floor, not the goal: an institutional ecosystem of 9 faculties needed a governed accessibility system, not per-screen patches.',
  objetivo:
    'Reach AAA conformance by scope and keep it auditable in the pipeline, not just "comply".',
  accion: [
    {
      decision: 'Target conformance level and how to evidence it',
      discarded: 'Stay at AA (the regulatory minimum) with a one-off manual audit',
      chosen: 'AAA as a scope target + automated validation (axe-core + contrast script) as conformance evidence',
      why: 'The minimum meets the law but does not govern accessibility at scale; automated validation does, and it is verifiable',
    },
  ],
  resultado:
    'AAA conformance by scope in the initial implementation, validated by automated testing. Atomic Design System in Figma (Variables, Tokens) + Storybook covering 9 academic units, with a per-faculty color scheme and integration of forms to Clientify and research to Gruplac (MinCiencias). Note: the current site (lasalle.edu.co, migrated to Drupal after handoff) shows accessibility regressions — the Design System and its original governance are no longer in production.',
  aprendizaje:
    'AAA conformance is worth it if it is verifiable: tying it to the test pipeline makes it auditable and survives the handoff better than a paper certificate — even if the client later migrates platforms.',

  methodology: [
    { slug: 'wcag-aaa', label: 'WCAG 2.2 AAA' },
    { slug: 'atomic-design', label: 'Atomic Design' },
    { slug: 'ddd', label: 'Domain-Driven Design' },
  ],

  metrics: [
    { value: 'AAA', label: 'by scope (vs. regulatory AA)' },
    { value: 'axe-core', label: 'automated conformance validation' },
    { value: '9', label: 'faculties / color schemes' },
    { value: 'atomic', label: 'design system in Figma + Storybook' },
  ],
  timeline: [
    { company: 'La Salle', role: 'Institutional ecosystem (WebSphere, Angular 8 PWA)', period: '2017-2020' },
    { company: 'La Salle', role: 'Atomic Design System in Figma + Storybook', period: '2023' },
    { company: 'La Salle', role: 'Automated AAA validation (axe-core + contrast) + per-faculty scheme', period: '2024', isLast: true },
  ],
  techStack: [
    { skill: 'WCAG AAA by scope', level: 95, levelLabel: 'Expert' },
    { skill: 'Angular Material + Atomic Design System', level: 88, levelLabel: 'Advanced' },
    { skill: 'Figma Variables + Storybook', level: 88, levelLabel: 'Advanced' },
    { skill: 'axe-core · contrast audit · screen readers', level: 90, levelLabel: 'Expert' },
  ],

  accessLinks: [
    {
      kind: 'figma',
      label: 'Base Design System — per-faculty color scheme',
      href: 'https://www.figma.com/design/b8yTDaFRuFpYS6LoK9x9Bt/-LaSALLE-_-DS-?node-id=55140-26811&t=qyMAJwpofM17RYLR-1',
    },
    {
      kind: 'figma',
      label: 'Templates (part 1) — atomic design',
      href: 'https://www.figma.com/design/hIw6NTrmYxHVLBdUK89XeD/%E2%8E%84--LaSalle-_-Firts---Templates--%E2%9C%8F%EF%B8%8F--Copy-?node-id=171-33445&t=KGQgaC0eVcveRU1H-1',
    },
    {
      kind: 'figma',
      label: 'Templates (part 2) — atomic design',
      href: 'https://www.figma.com/design/CPbaPfUr2Lb4XXSBez9xW5/%E2%8E%84--LaSalle-_-Second---Templates--%E2%9C%8F%EF%B8%8F-Copy?node-id=171-33445&t=qwB0EM2HuKgUejj2-1',
    },
  ],

  nextCase: { slug: 'fid-seguros', title: 'FID Seguros — DesignOps and migration to React' },
})
