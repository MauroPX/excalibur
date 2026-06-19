import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Chip } from './index'
import { axe } from 'jest-axe'
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme()

describe('Chip', () => {
  it('renders label correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <Chip label="React" />
      </ThemeProvider>
    )
    expect(screen.getByText('React')).toBeDefined()
  })

  it('handles click/selection state visually via class', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Chip label="Selected" selected />
      </ThemeProvider>
    )
    expect(container.firstChild).toHaveClass('ex-chip--selected')
  })

  it('calls onDelete when delete icon is clicked', () => {
    const onDelete = vi.fn()
    render(
      <ThemeProvider theme={theme}>
        <Chip label="Deletable" onDelete={onDelete} />
      </ThemeProvider>
    )
    const deleteBtn = screen.getByLabelText('Eliminar Deletable')
    fireEvent.click(deleteBtn)
    expect(onDelete).toHaveBeenCalledTimes(1)
  })

  it('is accessible (WCAG 2.2 AAA)', async () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Chip label="Accessible Chip" selected />
      </ThemeProvider>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
