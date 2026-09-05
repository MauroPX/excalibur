import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { CasePage } from './CasePage'

// Datos reales del portafolio — mismos 3 casos que src/app/casos/[slug]/page.tsx.
// Mantener en sync si esa data cambia (candidato a factorizar en un fixture
// compartido cuando se migre a Strapi — ver TRAZABILIDAD EX-v2-DATA-001).

const fdn = {
  slug: 'fdn',
  title: 'FDN — LCP -90% y WCAG AAA',
  description: 'Migración del portal institucional de la Financiera de Desarrollo Nacional de Drupal 7 a Next.js 14. LCP de 25.2s a 2.5s (-90%). 654 fallas WCAG eliminadas. Certificado WCAG AAA 2024.',
  tags: ['GovTech', 'Next.js', 'WCAG', 'A11Y', 'Performance', 'Strapi'],
  metrics: [
    { value: '-90%', label: 'LCP (25.2s → 2.5s)' },
    { value: '654', label: 'fallas WCAG eliminadas' },
    { value: 'AAA', label: 'certificado WCAG 2024' },
    { value: '2024', label: 'en producción' },
  ],
  timeline: [
    { company: 'FDN', role: 'Auditoría WCAG 2.2 + Performance', period: 'Mes 1-2' },
    { company: 'FDN', role: 'Arquitectura Next.js + Strapi v5', period: 'Mes 2-4' },
    { company: 'FDN', role: 'Migración brownfield + Cloudflare WAF', period: 'Mes 4-7' },
    { company: 'FDN', role: 'Certificación WCAG AAA + Go-live', period: 'Mes 7-9', isLast: true },
  ],
  techStack: [
    { skill: 'Next.js 14', level: 92, levelLabel: 'Experto' },
    { skill: 'WCAG 2.2 / A11Y', level: 95, levelLabel: 'Experto' },
    { skill: 'Strapi v5 + pgvector', level: 88, levelLabel: 'Avanzado' },
    { skill: 'Cloudflare WAF', level: 78, levelLabel: 'Avanzado' },
  ],
  nextCase: { slug: 'solidaria', title: 'Solidaria — 212 tests · 0 violations' },
}

const solidaria = {
  slug: 'solidaria',
  title: 'Solidaria — Design System 0 violations',
  description: 'Design System desde cero para Solidaria Portal (Insurtech). Gobernanza real, 212 tests con Vitest + jest-axe, 0 axe violations, Storybook en Chromatic con baseline establecido en producción.',
  tags: ['Design System', 'WCAG', 'Storybook', 'Insurtech', 'React', 'Chromatic'],
  metrics: [
    { value: '0', label: 'axe violations' },
    { value: '212', label: 'tests verdes' },
    { value: 'DS', label: 'en producción' },
    { value: '2025', label: 'en producción' },
  ],
  timeline: [
    { company: 'Solidaria', role: 'Auditoría A11Y + Design Tokens', period: 'Mes 1' },
    { company: 'Solidaria', role: 'Átomos + Moléculas + CI/CD', period: 'Mes 1-3' },
    { company: 'Solidaria', role: 'Organismos + Storybook + Chromatic', period: 'Mes 3-5' },
    { company: 'Solidaria', role: 'Tests 212 · Baseline · Go-live', period: 'Mes 5-6', isLast: true },
  ],
  techStack: [
    { skill: 'React + MUI v6', level: 90, levelLabel: 'Experto' },
    { skill: 'Vitest + jest-axe', level: 88, levelLabel: 'Avanzado' },
    { skill: 'Storybook 8 + Chromatic', level: 85, levelLabel: 'Avanzado' },
    { skill: 'Design Tokens M3', level: 82, levelLabel: 'Avanzado' },
  ],
  nextCase: { slug: 'bbva', title: 'BBVA — Time-to-market -75%' },
}

const bbva = {
  slug: 'bbva',
  title: 'BBVA — Time-to-market -75%',
  description: 'Arquitectura de producto end-to-end para BBVA Colombia & Panamá. Framework GEMAS + Proyecto Brickell. Digitalización 100% del proceso de contratación Pyme en 2 países.',
  tags: ['Banca', 'Fintech', 'SAFe', 'Design System', 'Figma', 'GovTech'],
  metrics: [
    { value: '-75%', label: 'time-to-market' },
    { value: '100%', label: 'contratación digital Pyme' },
    { value: '2', label: 'países (Colombia + Panamá)' },
    { value: '2024-2026', label: 'en producción' },
  ],
  timeline: [
    { company: 'BBVA', role: 'Framework GEMAS + Discovery', period: '2024 Q1' },
    { company: 'BBVA', role: 'Proyecto Brickell — Arquitectura Pyme', period: '2024 Q2-Q3' },
    { company: 'BBVA', role: 'Design System + Figma Variables', period: '2024 Q4' },
    { company: 'BBVA', role: 'Rollout Colombia + Panamá', period: '2025-2026', isLast: true },
  ],
  techStack: [
    { skill: 'SAFe Agile', level: 90, levelLabel: 'Experto' },
    { skill: 'Figma Variables + DS', level: 88, levelLabel: 'Avanzado' },
    { skill: 'TITAN v7.0', level: 95, levelLabel: 'Experto' },
    { skill: 'Product Architecture', level: 92, levelLabel: 'Experto' },
  ],
  nextCase: { slug: 'fdn', title: 'FDN — LCP -90% y WCAG AAA' },
}

const meta: Meta<typeof CasePage> = {
  title: 'Templates/CasePage',
  component: CasePage,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'dark' },
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: true }] } },
    titan: { spec_id: 'EX-v2-TMPL-002', atomic_level: 'template' },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CasePage>

export const FDN: Story = {
  args: { caseData: fdn },
  name: 'FDN — GovTech / WCAG AAA',
}

export const Solidaria: Story = {
  args: { caseData: solidaria },
  name: 'Solidaria — Design System',
}

export const BBVA: Story = {
  args: { caseData: bbva },
  name: 'BBVA — Banca / SAFe',
}

export const SinSiguienteCaso: Story = {
  args: { caseData: { ...bbva, nextCase: null } },
  name: 'Sin siguiente caso (último del ciclo)',
}
