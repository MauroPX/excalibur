import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from './index'
import FavoriteIcon from '@mui/icons-material/Favorite'
import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    titan: {
      spec_id: 'EX-v2-ATOM-004',
      momentum: 'M3-Ola1',
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Icon>

export const Default: Story = {
  args: {
    icon: FavoriteIcon,
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    icon: HomeIcon,
    size: 'lg',
    color: 'var(--md-sys-color-primary)',
  },
}

export const ExtraLarge: Story = {
  args: {
    icon: SettingsIcon,
    size: 'xl',
  },
}
