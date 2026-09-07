'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { EvidenceLink } from '@/components/atoms/EvidenceLink'
import type { AccessLink } from '@/components/templates/CasePage/types'

export interface EvidenceLinksProps {
  /** Enlaces de evidencia del caso (múltiples por caso) */
  links: AccessLink[]
  /** Título opcional del bloque — ej. "Bloque de acceso" */
  title?: string
}

/**
 * Molécula — EX-v2-MOL-009. Contenedor del "bloque de acceso" de un caso
 * (caseFormat 'evidencia-viva'). Fila flex-wrap de EX-v2-ATOM-009 EvidenceLink,
 * más el texto instruccional `note` por enlace cuando existe
 * (ej. "login maria@ejemplo.com + OTP 123456 → tour automático").
 */
export const EvidenceLinks: React.FC<EvidenceLinksProps> = ({ links, title }) => {
  if (links.length === 0) return null
  return (
    <Box
      data-atomic="molecule"
      data-component="EvidenceLinks"
      className="ex-evidence-links"
    >
      {title && (
        <Typography
          variant="subtitle2"
          component="h3"
          className="ex-evidence-links__title"
          sx={{ color: 'var(--md-sys-color-on-surface)', mb: 1.5, fontWeight: 700 }}
        >
          {title}
        </Typography>
      )}
      <Box
        component="ul"
        aria-label={title ?? 'Enlaces de evidencia'}
        sx={{ listStyle: 'none', m: 0, p: 0, display: 'flex', flexWrap: 'wrap', gap: 1.5 }}
      >
        {links.map((link) => (
          <Box
            component="li"
            key={`${link.kind}-${link.href}`}
            className="ex-evidence-links__item"
            sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}
          >
            <EvidenceLink href={link.href} label={link.label} kind={link.kind} />
            {link.note && (
              <Typography
                variant="caption"
                className="ex-evidence-links__note"
                sx={{ color: 'var(--md-sys-color-on-surface-variant)', maxWidth: '32ch' }}
              >
                {link.note}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default EvidenceLinks
