import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ContactSection } from './ContactSection'

const meta: Meta<typeof ContactSection> = {
  title: 'Organisms/ContactSection',
  component: ContactSection,
  parameters: {
    backgrounds: { default: 'dark' },
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: true }] } },
    titan: { spec_id: 'EX-v2-ORG-006', atomic_level: 'organism' },
  },
}

export default meta
type Story = StoryObj<typeof ContactSection>

export const Default: Story = {
  args: { defaultChannel: 'linkedin' },
  name: 'LinkedIn (default)',
}

export const Email: Story = {
  args: { defaultChannel: 'email' },
  name: 'Email channel',
}
