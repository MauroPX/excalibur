import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { METHODOLOGY_ENTRIES, GUIDEWIRE_INSUMO, type MethodologyEntry } from '@/content/methodology'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const path = '/metodologia'
  return {
    title: 'Metodología',
    description:
      'Los marcos de trabajo que sostienen cada caso: narrativa y decisión, sistemas de diseño, investigación y comportamiento, arquitectura y datos, accesibilidad, y crecimiento. Incluye la investigación de dominio sobre Guidewire InsuranceSuite.',
    alternates: {
      canonical: locale === 'es' ? path : `/en${path}`,
      languages: { es: path, en: `/en${path}` },
    },
  }
}

const GROUP_ORDER: MethodologyEntry['group'][] = [
  'Narrativa y decisión',
  'Sistemas de diseño',
  'Investigación y comportamiento',
  'Arquitectura y datos',
  'Accesibilidad',
  'Producto y crecimiento',
]

export default async function MetodologiaPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <Box
      component="main"
      id="main-content"
      data-atomic="page"
      data-component="MetodologiaPage"
      sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'var(--md-sys-color-surface)', minHeight: '100vh' }}
    >
      <Container maxWidth="md">
        <Typography variant="h1" component="h1" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mb: 2, color: 'var(--md-sys-color-on-surface)' }}>
          Metodología
        </Typography>
        <Typography variant="body1" sx={{ color: 'var(--md-sys-color-on-surface-variant)', mb: 6, maxWidth: '720px' }}>
          Los marcos de trabajo que sostienen cada caso. Los chips de «Metodología aplicada» de cada
          proyecto enlazan aquí, a su definición.
        </Typography>

        {/* Insumo base — Guidewire */}
        <Box
          component="section"
          id="guidewire"
          aria-labelledby="guidewire-heading"
          sx={{
            mb: 7,
            p: { xs: 2, md: 3 },
            borderLeft: '4px solid var(--md-sys-color-tertiary)',
            backgroundColor: 'var(--md-sys-color-surface-container-low)',
            borderRadius: '4px',
          }}
        >
          <Typography variant="overline" sx={{ color: 'var(--md-sys-color-on-surface-variant)', display: 'block', mb: 0.5 }}>
            {GUIDEWIRE_INSUMO.tag}
          </Typography>
          <Typography id="guidewire-heading" variant="h2" component="h2" sx={{ fontSize: { xs: '1.375rem', md: '1.625rem' }, mb: 1.5, color: 'var(--md-sys-color-on-surface)' }}>
            {GUIDEWIRE_INSUMO.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'var(--md-sys-color-on-surface-variant)', fontStyle: 'italic', mb: 2, maxWidth: '720px' }}>
            {GUIDEWIRE_INSUMO.disclaimer}
          </Typography>
          <Box component="ul" sx={{ m: 0, pl: 2.5, color: 'var(--md-sys-color-on-surface)', '& li': { mb: 1, lineHeight: 1.6 } }}>
            {GUIDEWIRE_INSUMO.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </Box>
        </Box>

        {GROUP_ORDER.map((group) => {
          const entries = METHODOLOGY_ENTRIES.filter((e) => e.group === group)
          if (entries.length === 0) return null
          return (
            <Box component="section" key={group} aria-label={group} sx={{ mb: 6 }}>
              <Typography variant="h2" component="h2" sx={{ fontSize: '1.375rem', mb: 2.5, color: 'var(--md-sys-color-on-surface)' }}>
                {group}
              </Typography>
              <Box component="dl" sx={{ m: 0 }}>
                {entries.map((e) => (
                  <Box key={e.slug} sx={{ mb: 3, scrollMarginTop: '96px' }} id={e.slug}>
                    <Box component="dt" sx={{ fontWeight: 700, color: 'var(--md-sys-color-on-surface)', mb: 0.5 }}>
                      {e.label}
                    </Box>
                    <Box component="dd" sx={{ m: 0, color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.7, maxWidth: '720px' }}>
                      {e.body}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          )
        })}
      </Container>
    </Box>
  )
}
