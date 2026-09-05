'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { initAnalytics, trackPageView } from '@/lib/analytics'

/**
 * Infra — EX-v2-ANALYTICS-001. Inicializa PostHog una vez y emite trackPageView()
 * en cada cambio de ruta (App Router no dispara pageview automático).
 *
 * No renderiza nada visible — mismo patrón que <Analytics /> / <SpeedInsights /> de Vercel.
 * No-op completo si NEXT_PUBLIC_POSTHOG_KEY no está configurada (ver src/lib/analytics.ts).
 * Deliberadamente no usa useSearchParams — evita forzar un Suspense boundary en cada
 * página solo por analytics; el path basta para el funnel de Discovery (TRACKING_PLAN.md).
 */
export function PostHogProvider() {
  const pathname = usePathname()

  useEffect(() => {
    initAnalytics()
  }, [])

  useEffect(() => {
    if (pathname) trackPageView(pathname)
  }, [pathname])

  return null
}

export default PostHogProvider
