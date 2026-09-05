/**
 * Wrapper de analytics — EX-v2-ANALYTICS-001
 * Fuente de verdad del contrato: docs/m3/blueprints/BLUEPRINT_SPEC_EX-v2-ANALYTICS-001.json
 * Plan de eventos: docs/m3/analytics/TRACKING_PLAN.md
 * Decisión de arquitectura: docs/m0/adr/ADR-006-analytics.md (PostHog único, no dual dispatch)
 *
 * Ningún componente llama a posthog-js directo — todo pasa por track()/trackPageView()/
 * trackConversion() de este módulo, para que la sanitización de PII (E3) sea imposible de saltar.
 */
import posthog from 'posthog-js'

/** Taxonomía cerrada de eventos — ver TRACKING_PLAN.md §2. Nada de string libre. */
export type EventName =
  // Funnel 1 — Discovery
  | 'page_viewed'
  | 'section_viewed'
  | 'scroll_depth_reached'
  | 'nav_tab_clicked'
  // Funnel 2 — Engagement con proyectos
  | 'project_card_clicked'
  | 'project_detail_viewed'
  // Funnel 3 — IA interactiva (TITAN RAG)
  | 'chat_session_started'
  | 'chat_message_sent'
  | 'chat_response_received'
  | 'chat_session_ended'
  // Funnel 4 — Conversión
  | 'contact_form_started'
  | 'contact_form_submitted'
  | 'external_link_clicked'
  // Especial
  | 'high_intent_signal'

export type EventProperties = Record<string, unknown>

/** Claves que NUNCA deben llegar a PostHog tal cual — ver TRACKING_PLAN.md §3 (E3). */
const FORBIDDEN_PII_KEYS = new Set([
  'contact_email',
  'user_password',
  'identity_number',
  'full_name',
])

/** Vista(s) excluidas de session replay — ver TRACKING_PLAN.md §3. */
const REPLAY_EXCLUDED_PATHS = ['/privacidad']

let initialized = false

function isEnabled(): boolean {
  return typeof window !== 'undefined' && Boolean(process.env.NEXT_PUBLIC_POSTHOG_KEY)
}

/**
 * Inicializa PostHog una única vez. No-op silencioso en SSR o sin
 * NEXT_PUBLIC_POSTHOG_KEY configurada — nunca rompe build/dev sin la key.
 * Llamado únicamente desde src/components/infra/PostHogProvider.
 */
export function initAnalytics(): void {
  if (initialized || !isEnabled()) return

  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? 'https://app.posthog.com',
    person_profiles: 'identified_only',
    autocapture: false,
    capture_pageview: false,
    session_recording: {
      maskAllInputs: false,
      maskInputOptions: { password: true, email: true },
      maskInputFn: (text, element) => {
        const tag = element?.tagName?.toLowerCase()
        if (tag === 'textarea' || element?.getAttribute?.('type') === 'email') {
          return '*'.repeat(text.length)
        }
        return text
      },
    },
  })
  initialized = true
}

/** Sanitización recursiva — elimina claves PII de objetos y arrays anidados (E3). */
export function sanitizeProperties(obj: EventProperties): EventProperties {
  const clean = (target: unknown): unknown => {
    if (Array.isArray(target)) return target.map(clean)
    if (target !== null && typeof target === 'object') {
      const out: Record<string, unknown> = {}
      for (const [key, value] of Object.entries(target as Record<string, unknown>)) {
        if (FORBIDDEN_PII_KEYS.has(key)) continue
        out[key] = clean(value)
      }
      return out
    }
    return target
  }
  return clean(obj) as EventProperties
}

/** Hash SHA-256 en el navegador (Web Crypto) — usado para chat_message_text. */
async function sha256(text: string): Promise<string> {
  const data = new TextEncoder().encode(text)
  const digest = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

/** Registro central de eventos. Fire-and-forget: nunca bloquea la UI. */
export function track(eventName: EventName, properties: EventProperties = {}): void {
  if (!isEnabled()) return

  const dispatch = async () => {
    let props = sanitizeProperties(properties)
    if (eventName === 'chat_message_sent' && typeof props.chat_message_text === 'string') {
      props = { ...props, chat_message_text: await sha256(props.chat_message_text) }
    }
    posthog.capture(eventName, { page_type: props.page_type ?? 'unknown', ...props })
  }
  void dispatch()
}

/** Pageview explícito — capture_pageview está en false, así que este es el único emisor. */
export function trackPageView(path: string): void {
  if (!isEnabled() || REPLAY_EXCLUDED_PATHS.includes(path)) return
  track('page_viewed', { url: path, page_type: 'navigation' })
}

/** Eventos de conversión (Funnel 4). */
export function trackConversion(type: 'contact_form' | 'external'): void {
  track(type === 'contact_form' ? 'contact_form_submitted' : 'external_link_clicked', {
    timestamp: new Date().toISOString(),
  })
}
