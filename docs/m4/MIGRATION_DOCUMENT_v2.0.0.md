# MIGRATION DOCUMENT — EXCALIBUR v2.0.0
# v1 (HTML estático / Netlify) → v2 (Next.js 15 / Vercel)
# Fecha: 2026-07-02 | TL + PO: Leonel Mauricio Gómez Ocampo

---

## 1. Resumen del cambio

| Dimensión | v1 (main — congelada) | v2 (Vercel — activa) |
|---|---|---|
| Stack | HTML + CSS + JS vanilla | Next.js 15 · React 19 · TypeScript 5 strict |
| Deploy | Netlify (static) | Vercel (SSG + SSR + Edge) |
| Design System | CSS custom | MUI v6 + M3 tokens (30+ variables) |
| Tests | Ninguno | Vitest + Testing Library + jest-axe (171 tests) |
| i18n | Single-language | next-intl ES/EN |
| Accesibilidad | No auditado | WCAG 2.2 AA · 0 violations |
| IA | No | TitanRAGAgent (Claude 4.6 + Gemini 2.0 Flash) |
| Analytics | No | Vercel Analytics + Speed Insights |

---

## 2. Componentes afectados

- **Frontend completo:** 24 componentes UI (7 átomos · 7 moléculas · 8 organismos · 2 templates)
- **Páginas:** `/` · `/casos/[slug]` (SSG × 3) · `/privacidad`
- **APIs:** `/api/chat` (Claude→Gemini→fallback) · `/api/health`
- **Tema:** dark/light toggle con LocalStorage + CSS tokens M3

---

## 3. Pre-requisitos para deploy

Variables de entorno en Vercel (Settings → Environment Variables):

| Variable | Ambiente | Estado |
|---|---|---|
| ANTHROPIC_API_KEY | Production + Preview | ✅ Configurada |
| GEMINI_API_KEY | Production + Preview | ⚠️ Renombrar de `Gemini_API_Key` |
| NEXT_PUBLIC_SITE_URL | Production + Preview | ✅ Configurada |
| NEXT_PUBLIC_DEFAULT_LANG | Production + Preview | ✅ Configurada |
| NEXT_PUBLIC_STRAPI_URL | Production + Preview | ⚠️ Placeholder hasta Railway |
| STRAPI_API_TOKEN | Production + Preview | ❌ Pendiente Railway (M5) |

---

## 4. Secuencia de deploy verificada

```bash
# 1. Merge de feature branch a v2
git checkout v2
git merge feat/v2-sprint-abcd --no-ff

# 2. Vercel auto-build (trigger automático en push a v2)
# Tiempo estimado: 40-50 segundos

# 3. Verificar health check
curl https://excalibur-six-chi.vercel.app/api/health

# 4. Smoke test manual
#    / → Hero + TITAN section visibles
#    /casos/fdn → caso completo visible
#    Chat → TitanRAGAgent responde (aunque sea el fallback)
#    Toggle → dark/light sin flash

# 5. Verificar Chromatic (si hay stories nuevas)
#    chromatic.com → aceptar cambios de baseline
```

---

## 5. Estrategia de rollback

**Tiempo de rollback estimado: < 60 segundos**

```bash
# Opción 1 — Vercel Dashboard (recomendada):
# vercel.com → proyecto excalibur → Deployments
# → seleccionar deploy anterior → "..." → "Promote to Production"

# Opción 2 — CLI:
vercel rollback [deployment-url]
```

**Fallback final:** v1 en Netlify permanece intacta en la rama `main` (CONGELADA).
No borrar ni redeployar main bajo ninguna circunstancia.

---

## 6. Casos de migración de contenido

Los 3 casos del portafolio se migran de `evidence-dna.json` (v1 placeholder) a
datos reales en `page.tsx` (v2 hardcoded → M5 migra a Strapi CMS):

| Caso | v1 | v2 | Estado |
|---|---|---|---|
| FDN | Placeholder genérico | Datos reales: LCP 25.2s→2.5s, 654 WCAG fixes | ✅ LIVE |
| Solidaria | No existía | Datos reales: 212 tests, DS desde cero | ✅ LIVE |
| BBVA | Placeholder | Datos reales: -75% TTM, digitalización Pyme | ✅ LIVE |
| Rappi/Bancolombia | Existían | Eliminados (placeholders falsos) | ✅ LIMPIO |

---

## 7. Comunicación

Proyecto personal — no aplica comunicación a usuarios externos.
El dominio propio (pendiente compra) requerirá actualizar `NEXT_PUBLIC_SITE_URL`
y configurar los DNS en Vercel (< 5 min de downtime).

---

Firmado: Leonel Mauricio Gómez Ocampo — Staff Product Architect + Tech Lead — 2026-07-02
