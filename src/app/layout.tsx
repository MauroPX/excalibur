import type { Metadata } from 'next'
import './globals.css'
import ThemeRegistry from '@/theme/ThemeRegistry'

export const metadata: Metadata = {
  title: 'MauricioGO Portafolio v2 — Staff Product Architect',
  description: 'Leonel Mauricio Gómez Ocampo — Staff Product Architect. Diseño, construyo y escalo productos digitales.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  )
}
