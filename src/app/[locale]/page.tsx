import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import { HomeTemplate } from '@/components/templates/HomeTemplate'
import type { CasesSectionProject } from '@/components/organisms/CasesSection'
import { getClientCases } from '@/content/cases'
import { getHome } from '@/content/home'
import type { AppLocale } from '@/i18n/routing'



// Los 8 casos de cliente (experiencia profesional pagada). Título/descripción/tags
// vienen del contenido canónico en src/content/cases/clients/*.ts; los tags de filtro
// (symptom/role) y la métrica destacada se curan aquí para la portada.
const CASE_TAGS: Record<string, { symptomTags: string[]; roleTags: string[] }> = {
  'correos-chile': { symptomTags: ['team-scaling', 'design-system'], roleTags: ['staff-architect', 'designops'] },
  bbva: { symptomTags: ['design-system', 'team-scaling'], roleTags: ['staff-architect', 'product-manager'] },
  fdn: { symptomTags: ['legacy', 'a11y', 'performance'], roleTags: ['staff-architect', 'tech-lead'] },
  lasalle: { symptomTags: ['a11y', 'design-system'], roleTags: ['staff-architect', 'designops'] },
  'fid-seguros': { symptomTags: ['legacy', 'design-system'], roleTags: ['staff-architect', 'designops'] },
  sured: { symptomTags: ['team-scaling'], roleTags: ['tech-lead', 'staff-architect'] },
  'parking-ruedaz': { symptomTags: ['conversion', 'design-system'], roleTags: ['ux-designer', 'staff-architect'] },
  'siclo-idpay': { symptomTags: ['conversion'], roleTags: ['product-manager', 'ux-designer'] },
}

const buildCaseProjects = (locale: AppLocale): CasesSectionProject[] => {
  const cases = getClientCases(locale)
  const metrics = getHome(locale).CASE_METRICS
  return Object.keys(CASE_TAGS).map((slug) => {
    const c = cases[slug]
    const t = CASE_TAGS[slug]
    return {
      slug,
      title: c.title,
      description: c.description,
      tags: c.tags,
      symptomTags: t.symptomTags,
      roleTags: t.roleTags,
      audienceTags: ['cliente'],
      metric: metrics[slug],
    }
  })
}


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
  const home = getHome(locale as AppLocale)
  const caseProjects = buildCaseProjects(locale as AppLocale)

  return (
    <>
      <HomeTemplate
      heroData={{
        headline: t('title'),
        subheadline: t('subtitle'),
        ctaLabel: t('cta'),
        ctaHref: '#casos',
        secondaryCtaLabel: t('ctaSecondary'),
        secondaryCtaHref: '#titan',
        metrics: home.HERO_METRICS,
      }}
      symptomCards={home.SYMPTOM_CARDS}
      roleCards={home.ROLE_CARDS}
      featuredProjects={caseProjects.map(p => ({ slug: p.slug, title: p.title, summary: p.description, tags: p.tags }))}
      flagship={home.FLAGSHIP}
      caseProjects={caseProjects}
      titanModules={home.TITAN_MODULES}
      titanVersion="v7.0"
      stackCategories={home.STACK_CATEGORIES}
      industries={home.INDUSTRIES}
      faqItems={home.FAQ_ITEMS}
      />
    </>
  )
}
