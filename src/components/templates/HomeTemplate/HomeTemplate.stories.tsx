import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { HomeTemplate } from './HomeTemplate'
import { CLIENT_CASES } from '@/content/cases'
import { STACK_CATEGORIES, INDUSTRIES, FAQ_ITEMS, FLAGSHIP } from '@/content/home'

// Datos reales — importados del contenido canónico (src/content/**), sin duplicar.

const heroData = {
  headline: 'Construyo sistemas que el equipo opera sin mí',
  subheadline: 'Staff Product Architect — contratos remotos disponibles, compensación en USD.',
  ctaLabel: 'Ver casos',
  ctaHref: '#casos',
  secondaryCtaLabel: 'Metodología',
  secondaryCtaHref: '#titan',
  metrics: [
    { value: '+10', label: 'años de experiencia', trend: 'neutral' as const },
    { value: '4', label: 'países', trend: 'neutral' as const },
    { value: '654', label: 'incidentes WCAG auditados (FDN)', trend: 'neutral' as const },
  ],
}

const symptomCards = [
  { title: 'Mi sistema es inaccesible', description: 'Auditoría WCAG 2.2 y eliminación de fallas con evidencia técnica verificable.', tag: 'cliente' as const, targetSlug: 'fdn' },
  { title: 'El ciclo de entrega es muy largo', description: 'Diagnóstico del dato real antes de diseñar: Correos Chile pasó de 12 a 6 meses.', tag: 'cliente' as const, targetSlug: 'correos-chile' },
  { title: 'No tenemos Design System', description: 'DS desde cero con gobernanza, tokens desde una fuente y verificación automatizada.', tag: 'cliente' as const, targetSlug: 'fid-seguros' },
  { title: 'Nuestra plataforma es legacy', description: 'Migración con framework de gobierno D↔D antes de mover la primera pantalla (FID Seguros).', tag: 'cliente' as const, targetSlug: 'fid-seguros' },
]

const roleCards = [
  { title: 'Soy CTO / Founder', description: 'Correos Chile: ciclo 12→6 meses, 10 devs autónomos desde el sprint 1.', tag: 'cliente' as const, targetSlug: 'correos-chile' },
  { title: 'Soy reclutador', description: '10 años, 4 países, evidencia verificable por caso: métricas, decisiones y uso de IA declarado.', tag: 'reclutador' as const, targetSlug: 'bbva' },
  { title: 'Soy PM / PO', description: 'TITAN v7.0: metodología M0-M5 sin pérdida de contexto entre etapas.', tag: 'comunidad' as const, targetSlug: 'bbva' },
  { title: 'Soy líder de ingeniería', description: 'Auditoría de 654 incidentes + Core Web Vitals en FDN. LCP de 25.2s a un objetivo <2.5s.', tag: 'cliente' as const, targetSlug: 'fdn' },
]

const CASE_META: Record<string, { symptomTags: string[]; roleTags: string[]; metric: { value: string; label: string } }> = {
  'correos-chile': { symptomTags: ['team-scaling', 'design-system'], roleTags: ['staff-architect', 'designops'], metric: { value: '12→6', label: 'meses de ciclo' } },
  bbva: { symptomTags: ['design-system', 'team-scaling'], roleTags: ['staff-architect', 'product-manager'], metric: { value: '5/5', label: 'de 3 Product Owners' } },
  fdn: { symptomTags: ['legacy', 'a11y', 'performance'], roleTags: ['staff-architect', 'tech-lead'], metric: { value: '-90%', label: 'objetivo LCP' } },
  lasalle: { symptomTags: ['a11y', 'design-system'], roleTags: ['staff-architect', 'designops'], metric: { value: 'AAA', label: 'WCAG 2.2' } },
  'fid-seguros': { symptomTags: ['legacy', 'design-system'], roleTags: ['staff-architect', 'designops'], metric: { value: '1.002', label: 'filas de gobierno' } },
  sured: { symptomTags: ['team-scaling'], roleTags: ['tech-lead', 'staff-architect'], metric: { value: '2×/día', label: 'conciliación auditable' } },
  'parking-ruedaz': { symptomTags: ['conversion', 'design-system'], roleTags: ['ux-designer', 'staff-architect'], metric: { value: '+90%', label: 'uso recurrente' } },
  'siclo-idpay': { symptomTags: ['conversion'], roleTags: ['product-manager', 'ux-designer'], metric: { value: '10', label: 'tablas ER + OpenAPI' } },
}

const caseProjects = Object.keys(CASE_META).map((slug) => {
  const c = CLIENT_CASES[slug]
  const m = CASE_META[slug]
  return {
    slug,
    title: c.title,
    description: c.description,
    tags: c.tags,
    symptomTags: m.symptomTags,
    roleTags: m.roleTags,
    audienceTags: ['cliente'],
    metric: m.metric,
  }
})

const titanModules = [
  { hubName: 'Foundation', hubTitle: 'M0 — Visión y estructura', description: 'Diagnóstico, ADRs y gobernanza del proyecto.', momentum: 'M0' as const, commandsCount: 12 },
  { hubName: 'Strategy', hubTitle: 'M1 — Backlog y roadmap', description: 'Customer journeys, backlog priorizado y mapa de riesgos.', momentum: 'M1' as const, commandsCount: 10 },
  { hubName: 'Architecture', hubTitle: 'M2 — Spec y contratos', description: 'SPEC_DOCUMENT, DESIGN_TOKENS y contratos de API.', momentum: 'M2' as const, commandsCount: 11 },
  { hubName: 'Execution', hubTitle: 'M3 — BFL + CI/CD', description: 'Sprints BFL con Blueprint→Forge→Lock.', momentum: 'M3' as const, commandsCount: 26 },
  { hubName: 'Intelligence', hubTitle: 'M4 — RAG y backend', description: 'Strapi v5 + pgvector + Claude API.', momentum: 'M4' as const, commandsCount: 8 },
  { hubName: 'Operations', hubTitle: 'M5 — Monitoreo y mejora', description: 'Observabilidad, alertas y ciclos de mejora continua.', momentum: 'M5' as const, commandsCount: 6 },
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
    flagship: FLAGSHIP,
    caseProjects,
    titanModules,
    titanVersion: 'v7.0',
    stackCategories: STACK_CATEGORIES,
    industries: INDUSTRIES,
    faqItems: FAQ_ITEMS,
    contactProps: { defaultChannel: 'linkedin' },
  },
}

export default meta
type Story = StoryObj<typeof HomeTemplate>

export const HappyPath: Story = {
  name: 'HappyPath — página completa (9 secciones)',
}

export const SinProyectosDestacados: Story = {
  name: 'NavSystem sin featuredProjects',
  args: { featuredProjects: undefined },
}
