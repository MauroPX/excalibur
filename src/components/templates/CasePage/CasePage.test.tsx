import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { axe, toHaveNoViolations } from 'jest-axe'
import { CasePage } from './CasePage'
import { validateCaseData } from './validateCaseData'
import type { CasePageData } from './types'

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
vi.mock('@/components/molecules/EvidenceLinks', () => ({
  EvidenceLinks: ({ links }: { links: Array<{ label: string }> }) => (
    <div data-testid="evidence-links">{links.map(l => <span key={l.label}>{l.label}</span>)}</div>
  ),
}))
vi.mock('@/components/molecules/DecisionTable', () => ({
  DecisionTable: ({ rows }: { rows: Array<{ decision: string }> }) => (
    <div data-testid="decision-table">{rows.map(r => <span key={r.decision}>{r.decision}</span>)}</div>
  ),
}))
vi.mock('@/components/molecules/AiDisclosure', () => ({
  AiDisclosure: ({ items }: { items: string[] }) => (
    <div data-testid="ai-disclosure">{items.map(i => <span key={i}>{i}</span>)}</div>
  ),
}))
vi.mock('./CasePageNav', () => ({
  CasePageNav: ({ nextCase }: { nextCase: { title: string } | null }) => (
    <nav data-testid="case-page-nav">{nextCase?.title ?? 'no-next'}</nav>
  ),
}))

