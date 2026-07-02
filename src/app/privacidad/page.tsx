import { Metadata } from 'next'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export const metadata: Metadata = {
  title: 'Política de Privacidad — MauricioGO',
  description: 'Política de privacidad y tratamiento de datos personales del portafolio de Leonel Mauricio Gómez Ocampo.',
  robots: 'noindex',
}

export default function PrivacidadPage() {
  return (
    <Box
      component="main"
      data-atomic="page"
      data-component="PrivacidadPage"
      sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'var(--md-sys-color-surface)', minHeight: '100vh' }}
    >
      <Container maxWidth="md">
        <Typography variant="h1" component="h1" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mb: 2, color: 'var(--md-sys-color-on-surface)' }}>
          Política de Privacidad
        </Typography>

        <Typography variant="body2" sx={{ color: 'var(--md-sys-color-on-surface-variant)', mb: 6 }}>
          Última actualización: 2 de julio de 2026
        </Typography>

        <Box component="section" sx={{ mb: 5 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: '1.375rem', mb: 2, color: 'var(--md-sys-color-on-surface)' }}>
            1. Responsable del tratamiento
          </Typography>
          <Typography variant="body1" sx={{ color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.8 }}>
            Leonel Mauricio Gómez Ocampo (en adelante, «el titular»), con correo de contacto{' '}
            <Box component="a" href="mailto:lemaogo@gmail.com" sx={{ color: 'var(--md-sys-color-primary)' }}>
              lemaogo@gmail.com
            </Box>
            , es el responsable del tratamiento de los datos personales recopilados a través de este sitio web
            (excalibur-six-chi.vercel.app).
          </Typography>
        </Box>

        <Box component="section" sx={{ mb: 5 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: '1.375rem', mb: 2, color: 'var(--md-sys-color-on-surface)' }}>
            2. Datos recopilados y finalidad
          </Typography>
          <Typography variant="body1" sx={{ color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.8, mb: 2 }}>
            Este portafolio recopila únicamente los datos que usted provee de forma voluntaria a través del
            formulario de contacto:
          </Typography>
          <Box component="ul" sx={{ pl: 3, color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 2 }}>
            <Typography component="li" variant="body1"><strong>Nombre:</strong> para dirigir la respuesta de forma personalizada.</Typography>
            <Typography component="li" variant="body1"><strong>Correo electrónico:</strong> para responder a su mensaje.</Typography>
            <Typography component="li" variant="body1"><strong>Mensaje:</strong> para comprender su consulta o propuesta.</Typography>
          </Box>
          <Typography variant="body1" sx={{ color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.8, mt: 2 }}>
            Estos datos se usan exclusivamente para responder a su contacto. No se ceden, venden ni comparten con
            terceros para fines comerciales.
          </Typography>
        </Box>

        <Box component="section" sx={{ mb: 5 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: '1.375rem', mb: 2, color: 'var(--md-sys-color-on-surface)' }}>
            3. Asistente TitanRAGAgent
          </Typography>
          <Typography variant="body1" sx={{ color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.8 }}>
            Las preguntas que usted realiza al asistente conversacional TitanRAGAgent se transmiten a los servicios
            de inteligencia artificial de Anthropic (Claude) y Google (Gemini) para generar la respuesta. Estos
            mensajes no se almacenan en ninguna base de datos propia. El tratamiento de dichos datos por parte de
            Anthropic y Google se rige por sus respectivas políticas de privacidad.
          </Typography>
        </Box>

        <Box component="section" sx={{ mb: 5 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: '1.375rem', mb: 2, color: 'var(--md-sys-color-on-surface)' }}>
            4. Analíticas web
          </Typography>
          <Typography variant="body1" sx={{ color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.8 }}>
            Este sitio utiliza Vercel Analytics y Vercel Speed Insights para medir el rendimiento y el tráfico de
            forma anónima y sin cookies de rastreo. No se recopila información de identificación personal a través
            de estos servicios.
          </Typography>
        </Box>

        <Box component="section" sx={{ mb: 5 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: '1.375rem', mb: 2, color: 'var(--md-sys-color-on-surface)' }}>
            5. Base legal — Ley 1581 de 2012 (Colombia)
          </Typography>
          <Typography variant="body1" sx={{ color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.8 }}>
            El tratamiento de sus datos personales se realiza con base en su consentimiento voluntario al enviar el
            formulario de contacto, de conformidad con la Ley Estatutaria 1581 de 2012 y el Decreto 1377 de 2013 de
            la República de Colombia.
          </Typography>
        </Box>

        <Box component="section" sx={{ mb: 5 }}>
          <Typography variant="h2" component="h2" sx={{ fontSize: '1.375rem', mb: 2, color: 'var(--md-sys-color-on-surface)' }}>
            6. Derechos de habeas data
          </Typography>
          <Typography variant="body1" sx={{ color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.8 }}>
            Usted tiene derecho a conocer, actualizar, rectificar y suprimir los datos personales que haya
            proporcionado. Para ejercer estos derechos, contáctenos en{' '}
            <Box component="a" href="mailto:lemaogo@gmail.com" sx={{ color: 'var(--md-sys-color-primary)' }}>
              lemaogo@gmail.com
            </Box>
            . Atenderemos su solicitud en un plazo máximo de 15 días hábiles.
          </Typography>
        </Box>

        <Box component="section">
          <Typography variant="h2" component="h2" sx={{ fontSize: '1.375rem', mb: 2, color: 'var(--md-sys-color-on-surface)' }}>
            7. Contacto
          </Typography>
          <Typography variant="body1" sx={{ color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.8 }}>
            Para cualquier consulta sobre esta política, puede escribirnos a{' '}
            <Box component="a" href="mailto:lemaogo@gmail.com" sx={{ color: 'var(--md-sys-color-primary)' }}>
              lemaogo@gmail.com
            </Box>
            .
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
