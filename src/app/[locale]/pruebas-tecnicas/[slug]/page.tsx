import { notFound } from 'next/navigation'
import { setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import { CasePage } from '@/components/templates/CasePage'
import { CreativeWorkJsonLd } from '@/components/infra/JsonLd'
import { getWorkTestCases, WORK_TEST_SLUGS } from '@/content/cases'
import type { AppLocale } from '@/i18n/routing'

export function generateStaticParams() {
  return WORK_TEST_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  const caseData = getWorkTestCases(locale as AppLocale)[slug]
  if (!caseData) return {}
  const path = `/pruebas-tecnicas/${slug}`
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

export default async function WorkTestPageRoute({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const caseData = getWorkTestCases(locale as AppLocale)[slug]
  if (!caseData) notFound()
  return (
    <>
      <CreativeWorkJsonLd
        name={caseData.title}
        description={caseData.description}
        url={`/pruebas-tecnicas/${slug}`}
      />
      <CasePage caseData={caseData} />
    </>
  )
}
