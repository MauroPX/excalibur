import { getTranslations } from 'next-intl/server'
import { HomeTemplate } from '@/components/templates/HomeTemplate'
import type { NavSystemProps } from '@/components/organisms/NavSystem'
import type { CasesSectionProject } from '@/components/organisms/CasesSection'
import type { TitanModule } from '@/components/organisms/TitanSection'
import type { StackSkill } from '@/components/organisms/StackSection'

const symptomCards: NavSystemProps['symptomCards'] = [
  { title: 'Mi sistema es inaccesible', description: 'Auditoría WCAG 2.2 y eliminación de fallas de accesibilidad con evidencia técnica verificable.', tag: 'cliente', targetSlug: 'fdn' },
  { title: 'El TTM es demasiado largo', description: 'Frameworks de entrega que redujeron el time-to-market hasta un 75% en proyectos bancarios.', tag: 'cliente', targetSlug: 'bbva' },
  { title: 'No tenemos Design System', description: 'Construcción de DS desde cero con gobernanza, tests y Chromatic en producción.', tag: 'cliente', targetSlug: 'solidaria' },
  { title: 'Nuestra plataforma es legacy', description: 'Migración brownfield sin interrupciones. LCP de 25s a 2.5s en producción real.', tag: 'cliente', targetSlug: 'fdn' },
]

const roleCards: NavSystemProps['roleCards'] = [
  { title: 'Soy CTO / Founder', description: 'Escalabilidad técnica end-to-end. BBVA: -75% TTM. Correos Chile: TTM 12→6 meses.', tag: 'cliente', targetSlug: 'bbva' },
  { title: 'Soy reclutador', description: '212 tests · 0 violations · DS en prod · 4 países · 10 años. Todo verificable.', tag: 'reclutador', targetSlug: 'solidaria' },
  { title: 'Soy PM / PO', description: 'TITAN v7.0: metodología de M0 a M5 sin pérdida de contexto entre etapas.', tag: 'comunidad', targetSlug: 'bbva' },
  { title: 'Soy líder de ingeniería', description: 'Next.js 15 + Strapi v5 + pgvector. LCP -90% con evidencia técnica.', tag: 'cliente', targetSlug: 'fdn' },
]

const caseProjects: CasesSectionProject[] = [
  {
    slug: 'fdn',
    title: 'FDN — LCP -90% y WCAG AAA',
    description: 'Migración del portal institucional de Drupal 7 a Next.js 14. LCP de 25.2s a 2.5s. 654 fallas WCAG eliminadas. Certificado WCAG AAA 2024.',
    tags: ['GovTech', 'Next.js', 'WCAG', 'A11Y', 'Performance'],
    symptomTags: ['legacy', 'a11y', 'performance'],
    roleTags: ['staff-architect', 'tech-lead', 'design-engineer'],
    audienceTags: ['cliente'],
    metric: { value: '-90%', label: 'LCP' },
  },
  {
    slug: 'solidaria',
    title: 'Solidaria — Design System 0 violations',
    description: 'Design System desde cero con gobernanza real. 212 tests, 0 axe violations, Storybook en Chromatic con baseline establecido.',
    tags: ['Design System', 'WCAG', 'Storybook', 'Insurtech'],
    symptomTags: ['design-system', 'a11y'],
    roleTags: ['staff-architect', 'designops'],
    audienceTags: ['cliente', 'reclutador'],
    metric: { value: '212', label: 'tests · 0 violations' },
  },
  {
    slug: 'bbva',
    title: 'BBVA — Time-to-market -75%',
    description: 'Arquitectura de producto para BBVA Colombia & Panamá. Framework GEMAS + Proyecto Brickell. Digitalización 100% del proceso de contratación Pyme.',
    tags: ['Banca', 'Fintech', 'SAFe', 'Design System'],
    symptomTags: ['legacy', 'team-scaling', 'design-system'],
    roleTags: ['staff-architect', 'product-manager'],
    audienceTags: ['cliente'],
    metric: { value: '-75%', label: 'time-to-market' },
  },
]

const titanModules: TitanModule[] = [
  { hubName: 'Foundation', hubTitle: 'M0 — Visión y estructura', description: 'Diagnóstico, ADRs y gobernanza del proyecto. Sin M0 no hay base sólida.', momentum: 'M0', commandsCount: 12 },
  { hubName: 'Strategy', hubTitle: 'M1 — Backlog y roadmap', description: 'Customer journeys, backlog priorizado y mapa de riesgos.', momentum: 'M1', commandsCount: 10 },
  { hubName: 'Architecture', hubTitle: 'M2 — Spec y contratos', description: 'SPEC_DOCUMENT, DESIGN_TOKENS y contratos de API. Sin M2 no hay Forge.', momentum: 'M2', commandsCount: 11 },
  { hubName: 'Execution', hubTitle: 'M3 — BFL + CI/CD', description: 'Sprints BFL con Blueprint→Forge→Lock. 26/26 componentes LOCKED en este portafolio.', momentum: 'M3', commandsCount: 26 },
  { hubName: 'Intelligence', hubTitle: 'M4 — RAG y backend', description: 'Strapi v5 + pgvector + Claude API. La IA conoce cada proyecto del portafolio.', momentum: 'M4', commandsCount: 8 },
  { hubName: 'Operations', hubTitle: 'M5 — Monitoreo y mejora', description: 'Observabilidad, alertas y ciclos de mejora continua.', momentum: 'M5', commandsCount: 6 },
]

const skills: StackSkill[] = [
  { name: 'React / Next.js', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 88, category: 'frontend' },
  { name: 'MUI / Design Systems', level: 85, category: 'design' },
  { name: 'Node.js / Express', level: 75, category: 'backend' },
  { name: 'PostgreSQL', level: 72, category: 'backend' },
  { name: 'Product Strategy', level: 95, category: 'process' },
  { name: 'Claude / LLMs', level: 80, category: 'ai' },
  { name: 'Figma', level: 78, category: 'design' },
]

export default async function HomePage() {
  const t = await getTranslations('hero')

  return (
    <HomeTemplate
      heroData={{
        headline: t('title'),
        subheadline: t('subtitle'),
        ctaLabel: t('cta'),
        ctaHref: '#casos',
        secondaryCtaLabel: t('ctaSecondary'),
        secondaryCtaHref: '#titan',
        metrics: [
          { value: '+10', label: 'años de experiencia' },
          { value: '4', label: 'países' },
          { value: '20+', label: 'proyectos en producción' },
          { value: '654', label: 'fallas WCAG eliminadas' },
        ],
      }}
      symptomCards={symptomCards}
      roleCards={roleCards}
      caseProjects={caseProjects}
      titanModules={titanModules}
      titanVersion="v7.0"
      skills={skills}
    />
  )
}
