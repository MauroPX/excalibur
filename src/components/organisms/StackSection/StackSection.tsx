import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis,
  PolarRadiusAxis, ResponsiveContainer, Tooltip,
} from 'recharts'

export interface StackSkill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'design' | 'process' | 'ai'
}

export interface StackSectionProps {
  skills: StackSkill[]
  title?: string
}

export const StackSection: React.FC<StackSectionProps> = ({ skills, title = 'Stack técnico' }) => {
  const categories: Array<StackSkill['category']> = ['frontend', 'backend', 'design', 'process', 'ai']

  const radarData = categories.map(cat => ({
    category: cat,
    level: Math.round(
      skills.filter(s => s.category === cat).reduce((sum, s) => sum + s.level, 0) /
      Math.max(skills.filter(s => s.category === cat).length, 1)
    ),
  }))

  return (
    <Box
      component="section"
      data-atomic="organism"
      data-component="StackSection"
      className="ex-stack-section"
      sx={{ py: 6, backgroundColor: 'var(--md-sys-color-surface)' }}
    >
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: { xs: 2, sm: 3, md: 4 } }}>
        <Typography variant="h4" component="h2" sx={{ color: 'var(--md-sys-color-on-surface)', mb: 4 }}>
          {title}
        </Typography>

        {/* RadarChart: aria-hidden — datos accesibles en tabla sr-only abajo */}
        <Box aria-hidden="true" className="ex-stack-section__radar"
          sx={{ width: '100%', maxWidth: 400, mx: 'auto', height: 300, mb: 4, '& *': { userSelect: 'none' } }}>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarData}>
              <PolarGrid stroke="var(--md-sys-color-outline-variant)" />
              <PolarAngleAxis
                dataKey="category"
                tick={{ fill: 'var(--md-sys-color-on-surface-variant)', fontSize: 12 }}
              />
              <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
              <Radar
                name="Nivel"
                dataKey="level"
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

        <table className="sr-only" aria-label="Datos del stack técnico">
          <caption>Niveles de habilidades técnicas</caption>
          <thead>
            <tr><th scope="col">Habilidad</th><th scope="col">Categoría</th><th scope="col">Nivel</th></tr>
          </thead>
          <tbody>
            {skills.map(s => (
              <tr key={s.name}>
                <td>{s.name}</td>
                <td>{s.category}</td>
                <td>{s.level}%</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Breakdown por categoría */}
        <Box className="ex-stack-section__breakdown"
          sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', md: 'repeat(3,1fr)' }, gap: 3 }}>
          {categories.map(cat => {
            const catSkills = skills.filter(s => s.category === cat)
            if (catSkills.length === 0) return null
            return (
              <Box key={cat} className={`ex-stack-section__category ex-stack-section--${cat}`}>
                <Typography variant="overline" sx={{ color: 'var(--md-sys-color-primary)', display: 'block', mb: 1 }}>
                  {cat.toUpperCase()}
                </Typography>
                {catSkills.map(skill => (
                  <Box key={skill.name} className="ex-stack-section__skill" sx={{ mb: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.25 }}>
                      <Typography variant="body2" sx={{ color: 'var(--md-sys-color-on-surface)' }}>{skill.name}</Typography>
                      <Typography variant="caption" sx={{ color: 'var(--md-sys-color-on-surface)' }}>{skill.level}%</Typography>
                    </Box>
                    <Box sx={{ height: 4, borderRadius: 2, backgroundColor: 'var(--md-sys-color-surface-container-high)' }}>
                      <Box sx={{ height: '100%', borderRadius: 2, width: `${Math.min(skill.level, 100)}%`, backgroundColor: 'var(--md-sys-color-primary)' }} />
                    </Box>
                  </Box>
                ))}
              </Box>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}

export default StackSection
