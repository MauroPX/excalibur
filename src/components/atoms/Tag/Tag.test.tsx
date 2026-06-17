import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Tag } from './index'
import { axe } from 'jest-axe'

describe('Tag', () => {
  it('renders the label', () => {
    render(<Tag label="React" />)
    expect(screen.getByText('React')).toBeDefined()
  })

  it('applies color and size classes', () => {
    const { container } = render(<Tag label="Small Error" color="error" size="small" />)
    expect(container.firstChild).toHaveClass('ex-tag--error')
    expect(container.firstChild).toHaveClass('ex-tag--small')
  })

  it('passes accessibility audit', async () => {
    const { container } = render(<Tag label="Accessible Tag" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
