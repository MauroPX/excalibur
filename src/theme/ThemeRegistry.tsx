'use client'
import React, { createContext, useContext, useState, useEffect } from 'react'
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
    const stored = localStorage.getItem('excalibur-theme') as 'dark' | 'light' | null
    if (stored) {
      setMode(stored)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setMode(prefersDark ? 'dark' : 'light')
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode)
  }, [mode])

  const toggle = () => {
    setMode((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      localStorage.setItem('excalibur-theme', next)
      return next
    })
  }

  return (
    <ColorModeContext.Provider value={{ mode, toggle }}>
      <ThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
