/**
 * URL pública canónica del sitio. Solo para código de servidor
 * (generateMetadata, JSON-LD, robots.ts, sitemap.ts).
 *
 * Orden de prioridad:
 *   1. NEXT_PUBLIC_SITE_URL           — override explícito (dominio propio)
 *   2. VERCEL_PROJECT_PRODUCTION_URL  — dominio de producción que Vercel inyecta
 *      solo (sigue al dominio real que tenga el proyecto sin tocar nada)
 *   3. fallback hardcodeado
 *
 * Nota: si NEXT_PUBLIC_SITE_URL apunta a un dominio muerto, gana igual — hay que
 * borrarla o corregirla en Vercel para que caiga a (2).
 */
function normalize(u: string): string {
  return `https://${u.trim().replace(/^https?:\/\//, '').replace(/\/+$/, '')}`
}

export const SITE_URL: string = (() => {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (explicit) return normalize(explicit)

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim()
  if (vercel) return normalize(vercel)

  return 'https://excalibur-six-chi.vercel.app'
})()
