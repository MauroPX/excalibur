import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { AiDisclosure } from './AiDisclosure'

const meta: Meta<typeof AiDisclosure> = {
  title: 'Molecules/AiDisclosure',
  component: AiDisclosure,
  parameters: {
    layout: 'padded',
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: true }] } },
    titan: { spec_id: 'EX-v2-MOL-012', atomic_level: 'molecule' },
  },
}

export default meta
type Story = StoryObj<typeof AiDisclosure>

export const FleetControl: Story = {
  name: 'FleetControl — con fuente',
  args: {
    items: [
      '3 correcciones documentadas a código generado por IA',
      'Semántica de accesibilidad rota → corregida con criterio propio',
      'UX de movimiento (prefers-reduced-motion) añadida manualmente',
    ],
    source: {
      label: 'TECHNICAL_CHALLENGE_RESPONSE.md',
      href: 'https://github.com/MauroPX/simon-v2-monitor/blob/main/TECHNICAL_CHALLENGE_RESPONSE.md',
    },
  },
}

export const Codesa: Story = {
  name: 'Codesa — sin fuente enlazable',
  args: {
    items: [
      'TITAN Research Intelligence Skill v5.1 — declarado tal como aparece en la entrega',
      'Etapas: generación de hipótesis, selección de marcos teóricos, borrador de metodología',
      'Validación humana en cada etapa + cita de cierre sobre el proceso',
    ],
  },
}
