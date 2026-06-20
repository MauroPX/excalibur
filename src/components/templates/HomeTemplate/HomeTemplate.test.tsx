import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { axe, toHaveNoViolations } from 'jest-axe'
import { HomeTemplate } from './HomeTemplate'

expect.extend(toHaveNoViolations)

vi.mock('@/components/organisms/Hero', () => ({
  Hero: ({ title }: { title?: string }) => <section data-testid="hero">{title ?? 'Hero'}</section>,
}))
vi.mock('@/components/organisms/NavSystem', () => ({
  NavSystem: () => <section data-testid="nav-system">NavSystem</section>,
}))
vi.mock('@/components/organisms/CasesSection', () => ({
  CasesSection: () => <section data-testid="cases-section">CasesSection</section>,
}))
vi.mock('@/components/organisms/TitanSection', () => ({
  TitanSection: () => <section data-testid="titan-section">TitanSection</section>,
}))
vi.mock('@/components/organisms/StackSection', () => ({
  StackSection: () => <section data-testid="stack-section">StackSection</section>,
}))
vi.mock('@/components/organisms/ContactSection', () => ({
  ContactSection: () => <section data-testid="contact-section">ContactSection</section>,
}))
vi.mock('@/components/organisms/InquisitorHUD', () => ({
  InquisitorHUD: () => null,
}))

const mockHeroData = {
  title: 'Staff Product Architect',
  subtitle: 'Mauricio GO',
  metrics: [{ value: '12+', label: 'Años' }],
}
const mockSymptomCards = [{ title: 'Legacy', description: 'Sistema viejo' }]
const mockRoleCards = [{ title: 'CTO', description: 'Para CTOs' }]
const mockCaseProjects = [
  {
    slug: 'p1', title: 'Proyecto', description: 'Desc', tags: ['ia'],
    symptomTags: ['legacy'], roleTags: ['staff-architect'], audienceTags: ['cto'],
  },
]
const mockTitanModules = [
  { hubName: 'ATLAS', hubTitle: 'Arquitectura', description: 'Desc', momentum: 'M3' as const, commandsCount: 10 },
]
const mockSkills = [
  { name: 'React', level: 9, category: 'frontend' as const },
]

function renderHome(props = {}) {
  return render(
    <HomeTemplate
      heroData={mockHeroData as never}
      symptomCards={mockSymptomCards}
      roleCards={mockRoleCards}
      caseProjects={mockCaseProjects}
      titanModules={mockTitanModules}
      skills={mockSkills}
      {...props}
    />
  )
}

describe('HomeTemplate', () => {
  it('CA-001: renderiza los 6 organismos', () => {
    renderHome()
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByTestId('nav-system')).toBeInTheDocument()
    expect(screen.getByTestId('cases-section')).toBeInTheDocument()
    expect(screen.getByTestId('titan-section')).toBeInTheDocument()
    expect(screen.getByTestId('stack-section')).toBeInTheDocument()
    expect(screen.getByTestId('contact-section')).toBeInTheDocument()
  })

  it('CA-002: main tiene data-atomic=template y data-component=HomeTemplate', () => {
    renderHome()
    const main = screen.getByRole('main')
    expect(main).toHaveAttribute('data-atomic', 'template')
    expect(main).toHaveAttribute('data-component', 'HomeTemplate')
  })

  it('CA-004: secciones tienen ids para deeplink', () => {
    const { container } = renderHome()
    expect(container.querySelector('#hero')).toBeInTheDocument()
    expect(container.querySelector('#nav')).toBeInTheDocument()
    expect(container.querySelector('#casos')).toBeInTheDocument()
    expect(container.querySelector('#titan')).toBeInTheDocument()
    expect(container.querySelector('#stack')).toBeInTheDocument()
    expect(container.querySelector('#contacto')).toBeInTheDocument()
  })

  it('CA-005: skip-link presente', () => {
    renderHome()
    expect(screen.getByText(/Saltar al contenido/i)).toBeInTheDocument()
  })

  it('CA-006: main con id=main-content', () => {
    const { container } = renderHome()
    expect(container.querySelector('main#main-content')).toBeInTheDocument()
  })

  it('axe: 0 violations', async () => {
    const { container } = renderHome()
    expect(await axe(container)).toHaveNoViolations()
  })
})
