import type { Meta, StoryObj } from '@storybook/nextjs'
import { AudienceCard } from './AudienceCard'

const meta: Meta<typeof AudienceCard> = {
  title: 'Molecules/AudienceCard',
  component: AudienceCard,
  parameters: {
    titan: { spec_id: 'EX-v2-MOL-006', momentum: 'M3-Ola2' },
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: true }] } },
  },
  argTypes: {
    type: { control: 'select', options: ['symptom', 'role'] },
    tag: { control: 'select', options: ['cliente', 'reclutador', 'comunidad', 'normal', undefined] },
  },
}
export default meta

type Story = StoryObj<typeof AudienceCard>

const mockFn = () => {}

export const Default: Story = {
  args: {
    type: 'symptom',
    title: 'Mi producto no convierte',
    description: 'Tengo tráfico pero las métricas de conversión están estancadas desde hace 3 trimestres.',
    tag: 'cliente',
  },
}

export const RoleCard: Story = {
  args: {
    type: 'role',
    title: 'CPO / Head of Product',
    description: 'Busco un Staff Architect que eleve la madurez del equipo de producto.',
    tag: 'reclutador',
  },
}

export const SinTag: Story = {
  args: {
    type: 'symptom',
    title: 'Necesito escalar el equipo',
    description: 'El equipo creció pero la cadencia de entrega no mejoró.',
  },
}

export const ConOnClick: Story = {
  args: {
    type: 'role',
    title: 'CTO / Tech Lead',
    description: 'Busco alguien con visión end-to-end.',
    onClick: mockFn,
  },
}

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <AudienceCard
        type="symptom"
        title="Mi producto no convierte"
        description="Tengo tráfico pero las métricas de conversión están estancadas desde hace 3 trimestres."
        tag="cliente"
      />
      <AudienceCard
        type="role"
        title="CPO / Head of Product"
        description="Busco un Staff Architect que eleve la madurez del equipo de producto."
        tag="reclutador"
      />
    </div>
  ),
}
