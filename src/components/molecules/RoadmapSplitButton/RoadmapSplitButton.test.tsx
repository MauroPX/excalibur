import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { axe, toHaveNoViolations } from 'jest-axe'
import { RoadmapSplitButton } from './RoadmapSplitButton'

expect.extend(toHaveNoViolations)

const defaultOptions = [
  { label: 'Ola 1 — Átomos', value: 'ola1' },
  { label: 'Ola 2 — Moléculas', value: 'ola2' },
  { label: 'Ola 3 — Organismos', value: 'ola3' },
]
const noop = vi.fn()

function renderSplit(selectedValue = 'ola1', onChange = noop) {
  return render(
    <RoadmapSplitButton
      options={defaultOptions}
      selectedValue={selectedValue}
      onChange={onChange}
    />
  )
}

function getArrowBtn() {
  return screen.getByRole('button', { name: /▼|▲/ })
}

describe('RoadmapSplitButton', () => {
  it('CA-001: renderiza botón primario con la opción seleccionada', () => {
    renderSplit('ola1')
    expect(screen.getByText('Ola 1 — Átomos')).toBeInTheDocument()
  })

  it('CA-001: renderiza botón flecha dropdown', () => {
    renderSplit()
    expect(getArrowBtn()).toBeInTheDocument()
  })

  it('CA-002: dropdown NO visible inicialmente', () => {
    renderSplit()
    expect(screen.queryByRole('listbox')).toBeNull()
  })

  it('CA-002: click en flecha abre dropdown', () => {
    renderSplit()
    fireEvent.click(getArrowBtn())
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('CA-002: click en opción cierra dropdown', () => {
    const onChange = vi.fn()
    renderSplit('ola1', onChange)
    fireEvent.click(getArrowBtn())
    fireEvent.click(screen.getByText('Ola 2 — Moléculas'))
    expect(screen.queryByRole('listbox')).toBeNull()
  })

  it('CA-003: onChange se llama con el value correcto', () => {
    const onChange = vi.fn()
    renderSplit('ola1', onChange)
    fireEvent.click(getArrowBtn())
    fireEvent.click(screen.getByText('Ola 2 — Moléculas'))
    expect(onChange).toHaveBeenCalledWith('ola2')
  })

  it('CA-004: Escape cierra dropdown', () => {
    renderSplit()
    fireEvent.click(getArrowBtn())
    expect(screen.getByRole('listbox')).toBeInTheDocument()
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByRole('listbox')).toBeNull()
  })

  it('CA-005: aria-expanded=false cuando cerrado', () => {
    renderSplit()
    expect(getArrowBtn()).toHaveAttribute('aria-expanded', 'false')
  })

  it('CA-005: aria-expanded=true cuando abierto', () => {
    renderSplit()
    fireEvent.click(getArrowBtn())
    expect(getArrowBtn()).toHaveAttribute('aria-expanded', 'true')
  })

  it('CA-005: aria-controls=roadmap-dropdown en la flecha', () => {
    renderSplit()
    expect(getArrowBtn()).toHaveAttribute('aria-controls', 'roadmap-dropdown')
  })

  it('CA-007: data-atomic=molecule en root', () => {
    renderSplit()
    expect(screen.getByRole('group')).toHaveAttribute('data-atomic', 'molecule')
  })

  it('CA-007: data-component=RoadmapSplitButton en root', () => {
    renderSplit()
    expect(screen.getByRole('group')).toHaveAttribute('data-component', 'RoadmapSplitButton')
  })

  it('axe: 0 violations con dropdown cerrado', async () => {
    const { container } = renderSplit()
    expect(await axe(container)).toHaveNoViolations()
  })

  it('axe: 0 violations con dropdown abierto', async () => {
    const { container } = renderSplit()
    fireEvent.click(getArrowBtn())
    expect(await axe(container)).toHaveNoViolations()
  })
})
