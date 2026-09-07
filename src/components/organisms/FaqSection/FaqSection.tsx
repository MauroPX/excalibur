import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import type { FaqItem } from '@/content/home'

export interface FaqSectionProps {
  items: FaqItem[]
  title?: string
}

/**
 * Organismo — EX-v2-ORG-009. Sección de Preguntas Comunes (portada de v1 `#faq`).
 * `<details>/<summary>` nativo (accesible por teclado sin JS) + JSON-LD FAQPage
 * para AEO/GEO. Copy: docs/m1/CONTENT_COPY_STRATEGY.md §7 — sin el "$3.000–$25.000"
 * retirado esta sesión.
 */
export const FaqSection: React.FC<FaqSectionProps> = ({ items, title = 'Preguntas comunes' }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  }

  return (
    <Box
      component="section"
      data-atomic="organism"
      data-component="FaqSection"
      className="ex-faq-section"
      aria-labelledby="faq-heading"
      sx={{ py: 6, backgroundColor: 'var(--md-sys-color-surface)' }}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Box sx={{ maxWidth: '860px', mx: 'auto', px: { xs: 2, sm: 3, md: 4 } }}>
        <Typography id="faq-heading" variant="h4" component="h2" sx={{ color: 'var(--md-sys-color-on-surface)', mb: 4 }}>
          {title}
        </Typography>

        <Box className="ex-faq-section__list">
          {items.map((it, i) => (
            <Box
              key={i}
              component="details"
              className="ex-faq-section__item"
              sx={{
                borderBottom: '1px solid var(--md-sys-color-outline-variant)',
                '&[open] .ex-faq-section__q::after': { content: '"–"' },
              }}
            >
              <Box
                component="summary"
                className="ex-faq-section__q"
                sx={{
                  listStyle: 'none',
                  cursor: 'pointer',
                  py: 2,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: 2,
                  fontWeight: 600,
                  color: 'var(--md-sys-color-on-surface)',
                  '&::-webkit-details-marker': { display: 'none' },
                  '&::after': { content: '"+"', color: 'var(--md-sys-color-primary)', fontSize: '1.25rem', lineHeight: 1 },
                  '&:focus-visible': { outline: '2px solid var(--md-sys-color-primary)', outlineOffset: '2px' },
                }}
              >
                {it.q}
              </Box>
              <Typography
                variant="body1"
                component="p"
                className="ex-faq-section__a"
                sx={{ color: 'var(--md-sys-color-on-surface-variant)', pb: 2.5, lineHeight: 1.7 }}
              >
                {it.a}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default FaqSection
