# EXCALIBUR — DIAGNÓSTICO TÉCNICO COMPLETO + BLUEPRINT v2
**Fecha:** Junio 2026 | **Repo:** github.com/MauroPX/excalibur | **Rama actual:** main → Netlify

---

## 1. ARQUITECTURA REAL (lo que el código dice)

```
Netlify (producción)
  └── Next.js 16.2.6 + React 19.2.4 + TypeScript 5 + Tailwind 4
        └── src/app/page.tsx  ← WRAPPER PRINCIPAL
              ├── <iframe src="/original/index_clean.html?v=91.0">  ← EL SITIO REAL
              ├── InquisitorHUD.tsx  (panel A11Y flotante, 165 líneas)
              ├── TitanRAGAgent.tsx  (agente IA con RAG, 158 líneas)
              └── StaffAtoms.tsx / LiquidFAB  (botones flotantes, 105 líneas)

public/original/                    ← EL PORTAFOLIO REAL (HTML estático)
  ├── index_clean.html              3,325 líneas — generado por orchestrator.js
  ├── index.html                    3,422 líneas — fuente del orchestrator
  ├── css/main.css                  1,998 líneas / 56KB
  ├── js/app.js                     617 líneas / 23KB — scroll, a11y, bilingüe
  ├── js/explorer.js                94 líneas
  └── data/evidence.json            proyectos PAR

src/data/evidence-dna.json         7 proyectos (falta ~12 de la SSOT real)
scripts/orchestrator.js            Build: index.html → index_clean.html + inyecta DNA
```

---

## 2. CAUSA RAÍZ — SECCIONES NEGRAS (confirmado en código)

### Bug #1 — overflow:hidden atrapa el scroll
```tsx
// page.tsx línea 30 — EL PROBLEMA
<div style={{ position: 'fixed', inset: 0, width: '100vw', 
              height: '100vh', overflow: 'hidden' }}>  // ← AQUÍ
  <iframe src="/original/index_clean.html?v=91.0" 
    style={{ position: 'absolute', inset: 0, 
             width: '100%', height: '100%' }} />
```

El contenedor padre tiene `overflow: hidden`. El iframe no puede scrollear fuera de su viewport inicial. Los `IntersectionObserver` en `app.js` usan `root: null` (viewport del browser), pero dentro del iframe el scroll es interno — los observers nunca se disparan para elementos fuera del primer fold.

### Bug #2 — Flash negro por !mounted guard
```tsx
// page.tsx línea 25
if (!mounted) return <div style={{ background: '#080C12', height: '100vh' }} />;
```
Mientras el componente hidrata en SSR, el visitante ve negro puro. Si la red es lenta o el JS falla, persiste.

### Bug #3 — IntersectionObserver con root incorrecto
```js
// app.js — SCROLL REVEAL
var obs = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry, i) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
// root: null = viewport del browser, no del iframe
```
Las 8 secciones del portafolio usan `.reveal` con este observer. Dentro del iframe, `root: null` apunta al viewport del documento principal (el Next.js shell), no al viewport interno del iframe.

---

## 3. INVENTARIO COMPLETO DE SECCIONES HTML

| # | Section ID | Línea | Contenido |
|---|-----------|-------|-----------|
| 1 | `#hero` | 2027 | Nombre, roles, quote, 3 CTAs |
| 2 | `#flagship` | 2121 | Proyecto bandera (FID/Correos Chile) |
| 3 | `#cases` | 2205 | Casos seleccionados con métricas |
| 4 | `#titan` | 2356 | TITAN v5.0 (debe ser v7.0) |
| 5 | `#stack` | 2423 | Stack & Methods |
| 6 | `#industries` | 2502 | 10+ años, 6 industrias |
| 7 | `#faq` | 2530 | Preguntas frecuentes |
| 8 | `#contact` | 2567 | Contacto |
| — | `#layer-ssot` | 2778 | Vista SSOT (documento inline) |
| — | `#layer-onepager` | 2783 | One-pager ejecutivo |
| — | `#layer-dossier` | 2862 | Dossier completo |

