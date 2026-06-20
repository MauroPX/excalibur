'use client'
import React from 'react'
import { Box } from '@mui/material'
import { Button } from '@/components/atoms/Button'
import { useRouter } from 'next/navigation'

export interface CasePageNavProps {
  backHref?: string
  nextCase?: { slug: string; title: string } | null
}

export const CasePageNav: React.FC<CasePageNavProps> = ({ backHref = '/#casos', nextCase }) => {
  const router = useRouter()
  return (
    <Box
      component="nav"
      aria-label="Navegación entre casos"
      className="ex-case-page__nav"
      sx={{ display: 'flex', gap: 2, justifyContent: 'space-between', pt: 4, pb: 6 }}
    >
      <Button variant="text" label="← Volver a casos" onClick={() => router.push(backHref)} />
      {nextCase && (
        <Button
          variant="cta"
          label={`Siguiente: ${nextCase.title} →`}
          onClick={() => router.push(`/caso/${nextCase.slug}`)}
        />
      )}
    </Box>
  )
}
export default CasePageNav
