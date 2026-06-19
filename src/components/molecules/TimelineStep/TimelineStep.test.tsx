import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe, toHaveNoViolations } from 'jest-axe'
import { TimelineStep } from './index'

expect.extend(toHaveNoViolations)

const defaultProps = {
  company: 'Rappi',
  role: 'Staff Product Manager',
  period: '2021 – 2024',
}

describe('TimelineStep', () => {
  it('CA-002: renders role and company', () => {
    render(<TimelineStep {...defaultProps} />)
    expect(screen.getByText('Staff Product Manager')).toBeDefined()
    expect(screen.getByText('Rappi')).toBeDefined()
  })

  it('CA-002: renders period', () => {
    render(<TimelineStep {...defaultProps} />)
    expect(screen.getByText('2021 – 2024')).toBeDefined()
  })

  it('CA-001: shows connector line when not last', () => {
    const { container } = render(<TimelineStep {...defaultProps} />)
    expect(container.querySelector('.ex-timeline-step__line')).not.toBeNull()
  })

  it('CA-001: hides connector line when isLast', () => {
    const { container } = render(<TimelineStep {...defaultProps} isLast />)
    expect(container.querySelector('.ex-timeline-step__line')).toBeNull()
  })

  it('CA-001: applies --last modifier class', () => {
    const { container } = render(<TimelineStep {...defaultProps} isLast />)
    expect(container.firstChild).toHaveClass('ex-timeline-step--last')
  })

  it('CA-003: passes accessibility audit', async () => {
    const { container } = render(<TimelineStep {...defaultProps} />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
