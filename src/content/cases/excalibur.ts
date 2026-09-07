/**
 * Contenido — Meta-caso EXCALIBUR (este mismo sitio).
 * caseType: 'meta'. Variante: evidencia-viva. Ruta propia /excalibur (no /pruebas-tecnicas).
 *
 * Contenido derivado de hechos verificables del propio repo (CLAUDE.md, ADRs, CI) —
 * no de un doc de caso externo. Se evitan cifras volátiles (nº exacto de tests) a favor
 * de afirmaciones estables y comprobables en el repo.
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import { validateCaseData } from '@/components/templates/CasePage/validateCaseData'

export const excaliburCase: CasePageData = validateCaseData({
  slug: 'excalibur',
  title: 'EXCALIBUR — este mismo sitio como caso de estudio',
  description:
    'La metodología TITAN aplicada a mi propio producto: gobernanza Blueprint → Forge → Lock por componente, tokens M3 desde una fuente única, i18n bilingüe real con hreflang y accesibilidad verificada por componente.',
  tags: ['Next.js 15', 'React 19', 'MUI v6', 'i18n bilingüe', 'WCAG 2.2 AA', 'BFL / TITAN'],

  caseType: 'meta',
  caseFormat: 'evidencia-viva',
  badge: { icon: '📐', label: 'Caso propio' },

  valor:
    'La misma metodología que aplico en un encargo de cliente, aplicada a mi propio producto. Este sitio es el primer caso de estudio: cada componente tiene blueprint, tests, story y certificado de versión antes de entrar a producción.',
  situacion:
    'El portafolio v1 vivía acoplado en Netlify y era difícil de evolucionar. Se necesitaba una base desacoplada que demostrara el método, no solo lo describiera.',
  objetivo:
    'Construir el portafolio con la misma gobernanza que un producto de cliente — sin atajos — para que el sitio sea prueba viva del proceso, no una vitrina.',
  accion: [
    {
      decision: 'Sistema de estilos',
      discarded: 'Tailwind',
      chosen: 'MUI v6 + tokens M3 generados desde una fuente única (ADR-002)',
      why: 'Los tokens se generan y se auditan en CI — cero hex hardcoded, un solo lugar donde cambia el color',
    },
    {
      decision: 'Gobernanza de componentes',
      discarded: 'Convención informal por revisión manual',
      chosen: 'Ciclo BFL: Blueprint → Forge → Lock, con VERSION_CERTIFICATE por pieza',
      why: 'Hace trazable cada decisión y bloquea merges sin CI verde',
    },
  ],
  resultado:
    'Sitio en producción en Vercel, bilingüe es/en con rutas [locale], middleware y hreflang. Design System M3 con tokens desde una fuente única y 0 hex hardcoded (verificado en CI). Cada componente pasa lint, typecheck strict, tests Vitest + jest-axe, build y build-storybook antes del LOCK.',
  aprendizaje:
    'Aplicar el método al propio trabajo expone sus costuras antes que un cliente. Varias reglas de la metodología se endurecieron a partir de fricciones encontradas construyendo este sitio.',

  methodology: [
    { slug: 'bfl-blueprint-forge-lock', label: 'Ciclo BFL' },
    { slug: 'design-tokens-m3', label: 'Tokens M3 desde una fuente' },
    { slug: 'atomic-design', label: 'Atomic Design + data-atomic' },
  ],
  momentumsApplied: ['M2', 'M3'],
  processTransformation: {
    before: 'Portafolio v1 acoplado en Netlify, sin gobernanza de componentes ni pipeline de calidad.',
    approach:
      'Reconstruir desde cero con una fuente de verdad por dominio (tokens, i18n, contenido) y un CI que bloquea regresiones.',
    capabilityInstalled:
      'Un sistema de diseño y un pipeline BFL repetibles: agregar un componente nuevo sigue exactamente los mismos pasos verificables, los ejecute quien los ejecute.',
  },

  metrics: [
    { value: 'BFL', label: 'blueprint · forge · lock por componente' },
    { value: '0', label: 'hex hardcoded — solo tokens M3' },
    { value: '2', label: 'idiomas con hreflang (es · en)' },
    { value: 'axe', label: 'jest-axe en cada componente' },
  ],
  timeline: [
    { company: 'EXCALIBUR', role: 'Infra + tema M3 + i18n bilingüe', period: 'Olas 1-2' },
    { company: 'EXCALIBUR', role: 'Átomos → moléculas → organismos → templates', period: 'Olas 3-4' },
    { company: 'EXCALIBUR', role: 'Páginas + estructura de casos + SEO técnico', period: 'Olas 5-6', isLast: true },
  ],
  techStack: [
    { skill: 'Next.js 15 + React 19', level: 90, levelLabel: 'Aplicado' },
    { skill: 'MUI v6 + tokens M3', level: 88, levelLabel: 'Aplicado' },
    { skill: 'next-intl (i18n bilingüe)', level: 85, levelLabel: 'Aplicado' },
    { skill: 'Storybook 8 + Vitest + jest-axe', level: 86, levelLabel: 'Aplicado' },
  ],

  accessLinks: [
    { kind: 'produccion', label: 'Sitio en producción', href: 'https://excalibur-six-chi.vercel.app' },
    { kind: 'repo', label: 'Repositorio (rama v2)', href: 'https://github.com/MauroPX/excalibur/tree/v2' },
  ],

  footerDisclaimer:
    'Caso propio (meta) — este sitio es a la vez el portafolio y su primer caso de estudio; no es un encargo de cliente.',
  nextCase: { slug: 'fdn', title: 'FDN — LCP -90% y WCAG AAA' },
})
