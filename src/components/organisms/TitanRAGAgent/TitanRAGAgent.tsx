'use client'

import React, { useState, useCallback } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import { Button } from '@/components/atoms/Button'

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
    <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
)

export interface TitanRAGAgentProps {
  initialSuggestions?: string[]
  placeholder?: string
}

const DEFAULT_SUGGESTIONS = [
  '¿Cuál fue el impacto más grande que generaste?',
  '¿Qué metodologías usas para priorizar?',
  '¿Cómo escalas equipos de producto?',
  '¿Estás disponible para proyectos Q3 2026?',
]

const FALLBACK_ERROR_MESSAGE =
  'Actualmente estoy procesando tu consulta. Puedes explorar los proyectos directamente o contactarme en lemaogo@gmail.com'

type ComponentState = 'idle' | 'loading' | 'response' | 'error'

interface ChatResponse {
  response: string
  suggested_cases?: string[]
}

export function TitanRAGAgent({
  initialSuggestions = DEFAULT_SUGGESTIONS,
  placeholder = 'Pregunta sobre mi experiencia como Staff PM...',
}: TitanRAGAgentProps) {
  const [inputValue, setInputValue] = useState<string>('')
  const [componentState, setComponentState] = useState<ComponentState>('idle')
  const [responseText, setResponseText] = useState<string>('')
  const [errorText, setErrorText] = useState<string>('')

  const handleSubmit = useCallback(
    async (messageToSend: string) => {
      const trimmed = messageToSend.trim()
      if (!trimmed || componentState === 'loading') return

      setComponentState('loading')
      setResponseText('')
      setErrorText('')

      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: trimmed }),
        })

        if (!res.ok) {
          setErrorText(FALLBACK_ERROR_MESSAGE)
          setComponentState('error')
          return
        }

        const data = (await res.json()) as ChatResponse

        if (data.response) {
          setResponseText(data.response)
          setComponentState('response')
        } else {
          setErrorText(FALLBACK_ERROR_MESSAGE)
          setComponentState('error')
        }
      } catch {
        setErrorText(FALLBACK_ERROR_MESSAGE)
        setComponentState('error')
      }
    },
    [componentState]
  )

  const handleFormSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      handleSubmit(inputValue)
    },
    [inputValue, handleSubmit]
  )

  const handleSuggestionClick = useCallback(
    (suggestion: string) => {
      setInputValue(suggestion)
      handleSubmit(suggestion)
    },
    [handleSubmit]
  )

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value)
    },
    []
  )

  const isLoading = componentState === 'loading'
  const showResponse = componentState === 'response'
  const showError = componentState === 'error'
  const showSuggestions = componentState === 'idle' || componentState === 'response'

  return (
    <Box
      data-atomic="organism"
      data-component="TitanRAGAgent"
      className="ex-titan-rag"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        width: '100%',
        maxWidth: 720,
        mx: 'auto',
      }}
    >
      {/* Input form */}
      <Paper
        elevation={0}
        sx={{
          border: '1px solid',
          borderColor: 'var(--md-sys-color-outline-variant)',
          borderRadius: 3,
          overflow: 'hidden',
          bgcolor: 'var(--md-sys-color-surface-container-low)',
        }}
      >
        <Box
          component="form"
          onSubmit={handleFormSubmit}
          aria-label="Consulta al agente de experiencia profesional"
          sx={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: 1,
            p: 1.5,
          }}
        >
          <TextField
            className="ex-titan-rag__input"
            fullWidth
            multiline
            maxRows={4}
            value={inputValue}
            onChange={handleInputChange}
            placeholder={placeholder}
            disabled={isLoading}
            inputProps={{
              'aria-label': 'Pregunta sobre mi experiencia',
              maxLength: 500,
            }}
            variant="standard"
            sx={{
              '& .MuiInputBase-root': {
                color: 'var(--md-sys-color-on-surface)',
                '&::before': { borderBottom: 'none' },
                '&::after': { borderBottom: 'none' },
                '&:hover:not(.Mui-disabled):before': { borderBottom: 'none' },
              },
              '& .MuiInputBase-input': {
                fontSize: '0.9375rem',
                lineHeight: 1.5,
                py: 0.5,
              },
              '& .MuiInputBase-input::placeholder': {
                color: 'var(--md-sys-color-on-surface-variant)',
                opacity: 1,
              },
            }}
          />
          <IconButton
            type="submit"
            disabled={isLoading || !inputValue.trim()}
            aria-label="Enviar pregunta"
            sx={{
              color: 'var(--md-sys-color-primary)',
              '&:disabled': {
                color: 'var(--md-sys-color-on-surface-variant)',
                opacity: 0.38,
              },
              flexShrink: 0,
            }}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Paper>

      {/* Suggestions */}
      {showSuggestions && (
        <Box
          className="ex-titan-rag__suggestions"
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          {initialSuggestions.map((suggestion) => (
            <Box
              key={suggestion}
              className="ex-titan-rag__suggestion"
              component="span"
              sx={{ display: 'inline-flex' }}
            >
              <Button
                label={suggestion}
                variant="outlined"
                onClick={() => handleSuggestionClick(suggestion)}
                type="button"
              />
            </Box>
          ))}
        </Box>
      )}

      {/* Loading state */}
      {isLoading && (
        <Box
          className="ex-titan-rag__loading"
          aria-busy="true"
          aria-live="polite"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            px: 2,
            py: 1.5,
            borderRadius: 2,
            bgcolor: 'var(--md-sys-color-surface-container)',
          }}
        >
          <CircularProgress
            size={18}
            thickness={4}
            sx={{ color: 'var(--md-sys-color-primary)' }}
          />
          <Typography
            variant="body2"
            sx={{ color: 'var(--md-sys-color-on-surface-variant)' }}
          >
            Consultando experiencia...
          </Typography>
        </Box>
      )}

      {/* Response state */}
      {showResponse && (
        <Paper
          className="ex-titan-rag__response"
          elevation={0}
          aria-live="polite"
          aria-busy={false}
          sx={{
            p: 2.5,
            borderRadius: 3,
            bgcolor: 'var(--md-sys-color-surface-container)',
            border: '1px solid',
            borderColor: 'var(--md-sys-color-outline-variant)',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: 'var(--md-sys-color-on-surface)',
              lineHeight: 1.65,
              whiteSpace: 'pre-wrap',
            }}
          >
            {responseText}
          </Typography>
        </Paper>
      )}

      {/* Error state */}
      {showError && (
        <Box
          className="ex-titan-rag__error"
          role="alert"
          aria-live="assertive"
          sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: 'var(--md-sys-color-error-container)',
            border: '1px solid',
            borderColor: 'var(--md-sys-color-error)',
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: 'var(--md-sys-color-on-error-container)' }}
          >
            {errorText}
          </Typography>
        </Box>
      )}
    </Box>
  )
}
