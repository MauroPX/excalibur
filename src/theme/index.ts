import { createTheme, type Theme } from '@mui/material/styles'
import { Roboto } from 'next/font/google'
import { darkTokens, lightTokens } from './tokens'

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const fontFamily = [roboto.style.fontFamily, 'Helvetica', 'Arial', 'sans-serif'].join(',')

function buildTheme(mode: 'dark' | 'light'): Theme {
  const t = mode === 'dark' ? darkTokens : lightTokens
  return createTheme({
    palette: {
      mode,
      primary: { main: t.primary, contrastText: t.onPrimary },
      secondary: { main: t.secondary, contrastText: t.onSecondary },
      error: { main: t.error, contrastText: t.onError },
      background: { default: t.surface, paper: t.surfaceContainer },
      text: { primary: t.onSurface, secondary: t.onSurfaceVariant },
    },
    typography: {
      fontFamily,
      h1: { fontWeight: 700, fontSize: '57px', lineHeight: '64px', letterSpacing: '-0.25px' },
      h2: { fontWeight: 700, fontSize: '45px', lineHeight: '52px' },
      h3: { fontWeight: 600, fontSize: '36px', lineHeight: '44px' },
      h4: { fontWeight: 600, fontSize: '32px', lineHeight: '40px' },
      h5: { fontWeight: 600, fontSize: '28px', lineHeight: '36px' },
      h6: { fontWeight: 600, fontSize: '24px', lineHeight: '32px' },
      subtitle1: { fontWeight: 500, fontSize: '16px', lineHeight: '24px', letterSpacing: '0.15px' },
      subtitle2: { fontWeight: 500, fontSize: '14px', lineHeight: '20px', letterSpacing: '0.1px' },
      body1: { fontWeight: 400, fontSize: '16px', lineHeight: '24px', letterSpacing: '0.5px' },
      body2: { fontWeight: 400, fontSize: '14px', lineHeight: '20px', letterSpacing: '0.25px' },
      caption: { fontWeight: 400, fontSize: '12px', lineHeight: '16px', letterSpacing: '0.4px' },
      overline: { fontWeight: 500, fontSize: '11px', lineHeight: '16px', letterSpacing: '0.5px' },
      button: { fontWeight: 500, fontSize: '14px', letterSpacing: '0.1px', textTransform: 'none' },
    },
    shape: { borderRadius: 12 },
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
        styleOverrides: { root: { textTransform: 'none', fontWeight: 500 } },
      },
      MuiChip: {
        styleOverrides: { root: { fontWeight: 500 } },
      },
    },
  })
}

export const darkTheme = buildTheme('dark')
export const lightTheme = buildTheme('light')
export default darkTheme
