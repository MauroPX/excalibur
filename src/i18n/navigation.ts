import { createNavigation } from 'next-intl/navigation'
import { routing } from './routing'

/**
 * Wrappers de next/navigation conscientes del locale activo — usar SIEMPRE
 * estos en vez de next/navigation directo para que un Link o router.push()
 * preserve el idioma actual (ver CasePageNav, que antes usaba next/navigation
 * a secas y además apuntaba a /caso/ singular en vez de /casos/ plural).
 */
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
