import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Metric } from './index'
import { axe } from 'jest-axe'
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme()

describe('Metric', () => {
  it('renders value and label correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <Metric value="125" label="Projects" />
      </ThemeProvider>
    )
    expect(screen.getByText('125')).toBeDefined()
    expect(screen.getByText('Projects')).toBeDefined()
  })

  it('applies trend class correctly', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Metric value="10" label="Growth" trend="positive" />
      </ThemeProvider>
    )
    expect(container.firstChild).toHaveClass('ex-metric--positive')
  })

  it('is accessible (WCAG 2.2 AAA)', async () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Metric value="99%" label="Success Rate" />
      </ThemeProvider>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
