import React from 'react'
import { Box, Typography } from '@mui/material'
import { Tag } from '@/components/atoms/Tag'
import { MetricRow } from '@/components/molecules/MetricRow'
import { TimelineStep } from '@/components/molecules/TimelineStep'
import { SkillBar } from '@/components/molecules/SkillBar'
import { CasePageNav } from './CasePageNav'

export interface CasePageData {
  slug: string
  title: string
  description: string
  tags: string[]
  metrics: Array<{ value: string | number; label: string }>
  timeline: Array<{ company: string; role: string; period: string; isLast?: boolean }>
  techStack: Array<{ skill: string; level: number; levelLabel: string }>
  nextCase: { slug: string; title: string } | null
  audienceTags?: string[]
}

export interface CasePageProps {
  caseData: CasePageData
}

export const CasePage: React.FC<CasePageProps> = ({ caseData }) => {
  const { title, description, tags, metrics, timeline, techStack, nextCase } = caseData
  return (
    <main
      id="main-content"
      data-atomic="template"
      data-component="CasePage"
      className="ex-case-page"
    >
      <Box
        component="a"
        href="#main-content"
        className="ex-case-page__skip-link"
        sx={{ position: 'absolute', top: '-100px', left: '16px', zIndex: 9999, padding: '8px 16px', backgroundColor: 'var(--md-sys-color-primary)', color: 'var(--md-sys-color-on-primary)', borderRadius: '4px', textDecoration: 'none', fontWeight: 600, '&:focus': { top: '16px' } }}
      >
        Saltar al contenido
      </Box>

      <Box component="nav" aria-label="Breadcrumb" className="ex-case-page__breadcrumb"
        sx={{ py: 2, px: { xs: 2, md: 4 } }}>
        <Box component="ol" sx={{ listStyle: 'none', m: 0, p: 0, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Box component="li"><Box component="a" href="/" sx={{ color: 'var(--md-sys-color-primary)', textDecoration: 'none' }}>Inicio</Box></Box>
          <Box component="li" sx={{ color: 'var(--md-sys-color-on-surface)' }} aria-hidden="true">/</Box>
          <Box component="li"><Box component="a" href="/#casos" sx={{ color: 'var(--md-sys-color-primary)', textDecoration: 'none' }}>Casos</Box></Box>
          <Box component="li" sx={{ color: 'var(--md-sys-color-on-surface)' }} aria-hidden="true">/</Box>
          <Box component="li" aria-current="page" sx={{ color: 'var(--md-sys-color-on-surface)' }}>{title}</Box>
        </Box>
      </Box>

      <Box
        component="header"
        className="ex-case-page__header"
        sx={{ px: { xs: 2, md: 4 }, py: 4, backgroundColor: 'var(--md-sys-color-surface)' }}
      >
        <Typography variant="h3" component="h1" sx={{ color: 'var(--md-sys-color-on-surface)', mb: 2 }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: 'var(--md-sys-color-on-surface)', mb: 3, maxWidth: '720px' }}>
          {description}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {tags.map(t => <Tag key={t} label={t} />)}
        </Box>
      </Box>

      <Box
        component="section"
        aria-labelledby="metrics-heading"
        className="ex-case-page__metrics"
        sx={{ px: { xs: 2, md: 4 }, py: 4 }}
      >
        <Typography variant="h5" component="h2" id="metrics-heading"
          sx={{ color: 'var(--md-sys-color-on-surface)', mb: 3 }}>
          Resultados clave
        </Typography>
        <MetricRow metrics={metrics} />
      </Box>

      <Box
        component="section"
        aria-labelledby="timeline-heading"
        className="ex-case-page__timeline"
        sx={{ px: { xs: 2, md: 4 }, py: 4, backgroundColor: 'var(--md-sys-color-surface-container-low)' }}
      >
        <Typography variant="h5" component="h2" id="timeline-heading"
          sx={{ color: 'var(--md-sys-color-on-surface)', mb: 3 }}>
          Proceso
        </Typography>
        {timeline.map((t, i) => (
          <TimelineStep
            key={`${t.company}-${i}`}
            company={t.company}
            role={t.role}
            period={t.period}
            isLast={t.isLast ?? i === timeline.length - 1}
          />
        ))}
      </Box>

      <Box
        component="section"
        aria-labelledby="stack-heading"
        className="ex-case-page__stack"
        sx={{ px: { xs: 2, md: 4 }, py: 4 }}
      >
        <Typography variant="h5" component="h2" id="stack-heading"
          sx={{ color: 'var(--md-sys-color-on-surface)', mb: 3 }}>
          Stack usado
        </Typography>
        {techStack.map(s => (
          <SkillBar key={s.skill} skill={s.skill} level={s.level} levelLabel={s.levelLabel} />
        ))}
      </Box>

      <Box sx={{ px: { xs: 2, md: 4 } }}>
        <CasePageNav nextCase={nextCase} />
      </Box>
    </main>
  )
}

export default CasePage
