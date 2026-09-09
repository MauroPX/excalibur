import type { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
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
  const path = '/pruebas-tecnicas'
  return {
    title: 'Pruebas técnicas y diagnósticos',
    description:
      'Ejercicios de selección y diagnósticos autodirigidos — no encargos remunerados. FleetControl, Solidaria, BCS y Codesa, con las decisiones documentadas y el uso de IA declarado.',
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
          Pruebas técnicas y diagnósticos
        </Typography>
        <Typography variant="body1" sx={{ color: 'var(--md-sys-color-on-surface-variant)', mb: 6, maxWidth: '720px' }}>
          Ejercicios de procesos de selección y diagnósticos hechos por iniciativa propia —{' '}
          <strong>no encargos remunerados</strong>. Se muestran aparte de la experiencia profesional
          pagada. Cada uno documenta las decisiones tomadas y declara el uso de IA.
        </Typography>

        <Box
          component="ul"
          aria-label="Pruebas técnicas"
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
                badge={c.badge ?? { icon: 'wrench' as const, label: 'Prueba técnica' }}
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
              badge={META_CASE.badge ?? { icon: 'compass' as const, label: 'Caso propio' }}
              caseType="meta"
              tags={META_CASE.tags}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
