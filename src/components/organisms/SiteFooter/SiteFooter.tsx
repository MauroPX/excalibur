'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import { Link } from '@/i18n/navigation'

const LINKEDIN = 'https://www.linkedin.com/in/maurogooc/'
const GITHUB = 'https://github.com/MauroPX'
const EMAIL = 'lemaogo@gmail.com'

/**
 * Organismo — EX-v2-ORG-013. Pie de sitio persistente: tagline, enlace a
 * /privacidad (antes sin ningún enlace entrante), redes y correo, © año.
 */
export const SiteFooter: React.FC = () => {
  const t = useTranslations('footer')
  const year = new Date().getFullYear()

  const social = [
    { key: 'linkedin', href: LINKEDIN, Icon: LinkedInIcon, external: true },
    { key: 'github', href: GITHUB, Icon: GitHubIcon, external: true },
    { key: 'email', href: `mailto:${EMAIL}`, Icon: EmailRoundedIcon, external: false },
  ] as const

  return (
    <Box
      component="footer"
      data-atomic="organism"
      data-component="SiteFooter"
      className="ex-site-footer"
      sx={{
        backgroundColor: 'var(--md-sys-color-surface-container)',
        borderTop: '1px solid var(--md-sys-color-outline-variant)',
        mt: 'auto',
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 4, md: 5 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 3,
          alignItems: { xs: 'flex-start', md: 'center' },
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ maxWidth: '420px' }}>
          <Typography sx={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--md-sys-color-on-surface)', mb: 0.5 }}>
            MauroGO
          </Typography>
          <Typography variant="body2" sx={{ color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.6 }}>
            {t('tagline')}
          </Typography>
        </Box>

        <Box
          component="nav"
          aria-label={t('navLabel')}
          sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: { xs: 2, sm: 3 } }}
        >
          {social.map(({ key, href, Icon, external }) => (
            <Box
              key={key}
              component="a"
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              aria-label={t(`social.${key}`)}
              className={`ex-site-footer__social ex-site-footer__social--${key}`}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.75,
                color: 'var(--md-sys-color-on-surface)',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: 500,
                '&:hover': { color: 'var(--md-sys-color-primary)' },
                '&:focus-visible': { outline: '2px solid var(--md-sys-color-primary)', outlineOffset: '2px' },
              }}
            >
              <Icon aria-hidden="true" sx={{ fontSize: '1.125rem' }} />
              {t(`social.${key}`)}
            </Box>
          ))}
          <Box
            component={Link}
            href="/privacidad"
            className="ex-site-footer__privacy"
            sx={{
              color: 'var(--md-sys-color-on-surface)',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: 500,
              '&:hover': { color: 'var(--md-sys-color-primary)' },
              '&:focus-visible': { outline: '2px solid var(--md-sys-color-primary)', outlineOffset: '2px' },
            }}
          >
            {t('privacy')}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 4 },
          pb: 3,
        }}
      >
        <Typography variant="caption" sx={{ color: 'var(--md-sys-color-on-surface-variant)' }}>
          © {year} MauroGO. {t('rights')}
        </Typography>
      </Box>
    </Box>
  )
}

export default SiteFooter
