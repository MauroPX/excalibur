import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { axe, toHaveNoViolations } from 'jest-axe'
import { InquisitorHUD } from './InquisitorHUD'

expect.extend(toHaveNoViolations)

function renderHUD(props = {}) {
  return render(<InquisitorHUD {...props} />)
}

describe('InquisitorHUD', () => {
  it('CA-001: NO renderiza nada cuando enabled=false (default)', () => {
    const { container } = renderHUD()
    expect(container.querySelector('[data-component="InquisitorHUD"]')).toBeNull()
  })

  it('CA-001: NO renderiza cuando enabled=true pero no activado (visible=false)', () => {
    const { container } = renderHUD({ enabled: true })
    expect(container.querySelector('[data-component="InquisitorHUD"]')).toBeNull()
  })

  it('CA-002: Alt+A activa el panel cuando enabled=true', () => {
    renderHUD({ enabled: true })
    fireEvent.keyDown(document, { key: 'a', altKey: true })
    expect(screen.getByRole('complementary')).toBeInTheDocument()
    expect(screen.getByText('INQUISITOR HUD')).toBeInTheDocument()
  })

  it('CA-002: Escape cierra el panel', () => {
    renderHUD({ enabled: true })
    fireEvent.keyDown(document, { key: 'a', altKey: true })
    expect(screen.getByRole('complementary')).toBeInTheDocument()
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByRole('complementary')).toBeNull()
  })

  it('CA-003: botón de cierre oculta el panel', () => {
    renderHUD({ enabled: true })
    fireEvent.keyDown(document, { key: 'a', altKey: true })
    fireEvent.click(screen.getByRole('button', { name: /Cerrar/i }))
    expect(screen.queryByRole('complementary')).toBeNull()
  })

  it('CA-004: muestra 4 contadores de impacto', () => {
    renderHUD({ enabled: true })
    fireEvent.keyDown(document, { key: 'a', altKey: true })
    expect(screen.getAllByText('critical').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('serious').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('moderate').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('minor').length).toBeGreaterThanOrEqual(1)
  })

  it('CA-005: renderiza filtros de impacto', () => {
    renderHUD({ enabled: true })
    fireEvent.keyDown(document, { key: 'a', altKey: true })
    expect(screen.getByRole('group', { name: /Filtrar por impacto/i })).toBeInTheDocument()
    expect(screen.getByText('Todos')).toBeInTheDocument()
  })

  it('CA-006: estado vacío sin issues muestra mensaje', () => {
    renderHUD({ enabled: true })
    fireEvent.keyDown(document, { key: 'a', altKey: true })
    expect(screen.getByText(/Ejecuta una auditoría/i)).toBeInTheDocument()
  })

  it('CA-007: data-atomic=organism en el panel', () => {
    renderHUD({ enabled: true })
    fireEvent.keyDown(document, { key: 'a', altKey: true })
    const panel = screen.getByRole('complementary')
    expect(panel).toHaveAttribute('data-atomic', 'organism')
    expect(panel).toHaveAttribute('data-component', 'InquisitorHUD')
  })

  it('CA-008: panel tiene aria-label accesible', () => {
    renderHUD({ enabled: true })
    fireEvent.keyDown(document, { key: 'a', altKey: true })
    expect(screen.getByRole('complementary', { name: /InquisitorHUD/i })).toBeInTheDocument()
  })

  it('CA-009: Alt+A toggle — segundo Alt+A cierra', () => {
    renderHUD({ enabled: true })
    fireEvent.keyDown(document, { key: 'a', altKey: true })
    expect(screen.getByRole('complementary')).toBeInTheDocument()
    fireEvent.keyDown(document, { key: 'a', altKey: true })
    expect(screen.queryByRole('complementary')).toBeNull()
  })

  it('axe: 0 violations con panel abierto', async () => {
    const { container } = renderHUD({ enabled: true })
    fireEvent.keyDown(document, { key: 'a', altKey: true })
    expect(await axe(container)).toHaveNoViolations()
  })
})
