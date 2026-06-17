'use client'

import React from 'react'
import { Box, SvgIconProps } from '@mui/material'

export interface IconProps {
  /** Componente del icono de MUI */
  icon: React.ElementType<SvgIconProps>
  /** Tamaño predefinido */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /** Color (token o string) */
  color?: string
  /** Etiqueta para accesibilidad */
  ariaLabel?: string
}

const sizeMap = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 48,
}

/**
 * Átomo Icon para unificación de iconografía
 */
export const Icon = ({
  icon: IconComponent,
  size = 'md',
  color = 'inherit',
  ariaLabel,
}: IconProps) => {
  return (
    <Box
      component="span"
      className={`ex-icon ex-icon--${size}`}
      role={ariaLabel ? 'img' : undefined}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: sizeMap[size],
        height: sizeMap[size],
        color: color.startsWith('var') ? color : 'inherit',
      }}
      aria-label={ariaLabel}
      aria-hidden={!ariaLabel}
    >
      <IconComponent sx={{ fontSize: sizeMap[size] }} />
    </Box>
  )
}

export default Icon

