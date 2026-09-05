import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import { NextIntlClientProvider, type AbstractIntlMessages } from 'next-intl'
import messages from '@/i18n/messages/es.json'
import { LanguageToggle } from './LanguageToggle'

// AbstractIntlMessages no admite arrays como valor de hoja (ej. titan.suggestions:
// string[]) — es una limitación conocida de los tipos de next-intl vs JSON real.
const testMessages = messages as unknown as AbstractIntlMessages

const mockReplace = vi.fn()

vi.mock('@/i18n/navigation', () => ({
  usePathname: () => '/casos/fdn',
  useRouter: () => ({ replace: mockReplace }),
}))

function renderToggle(currentLocale: 'es' | 'en' = 'es') {
  return render(
    <NextIntlClientProvider locale="es" messages={testMessages}>
      <LanguageToggle currentLocale={currentLocale} />
    </NextIntlClientProvider>
  )
}

describe('LanguageToggle', () => {
  beforeEach(() => {
    mockReplace.mockClear()
  })

  it('CA-001: renderiza sin errores', () => {
    renderToggle()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('CA-002: aria-label correcto en es (ofrece cambiar a inglés)', () => {
    renderToggle('es')
    expect(screen.getByRole('button', { name: 'Cambiar a inglés' })).toBeInTheDocument()
  })

  it('CA-002: aria-label correcto en en (ofrece cambiar a español)', () => {
    renderToggle('en')
    expect(screen.getByRole('button', { name: 'Cambiar a español' })).toBeInTheDocument()
  })

  it('CA-003: al hacer click, preserva el pathname actual y cambia el locale', () => {
    renderToggle('es')
    fireEvent.click(screen.getByRole('button'))
    expect(mockReplace).toHaveBeenCalledWith('/casos/fdn', { locale: 'en' })
  })

  it('CA-004: 0 violaciones de accesibilidad', async () => {
    const { container } = renderToggle()
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
