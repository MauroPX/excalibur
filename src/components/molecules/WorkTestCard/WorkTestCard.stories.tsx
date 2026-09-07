import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { WorkTestCard } from './WorkTestCard'

const meta: Meta<typeof WorkTestCard> = {
  title: 'Molecules/WorkTestCard',
  component: WorkTestCard,
  parameters: {
    layout: 'padded',
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: true }] } },
    titan: { spec_id: 'EX-v2-MOL-010', atomic_level: 'molecule' },
  },
}

export default meta
type Story = StoryObj<typeof WorkTestCard>

export const PruebaTecnica: Story = {
  name: 'work-test — FleetControl',
  args: {
    slug: 'fleetcontrol',
    title: 'FleetControl — Monitor de Flota en Tiempo Real',
    valor:
      'No acepté las restricciones de la IA como definitivas: detecté y corregí cada vez que rompía accesibilidad o UX de movimiento — la diferencia entre usar IA y saber cuándo no seguirla.',
    href: '/pruebas-tecnicas/fleetcontrol',
    badge: { icon: '🔧', label: 'Prueba técnica' },
    caseType: 'work-test',
    tags: ['Design Engineer (UX/UI)', 'WCAG 2.1 AA', 'Next.js'],
  },
}

export const DiagnosticoAutodirigido: Story = {
  name: 'work-test — Solidaria (badge propio)',
  args: {
    slug: 'solidaria',
    title: 'Solidaria Portal — Diagnóstico + propuesta de arquitectura',
    valor:
      'Nadie me pidió esto. Antes de una entrevista, audité los 7 canales digitales de una aseguradora real y construí la propuesta que resuelve la fragmentación que encontré.',
    href: '/pruebas-tecnicas/solidaria',
    badge: { icon: '🔍', label: 'Diagnóstico autodirigido' },
    caseType: 'work-test',
    tags: ['Product Architecture', 'Design System', 'WCAG 2.2 AA'],
  },
}

export const MetaCaso: Story = {
  name: 'meta — EXCALIBUR',
  args: {
    slug: 'excalibur',
    title: 'EXCALIBUR — este mismo sitio',
    valor:
      'La misma metodología que aplico en Correos Chile, BBVA o FDN, aplicada a mi propio producto. Este sitio es el primer caso de estudio.',
    href: '/excalibur',
    badge: { icon: '📐', label: 'Caso propio' },
    caseType: 'meta',
    tags: ['Next.js 15', 'i18n bilingüe', 'WCAG 2.2 AA', '203 tests'],
  },
}
