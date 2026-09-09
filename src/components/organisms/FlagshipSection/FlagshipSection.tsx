'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { EvidenceLink } from '@/components/atoms/EvidenceLink'
import type { FLAGSHIP as FlagshipData } from '@/content/home'

export interface FlagshipSectionProps {
  data: typeof FlagshipData
}

/**
 * Organismo — EX-v2-ORG-010. Sección "Proyecto Bandera" de la portada de v1
 * (`#flagship`) — profundiza el caso Correos Chile que ya vive en
 * src/content/cases/clients/correos-chile.ts. Cero cifras nuevas.
 */
export const FlagshipSection: React.FC<FlagshipSectionProps> = ({ data }) => {
  const t = useTranslations('common')
  return (
  <Box
    component="section"
    data-atomic="organism"
    data-component="FlagshipSection"
    className="ex-flagship-section"
    aria-labelledby="flagship-heading"
    sx={{ py: 6, backgroundColor: 'var(--md-sys-color-surface-container-low)' }}
  >
    <Box sx={{ maxWidth: '1100px', mx: 'auto', px: { xs: 2, sm: 3, md: 4 } }}>
      <Box
        component="span"
        className="ex-flagship-section__badge"
        sx={{
          display: 'inline-block',
          px: 1.5,
          py: 0.5,
          borderRadius: '999px',
          fontSize: '0.8125rem',
          fontWeight: 700,
          backgroundColor: 'var(--md-sys-color-primary-container)',
          color: 'var(--md-sys-color-on-primary-container)',
          mb: 2,
        }}
      >
        {data.badge}
      </Box>

      <Typography id="flagship-heading" variant="h4" component="h2" sx={{ color: 'var(--md-sys-color-on-surface)', mb: 1.5 }}>
        {data.title}
      </Typography>
      <Typography variant="body1" sx={{ color: 'var(--md-sys-color-on-surface-variant)', mb: 4, maxWidth: '720px', lineHeight: 1.7 }}>
        {data.summary}
      </Typography>

      <Box
        className="ex-flagship-section__metrics"
        sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2,1fr)', md: 'repeat(4,1fr)' }, gap: 2, mb: 5 }}
      >
        {data.metrics.map((m) => (
          <Box key={m.label} sx={{ p: 2, borderRadius: '8px', backgroundColor: 'var(--md-sys-color-surface)' }}>
            <Typography variant="h5" component="p" sx={{ color: 'var(--md-sys-color-primary)', fontWeight: 700 }}>
              {m.value}
            </Typography>
            <Typography variant="caption" sx={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
              {m.label}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box
        component="ol"
        className="ex-flagship-section__phases"
        aria-label={t('projectPhases')}
        sx={{ listStyle: 'none', m: 0, p: 0, display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2,1fr)' }, gap: 2, mb: 4 }}
      >
        {data.phases.map((p) => (
          <Box
            key={p.num}
            component="li"
            sx={{ p: 2, borderRadius: '8px', border: '1px solid var(--md-sys-color-outline-variant)', backgroundColor: 'var(--md-sys-color-surface)' }}
          >
            <Typography variant="subtitle2" component="h3" sx={{ color: 'var(--md-sys-color-on-surface)', mb: 0.5 }}>
              <Box component="span" aria-hidden="true" sx={{ color: 'var(--md-sys-color-on-surface-variant)', mr: 1 }}>{p.num}</Box>
              {p.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.6 }}>
              {p.body}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignItems: 'center' }}>
        {data.figma.map((f) => (
          <EvidenceLink key={f.href} href={f.href} label={f.label} kind="figma" />
        ))}
        <Box
          component="a"
          href={data.caseHref}
          className="ex-flagship-section__case-link"
          sx={{
            fontSize: '0.875rem',
            fontWeight: 600,
            color: 'var(--md-sys-color-primary)',
            textDecoration: 'none',
            '&:hover': { textDecoration: 'underline' },
            '&:focus-visible': { outline: '2px solid var(--md-sys-color-primary)', outlineOffset: '2px' },
          }}
        >
          {t('viewFullCase')}
        </Box>
      </Box>
    </Box>
  </Box>
  )
}

export default FlagshipSection
