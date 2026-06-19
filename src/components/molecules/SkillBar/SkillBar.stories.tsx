import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { SkillBar } from './SkillBar'
import React from 'react'

const StorageIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"></path>
    <path d="M21 12v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"></path>
    <path d="M3 10h18"></path>
    <path d="M3 14h18"></path>
  </svg>
)

const meta: Meta<typeof SkillBar> = {
  title: 'Molecules/SkillBar',
  component: SkillBar,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SkillBar>

export const Expert: Story = {
  args: {
    skill: 'Next.js 15 & React 19',
    level: 95,
    levelLabel: 'Expert / Staff',
    icon: StorageIcon,
  },
}

export const Advanced: Story = {
  args: {
    skill: 'Node.js & Backend Architecture',
    level: 85,
    levelLabel: 'Advanced',
  },
}
