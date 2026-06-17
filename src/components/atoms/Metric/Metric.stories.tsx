import type { Meta, StoryObj } from '@storybook/react'
import { Metric } from './Metric'

const meta: Meta<typeof Metric> = {
  title: 'Atoms/Metric',
  component: Metric,
  tags: ['autodocs'],
  argTypes: {
    trend: {
      control: 'select',
      options: ['positive', 'negative', 'neutral'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Metric>

export const Default: Story = {
  args: {
    value: '24',
    label: 'Forensic Artifacts',
    trend: 'neutral',
  },
}

export const Positive: Story = {
  args: {
    value: '+15%',
    label: 'Efficiency Boost',
    trend: 'positive',
  },
}

export const Negative: Story = {
  args: {
    value: '-5ms',
    label: 'Latency Reduction',
    trend: 'negative',
  },
}
