/**
 * Color Configuration Reference
 * 
 * Update colors in src/style.css :root section
 * All components use CSS custom properties for easy customization
 * 
 * Available Variables:
 * =====================
 * 
 * Brand Colors:
 * --color-primary-dark: #0d0d0d (main dark background)
 * --color-primary-dark-hover: #1a1a1a (hover state for dark elements)
 * --color-accent-dark-red: #8b0000 (primary accent color)
 * --color-accent-red: #ff0000 (secondary accent color)
 * --color-accent-neon: #00ff88 (neon accent for highlights)
 * 
 * Neutral Colors:
 * --color-black: #000000 (pure black for borders)
 * --color-white: #ffffff (pure white for text/backgrounds)
 * --color-gray-dark: #333333 (dark gray)
 * --color-gray-light: #d1d5db (light gray)
 * --color-text-secondary: #d1d5db (secondary text color)
 * 
 * Background Colors:
 * --color-bg-dark: #0d0d0d (main background)
 * --color-bg-card: #1a1a1a (card/panel background)
 * --color-bg-overlay: #0d0d0d (overlay background)
 * 
 * Opacity:
 * --opacity-overlay: 0.98 (overlay opacity)
 * 
 * Usage Examples:
 * ===============
 * 
 * CSS (in style blocks):
 * ---------------------
 * color: var(--color-accent-dark-red);
 * background-color: var(--color-bg-card);
 * border-color: var(--color-gray-dark);
 * 
 * Inline Styles (in templates):
 * ----------------------------
 * <div :style="{ backgroundColor: 'var(--color-bg-dark)' }">
 * <h1 style="color: var(--color-accent-dark-red);">Title</h1>
 * 
 * To Change Colors:
 * =================
 * 1. Open src/style.css
 * 2. Update the :root section with new colors
 * 3. All components will automatically use the new colors
 */

export const colorVars = {
  // Brand Colors
  primaryDark: 'var(--color-primary-dark)',
  primaryDarkHover: 'var(--color-primary-dark-hover)',
  accentDarkRed: 'var(--color-accent-dark-red)',
  accentRed: 'var(--color-accent-red)',
  accentNeon: 'var(--color-accent-neon)',
  
  // Neutral Colors
  black: 'var(--color-black)',
  white: 'var(--color-white)',
  grayDark: 'var(--color-gray-dark)',
  grayLight: 'var(--color-gray-light)',
  textSecondary: 'var(--color-text-secondary)',
  
  // Background Colors
  bgDark: 'var(--color-bg-dark)',
  bgCard: 'var(--color-bg-card)',
  bgOverlay: 'var(--color-bg-overlay)',
}
