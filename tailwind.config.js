/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#07090F',
          900: '#0A0F1C',
          850: '#0F1729',
          800: '#141D33',
          700: '#1C2740',
          600: '#28334D',
          500: '#3B4763',
        },
        mist: {
          400: '#7C8AA8',
          300: '#94A3B8',
          200: '#B7C1D3',
          100: '#DDE3ED',
          50:  '#EEF1F7',
        },
        cyan: {
          300: '#F49B9D',
          400: '#E86A6D',
          500: '#D12E32',
          600: '#A62226',
        },
        violet: {
          300: '#9DB6DE',
          400: '#6E8FC7',
          500: '#2E5AA5',
          600: '#204683',
        },
        pass: '#34D399',
        fail: '#F87171',
        warn: '#FBBF24',
        paper: {
          50: '#FFFFFF',
          100: '#F8F9FB',
          200: '#F1F3F7',
        },
        line: '#E4E7EC',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(209,46,50,0.18), 0 8px 40px -8px rgba(32,70,131,0.45)',
        card: '0 1px 2px rgba(16,24,40,0.04), 0 1px 3px rgba(16,24,40,0.06)',
      },
      ringColor: {
        DEFAULT: '#D12E32',
      },
      ringOpacity: {
        DEFAULT: '0.5',
      },
    },
  },
  plugins: [],
}
