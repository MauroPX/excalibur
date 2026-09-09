/**
 * Infra — EX-v2-SEO-001. Datos estructurados schema.org (JSON-LD).
 * Cierra el hallazgo de docs/m1/SEO_AIO_PLAN.md §1/§6: 0 schema.org implementado.
 * Contenido propio y estático (no input de usuario) — seguro serializar directo.
 */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://excalibur-six-chi.vercel.app'

export function PersonJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Leonel Mauricio Gómez Ocampo',
    jobTitle: 'Staff Product Architect',
    url: SITE_URL,
    sameAs: [
      'https://www.linkedin.com/in/maurogooc/',
      'https://github.com/MauroPX',
    ],
    knowsAbout: ['Product Management', 'Design Systems', 'WCAG', 'AI/RAG', 'Next.js'],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export interface CreativeWorkJsonLdProps {
  name: string
  description: string
  url: string
}

export function CreativeWorkJsonLd({ name, description, url }: CreativeWorkJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name,
    description,
    url: `${SITE_URL}${url}`,
    author: { '@type': 'Person', name: 'Leonel Mauricio Gómez Ocampo' },
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
