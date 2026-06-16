import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Button } from './index'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    titan: {
      spec_id: 'EX-v2-ATOM-001',
      momentum: 'M3-Ola1',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outlined', 'text', 'cta'],
    },
    onClick: { action: 'clicked' },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Filled: Story = {
  args: {
    variant: 'filled',
    label: 'Primary Button',
  },
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Outlined Button',
  },
}

export const Text: Story = {
  args: {
    variant: 'text',
    label: 'Text Button',
  },
}

export const CTA: Story = {
  args: {
    variant: 'cta',
    label: 'Call to Action',
  },
}

export const Loading: Story = {
  args: {
    label: 'Loading...',
    loading: true,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
  },
}
