'use client'

import React from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'

export interface ChipProps {
  /** Texto a mostrar en el chip */
  label: string
  /** Indica si el chip está seleccionado */
  selected?: boolean
  /** Función a ejecutar al eliminar el chip */
  onDelete?: () => void
  /** Icono opcional a la izquierda */
  icon?: React.ReactNode
  /** Indica si el componente está deshabilitado */
  disabled?: boolean
}

const StyledChip = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'selected' && prop !== 'deletable',
})<{ selected?: boolean; deletable?: boolean }>(({ selected }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '6px 12px',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  border: '1px solid var(--md-sys-color-outline)',
  backgroundColor: selected 
    ? 'var(--md-sys-color-primary-container)' 
    : 'var(--md-sys-color-secondary-container)',
  color: selected 
    ? 'var(--md-sys-color-on-primary-container)' 
    : 'var(--md-sys-color-on-secondary-container)',
  
  '&:hover': {
    opacity: 0.85,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },

  '&.ex-chip--disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },
}))

/** Icono de cierre personalizado para evitar problemas de ESM en test */
const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)

/**
 * Átomo Chip para selección compacta e indicadores deletreables.
 * Basado en Blueprint EX-v2-ATOM-006.
 */
export const Chip = ({
  label,
  selected = false,
  onDelete,
  icon,
  disabled = false,
}: ChipProps) => {
  return (
    <StyledChip
      role="button"
      aria-pressed={selected}
      className={`ex-chip ${selected ? 'ex-chip--selected' : ''} ${onDelete ? 'ex-chip--deletable' : ''} ${disabled ? 'ex-chip--disabled' : ''}`}
      selected={selected}
      deletable={!!onDelete}
    >
      {icon && (
        <Box component="span" className="ex-chip__icon" sx={{ display: 'flex' }}>
          {icon}
        </Box>
      )}
      
      <Typography
        variant="body2"
        className="ex-chip__label"
        sx={{ fontWeight: selected ? 600 : 400, fontFamily: 'inherit' }}
      >
        {label}
      </Typography>

      {onDelete && (
        <IconButton
          size="small"
          onClick={(e) => {
            e.stopPropagation()
            onDelete()
          }}
          className="ex-chip__delete-icon"
          sx={{ padding: 0, color: 'inherit', minWidth: 'auto' }}
          aria-label={`Eliminar ${label}`}
        >
          <CloseIcon />
        </IconButton>
      )}
    </StyledChip>
  )
}

export default Chip
