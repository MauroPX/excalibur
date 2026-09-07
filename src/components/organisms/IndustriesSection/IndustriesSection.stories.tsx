import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { IndustriesSection } from './IndustriesSection'
import { INDUSTRIES } from '@/content/home'

const meta: Meta<typeof IndustriesSection> = {
  title: 'Organisms/IndustriesSection',
  component: IndustriesSection,
  parameters: {
    layout: 'fullscreen',
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: true }] } },
    titan: { spec_id: 'EX-v2-ORG-011', atomic_level: 'organism' },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof IndustriesSection>

export const Default: Story = {
  args: { industries: INDUSTRIES },
  name: '7 industrias (§7 Q5 reconciliada)',
}
