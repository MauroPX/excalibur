import { HomeTemplate } from '@/components/templates/HomeTemplate'
import type { HeroProps } from '@/components/organisms/Hero'
import type { NavSystemProps } from '@/components/organisms/NavSystem'
import type { CasesSectionProject } from '@/components/organisms/CasesSection'
import type { TitanModule } from '@/components/organisms/TitanSection'
import type { StackSkill } from '@/components/organisms/StackSection'

const heroData: HeroProps = {
  headline: 'Staff Product Architect',
  subheadline: 'Diseño, construyo y escalo productos digitales con equipos de alto rendimiento.',
  ctaLabel: 'Ver casos de estudio',
  ctaHref: '#casos',
  secondaryCtaLabel: 'Hablar con TITAN',
  secondaryCtaHref: '#titan',
  metrics: [
    { value: '+$12M', label: 'ARR generado' },
    { value: '8', label: 'años de experiencia' },
    { value: '4', label: 'países' },
    { value: '40+', label: 'equipos liderados' },
  ],
}

const symptomCards: NavSystemProps['symptomCards'] = [
  { title: 'Mi producto no crece', description: 'Diagnóstico de stagnation y estrategia de crecimiento acelerado.', tag: 'cliente', targetSlug: 'rappi' },
  { title: 'El equipo no entrega', description: 'Estructura, cadencias y métricas para equipos de alto rendimiento.', tag: 'cliente', targetSlug: 'bancolombia' },
  { title: 'No sé qué priorizar', description: 'Frameworks de priorización basados en datos e impacto.', tag: 'cliente', targetSlug: 'frubana' },
  { title: 'Perdemos usuarios', description: 'Reducción de churn y mejora de retención con experimentos.', tag: 'cliente', targetSlug: 'rappi' },
]

const roleCards: NavSystemProps['roleCards'] = [
  { title: 'Soy CTO / Founder', description: 'Escalabilidad técnica y alineación estrategia-producto.', tag: 'cliente', targetSlug: 'bancolombia' },
  { title: 'Soy reclutador', description: 'Track record de impacto, cultura y liderazgo a nivel staff.', tag: 'reclutador', targetSlug: 'rappi' },
  { title: 'Soy PM / PO', description: 'Frameworks, templates y mentoring de product management.', tag: 'comunidad', targetSlug: 'frubana' },
  { title: 'Soy inversor', description: 'Due diligence de capacidades de producto en startups.', tag: 'cliente', targetSlug: 'bancolombia' },
]

const caseProjects: CasesSectionProject[] = [
  {
    slug: 'rappi',
    title: 'Rappi — Crecimiento ARR',
    description: 'Lideré la estrategia de monetización que generó $3.2M ARR incremental en 8 meses.',
    tags: ['Crecimiento', 'Monetización', 'LatAm'],
    symptomTags: ['Mi producto no crece', 'Perdemos usuarios'],
    roleTags: ['Soy CTO / Founder', 'Soy reclutador'],
    audienceTags: ['cliente', 'reclutador'],
    metric: { value: '+$3.2M', label: 'ARR' },
  },
  {
    slug: 'bancolombia',
    title: 'Bancolombia — NPS y Retención',
    description: 'Rediseñé el journey digital bancario mejorando NPS +40 puntos y reduciendo churn 28%.',
    tags: ['Banca digital', 'UX', 'Retención'],
    symptomTags: ['El equipo no entrega', 'Perdemos usuarios'],
    roleTags: ['Soy CTO / Founder', 'Soy inversor'],
    audienceTags: ['cliente'],
    metric: { value: '+40pts', label: 'NPS' },
  },
  {
    slug: 'frubana',
    title: 'Frubana — Reducción CAC',
    description: 'Optimicé el funnel de adquisición B2B reduciendo CAC 35% con growth loops.',
    tags: ['B2B', 'Growth', 'Agritech'],
    symptomTags: ['No sé qué priorizar', 'Mi producto no crece'],
    roleTags: ['Soy PM / PO', 'Soy inversor'],
    audienceTags: ['cliente', 'comunidad'],
    metric: { value: '-35%', label: 'CAC' },
  },
]

const titanModules: TitanModule[] = [
  { hubName: 'M0', hubTitle: 'Foundation', description: 'Visión, misión y estructura del portafolio.', momentum: 'M0', commandsCount: 12 },
  { hubName: 'M1', hubTitle: 'Strategy', description: 'Backlog, roadmap y customer journeys.', momentum: 'M1', commandsCount: 10 },
  { hubName: 'M2', hubTitle: 'Architecture', description: 'Spec, diseño y contratos de API.', momentum: 'M2', commandsCount: 11 },
  { hubName: 'M3', hubTitle: 'Execution', description: 'BFL sprints, CI/CD y componentes.', momentum: 'M3', commandsCount: 8 },
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

export default function HomePage() {
  return (
    <HomeTemplate
      heroData={heroData}
      symptomCards={symptomCards}
      roleCards={roleCards}
      caseProjects={caseProjects}
      titanModules={titanModules}
      titanVersion="v7.0"
      skills={skills}
    />
  )
}
