import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { DecisionTable } from './DecisionTable'
import type { DecisionRow } from '@/components/templates/CasePage/types'

expect.extend(toHaveNoViolations)

const rows: DecisionRow[] = [
  {
    decision: 'Marcado de la tarjeta de estado',
    discarded: '<div> anidados (lo que generó la IA)',
    chosen: '<dl><dt><dd>',
    why: 'Semánticamente correcto para pares etiqueta-valor',
  },
  {
    decision: 'Actualización de posición en tiempo real',
    discarded: 'WebSocket nativo',
    chosen: 'Polling 5s + interpolación requestAnimationFrame',
    why: 'Netlify Functions no soporta WebSockets',
  },
]

describe('DecisionTable', () => {
  it('CA-001: renderiza una tabla con 4 columnas de encabezado y una fila por decisión', () => {
    render(<DecisionTable rows={rows} />)
    const table = screen.getByRole('table')
    expect(within(table).getAllByRole('columnheader')).toHaveLength(4)
    expect(within(table).getAllByRole('rowheader')).toHaveLength(2)
  })

  it('CA-001: cada celda muestra su contenido', () => {
    render(<DecisionTable rows={rows} />)
    expect(screen.getByText('WebSocket nativo')).toBeInTheDocument()
    expect(screen.getByText('Netlify Functions no soporta WebSockets')).toBeInTheDocument()
  })

  it('CA-002: rows vacío ⇒ no renderiza nada', () => {
    const { container } = render(<DecisionTable rows={[]} />)
    expect(container).toBeEmptyDOMElement()
  })

  it('CA-003: caption sr-only se anuncia como nombre de la tabla', () => {
    render(<DecisionTable rows={rows} caption="Decisiones de arquitectura de FleetControl" />)
    expect(screen.getByRole('table', { name: 'Decisiones de arquitectura de FleetControl' })).toBeInTheDocument()
  })

  it('CA-005: data-atomic/data-component correctos', () => {
    const { container } = render(<DecisionTable rows={rows} />)
    const root = container.querySelector('[data-component="DecisionTable"]')
    expect(root).toHaveAttribute('data-atomic', 'molecule')
  })

  it('CA-007: 0 violaciones de accesibilidad', async () => {
    const { container } = render(<DecisionTable rows={rows} caption="Decisiones" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
