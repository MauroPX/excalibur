'use client'
import React from 'react'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from '@/i18n/navigation'
import type { AppLocale } from '@/i18n/routing'

export interface LanguageToggleProps {
  /** Locale activo — viene del segmento [locale] de la ruta */
  currentLocale: AppLocale
}

/**
 * Átomo — EX-v2-I18N-ROUTING-001. Alterna es/en preservando la ruta actual
 * (usa el router consciente de locale de src/i18n/navigation.ts, no next/navigation
 * a secas — así el toggle funciona igual en / que en /casos/fdn).
 */
export function LanguageToggle({ currentLocale }: LanguageToggleProps) {
  const t = useTranslations('languageToggle')
  const pathname = usePathname()
  const router = useRouter()
  const nextLocale: AppLocale = currentLocale === 'es' ? 'en' : 'es'
  const label = currentLocale === 'es' ? t('switchToEnglish') : t('switchToSpanish')

  return (
    <IconButton
      onClick={() => router.replace(pathname, { locale: nextLocale })}
      aria-label={label}
      data-atomic="atom"
      data-component="LanguageToggle"
      className="ex-language-toggle"
      sx={{
        color: 'var(--md-sys-color-on-surface)',
        '&:hover': {
          backgroundColor: 'var(--md-sys-color-surface-container)',
        },
      }}
    >
      <Typography component="span" aria-hidden="true" sx={{ fontWeight: 700, fontSize: '0.75rem' }}>
        {currentLocale.toUpperCase()}
      </Typography>
    </IconButton>
  )
}

export default LanguageToggle
