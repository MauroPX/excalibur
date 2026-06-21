import type { Meta, StoryObj } from '@storybook/nextjs'
import { RoadmapSplitButton } from './RoadmapSplitButton'

const meta: Meta<typeof RoadmapSplitButton> = {
  title: 'Molecules/RoadmapSplitButton',
  component: RoadmapSplitButton,
  args: {
    options: [
      { label: 'Todo', value: 'todos' },
      { label: 'Por síntoma', value: 'symptoms' },
      { label: 'Por rol', value: 'roles' },
    ],
    selectedValue: 'todos',
    onChange: () => {},
  },
}

export default meta

type Story = StoryObj<typeof RoadmapSplitButton>

export const Default: Story = {}

export const WithPrimaryLabel: Story = {
  args: {
    primaryLabel: 'Ver por',
    selectedValue: 'symptoms',
  },
}

export const SingleOption: Story = {
  args: {
    options: [{ label: 'Solo opción', value: 'single' }],
    selectedValue: 'single',
  },
}
