import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FaqSection } from './FaqSection'
import { FAQ_ITEMS } from '@/content/home'

const meta: Meta<typeof FaqSection> = {
  title: 'Organisms/FaqSection',
  component: FaqSection,
  parameters: {
    layout: 'fullscreen',
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: true }] } },
    titan: { spec_id: 'EX-v2-ORG-009', atomic_level: 'organism' },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FaqSection>

export const Default: Story = {
  args: { items: FAQ_ITEMS },
  name: 'FAQ — 8 preguntas AEO',
}

export const Corta: Story = {
  args: { items: FAQ_ITEMS.slice(0, 3) },
  name: '3 preguntas',
}
