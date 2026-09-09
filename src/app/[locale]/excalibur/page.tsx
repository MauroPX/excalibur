import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { CasePage } from '@/components/templates/CasePage'
import { CreativeWorkJsonLd } from '@/components/infra/JsonLd'
import { getMetaCase } from '@/content/cases'
import type { AppLocale } from '@/i18n/routing'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const meta = getMetaCase(locale as AppLocale)
  const path = '/excalibur'
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: locale === 'es' ? path : `/en${path}`,
      languages: { es: path, en: `/en${path}` },
    },
    openGraph: { title: meta.title, description: meta.description, type: 'article' },
  }
}

export default async function ExcaliburMetaCase({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const meta = getMetaCase(locale as AppLocale)
  return (
    <>
      <CreativeWorkJsonLd name={meta.title} description={meta.description} url="/excalibur" />
      <CasePage caseData={meta} />
    </>
  )
}
