'use client'

import React from 'react'
import MuiButton from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import { styled } from '@mui/material/styles'

export interface ButtonProps {
  /** Variante del botón */
  variant?: 'filled' | 'outlined' | 'text' | 'cta'
  /** Texto a mostrar */
  label: string
  /** Función de click */
  onClick?: () => void
  /** Estado deshabilitado */
  disabled?: boolean
  /** Estado de carga */
  loading?: boolean
  /** Tipo de botón HTML */
  type?: 'button' | 'submit' | 'reset'
}

const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== 'variantCustom',
})<{ variantCustom: string }>(({ variantCustom }) => {
  const isCta = variantCustom === 'cta'
  const isFilled = variantCustom === 'filled' || isCta
  const isOutlined = variantCustom === 'outlined'
  
  return {
    textTransform: 'none',
    borderRadius: '8px',
    padding: '8px 16px',
    fontWeight: 500,
    fontFamily: 'inherit',
    position: 'relative',
    
    // Tokens M3 — variante cta usa su propio par de color (distinto de primary)
    backgroundColor: isCta
      ? 'var(--md-sys-color-cta)'
      : isFilled ? 'var(--md-sys-color-primary)' : 'transparent',
    color: isCta
      ? 'var(--md-sys-color-on-cta)'
      : isFilled
        ? 'var(--md-sys-color-on-primary)'
        : 'var(--md-sys-color-primary)',
    border: isOutlined 
      ? `1px solid var(--md-sys-color-primary)` 
      : 'none',
      
    '&:hover': {
      backgroundColor: isCta
        ? 'var(--md-sys-color-cta)'
        : isFilled ? 'var(--md-sys-color-primary)' : 'rgba(var(--md-sys-color-primary-rgb), 0.08)',
      opacity: 0.9,
    },
    
    // Estado disabled M3 — on-surface con opacidad (12% contenedor / 38% texto),
    // se adapta a light/dark en vez de un negro fijo
    '&.Mui-disabled': {
      backgroundColor: isFilled ? 'rgba(var(--md-sys-color-on-surface-rgb), 0.12)' : 'transparent',
      color: 'rgba(var(--md-sys-color-on-surface-rgb), 0.38)',
      borderColor: isOutlined ? 'rgba(var(--md-sys-color-on-surface-rgb), 0.12)' : 'none',
    },

    // Variante CTA — color propio (var(--md-sys-color-cta)/on-cta) + elevación extra
    ...(isCta && {
      boxShadow: '0px 2px 4px rgba(var(--md-sys-color-shadow-rgb), 0.2)',
    }),
  }
})

/**
 * Átomo Button universal para EXCALIBUR v2.0
 */
export const Button = ({
  variant = 'filled',
  label,
  onClick,
  disabled = false,
  loading = false,
  type = 'button',
}: ButtonProps) => {
  const muiVariant: 'contained' | 'outlined' | 'text' =
    variant === 'filled' || variant === 'cta' ? 'contained' :
    variant === 'outlined' ? 'outlined' : 'text'

  return (
    <StyledButton
      data-atomic="atom"
      data-component="Button"
      className={`ex-button ex-button--${variant}${loading ? ' ex-button--loading' : ''}${disabled ? ' ex-button--disabled' : ''}`}
      variant={muiVariant}
      variantCustom={variant}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
      disableElevation
    >
      {loading && (
        <CircularProgress
          size={20}
          thickness={5}
          sx={{
            color: 'inherit',
            position: 'absolute',
          }}
        />
      )}
      <span style={{ visibility: loading ? 'hidden' : 'visible' }}>
        {label}
      </span>
    </StyledButton>
  )
}

export default Button

