import type { Metadata } from 'next'
import { getLocale, getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import ThemeRegistry from '@/theme/ThemeRegistry'

export const metadata: Metadata = {
  title: 'MauricioGO Portafolio v2 — Staff Product Architect',
  description: 'Leonel Mauricio Gómez Ocampo — Staff Product Architect. Diseño, construyo y escalo productos digitales.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `(function(){var t=localStorage.getItem('excalibur-theme');if(!t){t=window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);})()`
        }} />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeRegistry>
            {children}
            <Analytics />
            <SpeedInsights />
          </ThemeRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
