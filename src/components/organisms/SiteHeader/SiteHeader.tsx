'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Box from '@mui/material/Box'
import { Link, usePathname } from '@/i18n/navigation'
import { LanguageToggle } from '@/components/atoms/LanguageToggle'
import { ThemeToggle } from '@/components/atoms/ThemeToggle'
import { ContrastToggle } from '@/components/atoms/ContrastToggle/ContrastToggle'
import type { AppLocale } from '@/i18n/routing'

export interface SiteHeaderProps {
  currentLocale: AppLocale
}

interface NavLink {
  key: 'cases' | 'techTests' | 'methodology' | 'excalibur'
  href: string
  /** prefijo de ruta que marca el enlace como activo (aria-current) */
  match?: string
}

const LINKS: NavLink[] = [
  { key: 'cases', href: '/#casos' },
  { key: 'techTests', href: '/pruebas-tecnicas', match: '/pruebas-tecnicas' },
  { key: 'methodology', href: '/metodologia', match: '/metodologia' },
  { key: 'excalibur', href: '/excalibur', match: '/excalibur' },
]

/**
 * Organismo — EX-v2-ORG-012. Cabecera de sitio persistente: marca (→ home) +
 * enlaces a las secciones/páginas que antes eran huérfanas (Casos, Pruebas
 * técnicas, Metodología, EXCALIBUR) + los controles de idioma/tema/contraste.
 * Sustituye a la `.ex-controls-bar` flotante del layout.
 */
export const SiteHeader: React.FC<SiteHeaderProps> = ({ currentLocale }) => {
  const t = useTranslations('nav')
  const pathname = usePathname()

  return (
    <Box
      component="header"
      data-atomic="organism"
      data-component="SiteHeader"
      className="ex-site-header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        backgroundColor: 'var(--md-sys-color-surface-container)',
        borderBottom: '1px solid var(--md-sys-color-outline-variant)',
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 4 },
          minHeight: 56,
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 1, sm: 2 },
        }}
      >
        <Box
          component={Link}
          href="/"
          aria-label={t('brandLabel')}
          className="ex-site-header__brand"
          sx={{
            fontWeight: 800,
            fontSize: '0.95rem',
            letterSpacing: '0.02em',
            color: 'var(--md-sys-color-on-surface)',
            textDecoration: 'none',
            flexShrink: 0,
            '&:focus-visible': { outline: '2px solid var(--md-sys-color-primary)', outlineOffset: '2px' },
          }}
        >
          MauricioGO
        </Box>

        <Box
          component="nav"
          aria-label={t('primaryLabel')}
          className="ex-site-header__nav"
          sx={{
            flex: 1,
            minWidth: 0,
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 1.5, sm: 2, md: 2.5 },
            overflowX: 'auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {LINKS.map(({ key, href, match }) => {
            const active = match ? pathname.startsWith(match) : false
            return (
              <Box
                key={key}
                component={Link}
                href={href}
                aria-current={active ? 'page' : undefined}
                className="ex-site-header__link"
                sx={{
                  whiteSpace: 'nowrap',
                  fontSize: '0.875rem',
                  fontWeight: active ? 700 : 500,
                  color: active ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-on-surface)',
                  textDecoration: 'none',
                  py: 0.5,
                  borderBottom: active
                    ? '2px solid var(--md-sys-color-primary)'
                    : '2px solid transparent',
                  '&:hover': { color: 'var(--md-sys-color-primary)' },
                  '&:focus-visible': { outline: '2px solid var(--md-sys-color-primary)', outlineOffset: '2px' },
                }}
              >
                {t(`links.${key}`)}
              </Box>
            )
          })}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25, flexShrink: 0 }}>
          <LanguageToggle currentLocale={currentLocale} />
          <ThemeToggle />
          <ContrastToggle />
        </Box>
      </Box>
    </Box>
  )
}

export default SiteHeader
