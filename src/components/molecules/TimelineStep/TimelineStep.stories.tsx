import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { TimelineStep } from './index'

const meta: Meta<typeof TimelineStep> = {
  title: 'Molecules/TimelineStep',
  component: TimelineStep,
  parameters: {
    layout: 'padded',
    titan: { spec_id: 'EX-v2-MOL-004', momentum: 'M3-Ola2' },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TimelineStep>

export const Default: Story = {
  args: {
    company: 'Rappi',
    role: 'Staff Product Manager',
    period: '2021 – 2024',
  },
}

export const Last: Story = {
  args: {
    company: 'Bancolombia',
    role: 'Senior Product Manager',
    period: '2018 – 2021',
    isLast: true,
  },
}

export const Timeline: Story = {
  render: () => (
    <div>
      <TimelineStep company="Rappi" role="Staff Product Manager" period="2021 – 2024" />
      <TimelineStep company="Bancolombia" role="Senior Product Manager" period="2018 – 2021" />
      <TimelineStep company="Frubana" role="Product Manager" period="2016 – 2018" isLast />
    </div>
  ),
}
