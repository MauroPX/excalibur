import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { axe, toHaveNoViolations } from 'jest-axe'
import { AudienceCard } from './AudienceCard'

expect.extend(toHaveNoViolations)

vi.mock('@/components/atoms/Button', () => ({
  Button: ({ label, onClick }: { label: string; onClick?: () => void }) => (
    <button onClick={onClick}>{label}</button>
  ),
}))
vi.mock('@/components/atoms/Tag', () => ({
  Tag: ({ label }: { label: string }) => <span data-testid="tag">{label}</span>,
}))
vi.mock('@/components/atoms/Icon', () => ({
  Icon: () => <svg data-testid="icon" aria-hidden="true" />,
}))

describe('AudienceCard', () => {
  describe('variante symptom', () => {
    it('CA-001: renderiza title como heading', () => {
      render(<AudienceCard type="symptom" title="Producto no convierte" description="Desc" />)
      expect(screen.getByRole('heading', { name: /Producto no convierte/i })).toBeInTheDocument()
    })

    it('CA-001: renderiza description', () => {
      render(<AudienceCard type="symptom" title="T" description="Mi descripción" />)
      expect(screen.getByText(/Mi descripción/i)).toBeInTheDocument()
    })

    it('CA-008: data-atomic=molecule en root', () => {
      render(<AudienceCard type="symptom" title="T" description="D" />)
      expect(document.querySelector('[data-atomic="molecule"]')).toBeInTheDocument()
    })

    it('CA-008: data-component=AudienceCard en root', () => {
      render(<AudienceCard type="symptom" title="T" description="D" />)
      expect(document.querySelector('[data-component="AudienceCard"]')).toBeInTheDocument()
    })

    it('tiene clase BEM ex-audience-card--symptom', () => {
      render(<AudienceCard type="symptom" title="T" description="D" />)
      expect(document.querySelector('.ex-audience-card--symptom')).toBeInTheDocument()
    })

    it('CA-006: axe 0 violations en symptom', async () => {
      const { container } = render(
        <AudienceCard type="symptom" title="Test accesible" description="Descripción del síntoma" />
      )
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  describe('variante role', () => {
    it('tiene clase BEM ex-audience-card--role', () => {
      render(<AudienceCard type="role" title="CPO" description="Chief Product Officer" />)
      expect(document.querySelector('.ex-audience-card--role')).toBeInTheDocument()
    })

    it('CA-006: axe 0 violations en role', async () => {
      const { container } = render(
        <AudienceCard type="role" title="CPO" description="Chief Product Officer" />
      )
      expect(await axe(container)).toHaveNoViolations()
    })
  })

  describe('CA-009: interacción teclado y click', () => {
    it('onClick se llama al click en article', () => {
      const fn = vi.fn()
      render(<AudienceCard type="symptom" title="T" description="D" onClick={fn} />)
      fireEvent.click(document.querySelector('[data-component="AudienceCard"]')!)
      expect(fn).toHaveBeenCalledTimes(1)
    })

    it('onClick se llama al presionar Enter', () => {
      const fn = vi.fn()
      render(<AudienceCard type="symptom" title="T" description="D" onClick={fn} />)
      const article = document.querySelector('[data-component="AudienceCard"]')!
      fireEvent.keyDown(article, { key: 'Enter' })
      expect(fn).toHaveBeenCalledTimes(1)
    })

    it('onClick se llama al presionar Space', () => {
      const fn = vi.fn()
      render(<AudienceCard type="symptom" title="T" description="D" onClick={fn} />)
      const article = document.querySelector('[data-component="AudienceCard"]')!
      fireEvent.keyDown(article, { key: ' ' })
      expect(fn).toHaveBeenCalledTimes(1)
    })
  })

  describe('CA-004: tag opcional', () => {
    it('Tag visible cuando tag prop presente', () => {
      render(<AudienceCard type="symptom" title="T" description="D" tag="cliente" />)
      expect(screen.getByTestId('tag')).toBeInTheDocument()
      expect(screen.getByText('cliente')).toBeInTheDocument()
    })

    it('Tag no se renderiza sin prop tag', () => {
      render(<AudienceCard type="symptom" title="T" description="D" />)
      expect(screen.queryByTestId('tag')).toBeNull()
    })
  })
})
