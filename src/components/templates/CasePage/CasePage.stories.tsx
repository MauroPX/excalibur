import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { CasePage } from './CasePage'
import type { CasePageData } from './types'

// Datos reales del portafolio — mismos 3 casos que src/app/casos/[slug]/page.tsx.
// Mantener en sync si esa data cambia (candidato a factorizar en un fixture
// compartido cuando se migre a Strapi — ver TRAZABILIDAD EX-v2-DATA-001).

const fdn = {
  slug: 'fdn',
  title: 'FDN — LCP -90% y WCAG AAA',
  description: 'Migración del portal institucional de la Financiera de Desarrollo Nacional de Drupal 7 a Next.js 14. LCP de 25.2s a 2.5s (-90%). 654 fallas WCAG eliminadas. Certificado WCAG AAA 2024.',
  tags: ['GovTech', 'Next.js', 'WCAG', 'A11Y', 'Performance', 'Strapi'],
  metrics: [
    { value: '-90%', label: 'LCP (25.2s → 2.5s)' },
    { value: '654', label: 'fallas WCAG eliminadas' },
    { value: 'AAA', label: 'certificado WCAG 2024' },
    { value: '2024', label: 'en producción' },
  ],
  timeline: [
    { company: 'FDN', role: 'Auditoría WCAG 2.2 + Performance', period: 'Mes 1-2' },
    { company: 'FDN', role: 'Arquitectura Next.js + Strapi v5', period: 'Mes 2-4' },
    { company: 'FDN', role: 'Migración brownfield + Cloudflare WAF', period: 'Mes 4-7' },
    { company: 'FDN', role: 'Certificación WCAG AAA + Go-live', period: 'Mes 7-9', isLast: true },
  ],
  techStack: [
    { skill: 'Next.js 14', level: 92, levelLabel: 'Experto' },
    { skill: 'WCAG 2.2 / A11Y', level: 95, levelLabel: 'Experto' },
    { skill: 'Strapi v5 + pgvector', level: 88, levelLabel: 'Avanzado' },
    { skill: 'Cloudflare WAF', level: 78, levelLabel: 'Avanzado' },
  ],
  nextCase: { slug: 'solidaria', title: 'Solidaria — 212 tests · 0 violations' },
}

const solidaria = {
  slug: 'solidaria',
  title: 'Solidaria — Design System 0 violations',
  description: 'Design System desde cero para Solidaria Portal (Insurtech). Gobernanza real, 212 tests con Vitest + jest-axe, 0 axe violations, Storybook en Chromatic con baseline establecido en producción.',
  tags: ['Design System', 'WCAG', 'Storybook', 'Insurtech', 'React', 'Chromatic'],
  metrics: [
    { value: '0', label: 'axe violations' },
    { value: '212', label: 'tests verdes' },
    { value: 'DS', label: 'en producción' },
    { value: '2025', label: 'en producción' },
  ],
  timeline: [
    { company: 'Solidaria', role: 'Auditoría A11Y + Design Tokens', period: 'Mes 1' },
    { company: 'Solidaria', role: 'Átomos + Moléculas + CI/CD', period: 'Mes 1-3' },
    { company: 'Solidaria', role: 'Organismos + Storybook + Chromatic', period: 'Mes 3-5' },
    { company: 'Solidaria', role: 'Tests 212 · Baseline · Go-live', period: 'Mes 5-6', isLast: true },
  ],
  techStack: [
    { skill: 'React + MUI v6', level: 90, levelLabel: 'Experto' },
    { skill: 'Vitest + jest-axe', level: 88, levelLabel: 'Avanzado' },
    { skill: 'Storybook 8 + Chromatic', level: 85, levelLabel: 'Avanzado' },
    { skill: 'Design Tokens M3', level: 82, levelLabel: 'Avanzado' },
  ],
  nextCase: { slug: 'bbva', title: 'BBVA — Time-to-market -75%' },
}

