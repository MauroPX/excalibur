'use client'

import React from 'react'
import Box from '@mui/material/Box'
import type { DecisionRow } from '@/components/templates/CasePage/types'

export interface DecisionTableProps {
  /** Filas de decisión — la "Acción" del backbone STAR-L */
  rows: DecisionRow[]
  /** <caption> de la tabla (sr-only) — ya suele haber un <h2> "Acción" encima */
  caption?: string
}

const cellSx = {
  border: '1px solid var(--md-sys-color-outline-variant)',
  p: 1.5,
  verticalAlign: 'top',
  textAlign: 'left' as const,
  color: 'var(--md-sys-color-on-surface)',
  fontSize: '0.875rem',
  lineHeight: 1.5,
}

/**
 * Molécula — EX-v2-MOL-011. Tabla "opción(es) descartada(s) → elegida → por qué"
 * (STAR-L "Acción"). Aparece en ambas variantes de caso. <table> semántica con
 * <caption> sr-only, <th scope=col/row>, y scroll horizontal propio en móvil.
 */
export const DecisionTable: React.FC<DecisionTableProps> = ({ rows, caption }) => {
  if (rows.length === 0) return null
  return (
    <Box
      data-atomic="molecule"
      data-component="DecisionTable"
      className="ex-decision-table"
      sx={{ overflowX: 'auto', maxWidth: '100%' }}
    >
      <Box
        component="table"
        className="ex-decision-table__table"
        sx={{ borderCollapse: 'collapse', width: '100%', minWidth: '640px' }}
      >
        {caption && (
          <Box component="caption" className="sr-only">
            {caption}
          </Box>
        )}
        <Box component="thead">
          <Box component="tr">
            {['Decisión', 'Opción(es) descartada(s)', 'Elegida', 'Por qué'].map((h) => (
              <Box
                key={h}
                component="th"
                scope="col"
                className="ex-decision-table__head"
                sx={{ ...cellSx, fontWeight: 700, backgroundColor: 'var(--md-sys-color-surface-container-high)' }}
              >
                {h}
              </Box>
            ))}
          </Box>
        </Box>
        <Box component="tbody">
          {rows.map((row, i) => (
            <Box component="tr" key={i}>
              <Box component="th" scope="row" className="ex-decision-table__cell" sx={{ ...cellSx, fontWeight: 600 }}>
                {row.decision}
              </Box>
              <Box component="td" className="ex-decision-table__cell" sx={cellSx}>{row.discarded}</Box>
              <Box component="td" className="ex-decision-table__cell" sx={{ ...cellSx, fontWeight: 600 }}>{row.chosen}</Box>
              <Box component="td" className="ex-decision-table__cell" sx={cellSx}>{row.why}</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default DecisionTable
