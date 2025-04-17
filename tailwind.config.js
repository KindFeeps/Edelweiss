/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B586A', // Navy blue
          light: '#E8F4FF', // Light blue background
          accent: '#B7D9F8', // Accent blue
          cta: '#4285F4', // CTA blue
        },
        secondary: {
          DEFAULT: '#FBF7ED', // Off-white
          accent: '#FDD054', // Yellow accent
        },
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'], // Font #1
        sans: ['Inter', 'system-ui', 'sans-serif'], // Font #2
      },
      boxShadow: {
        'edelweiss': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'edelweiss-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      borderRadius: {
        'edelweiss': '8px',
      },
      spacing: {
        'section': '6rem', // 96px for consistent section spacing
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
      },
    },
  },
  plugins: [],
};