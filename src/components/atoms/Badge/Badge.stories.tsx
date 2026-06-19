import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Badge } from './index'
import React from 'react'

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    titan: {
      spec_id: 'EX-v2-ATOM-003',
      momentum: 'M3-Ola1',
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Badge>

const Box = () => (
  <div style={{ width: 40, height: 40, backgroundColor: '#ccc', borderRadius: 4 }} />
)

export const Standard: Story = {
  args: {
    content: 9,
    children: <Box />,
  },
}

export const Dot: Story = {
  args: {
    variant: 'dot',
    children: <Box />,
  },
}

export const Error: Story = {
  args: {
    content: '!',
    color: 'error',
    children: <Box />,
  },
}

export const Primary: Story = {
  args: {
    content: 1,
    color: 'primary',
    children: <Box />,
  },
}
