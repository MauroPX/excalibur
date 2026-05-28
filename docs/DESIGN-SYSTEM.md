#  EXCALIBUR Design System: Documentation & Token Architecture

**Version**: 1.0 (Certified v93.0)  
**Status**: Sovereign Lockdown  
**Focus**: Accessibility, Executive Synthesis, and Premium Aesthetic (iOS 26 Liquid Glass).

---

## 🏛️ 1. Foundation: The Token Architecture
EXCALIBUR uses a three-tier token system to ensure scalability and sovereign control over the visual layer.

### 1.1. Color Primitives (Hard-Core)
These are the static color values used as the source for all semantic decisions.
- **Deep Black**: `#080C12` (Ecosystem Backdrop)
- **Liquid Glass**: `rgba(10, 10, 10, 0.9)` (Surface Base)
- **Blue Primary**: `#1E4ED8` (Brand/Action)
- **Blue Light**: `#60A5FA` (Interactive/Focus)
- **Green Success**: `#4ADE80` (A11y Pass)
- **Yellow Warning**: `#FBBF24` (A11y Warn)
- **Red Critical**: `#F87171` (A11y Fail)

### 1.2. Semantic Tokens (Meaningful)
These tokens reference primitives but define their *role* in the system.
- `--surface-glass`: `Liquid Glass` + `60px blur` + `210% saturation`.
- `--action-primary`: `Blue Primary`.
- `--text-heading`: `Roboto Flex` (Wght: 1000).
- `--text-body`: `Roboto Flex` (Wght: 400, Leading: 1.45).
- `--border-premium`: `1px solid rgba(255, 255, 255, 0.18)`.

---

## 🖋️ 2. Typography: The Roboto Flex Lockdown
Standardized to a single font family to maximize accessibility and reduce layout shifts.

### 2.1. Variable Axis Specifications
We leverage the variable nature of **Roboto Flex** to create hierarchy without changing families.

| Level | Weight (wght) | Width (wdth) | Optical Size (opsz) | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **H1/Logo** | 1000 | 125 | 48 | Maximum technical authority. |
| **H3/Chapters** | 900 | 110 | 32 | Structural distinction. |
| **Body/Label** | 400 | 100 | 14 | Technical readability (Leading: 1.45). |
| **Context/Caption**| 300 | 100 | 12 | Meta-information and context. |

---

## 💎 3. Visual Engine: "Midnight Glass"
The signature iOS 26 aesthetic, optimized for WCAG AAA contrast.

- **Gaussian Blur**: `60px`. Essential for depth and content separation.
- **Saturate**: `210%`. Ensures background colors "pop" through the glass.
- **Inner Reflection (Glint)**: A radial gradient `radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)` animated at `25deg` to simulate moving light on hardware.
- **Squircle Radius**: `22.5%`. Mathematically calibrated to match Apple's hardware continuity.

---

## 🧱 4. Atomic Library (Staff Atoms)
The building blocks of the sovereign UI layer.

### 4.1. LiquidFAB (Floating Action Button)
- **Scale**: 56px (Base).
- **Z-Index**: `2147483647` (System Level).
- **Interaction**: Scale 1.1 + Glow effect on focus/hover.

### 4.2. PAR Cards (Information Design)
The system enforces a standardized evidence structure for all 24 projects:
- **[P] Problem**: The technical or business challenge.
- **[A] Action**: The Staff Architect's strategic intervention.
- **[R] Result**: Measureable impact (ROI, A11y, Performance).

---

## ⚙️ 5. Implementation & Governance
The Design System is enforced by the **Master Orchestrator Pipeline**.

1. **Physical Purge**: Build scripts physically remove non-compliant font links and CSS tokens from the source.
2. **Universal Override**: A global style block with `!important` ensures that external CSS files cannot break the system sovereignty.
3. **A11y Audit**: The ARC engine performs live scans to ensure that Design System implementations do not violate WCAG 2.2 standards.

---
**"Standardization is the bedrock of strategic scalability."**  
*Certified by the EXCALIBUR DesignOps Pipeline.*
