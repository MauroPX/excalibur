# ADR-006 — Analytics de producto
# EXCALIBUR v2.0 | TITAN v7.0 | 2026-09-04
# Estado: ACCEPTED | Nivel: A (inmutable sin RFC)

## Decisión
**PostHog como única plataforma de product analytics — no dual dispatch con Amplitude.**

Un solo SDK (`posthog-js`), inicializado una vez, detrás de un wrapper propio
(`src/lib/analytics.ts`) que toda la UI usa vía `track()` / `trackPageView()` /
`trackConversion()` — ningún componente llama al SDK directo.

## Contexto

El work-stream SYNC-001 dejó un borrador (`docs/m3/drafts/analytics.ts.draft`, descartado)
que proponía **PostHog + Amplitude** en dual dispatch. Se evaluó y se descarta:

| Criterio | Dual (descartado) | PostHog solo (decidido) |
|---|---|---|
| Bundle | ~55 KB gz (2 SDKs) | ~28 KB gz |
| Env vars | 4 | 2 |
| Superficie de PII | doble | simple |
| Qué cubre Amplitude que PostHog no cubra a esta escala | nada | — |
| Free tier | — | 1M eventos/mes — un portafolio no llega al 1% |

`.env.local.example` ya traía `NEXT_PUBLIC_POSTHOG_KEY` / `NEXT_PUBLIC_POSTHOG_HOST`
comentados desde antes de este ADR — confirma que PostHog era la dirección ya prevista.

`@vercel/analytics` + `@vercel/speed-insights` (ya instalados) **se mantienen** — no compiten:
Speed Insights es RUM de Web Vitals; Vercel Analytics es un respaldo de pageviews de muy bajo
costo. PostHog es la capa de producto (funnels, session replay, feature flags).

## Arquitectura

```
Componente UI → track(evento, props) → src/lib/analytics.ts → sanitizeProperties() (E3) → PostHog
src/components/infra/PostHogProvider  → posthog.init() una vez + trackPageView() en cada ruta (App Router)
```

- Plan de eventos: `docs/m3/analytics/TRACKING_PLAN.md` (4 funnels + evento compuesto `high_intent_signal`).
- Contrato de componente: `docs/m3/blueprints/BLUEPRINT_SPEC_EX-v2-ANALYTICS-001.json`.

## Gobierno de datos (E3)

- `chat_message_text` → hash SHA-256 antes del dispatch (nunca en claro).
- `contact_email` → nunca se envía; solo booleano de éxito.
- `person_profiles: 'identified_only'` — sin perfil para visitantes anónimos.
- `capture_pageview: false`, `autocapture: false` — solo se registra lo que el wrapper emite explícitamente.
- Masking de replay activo en `input`/`textarea`/`[type=email]`; `/privacidad` excluida del replay.
- No se inicializa en SSR (`typeof window === 'undefined'` → no-op) ni sin `NEXT_PUBLIC_POSTHOG_KEY` configurada (no-op silencioso — no rompe build/dev sin la key).

## Fuera de alcance de este ADR

- Banner de consentimiento de cookies — follow-up; hoy la mitigación es `identified_only` +
  masking agresivo, no un banner. Si compliance lo exige, es un ADR/RFC aparte.
- Dashboards de PostHog — se configuran en la plataforma, no en el repo.

## Firmado
Leonel Mauricio Gómez Ocampo — Staff Product Architect | 2026-09-04
(cierre de arquitectura ejecutado por Claude Code, rol Arquitecto, a pedido explícito del IC)
