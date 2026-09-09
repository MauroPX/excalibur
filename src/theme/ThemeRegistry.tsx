'use client'
import React, { createContext, useState, useEffect, useContext } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { darkTheme, lightTheme } from './index'

export type ColorMode = 'dark' | 'light'
export type ContrastLevel = 'base' | 'medium' | 'high'

interface ColorModeContextValue {
  mode: ColorMode
  contrast: ContrastLevel
  /** alterna light ↔ dark */
  toggle: () => void
  setMode: (m: ColorMode) => void
  setContrast: (c: ContrastLevel) => void
  /** base → medium → high → base */
  cycleContrast: () => void
}

const NEXT_CONTRAST: Record<ContrastLevel, ContrastLevel> = {
  base: 'medium',
  medium: 'high',
  high: 'base',
}

const ColorModeContext = createContext<ColorModeContextValue>({
  mode: 'dark',
  contrast: 'base',
  toggle: () => {},
  setMode: () => {},
  setContrast: () => {},
  cycleContrast: () => {},
})

export function useColorMode(): ColorModeContextValue {
  return useContext(ColorModeContext)
}

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ColorMode>('dark')
  const [contrast, setContrast] = useState<ContrastLevel>('base')

  useEffect(() => {
    const savedMode = localStorage.getItem('excalibur-theme')
    if (savedMode === 'dark' || savedMode === 'light') {
      setMode(savedMode)
    } else {
      setMode(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    }
    const savedContrast = localStorage.getItem('excalibur-contrast')
    if (savedContrast === 'medium' || savedContrast === 'high' || savedContrast === 'base') {
      setContrast(savedContrast)
    } else if (window.matchMedia('(prefers-contrast: more)').matches) {
      setContrast('high')
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', mode)
    if (contrast === 'base') root.removeAttribute('data-contrast')
    else root.setAttribute('data-contrast', contrast)
    localStorage.setItem('excalibur-theme', mode)
    localStorage.setItem('excalibur-contrast', contrast)
  }, [mode, contrast])

  const toggle = () => setMode((p) => (p === 'dark' ? 'light' : 'dark'))
  const cycleContrast = () => setContrast((p) => NEXT_CONTRAST[p])

  const theme = mode === 'dark' ? darkTheme : lightTheme

  return (
    <ColorModeContext.Provider value={{ mode, contrast, toggle, setMode, setContrast, cycleContrast }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
