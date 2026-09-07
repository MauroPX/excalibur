import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { DecisionTable } from './DecisionTable'

const meta: Meta<typeof DecisionTable> = {
  title: 'Molecules/DecisionTable',
  component: DecisionTable,
  parameters: {
    layout: 'padded',
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: true }] } },
    titan: { spec_id: 'EX-v2-MOL-011', atomic_level: 'molecule' },
  },
}

export default meta
type Story = StoryObj<typeof DecisionTable>

export const FleetControl: Story = {
  name: 'FleetControl — decisiones de arquitectura frontend',
  args: {
    caption: 'Decisiones de arquitectura de FleetControl y su razón',
    rows: [
      {
        decision: 'Marcado de la tarjeta de estado',
        discarded: '<div> anidados (lo que generó la IA)',
        chosen: '<dl><dt><dd>',
        why: 'Semánticamente correcto para pares etiqueta-valor — un lector de pantalla anuncia "Velocidad: 84.5 km/h" como unidad coherente',
      },
      {
        decision: 'Actualización de posición en tiempo real',
        discarded: 'WebSocket nativo',
        chosen: 'Polling 5s + interpolación requestAnimationFrame',
        why: 'Netlify Functions no soporta WebSockets; la interpolación logra el mismo efecto visual sin servidor adicional',
      },
      {
        decision: 'Manejo de estado global',
        discarded: 'React Context',
        chosen: 'Zustand',
        why: 'El polling actualiza 12x/min — con Context se re-renderiza todo el árbol; con Zustand solo los componentes suscritos al slice exacto',
      },
      {
        decision: 'Manejo de fallo de red',
        discarded: 'Error genérico',
        chosen: '"Última posición conocida" con opacidad reducida + role="alert" + foco automático',
        why: 'Preserva información útil en vez de solo mostrar que algo falló',
      },
    ],
  },
}
