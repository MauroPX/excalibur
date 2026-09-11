import type { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'
import { CLIENT_CASE_SLUGS, WORK_TEST_SLUGS } from '@/content/cases'
import { SITE_URL } from '@/lib/site-url'


function localizedPaths(path: string) {
  return routing.locales.map((locale) => ({
    url: locale === routing.defaultLocale ? `${SITE_URL}${path}` : `${SITE_URL}/${locale}${path}`,
  }))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const { url } of localizedPaths('')) {
    entries.push({ url, priority: 1.0, changeFrequency: 'monthly' })
  }

  // Índices y meta-caso
  for (const path of ['/pruebas-tecnicas', '/metodologia', '/excalibur']) {
    for (const { url } of localizedPaths(path)) {
      entries.push({ url, priority: 0.7, changeFrequency: 'monthly' })
    }
  }

  // Casos de cliente (experiencia profesional pagada) — /casos/[slug]
  for (const slug of CLIENT_CASE_SLUGS) {
    for (const { url } of localizedPaths(`/casos/${slug}`)) {
      entries.push({ url, priority: 0.8, changeFrequency: 'monthly' })
    }
  }

  // Pruebas técnicas y diagnósticos — /pruebas-tecnicas/[slug]
  for (const slug of WORK_TEST_SLUGS) {
    for (const { url } of localizedPaths(`/pruebas-tecnicas/${slug}`)) {
      entries.push({ url, priority: 0.6, changeFrequency: 'monthly' })
    }
  }

  return entries
}
