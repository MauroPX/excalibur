#  EXCALIBUR Design System: Documentation & Token Architecture

**Version**: 1.1 (Certified v94.0)  
**Status**: Sovereign MD3 Lockdown  
**Focus**: Material Design 3 Compatibility, Accessibility, and iOS 26 Visual Engine.

---

## 🏛️ 1. Foundation: The Token Architecture
EXCALIBUR utilizes a three-tier token system aligned with **Material Design 3 (MD3)** specifications, ensuring cross-platform scalability and strategic consistency.

### 1.1. MD3 Semantic Color Tokens
These tokens define the *functional roles* of color within the ecosystem.

| Token | Dark Value (Midnight) | Purpose |
| :--- | :--- | :--- |
| `--md-sys-color-primary` | `#1E4ED8` | Key brand actions and primary focus. |
| `--md-sys-color-on-primary`| `#FFFFFF` | Text/Icons on primary surfaces. |
| `--md-sys-color-surface` | `rgba(10, 10, 10, 0.9)` | Base glass container background. |
| `--md-sys-color-on-surface`| `#F8FAFC` | Primary text and content. |
| `--md-sys-color-secondary` | `#60A5FA` | Secondary actions and accent highlights. |
| `--md-sys-color-outline` | `rgba(255, 255, 255, 0.18)`| Premium borders and separators. |
| `--md-sys-color-error` | `#F87171` | Critical accessibility failures. |

---

## 🖋️ 2. Typography: The Roboto Flex Lockdown
Standardized to a single font family to maximize accessibility and reduce layout shifts.

### 2.1. Variable Axis Specifications (MD3 Type Scale)
Hierarchy is established using **Roboto Flex** variable axes.

| Level | Weight (wght) | Width (wdth) | Optical Size (opsz) | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **Display Large** | 1000 | 125 | 48 | Hero Names & Logos. |
| **Headline Medium**| 900 | 110 | 32 | Sector Chapters. |
| **Body Large** | 400 | 100 | 14 | PAR Narratives. |
| **Label Small** | 800 | 100 | 11 | Skill Tags. |

---

## 💎 3. Visual Engine: "Midnight Glass" (iOS 26)
High-fidelity refracion system optimized for WCAG AAA contrast.

- **Gaussian Blur**: `60px`. Essential for depth.
- **Saturate**: `210%`. Enhances backdrop clarity.
- **Glint (Inner Reflection)**: Radial light source at `25deg` for hardware feeling.
- **Squircle Radius**: `22.5%`. Mathematically calibrated continuity.

---

## 🧱 4. Component Standards (Staff Atoms)

### 4.1. LiquidFAB (Floating Action Button)
- **Scale**: 56px (Base MD3).
- **Z-Index**: `2147483647`.
- **Logic**: Built-in `LiquidGlint` and `backdrop-filter`.

### 4.2. PAR Cards (Information Design)
Standardized evidence blocks:
- **[P] Problem**: Technical/Business challenge.
- **[A] Action**: Strategic intervention.
- **[R] Result**: Measurable ROI/Impact.

---

## ⚙️ 5. DesignOps Governance
1. **Token Lockdown**: Styles are forced via `:root` and `!important` flags.
2. **Atomic Verification**: Components are audited by the ARC engine for A11y compliance.
3. **Pipeline Sync**: The orchestrator ensures MD3 tokens are injected into legacy source files.

---
**"Consistency is the catalyst for trust."**  
*Certified by the EXCALIBUR DesignOps Pipeline.*
