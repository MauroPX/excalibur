import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe, toHaveNoViolations } from 'jest-axe'
import { FlagshipSection } from './FlagshipSection'
import { FLAGSHIP } from '@/content/home'

expect.extend(toHaveNoViolations)

describe('FlagshipSection (EX-v2-ORG-010)', () => {
  it('CA-001: sección etiquetada + data-atomic organism + badge', () => {
    const { container } = render(<FlagshipSection data={FLAGSHIP} />)
    expect(container.querySelector('[data-component="FlagshipSection"]')).toHaveAttribute('data-atomic', 'organism')
    expect(screen.getByRole('heading', { level: 2, name: /Portal Empresas B2B/ })).toBeInTheDocument()
    expect(screen.getByText(/Correos Chile/)).toBeInTheDocument()
  })

  it('CA-002: 4 métricas destacadas', () => {
    render(<FlagshipSection data={FLAGSHIP} />)
    expect(screen.getByText('400+')).toBeInTheDocument()
    expect(screen.getByText('11')).toBeInTheDocument()
    expect(screen.getByText('MD3')).toBeInTheDocument()
  })

  it('CA-003: 4 fases como <li> con <h3>', () => {
    const { container } = render(<FlagshipSection data={FLAGSHIP} />)
    expect(container.querySelectorAll('.ex-flagship-section__phases li')).toHaveLength(4)
    expect(screen.getByRole('heading', { level: 3, name: /Design System Merkén/ })).toBeInTheDocument()
  })

  it('CA-004: enlaces Figma (abren en pestaña nueva) + link al caso', () => {
    render(<FlagshipSection data={FLAGSHIP} />)
    const links = screen.getAllByRole('link')
    const figma = links.filter((l) => l.getAttribute('href')?.includes('figma.com'))
    expect(figma).toHaveLength(2)
    figma.forEach((l) => expect(l).toHaveAttribute('target', '_blank'))
    expect(screen.getByRole('link', { name: /Ver el caso completo/ })).toHaveAttribute('href', '/casos/correos-chile')
  })

  it('CA-005: no introduce cifras fuera de las del caso canónico', () => {
    render(<FlagshipSection data={FLAGSHIP} />)
    // el "-75%" retirado no debe aparecer
    expect(document.body.textContent).not.toMatch(/-75\s?%/)
  })

  it('CA-006: 0 violaciones de accesibilidad', async () => {
    const { container } = render(<FlagshipSection data={FLAGSHIP} />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
