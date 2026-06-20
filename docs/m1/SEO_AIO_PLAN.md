# SEO_AIO_PLAN.md
# EXCALIBUR v2.0 — Plan SEO + AI Optimization
# TITAN v7.0 | M1 | 2026-06-15
# Nivel: B (vivo)

---

## Contexto

El portafolio v1 (main/Netlify) tiene SEO efectivamente nulo: todo el contenido
vive dentro de un iframe y los crawlers de Google no lo indexan. El portafolio v2
(v2/Vercel) elimina el iframe — el DOM es nativo Next.js, completamente indexable.

---

## 1. SEO Técnico

### Estructura de URLs

```
maurogomez.design/                   → Home (Hero + NavSystem + Sections)
maurogomez.design/cases/[id]         → Caso de estudio individual
maurogomez.design/cases/             → Grid de todos los casos (opcional)
maurogomez.design/titan/             → TITAN v7.0 showcase (opcional)
```

### Meta tags por página

```typescript
// src/app/layout.tsx — metadata base
export const metadata: Metadata = {
  title: {
    default: 'Leonel Mauricio Gómez — Staff Product Architect',
    template: '%s | Mauricio Gómez',
  },
  description:
    'Staff Product Architect con 10+ años construyendo productos digitales ' +
    'en fintech, salud, gobierno y logística. Creador de TITAN v7.0.',
  keywords: [
    'Staff Product Architect', 'Product Manager', 'UX Engineer',
    'Design Systems', 'WCAG AAA', 'Next.js', 'Colombia', 'LATAM',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    alternateLocale: 'en_US',
    siteName: 'Mauricio Gómez · Staff Product Architect',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

// src/app/cases/[id]/page.tsx — metadata dinámica por caso
export async function generateMetadata({ params }): Promise<Metadata> {
  const project = await getProject(params.id)
  return {
    title: `${project.client} — ${project.role}`,
    description: project.par.result,
    openGraph: { images: [project.og_image] },
  }
}
```

### Sitemap y robots.txt

```typescript
// src/app/sitemap.ts
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects()
  return [
    { url: 'https://maurogomez.design', priority: 1.0 },
    ...projects.map(p => ({
      url: `https://maurogomez.design/cases/${p.id}`,
      priority: 0.8,
      lastModified: p.updatedAt,
    })),
  ]
}

// public/robots.txt
User-agent: *
Allow: /
Disallow: /api/
Sitemap: https://maurogomez.design/sitemap.xml
```

### Schema.org (JSON-LD)

```typescript
// Persona profesional
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Leonel Mauricio Gómez Ocampo",
  "jobTitle": "Staff Product Architect",
  "url": "https://maurogomez.design",
  "sameAs": [
    "https://linkedin.com/in/leomaurogomez",
    "https://github.com/MauroPX"
  ],
  "knowsAbout": ["Product Management", "Design Systems", "WCAG", "AI/RAG"]
}

// Por cada caso de estudio
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "BBVA Colombia — Design System at Scale",
  "description": "...",
  "author": { "@type": "Person", "name": "Leonel Mauricio Gómez Ocampo" }
}
```

---

## 2. Performance como factor SEO

| Métrica | Objetivo | Herramienta de medición |
|---|---|---|
| LCP | < 1.5s | Vercel Analytics + Lighthouse CI |
| CLS | < 0.1 | Vercel Analytics |
| FID / INP | < 200ms | Web Vitals API |
| TTFB | < 600ms | Vercel Edge Network |

**Estrategia:** SSR por defecto en Next.js 15. Imágenes con `next/image`.
Fuentes con `next/font` (Roboto Flex). No hay JavaScript de terceros bloqueante.

---

## 3. AIO — AI Optimization (Google AI Overviews + Perplexity)

Los motores de búsqueda con IA (Google AI Mode, Perplexity, ChatGPT Search)
priorizan contenido:
1. Autoritativo y firmado (nombre + fecha + rol)
2. Con datos concretos y verificables
3. Con estructura semántica clara (headings, listas, tablas)
4. Con respuestas directas a preguntas específicas

### Implementación

```markdown
# Cada caso de estudio debe responder explícitamente:
- ¿Qué problema tenía el cliente?
- ¿Qué hiciste específicamente?
- ¿Cuál fue el resultado medible?
- ¿En qué período?
- ¿Qué tecnologías usaste?
```

### Palabras clave long-tail con intención de búsqueda

| Query | Intención | Página objetivo |
|---|---|---|
| "staff product architect latam" | Reclutador | Home |
| "design system WCAG AAA Colombia" | Comunidad | Cases/FDN |
| "product manager fintech colombia experiencia" | Reclutador | Cases/BBVA |
| "cómo migrar portafolio de iframe a Next.js" | Comunidad | GitHub/readme |
| "TITAN framework AI product management" | Comunidad | /titan |
| "product architect con experiencia en IA" | Cliente | Home |

---

## 4. Internacionalización y SEO bilingüe

```typescript
// next.config.ts
i18n: {
  locales: ['es', 'en'],
  defaultLocale: 'es',
}

// hreflang tags automáticos via next-intl
<link rel="alternate" hreflang="es" href="https://maurogomez.design/" />
<link rel="alternate" hreflang="en" href="https://maurogomez.design/en/" />
```

---

## 5. Métricas y seguimiento

| Herramienta | Qué mide | Cuándo activar |
|---|---|---|
| Vercel Analytics | Web Vitals, visitas, geografía | Desde primer deploy a v2 |
| PostHog | Eventos de audiencia, funnels, conversiones | Desde feat/v2-nav-system |
| Google Search Console | Indexación, keywords, CTR | Al conectar dominio propio |
| Lighthouse CI | Score por PR | Desde CI/CD activo |

---

📍 Momentum: M1 | Artefacto: SEO_AIO_PLAN | Nivel: B
Firmado: Leonel Mauricio Gómez Ocampo — Staff Product Architect | 2026-06-15
