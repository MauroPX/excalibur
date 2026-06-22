import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { TitanSection } from './TitanSection'

const titanModules = [
  { hubName: 'Foundation', hubTitle: 'M0 — Visión y estructura', description: 'Diagnóstico, ADRs y gobernanza del proyecto. Sin M0 no hay base sólida.', momentum: 'M0' as const, commandsCount: 12 },
  { hubName: 'Strategy', hubTitle: 'M1 — Backlog y roadmap', description: 'Customer journeys, backlog priorizado y mapa de riesgos.', momentum: 'M1' as const, commandsCount: 10 },
  { hubName: 'Architecture', hubTitle: 'M2 — Spec y contratos', description: 'SPEC_DOCUMENT, DESIGN_TOKENS y contratos de API. Sin M2 no hay Forge.', momentum: 'M2' as const, commandsCount: 11 },
  { hubName: 'Execution', hubTitle: 'M3 — BFL + CI/CD', description: 'Sprints BFL con Blueprint→Forge→Lock. 26/26 componentes LOCKED.', momentum: 'M3' as const, commandsCount: 26 },
  { hubName: 'Intelligence', hubTitle: 'M4 — RAG y backend', description: 'Strapi v5 + pgvector + Claude API. La IA conoce cada proyecto.', momentum: 'M4' as const, commandsCount: 8 },
  { hubName: 'Operations', hubTitle: 'M5 — Monitoreo y mejora', description: 'Observabilidad, alertas y ciclos de mejora continua.', momentum: 'M5' as const, commandsCount: 6 },
]

const meta: Meta<typeof TitanSection> = {
  title: 'Organisms/TitanSection',
  component: TitanSection,
  parameters: {
    backgrounds: { default: 'dark' },
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: true }] } },
    titan: { spec_id: 'EX-v2-ORG-004', atomic_level: 'organism' },
  },
}

export default meta
type Story = StoryObj<typeof TitanSection>

export const Default: Story = {
  args: {
    modules: titanModules,
    version: 'v7.0',
  },
  name: 'TITAN v7.0 — 6 momentums',
}
