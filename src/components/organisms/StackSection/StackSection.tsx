import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis,
  PolarRadiusAxis, ResponsiveContainer, Tooltip,
} from 'recharts'
import type { StackCategory } from '@/content/home'

export type { StackCategory } from '@/content/home'

export interface StackSectionProps {
  /** Las 6 categorías reales del stack (v1). El radar grafica cuántos casos aplican cada una. */
  categories: StackCategory[]
  title?: string
}

/**
 * Organismo — EX-v2-ORG-005 v2.0.0.
 *
 * CAMBIO v1.0.0 → v2.0.0: se eliminó el `level: number` por skill (dato fabricado —
 * "Product Strategy 95%" sin fuente). Ahora cada categoría lista sus herramientas
 * reales SIN nivel, y el radar grafica un entero verificable: en cuántos casos de
 * `src/content/cases/**` se aplicó esa categoría (`appliedIn.length`).
 */
export const StackSection: React.FC<StackSectionProps> = ({ categories, title = 'Stack y métodos' }) => {
  const radarData = categories.map((c) => ({
    category: c.label,
    count: c.appliedIn.length,
  }))
  const maxCount = Math.max(1, ...radarData.map((d) => d.count))

  return (
    <Box
      component="section"
      data-atomic="organism"
      data-component="StackSection"
      className="ex-stack-section"
      aria-labelledby="stack-heading"
      sx={{ py: 6, backgroundColor: 'var(--md-sys-color-surface)' }}
    >
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 2, sm: 3, md: 4 } }}>
        <Typography id="stack-heading" variant="h4" component="h2" sx={{ color: 'var(--md-sys-color-on-surface)', mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'var(--md-sys-color-on-surface-variant)', mb: 4, maxWidth: '640px' }}>
          El radar no mide «nivel de dominio» — grafica en cuántos casos reales de este portafolio
          se aplicó cada área.
        </Typography>

        {/* RadarChart: aria-hidden — el mismo dato está en la tabla sr-only y en los bloques de abajo */}
        <Box aria-hidden="true" className="ex-stack-section__radar"
          sx={{ width: '100%', maxWidth: 420, mx: 'auto', height: 320, mb: 4, '& *': { userSelect: 'none' } }}>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarData}>
              <PolarGrid stroke="var(--md-sys-color-outline-variant)" />
              <PolarAngleAxis
                dataKey="category"
                tick={{ fill: 'var(--md-sys-color-on-surface-variant)', fontSize: 11 }}
              />
              <PolarRadiusAxis domain={[0, maxCount]} tick={false} axisLine={false} />
              <Radar
                name="Casos"
                dataKey="count"
                stroke="var(--md-sys-color-primary)"
                fill="var(--md-sys-color-primary)"
                fillOpacity={0.3}
              />
              <Tooltip
                contentStyle={{ backgroundColor: 'var(--md-sys-color-surface-container)', border: 'none', borderRadius: 8 }}
                labelStyle={{ color: 'var(--md-sys-color-on-surface)' }}
                itemStyle={{ color: 'var(--md-sys-color-primary)' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </Box>

        <Box component="table" className="sr-only" aria-label="Aplicación del stack por categoría"
          sx={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
          <caption>Cantidad de casos en los que se aplicó cada categoría del stack</caption>
          <thead>
            <tr><th scope="col">Categoría</th><th scope="col">Herramientas / métodos</th><th scope="col">Casos aplicados</th></tr>
          </thead>
          <tbody>
            {categories.map((c) => (
              <tr key={c.id}>
                <td>{c.label}</td>
                <td>{c.items.join(', ')}</td>
                <td>{c.appliedIn.length}</td>
              </tr>
            ))}
          </tbody>
        </Box>

        <Box className="ex-stack-section__grid"
          sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', md: 'repeat(3,1fr)' }, gap: 3 }}>
          {categories.map((c) => (
            <Box key={c.id} className={`ex-stack-section__category ex-stack-section--${c.id}`}>
              <Typography variant="overline" component="h3"
                sx={{ color: 'var(--md-sys-color-primary)', display: 'block', mb: 0.5, fontWeight: 700 }}>
                <Box component="span" aria-hidden="true" sx={{ mr: 0.75 }}>{c.icon}</Box>
                {c.label}
              </Typography>
              <Typography variant="caption" sx={{ color: 'var(--md-sys-color-on-surface-variant)', display: 'block', mb: 1.5 }}>
                Aplicado en {c.appliedIn.length} {c.appliedIn.length === 1 ? 'caso' : 'casos'}
              </Typography>
              <Box component="ul" aria-label={c.label}
                sx={{ listStyle: 'none', m: 0, p: 0, display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                {c.items.map((item) => (
                  <Box component="li" key={item}
                    sx={{
                      px: 1,
                      py: 0.25,
                      borderRadius: '999px',
                      border: '1px solid var(--md-sys-color-outline-variant)',
                      fontSize: '0.75rem',
                      color: 'var(--md-sys-color-on-surface)',
                    }}
                  >
                    {item}
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default StackSection
