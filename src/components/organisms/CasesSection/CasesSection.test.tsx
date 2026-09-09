import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { axe, toHaveNoViolations } from 'jest-axe'
import { NextIntlClientProvider, type AbstractIntlMessages } from 'next-intl'
import { CasesSection } from './CasesSection'
import messages from '@/i18n/messages/es.json'

expect.extend(toHaveNoViolations)

// AbstractIntlMessages no admite arrays como valor de hoja (ej. titan.suggestions:
// string[]) — es una limitación conocida de los tipos de next-intl vs JSON real.
const testMessages = messages as unknown as AbstractIntlMessages

vi.mock('@/components/molecules/ProjectCard', () => ({
  ProjectCard: ({ title }: { title: string }) => <article data-testid="project-card">{title}</article>,
}))

const mockProjects = [
  { slug: 'p1', title: 'Sistema Legacy', description: 'Migración', tags: ['ia','legacy'], metric: { value: '4x', label: 'velocidad' }, symptomTags: ['legacy'], roleTags: ['staff-architect'], audienceTags: ['cto'] },
  { slug: 'p2', title: 'Conversión', description: 'Embudo', tags: ['ux'], metric: undefined, symptomTags: ['conversion'], roleTags: ['product-manager'], audienceTags: ['pm'] },
  { slug: 'p3', title: 'Accesibilidad', description: 'WCAG', tags: ['a11y'], metric: undefined, symptomTags: ['a11y'], roleTags: ['ux-designer'], audienceTags: ['designer'] },
]

function renderCases(props = {}) {
  return render(
    <NextIntlClientProvider locale="es" messages={testMessages}>
      <CasesSection projects={mockProjects} {...props} />
    </NextIntlClientProvider>
  )
}

describe('CasesSection', () => {
  it('CA-001: renderiza sección con data-atomic=organism', () => {
    const { container } = renderCases()
    expect(container.querySelector('[data-atomic="organism"]')).toBeInTheDocument()
    expect(container.querySelector('[data-component="CasesSection"]')).toBeInTheDocument()
  })

  it('CA-001: renderiza título "Casos de estudio"', () => {
    renderCases()
    expect(screen.getByRole('heading', { name: /Casos de estudio/i })).toBeInTheDocument()
  })

  it('CA-002: muestra todos los proyectos por defecto', () => {
    renderCases()
    expect(screen.getAllByTestId('project-card')).toHaveLength(3)
  })

  it('CA-002: cada card enlaza a /casos/[slug] con aria-label', () => {
    renderCases()
    const link = screen.getByRole('link', { name: 'Ver el caso Sistema Legacy' })
    expect(link).toHaveAttribute('href', '/casos/p1')
  })

  it('CA-003: filtro síntoma filtra proyectos', () => {
    renderCases()
    fireEvent.click(screen.getByText('legacy'))
    expect(screen.getAllByTestId('project-card')).toHaveLength(1)
    expect(screen.getByText('Sistema Legacy')).toBeInTheDocument()
  })

  it('CA-003: click 2x en filtro deselecciona y muestra todos', () => {
    renderCases()
    fireEvent.click(screen.getByText('legacy'))
    fireEvent.click(screen.getByText('legacy'))
    expect(screen.getAllByTestId('project-card')).toHaveLength(3)
  })

  it('CA-004: filtro de role funciona', () => {
    renderCases()
    fireEvent.click(screen.getByText('product-manager'))
    expect(screen.getAllByTestId('project-card')).toHaveLength(1)
    expect(screen.getByText('Conversión')).toBeInTheDocument()
  })

  it('CA-005: sin resultados muestra estado vacío', () => {
    renderCases()
    fireEvent.click(screen.getByText('performance'))
    expect(screen.getByText(/No hay proyectos/i)).toBeInTheDocument()
  })

  it('CA-006: aria-live=polite en grid', () => {
    const { container } = renderCases()
    expect(container.querySelector('[aria-live="polite"]')).toBeInTheDocument()
  })

  it('CA-007: chips de síntoma renderizados', () => {
    renderCases()
    expect(screen.getByText('ia')).toBeInTheDocument()
    expect(screen.getByText('a11y')).toBeInTheDocument()
  })

  it('axe: 0 violations sin filtros', async () => {
    const { container } = renderCases()
    expect(await axe(container)).toHaveNoViolations()
  })
})
