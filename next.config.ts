import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const nextConfig: NextConfig = {
  async redirects() {
    // Taxonomía: Solidaria es una prueba/diagnóstico autodirigido, no experiencia
    // profesional pagada. Su URL canónica es /pruebas-tecnicas/solidaria — /casos/
    // es solo para casos de cliente. Sin contenido ni URLs duplicadas.
    return [
      {
        source: '/casos/solidaria',
        destination: '/pruebas-tecnicas/solidaria',
        permanent: true,
      },
      {
        source: '/en/casos/solidaria',
        destination: '/en/pruebas-tecnicas/solidaria',
        permanent: true,
      },
    ]
  },
}

export default withNextIntl(nextConfig)
