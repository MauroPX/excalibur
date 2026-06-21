import type { Metadata } from 'next'
import { getLocale, getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
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
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeRegistry>
            {children}
          </ThemeRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
