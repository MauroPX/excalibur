import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { AiDisclosure } from './AiDisclosure'

expect.extend(toHaveNoViolations)

const items = [
  '3 correcciones documentadas a código generado por IA',
  'Cada corrección con su razón semántica o de UX',
]

describe('AiDisclosure', () => {
  it('CA-001: renderiza una section con heading y lista de items', () => {
    render(<AiDisclosure items={items} />)
    expect(screen.getByRole('region', { name: 'Uso de IA declarado' })).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
  })

  it('CA-001: título por defecto, overridable', () => {
    render(<AiDisclosure items={items} title="Declaración de IA — Codesa" />)
    expect(screen.getByRole('heading', { name: 'Declaración de IA — Codesa' })).toBeInTheDocument()
  })

  it('CA-002: items vacío ⇒ no renderiza nada', () => {
    const { container } = render(<AiDisclosure items={[]} />)
    expect(container).toBeEmptyDOMElement()
  })

  it('CA-003: fuente ⇒ enlace seguro con aria-label declarando pestaña nueva', () => {
    render(
      <AiDisclosure items={items} source={{ label: 'TECHNICAL_CHALLENGE_RESPONSE.md', href: 'https://github.com/x/y/blob/main/DOC.md' }} />
    )
    const link = screen.getByRole('link', { name: 'Fuente: TECHNICAL_CHALLENGE_RESPONSE.md (abre en pestaña nueva)' })
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('CA-005: data-atomic/data-component correctos', () => {
    const { container } = render(<AiDisclosure items={items} />)
    const root = container.querySelector('[data-component="AiDisclosure"]')
    expect(root).toHaveAttribute('data-atomic', 'molecule')
  })

  it('CA-007: 0 violaciones de accesibilidad', async () => {
    const { container } = render(
      <AiDisclosure items={items} source={{ label: 'Fuente', href: 'https://ejemplo.com' }} />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
