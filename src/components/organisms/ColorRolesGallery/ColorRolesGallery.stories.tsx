import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { ColorRolesGallery } from './ColorRolesGallery'

/**
 * Aparece en el sidebar de Storybook bajo "Foundations/Color" (estilo BCS
 * bcs-frontend) aunque el archivo vive en organisms/ por convención de
 * gobernanza del proyecto — el título de Storybook es independiente de la ruta.
 */
const meta: Meta<typeof ColorRolesGallery> = {
  title: 'Foundations/Color',
  component: ColorRolesGallery,
  parameters: {
    layout: 'padded',
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: true }] } },
    titan: { spec_id: 'EX-v2-ORG-007', atomic_level: 'organism' },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ColorRolesGallery>

export const Dark: Story = {
  name: 'Dark — 21 pares en vivo',
  args: { mode: 'dark' },
  parameters: { backgrounds: { default: 'dark' } },
}

export const Light: Story = {
  name: 'Light — 21 pares en vivo',
  args: { mode: 'light' },
  parameters: { backgrounds: { default: 'light' } },
}
