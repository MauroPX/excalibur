// EXCALIBUR v2.0 — M3 Design Tokens — 6 esquemas (light/dark × base/medium/high contrast)
// Seed: #A47540 — base light/dark de DESIGN_TOKENS.json;
// mc/hc derivados por @material/material-color-utilities. GENERADO — regenerar:
//   node scripts/gen-contrast-schemes.mjs
// 'cta'/'onCta' = alias de 'tertiary'.

export const darkTokens = {
  primary: '#FABA73', onPrimary: '#482900', primaryContainer: '#673D00', onPrimaryContainer: '#FFDCBB',
  primaryFixed: '#FFDCBB', onPrimaryFixed: '#2C1700', primaryFixedDim: '#FABA73', onPrimaryFixedVariant: '#673D00',
  secondary: '#E0C1A3', onSecondary: '#402D17', secondaryContainer: '#58432C', onSecondaryContainer: '#FEDDBD',
  secondaryFixed: '#FEDDBD', onSecondaryFixed: '#281805', secondaryFixedDim: '#E0C1A3', onSecondaryFixedVariant: '#58432C',
  tertiary: '#BECC9C', onTertiary: '#293411', tertiaryContainer: '#3F4B26', onTertiaryContainer: '#DAE9B6',
  tertiaryFixed: '#DAE9B6', onTertiaryFixed: '#141F01', tertiaryFixedDim: '#BECC9C', onTertiaryFixedVariant: '#3F4B26',
  error: '#FFB4AB', onError: '#690005', errorContainer: '#93000A', onErrorContainer: '#FFDAD6',
  background: '#19120C', onBackground: '#EEE0D5', surface: '#19120C', onSurface: '#EEE0D5',
  surfaceVariant: '#50453A', onSurfaceVariant: '#F0E2D6', surfaceDim: '#19120C', surfaceBright: '#403830',
  surfaceContainerLowest: '#130D07', surfaceContainerLow: '#211A14', surfaceContainer: '#251E17', surfaceContainerHigh: '#302921',
  surfaceContainerHighest: '#3B332C', outline: '#9D8E81', outlineVariant: '#50453A', shadow: '#000000',
  scrim: '#000000', inverseSurface: '#EEE0D5', inverseOnSurface: '#372F27', inversePrimary: '#845416',
  cta: '#BECC9C', onCta: '#293411',
}

export const lightTokens = {
  primary: '#502E00', onPrimary: '#FFFFFF', primaryContainer: '#FFDCBB', onPrimaryContainer: '#673D00',
  primaryFixed: '#FFDCBB', onPrimaryFixed: '#2C1700', primaryFixedDim: '#FABA73', onPrimaryFixedVariant: '#673D00',
  secondary: '#46321D', onSecondary: '#FFFFFF', secondaryContainer: '#FEDDBD', onSecondaryContainer: '#58432C',
  secondaryFixed: '#FEDDBD', onSecondaryFixed: '#281805', secondaryFixedDim: '#E0C1A3', onSecondaryFixedVariant: '#58432C',
  tertiary: '#2F3A17', onTertiary: '#FFFFFF', tertiaryContainer: '#DAE9B6', onTertiaryContainer: '#3F4B26',
  tertiaryFixed: '#DAE9B6', onTertiaryFixed: '#141F01', tertiaryFixedDim: '#BECC9C', onTertiaryFixedVariant: '#3F4B26',
  error: '#740006', onError: '#FFFFFF', errorContainer: '#FFDAD6', onErrorContainer: '#93000A',
  background: '#FFF8F4', onBackground: '#211A14', surface: '#FFF8F4', onSurface: '#211A14',
  surfaceVariant: '#F1DFD0', onSurfaceVariant: '#50453A', surfaceDim: '#E6D8CC', surfaceBright: '#FFF8F4',
  surfaceContainerLowest: '#FFFFFF', surfaceContainerLow: '#FFF1E7', surfaceContainer: '#FAEBE0', surfaceContainerHigh: '#F4E6DA',
  surfaceContainerHighest: '#EEE0D5', outline: '#827568', outlineVariant: '#D4C4B5', shadow: '#000000',
  scrim: '#000000', inverseSurface: '#372F27', inverseOnSurface: '#FDEEE3', inversePrimary: '#FABA73',
  cta: '#2F3A17', onCta: '#FFFFFF',
}

