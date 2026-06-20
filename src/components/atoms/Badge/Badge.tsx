'use client'

import React, { ReactNode } from 'react'
import { Badge as MuiBadge } from '@mui/material'
import { styled } from '@mui/material/styles'

export interface BadgeProps {
  /** Contenido numérico o texto corto */
  content?: string | number
  /** Variante visual */
  variant?: 'standard' | 'dot'
  /** Color semántico */
  color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'
  /** Ajuste según la forma del hijo */
  overlap?: 'circular' | 'rectangular'
  /** Elemento sobre el cual se posiciona el badge */
  children?: ReactNode
}

const StyledBadge = styled(MuiBadge)(({ color }) => ({
  '& .MuiBadge-badge': {
    fontFamily: 'inherit',
    fontWeight: 600,
    fontSize: '0.75rem',
    
    // M3 Color Tokens
    ...(color === 'error' && {
      backgroundColor: 'var(--md-sys-color-error)',
      color: 'var(--md-sys-color-on-error)',
    }),
    ...(color === 'primary' && {
      backgroundColor: 'var(--md-sys-color-primary)',
      color: 'var(--md-sys-color-on-primary)',
    }),
    // Otros colores pueden mapearse aquí según sea necesario
  },
}))

/**
 * Átomo Badge para indicadores y notificaciones
 */
export const Badge = ({
  content,
  variant = 'standard',
  color = 'error',
  overlap = 'rectangular',
  children,
}: BadgeProps) => {
  return (
    <StyledBadge
      data-atomic="atom"
      data-component="Badge"
      badgeContent={content}
      variant={variant}
      color={color}
      overlap={overlap}
      className={`ex-badge ex-badge--${variant} ex-badge--${color}`}
    >
      {children}
    </StyledBadge>
  )
}

export default Badge
