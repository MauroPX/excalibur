import type { Meta, StoryObj } from '@storybook/react'
import { Chip } from './Chip'
import React from 'react'

const meta: Meta<typeof Chip> = {
  title: 'Atoms/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Chip>

export const Default: Story = {
  args: {
    label: 'Next.js 15',
    selected: false,
  },
}

export const Selected: Story = {
  args: {
    label: 'React 19',
    selected: true,
  },
}

export const Deletable: Story = {
  args: {
    label: 'Technical Debt',
    onDelete: () => alert('Deleted!'),
  },
}

export const Disabled: Story = {
  args: {
    label: 'Locked Feature',
    disabled: true,
  },
}
