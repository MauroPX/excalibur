import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { NavSystem } from './NavSystem'

const symptomCards = [
  { title: 'Mi sistema es inaccesible', description: 'Auditoría WCAG 2.2 y eliminación de fallas con evidencia técnica verificable.', tag: 'cliente' as const, targetSlug: 'fdn' },
  { title: 'El TTM es demasiado largo', description: 'Frameworks de entrega que redujeron el time-to-market hasta un 75%.', tag: 'cliente' as const, targetSlug: 'bbva' },
  { title: 'No tenemos Design System', description: 'DS desde cero con gobernanza, tests y Chromatic en producción.', tag: 'cliente' as const, targetSlug: 'solidaria' },
  { title: 'Nuestra plataforma es legacy', description: 'Migración brownfield sin interrupciones. LCP de 25s a 2.5s en producción real.', tag: 'cliente' as const, targetSlug: 'fdn' },
]

const roleCards = [
  { title: 'Soy CTO / Founder', description: 'BBVA: -75% TTM. Correos Chile: TTM 12→6 meses.', tag: 'cliente' as const, targetSlug: 'bbva' },
  { title: 'Soy reclutador', description: '212 tests · 0 violations · DS en prod · 4 países · 10 años.', tag: 'reclutador' as const, targetSlug: 'solidaria' },
  { title: 'Soy PM / PO', description: 'TITAN v7.0: metodología M0-M5 sin pérdida de contexto.', tag: 'comunidad' as const, targetSlug: 'bbva' },
  { title: 'Soy líder de ingeniería', description: 'Next.js 15 + Strapi v5 + pgvector. LCP -90% con evidencia técnica.', tag: 'cliente' as const, targetSlug: 'fdn' },
]

const meta: Meta<typeof NavSystem> = {
  title: 'Organisms/NavSystem',
  component: NavSystem,
  parameters: {
    backgrounds: { default: 'dark' },
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: true }] } },
    titan: { spec_id: 'EX-v2-ORG-002', atomic_level: 'organism' },
  },
  args: { symptomCards, roleCards },
}

export default meta
type Story = StoryObj<typeof NavSystem>

export const TabSintomas: Story = {
  args: { defaultTab: 0 },
  name: 'Tab A — Síntomas',
}

export const TabRoles: Story = {
  args: { defaultTab: 1 },
  name: 'Tab B — Roles',
}
