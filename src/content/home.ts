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
    a: 'WCAG 2.2 AAA (el nivel más alto) en Universidad de La Salle; WCAG 2.2 AA en BBVA Colombia y FID Seguros; y una auditoría de 654 incidentes bajo mandato MinTIC en FDN.',
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
    a: 'En el caso de Correos Chile, un Design System de 400+ componentes en MUI React tomó parte del ciclo de 6 meses que reemplazó un plan original de 12 — el tiempo exacto depende del alcance y del backend existente.',
  },
  {
    q: '¿Trabaja con equipos que usan Angular además de React?',
    a: 'Sí. En Universidad de La Salle implementó el sistema de accesibilidad AAA sobre Angular Material; en la mayoría de casos fintech (BBVA, Correos Chile, FID Seguros) trabajó sobre React con MUI.',
  },
  {
    q: '¿Cómo mide el impacto real de un Design System, más allá del número de componentes?',
    a: 'Con métricas de negocio, no solo de entrega: en BBVA, 5/5 de calificación de Product Owners y 100% de entregas a tiempo; en Correos Chile, más del 95% de fidelidad entre diseño y desarrollo; en FID Seguros, un Framework de Integración D↔D de 1.002 filas y 46+ entregables que dejó al equipo de desarrollo autónomo desde el sprint 1.',
  },
]

// ── Stack ────────────────────────────────────────────────────────────────────
// Las 6 categorías reales de v1 (#stack-heading). Cada `item` es una herramienta o
// método real — NO se le asigna un "nivel de dominio" (eso era dato fabricado en v2).
// El radar grafica `appliedIn.length`: en cuántos casos reales (src/content/cases/**)
// se aplicó esa categoría — un entero verificable, no un porcentaje inventado.
export interface StackCategory {
  id: string
  icon: string
  label: string
  items: string[]
  /** slugs de casos (client | work-test | meta) donde se evidencia esta categoría */
  appliedIn: string[]
}

export const STACK_CATEGORIES: StackCategory[] = [
  {
    id: 'design-systems',
    icon: '🎨',
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
    icon: '♿',
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
    icon: '🤖',
    label: 'AI & Automation',
    items: [
      'TITAN v7.0 (autor)', 'Prompt Engineering', 'Claude API', 'Gemini Gems', 'n8n',
      'AI Orchestration', 'Generative UI', 'Cursor', 'Firebase Studio', 'RAG Systems',
    ],
    appliedIn: ['bbva', 'fleetcontrol', 'codesa', 'excalibur'],
  },
  {
    id: 'ux-cx',
    icon: '🧠',
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
    icon: '⚙️',
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
    icon: '📊',
    label: 'Analytics & Tools',
    items: [
      'Amplitude', 'PostHog', 'GA4', 'Hotjar', 'SQL', 'Jira', 'Confluence', 'Notion',
      'Playwright', 'Docker', 'Git', 'FigJam',
    ],
    appliedIn: ['codesa', 'solidaria', 'excalibur', 'bcs', 'fleetcontrol', 'sured', 'fid-seguros', 'parking-ruedaz'],
  },
]

// ── Flagship — Correos Chile ─────────────────────────────────────────────────
// Mismo caso que src/content/cases/clients/correos-chile.ts — cero cifras nuevas.
export const FLAGSHIP = {
  badge: '★ Correos Chile · B2B · Logística',
  title: 'Portal Empresas B2B — Ecosistema completo',
  summary:
    'Antes de abrir Figma: 297 envíos reales estudiados y el manual de marca absorbido. El resultado no fue una pantalla — fue el sistema que redujo el ciclo de entrega a la mitad.',
  metrics: [
    { value: '12 → 6', label: 'meses de ciclo (plan original: 12)' },
    { value: '+400', label: 'componentes React/MUI (DS Merkén)' },
    { value: '10', label: 'desarrolladores autónomos desde el sprint 1' },
    { value: '>95%', label: 'fidelidad UI–Desarrollo' },
  ],
  phases: [
    { num: '01', title: 'Modelo de datos real', body: '297 envíos, 11 campos, 13 regiones — analizados antes de diseñar nada.' },
    { num: '02', title: '5 escenarios por flujo', body: 'Happy path, alternativos, errores y edge cases mapeados antes de abrir Figma.' },
    { num: '03', title: 'Design System Merkén', body: '+400 componentes React/MUI con tokens MD3, verificados y documentados.' },
    { num: '04', title: '3 productos entregados', body: 'Portal B2B, Sucursal Virtual y App Móvil — más 2 ciclos extra de mejora en el mismo presupuesto.' },
  ],
  figma: [
    {
      label: 'Estructura UI',
      href: 'https://www.figma.com/design/5HUHHeTR2Lqs0CBjdcCehj/%E2%9C%85_%5BM%5D_%5BStructura%5D-%5BFuncionalidades%5D_ID%5BPE%5D?node-id=8072-405168',
    },
    {
      label: 'Validación de Workflows',
      href: 'https://www.figma.com/proto/5HUHHeTR2Lqs0CBjdcCehj/%E2%9C%85_%5BM%5D_%5BStructura%5D-%5BFuncionalidades%5D_ID%5BPE%5D?page-id=8072%3A405168&node-id=9410-536709',
    },
  ],
  caseHref: '/casos/correos-chile',
}

// ── Industrias ───────────────────────────────────────────────────────────────
// Fuente: CONTENT_COPY_STRATEGY.md §7 pregunta 5 (ya reconciliada). NO se agregan
// los nombres no verificados del grid de v1 (Fingo, Powwi, Skandia, Mentu, …).
export interface IndustryEntry {
  icon: string
  label: string
  clients: string[]
}

export const INDUSTRIES: IndustryEntry[] = [
  { icon: '🏦', label: 'Fintech', clients: ['BBVA', 'Redeban', 'IDPay', 'Siclo', 'FID Seguros'] },
  { icon: '🏛️', label: 'GovTech', clients: ['FDN', 'Aportes en Línea', 'DNP-SINERGIA'] },
  { icon: '📦', label: 'Logística', clients: ['Correos de Chile'] },
  { icon: '🎓', label: 'EdTech', clients: ['Universidad de La Salle'] },
  { icon: '🏥', label: 'Salud', clients: ['Colsanitas'] },
  { icon: '🎰', label: 'Juegos regulados', clients: ['SuRed / Matrix Giros'] },
  { icon: '🅿️', label: 'Movilidad / Parking', clients: ['Parking International / Ruedaz'] },
]
