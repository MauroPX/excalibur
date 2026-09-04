'use client'

import React from 'react'
import Chip from '@mui/material/Chip'
import { styled } from '@mui/material/styles'

export interface TagProps {
  /** Texto de la etiqueta */
  label: string
  /** Color semántico o de tema */
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'info'
  /** Tamaño de la etiqueta */
  size?: 'small' | 'medium' | 'large'
  /** Variante visual */
  variant?: 'filled' | 'outlined'
  /** Icono opcional a la izquierda */
  icon?: React.ReactElement
}

const StyledTag = styled(Chip, {
  shouldForwardProp: (prop) => prop !== 'customSize',
})<{ customSize: string }>(({ customSize }) => ({
  borderRadius: '4px',
  fontFamily: 'inherit',
  fontWeight: 500,
  
  ...(customSize === 'small' && {
    height: '24px',
    fontSize: '0.75rem',
  }),
  ...(customSize === 'medium' && {
    height: '32px',
    fontSize: '0.875rem',
  }),
  ...(customSize === 'large' && {
    height: '40px',
    fontSize: '1rem',
  }),

  // M3 Colors (Simplified mapping)
  '&.MuiChip-filledPrimary': {
    backgroundColor: 'var(--md-sys-color-primary-container)',
    color: 'var(--md-sys-color-on-primary-container)',
  },
  '&.MuiChip-filledSecondary': {
    backgroundColor: 'var(--md-sys-color-secondary-container)',
    color: 'var(--md-sys-color-on-secondary-container)',
  },
  '&.MuiChip-filledError': {
    backgroundColor: 'var(--md-sys-color-error-container)',
    color: 'var(--md-sys-color-on-error-container)',
  },
}))

/**
 * Átomo Tag para categorización y estados
 */
export const Tag = ({
  label,
  color = 'primary',
  size = 'medium',
  variant = 'filled',
  icon,
}: TagProps) => {
  return (
    <StyledTag
      data-atomic="atom"
      data-component="Tag"
      label={label}
      color={color}
      variant={variant}
      customSize={size}
      icon={icon}
      className={`ex-tag ex-tag--${color} ex-tag--${size} ex-tag--${variant}`}
    />
  )
}

export default Tag
