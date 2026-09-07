import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { StackSection } from './StackSection'
import { STACK_CATEGORIES } from '@/content/home'

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
  args: { categories: STACK_CATEGORIES },
  name: '6 categorías reales (radar = casos aplicados)',
}

export const TresCategorias: Story = {
  args: { categories: STACK_CATEGORIES.slice(0, 3) },
  name: '3 categorías',
}
