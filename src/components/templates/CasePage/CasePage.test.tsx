import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { axe, toHaveNoViolations } from 'jest-axe'
import { CasePage } from './CasePage'

expect.extend(toHaveNoViolations)

vi.mock('@/components/atoms/Tag', () => ({
  Tag: ({ label }: { label: string }) => <span data-testid="tag">{label}</span>,
}))
vi.mock('@/components/molecules/MetricRow', () => ({
  MetricRow: ({ metrics }: { metrics: Array<{ value: string | number; label: string }> }) => (
    <div data-testid="metric-row">{metrics.map(m => <span key={m.label}>{m.label}</span>)}</div>
  ),
}))
vi.mock('@/components/molecules/TimelineStep', () => ({
  TimelineStep: ({ company }: { company: string }) => (
    <div data-testid="timeline-step">{company}</div>
  ),
}))
vi.mock('@/components/molecules/SkillBar', () => ({
  SkillBar: ({ skill }: { skill: string }) => (
    <div data-testid="skill-bar">{skill}</div>
  ),
}))
vi.mock('./CasePageNav', () => ({
  CasePageNav: ({ nextCase }: { nextCase: { title: string } | null }) => (
    <nav data-testid="case-page-nav">{nextCase?.title ?? 'no-next'}</nav>
  ),
}))

const mockCaseData = {
  slug: 'sistema-legacy',
  title: 'Migración de Sistema Legacy',
  description: 'Migramos un monolito de 10 años a microservicios en 6 meses.',
  tags: ['ia', 'legacy', 'staff-architect'],
  metrics: [
    { value: '4x', label: 'Velocidad de deploy' },
    { value: '60%', label: 'Reducción de bugs' },
  ],
  timeline: [
    { company: 'Empresa A', role: 'Staff Architect', period: '2024 Q1', isLast: false },
    { company: 'Empresa A', role: 'Lead', period: '2024 Q2', isLast: true },
  ],
  techStack: [
    { skill: 'Next.js', level: 90, levelLabel: 'Experto' },
    { skill: 'TypeScript', level: 85, levelLabel: 'Avanzado' },
  ],
  nextCase: { slug: 'conversion', title: 'Optimización de Conversión' },
}

function renderCase(overrides = {}) {
  return render(<CasePage caseData={{ ...mockCaseData, ...overrides }} />)
}

describe('CasePage', () => {
  it('CA-001: renderiza header con título', () => {
    renderCase()
    expect(screen.getByRole('heading', { name: /Migración de Sistema Legacy/i })).toBeInTheDocument()
  })

  it('CA-001: renderiza tags del proyecto', () => {
    renderCase()
    expect(screen.getAllByTestId('tag').length).toBe(3)
  })

  it('CA-002: renderiza MetricRow con métricas', () => {
    renderCase()
    expect(screen.getByTestId('metric-row')).toBeInTheDocument()
    expect(screen.getByText('Velocidad de deploy')).toBeInTheDocument()
  })

  it('CA-003: renderiza TimelineStep(s)', () => {
    renderCase()
    expect(screen.getAllByTestId('timeline-step')).toHaveLength(2)
  })

  it('CA-004: renderiza SkillBar(s)', () => {
    renderCase()
    expect(screen.getAllByTestId('skill-bar')).toHaveLength(2)
    expect(screen.getByText('Next.js')).toBeInTheDocument()
  })

  it('CA-005: renderiza CasePageNav con nextCase', () => {
    renderCase()
    expect(screen.getByTestId('case-page-nav')).toBeInTheDocument()
    expect(screen.getByText('Optimización de Conversión')).toBeInTheDocument()
  })

  it('CA-005: sin nextCase muestra nav vacío', () => {
    renderCase({ nextCase: null })
    expect(screen.getByText('no-next')).toBeInTheDocument()
  })

  it('CA-006: main tiene data-atomic=template y data-component=CasePage', () => {
    renderCase()
    const main = screen.getByRole('main')
    expect(main).toHaveAttribute('data-atomic', 'template')
    expect(main).toHaveAttribute('data-component', 'CasePage')
  })

  it('CA-007: skip-link presente', () => {
    renderCase()
    expect(screen.getByText(/Saltar al contenido/i)).toBeInTheDocument()
  })

  it('CA-007: main tiene id=main-content', () => {
    const { container } = renderCase()
    expect(container.querySelector('main#main-content')).toBeInTheDocument()
  })

  it('CA-008: breadcrumb con aria-label y aria-current', () => {
    renderCase()
    expect(screen.getByRole('navigation', { name: /Breadcrumb/i })).toBeInTheDocument()
    expect(screen.getByText('Migración de Sistema Legacy', { selector: '[aria-current="page"]' })).toBeInTheDocument()
  })

  it('axe: 0 violations', async () => {
    const { container } = renderCase()
    expect(await axe(container)).toHaveNoViolations()
  })
})