const bbva = {
  slug: 'bbva',
  title: 'BBVA — Time-to-market -75%',
  description: 'Arquitectura de producto end-to-end para BBVA Colombia & Panamá. Framework GEMAS + Proyecto Brickell. Digitalización 100% del proceso de contratación Pyme en 2 países.',
  tags: ['Banca', 'Fintech', 'SAFe', 'Design System', 'Figma', 'GovTech'],
  metrics: [
    { value: '-75%', label: 'time-to-market' },
    { value: '100%', label: 'contratación digital Pyme' },
    { value: '2', label: 'países (Colombia + Panamá)' },
    { value: '2024-2026', label: 'en producción' },
  ],
  timeline: [
    { company: 'BBVA', role: 'Framework GEMAS + Discovery', period: '2024 Q1' },
    { company: 'BBVA', role: 'Proyecto Brickell — Arquitectura Pyme', period: '2024 Q2-Q3' },
    { company: 'BBVA', role: 'Design System + Figma Variables', period: '2024 Q4' },
    { company: 'BBVA', role: 'Rollout Colombia + Panamá', period: '2025-2026', isLast: true },
  ],
  techStack: [
    { skill: 'SAFe Agile', level: 90, levelLabel: 'Experto' },
    { skill: 'Figma Variables + DS', level: 88, levelLabel: 'Avanzado' },
    { skill: 'TITAN v7.0', level: 95, levelLabel: 'Experto' },
    { skill: 'Product Architecture', level: 92, levelLabel: 'Experto' },
  ],
  nextCase: { slug: 'fdn', title: 'FDN — LCP -90% y WCAG AAA' },
}

const meta: Meta<typeof CasePage> = {
  title: 'Templates/CasePage',
  component: CasePage,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'dark' },
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: true }] } },
    titan: { spec_id: 'EX-v2-TMPL-002', atomic_level: 'template' },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CasePage>

export const FDN: Story = {
  args: { caseData: fdn },
  name: 'FDN — GovTech / WCAG AAA',
}

export const Solidaria: Story = {
  args: { caseData: solidaria },
  name: 'Solidaria — Design System',
}

export const BBVA: Story = {
  args: { caseData: bbva },
  name: 'BBVA — Banca / SAFe',
}

export const SinSiguienteCaso: Story = {
  args: { caseData: { ...bbva, nextCase: null } },
  name: 'Sin siguiente caso (último del ciclo)',
}

// ── v1.1.0 ────────────────────────────────────────────────────────────────────
// Contenido verbatim de docs/m2/spec/CASE_PAGE_CONTENT_STRUCTURE.md — no reinterpretado.

export const ClienteV100: Story = {
  args: { caseData: fdn },
  name: 'Cliente — v1.0.0 (retrocompat, sin bloques nuevos)',
}

