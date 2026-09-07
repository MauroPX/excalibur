'use client'

import React, { useId } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export interface AiDisclosureProps {
  /** Puntos declarados sobre el uso de IA en el caso */
  items: string[]
  /** Fuente primaria opcional que respalda la declaración */
  source?: { label: string; href: string }
  /** Título del bloque — por defecto "Uso de IA declarado" */
  title?: string
}

/**
 * Molécula — EX-v2-MOL-012. Bloque "Uso de IA declarado" de un caso.
 * Mismo componente visual en ambas variantes (evidencia-viva y documento-estrategico).
 * Es un diferenciador — se muestra, no se esconde (CASE_PAGE_CONTENT_STRUCTURE §33).
 */
export const AiDisclosure: React.FC<AiDisclosureProps> = ({
  items,
  source,
  title = 'Uso de IA declarado',
}) => {
  const headingId = useId()
  if (items.length === 0) return null
  return (
    <Box
      component="section"
      aria-labelledby={headingId}
      data-atomic="molecule"
      data-component="AiDisclosure"
      className="ex-ai-disclosure"
      sx={{
        borderLeft: '3px solid var(--md-sys-color-tertiary)',
        backgroundColor: 'var(--md-sys-color-surface-container-low)',
        borderRadius: '4px',
        p: 2,
      }}
    >
      <Typography
        id={headingId}
        variant="subtitle2"
        component="h3"
        className="ex-ai-disclosure__title"
        sx={{ color: 'var(--md-sys-color-on-surface)', fontWeight: 700, mb: 1 }}
      >
        {title}
      </Typography>
      <Box
        component="ul"
        className="ex-ai-disclosure__list"
        sx={{ m: 0, pl: 2.5, color: 'var(--md-sys-color-on-surface)', '& li': { mb: 0.5, fontSize: '0.875rem', lineHeight: 1.5 } }}
      >
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </Box>
      {source && (
        <Box
          component="a"
          href={source.href}
          target="_blank"
          rel="noopener noreferrer"
          className="ex-ai-disclosure__source"
          aria-label={`Fuente: ${source.label} (abre en pestaña nueva)`}
          sx={{
            display: 'inline-block',
            mt: 1,
            fontSize: '0.8125rem',
            fontWeight: 600,
            color: 'var(--md-sys-color-primary)',
            textDecoration: 'none',
            '&:hover': { textDecoration: 'underline' },
            '&:focus-visible': { outline: '2px solid var(--md-sys-color-primary)', outlineOffset: '2px' },
          }}
        >
          Fuente: {source.label} ↗
        </Box>
      )}
    </Box>
  )
}

export default AiDisclosure
