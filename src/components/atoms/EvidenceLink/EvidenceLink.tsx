'use client'

import React from 'react'
import Box from '@mui/material/Box'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import LanguageRounded from '@mui/icons-material/LanguageRounded'
import VisibilityRounded from '@mui/icons-material/VisibilityRounded'
import CodeRounded from '@mui/icons-material/CodeRounded'
import MenuBookRounded from '@mui/icons-material/MenuBookRounded'
import RemoveRedEyeRounded from '@mui/icons-material/RemoveRedEyeRounded'
import PlayCircleRounded from '@mui/icons-material/PlayCircleRounded'
import DescriptionRounded from '@mui/icons-material/DescriptionRounded'
import DesignServicesRounded from '@mui/icons-material/DesignServicesRounded'
import SportsEsportsRounded from '@mui/icons-material/SportsEsportsRounded'
import OpenInNewRounded from '@mui/icons-material/OpenInNewRounded'
import type { AccessLinkKind } from '@/components/templates/CasePage/types'

export interface EvidenceLinkProps {
  /** URL de la evidencia (repo, Figma, producción, video…) */
  href: string
  /** Texto visible del chip — ej. "Demo Tutorial GEMAS" o "Producción" */
  label: string
  /** Tipo de evidencia — decide el ícono y el nombre en el aria-label */
  kind: AccessLinkKind
}

/**
 * Iconografía por tipo de evidencia. `@mui/icons-material` → cada icono renderiza
 * como <svg fill="currentColor">, así que toma el color del enlace (token M3) y
 * cambia con hover/tema sin quemar ningún color. Antes eran emoji (glifos a todo
 * color del SO, no adaptables a contraste ni tema).
 */
const KIND: Record<AccessLinkKind, { Icon: React.ElementType<SvgIconProps>; name: string }> = {
  produccion: { Icon: LanguageRounded, name: 'Producción' },
  preview: { Icon: VisibilityRounded, name: 'Preview' },
  repo: { Icon: CodeRounded, name: 'Repositorio' },
  storybook: { Icon: MenuBookRounded, name: 'Storybook' },
  chromatic: { Icon: RemoveRedEyeRounded, name: 'Chromatic' },
  video: { Icon: PlayCircleRounded, name: 'Video' },
  doc: { Icon: DescriptionRounded, name: 'Documento' },
  figma: { Icon: DesignServicesRounded, name: 'Figma' },
  demo: { Icon: SportsEsportsRounded, name: 'Demo' },
}

/**
 * Átomo — EX-v2-ATOM-009. Chip-enlace a una evidencia externa de un caso.
 * Portado del patrón `.figma-link` del v1 (public/original), con tokens M3.
 * Siempre abre en pestaña nueva y lo declara en el nombre accesible (WCAG G201).
 */
export const EvidenceLink = ({ href, label, kind }: EvidenceLinkProps) => {
  const { Icon, name } = KIND[kind]
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
        maxWidth: '100%',
        px: 1.25,
        py: 0.75,
        borderRadius: '8px',
        '& .ex-evidence-link__label': { minWidth: 0, overflowWrap: 'anywhere' },
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
      <Icon aria-hidden="true" sx={{ fontSize: '1.125rem' }} />
      <Box component="span" className="ex-evidence-link__label">{label}</Box>
      <OpenInNewRounded aria-hidden="true" sx={{ fontSize: '0.9375rem', opacity: 0.7 }} />
    </Box>
  )
}

export default EvidenceLink
