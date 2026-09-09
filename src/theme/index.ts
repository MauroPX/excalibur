'use client'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { Roboto } from 'next/font/google'
import { darkTokens, lightTokens } from './tokens'

// Augmentación M3: MUI no trae un slot "tertiary" nativo — el M3 Color System
// (HCT) sí lo requiere como tercer rol de acento (distinto de primary/secondary).
declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary']
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary']
  }
}

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

function buildTheme(mode: 'dark' | 'light') {
  const tokens = mode === 'dark' ? darkTokens : lightTokens

  const base = createTheme({
    palette: {
      mode,
      primary: {
        main: tokens.primary,
        contrastText: tokens.onPrimary,
      },
      secondary: {
        main: tokens.secondary,
        contrastText: tokens.onSecondary,
      },
      error: {
        main: tokens.error,
        contrastText: tokens.onError,
      },
      tertiary: {
        main: tokens.tertiary,
        contrastText: tokens.onTertiary,
      },
      background: {
        default: tokens.background,
        paper: tokens.surfaceContainer,
      },
      text: {
        primary: tokens.onSurface,
        secondary: tokens.onSurfaceVariant,
      },
    },
    typography: {
      fontFamily: [roboto.style.fontFamily, 'Helvetica', 'Arial', 'sans-serif'].join(','),
      // lineHeight unitless: escala con el fontSize fluido de responsiveFontSizes
      // (con valores en rem el interlineado quedaba fijo al envolver en móvil).
      h1: { fontWeight: 700, fontSize: '2.5rem', lineHeight: 1.2 },
      h2: { fontWeight: 700, fontSize: '2rem', lineHeight: 1.2 },
      h3: { fontWeight: 600, fontSize: '1.75rem', lineHeight: 1.29 },
      h4: { fontWeight: 600, fontSize: '1.5rem', lineHeight: 1.33 },
      h5: { fontWeight: 600, fontSize: '1.25rem', lineHeight: 1.4 },
      h6: { fontWeight: 600, fontSize: '1rem', lineHeight: 1.5 },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '*': { boxSizing: 'border-box' },
          body: {
            backgroundColor: 'var(--md-sys-color-surface)',
            color: 'var(--md-sys-color-on-surface)',
            margin: 0,
            padding: 0,
          },
        },
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: { textTransform: 'none', fontWeight: 600, borderRadius: '8px' },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: { textTransform: 'none', fontWeight: 500 },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: { fontWeight: 500 },
        },
      },
    },
  })

  // Escala fluida de tipografía en breakpoints (h1–h6 + body): MUI reduce
  // los tamaños en xs/sm para que los titulares no desborden en móvil.
  // Con line-heights unitless, la alineación a grid de 4px de MUI funciona.
  return responsiveFontSizes(base, { factor: 2.2 })
}

export const darkTheme = buildTheme('dark')
export const lightTheme = buildTheme('light')

export default darkTheme
