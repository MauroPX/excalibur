import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { CasePage } from '@/components/templates/CasePage'
import { CreativeWorkJsonLd } from '@/components/infra/JsonLd'
import { META_CASE } from '@/content/cases'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const path = '/excalibur'
  return {
    title: META_CASE.title,
    description: META_CASE.description,
    alternates: {
      canonical: locale === 'es' ? path : `/en${path}`,
      languages: { es: path, en: `/en${path}` },
    },
    openGraph: { title: META_CASE.title, description: META_CASE.description, type: 'article' },
  }
}

export default async function ExcaliburMetaCase({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  return (
    <>
      <CreativeWorkJsonLd name={META_CASE.title} description={META_CASE.description} url="/excalibur" />
      <CasePage caseData={META_CASE} />
    </>
  )
}
