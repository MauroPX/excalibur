/**
 * Contenido de la portada (Home) — secciones portadas de v1 (`layer-home`).
 * Cero cifras inventadas: todo se cruza con src/content/cases/** o con
 * docs/m1/CONTENT_COPY_STRATEGY.md §7 (FAQ AEO ya reconciliada).
 */

// ── FAQ ──────────────────────────────────────────────────────────────────────
// Fuente de verdad: CONTENT_COPY_STRATEGY.md §7 (8 preguntas AEO, ya reconciliadas
// — niveles WCAG correctos, sin el "$3.000–$25.000" retirado esta sesión).
export interface FaqItem {
  q: string
  a: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: '¿Qué hace un Staff Product Architect y en qué se diferencia de un diseñador senior?',
    a: 'Un Staff Product Architect diseña la arquitectura de un producto completo — Design System, gobierno de accesibilidad y handoff a desarrollo — no solo pantallas individuales. Mauricio Gómez ha operado en ese rol en BBVA, Correos Chile y FID Seguros, liderando ecosistemas de 400+ componentes.',
  },
  {
    q: '¿Qué es TITAN v7.0?',
    a: 'TITAN v7.0 es un framework de orquestación de producto multi-IA, creado por Mauricio Gómez, que automatiza gobierno de diseño, cumplimiento WCAG y documentación de handoff a lo largo de 6 fases de producto (M0–M5). Es compatible con Claude, ChatGPT, Gemini, Cursor, Windsurf y modelos locales.',
  },
  {
    q: '¿Qué nivel de accesibilidad WCAG ha implementado?',
    a: 'Conformidad AAA por alcance (por encima del mínimo normativo AA) en Universidad de La Salle, evidenciada por validación automatizada; AA en BBVA Colombia y FID Seguros; y una auditoría de 654 incidentes bajo mandato MinTIC en FDN, con certificación oficial WCAG 2.1 AA (dic 2023, revalidada sep 2024).',
  },
  {
    q: '¿Está disponible para proyectos remotos ahora mismo?',
    a: 'Sí. Contratos remotos disponibles de inmediato, compensación en USD, enfoque async-first, con base en Bogotá, Colombia.',
  },
  {
    q: '¿En qué industrias tiene experiencia?',
    a: 'Fintech (BBVA, Redeban, IDPay, Siclo, FID Seguros), GovTech (FDN, Aportes en Línea, DNP-SINERGIA), Logística (Correos de Chile), EdTech (Universidad de La Salle), Salud (Colsanitas), Juegos de suerte y azar regulados (SuRed/Matrix Giros) y Movilidad/Parking (Parking International/Ruedaz).',
  },
  {
    q: '¿Cuánto tiempo toma un Design System construido desde cero con este proceso?',
    a: 'Depende del alcance y del backend existente. En Correos Chile, el Design System Merkén (del orden de 400+ componentes sobre M3) se construyó transversal a 3 productos — Portal Empresa, Sucursal Virtual y App — y aceleró el handoff a desarrollo al eliminar la ambigüedad de spec.',
  },
  {
    q: '¿Trabaja con equipos que usan Angular además de React?',
    a: 'Sí. En Universidad de La Salle el sistema de accesibilidad (objetivo AAA por alcance) se construyó sobre Angular Material; en la mayoría de casos fintech (BBVA, Correos Chile, FID Seguros) trabajó sobre React con MUI.',
  },
  {
    q: '¿Cómo mide el impacto real de un Design System, más allá del número de componentes?',
    a: 'Con métricas de negocio y de gobierno, no solo de entrega: en BBVA, 5/5 de calidad de comunicación (unánime, 3 Product Owners) y 100% de cumplimiento de tiempos; en Correos Chile, un Design System transversal a 3 productos; en FID Seguros, un modelo de handoff D↔D (~1.000 filas de gobierno) sobre lineamientos Carbon + Material.',
  },
]

