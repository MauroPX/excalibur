import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe, toHaveNoViolations } from 'jest-axe'
import { TitanSection } from './TitanSection'

expect.extend(toHaveNoViolations)

const mockModules = [
  { hubName: 'ATLAS', hubTitle: 'Arquitectura', description: 'Define el stack', momentum: 'M3' as const, commandsCount: 12 },
  { hubName: 'FORGE', hubTitle: 'Implementación', description: 'Ejecuta código', momentum: 'M3' as const, commandsCount: 8 },
  { hubName: 'ORACLE', hubTitle: 'Decisiones', description: 'RAG + contexto', momentum: 'M2' as const, commandsCount: 5 },
]

function renderTitan(props = {}) {
  return render(<TitanSection modules={mockModules} {...props} />)
}

describe('TitanSection', () => {
  it('CA-001: renderiza sección con data-atomic=organism', () => {
    const { container } = renderTitan()
    expect(container.querySelector('[data-atomic="organism"]')).toBeInTheDocument()
    expect(container.querySelector('[data-component="TitanSection"]')).toBeInTheDocument()
  })

  it('CA-001: renderiza heading "Framework de trabajo"', () => {
    renderTitan()
    expect(screen.getByRole('heading', { name: /Framework de trabajo/i })).toBeInTheDocument()
  })

  it('CA-002: muestra badge de versión por defecto (v7.0)', () => {
    renderTitan()
    expect(screen.getByText(/TITAN v7\.0/i)).toBeInTheDocument()
  })

  it('CA-002: muestra versión personalizada', () => {
    renderTitan({ version: 'v8.0' })
    expect(screen.getByText(/TITAN v8\.0/i)).toBeInTheDocument()
  })

  it('CA-003: muestra contador de módulos', () => {
    renderTitan()
    expect(screen.getByText(/3 módulos/i)).toBeInTheDocument()
  })

  it('CA-003: suma commandsCount correctamente (12+8+5=25)', () => {
    renderTitan()
    expect(screen.getByText(/25 comandos activos/i)).toBeInTheDocument()
  })

  it('CA-004: renderiza article por cada módulo', () => {
    const { container } = renderTitan()
    expect(container.querySelectorAll('article')).toHaveLength(3)
  })

  it('CA-004: muestra nombres de módulos', () => {
    renderTitan()
    expect(screen.getByText('ATLAS')).toBeInTheDocument()
    expect(screen.getByText('FORGE')).toBeInTheDocument()
    expect(screen.getByText('ORACLE')).toBeInTheDocument()
  })

  it('CA-005: muestra momentum en cada módulo', () => {
    renderTitan()
    const m3els = screen.getAllByText('M3')
    expect(m3els.length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('M2')).toBeInTheDocument()
  })

  it('CA-006: muestra commandsCount por módulo', () => {
    renderTitan()
    expect(screen.getByText(/12 comandos/i)).toBeInTheDocument()
    expect(screen.getByText(/8 comandos/i)).toBeInTheDocument()
  })

  it('axe: 0 violations', async () => {
    const { container } = renderTitan()
    expect(await axe(container)).toHaveNoViolations()
  })
})
