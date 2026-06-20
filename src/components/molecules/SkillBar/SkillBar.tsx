'use client'

import React from 'react'
import { Box, Typography, LinearProgress, SvgIconProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Icon } from '@/components/atoms/Icon'

export interface SkillBarProps {
  /** Nombre de la habilidad */
  skill: string
  /** Nivel (0-100) */
  level: number
  /** Etiqueta descriptiva del nivel */
  levelLabel: string
  /** Icono opcional */
  icon?: React.ElementType<SvgIconProps>
}

const StyledSkillBar = styled(Box)({
  width: '100%',
  padding: '8px 0',
})

const Header = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '8px',
})

const CustomProgress = styled(LinearProgress)({
  height: '8px',
  borderRadius: '4px',
  backgroundColor: 'var(--md-sys-color-surface-container-highest)',
  '& .MuiLinearProgress-bar': {
    borderRadius: '4px',
    backgroundColor: 'var(--md-sys-color-primary)',
  },
})

/**
 * Molécula SkillBar para visualización de competencia técnica.
 * Basada en Blueprint EX-v2-MOL-003.
 */
export const SkillBar = ({
  skill,
  level,
  levelLabel,
  icon,
}: SkillBarProps) => {
  return (
    <StyledSkillBar data-atomic="molecule" data-component="SkillBar" className="ex-skill-bar">
      <Header className="ex-skill-bar__label-group">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          {icon && <Icon icon={icon} size="sm" color="var(--md-sys-color-primary)" />}
          <Typography variant="body1" sx={{ fontWeight: 600, color: 'var(--md-sys-color-on-surface)' }}>
            {skill}
          </Typography>
        </Box>
        <Typography variant="caption" sx={{ color: 'var(--md-sys-color-primary)', fontWeight: 700, textTransform: 'uppercase' }}>
          {levelLabel}
        </Typography>
      </Header>
      
      <CustomProgress 
        variant="determinate" 
        value={level} 
        className="ex-skill-bar__track"
        aria-label={`Nivel de ${skill}: ${levelLabel}`}
      />
    </StyledSkillBar>
  )
}

export default SkillBar
