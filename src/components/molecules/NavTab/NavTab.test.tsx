import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { NavTab } from './index'
import { axe } from 'jest-axe'
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme()

/** Icono mock simple para evitar problemas de ESM */
const MockIcon = () => <svg data-testid="mock-icon" />

describe('NavTab', () => {
  it('renders label and symptom correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <NavTab label="Roles" symptom="Product Architect" icon={MockIcon} onClick={() => {}} />
      </ThemeProvider>
    )
    expect(screen.getByText('Roles')).toBeDefined()
    expect(screen.getByText('Product Architect')).toBeDefined()
  })

  it('handles active state visually', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <NavTab label="Active" active icon={MockIcon} onClick={() => {}} />
      </ThemeProvider>
    )
    expect(container.firstChild).toHaveClass('ex-nav-tab--active')
    expect(container.firstChild).toHaveAttribute('aria-selected', 'true')
  })

  it('calls onClick when clicked', () => {
    const onClick = vi.fn()
    render(
      <ThemeProvider theme={theme}>
        <NavTab label="Clickable" icon={MockIcon} onClick={onClick} />
      </ThemeProvider>
    )
    fireEvent.click(screen.getByRole('tab'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('is accessible (WCAG 2.2 AAA)', async () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <div role="tablist">
          <NavTab label="Accessible Tab" icon={MockIcon} onClick={() => {}} />
        </div>
      </ThemeProvider>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
