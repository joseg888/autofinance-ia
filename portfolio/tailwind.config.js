/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg:               '#06010F',
        surface:          '#0D0720',
        'surface-2':      '#130E2B',
        border:           '#2A1A5E',
        'border-bright':  '#5B21B6',
        'accent-primary': '#A855F7',
        'accent-violet':  '#7C3AED',
        'accent-fuchsia': '#E879F9',
        'accent-blue':    '#818CF8',
        'text-primary':   '#F0EEFF',
        'text-muted':     '#9B8EC4',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        body:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '65ch',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-right': {
          '0%':   { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'spin-slow': {
          '0%':   { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-reverse': {
          '0%':   { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%':      { opacity: '1',   transform: 'scale(1.05)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        'aurora': {
          '0%':   { backgroundPosition: '0% 50%' },
          '50%':  { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'blink-cursor': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        'draw-ring': {
          '0%':   { strokeDashoffset: '600' },
          '100%': { strokeDashoffset: '0' },
        },
        'particle-drift': {
          '0%':   { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '10%':  { opacity: '1' },
          '90%':  { opacity: '1' },
          '100%': { transform: 'translateY(-80px) translateX(20px)', opacity: '0' },
        },
      },
      animation: {
        'fade-up':        'fade-up 0.7s ease-out forwards',
        'fade-in':        'fade-in 0.8s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.8s ease-out forwards',
        'spin-slow':      'spin-slow 12s linear infinite',
        'spin-reverse':   'spin-reverse 18s linear infinite',
        'pulse-glow':     'pulse-glow 3s ease-in-out infinite',
        'float':          'float 6s ease-in-out infinite',
        'aurora':         'aurora 8s ease infinite',
        'blink-cursor':   'blink-cursor 1.1s step-end infinite',
        'draw-ring':      'draw-ring 2s ease-out forwards',
        'particle-drift': 'particle-drift 4s ease-out infinite',
      },
    },
  },
  plugins: [],
};
