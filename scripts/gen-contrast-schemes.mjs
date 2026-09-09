#!/usr/bin/env node
/**
 * Genera los 4 esquemas de contraste (medium/high × light/dark) desde el seed,
 * usando @material/material-color-utilities (el mismo motor que Material Theme
 * Builder). Los esquemas BASE (light/dark) siguen viniendo verbatim de
 * DESIGN_TOKENS.json — esto solo añade mc/hc.
 *
 * Escribe:
 *   src/theme/tokens.ts   → 6 exports: {light,dark}Tokens + {light,dark}{Mc,Hc}Tokens
 *   src/app/globals.css   → :root (dark base) + [data-theme=light] + 4 bloques
 *                           [data-theme=X][data-contrast=medium|high]
 *
 * Uso: node scripts/gen-contrast-schemes.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import {
  Hct, SchemeTonalSpot, MaterialDynamicColors, hexFromArgb, argbFromHex,
} from '@material/material-color-utilities'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const DESIGN_TOKENS_PATH = join(ROOT, 'docs/m2/design/DESIGN_TOKENS.json')
const TOKENS_TS_PATH = join(ROOT, 'src/theme/tokens.ts')
const GLOBALS_CSS_PATH = join(ROOT, 'src/app/globals.css')
const RGB_DERIVED = ['primary', 'surface', 'on-surface', 'outline', 'shadow']

const kebabToCamel = (k) => k.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
const hexToRgb = (hex) => {
  const int = parseInt(hex.slice(1), 16)
  return [(int >> 16) & 255, (int >> 8) & 255, int & 255].join(', ')
}

// role kebab (sin prefijo md-sys-color-) → miembro de MaterialDynamicColors.
// cta/on-cta no son M3 estándar: alias de tertiary/onTertiary (igual que hoy).
const mdcMember = (roleKebab) => {
  if (roleKebab === 'cta') return 'tertiary'
  if (roleKebab === 'on-cta') return 'onTertiary'
  return kebabToCamel(roleKebab)
}

const raw = JSON.parse(readFileSync(DESIGN_TOKENS_PATH, 'utf8'))
const strip = (obj) =>
  Object.fromEntries(Object.entries(obj).map(([k, v]) => [k.replace(/^md-sys-color-/, ''), v]))
const base = { dark: strip(raw.dark), light: strip(raw.light) }
const roleKeys = Object.keys(base.dark) // mismo orden/set para todos los esquemas
const seedArgb = argbFromHex('#A47540')

/** Deriva un esquema completo (mismo set de roles que `base`) a `contrastLevel`. */
function deriveScheme(isDark, contrastLevel) {
  const scheme = new SchemeTonalSpot(Hct.fromInt(seedArgb), isDark, contrastLevel)
  const out = {}
  for (const rk of roleKeys) {
    const member = MaterialDynamicColors[mdcMember(rk)]
    out[rk] = member?.getArgb ? hexFromArgb(member.getArgb(scheme)).toUpperCase() : base[isDark ? 'dark' : 'light'][rk]
  }
  return out
}

const schemes = {
  dark: base.dark,
  light: base.light,
  darkMc: deriveScheme(true, 0.5),
  darkHc: deriveScheme(true, 1.0),
  lightMc: deriveScheme(false, 0.5),
  lightHc: deriveScheme(false, 1.0),
}

// ── tokens.ts ────────────────────────────────────────────────────────────────
function tsBlock(name, roles) {
  const entries = Object.entries(roles)
  const lines = []
  for (let i = 0; i < entries.length; i += 4) {
    lines.push('  ' + entries.slice(i, i + 4).map(([k, v]) => `${kebabToCamel(k)}: '${v}'`).join(', ') + ',')
  }
  return `export const ${name} = {\n${lines.join('\n')}\n}`
}
const seedMatch = /seed\s*(#[0-9A-Fa-f]{6})/.exec(raw.source ?? '')
const tokensTs =
  `// EXCALIBUR v2.0 — M3 Design Tokens — 6 esquemas (light/dark × base/medium/high contrast)\n` +
  `// Seed: ${seedMatch ? seedMatch[1] : ''} — base light/dark de DESIGN_TOKENS.json;\n` +
  `// mc/hc derivados por @material/material-color-utilities. GENERADO — regenerar:\n` +
  `//   node scripts/gen-contrast-schemes.mjs\n` +
  `// 'cta'/'onCta' = alias de 'tertiary'.\n\n` +
  [
    tsBlock('darkTokens', schemes.dark),
    tsBlock('lightTokens', schemes.light),
    tsBlock('darkMcTokens', schemes.darkMc),
    tsBlock('darkHcTokens', schemes.darkHc),
    tsBlock('lightMcTokens', schemes.lightMc),
    tsBlock('lightHcTokens', schemes.lightHc),
  ].join('\n\n') + '\n'
writeFileSync(TOKENS_TS_PATH, tokensTs)

// ── globals.css ──────────────────────────────────────────────────────────────
function cssBlock(roles) {
  const lines = Object.entries(roles).map(([k, v]) => `  --md-sys-color-${k}: ${v};`)
  for (const r of RGB_DERIVED) if (roles[r]) lines.push(`  --md-sys-color-${r}-rgb: ${hexToRgb(roles[r])};`)
  return lines.join('\n')
}
let css = readFileSync(GLOBALS_CSS_PATH, 'utf8')
css = css.replace(/(:root\s*\{\s*\n\s*\/\* DARK tokens — default \*\/\n)([\s\S]*?)(\n\})/, `$1${cssBlock(schemes.dark)}$3`)
css = css.replace(/(\[data-theme="light"\]\s*\{\s*\n\s*\/\* LIGHT tokens override \*\/\n)([\s\S]*?)(\n\})/, `$1${cssBlock(schemes.light)}$3`)

const contrastBlocks =
  `\n\n/* ── Variantes de contraste (medium / high) — GENERADO ─────────────────── */\n` +
  `[data-theme="dark"][data-contrast="medium"], :root[data-contrast="medium"]:not([data-theme="light"]) {\n${cssBlock(schemes.darkMc)}\n}\n\n` +
  `[data-theme="dark"][data-contrast="high"], :root[data-contrast="high"]:not([data-theme="light"]) {\n${cssBlock(schemes.darkHc)}\n}\n\n` +
  `[data-theme="light"][data-contrast="medium"] {\n${cssBlock(schemes.lightMc)}\n}\n\n` +
  `[data-theme="light"][data-contrast="high"] {\n${cssBlock(schemes.lightHc)}\n}\n`

// quita bloque previo si existe, luego re-añade
css = css.replace(/\n\n\/\* ── Variantes de contraste[\s\S]*?high"\] \{[\s\S]*?\n\}\n/, '')
css = css.trimEnd() + contrastBlocks
writeFileSync(GLOBALS_CSS_PATH, css)

console.log('✅ 6 esquemas → tokens.ts (6 exports) + globals.css (2 base + 4 contraste)')
console.log('   ejemplos:',
  'dark.primary', schemes.dark.primary, '·',
  'dark-hc.primary', schemes.darkHc.primary, '·',
  'light-hc.on-surface', schemes.lightHc['on-surface'])
