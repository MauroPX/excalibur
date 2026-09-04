'use client'

import React from 'react'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import { Metric } from '@/components/atoms/Metric'
import type { MetricProps } from '@/components/atoms/Metric/Metric'

export interface MetricRowProps {
  metrics: MetricProps[]
}

const StyledMetricRow = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
  alignItems: 'stretch',
  '& .ex-metric-row__item': {
    flex: '1 1 120px',
  },
})

export const MetricRow = ({ metrics }: MetricRowProps) => {
  return (
    <StyledMetricRow
      data-atomic="molecule"
      data-component="MetricRow"
      className="ex-metric-row"
      role="list"
      aria-label="Métricas clave"
    >
      {metrics.map((metric, i) => (
        <div key={i} className="ex-metric-row__item" role="listitem">
          <Metric {...metric} />
        </div>
      ))}
    </StyledMetricRow>
  )
}

export default MetricRow
