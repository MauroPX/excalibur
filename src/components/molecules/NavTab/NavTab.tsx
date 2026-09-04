'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ButtonBase from '@mui/material/ButtonBase'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import { styled } from '@mui/material/styles'
import { Icon } from '@/components/atoms/Icon'

export interface NavTabProps {
  /** Etiqueta principal */
  label: string
  /** Icono de MUI o Componente SVG */
  icon: React.ElementType<SvgIconProps>
  /** Indica si la pestaña está activa */
  active?: boolean
  /** Subtexto opcional (síntoma o rol) */
  symptom?: string
  /** Función al hacer clic */
  onClick: () => void
}

const StyledTab = styled(ButtonBase, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active?: boolean }>(({ active }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '12px 16px',
  borderRadius: '12px',
  width: '100%',
  minWidth: '120px',
  minHeight: '80px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  backgroundColor: active 
    ? 'var(--md-sys-color-primary-container)' 
    : 'transparent',
  color: active 
    ? 'var(--md-sys-color-on-primary-container)' 
    : 'var(--md-sys-color-on-surface-variant)',
  border: `1px solid ${active ? 'var(--md-sys-color-primary)' : 'transparent'}`,
  
  '&:hover': {
    backgroundColor: active 
      ? 'var(--md-sys-color-primary-container)' 
      : 'rgba(var(--md-sys-color-on-surface-rgb), 0.08)',
    transform: 'translateY(-2px)',
  },

  '& .ex-nav-tab__icon-wrapper': {
    marginBottom: '4px',
    color: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '& .ex-nav-tab__label': {
    fontWeight: active ? 700 : 500,
    fontSize: '0.875rem',
    textAlign: 'center',
  },

  '& .ex-nav-tab__symptom': {
    fontSize: '0.75rem',
    opacity: 0.8,
    marginTop: '2px',
    textAlign: 'center',
  },
}))

/**
 * Molécula NavTab para el sistema de navegación del portafolio.
 * Basada en Blueprint EX-v2-MOL-001.
 */
export const NavTab = ({
  label,
  icon: IconComponent,
  active = false,
  symptom,
  onClick,
}: NavTabProps) => {
  return (
    <StyledTab
      data-atomic="molecule"
      data-component="NavTab"
      active={active}
      onClick={onClick}
      className={`ex-nav-tab ${active ? 'ex-nav-tab--active' : ''}`}
      aria-selected={active}
      role="tab"
    >
      <Box className="ex-nav-tab__icon-wrapper">
        <Icon icon={IconComponent} size="md" color="inherit" />
      </Box>
      
      <Typography component="span" className="ex-nav-tab__label">
        {label}
      </Typography>

      {symptom && (
        <Typography component="span" className="ex-nav-tab__symptom">
          {symptom}
        </Typography>
      )}
    </StyledTab>
  )
}

export default NavTab
