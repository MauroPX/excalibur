import { screen } from '@testing-library/react'
import { renderWithIntl as render } from '@/test-utils/intl'
import { describe, it, expect } from 'vitest'
import { axe, toHaveNoViolations } from 'jest-axe'
import { Hero } from './index'

expect.extend(toHaveNoViolations)

const defaultProps = {
  headline: 'Construyo sistemas que el equipo opera sin mí',
  subheadline: 'Staff Product Architect disponible para proyectos Q3 2026.',
  ctaLabel: 'Ver proyectos',
  ctaHref: '#proyectos',
  secondaryCtaLabel: 'Descargar CV',
  secondaryCtaHref: '/cv.pdf',
  metrics: [
    { value: '+3.2M', label: 'ARR generado', trend: 'positive' as const },
    { value: '7', label: 'productos lanzados', trend: 'neutral' as const },
    { value: '96%', label: 'retención', trend: 'positive' as const },
  ],
}

describe('Hero', () => {
  it('CA-001: renders unique H1 with professional result', () => {
    render(<Hero {...defaultProps} />)
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1.textContent).toBe('Construyo sistemas que el equipo opera sin mí')
  })

  it('CA-002: renders primary CTA button', () => {
    render(<Hero {...defaultProps} />)
    expect(screen.getByRole('button', { name: 'Ver proyectos' })).toBeDefined()
  })

  it('CA-002: renders secondary CTA as link', () => {
    render(<Hero {...defaultProps} />)
    expect(screen.getByText('Descargar CV →')).toBeDefined()
  })

  it('CA-003: renders MetricRow with 3 metrics', () => {
    render(<Hero {...defaultProps} />)
    expect(screen.getByText('+3.2M')).toBeDefined()
    expect(screen.getByText('7')).toBeDefined()
    expect(screen.getByText('96%')).toBeDefined()
  })

  it('CA-001: has section landmark', () => {
    render(<Hero {...defaultProps} />)
    expect(screen.getByRole('region', { name: 'Introducción' })).toBeDefined()
  })

  it('renders without subheadline', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { subheadline: _sub, ...props } = defaultProps
    render(<Hero {...props} />)
    expect(screen.queryByText('Staff Product Architect')).toBeNull()
  })

  it('CA-003: passes accessibility audit', async () => {
    const { container } = render(<Hero {...defaultProps} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
