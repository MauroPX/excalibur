import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { EvidenceLinks } from './EvidenceLinks'
import type { AccessLink } from '@/components/templates/CasePage/types'

expect.extend(toHaveNoViolations)

const links: AccessLink[] = [
  { kind: 'produccion', label: 'Producción', href: 'https://simon-v2-monitor-rmxm.vercel.app/?demo=true' },
  { kind: 'repo', label: 'Repositorio', href: 'https://github.com/MauroPX/simon-v2-monitor' },
  {
    kind: 'demo',
    label: 'Cómo recorrerlo',
    href: 'https://solidaria-portal.vercel.app',
    note: 'login maria@ejemplo.com + OTP 123456 → tour automático',
  },
]

describe('EvidenceLinks', () => {
  it('CA-001: renderiza un item de lista por cada link', () => {
    render(<EvidenceLinks links={links} />)
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
    expect(screen.getAllByRole('link')).toHaveLength(3)
  })

  it('CA-002: links vacío ⇒ no renderiza nada', () => {
    const { container } = render(<EvidenceLinks links={[]} />)
    expect(container).toBeEmptyDOMElement()
  })

  it('CA-003: muestra el `note` instruccional cuando existe', () => {
    render(<EvidenceLinks links={links} />)
    expect(screen.getByText(/login maria@ejemplo.com/)).toBeInTheDocument()
  })

  it('CA-004: `title` ⇒ heading + aria-label de la lista', () => {
    render(<EvidenceLinks links={links} title="Bloque de acceso" />)
    expect(screen.getByRole('heading', { name: 'Bloque de acceso' })).toBeInTheDocument()
    expect(screen.getByRole('list', { name: 'Bloque de acceso' })).toBeInTheDocument()
  })

  it('CA-004: sin title ⇒ aria-label por defecto', () => {
    render(<EvidenceLinks links={links} />)
    expect(screen.getByRole('list', { name: 'Enlaces de evidencia' })).toBeInTheDocument()
  })

  it('CA-005: data-atomic/data-component correctos', () => {
    const { container } = render(<EvidenceLinks links={links} />)
    const root = container.querySelector('[data-component="EvidenceLinks"]')
    expect(root).toHaveAttribute('data-atomic', 'molecule')
  })

  it('CA-007: 0 violaciones de accesibilidad', async () => {
    const { container } = render(<EvidenceLinks links={links} title="Bloque de acceso" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
