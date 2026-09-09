import type { Metadata } from 'next'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { getPrivacy, type InlinePart } from '@/content/legal/privacy'
import type { AppLocale } from '@/i18n/routing'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'privacy' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    robots: 'noindex',
  }
}

/** Renderiza un fragmento inline: texto, enlace de correo o negrita. */
function renderPart(part: InlinePart, i: number) {
  if (typeof part === 'string') return <span key={i}>{part}</span>
  if ('email' in part) {
    return (
      <Box
        key={i}
        component="a"
        href={`mailto:${part.email}`}
        sx={{ color: 'var(--md-sys-color-primary)' }}
      >
        {part.email}
      </Box>
    )
  }
  return <strong key={i}>{part.strong}</strong>
}

export default async function PrivacidadPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const { title, updated, sections } = getPrivacy(locale as AppLocale)

  return (
    <Box
      component="main"
      data-atomic="page"
      data-component="PrivacidadPage"
      sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'var(--md-sys-color-surface)', minHeight: '100vh' }}
    >
      <Container maxWidth="md">
        <Typography variant="h1" component="h1" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mb: 2, color: 'var(--md-sys-color-on-surface)' }}>
          {title}
        </Typography>

        <Typography variant="body2" sx={{ color: 'var(--md-sys-color-on-surface-variant)', mb: 6 }}>
          {updated}
        </Typography>

        {sections.map((section, si) => (
          <Box component="section" key={si} sx={{ mb: si === sections.length - 1 ? 0 : 5 }}>
            <Typography variant="h2" component="h2" sx={{ fontSize: '1.375rem', mb: 2, color: 'var(--md-sys-color-on-surface)' }}>
              {section.heading}
            </Typography>
            {section.paragraphs.map((parts, pi) => (
              <Typography
                key={pi}
                variant="body1"
                sx={{
                  color: 'var(--md-sys-color-on-surface-variant)',
                  lineHeight: 1.8,
                  mb: pi === section.paragraphs.length - 1 && !section.bullets ? 0 : 2,
                }}
              >
                {parts.map(renderPart)}
              </Typography>
            ))}
            {section.bullets && (
              <Box component="ul" sx={{ pl: 3, color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 2 }}>
                {section.bullets.map((parts, bi) => (
                  <Typography component="li" variant="body1" key={bi}>
                    {parts.map(renderPart)}
                  </Typography>
                ))}
              </Box>
            )}
            {section.afterBullets?.map((parts, pi) => (
              <Typography
                key={`after-${pi}`}
                variant="body1"
                sx={{ color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.8, mt: 2 }}
              >
                {parts.map(renderPart)}
              </Typography>
            ))}
          </Box>
        ))}
      </Container>
    </Box>
  )
}