---

## 4. GAPS CRÍTICOS DE DATOS

### Evidence DNA — 7 proyectos, faltan ~12

**Están en DNA:**
- BBVA Colombia & Panamá
- Financiera de Desarrollo Nacional
- Correos de Chile
- SuRed
- TVS+
- ADL Labs
- REDEBAN

**Faltan (están en SSOT pero NO en DNA):**
- FID Seguros Chile (SmartJob)
- Nivelics / Universidad La Salle
- Ruedaz (Parking International)
- Colsanitas
- PROCOLOMBIA
- Ecopetrol
- SI-CLO / IDPay
- Old Mutual / Skandia
- Dacartec (empresa base 2017–2020)

**Impacto:** El TitanRAGAgent no puede responder sobre el 60% de la trayectoria real.

---

## 5. OTROS PROBLEMAS DETECTADOS

| # | Problema | Severidad | Archivo |
|---|---------|-----------|---------|
| P0 | Secciones negras por overflow + observer | Crítico | page.tsx + app.js |
| P0 | TITAN v5.0 en todo el portafolio (debe ser v7.0) | Crítico | index_clean.html |
| P1 | DNA con 7/20 proyectos | Alto | evidence-dna.json |
| P1 | SEO: todo el contenido en iframe, no indexable | Alto | Arquitectura |
| P1 | Hero: roles en pipe-list, sin propuesta de valor | Alto | index_clean.html |
| P1 | 3 CTAs sin jerarquía (Expediente, Dossier, One-Pager) | Alto | index_clean.html |
| P1 | SSOT_Master_Evidence.md está vacío (0 líneas) | Alto | public/original/data/ |
| P2 | Cache-busting manual ?v=91 (no automatizado) | Medio | page.tsx |
| P2 | "SELECTIVE ONBOARDING ACTIVE" — ambiguo | Medio | index_clean.html |
| P2 | netlify.toml redirect /* → /index.html puede crear conflictos | Medio | netlify.toml |
| P3 | orchestrator.js corre antes del build (node scripts/...) | Bajo | netlify.toml |

---

## 6. LO QUE FUNCIONA Y SE CONSERVA EN v2

| Componente | Estado | Acción en v2 |
|-----------|--------|-------------|
| InquisitorHUD.tsx | ✅ Funciona bien | Migrar como componente nativo |
| TitanRAGAgent.tsx | ✅ Funciona bien | Extender con más proyectos en DNA |
| StaffAtoms.tsx / LiquidFAB | ✅ Funciona bien | Conservar |
| Identidad visual dark | ✅ Coherente | Mantener paleta y tipografía |
| Toggle ES/EN | ✅ Implementado en HTML | Re-implementar como contexto React |
| Bilingual engine (app.js) | ✅ Funciona | Migrar a i18n nativo Next.js |
| WCAG A11Y toggles | ✅ 5 modos | Migrar al nuevo componente |
| Sistema de capas (layer-home, layer-ssot) | ✅ Concepto sólido | Re-implementar con Next.js router |

---

## 7. ESTRATEGIA DE RAMAS

```
github.com/MauroPX/excalibur
  ├── main  →  Netlify (portafolio actual — sigue operativo)
  └── v2    →  Vercel (reconstrucción desacoplada — nueva)
```

### Reglas
- `main` no se toca hasta que `v2` esté lista para producción
- `v2` se despliega en Vercel con preview URL propia
- Cuando `v2` esté lista: dominio apunta a Vercel, `main` se archiva
- Los fixes urgentes (P0) se hacen en `main` y se cherry-pick a `v2`

---

## 8. ARQUITECTURA v2 — STACK DESACOPLADO

```
┌─────────────────────────────────────────────────────────────┐
│                        FRONTEND (v2)                        │
│  Next.js 15 · React 19 · TypeScript · Tailwind 4           │
│  Vercel (rama v2) · Branch URL propia                       │
│                                                             │
│  src/app/                                                   │
│  ├── (portfolio)/                                           │
│  │   ├── page.tsx           ← Home con 4 entradas nav       │
│  │   ├── cases/[id]/        ← Casos de estudio              │
│  │   └── titan/             ← TITAN v7.0 showcase           │
│  ├── api/                                                   │
│  │   ├── chat/route.ts      ← Claude API (RAG agent)        │
│  │   └── contact/route.ts   ← Formulario contacto           │
│  └── components/                                            │
│      ├── nav/               ← Sistema navegación dual       │
│      ├── hero/              ← Hero con propuesta de valor   │
│      ├── cases/             ← Cards de proyectos            │
│      ├── titan/             ← Sección TITAN v7.0            │
│      ├── a11y/              ← InquisitorHUD (nativo)        │
│      └── ai/                ← TitanRAGAgent (nativo)        │
└─────────────────────────────────────────────────────────────┘
                              ↕ REST API / JSON
┌─────────────────────────────────────────────────────────────┐
│                        BACKEND (v2)                         │
│  Strapi v5 · PostgreSQL 16 + pgvector                       │
│  Railway (backend) · Cloudflare R2 (assets)                 │
│                                                             │
│  Content Types:                                             │
│  ├── Project       ← Casos de estudio PAR + métricas        │
│  ├── Experience    ← Experiencia laboral (SSOT)             │
│  ├── Skill         ← Skills por capa                        │
│  ├── TitanModule   ← Módulos TITAN v7.0                     │
│  └── Translation   ← Contenido ES/EN por sección           │
└─────────────────────────────────────────────────────────────┘
                              ↕ pgvector
┌─────────────────────────────────────────────────────────────┐
│                     RAG / IA (v2)                           │
│  Claude Sonnet 4.6 API · pgvector embeddings                │
│  Evidence DNA completa (20 proyectos)                       │
│  TitanRAGAgent mejorado con contexto real                   │
└─────────────────────────────────────────────────────────────┘
```

---

## 9. CONTENT TYPES STRAPI v5 (esquema inicial)

### Project
```typescript
{
  id: string               // BBVA_Master_Ecosystem
  client: string           // BBVA Colombia & Panamá
  sector: string           // Banca & Fintech
  year_start: number
  year_end: number | null
  role: string             // Staff Product Architect
  context: string          // descripción del contexto
  par: {
    problem: string        // [P] Problema
    action: string         // [A] Acción
    result: string         // [R] Resultado
  }
  metrics: Metric[]        // [{label, value, unit}]
  skills: string[]
  methodologies: string[]
  stack: string[]
  sector_tags: string[]
  featured: boolean
  // i18n: es + en
}
```

### TitanModule
```typescript
{
  version: string          // v7.0
  hub_name: string         // MEGA_01, MEGA_02...
  hub_title: string        // Críticos, A11Y, Infra...
  description_es: string
  description_en: string
  commands: Command[]
  momentum: string         // M0, M1...M5
}
```

---

## 10. SPRINTS DE EJECUCIÓN

### Sprint 0 — Setup (2-3 días)
```bash
# 1. Crear rama v2
git checkout -b v2
git push origin v2

# 2. Limpiar para Next.js nativo
rm -rf public/original/
rm -f scripts/orchestrator.js

# 3. Actualizar package.json
# next.config.ts sin iframe, Tailwind config, i18n

# 4. Conectar a Vercel
# vercel --prod (rama v2 → Vercel)
```

**Entregables:** Rama v2 en Vercel con blank Next.js. `main` sigue en Netlify intacto.

---

### Sprint 1 — Estructura base + CMS (1 semana)
- [ ] Strapi v5 en Railway con PostgreSQL + pgvector
- [ ] Content Types: Project, Experience, TitanModule, Translation
- [ ] Poblar DNA completa: 20 proyectos desde la SSOT
- [ ] API REST funcional desde Next.js
- [ ] Layout base: navbar, footer, toggle ES/EN (next-intl)
- [ ] globals.css con tokens M3 del diseño actual

---

### Sprint 2 — Componentes core (1 semana)
- [ ] Hero: propuesta de valor + una métrica + CTA único
- [ ] Sistema de navegación dual (las 4 entradas que diseñamos)
- [ ] Cards de proyectos desde Strapi API
- [ ] Sección TITAN v7.0 actualizada
- [ ] InquisitorHUD migrado a componente nativo
- [ ] TitanRAGAgent con Claude API + pgvector real

---

### Sprint 3 — Casos de estudio + polish (1 semana)
- [ ] Páginas individuales por proyecto (/cases/[id])
- [ ] Vista end-to-end por proyecto (M0→M5)
- [ ] axe-core como gate en CI/CD (GitHub Actions)
- [ ] WCAG 2.2 verificado con NVDA + VoiceOver
- [ ] SEO: meta tags, OG, schema.org, sitemap
- [ ] Performance: LCP < 1.5s, CLS < 0.1

---

### Sprint 4 — Deploy producción
- [ ] Dominio propio apuntando a Vercel
- [ ] Cloudflare WAF activo
- [ ] CONFORMANCE_STATEMENT WCAG 2.2 AAA generada
- [ ] `main` archivado o redirigido

---

## 11. FIX URGENTE PARA `main` (mientras tanto)

Si se necesita el portafolio funcional en las próximas 24h sin esperar la v2:

```tsx
// src/app/page.tsx — cambiar línea 30:

// ANTES (roto):
<div style={{ position: 'fixed', inset: 0, width: '100vw', 
              height: '100vh', overflow: 'hidden', background: '#080C12' }}>

// DESPUÉS (fix):
<div style={{ position: 'fixed', inset: 0, width: '100vw', 
              height: '100vh', overflow: 'auto', background: '#080C12' }}>
//                                                    ↑ cambiar hidden → auto
```

```js
// public/original/js/app.js — cambiar el IntersectionObserver:
// ANTES:
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

// DESPUÉS (con reducción de threshold para iframe):
}, { threshold: 0.01, rootMargin: '0px 0px 0px 0px' });

// O mejor: agregar fallback para reduced motion + forzar visible en iframe:
if (window.self !== window.top) {
  // Estamos dentro de un iframe — forzar visible en todas las secciones
  document.querySelectorAll('.reveal').forEach(function(el){ 
    el.classList.add('visible'); 
  });
} else if (!reduced) {
  // Comportamiento normal con observer
  var obs = new IntersectionObserver(...);
}
```

Tiempo estimado: **30 minutos**. Deploy a Netlify automático.

---

## 12. VARIABLES DE ENTORNO NECESARIAS (v2)

```env
# .env.local (frontend)
NEXT_PUBLIC_STRAPI_URL=https://api.maurogomez.design
NEXT_PUBLIC_SITE_URL=https://maurogomez.design
ANTHROPIC_API_KEY=sk-ant-...
NEXT_PUBLIC_DEFAULT_LANG=en

# Railway (backend Strapi)
DATABASE_URL=postgresql://...
DATABASE_HOST=...
DATABASE_NAME=excalibur_v2
PGVECTOR_ENABLED=true
APP_KEYS=...
JWT_SECRET=...
ADMIN_JWT_SECRET=...
```

---

## RESUMEN EJECUTIVO

| Dimensión | Estado actual (main) | Estado objetivo (v2) |
|-----------|---------------------|---------------------|
| Arquitectura | Next.js wrapper + iframe HTML | Next.js nativo desacoplado |
| Backend | Ninguno (JSON estático) | Strapi v5 + PostgreSQL + pgvector |
| Deploy | Netlify (main) | Vercel (v2) + Netlify sigue en main |
| Secciones visibles | ~40% (resto en negro) | 100% (sin iframe) |
| Proyectos en RAG | 7 de ~20 | 20+ desde Strapi |
| SEO | Invisible (en iframe) | Completo (DOM nativo) |
| TITAN versión | v5.0 (desactualizado) | v7.0 (actual) |
| i18n | JS manual en HTML | next-intl nativo |
| A11Y | Widget externo | Nativo + CI/CD gate |
| Tiempo estimado v2 | — | 3-4 semanas |
