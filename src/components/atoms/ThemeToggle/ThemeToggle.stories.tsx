import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ThemeToggle } from './ThemeToggle'

const meta: Meta<typeof ThemeToggle> = {
  title: 'Atoms/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    backgrounds: { default: 'dark' },
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: true }] } },
    titan: { spec_id: 'EX-v2-ATOM-007', atomic_level: 'atom' },
  },
}

export default meta
type Story = StoryObj<typeof ThemeToggle>

export const Dark: Story = {
  name: 'Dark mode (default)',
}

export const Light: Story = {
  name: 'Light mode',
  parameters: { backgrounds: { default: 'light' } },
}
