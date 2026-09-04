'use client'

import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import { Tag } from '@/components/atoms/Tag'
import { Metric } from '@/components/atoms/Metric'

export interface ProjectCardProps {
  /** Título del proyecto */
  title: string
  /** Descripción corta */
  description: string
  /** Tags tecnológicos */
  tags: string[]
  /** Métrica de impacto opcional */
  metric?: { value: string | number; label: string }
  /** URL de imagen opcional */
  imageUrl?: string
}

const StyledProjectCard = styled(Card)(() => ({
  borderRadius: '16px',
  background: 'var(--md-sys-color-surface-container-low)',
  border: '1px solid var(--md-sys-color-outline-variant)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  overflow: 'hidden',
  position: 'relative',
  cursor: 'pointer',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',

  // Midnight Glass Engine
  backdropFilter: 'blur(60px) saturate(210%)',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at 25% 25%, rgba(var(--md-sys-color-on-surface-rgb), 0.05) 0%, transparent 60%)',
    pointerEvents: 'none',
  },

  '&:hover': {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: '0 20px 40px rgba(var(--md-sys-color-shadow-rgb), 0.3)',
    borderColor: 'var(--md-sys-color-primary)',
  },
}))

const CardImage = styled(Box)<{ src?: string }>(({ src }) => ({
  height: '180px',
  width: '100%',
  backgroundColor: 'var(--md-sys-color-surface-container-high)',
  backgroundImage: src ? `url(${src})` : 'none',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}))

/**
 * Molécula ProjectCard para previsualización de evidencia forensic.
 * Basada en Blueprint EX-v2-MOL-002.
 */
export const ProjectCard = ({
  title,
  description,
  tags,
  metric,
  imageUrl,
}: ProjectCardProps) => {
  return (
    <StyledProjectCard data-atomic="molecule" data-component="ProjectCard" className="ex-project-card">
      <CardImage src={imageUrl} className="ex-project-card__header" />
      
      <CardContent className="ex-project-card__content" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h6" component="h3" sx={{ fontWeight: 800, color: 'var(--md-sys-color-on-surface)' }}>
          {title}
        </Typography>
        
        <Typography variant="body2" sx={{ color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.6 }}>
          {description}
        </Typography>

        <Box className="ex-project-card__tags">
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1 }}>
            {tags.map((tag) => (
              <Tag key={tag} label={tag} size="small" />
            ))}
          </Stack>
        </Box>

        {metric && (
          <Box className="ex-project-card__metric-preview" sx={{ mt: 'auto', pt: 2 }}>
            <Metric value={metric.value} label={metric.label} trend="positive" />
          </Box>
        )}
      </CardContent>
    </StyledProjectCard>
  )
}

export default ProjectCard