const fleetControl: CasePageData = {
  slug: 'fleetcontrol',
  title: 'FleetControl — Monitor de flota en tiempo real',
  description:
    'Prueba técnica de selección: UI de monitoreo de flota sin backend propio ni WebSocket disponible.',
  tags: ['Design Engineer (UX/UI)', 'WCAG 2.1 AA', 'Next.js', 'Zustand'],
  caseType: 'work-test',
  caseFormat: 'evidencia-viva',
  badge: { icon: '🔧', label: 'Prueba técnica' },
  entryRole: 'Design Engineer (UX/UI)',
  valor:
    'No acepté las restricciones de la IA como definitivas: cuando generó código que rompía semántica de accesibilidad o UX de movimiento, lo detecté y corregí con criterio propio, documentando cada corrección — la diferencia entre usar IA y saber cuándo no seguirla.',
  situacion:
    'Prueba técnica para un rol de Design Engineer. Sin backend propio y sin WebSocket disponible en el hosting (Netlify Functions).',
  objetivo:
    'Demostrar decisiones de arquitectura frontend defendibles bajo restricciones reales (sin backend propio, sin WebSocket disponible) — no solo entregar una UI funcional.',
  accion: [
    {
      decision: 'Marcado de la tarjeta de estado',
      discarded: '<div> anidados (lo que generó la IA)',
      chosen: '<dl><dt><dd>',
      why: 'Semánticamente correcto para pares etiqueta-valor — un lector de pantalla anuncia "Velocidad: 84.5 km/h" como unidad coherente',
    },
    {
      decision: 'Actualización de posición en tiempo real',
      discarded: 'WebSocket nativo',
      chosen: 'Polling 5s + interpolación requestAnimationFrame',
      why: 'Netlify Functions no soporta WebSockets; la interpolación logra el mismo efecto visual sin servidor adicional',
    },
    {
      decision: 'Manejo de estado global',
      discarded: 'React Context',
      chosen: 'Zustand',
      why: 'El polling actualiza 12x/min — con Context se re-renderiza todo el árbol; con Zustand solo los componentes suscritos al slice exacto',
    },
    {
      decision: 'Manejo de fallo de red',
      discarded: 'Error genérico',
      chosen: '"Última posición conocida" con opacidad reducida + role="alert" + foco automático',
      why: 'Preserva información útil en vez de solo mostrar que algo falló',
    },
  ],
  aprendizaje:
    'Corregir la IA con criterio propio no es un extra opcional — es la parte del trabajo que un candidato promedio se salta. Desde este caso, documentas explícitamente qué generó IA vs. qué corregiste tú en cada proyecto siguiente, no solo en pruebas.',
  metrics: [
    { value: '5s', label: 'ciclo de polling + interpolación' },
    { value: 'AA', label: 'WCAG 2.1 (teclado · reduced-motion · contraste 4.5:1)' },
    { value: '3', label: 'correcciones a la IA documentadas' },
  ],
  timeline: [
    { company: 'FleetControl', role: 'Análisis de restricciones + arquitectura', period: 'Día 1' },
    { company: 'FleetControl', role: 'Implementación + corrección de la IA', period: 'Día 2-3', isLast: true },
  ],
  techStack: [
    { skill: 'Next.js', level: 90, levelLabel: 'Experto' },
    { skill: 'Zustand', level: 85, levelLabel: 'Avanzado' },
    { skill: 'WCAG 2.1 AA', level: 92, levelLabel: 'Experto' },
  ],
  methodology: [
    { slug: 'star-l', label: 'STAR-L' },
    { slug: 'decisiones-como-decisiones', label: 'Decisión → opciones → por qué' },
  ],
  accessLinks: [
    { kind: 'produccion', label: 'Demo en producción', href: 'https://simon-v2-monitor-rmxm.vercel.app/?demo=true' },
    { kind: 'preview', label: 'Preview (rama feat/capa-2)', href: 'https://simon-v2-monitor-rmxm-git-feat-capa-2-lemaogo-9238s-projects.vercel.app' },
    { kind: 'repo', label: 'Repositorio', href: 'https://github.com/MauroPX/simon-v2-monitor' },
    { kind: 'video', label: 'Recorrido en Loom', href: 'https://www.loom.com/share/dc3ef2ab5fb84e9b8c52709b26b8f915' },
    { kind: 'doc', label: 'Respuesta técnica (MD)', href: 'https://github.com/MauroPX/simon-v2-monitor/blob/main/TECHNICAL_CHALLENGE_RESPONSE.md' },
  ],
  aiDeclared: {
    items: [
      '3 correcciones documentadas a código generado por IA (semántica de accesibilidad y UX de movimiento).',
      'Cada corrección quedó registrada con el antes/después en la respuesta técnica.',
    ],
  },
  footerDisclaimer: 'Prueba técnica de selección — no un encargo remunerado.',
  nextCase: { slug: 'codesa', title: 'Codesa — estrategia de investigación', href: '/pruebas-tecnicas/codesa' },
}

export const WorkTestEvidenciaViva: Story = {
  args: { caseData: fleetControl },
  name: 'Work-test — evidencia-viva (FleetControl)',
}