// ── Stack ────────────────────────────────────────────────────────────────────
// Las 6 categorías reales de v1 (#stack-heading). Cada `item` es una herramienta o
// método real — NO se le asigna un "nivel de dominio" (eso era dato fabricado en v2).
// El radar grafica `appliedIn.length`: en cuántos casos reales (src/content/cases/**)
// se aplicó esa categoría — un entero verificable, no un porcentaje inventado.
export type StackIconKind = 'design' | 'a11y' | 'ai' | 'strategy' | 'devops' | 'analytics'

export interface StackCategory {
  id: string
  icon: StackIconKind
  label: string
  items: string[]
  /** slugs de casos (client | work-test | meta) donde se evidencia esta categoría */
  appliedIn: string[]
}

export const STACK_CATEGORIES: StackCategory[] = [
  {
    id: 'design-systems',
    icon: 'design',
    label: 'Design & Systems',
    items: [
      'Figma (Variables / Tokens)', 'Storybook', 'Material Design 3', 'React / MUI',
      'Angular Material', 'Atomic Design', 'Design Tokens', 'Token Pipelines',
      'Component Architecture', 'Carbon DS', 'Flutter', 'Figma Dev Mode',
    ],
    appliedIn: ['correos-chile', 'bbva', 'lasalle', 'fid-seguros', 'parking-ruedaz', 'solidaria', 'bcs', 'excalibur'],
  },
  {
    id: 'accessibility',
    icon: 'a11y',
    label: 'Accessibility',
    items: [
      'WCAG 2.2 AA/AAA', 'WCAG 2.1', 'Section 508', 'IAAP', 'ARIA', 'axe DevTools',
      'Lighthouse', 'MinTIC / NTC 5854', 'EN 301 549', 'Web Vitals',
      'Screen Reader Testing', 'Keyboard Navigation',
    ],
    appliedIn: ['fdn', 'lasalle', 'bcs', 'fleetcontrol', 'solidaria', 'excalibur', 'parking-ruedaz'],
  },
  {
    id: 'ai-automation',
    icon: 'ai',
    label: 'AI & Automation',
    items: [
      'TITAN v7.0 (autor)', 'Prompt Engineering', 'Claude API', 'Gemini Gems', 'n8n',
      'AI Orchestration', 'Generative UI', 'Cursor', 'Firebase Studio', 'RAG Systems',
    ],
    appliedIn: ['bbva', 'fleetcontrol', 'codesa', 'excalibur'],
  },
  {
    id: 'ux-cx',
    icon: 'strategy',
    label: 'UX/CX Methods',
    items: [
      'Service Blueprint', 'Customer Journey', 'User Research', 'Usability Testing',
      'JTBD', 'Continuous Discovery', 'A/B Testing', 'Information Architecture',
      'HCD', 'Design Sprint', 'Double Diamond', 'Heuristic Evaluation',
    ],
    appliedIn: [
      'correos-chile', 'bbva', 'codesa', 'solidaria', 'parking-ruedaz', 'siclo-idpay',
      'fid-seguros', 'fleetcontrol', 'bcs', 'fdn', 'sured', 'excalibur',
    ],
  },
  {
    id: 'designops',
    icon: 'devops',
    label: 'DesignOps & Process',
    items: [
      'DesignOps', 'BPM', 'DDD', 'SAFe', 'Agile / Scrum', 'Developer Handoff',
      'QA Visual', 'SDLC', 'PLG', 'Craft Excellence', 'Systems Thinking',
    ],
    appliedIn: [
      'correos-chile', 'bbva', 'fid-seguros', 'solidaria', 'siclo-idpay', 'sured',
      'parking-ruedaz', 'excalibur', 'bcs', 'fdn',
    ],
  },
  {
    id: 'analytics-tools',
    icon: 'analytics',
    label: 'Analytics & Tools',
    items: [
      'Amplitude', 'PostHog', 'GA4', 'Hotjar', 'SQL', 'Jira', 'Confluence', 'Notion',
      'Playwright', 'Docker', 'Git', 'FigJam',
    ],
    appliedIn: ['codesa', 'solidaria', 'excalibur', 'bcs', 'fleetcontrol', 'sured', 'fid-seguros', 'parking-ruedaz'],
  },
]

