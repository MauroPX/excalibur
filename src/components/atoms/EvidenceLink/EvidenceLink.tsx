'use client'

import React from 'react'
import Box from '@mui/material/Box'
import type { AccessLinkKind } from '@/components/templates/CasePage/types'

export interface EvidenceLinkProps {
  /** URL de la evidencia (repo, Figma, producción, video…) */
  href: string
  /** Texto visible del chip — ej. "Demo Tutorial GEMAS" o "Producción" */
  label: string
  /** Tipo de evidencia — decide el ícono y el nombre en el aria-label */
  kind: AccessLinkKind
}

const KIND: Record<AccessLinkKind, { icon: string; name: string }> = {
  produccion: { icon: '🌐', name: 'Producción' },
  preview: { icon: '🔎', name: 'Preview' },
  repo: { icon: '💻', name: 'Repositorio' },
  storybook: { icon: '📖', name: 'Storybook' },
  chromatic: { icon: '👁', name: 'Chromatic' },
  video: { icon: '▶', name: 'Video' },
  doc: { icon: '📄', name: 'Documento' },
  figma: { icon: '🎨', name: 'Figma' },
  demo: { icon: '🕹', name: 'Demo' },
}

/**
 * Átomo — EX-v2-ATOM-009. Chip-enlace a una evidencia externa de un caso.
 * Portado del patrón `.figma-link` del v1 (public/original), con tokens M3.
 * Siempre abre en pestaña nueva y lo declara en el nombre accesible (WCAG G201).
 */
export const EvidenceLink = ({ href, label, kind }: EvidenceLinkProps) => {
  const { icon, name } = KIND[kind]
  return (
    <Box
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-atomic="atom"
      data-component="EvidenceLink"
      className={`ex-evidence-link ex-evidence-link--${kind}`}
      aria-label={`${label} — ${name} (abre en pestaña nueva)`}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.75,
        px: 1.25,
        py: 0.75,
        borderRadius: '8px',
        border: '1px solid var(--md-sys-color-outline-variant)',
        color: 'var(--md-sys-color-on-surface)',
        textDecoration: 'none',
        fontSize: '0.875rem',
        fontWeight: 500,
        lineHeight: 1.4,
        transition: 'border-color 0.2s ease, color 0.2s ease',
        '&:hover': {
          borderColor: 'var(--md-sys-color-primary)',
          color: 'var(--md-sys-color-primary)',
        },
        '&:focus-visible': {
          outline: '2px solid var(--md-sys-color-primary)',
          outlineOffset: '2px',
        },
      }}
    >
      <Box component="span" aria-hidden="true">{icon}</Box>
      <Box component="span" className="ex-evidence-link__label">{label}</Box>
      <Box component="span" aria-hidden="true" sx={{ opacity: 0.7 }}>↗</Box>
    </Box>
  )
}

export default EvidenceLink
