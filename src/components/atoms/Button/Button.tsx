'use client'

import React from 'react'
import { Button as MuiButton, CircularProgress } from '@mui/material'
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
    
    // Tokens M3
    backgroundColor: isFilled ? 'var(--md-sys-color-primary)' : 'transparent',
    color: isFilled 
      ? 'var(--md-sys-color-on-primary)' 
      : 'var(--md-sys-color-primary)',
    border: isOutlined 
      ? `1px solid var(--md-sys-color-primary)` 
      : 'none',
      
    '&:hover': {
      backgroundColor: isFilled 
        ? 'var(--md-sys-color-primary)' 
        : 'rgba(var(--md-sys-color-primary-rgb), 0.08)',
      opacity: 0.9,
    },
    
    '&.Mui-disabled': {
      backgroundColor: isFilled ? 'rgba(0, 0, 0, 0.12)' : 'transparent',
      color: 'rgba(0, 0, 0, 0.38)',
      borderColor: isOutlined ? 'rgba(0, 0, 0, 0.12)' : 'none',
    },

    // Variante CTA (podría tener más elevación o un color ligeramente distinto si se define en tokens)
    ...(isCta && {
      boxShadow: '0px 2px 4px rgba(0,0,0,0.2)',
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
  // Mapeo de variante personalizada a variante de MUI
  const muiVariant = variant === 'filled' || variant === 'cta' ? 'contained' : variant === 'outlined' ? 'outlined' : 'text'

  return (
    <StyledButton
      className={`ex-button ex-button--${variant}${loading ? ' ex-button--loading' : ''}${disabled ? ' ex-button--disabled' : ''}`}
      variant={muiVariant as any}
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

