import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Icon } from './index'
import { axe } from 'jest-axe'
import React from 'react'
import { SvgIcon } from '@mui/material'

const MockIcon = (props: React.ComponentPropsWithoutRef<typeof SvgIcon>) => (
  <SvgIcon {...props} data-testid="mock-icon">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
)

describe('Icon', () => {
  it('renders the icon component', () => {
    render(<Icon icon={MockIcon} />)
    expect(screen.getByTestId('mock-icon')).toBeDefined()
  })

  it('applies the size class', () => {
    const { container } = render(<Icon icon={MockIcon} size="xl" />)
    expect(container.firstChild).toHaveClass('ex-icon--xl')
  })

  it('is accessible when ariaLabel is provided', async () => {
    const { container } = render(<Icon icon={MockIcon} ariaLabel="Home" />)
    expect(screen.getByLabelText('Home')).toBeDefined()
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
