import { NextRequest, NextResponse } from 'next/server'

interface ChatRequestBody {
  message: string
}

interface ChatResponseBody {
  response: string
  suggested_cases?: string[]
}

interface AnthropicMessage {
  role: 'user' | 'assistant'
  content: string
}

interface AnthropicRequestBody {
  model: string
  max_tokens: number
  messages: AnthropicMessage[]
  system: string
}

interface AnthropicContentBlock {
  type: string
  text?: string
}

interface AnthropicResponse {
  content: AnthropicContentBlock[]
}

const FALLBACK_RESPONSE: ChatResponseBody = {
  response:
    'Actualmente estoy procesando tu consulta. Puedes explorar los proyectos directamente o contactarme en lemaogo@gmail.com',
  suggested_cases: [
    'Rappi — ARR +$3.2M',
    'Bancolombia — NPS +40pts',
    'Frubana — CAC -35%',
  ],
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

async function callAnthropicAPI(message: string): Promise<ChatResponseBody> {
  const apiKey = process.env.ANTHROPIC_API_KEY

  if (!apiKey) {
    return FALLBACK_RESPONSE
  }

  const requestBody: AnthropicRequestBody = {
    model: 'claude-sonnet-4-6',
    max_tokens: 512,
    system:
      'Eres el asistente de portafolio de Leonel Mauricio Gómez Ocampo, Staff Product Architect. ' +
      'Responde en español de forma concisa y profesional. ' +
      'Enfócate en logros concretos, métricas de impacto y experiencia en product management a nivel staff.',
    messages: [{ role: 'user', content: message }],
  }

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 3000)

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify(requestBody),
      signal: controller.signal,
    })

    clearTimeout(timeoutId)

    if (!res.ok) {
      return FALLBACK_RESPONSE
    }

    const data = (await res.json()) as AnthropicResponse

    const textBlock = data.content.find(
      (block) => block.type === 'text' && typeof block.text === 'string'
    )

    if (!textBlock || typeof textBlock.text !== 'string') {
      return FALLBACK_RESPONSE
    }

    return {
      response: textBlock.text,
      suggested_cases: FALLBACK_RESPONSE.suggested_cases,
    }
  } catch {
    clearTimeout(timeoutId)
    return FALLBACK_RESPONSE
  }
}

export async function POST(request: NextRequest): Promise<NextResponse<ChatResponseBody>> {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json(FALLBACK_RESPONSE, { status: 200 })
  }

  const parsed = body as Partial<ChatRequestBody>
  const message = validateMessage(parsed.message)

  if (message === null) {
    return NextResponse.json(FALLBACK_RESPONSE, { status: 200 })
  }

  const result = await callAnthropicAPI(message)

  return NextResponse.json(result, { status: 200 })
}
