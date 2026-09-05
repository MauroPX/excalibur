#!/usr/bin/env node
/**
 * Generador de tokens M3 — EX-v2-THEME-001
 *
 * Fuente única de verdad: docs/m2/design/DESIGN_TOKENS.json (export de
 * Material Theme Builder). Genera/verifica:
 *   - src/theme/tokens.ts   (darkTokens / lightTokens, camelCase)
 *   - src/app/globals.css   (--md-sys-color-*, kebab-case, + *-rgb derivados)
 *
 * Antes de esto, las 3 fuentes se mantenían a mano en sincronía manual — 0% de
 * drift verificado el 2026-09-03, pero nada lo garantizaba. Este script lo hace
 * estructural: `pnpm tokens:generate` escribe, `pnpm tokens:check` audita sin escribir.
 *
 * Uso:
 *   node scripts/generate-tokens.mjs           # regenera tokens.ts + globals.css
 *   node scripts/generate-tokens.mjs --check   # exit 1 si hay drift, no escribe nada
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

const DESIGN_TOKENS_PATH = join(ROOT, 'docs/m2/design/DESIGN_TOKENS.json')
const TOKENS_TS_PATH = join(ROOT, 'src/theme/tokens.ts')
const GLOBALS_CSS_PATH = join(ROOT, 'src/app/globals.css')

// Roles derivados a rgb "r, g, b" para overlays con opacidad (rgba(var(--x-rgb), a)).
// Solo los que el código realmente consume — no se generan los 50 por defecto.
const RGB_DERIVED_ROLES = ['primary', 'surface', 'on-surface', 'outline', 'shadow']

const kebabToCamel = (k) => k.replace(/-([a-z])/g, (_, c) => c.toUpperCase())

function hexToRgbTriplet(hex) {
  const m = /^#([0-9a-fA-F]{6})$/.exec(hex)
  if (!m) throw new Error(`Hex inválido: ${hex}`)
  const int = parseInt(m[1], 16)
  return [(int >> 16) & 255, (int >> 8) & 255, int & 255].join(', ')
}

function loadDesignTokens() {
  const raw = JSON.parse(readFileSync(DESIGN_TOKENS_PATH, 'utf8'))
  const strip = (obj) =>
    Object.fromEntries(Object.entries(obj).map(([k, v]) => [k.replace(/^md-sys-color-/, ''), v]))
  const seedMatch = /seed\s*(#[0-9A-Fa-f]{6})/.exec(raw.source ?? '')
  return {
    dark: strip(raw.dark),
    light: strip(raw.light),
    seed: seedMatch ? seedMatch[1] : (raw.source ?? ''),
    updated: raw.updated ?? '',
  }
}

/** Genera el bloque `export const XTokens = {...}` con el mismo agrupado visual (4 por línea). */
function buildTokensTsBlock(name, roles) {
  const entries = Object.entries(roles)
  const lines = []
  for (let i = 0; i < entries.length; i += 4) {
    const chunk = entries.slice(i, i + 4)
    const parts = chunk.map(([k, v]) => `${kebabToCamel(k)}: '${v}'`)
    lines.push('  ' + parts.join(', ') + ',')
  }
  return `export const ${name} = {\n${lines.join('\n')}\n}`
}

function buildTokensTs(dark, light, seed, updated) {
  return (
    `// EXCALIBUR v2.0 — M3 Design Tokens\n` +
    `// Seed: ${seed} (Material Theme Builder, ${updated}) — GENERADO, no editar a mano\n` +
    `// Fuente: docs/m2/design/DESIGN_TOKENS.json — regenerar con: pnpm tokens:generate\n` +
    `// 'cta'/'onCta' no son roles M3 estándar — alias del rol 'tertiary'\n` +
    `// (acento visualmente distinto de 'primary' para el CTA principal del Hero)\n\n` +
    `${buildTokensTsBlock('darkTokens', dark)}\n\n` +
    `${buildTokensTsBlock('lightTokens', light)}\n`
  )
}

function buildCssBlock(roles) {
  const lines = Object.entries(roles).map(([k, v]) => `  --md-sys-color-${k}: ${v};`)
  for (const role of RGB_DERIVED_ROLES) {
    if (roles[role]) lines.push(`  --md-sys-color-${role}-rgb: ${hexToRgbTriplet(roles[role])};`)
  }
  return lines.join('\n')
}

function buildGlobalsCss(existing, dark, light) {
  const darkBlock = buildCssBlock(dark)
  const lightBlock = buildCssBlock(light)
  let out = existing.replace(/(:root\s*\{\s*\n\s*\/\* DARK tokens — default \*\/\n)([\s\S]*?)(\n\})/, `$1${darkBlock}$3`)
  out = out.replace(
    /(\[data-theme="light"\]\s*\{\s*\n\s*\/\* LIGHT tokens override \*\/\n)([\s\S]*?)(\n\})/,
    `$1${lightBlock}$3`
  )
  return out
}

function main() {
  const check = process.argv.includes('--check')
  const { dark, light, seed, updated } = loadDesignTokens()

  const nextTokensTs = buildTokensTs(dark, light, seed, updated)
  const currentGlobalsCss = readFileSync(GLOBALS_CSS_PATH, 'utf8')
  const nextGlobalsCss = buildGlobalsCss(currentGlobalsCss, dark, light)

  const currentTokensTs = readFileSync(TOKENS_TS_PATH, 'utf8')
  const tokensTsDrift = currentTokensTs !== nextTokensTs
  const globalsCssDrift = currentGlobalsCss !== nextGlobalsCss

  if (check) {
    if (tokensTsDrift || globalsCssDrift) {
      console.error('❌ Drift de tokens detectado:')
      if (tokensTsDrift) console.error('   src/theme/tokens.ts NO coincide con DESIGN_TOKENS.json')
      if (globalsCssDrift) console.error('   src/app/globals.css NO coincide con DESIGN_TOKENS.json')
      console.error('   Ejecuta: pnpm tokens:generate')
      process.exit(1)
    }
    console.log('✅ tokens.ts y globals.css coinciden con DESIGN_TOKENS.json (0 drift)')
    return
  }

  writeFileSync(TOKENS_TS_PATH, nextTokensTs)
  writeFileSync(GLOBALS_CSS_PATH, nextGlobalsCss)
  console.log(tokensTsDrift ? '✍️  tokens.ts actualizado' : '   tokens.ts ya estaba al día')
  console.log(globalsCssDrift ? '✍️  globals.css actualizado' : '   globals.css ya estaba al día')
}

main()
