import { describe, it, expect, vi, beforeEach } from 'vitest'
import { screen, fireEvent } from '@testing-library/react'
import { renderWithIntl as render } from '@/test-utils/intl'
import { axe, toHaveNoViolations } from 'jest-axe'
import { ColorRolesHUD } from './ColorRolesHUD'

expect.extend(toHaveNoViolations)

vi.mock('@/theme/ThemeRegistry', () => ({
  useColorMode: () => ({ mode: 'dark' as const, toggle: vi.fn() }),
}))

describe('ColorRolesHUD', () => {
  beforeEach(() => {
    // limpia listeners de keydown entre tests
    document.body.innerHTML = ''
  })

  it('CA-005: enabled=false no renderiza nada', () => {
    const { container } = render(<ColorRolesHUD enabled={false} />)
    expect(container).toBeEmptyDOMElement()
  })

  it('CA-001: enabled=true muestra el FAB, panel cerrado por defecto', () => {
    render(<ColorRolesHUD enabled />)
    expect(screen.getByRole('button', { name: 'Revisar roles de color' })).toBeInTheDocument()
    expect(screen.queryByRole('complementary')).not.toBeInTheDocument()
  })

  it('CA-004: click en el FAB abre el panel y actualiza aria-expanded', () => {
    render(<ColorRolesHUD enabled />)
    const fab = screen.getByRole('button', { name: 'Revisar roles de color' })
    expect(fab).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(fab)
    expect(screen.getByRole('complementary', { name: 'Panel de revisión de roles de color' })).toBeInTheDocument()
  })

  it('CA-002: Escape cierra el panel', () => {
    render(<ColorRolesHUD enabled />)
    fireEvent.click(screen.getByRole('button', { name: 'Revisar roles de color' }))
    expect(screen.getByRole('complementary')).toBeInTheDocument()
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByRole('complementary')).not.toBeInTheDocument()
  })

  it('CA-005: 0 violaciones de accesibilidad con el panel abierto', async () => {
    const { container } = render(<ColorRolesHUD enabled />)
    fireEvent.click(screen.getByRole('button', { name: 'Revisar roles de color' }))
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
