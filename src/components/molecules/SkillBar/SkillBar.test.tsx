import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SkillBar } from './index'
import { axe } from 'jest-axe'
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme()
const MockIcon = () => <svg data-testid="mock-icon" />

describe('SkillBar', () => {
  it('renders skill name and label', () => {
    render(
      <ThemeProvider theme={theme}>
        <SkillBar skill="TypeScript" level={90} levelLabel="Expert" />
      </ThemeProvider>
    )
    expect(screen.getByText('TypeScript')).toBeDefined()
    expect(screen.getByText('Expert')).toBeDefined()
  })

  it('is accessible (WCAG 2.2 AAA)', async () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <SkillBar skill="A11y" level={100} levelLabel="Lead" icon={MockIcon} />
      </ThemeProvider>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
