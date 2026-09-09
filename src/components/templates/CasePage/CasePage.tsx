'use client'
import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ContrastRounded from '@mui/icons-material/ContrastRounded'
import { Tag } from '@/components/atoms/Tag'
import { BadgeIcon } from './CaseBadgeIcon'
import { MetricRow } from '@/components/molecules/MetricRow'
import { TimelineStep } from '@/components/molecules/TimelineStep'
import { SkillBar } from '@/components/molecules/SkillBar'
import { EvidenceLinks } from '@/components/molecules/EvidenceLinks'
import { DecisionTable } from '@/components/molecules/DecisionTable'
import { AiDisclosure } from '@/components/molecules/AiDisclosure'
import { CasePageNav } from './CasePageNav'
import type { CasePageProps } from './types'

// El contrato de datos vive en ./types.ts (EX-v2-TMPL-002 v1.1.0). Se re-exporta
// aquí para no romper imports existentes de '@/components/templates/CasePage'.
export type {
  CasePageData,
  CasePageProps,
  CaseType,
  CaseFormat,
  Momentum,
  CaseEstado,
  MethodologyRef,
  DecisionRow,
  AccessLink,
  AccessLinkKind,
  AiDisclosureData,
  ProcessTransformation,
  CaseSection,
  CaseBadge,
} from './types'

const SECTION_PX = { xs: 2, md: 4 }
const PROSE_MAX = '820px'

/** Prosa multi-párrafo: separa en `\n\n` y renderiza un <p> por bloque. */
const Prose: React.FC<{ text: string }> = ({ text }) => (
  <>
    {text
      .split(/\n\n+/)
      .map((p) => p.trim())
      .filter(Boolean)
      .map((p, i) => (
        <Typography
          key={i}
          variant="body1"
          component="p"
          sx={{ color: 'var(--md-sys-color-on-surface)', mb: 1.5, maxWidth: PROSE_MAX }}
        >
          {p}
        </Typography>
      ))}
  </>
)

/** Sección STAR-L / metodología: <h2> propio + contenido (CA-012). */
const CaseSectionBlock: React.FC<{
  id: string
  label: string
  tinted?: boolean
  children: React.ReactNode
}> = ({ id, label, tinted, children }) => (
  <Box
    component="section"
    aria-labelledby={`${id}-heading`}
    className={`ex-case-page__section ex-case-page__section--${id}`}
    sx={{
      px: SECTION_PX,
      py: 4,
      ...(tinted && { backgroundColor: 'var(--md-sys-color-surface-container-low)' }),
    }}
  >
    <Typography
      variant="h5"
      component="h2"
      id={`${id}-heading`}
      sx={{ color: 'var(--md-sys-color-on-surface)', mb: 2 }}
    >
      {label}
    </Typography>
    {children}
  </Box>
)

