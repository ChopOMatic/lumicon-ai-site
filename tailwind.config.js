/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'glow-sm': '0 0 2px 0 rgba(96, 165, 250, 0.5)',
        'glow': '0 0 6px 2px rgba(96, 165, 250, 0.4)',
        'glow-md': '0 0 15px 3px rgba(96, 165, 250, 0.3)',
        'glow-lg': '0 0 30px 10px rgba(96, 165, 250, 0.25)',
        'glow-xl': '0 0 60px 15px rgba(96, 165, 250, 0.2)',
        'glow-2xl': '0 0 100px 30px rgba(96, 165, 250, 0.15)',
        'inner-glow': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      },
      colors: {
        background: '#0A0A0A',
        surface: '#111111',
        glow: {
          blue: 'rgba(59, 130, 246, 0.5)',
          purple: 'rgba(139, 92, 246, 0.5)',
          pink: 'rgba(236, 72, 153, 0.5)',
          cyan: 'rgba(34, 211, 238, 0.5)',
        },
        accent: {
          blue: '#22d3ee',
          purple: '#a78bfa',
          pink: '#f472b6',
          amber: '#f59e0b',
        },
        primary: {
          DEFAULT: '#3B82F6',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554',
        },
        secondary: {
          DEFAULT: '#8B5CF6',
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
          950: '#2E1065',
        },
        gray: {
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
          950: '#09090B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'Monaco', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'glow-slow': 'glow 6s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        glow: {
          '0%': {
            'box-shadow': '0 0 2px 0 rgba(96, 165, 250, 0.5)',
          },
          '100%': {
            'box-shadow': '0 0 15px 5px rgba(96, 165, 250, 0.3)',
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-slate':
          'linear-gradient(to right, rgba(148, 163, 184, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.08) 1px, transparent 1px)',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'neon': '0 0 0 1px rgba(167, 139, 250, 0.35), 0 8px 30px rgba(34, 211, 238, 0.15)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animationDelay: {
        '2000': '2000ms',
        '4000': '4000ms',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function({ addUtilities }) {
      const newUtilities = {
        '.glow-effect': {
          position: 'relative',
          zIndex: '1',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            borderRadius: 'inherit',
            padding: '1px',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(168, 85, 247, 0.4))',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            pointerEvents: 'none',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            borderRadius: 'inherit',
            background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.1), transparent 40%)',
            opacity: '0',
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none',
          },
          '&:hover::after': {
            opacity: '1',
          },
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    function({ addUtilities }) {
      const newUtilities = {
        '.animation-delay-2000': {
          'animation-delay': '2s',
        },
        '.animation-delay-4000': {
          'animation-delay': '4s',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}