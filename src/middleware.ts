import createMiddleware from 'next-intl/middleware'
import { routing } from '@/i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Excluye /api, los archivos internos de Next y cualquier archivo estático
  // (favicon, imágenes, etc. — cualquier path con un punto en el último segmento).
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
