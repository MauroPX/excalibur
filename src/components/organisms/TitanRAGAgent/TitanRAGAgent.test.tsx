import { screen, waitFor } from '@testing-library/react'
import { renderWithIntl as render } from '@/test-utils/intl'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { axe, toHaveNoViolations } from 'jest-axe'
import { TitanRAGAgent } from './index'

expect.extend(toHaveNoViolations)

const DEFAULT_SUGGESTIONS = [
  '¿Cuál fue tu mayor impacto en Rappi?',
  '¿Qué arquitecturas has diseñado?',
  '¿Cómo lideras equipos remotos?',
  '¿Qué stack usas en producción?',
]

describe('TitanRAGAgent', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  // CA-001: Estado idle — sugerencias visibles por defecto
  it('CA-001: renderiza sugerencias por defecto en estado idle', () => {
    render(<TitanRAGAgent initialSuggestions={DEFAULT_SUGGESTIONS} />)
    expect(screen.getByText('¿Cuál fue tu mayor impacto en Rappi?')).toBeDefined()
    expect(screen.getByText('¿Qué arquitecturas has diseñado?')).toBeDefined()
    expect(screen.getByText('¿Cómo lideras equipos remotos?')).toBeDefined()
    expect(screen.getByText('¿Qué stack usas en producción?')).toBeDefined()
  })

  // CA-002: Accesibilidad del input — aria-label obligatorio (WCAG 1.3.1 / 4.1.2)
  it('CA-002: el input tiene aria-label accesible para lectores de pantalla', () => {
    render(<TitanRAGAgent />)
    const input = screen.getByRole('textbox')
    expect(input.getAttribute('aria-label')).toBeTruthy()
  })

  // CA-003: Estado loading — aria-busy="true" mientras espera respuesta (WCAG 4.1.3)
  it('CA-003: muestra aria-busy="true" en el contenedor durante el loading', async () => {
    const user = userEvent.setup()

    // Fetch que nunca resuelve para mantener el estado loading
    global.fetch = vi.fn().mockImplementation(
      () => new Promise(() => {})
    ) as unknown as typeof fetch

    render(<TitanRAGAgent placeholder="Pregunta algo..." />)

    const input = screen.getByRole('textbox')
    await user.type(input, '¿Cuál fue tu mayor impacto?')

    const submitButton = screen.getByRole('button', { name: /enviar|send|submit/i })
    await user.click(submitButton)

    await waitFor(() => {
      const busyEl = document.querySelector('[aria-busy="true"]')
      expect(busyEl).not.toBeNull()
    })
  })

  // CA-004: Estado response — muestra respuesta cuando fetch tiene éxito
  it('CA-004: muestra la respuesta del agente cuando fetch resuelve correctamente', async () => {
    const user = userEvent.setup()

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ response: 'Impacto: +$3.2M ARR en Rappi' }),
    } as Response) as unknown as typeof fetch

    render(<TitanRAGAgent />)

    const input = screen.getByRole('textbox')
    await user.type(input, '¿Cuál fue tu mayor impacto en Rappi?')

    const submitButton = screen.getByRole('button', { name: /enviar|send|submit/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/Impacto: \+\$3\.2M ARR en Rappi/i)).toBeDefined()
    })
  })

  // CA-005: Estado error/fallback — muestra mensaje de fallback cuando fetch falla
  it('CA-005: muestra mensaje de fallback cuando fetch falla por error de red', async () => {
    const user = userEvent.setup()

    global.fetch = vi.fn().mockRejectedValue(
      new Error('Network error')
    ) as unknown as typeof fetch

    render(<TitanRAGAgent />)

    const input = screen.getByRole('textbox')
    await user.type(input, '¿Qué stack usas?')

    const submitButton = screen.getByRole('button', { name: /enviar|send|submit/i })
    await user.click(submitButton)

    await waitFor(() => {
      // El fallback debe ser visible — texto de error o proyectos estáticos
      const fallbackEl =
        screen.queryByRole('alert') ??
        screen.queryByText(/error|falló|intenta|unavailable|fallback/i)
      expect(fallbackEl).not.toBeNull()
    })
  })

  // CA-005b: Estado error/fallback — muestra mensaje cuando el servidor responde con ok: false
  it('CA-005b: muestra fallback cuando el servidor responde con ok: false', async () => {
    const user = userEvent.setup()

    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({ error: 'Internal Server Error' }),
    } as Response) as unknown as typeof fetch

    render(<TitanRAGAgent />)

    const input = screen.getByRole('textbox')
    await user.type(input, '¿Cuál fue tu mayor impacto?')

    const submitButton = screen.getByRole('button', { name: /enviar|send|submit/i })
    await user.click(submitButton)

    await waitFor(() => {
      const fallbackEl =
        screen.queryByRole('alert') ??
        screen.queryByText(/error|falló|intenta|unavailable|fallback/i)
      expect(fallbackEl).not.toBeNull()
    })
  })

  // CA-006: Clicking sugerencia rellena el input
  it('CA-006: clicking una sugerencia rellena el input con ese texto', async () => {
    const user = userEvent.setup()

    render(<TitanRAGAgent initialSuggestions={DEFAULT_SUGGESTIONS} />)

    const suggestion = screen.getByText('¿Qué arquitecturas has diseñado?')
    await user.click(suggestion)

    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input.value).toBe('¿Qué arquitecturas has diseñado?')
  })

  // CA-007: Formulario accesible — debe tener role="form" o aria-label (WCAG 1.3.1)
  it('CA-007: el formulario es accesible con role="form" o aria-label descriptivo', () => {
    render(<TitanRAGAgent />)
    const form =
      screen.queryByRole('form') ??
      document.querySelector('form[aria-label]')
    expect(form).not.toBeNull()
  })

  // CA-008: Placeholder personalizado se aplica al input
  it('CA-008: el placeholder personalizado se aplica correctamente al input', () => {
    render(<TitanRAGAgent placeholder="Escribe tu pregunta aquí..." />)
    const input = screen.getByPlaceholderText('Escribe tu pregunta aquí...')
    expect(input).toBeDefined()
  })

  // CA-009: axe en estado idle — 0 violations (WCAG 2.2 AA)
  it('CA-009: pasa auditoría axe en estado idle sin violations de accesibilidad', async () => {
    const { container } = render(
      <TitanRAGAgent initialSuggestions={DEFAULT_SUGGESTIONS} />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  // CA-010: axe en estado con respuesta visible — 0 violations (WCAG 2.2 AA)
  it('CA-010: pasa auditoría axe en estado con respuesta visible sin violations', async () => {
    const user = userEvent.setup()

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ response: 'Impacto: +$3.2M ARR en Rappi' }),
    } as Response) as unknown as typeof fetch

    const { container } = render(<TitanRAGAgent />)

    const input = screen.getByRole('textbox')
    await user.type(input, '¿Cuál fue tu mayor impacto?')

    const submitButton = screen.getByRole('button', { name: /enviar|send|submit/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/Impacto: \+\$3\.2M ARR en Rappi/i)).toBeDefined()
    })

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
