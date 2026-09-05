import type { Preview } from '@storybook/nextjs-vite'
import React from 'react'
import { NextIntlClientProvider } from 'next-intl'
import messages from '../src/i18n/messages/es.json'

const preview: Preview = {
  // Decorator global — organismos/templates que llaman useTranslations() (CasesSection,
  // ContactSection, HomeTemplate...) rompían en runtime dentro de Storybook (el build
  // solo empaqueta, no renderiza, así que nadie lo había visto). Mismos mensajes reales
  // de es.json que usan los tests (ver commit 4f6ab9e).
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale="es" messages={messages}>
        <Story />
      </NextIntlClientProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'error'
    }
  },
};

export default preview;
