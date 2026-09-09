import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export interface TitanModule {
  hubName: string
  hubTitle: string
  description: string
  momentum: 'M0' | 'M1' | 'M2' | 'M3' | 'M4' | 'M5'
  commandsCount: number
  features?: string[]
}

export interface TitanSectionProps {
  modules: TitanModule[]
  version?: string
}

const MOMENTUM_BG: Record<string, string> = {
  M0: 'var(--md-sys-color-error-container)',
  M1: 'var(--md-sys-color-secondary-container)',
  M2: 'var(--md-sys-color-tertiary-container)',
  M3: 'var(--md-sys-color-primary-container)',
  M4: 'var(--md-sys-color-secondary-container)',
  M5: 'var(--md-sys-color-primary-container)',
}

export const TitanSection: React.FC<TitanSectionProps> = ({ modules, version = 'v7.0' }) => {
  const totalCommands = modules.reduce((sum, m) => sum + m.commandsCount, 0)
  return (
    <Box
      component="section"
      data-atomic="organism"
      data-component="TitanSection"
      className="ex-titan-section"
      sx={{ py: 6, backgroundColor: 'var(--md-sys-color-surface)' }}
    >
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 2, sm: 3, md: 4 } }}>
      <Box className="ex-titan-section__header" sx={{ mb: 4 }}>
        <Box component="span" className="ex-titan-section__version-badge"
          sx={{ display: 'inline-block', px: 2, py: 0.5, borderRadius: 2,
                backgroundColor: 'var(--md-sys-color-primary)', color: 'var(--md-sys-color-on-primary)',
                fontSize: '0.75rem', fontWeight: 700, mb: 1 }}>
          TITAN {version}
        </Box>
        <Typography variant="h4" component="h2" sx={{ color: 'var(--md-sys-color-on-surface)', mb: 1 }}>
          Framework de trabajo
        </Typography>
        <Typography variant="body1" sx={{ color: 'var(--md-sys-color-on-surface)' }}>
          {modules.length} módulos · {totalCommands} comandos activos
        </Typography>
      </Box>

      <Box className="ex-titan-section__modules-grid"
        sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', md: 'repeat(3,1fr)' }, gap: 2 }}>
        {modules.map(mod => (
          <Box
            key={mod.hubName}
            component="article"
            className={`ex-titan-section__module-card ex-titan-section--${mod.momentum.toLowerCase()}`}
            sx={{ p: 3, borderRadius: 2, backgroundColor: MOMENTUM_BG[mod.momentum] ?? 'var(--md-sys-color-surface-container)' }}
          >
            <Box component="span" className="ex-titan-section__module-momentum"
              sx={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1,
                    color: 'var(--md-sys-color-on-surface)', display: 'block', mb: 1 }}>
              {mod.momentum}
            </Box>
            <Typography variant="h6" component="h3" sx={{ color: 'var(--md-sys-color-on-surface)', mb: 0.5 }}>
              {mod.hubName}
            </Typography>
            <Typography variant="body2" className="ex-titan-section__module-title"
              sx={{ color: 'var(--md-sys-color-on-surface)', fontWeight: 600, mb: 1 }}>
              {mod.hubTitle}
            </Typography>
            <Typography variant="body2" sx={{ color: 'var(--md-sys-color-on-surface)', mb: 2 }}>
              {mod.description}
            </Typography>
            <Typography variant="caption" className="ex-titan-section__module-stats"
              sx={{ color: 'var(--md-sys-color-on-surface)' }}>
              {mod.commandsCount} comandos
            </Typography>
          </Box>
        ))}
      </Box>
      </Box>
    </Box>
  )
}

export default TitanSection
