import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { CasesSection } from './CasesSection'

const realProjects = [
  {
    slug: 'fdn',
    title: 'FDN — LCP -90% y WCAG AAA',
    description: 'Migración Drupal 7 → Next.js 14. LCP 25.2s → 2.5s. 654 fallas WCAG eliminadas. Certificado WCAG AAA 2024.',
    tags: ['GovTech', 'Next.js', 'WCAG', 'A11Y', 'Performance'],
    symptomTags: ['legacy', 'a11y', 'performance'],
    roleTags: ['staff-architect', 'tech-lead'],
    audienceTags: ['cliente'],
    metric: { value: '-90%', label: 'LCP' },
  },
  {
    slug: 'solidaria',
    title: 'Solidaria — Design System 0 violations',
    description: 'Design System desde cero con 212 tests, 0 axe violations, Storybook en Chromatic.',
    tags: ['Design System', 'WCAG', 'Storybook', 'Insurtech'],
    symptomTags: ['design-system', 'a11y'],
    roleTags: ['staff-architect', 'designops'],
    audienceTags: ['cliente', 'reclutador'],
    metric: { value: '212', label: 'tests · 0 violations' },
  },
  {
    slug: 'bbva',
    title: 'BBVA — Time-to-market -75%',
    description: 'Framework GEMAS + Proyecto Brickell. Digitalización 100% contratación Pyme en Colombia & Panamá.',
    tags: ['Banca', 'Fintech', 'SAFe', 'Design System'],
    symptomTags: ['legacy', 'team-scaling', 'design-system'],
    roleTags: ['staff-architect', 'product-manager'],
    audienceTags: ['cliente'],
    metric: { value: '-75%', label: 'time-to-market' },
  },
]

const meta: Meta<typeof CasesSection> = {
  title: 'Organisms/CasesSection',
  component: CasesSection,
  parameters: {
    backgrounds: { default: 'dark' },
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: true }] } },
    titan: { spec_id: 'EX-v2-ORG-003', atomic_level: 'organism' },
  },
}

export default meta
type Story = StoryObj<typeof CasesSection>

export const Default: Story = {
  args: { projects: realProjects },
}

export const Empty: Story = {
  args: { projects: [] },
  name: 'Empty state',
}

export const Filtered: Story = {
  args: {
    projects: realProjects.filter(p => p.symptomTags.includes('a11y')),
  },
  name: 'Filtered (a11y tag)',
}