const codesa: CasePageData = {
  slug: 'codesa',
  title: 'Codesa — Estrategia de investigación para un 28% de finalización',
  description:
    'Prueba técnica de Diseño UX Nivel 3: documento (sin código) para un problema sin investigación previa.',
  tags: ['Diseño UX Nivel 3', 'Research', 'RICE', 'Self-Determination Theory'],
  caseType: 'work-test',
  caseFormat: 'documento-estrategico',
  badge: { icon: '🔧', label: 'Prueba técnica' },
  entryRole: 'Diseño UX Nivel 3',
  estado: 'parcial',
  estadoNota:
    'Decisión de publicación abierta: se muestra el entregable final (17 páginas), no las ~120 páginas de research crudo.',
  valor:
    'Ante un problema sin investigación previa, no adiviné causas — planteé 5 hipótesis falsables, cada una anclada a un marco de comportamiento real, y declaré con total transparencia dónde y cómo usé IA en el proceso. La disciplina de investigación importa tanto como el hallazgo.',
  situacion:
    'Prueba técnica de 7 días. Formato pedido: documento, sin código. Un producto de pagos con 28% de finalización y sin investigación previa sobre la causa.',
  objetivo:
    'Diseñar una estrategia de investigación defendible para un problema sin datos previos, no adivinar la causa del 28% de finalización.',
  accion: [
    {
      decision: 'Cómo evaluar cada hipótesis',
      discarded: 'Una sola técnica (ej. solo entrevistas)',
      chosen: 'Metodología mixta (funnel + heurístico + entrevistas + usabilidad + CES)',
      why: 'Cada hipótesis requiere un tipo de evidencia distinto — un solo método no cubre las 5',
    },
    {
      decision: 'Cómo priorizar hallazgos',
      discarded: 'RICE estándar',
      chosen: 'RICE + ejes de Confianza e Inclusión',
      why: 'El dominio (pagos, población vulnerable) exige ejes que el RICE original no contempla',
    },
  ],
  aprendizaje:
    'Un framework estándar (RICE) no siempre alcanza — a veces la disciplina correcta es extenderlo con criterio propio, y declarar esa extensión explícitamente en vez de forzar el problema dentro del framework original.',
  metrics: [
    { value: '5', label: 'hipótesis falsables' },
    { value: '17 pág.', label: 'entregable final' },
    { value: '~120 pág.', label: 'research crudo (no mostrado)' },
  ],
  timeline: [
    { company: 'Codesa', role: 'Encuadre + hipótesis + marco teórico', period: 'Día 1-2' },
    { company: 'Codesa', role: 'Metodología mixta + priorización', period: 'Día 3-5' },
    { company: 'Codesa', role: 'Plan de ejecución en 4 fases + entrega', period: 'Día 6-7', isLast: true },
  ],
  techStack: [
    { skill: 'Research mixto', level: 88, levelLabel: 'Avanzado' },
    { skill: 'RICE + OST', level: 85, levelLabel: 'Avanzado' },
    { skill: 'Marcos de comportamiento', level: 82, levelLabel: 'Avanzado' },
  ],
  methodology: [
    { slug: 'star-l', label: 'STAR-L' },
    { slug: 'rice-extendido', label: 'RICE + ejes propios' },
  ],
  sections: [
    { num: '01', title: 'El problema', body: '28% de finalización, sin investigación previa.' },
    {
      num: '02',
      title: '5 hipótesis + marco teórico',
      body: 'Cada hipótesis anclada a un marco: Self-Determination Theory, Calm Technology, Design with Intent.',
    },
    {
      num: '03',
      title: 'Metodología mixta',
      body: 'Un método por tipo de evidencia requerido.',
      table: {
        headers: ['Método', 'Herramienta', 'Qué evidencia aporta'],
        rows: [
          ['Análisis de funnel', 'Analítica de producto', 'Dónde exactamente cae la finalización'],
          ['Evaluación heurística', 'Checklist propio', 'Fricciones de interfaz sin usuarios'],
          ['Entrevistas', 'Guion semiestructurado', 'Motivaciones y bloqueos percibidos'],
          ['Pruebas de usabilidad', 'Tareas guiadas', 'Dónde se traban en vivo'],
          ['CES', 'Encuesta post-tarea', 'Esfuerzo percibido cuantificado'],
        ],
      },
    },
    {
      num: '04',
      title: 'Participantes representativos',
      body: 'Perfil orientado a los contextos más excluidos del producto.',
      chips: ['Android gama baja', 'Conectividad rural', 'Baja visión', 'Baja alfabetización digital'],
    },
    { num: '05', title: 'Priorización', body: 'OST + RICE + ejes propios: Confianza, Inclusión.' },
    { num: '06', title: 'Ejecución en 4 fases', body: 'Plan operativo con hitos por semana.' },
  ],
  aiDeclared: {
    items: [
      'TITAN Research Intelligence Skill v5.1 usado en etapas acotadas del research.',
      'Validación manual de cada salida; cita de cierre incluida en el entregable.',
    ],
    source: {
      label: 'docs/m1/WORKTEST_CASES.md — Caso 4',
      href: 'https://github.com/MauroPX/excalibur/blob/v2/docs/m1/WORKTEST_CASES.md',
    },
  },
  footerDisclaimer: 'Prueba técnica de selección — no un encargo remunerado.',
  nextCase: { slug: 'fleetcontrol', title: 'FleetControl — Monitor de flota', href: '/pruebas-tecnicas/fleetcontrol' },
}

export const WorkTestDocumentoEstrategico: Story = {
  args: { caseData: codesa },
  name: 'Work-test — documento-estrategico (Codesa, estado parcial)',
}