const mockCaseData: CasePageData = {
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

function renderCase(overrides: Partial<CasePageData> = {}) {
  return render(<CasePage caseData={{ ...mockCaseData, ...overrides }} />)
}

describe('CasePage — v1.0.0 (sin cambios)', () => {
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

describe('CasePage — v1.1.0 (bloques condicionales)', () => {
  it('CA-011: `valor` renderiza un <h2> "En una frase" + la frase, tras el header', () => {
    renderCase({ valor: 'La disciplina de investigación importa tanto como el hallazgo.' })
    expect(screen.getByRole('heading', { level: 2, name: 'En una frase' })).toBeInTheDocument()
    expect(screen.getByText(/La disciplina de investigación importa/)).toBeInTheDocument()
  })

  it('CA-011: sin `valor` no aparece el bloque', () => {
    renderCase()
    expect(screen.queryByRole('heading', { name: 'En una frase' })).not.toBeInTheDocument()
  })

  it('CA-012: STAR-L renderiza Situación/Objetivo/Resultado/Aprendizaje como <h2>', () => {
    renderCase({
      situacion: 'Contexto de la prueba.',
      objetivo: 'Qué se buscaba demostrar.',
      resultado: 'Resultado verificable en prosa.',
      aprendizaje: 'Lo que cambió el siguiente proyecto.',
    })
    for (const label of ['Situación', 'Objetivo', 'Resultado', 'Aprendizaje']) {
      expect(screen.getByRole('heading', { level: 2, name: label })).toBeInTheDocument()
    }
  })

  it('CA-013: `accion` renderiza como <DecisionTable> bajo <h2> "Acción — decisiones"', () => {
    renderCase({
      accion: [
        { decision: 'Estado global', discarded: 'Context', chosen: 'Zustand', why: 'menos renders' },
      ],
    })
    expect(screen.getByRole('heading', { level: 2, name: /Acción/ })).toBeInTheDocument()
    expect(screen.getByTestId('decision-table')).toBeInTheDocument()
    expect(screen.getByText('Estado global')).toBeInTheDocument()
  })

  it('CA-014 / R-6: `evidencia-viva` ⇒ EvidenceLinks, nunca secciones numeradas', () => {
    renderCase({
      caseFormat: 'evidencia-viva',
      accessLinks: [{ kind: 'repo', label: 'Repositorio', href: 'https://example.com' }],
      sections: [{ num: '01', title: 'No debe salir', body: 'x' }],
    })
    expect(screen.getByTestId('evidence-links')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Accesos y evidencia' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Documento' })).not.toBeInTheDocument()
    expect(screen.queryByText('No debe salir')).not.toBeInTheDocument()
  })

  it('CA-014 / R-6: `documento-estrategico` ⇒ secciones numeradas, nunca EvidenceLinks', () => {
    renderCase({
      caseFormat: 'documento-estrategico',
      accessLinks: [{ kind: 'repo', label: 'No debe salir', href: 'https://example.com' }],
      sections: [
        { num: '01', title: 'El problema', body: 'Descripción del problema.' },
        { num: '02', title: 'Metodología', body: 'Detalle.', chips: ['Android gama baja'] },
      ],
    })
    expect(screen.getByRole('heading', { level: 2, name: 'Documento' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /El problema/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /Metodología/ })).toBeInTheDocument()
    expect(screen.getByText('Android gama baja')).toBeInTheDocument()
    expect(screen.queryByTestId('evidence-links')).not.toBeInTheDocument()
  })

  it('CA-015: `aiDeclared` ⇒ bloque <AiDisclosure> con items', () => {
    renderCase({ aiDeclared: { items: ['3 correcciones documentadas', 'ver fuente'] } })
    expect(screen.getByTestId('ai-disclosure')).toBeInTheDocument()
    expect(screen.getByText('3 correcciones documentadas')).toBeInTheDocument()
  })

  it('CA-016: footer con la frase exacta + badge de header', () => {
    renderCase({
      badge: { icon: '🔧', label: 'Prueba técnica' },
      footerDisclaimer: 'Prueba técnica de selección — no un encargo remunerado.',
    })
    expect(screen.getByText('Prueba técnica')).toBeInTheDocument()
    expect(
      screen.getByText('Prueba técnica de selección — no un encargo remunerado.'),
    ).toBeInTheDocument()
  })

  it('R-5: `estado="parcial"` ⇒ badge de estado visible + estadoNota', () => {
    renderCase({ estado: 'parcial', estadoNota: 'No construido ni aprobado en su totalidad.' })
    expect(screen.getByText('Caso parcial')).toBeInTheDocument()
    expect(screen.getByText('No construido ni aprobado en su totalidad.')).toBeInTheDocument()
  })

  it('CA-017: `methodology` ⇒ chips enlazados a /metodologia#slug; `momentumsApplied` ⇒ lista', () => {
    renderCase({
      methodology: [{ slug: 'ddd-bounded-contexts', label: 'Domain-Driven Design' }],
      momentumsApplied: ['M1', 'M3'],
    })
    const link = screen.getByRole('link', { name: 'Domain-Driven Design' })
    expect(link).toHaveAttribute('href', '/metodologia#ddd-bounded-contexts')
    expect(screen.getByText(/Momentums TITAN aplicados: M1 · M3/)).toBeInTheDocument()
  })

  it('CA-017: `methodology[].detailHref` explícito gana sobre el href derivado', () => {
    renderCase({
      methodology: [
        { slug: 'star-l', label: 'STAR-L', detailHref: '/metodologia/star-l' },
      ],
    })
    expect(screen.getByRole('link', { name: 'STAR-L' })).toHaveAttribute('href', '/metodologia/star-l')
  })

  it('CA-018: retrocompat — un caso solo-v1.0.0 no renderiza ningún bloque nuevo', () => {
    renderCase()
    expect(screen.queryByRole('heading', { name: 'En una frase' })).not.toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Situación' })).not.toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Metodología aplicada' })).not.toBeInTheDocument()
    expect(screen.queryByTestId('decision-table')).not.toBeInTheDocument()
    expect(screen.queryByTestId('evidence-links')).not.toBeInTheDocument()
    expect(screen.queryByTestId('ai-disclosure')).not.toBeInTheDocument()
    expect(screen.queryByText(/no un encargo remunerado/)).not.toBeInTheDocument()
    // lo v1.0.0 sigue intacto
    expect(screen.getByTestId('metric-row')).toBeInTheDocument()
    expect(screen.getAllByTestId('timeline-step')).toHaveLength(2)
    expect(screen.getAllByTestId('skill-bar')).toHaveLength(2)
  })

  it('CA-018: main expone data-case-type / data-case-format con defaults', () => {
    renderCase()
    const main = screen.getByRole('main')
    expect(main).toHaveAttribute('data-case-type', 'client')
    expect(main).toHaveAttribute('data-case-format', 'evidencia-viva')
  })

  it('axe: 0 violations — variante evidencia-viva completa', async () => {
    const { container } = renderCase({
      badge: { icon: '🔧', label: 'Prueba técnica' },
      valor: 'Frase de valor.',
      situacion: 'Situación.',
      objetivo: 'Objetivo.',
      accion: [{ decision: 'd', discarded: 'x', chosen: 'y', why: 'z' }],
      resultado: 'Resultado.',
      aprendizaje: 'Aprendizaje.',
      methodology: [{ slug: 'star-l', label: 'STAR-L' }],
      momentumsApplied: ['M1'],
      processTransformation: { before: 'a', approach: 'b', capabilityInstalled: 'c' },
      accessLinks: [{ kind: 'repo', label: 'Repo', href: 'https://example.com' }],
      aiDeclared: { items: ['item'] },
      footerDisclaimer: 'Prueba técnica de selección — no un encargo remunerado.',
    })
    expect(await axe(container)).toHaveNoViolations()
  })

  it('axe: 0 violations — variante documento-estrategico con estado parcial', async () => {
    const { container } = renderCase({
      caseFormat: 'documento-estrategico',
      caseType: 'work-test',
      estado: 'parcial',
      estadoNota: 'Nota.',
      badge: { icon: '📐', label: 'Estimación propia' },
      valor: 'Frase.',
      objetivo: 'Objetivo.',
      aprendizaje: 'Aprendizaje.',
      sections: [
        { num: '01', title: 'El problema', body: 'Texto.', table: { headers: ['Método', 'Evidencia'], rows: [['Funnel', 'Dónde caen']] } },
      ],
      footerDisclaimer: 'Propuesta de arquitectura — estimación propia, no un entregable ya construido o aprobado.',
    })
    expect(await axe(container)).toHaveNoViolations()
  })
})

