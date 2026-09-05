import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ColorRolesHUD } from './ColorRolesHUD'

const meta: Meta<typeof ColorRolesHUD> = {
  title: 'Organisms/ColorRolesHUD',
  component: ColorRolesHUD,
  parameters: {
    backgrounds: { default: 'dark' },
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: true }] } },
    titan: { spec_id: 'EX-v2-ORG-008', atomic_level: 'organism' },
  },
}

export default meta
type Story = StoryObj<typeof ColorRolesHUD>

export const Enabled: Story = {
  name: 'Habilitado (clic en el FAB 🎨 para abrir)',
  args: { enabled: true },
}

export const Disabled: Story = {
  name: 'Deshabilitado (producción) — no renderiza nada',
  args: { enabled: false },
}
