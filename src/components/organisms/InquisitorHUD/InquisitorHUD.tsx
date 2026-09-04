'use client'
import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export interface A11yIssue {
  id: string
  selector: string
  impact: 'critical' | 'serious' | 'moderate' | 'minor'
  description: string
  wcag?: string
}

export interface InquisitorHUDProps {
  enabled?: boolean
}

export const InquisitorHUD: React.FC<InquisitorHUDProps> = ({ enabled = false }) => {
  const [visible, setVisible] = useState(false)
  const [issues] = useState<A11yIssue[]>([])
  const [activeFilter, setActiveFilter] = useState<A11yIssue['impact'] | 'all'>('all')

  useEffect(() => {
    if (!enabled) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key === 'a') {
        setVisible(prev => !prev)
      }
      if (e.key === 'Escape') setVisible(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [enabled])

  if (!enabled || !visible) return null

  const filtered = activeFilter === 'all' ? issues : issues.filter(i => i.impact === activeFilter)
  const byImpact = (imp: A11yIssue['impact']) => issues.filter(i => i.impact === imp).length
  const IMPACT_COLORS: Record<A11yIssue['impact'], string> = {
    critical: 'var(--md-sys-color-error)',
    serious: 'var(--md-sys-color-error)',
    moderate: 'var(--md-sys-color-tertiary-container)',
    minor: 'var(--md-sys-color-on-surface)',
  }

  return (
    <Box
      role="complementary"
      aria-label="Panel de accesibilidad InquisitorHUD"
      data-atomic="organism"
      data-component="InquisitorHUD"
      className="ex-inquisitor-hud"
      sx={{
        position: 'fixed', bottom: 16, right: 16, zIndex: 9999,
        width: 380, maxHeight: '80vh', overflowY: 'auto',
        backgroundColor: 'var(--md-sys-color-surface-container-high)',
        border: '2px solid var(--md-sys-color-primary)',
        borderRadius: 2, p: 2, boxShadow: 4,
      }}
    >
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h6" component="h2" className="ex-inquisitor-hud__title"
          sx={{ color: 'var(--md-sys-color-primary)', fontWeight: 700, fontSize: '0.9rem' }}>
          INQUISITOR HUD
        </Typography>
        <button
          aria-label="Cerrar panel de accesibilidad"
          onClick={() => setVisible(false)}
          className="ex-inquisitor-hud__close"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--md-sys-color-on-surface)', fontSize: '1.2rem', lineHeight: 1 }}
        >
          ×
        </button>
      </Box>

      {/* Métricas resumen */}
      <Box className="ex-inquisitor-hud__metrics"
        sx={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, mb: 2 }}>
        {(['critical','serious','moderate','minor'] as const).map(imp => (
          <Box key={imp} className={`ex-inquisitor-hud__metric ex-inquisitor-hud--${imp}`}
            sx={{ textAlign: 'center', p: 1, borderRadius: 1, backgroundColor: 'var(--md-sys-color-surface-container)' }}>
            <Typography variant="h6" component="span" sx={{ color: IMPACT_COLORS[imp], fontWeight: 700, lineHeight: 1, display: 'block' }}>
              {byImpact(imp)}
            </Typography>
            <Typography variant="caption" sx={{ color: 'var(--md-sys-color-on-surface)', display: 'block', fontSize: '0.65rem' }}>
              {imp}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Filtros */}
      <Box className="ex-inquisitor-hud__filters" role="group" aria-label="Filtrar por impacto"
        sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', mb: 2 }}>
        {(['all','critical','serious','moderate','minor'] as const).map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`ex-inquisitor-hud__filter-btn${activeFilter === f ? ' ex-inquisitor-hud--active' : ''}`}
            style={{
              padding: '2px 8px', fontSize: '0.7rem', borderRadius: '12px', border: '1px solid',
              cursor: 'pointer',
              borderColor: activeFilter === f ? 'var(--md-sys-color-primary)' : 'var(--md-sys-color-outline-variant)',
              backgroundColor: activeFilter === f ? 'var(--md-sys-color-primary-container)' : 'transparent',
              color: activeFilter === f ? 'var(--md-sys-color-on-primary-container)' : 'var(--md-sys-color-on-surface)',
            }}
          >
            {f === 'all' ? 'Todos' : f}
          </button>
        ))}
      </Box>

      {/* Lista de issues */}
      <Box component="ul" className="ex-inquisitor-hud__issues-list"
        aria-label={`${filtered.length} problemas de accesibilidad`}
        sx={{ listStyle: 'none', m: 0, p: 0 }}>
        {filtered.length === 0 ? (
          <Box component="li" sx={{ listStyle: 'none' }}>
            <Typography className="ex-inquisitor-hud__empty" variant="body2"
              sx={{ color: 'var(--md-sys-color-on-surface)', textAlign: 'center', py: 2 }}>
              {issues.length === 0 ? 'Ejecuta una auditoría para ver resultados.' : 'Sin problemas para este filtro.'}
            </Typography>
          </Box>
        ) : (
          filtered.map(issue => (
            <Box key={issue.id} component="li" className="ex-inquisitor-hud__issue"
              sx={{ mb: 1, p: 1.5, borderRadius: 1, borderLeft: `3px solid ${IMPACT_COLORS[issue.impact]}`,
                    backgroundColor: 'var(--md-sys-color-surface-container)' }}>
              <Typography variant="caption" className="ex-inquisitor-hud__issue-impact"
                sx={{ color: IMPACT_COLORS[issue.impact], fontWeight: 700, display: 'block', mb: 0.25 }}>
                {issue.impact.toUpperCase()} {issue.wcag && `· ${issue.wcag}`}
              </Typography>
              <Typography variant="body2" sx={{ color: 'var(--md-sys-color-on-surface)', mb: 0.25 }}>
                {issue.description}
              </Typography>
              <Typography variant="caption" component="code" className="ex-inquisitor-hud__issue-selector"
                sx={{ color: 'var(--md-sys-color-primary)', fontFamily: 'monospace', fontSize: '0.7rem' }}>
                {issue.selector}
              </Typography>
            </Box>
          ))
        )}
      </Box>
    </Box>
  )
}

export default InquisitorHUD
