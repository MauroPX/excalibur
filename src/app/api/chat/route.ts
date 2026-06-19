import { NextRequest, NextResponse } from 'next/server'

interface ChatRequestBody {
  message: string
}

interface ChatResponseBody {
  response: string
  suggested_cases?: string[]
  provider?: 'claude' | 'gemini' | 'fallback'
}

// Códigos que indican quota agotada o servicio no disponible → ceder al siguiente proveedor
const YIELD_TO_NEXT: Set<number> = new Set([
  429, // Rate limit / quota exceeded
  529, // Anthropic overloaded
  503, // Service unavailable
  502, // Bad gateway
])

const SYSTEM_PROMPT =
  'Eres el asistente de portafolio de Leonel Mauricio Gómez Ocampo, Staff Product Architect. ' +
  'Responde en español de forma concisa y profesional. ' +
  'Enfócate en logros concretos, métricas de impacto y experiencia en product management a nivel staff.'

const SUGGESTED_CASES = [
  'Rappi — ARR +$3.2M',
  'Bancolombia — NPS +40pts',
  'Frubana — CAC -35%',
]

const FALLBACK_RESPONSE: ChatResponseBody = {
  response:
    'Actualmente estoy procesando tu consulta. Puedes explorar los proyectos directamente o contactarme en lemaogo@gmail.com',
  suggested_cases: SUGGESTED_CASES,
  provider: 'fallback',
}

function stripHtmlTags(input: string): string {
  return input.replace(/<[^>]*>/g, '').trim()
}

function validateMessage(raw: unknown): string | null {
  if (typeof raw !== 'string') return null
  const cleaned = stripHtmlTags(raw)
  if (cleaned.length === 0 || cleaned.length > 500) return null
  return cleaned
}

function shouldYield(status: number): boolean {
  // Ceder al siguiente proveedor si: quota agotada, overloaded, o cualquier otro error del servidor
  return YIELD_TO_NEXT.has(status) || status >= 500
}

// ─── Anthropic (Claude Sonnet 4.6) ────────────────────────────────────────────

interface AnthropicResponse {
  content: { type: string; text?: string }[]
}

async function callClaude(message: string): Promise<string | null> {
  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) return null

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 3000)

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 512,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: message }],
      }),
      signal: controller.signal,
    })

    clearTimeout(timeout)

    // 429 quota / 529 overloaded / 5xx → ceder a Gemini
    if (shouldYield(res.status) || !res.ok) return null

    const data = (await res.json()) as AnthropicResponse
    const block = data.content.find((b) => b.type === 'text' && typeof b.text === 'string')
    return block?.text ?? null
  } catch {
    // Timeout (AbortError) o error de red → ceder a Gemini
    clearTimeout(timeout)
    return null
  }
}

// ─── Google (Gemini 2.0 Flash) ─────────────────────────────────────────────────

interface GeminiResponse {
  candidates?: {
    content?: {
      parts?: { text?: string }[]
    }
  }[]
}

async function callGemini(message: string): Promise<string | null> {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) return null

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 3000)

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: [{ role: 'user', parts: [{ text: message }] }],
        generationConfig: { maxOutputTokens: 512 },
      }),
      signal: controller.signal,
    })

    clearTimeout(timeout)

    // 429 quota / 5xx → ceder a fallback estático
    if (shouldYield(res.status) || !res.ok) return null

    const data = (await res.json()) as GeminiResponse
    return data.candidates?.[0]?.content?.parts?.[0]?.text ?? null
  } catch {
    // Timeout o error de red → ceder a fallback estático
    clearTimeout(timeout)
    return null
  }
}

// ─── Handler ───────────────────────────────────────────────────────────────────

export async function POST(request: NextRequest): Promise<NextResponse<ChatResponseBody>> {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(FALLBACK_RESPONSE)
  }

  const message = validateMessage((body as Partial<ChatRequestBody>).message)
  if (!message) return NextResponse.json(FALLBACK_RESPONSE)

  // Cadena de proveedores: Claude → Gemini → fallback estático
  // Cada proveedor cede al siguiente si: no tiene key, quota agotada (429),
  // overloaded (529), error de servidor (5xx), timeout (3s) o error de red.
  const claudeText = await callClaude(message)
  if (claudeText) {
    return NextResponse.json({ response: claudeText, suggested_cases: SUGGESTED_CASES, provider: 'claude' })
  }

  const geminiText = await callGemini(message)
  if (geminiText) {
    return NextResponse.json({ response: geminiText, suggested_cases: SUGGESTED_CASES, provider: 'gemini' })
  }

  return NextResponse.json(FALLBACK_RESPONSE)
}
