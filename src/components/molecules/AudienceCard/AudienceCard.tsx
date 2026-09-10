'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import { Button } from '@/components/atoms/Button'
import { Tag } from '@/components/atoms/Tag'
import { Icon } from '@/components/atoms/Icon'
import { Link } from '@/i18n/navigation'

export interface AudienceCardProps {
  type: 'symptom' | 'role'
  title: string
  description: string
  icon?: React.ElementType<SvgIconProps>
  tag?: 'cliente' | 'reclutador' | 'comunidad' | 'normal'
  /** slug de caso — informativo; la navegación se arma con `href` */
  targetSlug?: string
  /** si viene, la tarjeta entera es un enlace (`<a>`) a esta ruta */
  href?: string
  /** fallback: si no hay `href`, la tarjeta es un elemento activable por click */
  onClick?: () => void
}

const cardBase = {
  backgroundColor: 'var(--md-sys-color-surface-container-low)',
  border: '1px solid var(--md-sys-color-outline-variant)',
  borderRadius: '12px',
  padding: '24px',
  cursor: 'pointer',
  transition: 'background-color 200ms ease, border-color 200ms ease',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    backgroundColor: 'var(--md-sys-color-surface-container-high)',
  },
  '&:focus-visible': {
    outline: '2px solid var(--md-sys-color-primary)',
    outlineOffset: '2px',
  },
} as const

const StyledArticle = styled('article')(cardBase)
const StyledLink = styled(Link)({
  ...cardBase,
  '&:hover': { ...cardBase['&:hover'], borderColor: 'var(--md-sys-color-primary)' },
})

/**
 * Molécula — EX-v2-MOL-006. Tarjeta de audiencia (síntoma | rol).
 * Con `href` la tarjeta entera es un `<a>` consciente del locale (→ /casos/[slug]);
 * sin `href` conserva el modo activable por `onClick` (stories / usos sin navegación).
 */
export const AudienceCard: React.FC<AudienceCardProps> = ({
  type,
  title,
  description,
  icon,
  tag,
  href,
  onClick,
}) => {
  const t = useTranslations('common')

  const body = (
    <>
      {icon && (
        <Icon icon={icon} size="md" color="var(--md-sys-color-primary)" ariaLabel={title} />
      )}
      <Typography
        variant="h6"
        component="h3"
        className="ex-audience-card__title"
        sx={{ color: 'var(--md-sys-color-on-surface)', fontWeight: 600 }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        className="ex-audience-card__description"
        sx={{ color: 'var(--md-sys-color-on-surface)', flexGrow: 1 }}
      >
        {description}
      </Typography>
      {tag && <Tag label={tag} />}
    </>
  )

  const shared = {
    'data-atomic': 'molecule' as const,
    'data-component': 'AudienceCard',
    className: `ex-audience-card ex-audience-card--${type}`,
  }

  if (href) {
    return (
      <StyledLink href={href} aria-label={title} {...shared}>
        {body}
        <Typography
          component="span"
          className="ex-audience-card__cta"
          aria-hidden="true"
          sx={{ color: 'var(--md-sys-color-primary)', fontWeight: 600, fontSize: '0.875rem', mt: 0.5 }}
        >
          {t('viewCase')}
        </Typography>
      </StyledLink>
    )
  }

  return (
    <StyledArticle
      {...shared}
      role="article"
      aria-label={title}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClick?.()
      }}
    >
      {body}
      <Button variant="text" label={t('viewCase')} onClick={onClick} />
    </StyledArticle>
  )
}

export default AudienceCard