export const darkMcTokens = {
  primary: '#FFBE77', onPrimary: '#241200', primaryContainer: '#BE8543', onPrimaryContainer: '#000000',
  primaryFixed: '#FFDCBB', onPrimaryFixed: '#1D0E00', primaryFixedDim: '#FABA73', onPrimaryFixedVariant: '#502E00',
  secondary: '#E5C5A7', onSecondary: '#221302', secondaryContainer: '#A78C70', onSecondaryContainer: '#000000',
  secondaryFixed: '#FEDDBD', onSecondaryFixed: '#1C0E01', secondaryFixedDim: '#E0C1A3', onSecondaryFixedVariant: '#46321D',
  tertiary: '#C2D1A0', onTertiary: '#101900', tertiaryContainer: '#88966A', onTertiaryContainer: '#000000',
  tertiaryFixed: '#DAE9B6', onTertiaryFixed: '#0B1400', tertiaryFixedDim: '#BECC9C', onTertiaryFixedVariant: '#2F3A17',
  error: '#FFBAB1', onError: '#370001', errorContainer: '#FF5449', onErrorContainer: '#000000',
  background: '#19120C', onBackground: '#EEE0D5', surface: '#19120C', onSurface: '#FFFAF8',
  surfaceVariant: '#50453A', onSurfaceVariant: '#D9C8B9', surfaceDim: '#19120C', surfaceBright: '#403830',
  surfaceContainerLowest: '#130D07', surfaceContainerLow: '#211A14', surfaceContainer: '#251E17', surfaceContainerHigh: '#302921',
  surfaceContainerHighest: '#3B332C', outline: '#B0A092', outlineVariant: '#8F8174', shadow: '#000000',
  scrim: '#000000', inverseSurface: '#EEE0D5', inverseOnSurface: '#302921', inversePrimary: '#693E00',
  cta: '#C2D1A0', onCta: '#101900',
}

export const darkHcTokens = {
  primary: '#FFFAF8', onPrimary: '#000000', primaryContainer: '#FFBE77', onPrimaryContainer: '#000000',
  primaryFixed: '#FFE2C7', onPrimaryFixed: '#000000', primaryFixedDim: '#FFBE77', onPrimaryFixedVariant: '#241200',
  secondary: '#FFFAF8', onSecondary: '#000000', secondaryContainer: '#E5C5A7', onSecondaryContainer: '#000000',
  secondaryFixed: '#FFE2C7', onSecondaryFixed: '#000000', secondaryFixedDim: '#E5C5A7', onSecondaryFixedVariant: '#221302',
  tertiary: '#F6FFDA', onTertiary: '#000000', tertiaryContainer: '#C2D1A0', onTertiaryContainer: '#000000',
  tertiaryFixed: '#DEEDBA', onTertiaryFixed: '#000000', tertiaryFixedDim: '#C2D1A0', onTertiaryFixedVariant: '#101900',
  error: '#FFF9F9', onError: '#000000', errorContainer: '#FFBAB1', onErrorContainer: '#000000',
  background: '#19120C', onBackground: '#EEE0D5', surface: '#19120C', onSurface: '#FFFFFF',
  surfaceVariant: '#50453A', onSurfaceVariant: '#FFFAF8', surfaceDim: '#19120C', surfaceBright: '#403830',
  surfaceContainerLowest: '#130D07', surfaceContainerLow: '#211A14', surfaceContainer: '#251E17', surfaceContainerHigh: '#302921',
  surfaceContainerHighest: '#3B332C', outline: '#D9C8B9', outlineVariant: '#D9C8B9', shadow: '#000000',
  scrim: '#000000', inverseSurface: '#EEE0D5', inverseOnSurface: '#000000', inversePrimary: '#402300',
  cta: '#F6FFDA', onCta: '#000000',
}

