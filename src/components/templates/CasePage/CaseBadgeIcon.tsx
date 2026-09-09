import React from 'react'
import type { SvgIconProps } from '@mui/material/SvgIcon'
import BuildRounded from '@mui/icons-material/BuildRounded'
import SearchRounded from '@mui/icons-material/SearchRounded'
import ArchitectureRounded from '@mui/icons-material/ArchitectureRounded'
import type { CaseBadgeIcon } from './types'

/**
 * Mapea el `kind` del badge a un icono `@mui/icons-material`. Los iconos MUI
 * renderizan como <svg fill="currentColor">, así que heredan el color del badge
 * (token M3) y cambian con el tema/contraste. Sustituye a los emoji quemados.
 */
const MAP: Record<CaseBadgeIcon, React.ElementType<SvgIconProps>> = {
  wrench: BuildRounded,
  search: SearchRounded,
  compass: ArchitectureRounded,
}

export function BadgeIcon({ kind, ...props }: { kind: CaseBadgeIcon } & SvgIconProps) {
  const Ico = MAP[kind]
  return <Ico aria-hidden="true" fontSize="inherit" {...props} />
}

export default BadgeIcon
