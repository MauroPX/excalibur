'use client'

import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { Button } from '@/components/atoms/Button'
import { MetricRow } from '@/components/molecules/MetricRow'
import type { MetricProps } from '@/components/atoms/Metric/Metric'

export interface HeroProps {
  headline: string
  subheadline?: string
  ctaLabel: string
  ctaHref: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  metrics: MetricProps[]
}

const StyledHero = styled('section')({
  minHeight: '100dvh',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'var(--md-sys-color-surface)',
  padding: '80px 0 48px',
  '& .ex-hero__headline': {
    color: 'var(--md-sys-color-on-surface)',
    fontWeight: 700,
    lineHeight: 1.15,
    marginBottom: '16px',
  },
  '& .ex-hero__subheadline': {
    color: 'var(--md-sys-color-on-surface-variant)',
    marginBottom: '40px',
    maxWidth: '640px',
  },
  '& .ex-hero__cta-group': {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '56px',
  },
  '& .ex-hero__metrics': {
    width: '100%',
  },
})

export const Hero = ({
  headline,
  subheadline,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  metrics,
}: HeroProps) => {
  return (
    <StyledHero data-atomic="organism" data-component="Hero" className="ex-hero" aria-label="Introducción">
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          component="h1"
          className="ex-hero__headline"
          sx={{ fontSize: { xs: '2rem', sm: '2.75rem', md: '3.5rem' } }}
        >
          {headline}
        </Typography>

        {subheadline && (
          <Typography
            variant="body1"
            component="p"
            className="ex-hero__subheadline"
            sx={{ fontSize: { xs: '1rem', md: '1.125rem' } }}
          >
            {subheadline}
          </Typography>
        )}

        <div className="ex-hero__cta-group">
          <Button
            variant="cta"
            label={ctaLabel}
            onClick={() => { window.location.href = ctaHref }}
          />
          {secondaryCtaLabel && secondaryCtaHref && (
            <a
              href={secondaryCtaHref}
              style={{ color: 'var(--md-sys-color-primary)', textDecoration: 'none', fontWeight: 500 }}
            >
              {secondaryCtaLabel} →
            </a>
          )}
        </div>

        <div className="ex-hero__metrics">
          <MetricRow metrics={metrics} />
        </div>
      </Container>
    </StyledHero>
  )
}

export default Hero
