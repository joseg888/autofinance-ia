/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Modo oscuro siempre activo — no dependemos de clase 'dark' ni media query
  darkMode: 'class',
  theme: {
    extend: {
      // ── Tokens de color del sistema de diseño "panel de telemetría" ──
      colors: {
        bg: '#0A0E14',
        surface: '#121924',
        border: '#1E293B',
        'accent-primary': '#22D3EE',
        'accent-secondary': '#F0A868',
        'text-primary': '#E8ECF1',
        'text-muted': '#8B98AC',
      },
      // ── Familias tipográficas (se inyectan desde next/font via CSS vars) ──
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
      },
      // ── Longitud máxima de línea para cuerpo de texto legible ──
      maxWidth: {
        prose: '65ch',
      },
      // ── Animaciones personalizadas ──
      keyframes: {
        'wave-scan': {
          '0%':   { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'blink-cursor': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
      animation: {
        'wave-scan':     'wave-scan 4s linear infinite',
        'fade-up':       'fade-up 0.6s ease-out forwards',
        'blink-cursor':  'blink-cursor 1.1s step-end infinite',
      },
    },
  },
  plugins: [],
};
