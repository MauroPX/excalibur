'use client'

import React, { useId } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Tag } from '@/components/atoms/Tag'
import type { CaseBadge, CaseType } from '@/components/templates/CasePage/types'

export interface WorkTestCardProps {
  slug: string
  title: string
  /** Frase-gancho (Insight/Valor) del caso */
  valor: string
  /** URL de la página de detalle */
  href: string
  /** Badge exacto del caso — ej. { icon: '🔧', label: 'Prueba técnica' } */
  badge: CaseBadge
  /** 'work-test' | 'meta' — decide el color del badge (NO se usa para casos 'client', esos van con ProjectCard) */
  caseType: Exclude<CaseType, 'client'>
  tags?: string[]
}

const BADGE_COLORS: Record<Exclude<CaseType, 'client'>, { bg: string; fg: string }> = {
  'work-test': { bg: 'var(--md-sys-color-tertiary-container)', fg: 'var(--md-sys-color-on-tertiary-container)' },
  meta: { bg: 'var(--md-sys-color-secondary-container)', fg: 'var(--md-sys-color-on-secondary-container)' },
}

/**
 * Molécula — EX-v2-MOL-010. Card de índice para casos de prueba técnica y el
 * meta-caso. NO reutiliza EX-v2-MOL-002 ProjectCard (LOCKED, props_contract
 * cerrado) — el badge de tipo de caso es la razón de existir de este componente.
 * Patrón "card enlazada": toda la card es clickable vía overlay del título.
 */
export const WorkTestCard: React.FC<WorkTestCardProps> = ({
  slug,
  title,
  valor,
  href,
  badge,
  caseType,
  tags = [],
}) => {
  const titleId = useId()
  const colors = BADGE_COLORS[caseType]
  return (
    <Box
      component="article"
      aria-labelledby={titleId}
      data-atomic="molecule"
      data-component="WorkTestCard"
      data-slug={slug}
      className={`ex-worktest-card ex-worktest-card--${caseType}`}
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 1.25,
        p: 2.5,
        borderRadius: '12px',
        backgroundColor: 'var(--md-sys-color-surface-container-low)',
        border: '1px solid var(--md-sys-color-outline-variant)',
        transition: 'border-color 0.2s ease, background-color 0.2s ease',
        '&:hover': {
          borderColor: 'var(--md-sys-color-primary)',
          backgroundColor: 'var(--md-sys-color-surface-container-high)',
        },
        '&:focus-within': {
          outline: '2px solid var(--md-sys-color-primary)',
          outlineOffset: '2px',
        },
      }}
    >
      <Box
        component="span"
        className="ex-worktest-card__badge"
        sx={{
          alignSelf: 'flex-start',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 0.5,
          px: 1,
          py: 0.25,
          borderRadius: '6px',
          fontSize: '0.75rem',
          fontWeight: 700,
          backgroundColor: colors.bg,
          color: colors.fg,
        }}
      >
        <span aria-hidden="true">{badge.icon}</span>
        {badge.label}
      </Box>

      <Typography
        id={titleId}
        variant="h6"
        component="h3"
        className="ex-worktest-card__title"
        sx={{ color: 'var(--md-sys-color-on-surface)', fontWeight: 700, lineHeight: 1.3 }}
      >
        <Box
          component="a"
          href={href}
          sx={{
            color: 'inherit',
            textDecoration: 'none',
            '&::after': { content: '""', position: 'absolute', inset: 0 },
            '&:focus': { outline: 'none' },
          }}
        >
          {title}
        </Box>
      </Typography>

      <Typography
        variant="body2"
        className="ex-worktest-card__valor"
        sx={{ color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.5 }}
      >
        {valor}
      </Typography>

      {tags.length > 0 && (
        <Box className="ex-worktest-card__tags" sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 'auto', pt: 0.5 }}>
          {tags.map((t) => (
            <Tag key={t} label={t} size="small" variant="outlined" />
          ))}
        </Box>
      )}
    </Box>
  )
}

export default WorkTestCard
