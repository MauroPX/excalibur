import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { DecisionTable } from '@/components/molecules/DecisionTable'
import { BadgeIcon } from '@/components/templates/CasePage/CaseBadgeIcon'
import type { Momentum2Section } from '@/content/cases'

const MAX = '820px'

/**
 * Sección "Momentum 2 — Propuesta de arquitectura" dentro de /casos/fdn.
 * Regla R-8 (EX-v2-TMPL-002): ancla propia, badge "📐 Estimación propia",
 * disclaimer propio y enlace cruzado al Momentum 1 — inequívocamente separada
 * de la narrativa del caso auditado. Se compone vía `appendixSection` de CasePage.
 */
export function FdnMomentum2Section({ data }: { data: Momentum2Section }) {
  return (
    <Box
      component="section"
      id={data.anchorId}
      aria-labelledby="fdn-m2-heading"
      className="ex-case-page__momentum-2"
      sx={{
        px: { xs: 2, md: 4 },
        py: 5,
        borderTop: '4px solid var(--md-sys-color-tertiary)',
        backgroundColor: 'var(--md-sys-color-surface-container-low)',
      }}
    >
      <Box
        component="span"
        className="ex-case-page__momentum-2-badge"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 0.5,
          px: 1.5,
          py: 0.5,
          borderRadius: '999px',
          fontSize: '0.8125rem',
          fontWeight: 700,
          backgroundColor: 'var(--md-sys-color-tertiary-container)',
          color: 'var(--md-sys-color-on-tertiary-container)',
          mb: 2,
        }}
      >
        <BadgeIcon kind={data.badge.icon} sx={{ fontSize: '0.9375rem' }} />
        {data.badge.label}
      </Box>

      <Typography id="fdn-m2-heading" variant="h4" component="h2" sx={{ color: 'var(--md-sys-color-on-surface)', mb: 1 }}>
        Momentum 2 — Propuesta de arquitectura
      </Typography>

      <Box
        component="a"
        href={data.crossLink.href}
        sx={{
          display: 'inline-block',
          mb: 3,
          fontSize: '0.875rem',
          fontWeight: 600,
          color: 'var(--md-sys-color-primary)',
          textDecoration: 'none',
          '&:hover': { textDecoration: 'underline' },
          '&:focus-visible': { outline: '2px solid var(--md-sys-color-primary)', outlineOffset: '2px' },
        }}
      >
        {data.crossLink.label}
      </Box>

      <Typography variant="body2" sx={{ color: 'var(--md-sys-color-on-surface-variant)', fontStyle: 'italic', mb: 3, maxWidth: MAX }}>
        {data.honestyNote}
      </Typography>

      <Typography variant="overline" component="h3" sx={{ color: 'var(--md-sys-color-on-surface-variant)', display: 'block', mb: 1 }}>
        En una frase
      </Typography>
      <Typography variant="h6" component="p" sx={{ color: 'var(--md-sys-color-on-surface)', maxWidth: MAX, fontWeight: 500, mb: 3 }}>
        {data.valor}
      </Typography>

      <Typography variant="h6" component="h3" sx={{ color: 'var(--md-sys-color-on-surface)', mb: 1 }}>
        Objetivo
      </Typography>
      <Typography variant="body1" component="p" sx={{ color: 'var(--md-sys-color-on-surface)', mb: 3, maxWidth: MAX }}>
        {data.objetivo}
      </Typography>

      <Typography variant="h6" component="h3" sx={{ color: 'var(--md-sys-color-on-surface)', mb: 1.5 }}>
        Acción — decisión
      </Typography>
      <Box sx={{ mb: 3 }}>
        <DecisionTable rows={data.accion} caption="Decisión de alcance del Momentum 2 de FDN" />
      </Box>

      <Typography variant="h6" component="h3" sx={{ color: 'var(--md-sys-color-on-surface)', mb: 1 }}>
        Aprendizaje
      </Typography>
      <Typography variant="body1" component="p" sx={{ color: 'var(--md-sys-color-on-surface)', mb: 3, maxWidth: MAX }}>
        {data.aprendizaje}
      </Typography>

      <Typography variant="h6" component="h3" sx={{ color: 'var(--md-sys-color-on-surface)', mb: 2 }}>
        Propuesta
      </Typography>
      {data.sections.map((s) => (
        <Box key={s.num} component="section" aria-labelledby={`fdn-m2-${s.num}`} sx={{ mb: 2.5 }}>
          <Typography id={`fdn-m2-${s.num}`} variant="subtitle1" component="h4" sx={{ color: 'var(--md-sys-color-on-surface)', mb: 0.5 }}>
            <Box component="span" aria-hidden="true" sx={{ color: 'var(--md-sys-color-on-surface-variant)', mr: 1 }}>{s.num}</Box>
            {s.title}
          </Typography>
          <Typography variant="body2" component="p" sx={{ color: 'var(--md-sys-color-on-surface-variant)', maxWidth: MAX }}>
            {s.body}
          </Typography>
        </Box>
      ))}

      <Box
        component="p"
        className="ex-case-page__momentum-2-disclaimer"
        sx={{
          mt: 3,
          pt: 2,
          borderTop: '1px solid var(--md-sys-color-outline-variant)',
          color: 'var(--md-sys-color-on-surface-variant)',
          fontStyle: 'italic',
          fontSize: '0.875rem',
          maxWidth: MAX,
        }}
      >
        {data.footerDisclaimer}
      </Box>
    </Box>
  )
}
