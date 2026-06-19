import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe, toHaveNoViolations } from 'jest-axe'
import { MetricRow } from './index'

expect.extend(toHaveNoViolations)

const mockMetrics = [
  { value: '+3.2M', label: 'ARR generado', trend: 'positive' as const },
  { value: '7', label: 'productos lanzados', trend: 'neutral' as const },
  { value: '96%', label: 'retención', trend: 'positive' as const },
]

describe('MetricRow', () => {
  it('CA-001: renders all metrics', () => {
    render(<MetricRow metrics={mockMetrics} />)
    expect(screen.getByText('+3.2M')).toBeDefined()
    expect(screen.getByText('7')).toBeDefined()
    expect(screen.getByText('96%')).toBeDefined()
  })

  it('CA-002: renders descriptive labels', () => {
    render(<MetricRow metrics={mockMetrics} />)
    expect(screen.getByText('ARR generado')).toBeDefined()
    expect(screen.getByText('retención')).toBeDefined()
  })

  it('CA-003: has correct list semantics', () => {
    render(<MetricRow metrics={mockMetrics} />)
    expect(screen.getByRole('list')).toBeDefined()
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })

  it('CA-003: passes accessibility audit', async () => {
    const { container } = render(<MetricRow metrics={mockMetrics} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
