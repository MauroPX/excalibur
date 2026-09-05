import type { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://excalibur-six-chi.vercel.app'

// Mantener en sync con los slugs reales de src/app/[locale]/casos/[slug]/page.tsx
// hasta que los casos vivan en Strapi (EX-v2-DATA-001).
const CASE_SLUGS = ['fdn', 'solidaria', 'bbva']

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
  for (const slug of CASE_SLUGS) {
    for (const { url } of localizedPaths(`/casos/${slug}`)) {
      entries.push({ url, priority: 0.8, changeFrequency: 'monthly' })
    }
  }

  return entries
}