export const CasePage: React.FC<CasePageProps> = ({ caseData, appendixSection }) => {
  const {
    title,
    description,
    tags,
    metrics,
    timeline,
    techStack,
    nextCase,
    // v1.1.0 · clasificación + presentación
    caseType,
    caseFormat,
    badge,
    footerDisclaimer,
    estado,
    estadoNota,
    entryRole,
    discoveredScope,
    // v1.1.0 · backbone Valor / STAR-L
    valor,
    situacion,
    objetivo,
    accion,
    resultado,
    aprendizaje,
    // v1.1.0 · metodología estructurada
    methodology,
    momentumsApplied,
    processTransformation,
    // v1.1.0 · cuerpo por variante
    accessLinks,
    sections,
    aiDeclared,
  } = caseData

  const type = caseType ?? 'client'
  const format = caseFormat ?? 'evidencia-viva'
  const isParcial = estado === 'parcial'

  const hasStarL = Boolean(
    situacion || objetivo || (accion && accion.length > 0) || resultado || aprendizaje,
  )
  const hasMethodology = Boolean(
    (methodology && methodology.length > 0) ||
      (momentumsApplied && momentumsApplied.length > 0) ||
      processTransformation,
  )

  return (
    <main
      id="main-content"
      data-atomic="template"
      data-component="CasePage"
      data-case-type={type}
      data-case-format={format}
      className="ex-case-page"
    >
      <Box
        component="a"
        href="#main-content"
        className="ex-case-page__skip-link"
        sx={{ position: 'absolute', top: '-100px', left: '16px', zIndex: 9999, padding: '8px 16px', backgroundColor: 'var(--md-sys-color-primary)', color: 'var(--md-sys-color-on-primary)', borderRadius: '4px', textDecoration: 'none', fontWeight: 600, '&:focus': { top: '16px' } }}
      >
        Saltar al contenido
      </Box>

      <Box component="nav" aria-label="Breadcrumb" className="ex-case-page__breadcrumb"
        sx={{ py: 2, px: { xs: 2, md: 4 } }}>
        <Box component="ol" sx={{ listStyle: 'none', m: 0, p: 0, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Box component="li"><Box component="a" href="/" sx={{ color: 'var(--md-sys-color-primary)', textDecoration: 'none' }}>Inicio</Box></Box>
          <Box component="li" sx={{ color: 'var(--md-sys-color-on-surface)' }} aria-hidden="true">/</Box>
          <Box component="li"><Box component="a" href="/#casos" sx={{ color: 'var(--md-sys-color-primary)', textDecoration: 'none' }}>Casos</Box></Box>
          <Box component="li" sx={{ color: 'var(--md-sys-color-on-surface)' }} aria-hidden="true">/</Box>
          <Box component="li" aria-current="page" sx={{ color: 'var(--md-sys-color-on-surface)' }}>{title}</Box>
        </Box>
      </Box>

      <Box
        component="header"
        className="ex-case-page__header"
        sx={{ px: { xs: 2, md: 4 }, py: 4, backgroundColor: 'var(--md-sys-color-surface)' }}
      >
        {(badge || isParcial) && (
          <Box className="ex-case-page__badges" sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
            {badge && (
              <Box
                component="span"
                className="ex-case-page__badge"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, px: 1.5, py: 0.5, borderRadius: '999px', fontSize: '0.8125rem', fontWeight: 700, backgroundColor: 'var(--md-sys-color-secondary-container)', color: 'var(--md-sys-color-on-secondary-container)' }}
              >
                <BadgeIcon kind={badge.icon} sx={{ fontSize: '1rem' }} />
                {badge.label}
              </Box>
            )}
            {isParcial && (
              <Box
                component="span"
                className="ex-case-page__badge ex-case-page__badge--estado"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, px: 1.5, py: 0.5, borderRadius: '999px', fontSize: '0.8125rem', fontWeight: 700, backgroundColor: 'var(--md-sys-color-tertiary-container)', color: 'var(--md-sys-color-on-tertiary-container)' }}
              >
                <ContrastRounded aria-hidden="true" sx={{ fontSize: '1rem' }} />
                Caso parcial
              </Box>
            )}
          </Box>
        )}
        <Typography variant="h3" component="h1" sx={{ color: 'var(--md-sys-color-on-surface)', mb: 2 }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: 'var(--md-sys-color-on-surface)', mb: 3, maxWidth: '720px' }}>
          {description}
        </Typography>
        {(entryRole || discoveredScope) && (
          <Typography
            variant="body2"
            className="ex-case-page__entry-scope"
            sx={{ color: 'var(--md-sys-color-on-surface-variant)', mb: 2, maxWidth: '720px', fontStyle: 'italic' }}
          >
            {entryRole && <>Entré como <strong>{entryRole}</strong>. </>}
            {discoveredScope && <>El alcance real resultó: {discoveredScope}.</>}
          </Typography>
        )}
        {isParcial && estadoNota && (
          <Typography
            variant="body2"
            className="ex-case-page__estado-nota"
            sx={{ color: 'var(--md-sys-color-on-surface-variant)', mb: 2, maxWidth: '720px' }}
          >
            {estadoNota}
          </Typography>
        )}
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {tags.map(t => <Tag key={t} label={t} />)}
        </Box>
      </Box>

      {/* CA-011 — bloque Valor, inmediatamente después del header */}
      {valor && (
        <Box
          component="section"
          aria-labelledby="valor-heading"
          className="ex-case-page__valor"
          sx={{ px: SECTION_PX, py: 4, borderLeft: '4px solid var(--md-sys-color-primary)', backgroundColor: 'var(--md-sys-color-surface-container-low)' }}
        >
          <Typography
            variant="overline"
            component="h2"
            id="valor-heading"
            sx={{ color: 'var(--md-sys-color-on-surface-variant)', display: 'block', mb: 1 }}
          >
            En una frase
          </Typography>
          <Typography variant="h6" component="p" sx={{ color: 'var(--md-sys-color-on-surface)', maxWidth: PROSE_MAX, fontWeight: 500 }}>
            {valor}
          </Typography>
        </Box>
      )}

      {/* CA-012 — STAR-L: Situación · Objetivo · Acción · Resultado · Aprendizaje (cada una con <h2>) */}
      {hasStarL && (
        <>
          {situacion && (
            <CaseSectionBlock id="situacion" label="Situación">
              <Prose text={situacion} />
            </CaseSectionBlock>
          )}
          {objetivo && (
            <CaseSectionBlock id="objetivo" label="Objetivo" tinted>
              <Prose text={objetivo} />
            </CaseSectionBlock>
          )}
          {accion && accion.length > 0 && (
            <CaseSectionBlock id="accion" label="Acción — decisiones">
              {/* CA-013 — DecisionTable: decisión / descartada / elegida / por qué */}
              <DecisionTable rows={accion} caption={`Decisiones clave del caso ${title}`} />
            </CaseSectionBlock>
          )}
          {resultado && (
            <CaseSectionBlock id="resultado" label="Resultado" tinted>
              <Prose text={resultado} />
            </CaseSectionBlock>
          )}
          {aprendizaje && (
            <CaseSectionBlock id="aprendizaje" label="Aprendizaje">
              <Prose text={aprendizaje} />
            </CaseSectionBlock>
          )}
        </>
      )}

      <Box
        component="section"
        aria-labelledby="metrics-heading"
        className="ex-case-page__metrics"
        sx={{ px: { xs: 2, md: 4 }, py: 4 }}
      >
        <Typography variant="h5" component="h2" id="metrics-heading"
          sx={{ color: 'var(--md-sys-color-on-surface)', mb: 3 }}>
          Resultados clave
        </Typography>
        <MetricRow metrics={metrics} />
      </Box>

      <Box
        component="section"
        aria-labelledby="timeline-heading"
        className="ex-case-page__timeline"
        sx={{ px: { xs: 2, md: 4 }, py: 4, backgroundColor: 'var(--md-sys-color-surface-container-low)' }}
      >
        <Typography variant="h5" component="h2" id="timeline-heading"
          sx={{ color: 'var(--md-sys-color-on-surface)', mb: 3 }}>
          Proceso
        </Typography>
        {timeline.map((t, i) => (
          <TimelineStep
            key={`${t.company}-${i}`}
            company={t.company}
            role={t.role}
            period={t.period}
            isLast={t.isLast ?? i === timeline.length - 1}
          />
        ))}
      </Box>

      {/* CA-017 — metodología TITAN como dato estructurado (chips → /metodologia#slug) */}
      {hasMethodology && (
        <CaseSectionBlock id="methodology" label="Metodología aplicada" tinted>
          {methodology && methodology.length > 0 && (
            <Box
              component="ul"
              aria-label="Referencias de metodología"
              className="ex-case-page__method-refs"
              sx={{
                listStyle: 'none',
                m: 0,
                p: 0,
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1,
                mb: momentumsApplied?.length || processTransformation ? 3 : 0,
              }}
            >
              {methodology.map((m) => (
                <Box component="li" key={m.slug}>
                  <Box
                    component="a"
                    href={m.detailHref ?? `/metodologia#${m.slug}`}
                    className="ex-case-page__method-chip"
                    sx={{
                      display: 'inline-block',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: '999px',
                      border: '1px solid var(--md-sys-color-outline-variant)',
                      color: 'var(--md-sys-color-on-surface)',
                      textDecoration: 'none',
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      '&:hover': { borderColor: 'var(--md-sys-color-primary)', color: 'var(--md-sys-color-primary)' },
                      '&:focus-visible': { outline: '2px solid var(--md-sys-color-primary)', outlineOffset: '2px' },
                    }}
                  >
                    {m.label}
                  </Box>
                </Box>
              ))}
            </Box>
          )}
          {momentumsApplied && momentumsApplied.length > 0 && (
            <Typography
              variant="body2"
              className="ex-case-page__momentums"
              sx={{ color: 'var(--md-sys-color-on-surface-variant)', mb: processTransformation ? 3 : 0 }}
            >
              Momentums TITAN aplicados: {momentumsApplied.join(' · ')}
            </Typography>
          )}
          {processTransformation && (
            <Box component="dl" className="ex-case-page__transformation" sx={{ m: 0, display: 'grid', gap: 2 }}>
              {[
                { term: 'Antes', desc: processTransformation.before },
                { term: 'Enfoque', desc: processTransformation.approach },
                { term: 'Capacidad instalada', desc: processTransformation.capabilityInstalled },
              ].map((row) => (
                <Box key={row.term}>
                  <Box component="dt" sx={{ fontWeight: 700, color: 'var(--md-sys-color-on-surface)', fontSize: '0.8125rem', mb: 0.5 }}>
                    {row.term}
                  </Box>
                  <Box component="dd" sx={{ m: 0, color: 'var(--md-sys-color-on-surface-variant)', fontSize: '0.875rem', lineHeight: 1.5, maxWidth: PROSE_MAX }}>
                    {row.desc}
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </CaseSectionBlock>
      )}

      {/* CA-014 / R-6 — cuerpo por variante, EXCLUSIVO */}
      {format === 'documento-estrategico'
        ? sections && sections.length > 0 && (
            <Box
              component="section"
              aria-labelledby="sections-heading"
              className="ex-case-page__sections"
              sx={{ px: SECTION_PX, py: 4 }}
            >
              <Typography variant="h5" component="h2" id="sections-heading" sx={{ color: 'var(--md-sys-color-on-surface)', mb: 3 }}>
                Documento
              </Typography>
              {sections.map((s) => (
                <Box
                  component="section"
                  key={s.num}
                  aria-labelledby={`section-${s.num}-heading`}
                  className="ex-case-page__doc-section"
                  sx={{ mb: 4 }}
                >
                  <Typography variant="h6" component="h3" id={`section-${s.num}-heading`} sx={{ color: 'var(--md-sys-color-on-surface)', mb: 1.5 }}>
                    <Box component="span" aria-hidden="true" sx={{ color: 'var(--md-sys-color-on-surface-variant)', mr: 1 }}>{s.num}</Box>
                    {s.title}
                  </Typography>
                  <Prose text={s.body} />
                  {s.chips && s.chips.length > 0 && (
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1.5 }}>
                      {s.chips.map((c) => <Tag key={c} label={c} />)}
                    </Box>
                  )}
                  {s.table && (
                    <Box className="ex-case-page__doc-table" sx={{ overflowX: 'auto', maxWidth: '100%', mt: 2 }}>
                      <Box component="table" sx={{ borderCollapse: 'collapse', width: '100%', minWidth: '480px' }}>
                        <Box component="thead">
                          <Box component="tr">
                            {s.table.headers.map((h) => (
                              <Box
                                key={h}
                                component="th"
                                scope="col"
                                sx={{ border: '1px solid var(--md-sys-color-outline-variant)', p: 1, textAlign: 'left', fontWeight: 700, fontSize: '0.8125rem', backgroundColor: 'var(--md-sys-color-surface-container-high)', color: 'var(--md-sys-color-on-surface)' }}
                              >
                                {h}
                              </Box>
                            ))}
                          </Box>
                        </Box>
                        <Box component="tbody">
                          {s.table.rows.map((r, ri) => (
                            <Box component="tr" key={ri}>
                              {r.map((cell, ci) => (
                                <Box
                                  key={ci}
                                  component="td"
                                  sx={{ border: '1px solid var(--md-sys-color-outline-variant)', p: 1, fontSize: '0.8125rem', color: 'var(--md-sys-color-on-surface)', verticalAlign: 'top' }}
                                >
                                  {cell}
                                </Box>
                              ))}
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          )
        : accessLinks && accessLinks.length > 0 && (
            <Box
              component="section"
              aria-labelledby="evidence-heading"
              className="ex-case-page__access"
              sx={{ px: SECTION_PX, py: 4 }}
            >
              <Typography variant="h5" component="h2" id="evidence-heading" sx={{ color: 'var(--md-sys-color-on-surface)', mb: 2 }}>
                Accesos y evidencia
              </Typography>
              <EvidenceLinks links={accessLinks} />
            </Box>
          )}

      {/* CA-015 — bloque "Uso de IA declarado" */}
      {aiDeclared && aiDeclared.items.length > 0 && (
        <Box sx={{ px: SECTION_PX, py: 4 }}>
          <AiDisclosure items={aiDeclared.items} source={aiDeclared.source} />
        </Box>
      )}

      <Box
        component="section"
        aria-labelledby="stack-heading"
        className="ex-case-page__stack"
        sx={{ px: { xs: 2, md: 4 }, py: 4 }}
      >
        <Typography variant="h5" component="h2" id="stack-heading"
          sx={{ color: 'var(--md-sys-color-on-surface)', mb: 3 }}>
          Stack usado
        </Typography>
        {techStack.map(s => (
          <SkillBar key={s.skill} skill={s.skill} level={s.level} levelLabel={s.levelLabel} />
        ))}
      </Box>

      {/* v1.1.1 — slot de sección compuesta por la página (ej. FDN Momentum 2, R-8).
          Se renderiza dentro de <main>, después del stack y antes del footer/nav. */}
      {appendixSection}

      {/* CA-016 — footer con la frase EXACTA del caso (R-4: nunca compartida) */}
      {footerDisclaimer && (
        <Box
          component="footer"
          className="ex-case-page__footer-disclaimer"
          sx={{ px: SECTION_PX, py: 3, borderTop: '1px solid var(--md-sys-color-outline-variant)' }}
        >
          <Typography variant="body2" component="p" sx={{ color: 'var(--md-sys-color-on-surface-variant)', maxWidth: PROSE_MAX, fontStyle: 'italic' }}>
            {footerDisclaimer}
          </Typography>
        </Box>
      )}

      <Box sx={{ px: { xs: 2, md: 4 } }}>
        <CasePageNav nextCase={nextCase} />
      </Box>
    </main>
  )
}

export default CasePage
