import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { HomeTemplate } from './HomeTemplate'

// Datos reales del portafolio — mismos fixtures que los .stories.tsx de cada
// organismo (Hero, NavSystem, CasesSection, TitanSection, StackSection,
// ContactSection). Mantener en sync si esos fixtures cambian.

const heroData = {
  headline: 'Construyo sistemas que el equipo opera sin mí',
  subheadline: 'Staff Product Architect disponible para proyectos Q3 2026.',
  ctaLabel: 'Ver proyectos',
  ctaHref: '#casos',
  secondaryCtaLabel: 'Descargar CV',
  secondaryCtaHref: '/cv.pdf',
  metrics: [
    { value: '+3.2M', label: 'ARR generado', trend: 'positive' as const },
    { value: '7', label: 'productos lanzados', trend: 'neutral' as const },
    { value: '96%', label: 'retención', trend: 'positive' as const },
  ],
}

const symptomCards = [
  { title: 'Mi sistema es inaccesible', description: 'Auditoría WCAG 2.2 y eliminación de fallas con evidencia técnica verificable.', tag: 'cliente' as const, targetSlug: 'fdn' },
  { title: 'El TTM es demasiado largo', description: 'Frameworks de entrega que redujeron el time-to-market hasta un 75%.', tag: 'cliente' as const, targetSlug: 'bbva' },
  { title: 'No tenemos Design System', description: 'DS desde cero con gobernanza, tests y Chromatic en producción.', tag: 'cliente' as const, targetSlug: 'solidaria' },
  { title: 'Nuestra plataforma es legacy', description: 'Migración brownfield sin interrupciones. LCP de 25s a 2.5s en producción real.', tag: 'cliente' as const, targetSlug: 'fdn' },
]

const roleCards = [
  { title: 'Soy CTO / Founder', description: 'BBVA: -75% TTM. Correos Chile: TTM 12→6 meses.', tag: 'cliente' as const, targetSlug: 'bbva' },
  { title: 'Soy reclutador', description: '212 tests · 0 violations · DS en prod · 4 países · 10 años.', tag: 'reclutador' as const, targetSlug: 'solidaria' },
  { title: 'Soy PM / PO', description: 'TITAN v7.0: metodología M0-M5 sin pérdida de contexto.', tag: 'comunidad' as const, targetSlug: 'bbva' },
  { title: 'Soy líder de ingeniería', description: 'Next.js 15 + Strapi v5 + pgvector. LCP -90% con evidencia técnica.', tag: 'cliente' as const, targetSlug: 'fdn' },
]

const caseProjects = [
  {
    slug: 'fdn',
    title: 'FDN — LCP -90% y WCAG AAA',
    description: 'Migración Drupal 7 → Next.js 14. LCP 25.2s → 2.5s. 654 fallas WCAG eliminadas. Certificado WCAG AAA 2024.',
    tags: ['GovTech', 'Next.js', 'WCAG', 'A11Y', 'Performance'],
    symptomTags: ['legacy', 'a11y', 'performance'],
    roleTags: ['staff-architect', 'tech-lead'],
    audienceTags: ['cliente'],
    metric: { value: '-90%', label: 'LCP' },
  },
  {
    slug: 'solidaria',
    title: 'Solidaria — Design System 0 violations',
    description: 'Design System desde cero con 212 tests, 0 axe violations, Storybook en Chromatic.',
    tags: ['Design System', 'WCAG', 'Storybook', 'Insurtech'],
    symptomTags: ['design-system', 'a11y'],
    roleTags: ['staff-architect', 'designops'],
    audienceTags: ['cliente', 'reclutador'],
    metric: { value: '212', label: 'tests · 0 violations' },
  },
  {
    slug: 'bbva',
    title: 'BBVA — Time-to-market -75%',
    description: 'Framework GEMAS + Proyecto Brickell. Digitalización 100% contratación Pyme en Colombia & Panamá.',
    tags: ['Banca', 'Fintech', 'SAFe', 'Design System'],
    symptomTags: ['legacy', 'team-scaling', 'design-system'],
    roleTags: ['staff-architect', 'product-manager'],
    audienceTags: ['cliente'],
    metric: { value: '-75%', label: 'time-to-market' },
  },
]

const titanModules = [
  { hubName: 'Foundation', hubTitle: 'M0 — Visión y estructura', description: 'Diagnóstico, ADRs y gobernanza del proyecto. Sin M0 no hay base sólida.', momentum: 'M0' as const, commandsCount: 12 },
  { hubName: 'Strategy', hubTitle: 'M1 — Backlog y roadmap', description: 'Customer journeys, backlog priorizado y mapa de riesgos.', momentum: 'M1' as const, commandsCount: 10 },
  { hubName: 'Architecture', hubTitle: 'M2 — Spec y contratos', description: 'SPEC_DOCUMENT, DESIGN_TOKENS y contratos de API. Sin M2 no hay Forge.', momentum: 'M2' as const, commandsCount: 11 },
  { hubName: 'Execution', hubTitle: 'M3 — BFL + CI/CD', description: 'Sprints BFL con Blueprint→Forge→Lock. 26/26 componentes LOCKED.', momentum: 'M3' as const, commandsCount: 26 },
  { hubName: 'Intelligence', hubTitle: 'M4 — RAG y backend', description: 'Strapi v5 + pgvector + Claude API. La IA conoce cada proyecto.', momentum: 'M4' as const, commandsCount: 8 },
  { hubName: 'Operations', hubTitle: 'M5 — Monitoreo y mejora', description: 'Observabilidad, alertas y ciclos de mejora continua.', momentum: 'M5' as const, commandsCount: 6 },
]

const skills = [
  { name: 'React / Next.js', level: 90, category: 'frontend' as const },
  { name: 'TypeScript', level: 88, category: 'frontend' as const },
  { name: 'MUI / Design Systems', level: 85, category: 'design' as const },
  { name: 'Node.js / Express', level: 75, category: 'backend' as const },
  { name: 'PostgreSQL + pgvector', level: 72, category: 'backend' as const },
  { name: 'Product Strategy', level: 95, category: 'process' as const },
  { name: 'Claude / LLMs', level: 80, category: 'ai' as const },
  { name: 'Figma', level: 78, category: 'design' as const },
]

const meta: Meta<typeof HomeTemplate> = {
  title: 'Templates/HomeTemplate',
  component: HomeTemplate,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'dark' },
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: true }] } },
    titan: { spec_id: 'EX-v2-TMPL-001', atomic_level: 'template' },
  },
  tags: ['autodocs'],
  args: {
    heroData,
    symptomCards,
    roleCards,
    caseProjects,
    titanModules,
    titanVersion: 'v7.0',
    skills,
    contactProps: { defaultChannel: 'linkedin' },
  },
}

export default meta
type Story = StoryObj<typeof HomeTemplate>

export const HappyPath: Story = {
  name: 'HappyPath — página completa',
}

export const SinProyectosDestacados: Story = {
  name: 'NavSystem sin featuredProjects',
  args: { featuredProjects: undefined },
}
