import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { MetricRow } from './index'

const meta: Meta<typeof MetricRow> = {
  title: 'Molecules/MetricRow',
  component: MetricRow,
  parameters: {
    layout: 'padded',
    titan: { spec_id: 'EX-v2-MOL-005', momentum: 'M3-Ola2' },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MetricRow>

export const Default: Story = {
  args: {
    metrics: [
      { value: '+3.2M', label: 'ARR generado', trend: 'positive' },
      { value: '7', label: 'productos lanzados', trend: 'neutral' },
      { value: '96%', label: 'retención', trend: 'positive' },
    ],
  },
}

export const TwoMetrics: Story = {
  args: {
    metrics: [
      { value: '12', label: 'años experiencia', trend: 'neutral' },
      { value: '4', label: 'industrias', trend: 'neutral' },
    ],
  },
}
