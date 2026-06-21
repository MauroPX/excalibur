const CLAUDE_API_KEY = process.env.ANTHROPIC_API_KEY ?? ''
const CLAUDE_MODEL = 'claude-sonnet-4-6'

export interface RAGMessage {
  role: 'user' | 'assistant'
  content: string
}

export interface RAGResponse {
  answer: string
  sources?: string[]
}

export async function askTitan(
  query: string,
  history: RAGMessage[] = [],
): Promise<RAGResponse> {
  if (!CLAUDE_API_KEY) {
    return {
      answer: 'TITAN no está configurado. Contacta directamente a Mauricio.',
      sources: [],
    }
  }

  const systemPrompt = `Eres TITAN, el asistente de portafolio de Leonel Mauricio Gómez Ocampo, Staff Product Architect.
Ayudas a visitantes (CTOs, PMs, reclutadores, clientes) a encontrar el caso de estudio o información más relevante para su situación.
Responde de forma concisa (máx 200 palabras), en el idioma de la pregunta, y siempre termina con una recomendación de acción concreta.`

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': CLAUDE_API_KEY,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: CLAUDE_MODEL,
      max_tokens: 512,
      system: systemPrompt,
      messages: [
        ...history,
        { role: 'user', content: query },
      ],
    }),
  })

  if (!res.ok) {
    throw new Error(`Claude API error: ${res.status}`)
  }

  const data = await res.json() as {
    content: Array<{ type: string; text: string }>
  }

  const answer = data.content
    .filter(b => b.type === 'text')
    .map(b => b.text)
    .join('')

  return { answer, sources: [] }
}
