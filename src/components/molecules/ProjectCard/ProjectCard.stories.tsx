import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ProjectCard } from './ProjectCard'

const meta: Meta<typeof ProjectCard> = {
  title: 'Molecules/ProjectCard',
  component: ProjectCard,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ProjectCard>

export const Default: Story = {
  args: {
    title: 'Aseguradora Solidaria — Portal v2',
    description: 'Ecosistema desacoplado basado en Micro-frontends y RAG forensic para Staff Architects.',
    tags: ['Next.js 15', 'MUI v6', 'Strapi v5', 'Ollama'],
    metric: { value: '98%', label: 'Coverage' },
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070',
  },
}

export const Simplified: Story = {
  args: {
    title: 'Minimal Project',
    description: 'A simple card without image or metrics to test layout stability.',
    tags: ['React', 'CSS'],
  },
}
