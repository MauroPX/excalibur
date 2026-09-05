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

---

## 6. Estado real vs. plan — auditado 2026-09-04

Disparado por una observación del IC sobre el toggle de idioma. Verificado contra el
código real (no contra lo que dice `TRACEABILITY_MATRIX` de "i18n ✅ ACTIVO"):

| Ítem del plan (§1, §4) | Estado real | Evidencia |
|---|---|---|
| Meta tags (OG, Twitter, robots, keywords, title template) | ❌ No implementado | `src/app/layout.tsx` solo exporta `{ title, description }` — sin `openGraph`, `twitter`, `robots`, `alternates` |
| `sitemap.ts` / `robots.txt` | ❌ No existen | `find src/app -iname "sitemap*" -o -iname "robots*"` → vacío |
| Schema.org JSON-LD (`Person`, `CreativeWork` por caso) | ❌ No implementado | 0 ocurrencias de `application/ld+json` o `schema.org` en `src/` |
| Metadata dinámica por caso (`generateMetadata`) | ❌ No implementado | `src/app/casos/[slug]/page.tsx` no exporta `generateMetadata` |
| **i18n bilingüe ES/EN — el plan asume que existe** | ❌ **No existe ningún mecanismo de cambio de idioma** | `src/i18n/request.ts` tiene `const locale = 'es'` **hardcodeado** — nunca lee `en.json`. Sin `middleware.ts`, sin `LanguageToggle`, sin `useLocale`/`setLocale` en ningún componente (grep completo de `src/` = 0 resultados) |
| hreflang / `alternates.languages` | ❌ No implementado | consecuencia directa del punto anterior — no hay 2 locales servidos, no hay nada que alternar |

**Conclusión:** `en.json` existe (`src/i18n/messages/en.json`) pero **es contenido muerto** —
ningún visitante lo ve nunca, porque `getRequestConfig()` siempre resuelve a `'es'`. La entrada
"i18n: ✅ ACTIVO (parcial)" de `TRACEABILITY_MATRIX.md` describe la cobertura de `useTranslations()`
dentro de los componentes, pero no aclara que el mecanismo de *selección* de idioma —el 50% que
lo hace útil— no existe. Esto también es un gap de accesibilidad: WCAG 3.1.1/3.1.2 (idioma de
página/idioma de partes) da por hecho que el `lang` del documento refleja lo que el usuario eligió;
hoy `<html lang={locale}>` en `layout.tsx` siempre resuelve `es` porque `getLocale()` no tiene de
dónde más leer.

**Para implementarlo de verdad hace falta (candidato a work-stream `EX-v2-I18N-ROUTING-001`,
Ola 6 — ya estaba listada como candidata en `CLAUDE.md`):**
1. `middleware.ts` con `createMiddleware` de `next-intl` (detección de locale por URL/cookie/`Accept-Language`).
2. Reestructurar rutas bajo `src/app/[locale]/...` (o el patrón de subpath que decida next-intl).
3. `LanguageToggle` (molécula, mismo patrón que `ThemeToggle`) + `useLocale()`/`Link` localizado.
4. `generateMetadata` con `alternates.languages` (hreflang) por página.
5. `sitemap.ts`, `robots.ts`, JSON-LD (`Person` + `CreativeWork` por caso) — la parte de §1 que
   nunca se construyó, independiente del punto de idioma.

**Actualización — implementado 2026-09-04.** El IC pidió empezar antes de pushear. Los 5 puntos
de arriba están hechos y verificados (build real, no solo lint):

1. `middleware.ts` + `src/i18n/routing.ts` (`defineRouting`) + `src/i18n/navigation.ts`
   (`createNavigation`) — reemplaza el `locale='es'` hardcodeado de `src/i18n/request.ts`.
2. Rutas movidas a `src/app/[locale]/...` (`page.tsx`, `casos/[slug]/page.tsx`,
   `privacidad/page.tsx`, `layout.tsx`). `src/app/api/*` queda fuera (no localizado).
3. `LanguageToggle` (`EX-v2-ATOM-008`, LOCKED) — preserva el pathname vía `src/i18n/navigation.ts`.
   De paso: `ThemeToggle` (`EX-v2-ATOM-007`) estaba certificado pero **nunca se renderizaba en
   ningún lado** — ambos toggles ahora viven en una barra fija en `[locale]/layout.tsx`.
4. `generateMetadata` con `alternates.languages` (hreflang) en home y en cada caso.
5. `src/app/sitemap.ts` (8 URLs — 2 locales × home+3 casos), `src/app/robots.ts`,
   `PersonJsonLd`/`CreativeWorkJsonLd` (`src/components/infra/JsonLd/`).

Verificado en el HTML generado (`.next/server/app/{es,en}.html` tras `pnpm build`):
`<html lang="en">` real, `hreflang` correcto, `og:locale` `en_US`/`es_CO`, JSON-LD `Person`
presente, y el contenido de `useTranslations()` **sí cambia** a inglés en `/en` (antes,
imposible). De regalo: se corrigió un bug real en `CasePageNav.tsx` — apuntaba a `/caso/{slug}`
(singular) cuando la ruta real es `/casos/{slug}` (plural); el botón "siguiente caso" nunca
había funcionado.

**Lo que queda fuera de este alcance (no es código, es contenido):** `symptomCards`, `roleCards`,
`caseProjects` y el copy de cada caso en `page.tsx`/`casos/[slug]/page.tsx` son literales en
español — visitar `/en` sirve el layout y el `useTranslations()` en inglés, pero ese contenido
de marketing sigue en español. Traducirlo es una decisión editorial del IC, no un fix técnico.

Verificado: `lint 0 · test 198/198 · build 0 · build-storybook 0 · audit 97%`.
Rama: `feat/v2-analytics-posthog`.

---

📍 Momentum: M1 | Artefacto: SEO_AIO_PLAN | Nivel: B
Firmado: Leonel Mauricio Gómez Ocampo — Staff Product Architect | 2026-06-15
Auditoría de estado real + implementación: Claude Code (rol Arquitecto) | 2026-09-04
