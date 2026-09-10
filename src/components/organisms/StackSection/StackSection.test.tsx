import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithIntl as render } from '@/test-utils/intl'
import { describe, it, expect } from 'vitest'
import { axe, toHaveNoViolations } from 'jest-axe'
import { StackSection } from './StackSection'
import { STACK_CATEGORIES } from '@/content/home'

expect.extend(toHaveNoViolations)

function renderStack(props = {}) {
  return render(<StackSection categories={STACK_CATEGORIES} {...props} />)
}

describe('StackSection v2.0.0', () => {
  it('CA-001: sección con data-atomic=organism + <h2>', () => {
    const { container } = renderStack()
    expect(container.querySelector('[data-component="StackSection"]')).toHaveAttribute('data-atomic', 'organism')
    expect(screen.getByRole('heading', { level: 2, name: /Stack y métodos/i })).toBeInTheDocument()
  })

  it('CA-002: acepta título personalizado', () => {
    renderStack({ title: 'Mi stack' })
    expect(screen.getByRole('heading', { name: /Mi stack/i })).toBeInTheDocument()
  })

  it('CA-003: todas las categorías reales se renderizan con su ícono y label', () => {
    const { container } = renderStack()
    for (const c of STACK_CATEGORIES) {
      expect(container.querySelector(`.ex-stack-section--${c.id}`)).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 3, name: new RegExp(c.label) })).toBeInTheDocument()
    }
  })

  it('CA-004: NO se renderiza ningún "%" de nivel (dato fabricado eliminado en v2)', () => {
    renderStack()
    expect(document.body.textContent).not.toMatch(/\d{1,3}\s?%/)
  })

  it('CA-005: cada ítem del stack aparece como chip real (sin nivel)', () => {
    renderStack()
    expect(screen.getByText('Claude API')).toBeInTheDocument()
    expect(screen.getByText('WCAG 2.2 AA/AAA')).toBeInTheDocument()
    expect(screen.getByText('TITAN v7.0 (autor)')).toBeInTheDocument()
  })

  it('CA-006: muestra "Aplicado en N casos" con el conteo real (appliedIn.length) por categoría', () => {
    const { container } = renderStack()
    for (const c of STACK_CATEGORIES) {
      const block = container.querySelector(`.ex-stack-section--${c.id}`)!
      const expected = `Aplicado en ${c.appliedIn.length} ${c.appliedIn.length === 1 ? 'caso' : 'casos'}`
      expect(block.textContent).toContain(expected)
    }
  })

  it('CA-007: radar aria-hidden + tabla sr-only con el mismo dato', () => {
    const { container } = renderStack()
    expect(container.querySelector('.ex-stack-section__radar')).toHaveAttribute('aria-hidden', 'true')
    const table = container.querySelector('.sr-only table')
    expect(table).toBeInTheDocument()
    expect(table!.querySelectorAll('tbody tr')).toHaveLength(STACK_CATEGORIES.length)
  })

  it('axe: 0 violations', async () => {
    const { container } = renderStack()
    expect(await axe(container)).toHaveNoViolations()
  })
})
