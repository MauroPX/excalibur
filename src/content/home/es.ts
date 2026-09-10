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
export type StackIconKind =
  | 'design' | 'a11y' | 'ai' | 'strategy' | 'devops' | 'analytics'
  | 'delivery' | 'ddd' | 'data' | 'qa'

export interface StackCategory {
  id: string
  icon: StackIconKind
  label: string
  /** etiqueta corta para el eje del radar (evita el clipping con 10 categorías) */
  radarLabel?: string
  items: string[]
  /** slugs de casos (client | work-test | meta) donde se evidencia esta categoría */
  appliedIn: string[]
  /** ancla en /metodologia que define esta categoría (opcional) */
  methodologySlug?: string
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
  {
    id: 'devops',
    icon: 'delivery',
    label: 'DevOps & Entrega continua',
    items: [
      'CI/CD (GitHub Actions)', 'Docker', 'Vercel', 'Railway', 'Trunk-based / PRs',
      'Preview Deploys', 'Storybook CI', 'Chromatic', 'Gestión de entornos',
      'Observabilidad', 'SDLC',
    ],
    appliedIn: ['excalibur', 'solidaria', 'fleetcontrol', 'sured', 'fid-seguros', 'siclo-idpay', 'bcs'],
    methodologySlug: 'devops-entrega-continua',
  },
  {
    id: 'ddd',
    icon: 'ddd',
    label: 'Domain-Driven Design',
    items: [
      'Bounded Contexts', 'Lenguaje ubicuo', 'Context Mapping', 'Event Storming',
      'BPMN 2.0', 'Contratos OpenAPI', 'Modelo de datos ER', 'Aggregates / Entities',
      'Upstream / Downstream', 'Anti-Corruption Layer',
    ],
    appliedIn: ['fid-seguros', 'solidaria', 'siclo-idpay', 'sured', 'correos-chile', 'bbva', 'excalibur'],
    methodologySlug: 'ddd',
  },
  {
    id: 'data-driven',
    icon: 'data',
    label: 'Data-Driven Design',
    items: [
      'Hipótesis medibles', 'A/B Testing', 'Análisis de embudo', 'North Star / KPIs',
      'RICE + Confianza/Inclusión', 'Opportunity Solution Tree', 'Instrumentación de eventos',
      'Cohortes', 'Modelo de datos ER', 'Amplitude / PostHog',
    ],
    appliedIn: ['codesa', 'bbva', 'parking-ruedaz', 'solidaria', 'siclo-idpay', 'fleetcontrol', 'excalibur'],
    methodologySlug: 'data-driven-design',
  },
  {
    id: 'qa-asq',
    icon: 'qa',
    label: 'QA & ASQ',
    items: [
      'Playwright E2E', '@axe-core/playwright', 'jest-axe', 'Testing Library',
      'Regresión visual (Chromatic)', 'QA de accesibilidad manual (NVDA/JAWS)',
      'Criterios de aceptación', 'Gates de CI bloqueantes', 'Lighthouse CI', 'Cross-browser',
    ],
    appliedIn: ['excalibur', 'fdn', 'lasalle', 'bcs', 'fleetcontrol', 'solidaria'],
    methodologySlug: 'qa-asq',
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
  | 'fintech' | 'insurance' | 'gaming' | 'govtech' | 'health' | 'logistics'
  | 'parking' | 'edtech' | 'media' | 'energy' | 'corporate'

export interface IndustryEntry {
  icon: IndustryIconKind
  label: string
  clients: string[]
}

// Trayectoria completa 2013–2026 (40+ proyectos). Fuente:
// ~/Documents/Career_Dossier_Excalibur/raw_evidence/CONSOLIDACION_MAESTRA_PROYECTOS_2013_2026.md §I.1
// + CAREER OS SSOT.md §2.12–2.15 (era Dacartec 2017–2020 y Vulcan Studios 2015–2016).
// SOLO experiencia profesional real (encargos pagados) — las pruebas técnicas
// (FleetControl, BCS, Codesa, el diagnóstico autodirigido de Solidaria 2025)
// viven aparte en /pruebas-tecnicas.
export const INDUSTRIES: IndustryEntry[] = [
  {
    icon: 'fintech',
    label: 'Fintech / Banca',
    clients: ['BBVA (Colombia · Panamá)', 'Redeban Multicolor', 'SI-CLO / Finauro', 'IdPay', 'Acción Fiduciaria', 'Aportes en Línea', 'SOI Data'],
  },
  {
    icon: 'insurance',
    label: 'Seguros',
    clients: ['FID Seguros (Chile)', 'OLD Mutual', 'Aseguradora Solidaria'],
  },
  {
    icon: 'gaming',
    label: 'Juegos regulados',
    clients: ['SuRed — ONJ (Baloto / Miloto)'],
  },
  {
    icon: 'govtech',
    label: 'GovTech / Sector público',
    clients: ['FDN', 'DNP — SINERGIA', 'PROCOLOMBIA', 'EAAB (Acueducto de Bogotá)', 'MinTIC (Appsco)', 'Consejo Privado de Competitividad'],
  },
  {
    icon: 'health',
    label: 'Salud / HealthTech',
    clients: ['Colsanitas / Medisanitas (Keralty)', 'Fundación Santa Fe de Bogotá (TVS+)', 'Colegio Médico Colombiano', 'PQEB (Fund. Santo Domingo / Profamilia)'],
  },
  {
    icon: 'logistics',
    label: 'Logística y Transporte',
    clients: ['Correos de Chile', 'Servientrega', 'Latampost', 'Easyfly', 'Pinbus'],
  },
  {
    icon: 'parking',
    label: 'Movilidad / Parking',
    clients: ['Parking International', 'Ruedaz', 'Parking Inside', 'Parking Attendant'],
  },
  {
    icon: 'edtech',
    label: 'EdTech / Educación Superior',
    clients: ['Universidad de La Salle', 'Universidad de Antioquia (UdeA)', 'Pontificia Universidad Javeriana', 'ADL Digital Labs (Mentu)'],
  },
  {
    icon: 'media',
    label: 'Media / Editorial',
    clients: ['Casa Editorial El Tiempo (ElTiempo.com · Revista Aló · ADN · Canal ET)'],
  },
  {
    icon: 'energy',
    label: 'Energía / Enterprise',
    clients: ['Ecopetrol'],
  },
  {
    icon: 'corporate',
    label: 'Servicios Corporativos / Legal',
    clients: ['López & Asociados', 'Vulcan Studios', 'Daater', 'Barsmarts', 'Conadic', 'El Libertador', 'Fundación Social'],
  },
]

// ── Portada: contenido movido de page.tsx (antes quemado en ES) ──────────────
import type { NavSystemProps } from '@/components/organisms/NavSystem'
import type { TitanModule } from '@/components/organisms/TitanSection'

export interface HeroMetric { value: string; label: string }

export const HERO_METRICS: HeroMetric[] = [
  { value: '+10', label: 'años de experiencia' },
  { value: '4', label: 'países' },
  { value: '20+', label: 'proyectos en producción' },
  { value: '654', label: 'fallas WCAG eliminadas' },
]

export const SYMPTOM_CARDS: NavSystemProps['symptomCards'] = [
  { title: 'Mi sistema es inaccesible', description: 'Auditoría WCAG 2.2 y eliminación de fallas de accesibilidad con evidencia técnica verificable.', tag: 'cliente', targetSlug: 'fdn' },
  { title: 'El TTM es demasiado largo', description: 'Diagnóstico del dato real y escenarios antes de diseñar: el Design System Merkén de Correos Chile aceleró el handoff a desarrollo.', tag: 'cliente', targetSlug: 'correos-chile' },
  { title: 'No tenemos Design System', description: 'Design Systems desde cero con gobernanza, tokens desde una fuente y verificación automatizada.', tag: 'cliente', targetSlug: 'fid-seguros' },
  { title: 'Nuestra plataforma es legacy', description: 'Migración sin gobierno explícito se fragmenta. FID Seguros: framework D↔D antes de mover la primera pantalla.', tag: 'cliente', targetSlug: 'fid-seguros' },
]

export const ROLE_CARDS: NavSystemProps['roleCards'] = [
  { title: 'Soy CTO / Founder', description: 'Escalabilidad técnica end-to-end. Correos Chile: un Design System transversal a 3 productos (Portal Empresa, Sucursal Virtual, App).', tag: 'cliente', targetSlug: 'correos-chile' },
  { title: 'Soy reclutador', description: '10 años, 4 países, evidencia verificable por caso: métricas, decisiones y uso de IA declarado.', tag: 'reclutador', targetSlug: 'bbva' },
  { title: 'Soy PM / PO', description: 'TITAN v7.0: metodología de M0 a M5 sin pérdida de contexto entre etapas.', tag: 'comunidad', targetSlug: 'bbva' },
  { title: 'Soy líder de ingeniería', description: 'Auditoría de 654 incidentes + Core Web Vitals en FDN. LCP de 25.2s a un objetivo <2.5s.', tag: 'cliente', targetSlug: 'fdn' },
]

export const TITAN_MODULES: TitanModule[] = [
  { hubName: 'Foundation', hubTitle: 'M0 — Visión y estructura', description: 'Diagnóstico, ADRs y gobernanza del proyecto. Sin M0 no hay base sólida.', momentum: 'M0', commandsCount: 12 },
  { hubName: 'Strategy', hubTitle: 'M1 — Backlog y roadmap', description: 'Customer journeys, backlog priorizado y mapa de riesgos.', momentum: 'M1', commandsCount: 10 },
  { hubName: 'Architecture', hubTitle: 'M2 — Spec y contratos', description: 'SPEC_DOCUMENT, DESIGN_TOKENS y contratos de API. Sin M2 no hay Forge.', momentum: 'M2', commandsCount: 11 },
  { hubName: 'Execution', hubTitle: 'M3 — BFL + CI/CD', description: 'Sprints BFL con Blueprint→Forge→Lock: cada componente pasa lint, typecheck, tests, axe, build y certificado antes del LOCK.', momentum: 'M3', commandsCount: 26 },
  { hubName: 'Intelligence', hubTitle: 'M4 — RAG y backend', description: 'Strapi v5 + pgvector + Claude API. La IA conoce cada proyecto del portafolio.', momentum: 'M4', commandsCount: 8 },
  { hubName: 'Operations', hubTitle: 'M5 — Monitoreo y mejora', description: 'Observabilidad, alertas y ciclos de mejora continua.', momentum: 'M5', commandsCount: 6 },
]

/** Métrica destacada por caso en la portada (label depende del idioma). */
export const CASE_METRICS: Record<string, HeroMetric> = {
  'correos-chile': { value: '400+', label: 'componentes sobre M3 (DS Merkén)' },
  bbva: { value: '5/5', label: 'de 3 Product Owners' },
  fdn: { value: '-90%', label: 'objetivo LCP' },
  lasalle: { value: 'AAA', label: 'por alcance (vs. AA normativo)' },
  'fid-seguros': { value: '~1.000', label: 'filas de gobierno D↔D' },
  sured: { value: '2×/día', label: 'conciliación auditable' },
  'parking-ruedaz': { value: '+90%', label: 'uso recurrente' },
  'siclo-idpay': { value: '10', label: 'tablas ER + OpenAPI' },
}
