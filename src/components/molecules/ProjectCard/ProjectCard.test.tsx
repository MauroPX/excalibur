import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ProjectCard } from './index'
import { axe } from 'jest-axe'
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme()

describe('ProjectCard', () => {
  const props = {
    title: 'TITAN v7.0',
    description: 'AI Orchestration Engine for staff architects.',
    tags: ['Next.js', 'TypeScript', 'AI'],
    metric: { value: '+75%', label: 'Efficiency' }
  }

  it('renders title and description', () => {
    render(
      <ThemeProvider theme={theme}>
        <ProjectCard {...props} />
      </ThemeProvider>
    )
    expect(screen.getByText('TITAN v7.0')).toBeDefined()
    expect(screen.getByText(props.description)).toBeDefined()
  })

  it('renders tags and metrics', () => {
    render(
      <ThemeProvider theme={theme}>
        <ProjectCard {...props} />
      </ThemeProvider>
    )
    expect(screen.getByText('Next.js')).toBeDefined()
    expect(screen.getByText('+75%')).toBeDefined()
  })

  it('is accessible (WCAG 2.2 AAA)', async () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <ProjectCard {...props} />
      </ThemeProvider>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
