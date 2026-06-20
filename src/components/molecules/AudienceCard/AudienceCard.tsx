'use client'

import React from 'react'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import type { SvgIconProps } from '@mui/material'
import { Button } from '@/components/atoms/Button'
import { Tag } from '@/components/atoms/Tag'
import { Icon } from '@/components/atoms/Icon'

export interface AudienceCardProps {
  type: 'symptom' | 'role'
  title: string
  description: string
  icon?: React.ElementType<SvgIconProps>
  tag?: 'cliente' | 'reclutador' | 'comunidad' | 'normal'
  targetSlug?: string
  onClick?: () => void
}

const StyledArticle = styled('article')({
  backgroundColor: 'var(--md-sys-color-surface-container-low)',
  border: '1px solid var(--md-sys-color-outline-variant)',
  borderRadius: '12px',
  padding: '24px',
  cursor: 'pointer',
  transition: 'background-color 200ms ease',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  '&:hover': {
    backgroundColor: 'var(--md-sys-color-surface-container-high)',
  },
  '&:focus-visible': {
    outline: '2px solid var(--md-sys-color-primary)',
    outlineOffset: '2px',
  },
})

export const AudienceCard: React.FC<AudienceCardProps> = ({
  type,
  title,
  description,
  icon,
  tag,
  onClick,
}) => (
  <StyledArticle
    data-atomic="molecule"
    data-component="AudienceCard"
    role="article"
    aria-label={title}
    tabIndex={0}
    onClick={onClick}
    onKeyDown={(e) => {
      if (e.key === 'Enter' || e.key === ' ') onClick?.()
    }}
    className={`ex-audience-card ex-audience-card--${type}`}
  >
    {icon && (
      <Icon
        icon={icon}
        size="md"
        color="var(--md-sys-color-primary)"
        ariaLabel={title}
      />
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
    <Button variant="text" label="Ver caso" onClick={onClick} />
  </StyledArticle>
)

export default AudienceCard
