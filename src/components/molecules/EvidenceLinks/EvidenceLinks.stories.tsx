import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { EvidenceLinks } from './EvidenceLinks'

const meta: Meta<typeof EvidenceLinks> = {
  title: 'Molecules/EvidenceLinks',
  component: EvidenceLinks,
  parameters: {
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: true }] } },
    titan: { spec_id: 'EX-v2-MOL-009', atomic_level: 'molecule' },
  },
}

export default meta
type Story = StoryObj<typeof EvidenceLinks>

export const FleetControl: Story = {
  name: 'FleetControl — bloque de acceso',
  args: {
    title: 'Bloque de acceso',
    links: [
      { kind: 'produccion', label: 'Producción', href: 'https://simon-v2-monitor-rmxm.vercel.app/?demo=true' },
      { kind: 'preview', label: 'Preview (rama feat)', href: 'https://simon-v2-monitor-rmxm-git-feat-capa-2-lemaogo-9238s-projects.vercel.app' },
      { kind: 'repo', label: 'Repositorio', href: 'https://github.com/MauroPX/simon-v2-monitor' },
      { kind: 'video', label: 'Grabación (Loom)', href: 'https://loom.com/share/dc3ef2ab5fb84e9b8c52709b26b8f915' },
    ],
  },
}

export const ConNotasInstruccionales: Story = {
  name: 'Solidaria — con notas de acceso',
  args: {
    links: [
      { kind: 'produccion', label: 'Producción', href: 'https://solidaria-portal.vercel.app' },
      {
        kind: 'demo',
        label: 'Cómo recorrerlo',
        href: 'https://solidaria-portal.vercel.app',
        note: 'botón "¿Cómo funciona?" en landing → tour guiado; login maria@ejemplo.com + OTP 123456 → tour automático',
      },
      { kind: 'chromatic', label: 'Design System', href: 'https://6a2d61bf2ded342d004f1b8f-gjmdfbfoac.chromatic.com' },
    ],
  },
}
