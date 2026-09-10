import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithIntl as render } from '@/test-utils/intl'
import { describe, it, expect } from 'vitest'
import { axe, toHaveNoViolations } from 'jest-axe'
import { IndustriesSection } from './IndustriesSection'
import { INDUSTRIES } from '@/content/home'

expect.extend(toHaveNoViolations)

describe('IndustriesSection (EX-v2-ORG-011)', () => {
  it('CA-001: sección etiquetada + data-atomic organism', () => {
    const { container } = render(<IndustriesSection industries={INDUSTRIES} />)
    expect(container.querySelector('[data-component="IndustriesSection"]')).toHaveAttribute('data-atomic', 'organism')
    expect(screen.getByRole('heading', { level: 2, name: 'Industrias' })).toBeInTheDocument()
  })

  it('CA-002: 1 <li> por industria con <h3>', () => {
    const { container } = render(<IndustriesSection industries={INDUSTRIES} />)
    expect(container.querySelectorAll('.ex-industries-section__item')).toHaveLength(INDUSTRIES.length)
    expect(screen.getByRole('heading', { level: 3, name: /Fintech/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /GovTech/ })).toBeInTheDocument()
  })

  it('CA-003: solo experiencia profesional real (EXPERIENCIA_PORTAFOLIO_BASE.md) — NO pruebas técnicas ni nombres no verificados de v1', () => {
    render(<IndustriesSection industries={INDUSTRIES} />)
    const text = document.body.textContent ?? ''
    expect(text).toMatch(/BBVA/)
    expect(text).toMatch(/Correos de Chile/)
    // nombres no verificados del grid de v1
    for (const noVerificado of ['Fingo', 'Powwi', 'Skandia', 'Mentu']) {
      expect(text).not.toMatch(new RegExp(noVerificado))
    }
    // pruebas técnicas / diagnósticos autodirigidos — viven en /pruebas-tecnicas, NO aquí
    for (const prueba of ['FleetControl', 'Banco Caja Social', 'Codesa', 'Solidaria']) {
      expect(text).not.toMatch(new RegExp(prueba))
    }
  })

  it('CA-004: 0 violaciones de accesibilidad', async () => {
    const { container } = render(<IndustriesSection industries={INDUSTRIES} />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
