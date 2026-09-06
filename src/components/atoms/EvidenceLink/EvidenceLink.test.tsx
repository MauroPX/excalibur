import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { EvidenceLink } from './EvidenceLink'

expect.extend(toHaveNoViolations)

describe('EvidenceLink', () => {
  it('CA-001: renderiza un <a> con target=_blank y rel seguro', () => {
    render(<EvidenceLink href="https://ejemplo.com" label="Producción" kind="produccion" />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://ejemplo.com')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('CA-003: aria-label incluye el label, el nombre del kind y "abre en pestaña nueva"', () => {
    render(<EvidenceLink href="https://github.com/x/y" label="Ver repo" kind="repo" />)
    expect(
      screen.getByRole('link', { name: 'Ver repo — Repositorio (abre en pestaña nueva)' })
    ).toBeInTheDocument()
  })

  it('CA-002: muestra el label visible', () => {
    render(<EvidenceLink href="#" label="Demo Tutorial GEMAS" kind="figma" />)
    expect(screen.getByText('Demo Tutorial GEMAS')).toBeInTheDocument()
  })

  it('CA-005: data-atomic/data-component + clase BEM con modificador de kind', () => {
    const { container } = render(<EvidenceLink href="#" label="Storybook" kind="storybook" />)
    const root = container.querySelector('[data-component="EvidenceLink"]')
    expect(root).toHaveAttribute('data-atomic', 'atom')
    expect(root).toHaveClass('ex-evidence-link', 'ex-evidence-link--storybook')
  })

  it('CA-008: 0 violaciones de accesibilidad', async () => {
    const { container } = render(
      <EvidenceLink href="https://loom.com/share/x" label="Grabación" kind="video" />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
