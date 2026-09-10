/**
 * Infra — EX-v2-SEO-001. Datos estructurados schema.org (JSON-LD).
 * Cierra el hallazgo de docs/m1/SEO_AIO_PLAN.md §1/§6: 0 schema.org implementado.
 * Contenido propio y estático (no input de usuario) — seguro serializar directo.
 *
 * Cobertura:
 *  - <SiteJsonLd>          layout — WebSite + Person (grafo, una sola vez por página)
 *  - <BreadcrumbJsonLd>    toda página que no sea la home — BreadcrumbList
 *  - <CollectionPageJsonLd> índices (/metodologia, /pruebas-tecnicas) — CollectionPage + ItemList
 *  - <CreativeWorkJsonLd>  cada caso / prueba técnica / meta-caso — CreativeWork
 */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://excalibur-six-chi.vercel.app'

const PERSON = {
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: 'MauroGO',
  jobTitle: 'Staff Product Architect',
  url: SITE_URL,
  sameAs: [
    'https://www.linkedin.com/in/maurogooc/',
    'https://github.com/MauroPX',
  ],
  knowsAbout: [
    'Product Management',
    'Design Systems',
    'Material Design 3',
    'WCAG',
    'Accessibility',
    'AI/RAG',
    'Next.js',
    'Domain-Driven Design',
  ],
} as const

function Script({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

/** Grafo sitio-wide: WebSite + Person. Va en el layout, una vez por página. */
export function SiteJsonLd({ locale = 'es' }: { locale?: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'MauroGO · Staff Product Architect',
        inLanguage: locale === 'en' ? 'en' : 'es',
        publisher: { '@id': `${SITE_URL}/#person` },
      },
      PERSON,
    ],
  }
  return <Script data={data} />
}

/** @deprecated usar <SiteJsonLd> en el layout. Se mantiene por compat. */
export function PersonJsonLd() {
  return <Script data={{ '@context': 'https://schema.org', ...PERSON }} />
}

export interface BreadcrumbItem {
  name: string
  /** ruta relativa (con locale ya resuelto), ej. "/en/casos/bbva" o "/casos/bbva" */
  path: string
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  }
  return <Script data={data} />
}

export interface CollectionPageJsonLdProps {
  name: string
  description: string
  /** ruta relativa con locale resuelto */
  url: string
  inLanguage?: string
  items: BreadcrumbItem[]
}

export function CollectionPageJsonLd({
  name,
  description,
  url,
  inLanguage = 'es',
  items,
}: CollectionPageJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url: `${SITE_URL}${url}`,
    inLanguage,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#person` },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((it, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: it.name,
        url: `${SITE_URL}${it.path}`,
      })),
    },
  }
  return <Script data={data} />
}

export interface CreativeWorkJsonLdProps {
  name: string
  description: string
  url: string
  inLanguage?: string
}

export function CreativeWorkJsonLd({ name, description, url, inLanguage = 'es' }: CreativeWorkJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name,
    description,
    url: `${SITE_URL}${url}`,
    inLanguage,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    author: { '@id': `${SITE_URL}/#person` },
  }
  return <Script data={data} />
}
