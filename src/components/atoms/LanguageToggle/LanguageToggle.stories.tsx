import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { LanguageToggle } from './LanguageToggle'

const meta: Meta<typeof LanguageToggle> = {
  title: 'Atoms/LanguageToggle',
  component: LanguageToggle,
  parameters: {
    backgrounds: { default: 'dark' },
    a11y: { config: { rules: [{ id: 'color-contrast', enabled: true }] } },
    titan: { spec_id: 'EX-v2-ATOM-008', atomic_level: 'atom' },
  },
}

export default meta
type Story = StoryObj<typeof LanguageToggle>

export const Spanish: Story = {
  name: 'ES (default) — ofrece cambiar a EN',
  args: { currentLocale: 'es' },
}

export const English: Story = {
  name: 'EN — ofrece cambiar a ES',
  args: { currentLocale: 'en' },
}
