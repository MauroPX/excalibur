import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import { HomeTemplate } from '@/components/templates/HomeTemplate'
import { PersonJsonLd } from '@/components/infra/JsonLd'
import type { NavSystemProps } from '@/components/organisms/NavSystem'
import type { CasesSectionProject } from '@/components/organisms/CasesSection'
import type { TitanModule } from '@/components/organisms/TitanSection'
import type { StackSkill } from '@/components/organisms/StackSection'
import { CLIENT_CASES } from '@/content/cases'

const symptomCards: NavSystemProps['symptomCards'] = [
  { title: 'Mi sistema es inaccesible', description: 'Auditoría WCAG 2.2 y eliminación de fallas de accesibilidad con evidencia técnica verificable.', tag: 'cliente', targetSlug: 'fdn' },
  { title: 'El TTM es demasiado largo', description: 'Diagnóstico del dato real y escenarios antes de diseñar: Correos Chile pasó de 12 a 6 meses de ciclo.', tag: 'cliente', targetSlug: 'correos-chile' },
  { title: 'No tenemos Design System', description: 'Design Systems desde cero con gobernanza, tokens desde una fuente y verificación automatizada.', tag: 'cliente', targetSlug: 'fid-seguros' },
  { title: 'Nuestra plataforma es legacy', description: 'Migración sin gobierno explícito se fragmenta. FID Seguros: framework D↔D antes de mover la primera pantalla.', tag: 'cliente', targetSlug: 'fid-seguros' },
]

const roleCards: NavSystemProps['roleCards'] = [
  { title: 'Soy CTO / Founder', description: 'Escalabilidad técnica end-to-end. Correos Chile: ciclo 12→6 meses, 10 devs autónomos desde el sprint 1.', tag: 'cliente', targetSlug: 'correos-chile' },
  { title: 'Soy reclutador', description: '10 años, 4 países, evidencia verificable por caso: métricas, decisiones y uso de IA declarado.', tag: 'reclutador', targetSlug: 'bbva' },
  { title: 'Soy PM / PO', description: 'TITAN v7.0: metodología de M0 a M5 sin pérdida de contexto entre etapas.', tag: 'comunidad', targetSlug: 'bbva' },
  { title: 'Soy líder de ingeniería', description: 'Auditoría de 654 incidentes + Core Web Vitals en FDN. LCP de 25.2s a un objetivo <2.5s.', tag: 'cliente', targetSlug: 'fdn' },
]

// Los 8 casos de cliente (experiencia profesional pagada). Título/descripción/tags
// vienen del contenido canónico en src/content/cases/clients/*.ts; los tags de filtro
// (symptom/role) y la métrica destacada se curan aquí para la portada.
const CASE_META: Record<
  string,
  { symptomTags: string[]; roleTags: string[]; metric: { value: string; label: string } }
> = {
  'correos-chile': { symptomTags: ['team-scaling', 'design-system'], roleTags: ['staff-architect', 'designops'], metric: { value: '12→6', label: 'meses de ciclo' } },
  bbva: { symptomTags: ['design-system', 'team-scaling'], roleTags: ['staff-architect', 'product-manager'], metric: { value: '5/5', label: 'de 3 Product Owners' } },
  fdn: { symptomTags: ['legacy', 'a11y', 'performance'], roleTags: ['staff-architect', 'tech-lead'], metric: { value: '-90%', label: 'objetivo LCP' } },
  lasalle: { symptomTags: ['a11y', 'design-system'], roleTags: ['staff-architect', 'designops'], metric: { value: 'AAA', label: 'WCAG 2.2' } },
  'fid-seguros': { symptomTags: ['legacy', 'design-system'], roleTags: ['staff-architect', 'designops'], metric: { value: '1.002', label: 'filas de gobierno' } },
  sured: { symptomTags: ['team-scaling'], roleTags: ['tech-lead', 'staff-architect'], metric: { value: '2×/día', label: 'conciliación auditable' } },
  'parking-ruedaz': { symptomTags: ['conversion', 'design-system'], roleTags: ['ux-designer', 'staff-architect'], metric: { value: '+90%', label: 'uso recurrente' } },
  'siclo-idpay': { symptomTags: ['conversion'], roleTags: ['product-manager', 'ux-designer'], metric: { value: '10', label: 'tablas ER + OpenAPI' } },
}

const caseProjects: CasesSectionProject[] = Object.keys(CASE_META).map((slug) => {
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

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
    languages: { es: '/', en: '/en' },
  },
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('hero')

  return (
    <>
      <PersonJsonLd />
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
      featuredProjects={caseProjects.map(p => ({ slug: p.slug, title: p.title, summary: p.description, tags: p.tags }))}
      caseProjects={caseProjects}
      titanModules={titanModules}
      titanVersion="v7.0"
      skills={skills}
      />
    </>
  )
}
