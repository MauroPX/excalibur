import React from 'react'
import { Box, Typography } from '@mui/material'

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

  return (
    <Box
      component="section"
      data-atomic="organism"
      data-component="StackSection"
      className="ex-stack-section"
      sx={{ py: 6, backgroundColor: 'var(--md-sys-color-surface)' }}
    >
      <Typography variant="h4" component="h2" sx={{ color: 'var(--md-sys-color-on-surface)', mb: 4 }}>
        {title}
      </Typography>

      {/* Radar: aria-hidden + tabla sr-only para a11y */}
      <Box aria-hidden="true" className="ex-stack-section__radar"
        sx={{ width: '100%', maxWidth: 400, mx: 'auto', height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center',
              backgroundColor: 'var(--md-sys-color-surface-container)', borderRadius: 2, mb: 4 }}>
        <Typography variant="body2" sx={{ color: 'var(--md-sys-color-on-surface)' }}>
          [RadarChart — {skills.length} habilidades]
        </Typography>
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
              <td>{s.level}/10</td>
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
                    <Typography variant="caption" sx={{ color: 'var(--md-sys-color-on-surface)' }}>{skill.level}/10</Typography>
                  </Box>
                  <Box sx={{ height: 4, borderRadius: 2, backgroundColor: 'var(--md-sys-color-surface-container-high)' }}>
                    <Box sx={{ height: '100%', borderRadius: 2, width: `${skill.level * 10}%`, backgroundColor: 'var(--md-sys-color-primary)' }} />
                  </Box>
                </Box>
              ))}
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default StackSection
