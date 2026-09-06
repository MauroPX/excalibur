import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { EvidenceLink } from './EvidenceLink'

const meta: Meta<typeof EvidenceLink> = {
  title: 'Atoms/EvidenceLink',
  component: EvidenceLink,
  parameters: {
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: true }] } },
    titan: { spec_id: 'EX-v2-ATOM-009', atomic_level: 'atom' },
  },
  args: { href: 'https://ejemplo.com', label: 'Producción', kind: 'produccion' },
}

export default meta
type Story = StoryObj<typeof EvidenceLink>

export const Produccion: Story = {}
export const Repo: Story = { args: { label: 'Repositorio', kind: 'repo', href: 'https://github.com/MauroPX/simon-v2-monitor' } }
export const Figma: Story = { args: { label: 'Demo Tutorial GEMAS', kind: 'figma', href: 'https://figma.com/proto/x' } }
export const Storybook: Story = { args: { label: 'Design System', kind: 'storybook', href: 'https://ejemplo.com/storybook' } }
export const Video: Story = { args: { label: 'Grabación (Loom)', kind: 'video', href: 'https://loom.com/share/x' } }

export const TodosLosTipos: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {(['produccion', 'preview', 'repo', 'storybook', 'chromatic', 'video', 'doc', 'figma', 'demo'] as const).map((k) => (
        <EvidenceLink key={k} href="#" label={k} kind={k} />
      ))}
    </div>
  ),
}
