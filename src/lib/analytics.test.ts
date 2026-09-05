import { describe, it, expect } from 'vitest'
import { sanitizeProperties } from './analytics'

describe('analytics — sanitizeProperties (E3)', () => {
  it('CA-010: elimina claves PII de nivel superior', () => {
    const result = sanitizeProperties({
      contact_email: 'user@example.com',
      page_type: 'contact',
    })
    expect(result).not.toHaveProperty('contact_email')
    expect(result.page_type).toBe('contact')
  })

  it('CA-010: elimina claves PII en objetos anidados', () => {
    const result = sanitizeProperties({
      user: { full_name: 'Jane Doe', role: 'reclutador' },
    })
    expect(result.user).toEqual({ role: 'reclutador' })
  })

  it('CA-010: elimina claves PII dentro de arrays de objetos', () => {
    const result = sanitizeProperties({
      contacts: [
        { identity_number: '123', channel: 'linkedin' },
        { identity_number: '456', channel: 'email' },
      ],
    })
    expect(result.contacts).toEqual([{ channel: 'linkedin' }, { channel: 'email' }])
  })

  it('CA-010: no PII — pasa el objeto intacto', () => {
    const input = { section: 'hero', variant: 'cta' }
    expect(sanitizeProperties(input)).toEqual(input)
  })

  it('CA-010: preserva valores primitivos, null y arrays de primitivos', () => {
    const result = sanitizeProperties({
      count: 3,
      active: true,
      note: null,
      tags: ['ia', 'staff-architect'],
    })
    expect(result).toEqual({ count: 3, active: true, note: null, tags: ['ia', 'staff-architect'] })
  })
})
