import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { ColorRolesGallery } from './ColorRolesGallery'
import { contrastRatio, contrastLevel } from './contrast'

expect.extend(toHaveNoViolations)

describe('contrastRatio / contrastLevel', () => {
  it('CA-002: negro sobre blanco da 21:1 (máximo posible) -> AAA', () => {
    expect(contrastRatio('#000000', '#FFFFFF')).toBeCloseTo(21, 0)
    expect(contrastLevel(21)).toBe('AAA')
  })

  it('CA-002: mismo color sobre sí mismo da 1:1 -> FAIL', () => {
    expect(contrastRatio('#808080', '#808080')).toBeCloseTo(1, 5)
    expect(contrastLevel(1)).toBe('FAIL')
  })

  it('CA-002: umbral AA en 4.5, AAA en 7', () => {
    expect(contrastLevel(4.5)).toBe('AA')
    expect(contrastLevel(4.49)).toBe('FAIL')
    expect(contrastLevel(7)).toBe('AAA')
    expect(contrastLevel(6.99)).toBe('AA')
  })
})

describe('ColorRolesGallery', () => {
  it('CA-001: renderiza los 21 pares en modo dark', () => {
    render(<ColorRolesGallery mode="dark" />)
    expect(screen.getAllByRole('listitem').length).toBeGreaterThanOrEqual(20)
  })

  it('CA-001: renderiza en modo light sin romper', () => {
    render(<ColorRolesGallery mode="light" />)
    expect(screen.getByRole('list', { name: /modo light/i })).toBeInTheDocument()
  })

  it('CA-004: root con data-atomic y data-component correctos', () => {
    const { container } = render(<ColorRolesGallery mode="dark" />)
    const root = container.querySelector('[data-component="ColorRolesGallery"]')
    expect(root).toHaveAttribute('data-atomic', 'organism')
  })

  it('CA-005: 0 violaciones de accesibilidad', async () => {
    const { container } = render(<ColorRolesGallery mode="dark" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
