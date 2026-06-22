import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Box from '@mui/material/Box'
import { InquisitorHUD } from './InquisitorHUD'

const meta: Meta<typeof InquisitorHUD> = {
  title: 'Organisms/InquisitorHUD',
  component: InquisitorHUD,
  decorators: [
    (Story) => (
      <Box sx={{ minHeight: 400, position: 'relative' }}>
        <Story />
      </Box>
    ),
  ],
  parameters: {
    backgrounds: { default: 'dark' },
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: true }] } },
    titan: { spec_id: 'EX-v2-A11Y-001', atomic_level: 'organism' },
  },
}

export default meta
type Story = StoryObj<typeof InquisitorHUD>

export const Enabled: Story = {
  args: { enabled: true },
  name: 'Enabled (Alt+A to toggle panel)',
}

export const Disabled: Story = {
  args: { enabled: false },
  name: 'Disabled (renders nothing)',
}
