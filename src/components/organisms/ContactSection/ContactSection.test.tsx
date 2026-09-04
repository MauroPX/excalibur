import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { axe, toHaveNoViolations } from 'jest-axe'
import { NextIntlClientProvider } from 'next-intl'
import { ContactSection } from './ContactSection'
import messages from '@/i18n/messages/es.json'

expect.extend(toHaveNoViolations)

vi.mock('@/components/atoms/Button', () => ({
  Button: ({ label, onClick, variant }: { label: string; onClick?: () => void; variant?: string }) => (
    <button onClick={onClick} data-variant={variant}>{label}</button>
  ),
}))

function renderContact(props = {}) {
  return render(
    <NextIntlClientProvider locale="es" messages={messages}>
      <ContactSection {...props} />
    </NextIntlClientProvider>
  )
}

describe('ContactSection', () => {
  it('CA-001: renderiza sección con data-atomic=organism', () => {
    const { container } = renderContact()
    expect(container.querySelector('[data-atomic="organism"]')).toBeInTheDocument()
    expect(container.querySelector('[data-component="ContactSection"]')).toBeInTheDocument()
  })

  it('CA-001: renderiza heading "Hablemos"', () => {
    renderContact()
    expect(screen.getByRole('heading', { name: /Hablemos/i })).toBeInTheDocument()
  })

  it('CA-002: renderiza 3 botones de canal por defecto', () => {
    renderContact()
    expect(screen.getByRole('button', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Email' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'GitHub' })).toBeInTheDocument()
  })

  it('CA-002: canal inicial es linkedin', () => {
    renderContact()
    expect(screen.getByText(/linkedin.com\/in\//i)).toBeInTheDocument()
  })

  it('CA-003: click en Email cambia canal', () => {
    renderContact()
    fireEvent.click(screen.getByRole('button', { name: 'Email' }))
    expect(screen.getByText(/lemaogo@gmail.com/i)).toBeInTheDocument()
  })

  it('CA-003: click en GitHub muestra url de github', () => {
    renderContact()
    fireEvent.click(screen.getByText('GitHub'))
    expect(screen.getByText(/github.com\/MauroPX/i)).toBeInTheDocument()
  })

  it('CA-004: renderiza formulario de contacto', () => {
    renderContact()
    expect(screen.getByRole('form', { name: /Formulario de contacto/i })).toBeInTheDocument()
  })

  it('CA-005: submit sin datos muestra errores de validación', async () => {
    renderContact()
    fireEvent.click(screen.getByText('Enviar'))
    await waitFor(() => {
      expect(screen.getByText('El nombre es requerido')).toBeInTheDocument()
    })
  })

  it('CA-005: email inválido muestra error', async () => {
    renderContact()
    fireEvent.change(screen.getByLabelText(/Nombre/i), { target: { value: 'Test' } })
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'no-es-email' } })
    fireEvent.click(screen.getByText('Enviar'))
    await waitFor(() => {
      expect(screen.getByText('Email inválido')).toBeInTheDocument()
    })
  })

  it('CA-006: submit válido llama onSubmit con datos correctos', async () => {
    const onSubmit = vi.fn().mockResolvedValue(undefined)
    renderContact({ onSubmit })
    fireEvent.change(screen.getByLabelText(/Nombre/i), { target: { value: 'Mauricio' } })
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } })
    fireEvent.change(screen.getByLabelText(/Mensaje/i), { target: { value: 'Este es un mensaje de prueba largo suficiente' } })
    fireEvent.click(screen.getByText('Enviar'))
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({
        name: 'Mauricio',
        email: 'test@example.com',
        message: 'Este es un mensaje de prueba largo suficiente',
        channel: 'linkedin',
      })
    })
  })

  it('CA-007: muestra estado success después de envío', async () => {
    const onSubmit = vi.fn().mockResolvedValue(undefined)
    renderContact({ onSubmit })
    fireEvent.change(screen.getByLabelText(/Nombre/i), { target: { value: 'Mauricio' } })
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } })
    fireEvent.change(screen.getByLabelText(/Mensaje/i), { target: { value: 'Mensaje válido de prueba con suficientes caracteres' } })
    fireEvent.click(screen.getByText('Enviar'))
    await waitFor(() => {
      expect(screen.getByText(/Mensaje enviado/i)).toBeInTheDocument()
    })
  })

  it('CA-008: grupo de canales tiene aria-label', () => {
    renderContact()
    expect(screen.getByRole('group', { name: /Canal de contacto/i })).toBeInTheDocument()
  })

  it('axe: 0 violations', async () => {
    const { container } = renderContact()
    expect(await axe(container)).toHaveNoViolations()
  })
})
