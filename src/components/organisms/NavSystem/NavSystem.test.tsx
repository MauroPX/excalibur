import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { axe, toHaveNoViolations } from 'jest-axe'
import NavSystem from './NavSystem' // Changed import statement to be the first line

expect.extend(toHaveNoViolations)

vi.mock('@/components/molecules/AudienceCard', () => ({
  AudienceCard: ({ title, type }: { title: string; type: string }) => (
    <article data-testid={`audience-card-${type}`}>{title}</article>
  ),
}))
vi.mock('@/components/organisms/TitanRAGAgent', () => ({
  TitanRAGAgent: () => <div data-testid="titan-rag-agent">TitanRAGAgent</div>,
}))

const mockSymptomCards = [
  { title: 'Sistema legacy', description: 'Sistema viejo sin docs' },
  { title: 'Conversión baja', description: 'Embudo con pérdida' },
]
const mockRoleCards = [
  { title: 'CTO', description: 'Para CTOs' },
  { title: 'Product Manager', description: 'Para PMs' },
]
const mockProjects = [
  { slug: 'p1', title: 'Proyecto A', summary: 'Desc A', tags: ['ia'] },
]

function renderNav(props = {}) {
  return render(
    <NavSystem symptomCards={mockSymptomCards} roleCards={mockRoleCards} {...props} />
  )
}

describe('NavSystem', () => {
  it('CA-001: renderiza sección con data-atomic=organism', () => {
    const { container } = renderNav()
    expect(container.querySelector('[data-atomic="organism"]')).toBeInTheDocument()
    expect(container.querySelector('[data-component="NavSystem"]')).toBeInTheDocument()
  })

  it('CA-002: renderiza 4 tabs', () => {
    renderNav()
    expect(screen.getByRole('tab', { name: /Por síntoma/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /Por rol/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /Pregúntale a TITAN/i })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: /Explorar/i })).toBeInTheDocument()
  })

  it('CA-003: tab inicial es síntomas (A)', () => {
    renderNav()
    expect(screen.getByRole('tab', { name: /Por síntoma/i })).toHaveAttribute('aria-selected', 'true')
  })

  it('CA-003: defaultTab=B activa tab de roles', () => {
    renderNav({ defaultTab: 'B' })
    expect(screen.getByRole('tab', { name: /Por rol/i })).toHaveAttribute('aria-selected', 'true')
  })

  it('CA-003: defaultTab=C activa tab TITAN', () => {
    renderNav({ defaultTab: 'C' })
    expect(screen.getByRole('tab', { name: /Pregúntale a TITAN/i })).toHaveAttribute('aria-selected', 'true')
  })

  it('CA-004: muestra symptomCards en panel 0', () => {
    renderNav()
    expect(screen.getByText('Sistema legacy')).toBeInTheDocument()
    expect(screen.getByText('Conversión baja')).toBeInTheDocument()
  })

  it('CA-004: click en tab roles muestra roleCards', () => {
    renderNav()
    fireEvent.click(screen.getByRole('tab', { name: /Por rol/i }))
    expect(screen.getByText('CTO')).toBeInTheDocument()
  })

  it('CA-005: click en tab TITAN muestra TitanRAGAgent', () => {
    renderNav()
    fireEvent.click(screen.getByRole('tab', { name: /Pregúntale a TITAN/i }))
    expect(screen.getByTestId('titan-rag-agent')).toBeInTheDocument()
  })

  it('CA-006: panel explorar muestra featuredProjects', () => {
    renderNav({ featuredProjects: mockProjects })
    fireEvent.click(screen.getByRole('tab', { name: /Explorar/i }))
    expect(screen.getByText('Proyecto A')).toBeInTheDocument()
  })

  it('CA-007: aria-label en tablist', () => {
    renderNav()
    expect(screen.getByRole('tablist')).toHaveAttribute('aria-label', 'Navegación por audiencia')
  })

  it('axe: 0 violations', async () => {
    const { container } = renderNav()
    expect(await axe(container)).toHaveNoViolations()
  })
})
