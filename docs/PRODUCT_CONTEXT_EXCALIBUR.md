# PRODUCT_CONTEXT — EXCALIBUR v2.0
# Contexto específico del proyecto para cualquier IA del Consejo
# Actualizado: 2026-06-27 | Copiar a: multi-ia/PROJECT_CONTEXT.md del repo
# Este archivo satisface la CONDICIÓN 1 del Protocolo de Contexto TITAN

---

## QUÉ ES

Portafolio profesional de **Leonel Mauricio Gómez Ocampo**, Staff Product
Architect con 10+ años en Colombia·Chile·Panamá·México. No es un portafolio
visual — es **evidencia técnica verificable**: código real, tests reales,
métricas reales, proceso TITAN v7.0 completo como demostración en vivo.

**Diferenciador único:** TitanRAGAgent — IA conversacional que responde
preguntas sobre los proyectos con datos reales. Ningún portafolio Staff
en LATAM tiene esto.

## PARA QUIÉN (APE_DECLARATION_M1 — 3 insights)

```
A1 Reclutador técnico → no puede verificar trabajo real en portafolios
   → resuelve: Storybook live + repos + métricas + este proceso TITAN visible
A2 CTO con legacy/DS caótico → necesita evidencia de contextos difíciles
   → resuelve: caso FDN (Drupal 7→Next.js · LCP 25.2s→2.5s · 654 fallas WCAG)
A3 PM/diseñador LATAM → portafolios son catálogos pasivos, abandona en 2 min
   → resuelve: TitanRAGAgent conversacional
```

## CASOS REALES EN PRODUCCIÓN (slugs: fdn·solidaria·bbva)

```
FDN (GovTech):        LCP -90% (25.2s→2.5s) · 654 fallas WCAG eliminadas · AAA 2024
Solidaria (Insurtech): DS desde cero · 212 tests · 0 axe violations · Chromatic
BBVA CO&PA (Banca):    -75% time-to-market · digitalización 100% Pyme · GEMAS+Brickell
Hero metrics:          +10 años · 4 países · 20+ proyectos · 654 fallas WCAG
```
⚠️ REGLA: NUNCA reintroducir Rappi/Bancolombia/Frubana — eran placeholders falsos.

## ARQUITECTURA REAL

```
src/app/
  page.tsx                Server Component · getTranslations · datos hardcoded
                          (migran a Strapi en M5)
  casos/[slug]/page.tsx   SSG · 3 casos · generateStaticParams
  api/chat/route.ts       Claude Sonnet 4.6 → Gemini 2.0 Flash → fallback estático
                          · timeout 3s · sanitización · SYSTEM_PROMPT con casos reales
  api/health/route.ts     estado de servicios
  privacidad/page.tsx     (pendiente L-M4-7)
src/components/           24 LOCKED: 7 atoms · 7 molecules · 8 organisms · 2 templates
src/theme/
  tokens.ts               darkTokens+lightTokens (30+ c/u) · NO 'use client'
  index.ts                buildTheme() · 'use client' (createTheme usa context)
  ThemeRegistry.tsx       'use client' · useColorMode · localStorage · data-theme
src/data/evidence-dna.json  7/20 proyectos (expandir en L-M5-2)
src/i18n/messages/        en.json + es.json completos
```

## REGLAS IRREVOCABLES DEL DS (DS_CONTRACT.md)

```
1. data-atomic + data-component + className ex-* en CADA raíz
2. SOLO var(--md-sys-color-*) — cero hex (excepción: Mui-disabled documentada)
3. shouldForwardProp en props custom de styled()
4. TS strict — cero any
5. Export named + default
6. Import MUI por módulo: import Button from '@mui/material/Button'
7. Stories: @storybook/nextjs-vite — JAMÁS @storybook/react
8. axe() en cada test · expect.extend(toHaveNoViolations)
9. Átomos NO importan componentes del DS
10. Templates NO fetchan — reciben props (fetch en page.tsx)
+ Templates que importan MUI necesitan 'use client' (bug createContext resuelto)
```

## PALETA (tokens.ts = fuente de verdad · sincronizada a docs/m2)

```
DARK (default): primary #C4BEFF · surface #0D0F1A · CTA #F7AF12
                surfaces 5 niveles: #080A12→#2F3244
LIGHT:          primary #5B4CF5 · surface #FDFCFF · CTA #C4830A
Toggle:         localStorage 'excalibur-theme' + data-theme en <html> + anti-flash script
```

## COMANDOS DEL PROYECTO

```bash
pnpm dev / build / test / storybook
bash multi-ia/workflow_bfl.sh audit          # auditoría 38 checks
bash multi-ia/workflow_bfl.sh full ID Comp lvl  # BFL con Consejo
aider --model ollama/qwen2.5-coder:14b [files]  # CRAFTSMAN
ollama run deepseek-r1:14b                      # INQUISITOR
```

## ENV VARS (Vercel)

```
ANTHROPIC_API_KEY ✅ · GEMINI_API_KEY ⚠️(existe como Gemini_API_Key — fix L-M4-0)
NEXT_PUBLIC_SITE_URL ✅ · NEXT_PUBLIC_STRAPI_URL ⚠️(placeholder hasta Railway)
STRAPI_API_TOKEN ❌(pendiente L-M5-1)
```

## ESTADO E HISTORIA MÍNIMA

```
v1: HTML estático en Netlify (main — congelada, no tocar)
v2: reconstrucción total Next.js — LIVE — M0-M3 LOCKED · M4 45% · M5 0%
Bug histórico clave: createContext SSR — SIEMPRE 'use client' en archivos
que importan MUI y son alcanzados desde Server Components.
Auditoría: 97% (37/38) — único WARN: Strapi/Railway.
Documento rector de cierre: EXCALIBUR_PROMPTS_LOOPS_CIERRE_100.md (18 loops).
```

## ANTI-PATRONES (rechazados sin debate — INQUISITOR)

```
✗ @storybook/react en imports        ✗ hex hardcoded fuera de tokens.ts
✗ any en TypeScript                  ✗ datos inventados (Rappi etc.)
✗ métricas sin fuente en DNA         ✗ fetch dentro de templates
✗ componente sin data-atomic         ✗ test sin axe()
✗ saltar Momentum sin /momentum skip documentado
✗ "lo testeo después" · "el any es temporal" · "WCAG no aplica"
```

# FIN PRODUCT_CONTEXT — pegar en multi-ia/PROJECT_CONTEXT.md del repo
