import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { NavTab } from './NavTab'
import React from 'react'

/** Iconos nativos para evitar ESM issues en Storybook si persisten */
const PersonIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
)

const HubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.51 1H7a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 8.6 15a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H12a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.51-1H17a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
)

const meta: Meta<typeof NavTab> = {
  title: 'Molecules/NavTab',
  component: NavTab,
  tags: ['autodocs'],
  argTypes: {
    active: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof NavTab>

export const Default: Story = {
  args: {
    label: 'Por Rol',
    symptom: 'Staff & Lead',
    icon: PersonIcon,
    active: false,
    onClick: () => console.log('Clicked!'),
  },
}

export const Active: Story = {
  args: {
    label: 'Por Síntoma',
    symptom: 'Problemas de Escala',
    icon: HubIcon,
    active: true,
    onClick: () => {},
  },
}
