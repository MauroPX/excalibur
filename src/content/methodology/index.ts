/**
 * Barrel bilingüe de /metodologia (Fase G, Opción 2).
 * `export * from './es'` mantiene compat (tipos + constantes ES);
 * `getMethodology(locale)` sirve el locale activo (EN cae a ES por ahora).
 */
import type { AppLocale } from '@/i18n/routing'
import * as esMethod from './es'
import * as enMethod from './en'

export * from './es'

export function getMethodology(locale: AppLocale) {
  const src = locale === 'en' ? enMethod : esMethod
  return {
    METHODOLOGY_ENTRIES: src.METHODOLOGY_ENTRIES,
    GUIDEWIRE_INSUMO: src.GUIDEWIRE_INSUMO,
  }
}
