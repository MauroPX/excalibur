'use client'
import React, { createContext, useState, useEffect, useContext } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { darkTheme, lightTheme } from './index'

interface ColorModeContextValue {
  mode: 'dark' | 'light'
  toggle: () => void
}

const ColorModeContext = createContext<ColorModeContextValue>({
  mode: 'dark',
  toggle: () => {},
})

export function useColorMode(): ColorModeContextValue {
  return useContext(ColorModeContext)
}

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const saved = localStorage.getItem('excalibur-theme')
    if (saved === 'dark' || saved === 'light') {
      setMode(saved)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setMode(prefersDark ? 'dark' : 'light')
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode)
    localStorage.setItem('excalibur-theme', mode)
  }, [mode])

  const toggle = () => setMode(prev => (prev === 'dark' ? 'light' : 'dark'))

  const theme = mode === 'dark' ? darkTheme : lightTheme

  return (
    <ColorModeContext.Provider value={{ mode, toggle }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
