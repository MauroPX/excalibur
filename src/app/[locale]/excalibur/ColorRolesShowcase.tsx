'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { ColorRolesGallery } from '@/components/organisms/ColorRolesGallery'

/**
 * Evidencia viva del sistema de tokens de EXCALIBUR: la galería de roles M3
 * (los 22 pares semánticos on-X/X) en los DOS esquemas, con su ratio de
 * contraste calculado en el momento desde `src/theme/tokens.ts` — la misma
 * fuente que genera `globals.css`. Cero hex hardcoded; el nivel AA/AAA es real.
 *
 * En dev esto también está en el FAB `ColorRolesHUD`; aquí es público y forma
 * parte del meta-caso (antes solo se describía en prosa).
 */
export function ColorRolesShowcase() {
  return (
    <Box
      component="section"
      aria-labelledby="color-roles-heading"
      sx={{ px: { xs: 2, md: 4 }, py: 4, backgroundColor: 'var(--md-sys-color-surface-container-low)' }}
    >
      <Box sx={{ maxWidth: '1100px', mx: 'auto' }}>
        <Typography
          id="color-roles-heading"
          variant="h5"
          component="h2"
          sx={{ color: 'var(--md-sys-color-on-surface)', mb: 1 }}
        >
          Roles de color M3 — verificados en vivo
        </Typography>
        <Typography variant="body2" sx={{ color: 'var(--md-sys-color-on-surface-variant)', mb: 3, maxWidth: '640px' }}>
          Los 22 pares semánticos (texto sobre fondo) en los dos esquemas, leídos
          directo de la fuente de tokens. El ratio de contraste y el nivel WCAG se
          calculan al renderizar — no es una imagen.
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 4,
          }}
        >
          <Box>
            <Typography variant="overline" component="h3" sx={{ color: 'var(--md-sys-color-on-surface-variant)', display: 'block', mb: 1 }}>
              Esquema oscuro
            </Typography>
            <ColorRolesGallery mode="dark" />
          </Box>
          <Box>
            <Typography variant="overline" component="h3" sx={{ color: 'var(--md-sys-color-on-surface-variant)', display: 'block', mb: 1 }}>
              Esquema claro
            </Typography>
            <ColorRolesGallery mode="light" />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ColorRolesShowcase