const excalibur: CasePageData = {
  slug: 'excalibur',
  title: 'EXCALIBUR — este mismo sitio como caso de estudio',
  description:
    'La metodología TITAN aplicada a mi propio producto: gobernanza BFL, tokens M3, i18n bilingüe y a11y verificada.',
  tags: ['Next.js 15', 'i18n bilingüe', 'WCAG 2.2 AA', 'Design System', 'BFL / TITAN'],
  caseType: 'meta',
  caseFormat: 'evidencia-viva',
  badge: { icon: '📐', label: 'Caso propio' },
  valor:
    'La misma metodología que aplico en Correos Chile, BBVA o FDN, aplicada a mi propio producto. Este sitio es el primer caso de estudio: cada componente tiene blueprint, tests, story y certificado de versión.',
  situacion:
    'Portafolio v1 en Netlify, acoplado y difícil de evolucionar. Se necesitaba una base desacoplada que demostrara el método, no solo lo describiera.',
  objetivo:
    'Construir el portafolio con la misma gobernanza que un producto de cliente — sin atajos — para que el sitio sea prueba viva del proceso, no una vitrina.',
  accion: [
    {
      decision: 'Sistema de estilos',
      discarded: 'Tailwind',
      chosen: 'MUI v6 + tokens M3 (ADR-002)',
      why: 'Los tokens M3 se generan desde una única fuente y se auditan en CI — cero hex hardcoded',
    },
    {
      decision: 'Gobernanza de componentes',
      discarded: 'Convención informal',
      chosen: 'Ciclo BFL: Blueprint → Forge → Lock + VERSION_CERTIFICATE por pieza',
      why: 'Hace trazable cada decisión y bloquea merges sin CI 7/7 verde',
    },
  ],
  aprendizaje:
    'Aplicar el método al propio trabajo expone sus costuras antes que un cliente. Varias reglas de TITAN v7 se endurecieron a partir de fricciones encontradas construyendo este sitio.',
  metrics: [
    { value: '203+', label: 'tests verdes (Vitest + jest-axe)' },
    { value: '0', label: 'axe violations' },
    { value: '2', label: 'idiomas (es / en) con hreflang' },
    { value: 'M3', label: 'tokens desde fuente única' },
  ],
  timeline: [
    { company: 'EXCALIBUR', role: 'Infra + tema M3 + i18n', period: 'Ola 5' },
    { company: 'EXCALIBUR', role: 'Átomos → Organismos → Templates', period: 'Ola 3-4' },
    { company: 'EXCALIBUR', role: 'Páginas + estructura de casos', period: 'Ola 6', isLast: true },
  ],
  techStack: [
    { skill: 'Next.js 15 + React 19', level: 92, levelLabel: 'Experto' },
    { skill: 'MUI v6 + tokens M3', level: 88, levelLabel: 'Avanzado' },
    { skill: 'next-intl', level: 85, levelLabel: 'Avanzado' },
    { skill: 'Storybook 8 + Chromatic', level: 84, levelLabel: 'Avanzado' },
  ],
  methodology: [
    { slug: 'bfl-blueprint-forge-lock', label: 'Ciclo BFL' },
    { slug: 'design-tokens-m3', label: 'Tokens M3 desde fuente' },
    { slug: 'atomic-design', label: 'Atomic Design + data-atomic' },
  ],
  momentumsApplied: ['M2', 'M3'],
  processTransformation: {
    before: 'Portafolio v1 acoplado en Netlify, sin gobernanza de componentes ni pipeline de calidad.',
    approach: 'Reconstruir desde cero con una fuente de verdad por dominio (tokens, i18n, contenido) y CI que bloquea regresiones.',
    capabilityInstalled: 'Un sistema de diseño y un pipeline BFL repetibles: agregar un componente nuevo sigue exactamente los mismos pasos verificables.',
  },
  accessLinks: [
    { kind: 'produccion', label: 'Sitio en producción', href: 'https://excalibur-six-chi.vercel.app' },
    { kind: 'repo', label: 'Repositorio (rama v2)', href: 'https://github.com/MauroPX/excalibur/tree/v2' },
    { kind: 'storybook', label: 'Storybook', href: 'https://excalibur-six-chi.vercel.app' },
  ],
  aiDeclared: {
    items: [
      'Claude Code (arquitecto/auditor) + Aider con modelos locales (forge de código/tests/docs) según la tabla de roles de TITAN v7.',
      'Cada pieza pasa Gate 1/2 humano antes del LOCK.',
    ],
  },
  footerDisclaimer:
    'Caso propio (meta) — este sitio es a la vez el portafolio y su primer caso de estudio.',
  nextCase: { slug: 'fdn', title: 'FDN — LCP -90% y WCAG AAA' },
}

export const MetaCaso: Story = {
  args: { caseData: excalibur },
  name: 'Meta-caso — EXCALIBUR (caseType meta)',
}
