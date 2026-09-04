'use client'

import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

export interface TimelineStepProps {
  company: string
  role: string
  period: string
  isLast?: boolean
}

const StyledTimelineStep = styled(Box)({
  display: 'flex',
  gap: '16px',
  position: 'relative',
  '& .ex-timeline-step__connector': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexShrink: 0,
  },
  '& .ex-timeline-step__dot': {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: 'var(--md-sys-color-primary)',
    flexShrink: 0,
    marginTop: '4px',
  },
  '& .ex-timeline-step__line': {
    width: '2px',
    flex: 1,
    marginTop: '4px',
    backgroundColor: 'var(--md-sys-color-outline-variant)',
    minHeight: '24px',
  },
  '& .ex-timeline-step__info': {
    paddingBottom: '24px',
  },
  '& .ex-timeline-step__period': {
    color: 'var(--md-sys-color-on-surface-variant)',
    fontSize: '0.75rem',
  },
})

export const TimelineStep = ({
  company,
  role,
  period,
  isLast = false,
}: TimelineStepProps) => {
  return (
    <StyledTimelineStep
      data-atomic="molecule"
      data-component="TimelineStep"
      className={`ex-timeline-step${isLast ? ' ex-timeline-step--last' : ''}`}
    >
      <div className="ex-timeline-step__connector">
        <div className="ex-timeline-step__dot" aria-hidden="true" />
        {!isLast && <div className="ex-timeline-step__line" aria-hidden="true" />}
      </div>
      <div className="ex-timeline-step__info">
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ fontWeight: 600, color: 'var(--md-sys-color-on-surface)' }}
        >
          {role}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: 'var(--md-sys-color-on-surface-variant)' }}
        >
          {company}
        </Typography>
        <Typography
          variant="caption"
          component="div"
          className="ex-timeline-step__period"
        >
          {period}
        </Typography>
      </div>
    </StyledTimelineStep>
  )
}

export default TimelineStep
