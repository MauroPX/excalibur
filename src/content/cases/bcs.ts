/**
 * Contenido — Prueba técnica BCS / Banco Caja Social (Diseñador de Interfaz UI).
 * Variante: evidencia-viva. Fuente verbatim: docs/m1/WORKTEST_CASES.md §Caso 3
 * + docs/m2/spec/CASE_PAGE_CONTENT_STRUCTURE.md §Variante A / BCS.
 */
import type { CasePageData } from '@/components/templates/CasePage/types'
import { validateCaseData } from '@/components/templates/CasePage/validateCaseData'

export const bcsCase: CasePageData = validateCaseData({
  slug: 'bcs',
  title: 'BCS — Plataforma de Metas Financieras',
  description:
    'Prueba técnica de Banco Caja Social: MVP de una plataforma para que personas de 25-40 años organicen metas financieras e inicien inversión personal. El brief exigía solo un archivo Figma editable, un Design System base y un prototipo navegable — nada de código. Plazo: 2 días calendario + sustentación de 30 min.',
  tags: ['Diseñador de Interfaz UI', 'Design System', 'Material Design 3', 'WCAG AA/AAA', 'Monorepo'],

  caseType: 'work-test',
  caseFormat: 'evidencia-viva',
  badge: { icon: 'wrench', label: 'Prueba técnica' },
  entryRole: 'Diseñador/a de Interfaz de Usuario UI',
  discoveredScope:
    'un problema de sistema (producir cientos de pantallas a escala), no de una sola pantalla',

  valor:
    'El brief pedía una pantalla en Figma. Entregué el sistema que sostiene esa pantalla a escala — 34 roles × 6 esquemas, verificados automáticamente — porque diseñar una interfaz y diseñar la capacidad de producir cientos de ellas son problemas distintos, y solo el segundo escala con un equipo.',
  situacion:
    'Banco Caja Social pidió diseñar el MVP de una plataforma de metas financieras e inversión personal para personas de 25-40 años. El brief exigía solo Figma editable + Design System base + prototipo navegable, sin código, en 2 días calendario más una sustentación de 30 minutos.',
  objetivo:
    'Demostrar que el alcance mínimo pedido (Figma + prototipo) no es el techo de lo que se puede y debe entregar cuando el problema real es de sistema, no de pantalla.',
  accion: [
    {
      decision: 'Verificación de contraste del Design System',
      discarded: 'Solo Figma, sin verificación de contraste',
      chosen: 'Monorepo + script de auditoría de 66 verificaciones automáticas contra el export oficial de Material Theme Builder',
      why: 'Un error de contraste detectado manualmente no escala a 6 esquemas × 34 roles',
    },
    {
      decision: 'Un diagnóstico propio inicial resultó incorrecto al verificarlo',
      discarded: 'Silenciar o corregir el error sin dejar rastro',
      chosen: 'Corregirlo y declararlo como tal — verificación independiente con script Python (materialyoucolor)',
      why: 'Un caso que esconde sus errores no es evidencia de disciplina; mantener el error corregido y visible sí lo es',
    },
  ],
  resultado:
    'Se entregó lo pedido más: un Design System de 34 roles M3 en 6 esquemas (light/dark × base/medium-contrast/high-contrast) desde 3 seeds HCT independientes (Primary #0063A7, Secondary #2D4550, Tertiary #97D3B8); un monorepo real (tokens, ui-atoms, web-app) con Storybook en Chromatic y CI en GitHub Actions; y un script de auditoría que corre 66 verificaciones automáticas (11 pares oficiales M3 × 6 esquemas), exigiendo AA en base/medium-contrast y AAA en los esquemas high-contrast, verificado campo a campo contra el export oficial de Material Theme Builder.',
  aprendizaje:
    'Un sistema que no se verifica automáticamente no escala más allá de quien lo creó. Desde este caso, cualquier design system que entregues incluye su propio script de verificación — no depende de que alguien revise a mano.',

  methodology: [
    { slug: 'material-design-3', label: 'Material Design 3 (HCT)' },
    { slug: 'contrast-audit', label: 'Auditoría de contraste automatizada' },
  ],
  momentumsApplied: ['M0', 'M1', 'M2', 'M3', 'M4'],

  metrics: [
    { value: '34 × 6', label: 'roles M3 × esquemas de color' },
    { value: '66', label: 'verificaciones de contraste automáticas' },
    { value: '3', label: 'paquetes en el monorepo (tokens · ui-atoms · web-app)' },
    { value: '2 días', label: 'plazo del brief (solo Figma pedido)' },
  ],
  timeline: [
    { company: 'Banco Caja Social', role: 'Brief: Figma editable + Design System base + prototipo navegable', period: '2 días' },
    { company: 'Banco Caja Social', role: 'Entrega ampliada: monorepo + 66 verificaciones + sustentación', period: '2 días + 30 min', isLast: true },
  ],
  techStack: [
    { skill: 'Material Design 3 (HCT)', level: 86, levelLabel: 'Aplicado' },
    { skill: 'Storybook + Chromatic', level: 84, levelLabel: 'Aplicado' },
    { skill: 'Monorepo + GitHub Actions', level: 82, levelLabel: 'Aplicado' },
    { skill: 'Auditoría de contraste (script)', level: 85, levelLabel: 'Aplicado' },
  ],

  accessLinks: [
    { kind: 'demo', label: 'App', href: 'https://bcs-frontend-web-app.vercel.app' },
    {
      kind: 'figma',
      label: 'UI + Design System (base)',
      href: 'https://www.figma.com/design/TpmLPg0hWma3vitJAKBOPd/BSC--DS---structure-base-?node-id=11-1833&t=i16vy9tghTzF0Nom-1',
    },
    {
      kind: 'storybook',
      label: 'Storybook',
      href: 'https://bcs-frontend-web-app.vercel.app/storybook/?path=/docs/bienvenida-introducci%C3%B3n--docs',
    },
  ],

  footerDisclaimer: 'Prueba técnica de selección — no un encargo remunerado.',
  nextCase: { slug: 'codesa', title: 'Codesa — Estrategia de Investigación UX', href: '/pruebas-tecnicas/codesa' },
})
