import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Button } from './index'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

describe('Button', () => {
  it('CA-001: renders the label correctly', () => {
    render(<Button label="Test Button" />)
    expect(screen.getByText('Test Button')).toBeDefined()
  })

  it('CA-001: applies the correct variant class', () => {
    const { container } = render(<Button label="Outlined" variant="outlined" />)
    expect(container.firstChild).toHaveClass('ex-button--outlined')
  })

  it('CA-002: shows loading state and disables the button', () => {
    render(<Button label="Loading" loading />)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(button).toHaveClass('ex-button--loading')
  })

  it('CA-003: passes accessibility audit', async () => {
    const { container } = render(<Button label="Accessible Button" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('handles click events', () => {
    const handleClick = vi.fn()
    render(<Button label="Clickable" onClick={handleClick} />)
    fireEvent.click(screen.getByText('Clickable'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not trigger click when disabled', () => {
    const handleClick = vi.fn()
    render(<Button label="Disabled" onClick={handleClick} disabled />)
    fireEvent.click(screen.getByText('Disabled'))
    expect(handleClick).not.toHaveBeenCalled()
  })
})
