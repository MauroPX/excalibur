'use client'
import React, { useState } from 'react'
import { Box, Typography, Chip as MuiChip } from '@mui/material'
import { useTranslations } from 'next-intl'
import { ProjectCard } from '@/components/molecules/ProjectCard'

export interface CasesSectionProject {
  slug: string
  title: string
  description: string
  tags: string[]
  metric?: { value: string | number; label: string }
  symptomTags: string[]
  roleTags: string[]
  audienceTags: string[]
}

export interface CasesSectionProps {
  projects: CasesSectionProject[]
  totalCount?: number
}

const SYMPTOM_TAGS = ['legacy', 'conversion', 'ia', 'a11y', 'performance', 'design-system', 'team-scaling']
const ROLE_TAGS = ['staff-architect', 'product-manager', 'ux-designer', 'tech-lead', 'design-engineer', 'designops']

const CasesSection: React.FC<CasesSectionProps> = ({ projects }) => {
  const t = useTranslations('cases')
  const [activeSymptoms, setActiveSymptoms] = useState<string[]>([])
  const [activeRoles, setActiveRoles] = useState<string[]>([])

  const toggleSymptom = (t: string) => {
    setActiveSymptoms(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t])
  }

  const toggleRole = (t: string) => {
    setActiveRoles(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t])
  }

  const filteredProjects = projects.filter(p =>
    (activeSymptoms.length === 0 || p.symptomTags.some(t => activeSymptoms.includes(t))) &&
    (activeRoles.length === 0 || p.roleTags.some(t => activeRoles.includes(t)))
  )

  return (
    <Box
      component="section"
      data-atomic="organism"
      data-component="CasesSection"
      className="ex-cases-section"
      sx={{ py: 6, backgroundColor: 'var(--md-sys-color-surface)' }}
    >
      <Typography variant="h4" component="h2" sx={{ color: 'var(--md-sys-color-on-surface)', mb: 3 }}>
        {t('title')}
      </Typography>

      {/* Chips de filtro síntomas */}
      <Box className="ex-cases-section__filters" sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
        {SYMPTOM_TAGS.map(tag => (
          <MuiChip
            key={tag}
            label={tag}
            onClick={() => toggleSymptom(tag)}
            variant={activeSymptoms.includes(tag) ? 'filled' : 'outlined'}
            sx={{
              color: activeSymptoms.includes(tag) ? 'var(--md-sys-color-on-primary-container)' : 'var(--md-sys-color-on-surface)',
              backgroundColor: activeSymptoms.includes(tag) ? 'var(--md-sys-color-primary-container)' : 'transparent',
              borderColor: 'var(--md-sys-color-outline-variant)',
            }}
          />
        ))}
      </Box>

      {/* Chips de filtro roles */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
        {ROLE_TAGS.map(tag => (
          <MuiChip key={tag} label={tag}
            onClick={() => toggleRole(tag)}
            variant={activeRoles.includes(tag) ? 'filled' : 'outlined'}
            sx={{ color: activeRoles.includes(tag) ? 'var(--md-sys-color-on-primary-container)' : 'var(--md-sys-color-on-surface)', backgroundColor: activeRoles.includes(tag) ? 'var(--md-sys-color-primary-container)' : 'transparent', borderColor: 'var(--md-sys-color-outline-variant)' }}
          />
        ))}
      </Box>

      {/* Grid de ProjectCards con aria-live */}
      <Box
        aria-live="polite"
        aria-label={t('title')}
        className="ex-cases-section__grid"
        sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', md: 'repeat(3,1fr)' }, gap: 2 }}
      >
        {filteredProjects.length === 0 ? (
          <Typography className="ex-cases-section__empty-state" sx={{ gridColumn: '1/-1', color: 'var(--md-sys-color-on-surface)', textAlign: 'center', py: 4 }}>
            {t('empty')}
          </Typography>
        ) : (
          filteredProjects.slice(0, 20).map((p, i) => (
            <ProjectCard key={i} title={p.title} description={p.description} tags={p.tags} metric={p.metric} />
          ))
        )}
      </Box>
    </Box>
  )
}

export { CasesSection }
export default CasesSection
