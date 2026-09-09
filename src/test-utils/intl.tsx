import React from 'react'
import { render, type RenderOptions } from '@testing-library/react'
import { NextIntlClientProvider, type AbstractIntlMessages } from 'next-intl'
import esMessages from '@/i18n/messages/es.json'

// AbstractIntlMessages no admite arrays como valor de hoja (ej. titan.suggestions:
// string[]) — limitación conocida de los tipos de next-intl vs el JSON real.
const messages = esMessages as unknown as AbstractIntlMessages

/** Wrapper con NextIntlClientProvider para componentes 'use client' que usan useTranslations. */
export const IntlWrapper: React.FC<{ children: React.ReactNode; locale?: string }> = ({
  children,
  locale = 'es',
}) => (
  <NextIntlClientProvider locale={locale} messages={messages}>
    {children}
  </NextIntlClientProvider>
)

/** render() de Testing Library envuelto en IntlWrapper. */
export function renderWithIntl(ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return render(ui, { wrapper: IntlWrapper, ...options })
}
