'use client'

import React from 'react'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export interface MetricProps {
  /** Valor destacado de la métrica */
  value: string | number
  /** Etiqueta descriptiva */
  label: string
  /** Tendencia visual */
  trend?: 'positive' | 'negative' | 'neutral'
}

const StyledMetric = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '16px',
  borderRadius: '12px',
  backgroundColor: 'rgba(var(--md-sys-color-surface-rgb), 0.05)',
  border: '1px solid rgba(var(--md-sys-color-outline-rgb), 0.12)',
  
  '&.ex-metric--positive .ex-metric__value': {
    color: 'var(--md-sys-color-primary)',
  },
  '&.ex-metric--negative .ex-metric__value': {
    color: 'var(--md-sys-color-error)',
  },
}))

/**
 * Átomo Metric para visualización de KPIs y datos clave
 */
export const Metric = ({
  value,
  label,
  trend = 'neutral',
}: MetricProps) => {
  return (
    <StyledMetric
      data-atomic="atom"
      data-component="Metric"
      className={`ex-metric ex-metric--${trend}`}
    >
      <Typography
        variant="h4"
        component="div"
        className="ex-metric__value"
        sx={{ fontWeight: 700, fontFamily: 'inherit' }}
      >
        {value}
      </Typography>
      <Typography
        variant="body2"
        className="ex-metric__label"
        sx={{ color: 'var(--md-sys-color-on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.05em' }}
      >
        {label}
      </Typography>
    </StyledMetric>
  )
}

export default Metric
