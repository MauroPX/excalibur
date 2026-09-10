import { describe, it, expect, vi, beforeEach } from 'vitest'
import { screen, fireEvent } from '@testing-library/react'
import { renderWithIntl as render } from '@/test-utils/intl'
import { axe } from 'jest-axe'
import { ThemeToggle } from './ThemeToggle'

const mockToggle = vi.fn()
let mockMode: 'dark' | 'light' = 'dark'

vi.mock('@/theme/ThemeRegistry', () => ({
  useColorMode: () => ({ mode: mockMode, toggle: mockToggle }),
}))

describe('ThemeToggle', () => {
  beforeEach(() => {
    mockMode = 'dark'
    mockToggle.mockClear()
  })

  it('renders without errors', () => {
    render(<ThemeToggle />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('has correct aria-label in dark mode', () => {
    render(<ThemeToggle />)
    expect(screen.getByRole('button', { name: 'Cambiar a modo claro' })).toBeInTheDocument()
  })

  it('has correct aria-label in light mode', () => {
    mockMode = 'light'
    render(<ThemeToggle />)
    expect(screen.getByRole('button', { name: 'Cambiar a modo oscuro' })).toBeInTheDocument()
  })

  it('calls toggle on click', () => {
    render(<ThemeToggle />)
    fireEvent.click(screen.getByRole('button'))
    expect(mockToggle).toHaveBeenCalledTimes(1)
  })

  it('has no axe violations', async () => {
    const { container } = render(<ThemeToggle />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
