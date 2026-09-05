import { defineRouting } from 'next-intl/routing'

/**
 * EX-v2-I18N-ROUTING-001 — configuración única de locales.
 * 'es' sin prefijo (default, coincide con el dominio real hoy), 'en' bajo /en.
 * Ver docs/m1/SEO_AIO_PLAN.md §6 — antes de esto, el locale estaba hardcodeado
 * en src/i18n/request.ts y no existía forma de servir /en/.
 */
export const routing = defineRouting({
  locales: ['es', 'en'],
  defaultLocale: 'es',
  localePrefix: 'as-needed',
})

export type AppLocale = (typeof routing.locales)[number]