// ── Flagship — Correos Chile ─────────────────────────────────────────────────
// Mismo caso que src/content/cases/clients/correos-chile.ts — reconciliado C9
// (250 envíos no 297, sin "12→6"/"10 devs"/">95%", DS transversal a 3 productos).
export const FLAGSHIP = {
  badge: '★ Correos Chile · B2B · Logística',
  title: 'Portal Empresas B2B — Ecosistema completo',
  summary:
    'Antes de abrir Figma: 250 envíos reales estudiados y el manual de marca absorbido. El resultado no fue una pantalla — fue el Design System Merkén, transversal a 3 productos.',
  metrics: [
    { value: '3', label: 'productos con un solo DS (Portal Empresa · Sucursal Virtual · App)' },
    { value: '400+', label: 'componentes sobre M3 (DS Merkén)' },
    { value: '11', label: 'campos del modelo de datos · 5 escenarios/flujo' },
    { value: 'MD3', label: 'tokens del Design System, fuente única' },
  ],
  phases: [
    { num: '01', title: 'Modelo de datos real', body: '250 envíos, 11 campos — analizados antes de diseñar nada.' },
    { num: '02', title: '5 escenarios por flujo', body: 'Happy path, alternativos, errores y edge cases mapeados antes de abrir Figma.' },
    { num: '03', title: 'Design System Merkén', body: 'Del orden de 400+ componentes React/MUI sobre M3, con tokens y guidelines documentados.' },
    { num: '04', title: '3 productos, un solo DS', body: 'Portal Empresa, Sucursal Virtual y App móvil — el Design System Merkén sirvió transversal a los 3.' },
  ],
  figma: [
    {
      label: 'Portal Empresas — funcionalidades',
      href: 'https://www.figma.com/design/5HUHHeTR2Lqs0CBjdcCehj/%E2%9C%85_-CorreosChile-Merken-_-Structura---Funcionalidades-_ID-PE-?node-id=2466-141829&t=6XCg7ewFo7wDu1Ir-1',
    },
    {
      label: 'Sistema de Diseño Merkén — guidelines',
      href: 'https://www.figma.com/design/9GR3CAgD6kshwsDcilqYum/CorreosChile-Merken_DS_Guidelines?node-id=49823-12141&t=NdP0PvBWbEDqLnmW-1',
    },
  ],
  caseHref: '/casos/correos-chile',
}

// ── Industrias ───────────────────────────────────────────────────────────────
// Fuente: CONTENT_COPY_STRATEGY.md §7 pregunta 5 (ya reconciliada). NO se agregan
// los nombres no verificados del grid de v1 (Fingo, Powwi, Skandia, Mentu, …).
export type IndustryIconKind =
  | 'fintech' | 'govtech' | 'logistics' | 'edtech' | 'health' | 'gaming' | 'parking'

export interface IndustryEntry {
  icon: IndustryIconKind
  label: string
  clients: string[]
}

export const INDUSTRIES: IndustryEntry[] = [
  { icon: 'fintech', label: 'Fintech', clients: ['BBVA', 'Redeban', 'IDPay', 'Siclo', 'FID Seguros'] },
  { icon: 'govtech', label: 'GovTech', clients: ['FDN', 'Aportes en Línea', 'DNP-SINERGIA'] },
  { icon: 'logistics', label: 'Logística', clients: ['Correos de Chile'] },
  { icon: 'edtech', label: 'EdTech', clients: ['Universidad de La Salle'] },
  { icon: 'health', label: 'Salud', clients: ['Colsanitas'] },
  { icon: 'gaming', label: 'Juegos regulados', clients: ['SuRed / Matrix Giros'] },
  { icon: 'parking', label: 'Movilidad / Parking', clients: ['Parking International / Ruedaz'] },
]
