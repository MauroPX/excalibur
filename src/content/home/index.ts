/**
 * Barrel bilingüe de la portada (Fase G, Opción 2).
 * - `export * from './es'` → compat total: tipos + constantes ES para stories,
 *   componentes sin locale y tests que hoy importan de '@/content/home'.
 * - `getHome(locale)` → datos del locale activo (EN cae a ES mientras `./en`
 *   sea un stub).
 */
import type { AppLocale } from '@/i18n/routing'
import * as esHome from './es'
import * as enHome from './en'

export * from './es'

export function getHome(locale: AppLocale) {
  const src = locale === 'en' ? enHome : esHome
  return {
    FAQ_ITEMS: src.FAQ_ITEMS,
    STACK_CATEGORIES: src.STACK_CATEGORIES,
    INDUSTRIES: src.INDUSTRIES,
    FLAGSHIP: src.FLAGSHIP,
  }
}
