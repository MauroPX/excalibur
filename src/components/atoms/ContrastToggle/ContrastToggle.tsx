'use client'
import React from 'react'
import IconButton from '@mui/material/IconButton'
import ContrastRounded from '@mui/icons-material/ContrastRounded'
import { useColorMode } from '@/theme/ThemeRegistry'

const LABEL: Record<string, string> = {
  base: 'Contraste normal — pulsa para contraste medio',
  medium: 'Contraste medio — pulsa para contraste alto',
  high: 'Contraste alto — pulsa para volver al normal',
}

/**
 * Cicla el nivel de contraste M3: base → medio → alto → base. Cada nivel es un
 * esquema completo de tokens (ver src/theme/tokens.ts). Vive junto al toggle de
 * tema; el marcador `data-contrast` en <html> selecciona el bloque de globals.css.
 */
export function ContrastToggle() {
  const { contrast, cycleContrast } = useColorMode()
  return (
    <IconButton
      onClick={cycleContrast}
      aria-label={LABEL[contrast]}
      data-atomic="atom"
      data-component="ContrastToggle"
      data-contrast={contrast}
      className="ex-contrast-toggle"
      sx={{
        color: 'var(--md-sys-color-on-surface)',
        opacity: contrast === 'base' ? 0.7 : 1,
        '&:hover': { backgroundColor: 'var(--md-sys-color-surface-container)' },
      }}
    >
      <ContrastRounded sx={{ fontSize: 20 }} />
    </IconButton>
  )
}

export default ContrastToggle
