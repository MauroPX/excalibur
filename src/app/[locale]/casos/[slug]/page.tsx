import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import { CasePage } from '@/components/templates/CasePage'
import { CreativeWorkJsonLd } from '@/components/infra/JsonLd'
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
  return (
    <>
      <CreativeWorkJsonLd name={caseData.title} description={caseData.description} url={`/casos/${slug}`} />
      <CasePage
        caseData={caseData}
        appendixSection={slug === 'fdn' ? <FdnMomentum2Section data={getFdnMomentum2(locale as AppLocale)} /> : undefined}
      />
    </>
  )
}
