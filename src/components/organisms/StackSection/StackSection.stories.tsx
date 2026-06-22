import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { StackSection } from './StackSection'

const allSkills = [
  { name: 'React / Next.js', level: 90, category: 'frontend' as const },
  { name: 'TypeScript', level: 88, category: 'frontend' as const },
  { name: 'MUI / Design Systems', level: 85, category: 'design' as const },
  { name: 'Node.js / Express', level: 75, category: 'backend' as const },
  { name: 'PostgreSQL + pgvector', level: 72, category: 'backend' as const },
  { name: 'Product Strategy', level: 95, category: 'process' as const },
  { name: 'Claude / LLMs', level: 80, category: 'ai' as const },
  { name: 'Figma', level: 78, category: 'design' as const },
  { name: 'Storybook + Chromatic', level: 85, category: 'design' as const },
  { name: 'CI/CD GitHub Actions', level: 80, category: 'process' as const },
  { name: 'Strapi v5', level: 78, category: 'backend' as const },
  { name: 'RAG / pgvector', level: 75, category: 'ai' as const },
]

const meta: Meta<typeof StackSection> = {
  title: 'Organisms/StackSection',
  component: StackSection,
  parameters: {
    backgrounds: { default: 'dark' },
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: true }] } },
    titan: { spec_id: 'EX-v2-ORG-005', atomic_level: 'organism' },
  },
}

export default meta
type Story = StoryObj<typeof StackSection>

export const Default: Story = {
  args: { skills: allSkills, title: 'Stack técnico' },
  name: 'Full stack (12 skills)',
}

export const AIFocused: Story = {
  args: {
    skills: [
      { name: 'Claude / LLMs', level: 80, category: 'ai' as const },
      { name: 'RAG / pgvector', level: 75, category: 'ai' as const },
      { name: 'Gemini API', level: 70, category: 'ai' as const },
      ...allSkills.filter(s => s.category !== 'ai'),
    ],
    title: 'Stack técnico — AI focus',
  },
  name: 'AI Focused',
}
