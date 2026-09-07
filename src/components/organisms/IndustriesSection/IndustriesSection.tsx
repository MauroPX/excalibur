import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import type { IndustryEntry } from '@/content/home'

export interface IndustriesSectionProps {
  industries: IndustryEntry[]
  title?: string
}

/**
 * Organismo — EX-v2-ORG-011. Grid de industrias de la portada de v1 (`#industries`).
 * Fuente: docs/m1/CONTENT_COPY_STRATEGY.md §7 pregunta 5 (ya reconciliada). NO se
 * incluyen los nombres no verificados del grid de v1 (Fingo, Powwi, Skandia, …).
 */
export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  industries,
  title = 'Industrias',
}) => (
  <Box
    component="section"
    data-atomic="organism"
    data-component="IndustriesSection"
    className="ex-industries-section"
    aria-labelledby="industries-heading"
    sx={{ py: 6, backgroundColor: 'var(--md-sys-color-surface)' }}
  >
    <Box sx={{ maxWidth: '1100px', mx: 'auto', px: { xs: 2, sm: 3, md: 4 } }}>
      <Typography id="industries-heading" variant="h4" component="h2" sx={{ color: 'var(--md-sys-color-on-surface)', mb: 4 }}>
        {title}
      </Typography>

      <Box
        component="ul"
        aria-label="Industrias con experiencia"
        sx={{
          listStyle: 'none',
          m: 0,
          p: 0,
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', md: 'repeat(3,1fr)' },
          gap: 2,
        }}
      >
        {industries.map((ind) => (
          <Box
            key={ind.label}
            component="li"
            className="ex-industries-section__item"
            sx={{
              p: 2,
              borderRadius: '8px',
              border: '1px solid var(--md-sys-color-outline-variant)',
              backgroundColor: 'var(--md-sys-color-surface-container-low)',
            }}
          >
            <Typography variant="subtitle1" component="h3" sx={{ color: 'var(--md-sys-color-on-surface)', mb: 0.75 }}>
              <Box component="span" aria-hidden="true" sx={{ mr: 0.75 }}>{ind.icon}</Box>
              {ind.label}
            </Typography>
            <Typography variant="body2" sx={{ color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.6 }}>
              {ind.clients.join(' · ')}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
)

export default IndustriesSection
