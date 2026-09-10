'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import AccountBalanceWalletRounded from '@mui/icons-material/AccountBalanceWalletRounded'
import AccountBalanceRounded from '@mui/icons-material/AccountBalanceRounded'
import LocalShippingRounded from '@mui/icons-material/LocalShippingRounded'
import SchoolRounded from '@mui/icons-material/SchoolRounded'
import LocalHospitalRounded from '@mui/icons-material/LocalHospitalRounded'
import CasinoRounded from '@mui/icons-material/CasinoRounded'
import LocalParkingRounded from '@mui/icons-material/LocalParkingRounded'
import PolicyRounded from '@mui/icons-material/PolicyRounded'
import BoltRounded from '@mui/icons-material/BoltRounded'
import NewspaperRounded from '@mui/icons-material/NewspaperRounded'
import type { IndustryEntry, IndustryIconKind } from '@/content/home'

/** kind → icono `@mui/icons-material` (currentColor, sigue el token del título). */
const ICON: Record<IndustryIconKind, React.ElementType<SvgIconProps>> = {
  fintech: AccountBalanceWalletRounded,
  insurance: PolicyRounded,
  govtech: AccountBalanceRounded,
  logistics: LocalShippingRounded,
  edtech: SchoolRounded,
  health: LocalHospitalRounded,
  energy: BoltRounded,
  media: NewspaperRounded,
  gaming: CasinoRounded,
  parking: LocalParkingRounded,
}

export interface IndustriesSectionProps {
  industries: IndustryEntry[]
  title?: string
}

/**
 * Organismo — EX-v2-ORG-011. Grid de industrias de la portada de v1 (`#industries`).
 * Fuente: docs/m1/CONTENT_COPY_STRATEGY.md §7 pregunta 5 (ya reconciliada). NO se
 * incluyen los nombres no verificados del grid de v1 (Fingo, Powwi, Skandia, …).
 */
export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  industries,
  title,
}) => {
  const t = useTranslations('common')
  return (
  <Box
    component="section"
    data-atomic="organism"
    data-component="IndustriesSection"
    className="ex-industries-section"
    aria-labelledby="industries-heading"
    sx={{ py: 6, backgroundColor: 'var(--md-sys-color-surface)' }}
  >
    <Box sx={{ maxWidth: '1100px', mx: 'auto', px: { xs: 2, sm: 3, md: 4 } }}>
      <Typography id="industries-heading" variant="h4" component="h2" sx={{ color: 'var(--md-sys-color-on-surface)', mb: 4 }}>
        {title ?? t('industriesTitle')}
      </Typography>

      <Box
        component="ul"
        aria-label={t('industriesListLabel')}
        sx={{
          listStyle: 'none',
          m: 0,
          p: 0,
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', md: 'repeat(3,1fr)' },
          gap: 2,
        }}
      >
        {industries.map((ind) => {
          const IndustryIcon = ICON[ind.icon]
          return (
          <Box
            key={ind.label}
            component="li"
            className="ex-industries-section__item"
            sx={{
              p: 2,
              borderRadius: '8px',
              border: '1px solid var(--md-sys-color-outline-variant)',
              backgroundColor: 'var(--md-sys-color-surface-container-low)',
            }}
          >
            <Typography variant="subtitle1" component="h3" sx={{ color: 'var(--md-sys-color-on-surface)', display: 'flex', alignItems: 'center', gap: 0.75, mb: 0.75 }}>
              <IndustryIcon aria-hidden="true" sx={{ fontSize: '1.25rem', color: 'var(--md-sys-color-primary)' }} />
              {ind.label}
            </Typography>
            <Typography variant="body2" sx={{ color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.6 }}>
              {ind.clients.join(' · ')}
            </Typography>
          </Box>
          )
        })}
      </Box>
    </Box>
  </Box>
  )
}

export default IndustriesSection
