import type { Meta, StoryObj } from '@storybook/react'
import { Tag } from './index'

const meta: Meta<typeof Tag> = {
  title: 'Atoms/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    titan: {
      spec_id: 'EX-v2-ATOM-002',
      momentum: 'M3-Ola1',
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tag>

export const Primary: Story = {
  args: {
    label: 'Primary Tag',
    color: 'primary',
  },
}

export const Error: Story = {
  args: {
    label: 'Error Tag',
    color: 'error',
  },
}

export const Small: Story = {
  args: {
    label: 'Small Tag',
    size: 'small',
  },
}

export const Outlined: Story = {
  args: {
    label: 'Outlined Tag',
    variant: 'outlined',
  },
}
