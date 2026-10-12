/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Roboto Mono', 'monospace'],
      },
      colors: {
        obsidian: {
          950: '#050811',
          900: '#090d16',
          800: '#0f1626',
          700: '#162038',
        },
      },
      backgroundImage: {
        'engineering-grid': 'linear-gradient(to right, rgba(99, 102, 241, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 102, 241, 0.06) 1px, transparent 1px)',
        'engineering-grid-light': 'linear-gradient(to right, rgba(15, 23, 42, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};

