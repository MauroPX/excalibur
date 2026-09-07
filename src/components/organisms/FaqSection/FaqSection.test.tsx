import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe, toHaveNoViolations } from 'jest-axe'
import { FaqSection } from './FaqSection'
import { FAQ_ITEMS } from '@/content/home'

expect.extend(toHaveNoViolations)

describe('FaqSection (EX-v2-ORG-009)', () => {
  it('CA-001: renderiza cada pregunta como <summary> dentro de <details>', () => {
    const { container } = render(<FaqSection items={FAQ_ITEMS} />)
    const details = container.querySelectorAll('details')
    expect(details).toHaveLength(FAQ_ITEMS.length)
    expect(screen.getByText(FAQ_ITEMS[0].q)).toBeInTheDocument()
  })

  it('CA-002: <section> etiquetada + data-atomic organism', () => {
    const { container } = render(<FaqSection items={FAQ_ITEMS} />)
    const root = container.querySelector('[data-component="FaqSection"]')
    expect(root).toHaveAttribute('data-atomic', 'organism')
    expect(screen.getByRole('heading', { level: 2, name: 'Preguntas comunes' })).toBeInTheDocument()
  })

  it('CA-003: emite JSON-LD FAQPage con todas las preguntas', () => {
    const { container } = render(<FaqSection items={FAQ_ITEMS} />)
    const script = container.querySelector('script[type="application/ld+json"]')
    expect(script).toBeInTheDocument()
    const data = JSON.parse(script!.innerHTML)
    expect(data['@type']).toBe('FAQPage')
    expect(data.mainEntity).toHaveLength(FAQ_ITEMS.length)
  })

  it('CA-004: no repone la cifra retirada "$3.000" / "$25.000" en ninguna respuesta', () => {
    render(<FaqSection items={FAQ_ITEMS} />)
    expect(document.body.textContent).not.toMatch(/\$?\s?3[.,]?000|\$?\s?25[.,]?000/)
  })

  it('CA-005: 0 violaciones de accesibilidad', async () => {
    const { container } = render(<FaqSection items={FAQ_ITEMS} />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
