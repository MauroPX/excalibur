import { NextResponse } from 'next/server'

interface HealthStatus {
  status: 'ok' | 'degraded'
  version: string
  timestamp: string
  services: {
    strapi: 'up' | 'down' | 'unconfigured'
    claude: 'up' | 'down' | 'unconfigured'
    gemini: 'up' | 'down' | 'unconfigured'
  }
}

export async function GET(): Promise<NextResponse<HealthStatus>> {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL
  const claudeKey = process.env.ANTHROPIC_API_KEY
  const geminiKey = process.env.GEMINI_API_KEY

  const services: HealthStatus['services'] = {
    strapi: strapiUrl ? 'up' : 'unconfigured',
    claude: claudeKey ? 'up' : 'unconfigured',
    gemini: geminiKey ? 'up' : 'unconfigured',
  }

  const allConfigured = Object.values(services).every((s) => s === 'up')

  return NextResponse.json({
    status: allConfigured ? 'ok' : 'degraded',
    version: 'v2.0.0',
    timestamp: new Date().toISOString(),
    services,
  })
}
