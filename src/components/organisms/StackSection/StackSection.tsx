'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import PaletteRounded from '@mui/icons-material/PaletteRounded'
import AccessibilityNewRounded from '@mui/icons-material/AccessibilityNewRounded'
import SmartToyRounded from '@mui/icons-material/SmartToyRounded'
import InsightsRounded from '@mui/icons-material/InsightsRounded'
import SettingsSuggestRounded from '@mui/icons-material/SettingsSuggestRounded'
import BarChartRounded from '@mui/icons-material/BarChartRounded'
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis,
  PolarRadiusAxis, ResponsiveContainer, Tooltip,
} from 'recharts'
import type { StackCategory, StackIconKind } from '@/content/home'

export type { StackCategory } from '@/content/home'

/** kind → icono `@mui/icons-material` (currentColor, sigue el token del título). */
const ICON: Record<StackIconKind, React.ElementType<SvgIconProps>> = {
  design: PaletteRounded,
  a11y: AccessibilityNewRounded,
  ai: SmartToyRounded,
  strategy: InsightsRounded,
  devops: SettingsSuggestRounded,
  analytics: BarChartRounded,
}

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
export const StackSection: React.FC<StackSectionProps> = ({ categories, title }) => {
  const t = useTranslations('stack')
  const heading = title ?? t('sectionTitle')
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
          {heading}
        </Typography>
        <Typography variant="body2" sx={{ color: 'var(--md-sys-color-on-surface-variant)', mb: 4, maxWidth: '640px' }}>
          {t('radarHint')}
        </Typography>

        {/* RadarChart: aria-hidden — el mismo dato está en la tabla sr-only y en los bloques de abajo */}
        <Box aria-hidden="true" className="ex-stack-section__radar"
          sx={{ width: '100%', maxWidth: 420, mx: 'auto', height: 320, mb: 4, '& *': { userSelect: 'none' } }}>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarData} tabIndex={-1}>
              <PolarGrid stroke="var(--md-sys-color-outline-variant)" />
              <PolarAngleAxis
                dataKey="category"
                tick={{ fill: 'var(--md-sys-color-on-surface-variant)', fontSize: 11 }}
              />
              <PolarRadiusAxis domain={[0, maxCount]} tick={false} axisLine={false} />
              <Radar
                name={t('radarSeries')}
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

        {/* Tabla de datos para lectores de pantalla. El wrapper .sr-only es un <div>
            (no display:table) para que su overflow:hidden + width:1px contengan la
            tabla — una <table> con .sr-only directo se expande por table-layout. */}
        <Box className="sr-only">
          <Box component="table" aria-label={t('applyTableLabel')}>
            <caption>{t('applyTableCaption')}</caption>
            <thead>
              <tr><th scope="col">{t('columns.category')}</th><th scope="col">{t('columns.tools')}</th><th scope="col">{t('columns.appliedCases')}</th></tr>
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
        </Box>

        <Box className="ex-stack-section__grid"
          sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', md: 'repeat(3,1fr)' }, gap: 3 }}>
          {categories.map((c) => {
            const CategoryIcon = ICON[c.icon]
            return (
            <Box key={c.id} className={`ex-stack-section__category ex-stack-section--${c.id}`}>
              <Typography variant="overline" component="h3"
                sx={{ color: 'var(--md-sys-color-primary)', display: 'flex', alignItems: 'center', gap: 0.75, mb: 0.5, fontWeight: 700 }}>
                <CategoryIcon aria-hidden="true" sx={{ fontSize: '1.125rem' }} />
                {c.label}
              </Typography>
              <Typography variant="caption" sx={{ color: 'var(--md-sys-color-on-surface-variant)', display: 'block', mb: 1.5 }}>
                {t('appliedIn', { count: c.appliedIn.length })}
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
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}

export default StackSection
