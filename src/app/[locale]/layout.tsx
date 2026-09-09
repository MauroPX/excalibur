import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale, getMessages, getTranslations } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Box from '@mui/material/Box'
import '../globals.css'
import ThemeRegistry from '@/theme/ThemeRegistry'
import { PostHogProvider } from '@/components/infra/PostHogProvider'
import { ThemeToggle } from '@/components/atoms/ThemeToggle'
import { ContrastToggle } from '@/components/atoms/ContrastToggle/ContrastToggle'
import { LanguageToggle } from '@/components/atoms/LanguageToggle'
import { ColorRolesHUD } from '@/components/organisms/ColorRolesHUD'
import { SiteJsonLd } from '@/components/infra/JsonLd'
import { routing, type AppLocale } from '@/i18n/routing'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://excalibur-six-chi.vercel.app'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t('title'),
      template: `%s | ${t('siteName')}`,
    },
    description: t('description'),
    keywords: [
      'Staff Product Architect', 'Product Manager', 'UX Engineer',
      'Design Systems', 'WCAG AAA', 'Next.js', 'Colombia', 'LATAM',
    ],
    alternates: {
      canonical: locale === routing.defaultLocale ? '/' : `/${locale}`,
      languages: {
        es: '/',
        en: '/en',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'es' ? 'es_CO' : 'en_US',
      alternateLocale: locale === 'es' ? 'en_US' : 'es_CO',
      siteName: t('siteName'),
      title: t('title'),
      description: t('description'),
      url: locale === routing.defaultLocale ? '/' : `/${locale}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
    robots: { index: true, follow: true },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!routing.locales.includes(locale as AppLocale)) notFound()
  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(){var d=document.documentElement;var t=localStorage.getItem('excalibur-theme');if(t!=='dark'&&t!=='light'){t=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';}d.setAttribute('data-theme',t);var c=localStorage.getItem('excalibur-contrast');if(c!=='medium'&&c!=='high'){if(window.matchMedia('(prefers-contrast:more)').matches)c='high';else c='base';}if(c==='medium'||c==='high')d.setAttribute('data-contrast',c);})()`
        }} />
        <SiteJsonLd locale={locale} />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeRegistry>
            <Box
              component="div"
              className="ex-controls-bar"
              sx={{
                position: 'fixed', top: 8, right: 8, zIndex: 9998,
                display: 'flex', gap: 0.5,
                backgroundColor: 'var(--md-sys-color-surface-container-high)',
                borderRadius: 3, p: 0.5, boxShadow: 2,
              }}
            >
              <LanguageToggle currentLocale={locale as AppLocale} />
              <ThemeToggle />
              <ContrastToggle />
            </Box>
            {children}
            <Analytics />
            <SpeedInsights />
            <PostHogProvider />
            {/* FAB abajo-izquierda: panel con los roles de color M3 del esquema
                activo. Ligado a useColorMode() → al cambiar light/dark en el
                botón de tema, el panel refleja ese esquema. */}
            <ColorRolesHUD enabled />
          </ThemeRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
