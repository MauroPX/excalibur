import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { WorkTestCard } from './WorkTestCard'

expect.extend(toHaveNoViolations)

const base = {
  slug: 'fleetcontrol',
  title: 'FleetControl — Monitor de Flota en Tiempo Real',
  valor: 'No acepté las restricciones de la IA como definitivas — la diferencia entre usar IA y saber cuándo no seguirla.',
  href: '/pruebas-tecnicas/fleetcontrol',
  badge: { icon: 'wrench' as const, label: 'Prueba técnica' },
  caseType: 'work-test' as const,
  tags: ['Design Engineer', 'WCAG 2.1 AA'],
}

describe('WorkTestCard', () => {
  it('CA-001: <article> etiquetado por el título + badge visible', () => {
    render(<WorkTestCard {...base} />)
    const article = screen.getByRole('article', { name: base.title })
    expect(article).toBeInTheDocument()
    expect(screen.getByText('Prueba técnica')).toBeInTheDocument()
  })

  it('CA-002: un único enlace por card, apuntando a href', () => {
    render(<WorkTestCard {...base} />)
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(1)
    expect(links[0]).toHaveAttribute('href', '/pruebas-tecnicas/fleetcontrol')
    expect(links[0]).toHaveAccessibleName(base.title)
  })

  it('CA-003 / CA-006: modificador de clase según caseType', () => {
    const { container, rerender } = render(<WorkTestCard {...base} />)
    expect(container.querySelector('[data-component="WorkTestCard"]')).toHaveClass('ex-worktest-card--work-test')
    rerender(<WorkTestCard {...base} caseType="meta" badge={{ icon: 'compass', label: 'Caso propio' }} />)
    expect(container.querySelector('[data-component="WorkTestCard"]')).toHaveClass('ex-worktest-card--meta')
  })

  it('CA-005: renderiza valor y tags', () => {
    render(<WorkTestCard {...base} />)
    expect(screen.getByText(/No acepté las restricciones de la IA/)).toBeInTheDocument()
    expect(screen.getByText('Design Engineer')).toBeInTheDocument()
  })

  it('CA-006: data-atomic/data-component/data-slug', () => {
    const { container } = render(<WorkTestCard {...base} />)
    const root = container.querySelector('[data-component="WorkTestCard"]')
    expect(root).toHaveAttribute('data-atomic', 'molecule')
    expect(root).toHaveAttribute('data-slug', 'fleetcontrol')
  })

  it('CA-008: 0 violaciones de accesibilidad', async () => {
    const { container } = render(<WorkTestCard {...base} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
