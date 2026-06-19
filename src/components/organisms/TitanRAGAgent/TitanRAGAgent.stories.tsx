import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { TitanRAGAgent } from './TitanRAGAgent'

const meta: Meta<typeof TitanRAGAgent> = {
  title: 'Organisms/TitanRAGAgent',
  component: TitanRAGAgent,
  parameters: {
    layout: 'padded',
    titan: { spec_id: 'EX-v2-RAG-001', momentum: 'M3-Ola3' },
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    initialSuggestions: { control: 'object' },
  },
}

export default meta
type Story = StoryObj<typeof TitanRAGAgent>

// ─── 1. Default — estado idle con sugerencias por defecto ───────────────────

export const Default: Story = {
  args: {
    initialSuggestions: [
      'Caso BBVA',
      'Impacto ROI',
      'Expediente SSOT',
      'Ver Roles Staff',
    ],
    placeholder: 'Consulta trayectoria o roles...',
  },
}

// ─── 2. WithCustomSuggestions — sugerencias personalizadas ──────────────────

export const WithCustomSuggestions: Story = {
  args: {
    initialSuggestions: [
      'Proyecto FDN — Accesibilidad',
      'Sistema MERKEN — DesignOps',
      'LaSalle — Accessibility Lead',
      'Staff Product Architect',
    ],
    placeholder: '¿Qué proyecto deseas auditar?',
  },
}

// ─── 3. WithResponse — render personalizado que simula estado con respuesta ──

export const WithResponse: Story = {
  args: {
    initialSuggestions: ['Caso BBVA', 'Impacto ROI'],
    placeholder: 'Consulta trayectoria o roles...',
  },
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        width: 'min(480px, 92vw)',
      }}
    >
      {/* Simulación visual del estado "response recibida" */}
      <div
        role="region"
        aria-label="Respuesta del agente TITAN (estado simulado)"
        style={{
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '18px',
          padding: '20px',
          color: '#f0f0f0',
          fontFamily: 'monospace',
          fontSize: '13px',
          lineHeight: '1.6',
        }}
      >
        <div
          style={{
            fontSize: '8px',
            color: '#60a5fa',
            marginBottom: '10px',
            opacity: 0.7,
            letterSpacing: '1px',
          }}
        >
          DNA_MATCH &gt; [BBVA-001]
        </div>
        <p>
          <strong>Consultando evidencia de BBVA:</strong>
        </p>
        <p>
          <strong>[P] Problema:</strong> Sistema de diseño fragmentado en 4
          países sin gobernanza central.
        </p>
        <p>
          <strong>[A] Acción:</strong> Diseño e implementación de Design System
          transnacional con tokens M3.
        </p>
        <p>
          <strong>[R] Resultado:</strong> +40% velocidad de entrega. 6 equipos
          sincronizados. 0 deuda visual.
        </p>
        <div style={{ display: 'flex', gap: '10px', marginTop: '16px', flexWrap: 'wrap' }}>
          {['Ver Expediente SSOT', 'Otro Proyecto', 'Impacto ROI'].map((r) => (
            <button
              key={r}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '8px',
                color: '#f0f0f0',
                padding: '8px 16px',
                fontSize: '11px',
                cursor: 'pointer',
              }}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* El componente real debajo para mostrar la interfaz */}
      <TitanRAGAgent {...args} />
    </div>
  ),
}

// ─── 4. Fallback — render personalizado con mensaje de error visible ─────────

export const Fallback: Story = {
  args: {
    initialSuggestions: ['Caso BBVA', 'Impacto ROI'],
    placeholder: 'Consulta trayectoria o roles...',
  },
  render: (args) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        width: 'min(480px, 92vw)',
      }}
    >
      {/* Panel de fallback — estado de error simulado */}
      <div
        role="alert"
        aria-live="assertive"
        style={{
          background: 'rgba(239, 68, 68, 0.08)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: '12px',
          padding: '16px 20px',
          color: '#fca5a5',
          fontSize: '13px',
          lineHeight: '1.5',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px',
        }}
      >
        <span aria-hidden="true" style={{ fontSize: '16px' }}>⚠</span>
        <div>
          <strong>TITAN en modo fallback</strong>
          <p style={{ margin: '6px 0 0', opacity: 0.85 }}>
            La API RAG no está disponible en este momento. Respuesta estática
            activada. Contactar a{' '}
            <a
              href="mailto:lemaogo@gmail.com"
              style={{ color: '#93c5fd', textDecoration: 'underline' }}
            >
              lemaogo@gmail.com
            </a>{' '}
            si el problema persiste.
          </p>
          <div
            style={{
              marginTop: '10px',
              fontSize: '10px',
              fontFamily: 'monospace',
              color: '#6b7280',
            }}
          >
            ERROR_CODE: API_TIMEOUT_3000ms | FALLBACK: STATIC_DNA
          </div>
        </div>
      </div>

      {/* El componente real debajo para mostrar la interfaz en este contexto */}
      <TitanRAGAgent {...args} />
    </div>
  ),
}

// ─── 5. Mobile375 — viewport mobile ─────────────────────────────────────────

export const Mobile375: Story = {
  args: {
    initialSuggestions: [
      'Caso BBVA',
      'Impacto ROI',
      'Expediente SSOT',
      'Ver Roles Staff',
    ],
    placeholder: 'Consulta trayectoria...',
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    backgrounds: { default: 'dark' },
  },
}
