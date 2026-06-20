# OBSERVABILITY_PLAN.md
# EXCALIBUR v2.0 — Plan de Observabilidad
# TITAN v7.0 | M2 | 2026-06-15
# Nivel: B (vivo — se activa en M4)

---

## Pilares de observabilidad

```
Métricas    → Vercel Analytics · Web Vitals en tiempo real
Logs        → Vercel Functions logs · Strapi logs en Railway
Trazas      → PostHog eventos de audiencia y conversión
Errores     → Sentry (frontend + API routes)
A11Y        → axe-core en CI/CD (job 4) + Storybook a11y
Performance → Lighthouse CI en cada PR
```

---

## 1. Métricas de performance (Web Vitals)

### Herramienta: Vercel Analytics (activar desde dashboard)

| Métrica | Objetivo | Alerta si |
|---|---|---|
| LCP (Largest Contentful Paint) | < 1.5s | > 2.5s |
| CLS (Cumulative Layout Shift) | < 0.1 | > 0.25 |
| INP (Interaction to Next Paint) | < 200ms | > 500ms |
| TTFB (Time to First Byte) | < 600ms | > 1000ms |
| FCP (First Contentful Paint) | < 1.0s | > 1.8s |

```typescript
// src/app/layout.tsx — activar Web Vitals reporting
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
```

---

## 2. Analytics de producto (PostHog)

### Eventos a trackear

```typescript
// src/lib/analytics.ts

// Audiencia seleccionada
posthog.capture('audience_selected', {
  profile: 'cliente' | 'reclutador' | 'comunidad' | 'normal',
  method: 'self-select' | 'auto-detected',
})

// Tab de NavSystem clickeado
posthog.capture('navsystem_tab_clicked', {
  tab: 'A' | 'B' | 'C' | 'D',
  audience_context: string,
})

// Card de síntoma o rol clickeada
posthog.capture('audience_card_clicked', {
  card_type: 'symptom' | 'role',
  card_id: string,
  destination: string,  // slug del caso de estudio
})

// Conversación con TitanRAGAgent
posthog.capture('titan_query_sent', {
  query_length: number,
  suggestion_used: boolean,
  provider: 'claude' | 'gemini' | 'fallback',
})

// Llegó a un caso de estudio
posthog.capture('case_study_viewed', {
  slug: string,
  from: 'symptom_card' | 'role_card' | 'titan_agent' | 'direct',
})

// CV descargado
posthog.capture('cv_downloaded', {
  type: 'tecnico' | 'ejecutivo',
})

// Contacto iniciado
posthog.capture('contact_initiated', {
  method: 'modal' | 'email_copy' | 'calendar',
})
```

### Funnels a configurar en PostHog

```
Funnel A1 — Cliente:
  Hero → audience_selected(cliente) → navsystem_tab_clicked(A)
  → audience_card_clicked(symptom) → case_study_viewed → contact_initiated

Funnel A2 — Reclutador:
  Hero → audience_selected(reclutador) → navsystem_tab_clicked(B)
  → audience_card_clicked(role) → cv_downloaded

Funnel A4 — Neutral via IA:
  Hero → navsystem_tab_clicked(C) → titan_query_sent
  → case_study_viewed
```

---

## 3. Monitoreo de errores (Sentry)

```typescript
// src/app/api/chat/route.ts — ya implementado via try/catch
// Agregar Sentry cuando esté en M4:

import * as Sentry from '@sentry/nextjs'

// En catch blocks del multi-provider:
Sentry.captureException(error, {
  tags: { provider: 'claude' | 'gemini', endpoint: '/api/chat' },
})
```

**Alertas críticas a configurar:**
- `/api/chat` → error rate > 5% en 5 minutos
- Build fallo en Vercel
- Strapi endpoint no responde > 3 intentos

---

## 4. A11Y continua (en CI/CD)

```yaml
# Ya implementado en .github/workflows/v2.yml
axe:
  name: Axe a11y gate
  needs: [test]
  # Corre: pnpm test --grep "axe"
  # Resultado: 0 violations o el PR no puede mergearse
```

**Métricas de a11y a reportar en M4:**
- Total de componentes con axe test: 14/14
- Violations históricas: 0 (siempre)
- WCAG 2.2 nivel: AA mínimo, AAA objetivo

---

## 5. Lighthouse CI (por PR)

```yaml
# Agregar en .github/workflows/v2.yml — job 8 (post-M3)
lighthouse:
  name: Lighthouse CI
  needs: [build]
  steps:
    - uses: treosh/lighthouse-ci-action@v10
      with:
        urls: ${{ env.VERCEL_PREVIEW_URL }}
        budgetPath: ./lighthouse-budget.json
        uploadArtifacts: true

# lighthouse-budget.json
{
  "ci": {
    "assert": {
      "assertions": {
        "categories:performance": ["error", {"minScore": 0.9}],
        "categories:accessibility": ["error", {"minScore": 1.0}],
        "categories:best-practices": ["error", {"minScore": 0.95}],
        "categories:seo": ["error", {"minScore": 0.95}]
      }
    }
  }
}
```

---

## 6. Health checks

| Endpoint | Tipo | Frecuencia | Alerta |
|---|---|---|---|
| maurogomez.design | HTTP 200 | Cada 5 min | Slack/email si falla 2 veces |
| api.maurogomez.design/api/projects | HTTP 200 | Cada 5 min | Fallback a datos estáticos |
| /api/chat | HTTP 200 con body | Cada 15 min | Solo log (fallback activo) |

```typescript
// src/app/api/health/route.ts
export async function GET() {
  const strapi = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects`)
    .then(r => r.ok ? 'ok' : 'degraded')
    .catch(() => 'unavailable')

  return Response.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    services: { strapi, ai: 'multi-provider-active' },
  })
}
```

---

## Activación por Momentum

| Componente | Cuándo activar |
|---|---|
| Vercel Analytics + Speed Insights | Primer deploy v2 (M3) |
| PostHog eventos básicos | feat/v2-nav-system |
| PostHog funnels | Cuando HomeTemplate esté LOCKED |
| Sentry | M4 (pre-producción) |
| Lighthouse CI | M4 (pre-producción) |
| Health checks externos | Al conectar dominio propio |

---

📍 Momentum: M2 | Artefacto: OBSERVABILITY_PLAN | Nivel: B
Firmado: Leonel Mauricio Gómez Ocampo — Staff Product Architect | 2026-06-15
