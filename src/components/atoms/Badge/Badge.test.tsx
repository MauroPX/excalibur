import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Badge } from './index'
import { axe } from 'jest-axe'

describe('Badge', () => {
  it('renders standard content correctly', () => {
    render(
      <Badge content={5}>
        <div data-testid="child">Target</div>
      </Badge>
    )
    expect(screen.getByText('5')).toBeDefined()
    expect(screen.getByTestId('child')).toBeDefined()
  })

  it('renders as dot variant', () => {
    const { container } = render(
      <Badge variant="dot">
        <div>Target</div>
      </Badge>
    )
    expect(container.querySelector('.MuiBadge-dot')).toBeDefined()
    expect(container.firstChild).toHaveClass('ex-badge--dot')
  })

  it('passes accessibility audit', async () => {
    const { container } = render(
      <Badge content="!" color="error">
        <button>Notifications</button>
      </Badge>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
