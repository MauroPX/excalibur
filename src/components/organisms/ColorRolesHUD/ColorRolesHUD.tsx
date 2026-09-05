'use client'
import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import Typography from '@mui/material/Typography'
import { useColorMode } from '@/theme/ThemeRegistry'
import { ColorRolesGallery } from '@/components/organisms/ColorRolesGallery'

export interface ColorRolesHUDProps {
  /** Gate — pásalo como `process.env.NODE_ENV === 'development'` desde el layout */
  enabled?: boolean
}

/**
 * FAB de QA — EX-v2-ORG-008. Solo-dev (mismo patrón que InquisitorHUD): revisa
 * los 24 pares de color del rol activo antes de pushear a producción. Alt+C
 * para togglear (Alt+A ya lo usa InquisitorHUD). Posicionado bottom-left —
 * InquisitorHUD ocupa bottom-right.
 */
export const ColorRolesHUD: React.FC<ColorRolesHUDProps> = ({ enabled = false }) => {
  const [visible, setVisible] = useState(false)
  const { mode } = useColorMode()

  useEffect(() => {
    if (!enabled) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key === 'c') setVisible((prev) => !prev)
      if (e.key === 'Escape') setVisible(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <Fab
        size="small"
        onClick={() => setVisible((prev) => !prev)}
        aria-label={visible ? 'Cerrar revisión de roles de color' : 'Revisar roles de color'}
        aria-expanded={visible}
        data-atomic="organism"
        data-component="ColorRolesHUD"
        className="ex-color-roles-hud__fab"
        sx={{
          position: 'fixed', bottom: 16, left: 16, zIndex: 9999,
          backgroundColor: 'var(--md-sys-color-tertiary-container)',
          color: 'var(--md-sys-color-on-tertiary-container)',
          '&:hover': { backgroundColor: 'var(--md-sys-color-tertiary-container)', opacity: 0.9 },
        }}
      >
        🎨
      </Fab>

      {visible && (
        <Box
          role="complementary"
          aria-label="Panel de revisión de roles de color"
          className="ex-color-roles-hud__panel"
          sx={{
            position: 'fixed', bottom: 76, left: 16, zIndex: 9999,
            width: 420, maxHeight: '75vh', overflowY: 'auto',
            backgroundColor: 'var(--md-sys-color-surface-container-high)',
            border: '2px solid var(--md-sys-color-tertiary)',
            borderRadius: 2, p: 2, boxShadow: 4,
          }}
        >
          <Typography variant="h6" component="h2" sx={{ color: 'var(--md-sys-color-tertiary)', fontWeight: 700, fontSize: '0.9rem', mb: 1.5 }}>
            🎨 COLOR ROLES ({mode})
          </Typography>
          <ColorRolesGallery mode={mode} />
        </Box>
      )}
    </>
  )
}

export default ColorRolesHUD
