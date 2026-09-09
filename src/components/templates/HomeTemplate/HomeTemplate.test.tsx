import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithIntl as render } from '@/test-utils/intl'
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
vi.mock('@/components/organisms/FlagshipSection', () => ({
  FlagshipSection: () => <section data-testid="flagship-section">FlagshipSection</section>,
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
vi.mock('@/components/organisms/IndustriesSection', () => ({
  IndustriesSection: () => <section data-testid="industries-section">IndustriesSection</section>,
}))
vi.mock('@/components/organisms/FaqSection', () => ({
  FaqSection: () => <section data-testid="faq-section">FaqSection</section>,
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
const mockFlagship = {
  badge: '★ Correos Chile', title: 'Portal B2B', summary: 'x',
  metrics: [], phases: [], figma: [], caseHref: '/casos/correos-chile',
}
const mockCaseProjects = [
  {
    slug: 'p1', title: 'Proyecto', description: 'Desc', tags: ['ia'],
    symptomTags: ['legacy'], roleTags: ['staff-architect'], audienceTags: ['cto'],
  },
]
const mockTitanModules = [
  { hubName: 'ATLAS', hubTitle: 'Arquitectura', description: 'Desc', momentum: 'M3' as const, commandsCount: 10 },
]

function renderHome(props = {}) {
  return render(
    <HomeTemplate
      heroData={mockHeroData as never}
      symptomCards={mockSymptomCards}
      roleCards={mockRoleCards}
      flagship={mockFlagship as never}
      caseProjects={mockCaseProjects}
      titanModules={mockTitanModules}
      stackCategories={[]}
      industries={[]}
      faqItems={[]}
      {...props}
    />
  )
}

describe('HomeTemplate v1.1.0', () => {
  it('CA-001: renderiza los 9 organismos (incl. flagship, industries, faq)', () => {
    renderHome()
    for (const id of [
      'hero', 'nav-system', 'flagship-section', 'cases-section',
      'titan-section', 'stack-section', 'industries-section', 'faq-section', 'contact-section',
    ]) {
      expect(screen.getByTestId(id)).toBeInTheDocument()
    }
  })

  it('CA-002: main tiene data-atomic=template y data-component=HomeTemplate', () => {
    renderHome()
    const main = screen.getByRole('main')
    expect(main).toHaveAttribute('data-atomic', 'template')
    expect(main).toHaveAttribute('data-component', 'HomeTemplate')
  })

  it('CA-004: secciones con ids para deeplink (incl. flagship, industries, faq)', () => {
    const { container } = renderHome()
    for (const sel of ['#hero', '#nav', '#flagship', '#casos', '#titan', '#stack', '#industries', '#faq', '#contacto']) {
      expect(container.querySelector(sel)).toBeInTheDocument()
    }
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