describe('validateCaseData — R-2 (build-time)', () => {
  const workTestBase: CasePageData = {
    ...mockCaseData,
    slug: 'fleetcontrol',
    caseType: 'work-test',
    objetivo: 'Demostrar decisiones defendibles.',
    aprendizaje: 'Corregir la IA con criterio propio no es opcional.',
    footerDisclaimer: 'Prueba técnica de selección — no un encargo remunerado.',
  }

  it('pasa un caso client sin campos v1.1.0', () => {
    expect(() => validateCaseData(mockCaseData)).not.toThrow()
  })

  it('pasa un work-test con objetivo + aprendizaje + footerDisclaimer', () => {
    expect(() => validateCaseData(workTestBase)).not.toThrow()
    expect(validateCaseData(workTestBase)).toBe(workTestBase)
  })

  it('lanza si un work-test no trae `objetivo`', () => {
    const noObjetivo: CasePageData = { ...workTestBase }
    delete (noObjetivo as Partial<CasePageData>).objetivo
    expect(() => validateCaseData(noObjetivo)).toThrow(/objetivo/)
  })

  it('lanza si un meta-caso no trae `footerDisclaimer` ni `aprendizaje`', () => {
    const bare: CasePageData = { ...workTestBase, caseType: 'meta' }
    delete (bare as Partial<CasePageData>).footerDisclaimer
    delete (bare as Partial<CasePageData>).aprendizaje
    expect(() => validateCaseData(bare)).toThrow(
      /aprendizaje.*footerDisclaimer|footerDisclaimer.*aprendizaje/,
    )
  })

  it('un string en blanco cuenta como ausente', () => {
    expect(() => validateCaseData({ ...workTestBase, footerDisclaimer: '   ' })).toThrow(/footerDisclaimer/)
  })
})
