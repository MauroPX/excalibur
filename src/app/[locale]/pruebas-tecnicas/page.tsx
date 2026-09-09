import type { Metadata } from 'next'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { WorkTestCard } from '@/components/molecules/WorkTestCard'
import { getWorkTestCases, getMetaCase } from '@/content/cases'
import type { AppLocale } from '@/i18n/routing'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'techTests' })
  const path = '/pruebas-tecnicas'
  return {
    title: t('title'),
    description: t('metaDescription'),
    alternates: {
      canonical: locale === 'es' ? path : `/en${path}`,
      languages: { es: path, en: `/en${path}` },
    },
  }
}

export default async function PruebasTecnicasIndex({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'techTests' })

  const workTests = Object.values(getWorkTestCases(locale as AppLocale))
  const META_CASE = getMetaCase(locale as AppLocale)

  return (
    <Box
      component="main"
      id="main-content"
      data-atomic="page"
      data-component="PruebasTecnicasIndex"
      sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'var(--md-sys-color-surface)', minHeight: '100vh' }}
    >
      <Container maxWidth="lg">
        <Typography variant="h1" component="h1" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mb: 2, color: 'var(--md-sys-color-on-surface)' }}>
          {t('title')}
        </Typography>
        <Typography variant="body1" sx={{ color: 'var(--md-sys-color-on-surface-variant)', mb: 6, maxWidth: '720px' }}>
          {t.rich('intro', { strong: (chunks) => <strong>{chunks}</strong> })}
        </Typography>

        <Box
          component="ul"
          aria-label={t('listLabel')}
          sx={{
            listStyle: 'none',
            m: 0,
            p: 0,
            display: 'grid',
            gap: 2.5,
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          }}
        >
          {workTests.map((c) => (
            <Box component="li" key={c.slug}>
              <WorkTestCard
                slug={c.slug}
                title={c.title}
                valor={c.valor ?? c.description}
                href={`/pruebas-tecnicas/${c.slug}`}
                badge={c.badge ?? { icon: 'wrench' as const, label: t('badgePrueba') }}
                caseType="work-test"
                tags={c.tags}
              />
            </Box>
          ))}
          <Box component="li">
            <WorkTestCard
              slug={META_CASE.slug}
              title={META_CASE.title}
              valor={META_CASE.valor ?? META_CASE.description}
              href="/excalibur"
              badge={META_CASE.badge ?? { icon: 'compass' as const, label: t('badgePropio') }}
              caseType="meta"
              tags={META_CASE.tags}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
