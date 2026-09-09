'use client'
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {
  darkTokens, lightTokens, darkMcTokens, darkHcTokens, lightMcTokens, lightHcTokens,
} from '@/theme/tokens'
import { contrastRatio, contrastLevel } from './contrast'

export interface ColorRolesGalleryProps {
  /** Esquema base a mostrar */
  mode: 'dark' | 'light'
  /** Nivel de contraste — cada uno es un set completo de tokens */
  contrast?: 'base' | 'medium' | 'high'
}

type TokenSet = typeof darkTokens

const SCHEME: Record<string, TokenSet> = {
  'dark-base': darkTokens,
  'dark-medium': darkMcTokens,
  'dark-high': darkHcTokens,
  'light-base': lightTokens,
  'light-medium': lightMcTokens,
  'light-high': lightHcTokens,
}

/** Los 24 pares semánticos "on-X sobre X" — mismo set que docs/m3/COLOR_CONTRAST_AUDIT.md. */
const PAIRS: Array<{ fg: keyof TokenSet; bg: keyof TokenSet; label: string }> = [
  { fg: 'onPrimary', bg: 'primary', label: 'primary' },
  { fg: 'onPrimaryContainer', bg: 'primaryContainer', label: 'primary-container' },
  { fg: 'onSecondary', bg: 'secondary', label: 'secondary' },
  { fg: 'onSecondaryContainer', bg: 'secondaryContainer', label: 'secondary-container' },
  { fg: 'onTertiary', bg: 'tertiary', label: 'tertiary' },
  { fg: 'onTertiaryContainer', bg: 'tertiaryContainer', label: 'tertiary-container' },
  { fg: 'onError', bg: 'error', label: 'error' },
  { fg: 'onErrorContainer', bg: 'errorContainer', label: 'error-container' },
  { fg: 'onBackground', bg: 'background', label: 'background' },
  { fg: 'onSurface', bg: 'surface', label: 'surface' },
  { fg: 'onSurfaceVariant', bg: 'surfaceVariant', label: 'surface-variant' },
  { fg: 'onSurface', bg: 'surfaceContainer', label: 'surface-container' },
  { fg: 'onSurface', bg: 'surfaceContainerLow', label: 'surface-container-low' },
  { fg: 'onSurface', bg: 'surfaceContainerHigh', label: 'surface-container-high' },
  { fg: 'inverseOnSurface', bg: 'inverseSurface', label: 'inverse-surface' },
  { fg: 'onCta', bg: 'cta', label: 'cta' },
  { fg: 'onPrimaryFixed', bg: 'primaryFixed', label: 'primary-fixed' },
  { fg: 'onSecondaryFixed', bg: 'secondaryFixed', label: 'secondary-fixed' },
  { fg: 'onTertiaryFixed', bg: 'tertiaryFixed', label: 'tertiary-fixed' },
  { fg: 'onPrimaryFixedVariant', bg: 'primaryFixedDim', label: 'primary-fixed-dim' },
  { fg: 'onSecondaryFixedVariant', bg: 'secondaryFixedDim', label: 'secondary-fixed-dim' },
  { fg: 'onTertiaryFixedVariant', bg: 'tertiaryFixedDim', label: 'tertiary-fixed-dim' },
]

const LEVEL_COLOR: Record<string, string> = {
  AAA: 'var(--md-sys-color-tertiary)',
  AA: 'var(--md-sys-color-secondary)',
  FAIL: 'var(--md-sys-color-error)',
}

/**
 * Organismo — galería de roles de color M3 en vivo, leídos directo de
 * src/theme/tokens.ts (fuente generada por scripts/generate-tokens.mjs).
 * Reutilizado por ColorRolesHUD (FAB dev-only en la app) y por su propia
 * story de Storybook ("Foundations/Color", ver ColorRolesGallery.stories.tsx).
 */
export const ColorRolesGallery: React.FC<ColorRolesGalleryProps> = ({ mode, contrast = 'base' }) => {
  const tokens = SCHEME[`${mode}-${contrast}`] ?? (mode === 'dark' ? darkTokens : lightTokens)

  return (
    <Box
      component="ul"
      data-atomic="organism"
      data-component="ColorRolesGallery"
      className="ex-color-roles-gallery"
      aria-label={`Roles de color M3 — ${mode}, contraste ${contrast}`}
      sx={{ display: 'flex', flexDirection: 'column', gap: 1, listStyle: 'none', m: 0, p: 0 }}
    >
      {PAIRS.map(({ fg, bg, label }) => {
        const ratio = contrastRatio(tokens[fg], tokens[bg])
        const level = contrastLevel(ratio)
        return (
          <Box
            key={label}
            component="li"
            className="ex-color-roles-gallery__row"
            sx={{
              display: 'flex', alignItems: 'center', gap: 1.5, p: 1, borderRadius: 1,
              backgroundColor: tokens[bg], color: tokens[fg],
              border: '1px solid var(--md-sys-color-outline-variant)',
            }}
          >
            <Typography variant="body2" sx={{ flex: 1, fontWeight: 600 }}>
              {label}
            </Typography>
            <Typography variant="caption" sx={{ opacity: 0.85 }}>
              {tokens[bg]} / {tokens[fg]}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700, minWidth: 64, textAlign: 'right',
                color: LEVEL_COLOR[level],
                backgroundColor: 'var(--md-sys-color-surface)',
                borderRadius: 1, px: 1, py: 0.25,
              }}
            >
              {ratio.toFixed(2)}:1 {level}
            </Typography>
          </Box>
        )
      })}
    </Box>
  )
}

export default ColorRolesGallery
