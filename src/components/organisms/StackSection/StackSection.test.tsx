import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe, toHaveNoViolations } from 'jest-axe'
import { StackSection } from './StackSection'

expect.extend(toHaveNoViolations)

const mockSkills = [
  { name: 'React', level: 9, category: 'frontend' as const },
  { name: 'TypeScript', level: 8, category: 'frontend' as const },
  { name: 'Node.js', level: 7, category: 'backend' as const },
  { name: 'Figma', level: 8, category: 'design' as const },
  { name: 'Python', level: 6, category: 'ai' as const },
]

function renderStack(props = {}) {
  return render(<StackSection skills={mockSkills} {...props} />)
}

describe('StackSection', () => {
  it('CA-001: renderiza sección con data-atomic=organism', () => {
    const { container } = renderStack()
    expect(container.querySelector('[data-atomic="organism"]')).toBeInTheDocument()
    expect(container.querySelector('[data-component="StackSection"]')).toBeInTheDocument()
  })

  it('CA-001: renderiza título por defecto "Stack técnico"', () => {
    renderStack()
    expect(screen.getByRole('heading', { name: /Stack técnico/i })).toBeInTheDocument()
  })

  it('CA-002: acepta título personalizado', () => {
    renderStack({ title: 'Mi stack' })
    expect(screen.getByRole('heading', { name: /Mi stack/i })).toBeInTheDocument()
  })

  it('CA-003: zona radar tiene aria-hidden=true', () => {
    const { container } = renderStack()
    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument()
  })

  it('CA-004: tabla sr-only accesible para el radar', () => {
    const { container } = renderStack()
    const table = container.querySelector('table.sr-only')
    expect(table).toBeInTheDocument()
    expect(table).toHaveAttribute('aria-label', 'Datos del stack técnico')
  })

  it('CA-004: tabla contiene headers y rows de habilidades', () => {
    const { container } = renderStack()
    const rows = container.querySelectorAll('table tbody tr')
    expect(rows).toHaveLength(5)
  })

  it('CA-005: muestra nombres de skills en la tabla', () => {
    renderStack()
    expect(screen.getAllByText('React').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('TypeScript').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Node.js').length).toBeGreaterThanOrEqual(1)
  })

  it('CA-006: agrupa por categorías', () => {
    const { container } = renderStack()
    expect(container.querySelector('.ex-stack-section--frontend')).toBeInTheDocument()
    expect(container.querySelector('.ex-stack-section--backend')).toBeInTheDocument()
    expect(container.querySelector('.ex-stack-section--design')).toBeInTheDocument()
  })

  it('CA-007: no muestra categorías vacías', () => {
    const { container } = renderStack()
    expect(container.querySelector('.ex-stack-section--process')).toBeNull()
  })

  it('axe: 0 violations', async () => {
    const { container } = renderStack()
    expect(await axe(container)).toHaveNoViolations()
  })
})
