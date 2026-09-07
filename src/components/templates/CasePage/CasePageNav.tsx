'use client'
import React from 'react'
import Box from '@mui/material/Box'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/atoms/Button'
import { useRouter } from '@/i18n/navigation'

export interface CasePageNavProps {
  backHref?: string
  /** `href` opcional (v1.1.0): los work-tests navegan a /pruebas-tecnicas/, no a /casos/ */
  nextCase?: { slug: string; title: string; href?: string } | null
}

export const CasePageNav: React.FC<CasePageNavProps> = ({ backHref = '/#casos', nextCase }) => {
  const t = useTranslations('casePage.nav')
  const router = useRouter()
  return (
    <Box
      component="nav"
      aria-label="Navegación entre casos"
      className="ex-case-page__nav"
      sx={{ display: 'flex', gap: 2, justifyContent: 'space-between', pt: 4, pb: 6 }}
    >
      <Button variant="text" label={t('back')} onClick={() => router.push(backHref)} />
      {nextCase && (
        <Button
          variant="cta"
          label={t('next', { title: nextCase.title })}
          onClick={() => router.push(nextCase.href ?? `/casos/${nextCase.slug}`)}
        />
      )}
    </Box>
  )
}
export default CasePageNav