export const lightMcTokens = {
  primary: '#623900', onPrimary: '#FFFFFF', primaryContainer: '#9E692A', onPrimaryContainer: '#FFFFFF',
  primaryFixed: '#9E692A', onPrimaryFixed: '#FFFFFF', primaryFixedDim: '#815113', onPrimaryFixedVariant: '#FFFFFF',
  secondary: '#543F28', onSecondary: '#FFFFFF', secondaryContainer: '#897056', onSecondaryContainer: '#FFFFFF',
  secondaryFixed: '#897056', onSecondaryFixed: '#FFFFFF', secondaryFixedDim: '#6F583F', onSecondaryFixedVariant: '#FFFFFF',
  tertiary: '#3B4722', onTertiary: '#FFFFFF', tertiaryContainer: '#6C7A50', onTertiaryContainer: '#FFFFFF',
  tertiaryFixed: '#6C7A50', onTertiaryFixed: '#FFFFFF', tertiaryFixedDim: '#546139', onTertiaryFixedVariant: '#FFFFFF',
  error: '#8C0009', onError: '#FFFFFF', errorContainer: '#DA342E', onErrorContainer: '#FFFFFF',
  background: '#FFF8F4', onBackground: '#211A14', surface: '#FFF8F4', onSurface: '#211A14',
  surfaceVariant: '#F1DFD0', onSurfaceVariant: '#4C4136', surfaceDim: '#E6D8CC', surfaceBright: '#FFF8F4',
  surfaceContainerLowest: '#FFFFFF', surfaceContainerLow: '#FFF1E7', surfaceContainer: '#FAEBE0', surfaceContainerHigh: '#F4E6DA',
  surfaceContainerHighest: '#EEE0D5', outline: '#6A5D51', outlineVariant: '#86786C', shadow: '#000000',
  scrim: '#000000', inverseSurface: '#372F27', inverseOnSurface: '#FDEEE3', inversePrimary: '#FABA73',
  cta: '#3B4722', onCta: '#FFFFFF',
}

export const lightHcTokens = {
  primary: '#351D00', onPrimary: '#FFFFFF', primaryContainer: '#623900', onPrimaryContainer: '#FFFFFF',
  primaryFixed: '#623900', onPrimaryFixed: '#FFFFFF', primaryFixedDim: '#432600', onPrimaryFixedVariant: '#FFFFFF',
  secondary: '#301F0B', onSecondary: '#FFFFFF', secondaryContainer: '#543F28', onSecondaryContainer: '#FFFFFF',
  secondaryFixed: '#543F28', onSecondaryFixed: '#FFFFFF', secondaryFixedDim: '#3C2914', onSecondaryFixedVariant: '#FFFFFF',
  tertiary: '#1B2605', onTertiary: '#FFFFFF', tertiaryContainer: '#3B4722', onTertiaryContainer: '#FFFFFF',
  tertiaryFixed: '#3B4722', onTertiaryFixed: '#FFFFFF', tertiaryFixedDim: '#25300E', onTertiaryFixedVariant: '#FFFFFF',
  error: '#4E0002', onError: '#FFFFFF', errorContainer: '#8C0009', onErrorContainer: '#FFFFFF',
  background: '#FFF8F4', onBackground: '#211A14', surface: '#FFF8F4', onSurface: '#000000',
  surfaceVariant: '#F1DFD0', onSurfaceVariant: '#2C2219', surfaceDim: '#E6D8CC', surfaceBright: '#FFF8F4',
  surfaceContainerLowest: '#FFFFFF', surfaceContainerLow: '#FFF1E7', surfaceContainer: '#FAEBE0', surfaceContainerHigh: '#F4E6DA',
  surfaceContainerHighest: '#EEE0D5', outline: '#4C4136', outlineVariant: '#4C4136', shadow: '#000000',
  scrim: '#000000', inverseSurface: '#372F27', inverseOnSurface: '#FFFFFF', inversePrimary: '#FFE8D4',
  cta: '#1B2605', onCta: '#FFFFFF',
}
