import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { FdnMomentum2Section } from './FdnMomentum2Section'
import { fdnMomentum2 } from '@/content/cases'

expect.extend(toHaveNoViolations)

describe('FdnMomentum2Section (R-8)', () => {
  it('renderiza con ancla propia, badge y disclaimer propios', () => {
    const { container } = render(<FdnMomentum2Section data={fdnMomentum2} />)
    expect(container.querySelector('#momentum-2-propuesta')).toBeInTheDocument()
    expect(screen.getByText(/Estimación propia/)).toBeInTheDocument()
    expect(
      screen.getByText(/estimación propia, no un entregable ya construido o aprobado/),
    ).toBeInTheDocument()
  })

  it('enlaza de vuelta al Momentum 1', () => {
    render(<FdnMomentum2Section data={fdnMomentum2} />)
    const link = screen.getByRole('link', { name: /auditoría real \(Momentum 1\)/ })
    expect(link).toHaveAttribute('href', '#valor-heading')
  })

  it('las 4 secciones numeradas de la propuesta se renderizan', () => {
    render(<FdnMomentum2Section data={fdnMomentum2} />)
    expect(screen.getByRole('heading', { name: /Arquitectura propuesta/ })).toBeInTheDocument()
    expect(screen.getByText(/CAPEX \$100K–\$174\.5K USD/)).toBeInTheDocument()
    expect(screen.getByText(/30 de junio de 2026/)).toBeInTheDocument()
  })

  it('0 violaciones de accesibilidad', async () => {
    const { container } = render(<FdnMomentum2Section data={fdnMomentum2} />)
    expect(await axe(container)).toHaveNoViolations()
  })
})
