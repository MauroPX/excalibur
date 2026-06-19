import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Hero } from './index'

const meta: Meta<typeof Hero> = {
  title: 'Organisms/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
    titan: { spec_id: 'EX-v2-HERO-001', momentum: 'M3-Ola2' },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Hero>

const baseMetrics = [
  { value: '+3.2M', label: 'ARR generado', trend: 'positive' as const },
  { value: '7', label: 'productos lanzados', trend: 'neutral' as const },
  { value: '96%', label: 'retención', trend: 'positive' as const },
]

export const Default: Story = {
  args: {
    headline: 'Construyo sistemas que el equipo opera sin mí',
    subheadline: 'Staff Product Architect disponible para proyectos Q3 2026.',
    ctaLabel: 'Ver proyectos',
    ctaHref: '#proyectos',
    secondaryCtaLabel: 'Descargar CV',
    secondaryCtaHref: '/cv.pdf',
    metrics: baseMetrics,
  },
}

export const NoSubheadline: Story = {
  args: {
    headline: 'Construyo sistemas que el equipo opera sin mí',
    ctaLabel: 'Ver proyectos',
    ctaHref: '#proyectos',
    metrics: baseMetrics,
  },
}

export const Mobile375: Story = {
  ...Default,
  parameters: {
    ...meta.parameters,
    viewport: { defaultViewport: 'mobile1' },
  },
}

export const Desktop1440: Story = {
  ...Default,
  parameters: {
    ...meta.parameters,
    viewport: { defaultViewport: 'desktop' },
  },
}
