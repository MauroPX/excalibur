import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { FlagshipSection } from './FlagshipSection'
import { FLAGSHIP } from '@/content/home'

const meta: Meta<typeof FlagshipSection> = {
  title: 'Organisms/FlagshipSection',
  component: FlagshipSection,
  parameters: {
    layout: 'fullscreen',
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: true }] } },
    titan: { spec_id: 'EX-v2-ORG-010', atomic_level: 'organism' },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FlagshipSection>

export const Default: Story = {
  args: { data: FLAGSHIP },
  name: 'Correos Chile — Portal Empresas B2B',
}
