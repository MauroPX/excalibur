import { notFound } from 'next/navigation'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { CasePage } from '@/components/templates/CasePage'
import { CreativeWorkJsonLd, BreadcrumbJsonLd } from '@/components/infra/JsonLd'
import { getClientCases, CLIENT_CASE_SLUGS, getFdnMomentum2 } from '@/content/cases'
import type { AppLocale } from '@/i18n/routing'
import { FdnMomentum2Section } from './FdnMomentum2Section'

export function generateStaticParams() {
  return CLIENT_CASE_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const caseData = getClientCases(locale as AppLocale)[slug]
  if (!caseData) return {}
  const path = `/casos/${slug}`
  return {
    title: caseData.title,
    description: caseData.description,
    alternates: {
      canonical: locale === 'es' ? path : `/en${path}`,
      languages: { es: path, en: `/en${path}` },
    },
    openGraph: {
      title: caseData.title,
      description: caseData.description,
      type: 'article',
    },
  }
}

export default async function CasePageRoute({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const caseData = getClientCases(locale as AppLocale)[slug]
  if (!caseData) notFound()
  const t = await getTranslations({ locale, namespace: 'casePage.breadcrumb' })
  const prefix = locale === 'es' ? '' : `/${locale}`
  const lang = locale === 'en' ? 'en' : 'es'
  return (
    <>
      <CreativeWorkJsonLd
        name={caseData.title}
        description={caseData.description}
        url={`${prefix}/casos/${slug}`}
        inLanguage={lang}
      />
      <BreadcrumbJsonLd
        items={[
          { name: t('home'), path: `${prefix}/` },
          { name: t('cases'), path: `${prefix}/#casos` },
          { name: caseData.title, path: `${prefix}/casos/${slug}` },
        ]}
      />
      <CasePage
        caseData={caseData}
        appendixSection={slug === 'fdn' ? <FdnMomentum2Section data={getFdnMomentum2(locale as AppLocale)} /> : undefined}
      />
    </>
  )
}
