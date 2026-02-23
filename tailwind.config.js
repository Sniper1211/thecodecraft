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
        // 深空蓝黑系列 - 科技感背景色
        space: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#12121a',
          950: '#0a0a0f',
        },
        // 霓虹蓝系列 - 主要科技感颜色
        neon: {
          50: '#e6ffff',
          100: '#b3ffff',
          200: '#80ffff',
          300: '#4dffff',
          400: '#1affff',
          500: '#00f5ff', // 主要霓虹蓝
          600: '#00ccd6',
          700: '#00a3ad',
          800: '#007a84',
          900: '#00515b',
        },
        // 霓虹绿系列 - 次要科技感颜色
        neonGreen: {
          50: '#e6fff5',
          100: '#b3ffdf',
          200: '#80ffc9',
          300: '#4dffb3',
          400: '#1aff9d',
          500: '#00ff9d', // 主要霓虹绿
          600: '#00d684',
          700: '#00ad6b',
          800: '#008452',
          900: '#005b39',
        },
        // 科技灰系列 - 中性色
        techGray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        // 主色调 - 霓虹蓝
        primary: {
          50: '#e6ffff',
          100: '#b3ffff',
          200: '#80ffff',
          300: '#4dffff',
          400: '#1affff',
          500: '#00f5ff', // 霓虹蓝
          600: '#00ccd6',
          700: '#00a3ad',
          800: '#007a84',
          900: '#00515b',
        },
        // 强调色 - 霓虹绿
        accent: {
          50: '#e6fff5',
          100: '#b3ffdf',
          200: '#80ffc9',
          300: '#4dffb3',
          400: '#1aff9d',
          500: '#00ff9d', // 霓虹绿
          600: '#00d684',
          700: '#00ad6b',
          800: '#008452',
          900: '#005b39',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
        mono: ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
        display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.6rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1.1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        '3xl': '0 35px 60px -15px rgb(0 0 0 / 0.3)',
        inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        none: 'none',
        // 科技感阴影 - 锐利效果
        'tech': '0 4px 20px rgba(0, 245, 255, 0.1), 0 2px 8px rgba(0, 255, 157, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'tech-lg': '0 8px 40px rgba(0, 245, 255, 0.15), 0 4px 16px rgba(0, 255, 157, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
        'tech-xl': '0 16px 60px rgba(0, 245, 255, 0.2), 0 8px 32px rgba(0, 255, 157, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        // 科技感发光效果
        'glow-tech': '0 0 20px rgba(0, 245, 255, 0.3), 0 0 40px rgba(0, 245, 255, 0.1)',
        'glow-tech-lg': '0 0 40px rgba(0, 245, 255, 0.5), 0 0 80px rgba(0, 245, 255, 0.2)',
        'glow-tech-xl': '0 0 60px rgba(0, 245, 255, 0.7), 0 0 120px rgba(0, 245, 255, 0.3)',
        // 霓虹绿发光效果
        'glow-green': '0 0 20px rgba(0, 255, 157, 0.3), 0 0 40px rgba(0, 255, 157, 0.1)',
        'glow-green-lg': '0 0 40px rgba(0, 255, 157, 0.5), 0 0 80px rgba(0, 255, 157, 0.2)',
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem',
        '4xl': '4rem',
        full: '9999px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '70ch',
            color: theme('colors.space.300'),
            lineHeight: '1.75',
            '[class~="lead"]': {
              color: theme('colors.space.400'),
              fontSize: '1.25em',
              lineHeight: '1.6',
            },
            a: {
              color: theme('colors.neon.500'),
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                color: theme('colors.neon.400'),
                textDecoration: 'underline',
              },
            },
            strong: {
              color: theme('colors.space.100'),
              fontWeight: '600',
            },
            'ol > li::marker': {
              color: theme('colors.space.500'),
            },
            'ul > li::marker': {
              color: theme('colors.space.500'),
            },
            hr: {
              borderColor: theme('colors.space.700'),
              borderTopWidth: '1px',
              marginTop: '3em',
              marginBottom: '3em',
            },
            blockquote: {
              fontWeight: '500',
              fontStyle: 'italic',
              color: theme('colors.space.200'),
              borderLeftWidth: '0.25rem',
              borderLeftColor: theme('colors.neon.500'),
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
              marginTop: '2em',
              marginBottom: '2em',
              paddingLeft: '1.5em',
              paddingRight: '1em',
              backgroundColor: theme('colors.space.800'),
              borderRadius: '0.5rem',
            },
            'blockquote p:first-of-type::before': {
              content: 'open-quote',
            },
            'blockquote p:last-of-type::after': {
              content: 'close-quote',
            },
            h1: {
              color: theme('colors.space.100'),
              fontWeight: '800',
              fontSize: '2.5em',
              marginTop: '0',
              marginBottom: '1em',
              lineHeight: '1.2',
              letterSpacing: '-0.025em',
            },
            h2: {
              color: theme('colors.space.100'),
              fontWeight: '700',
              fontSize: '1.8em',
              marginTop: '2.5em',
              marginBottom: '1em',
              lineHeight: '1.3',
              letterSpacing: '-0.02em',
            },
            h3: {
              color: theme('colors.space.100'),
              fontWeight: '600',
              fontSize: '1.4em',
              marginTop: '2em',
              marginBottom: '0.8em',
              lineHeight: '1.4',
              letterSpacing: '-0.015em',
            },
            h4: {
              color: theme('colors.space.100'),
              fontWeight: '600',
              marginTop: '1.8em',
              marginBottom: '0.6em',
              lineHeight: '1.4',
            },
            code: {
              color: theme('colors.space.100'),
              fontWeight: '500',
              backgroundColor: theme('colors.space.800'),
              padding: '0.25em 0.5em',
              borderRadius: '0.375rem',
              fontSize: '0.9em',
              border: '1px solid',
              borderColor: theme('colors.space.700'),
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: theme('colors.space.900'),
              color: theme('colors.space.100'),
              borderRadius: '1rem',
              padding: '1.5rem',
              overflowX: 'auto',
              fontSize: '0.9em',
              lineHeight: '1.6',
              marginTop: '2em',
              marginBottom: '2em',
              boxShadow: '0 8px 40px rgba(0, 0, 0, 0.3)',
            },
            'pre code': {
              backgroundColor: 'transparent',
              borderWidth: '0',
              borderRadius: '0',
              padding: '0',
              fontWeight: '400',
              color: 'inherit',
              fontSize: 'inherit',
              fontFamily: 'inherit',
              lineHeight: 'inherit',
            },
            'pre code::before': {
              content: '""',
            },
            'pre code::after': {
              content: '""',
            },
            table: {
              width: '100%',
              tableLayout: 'auto',
              textAlign: 'left',
              marginTop: '2em',
              marginBottom: '2em',
              fontSize: '0.9em',
              lineHeight: '1.6',
            },
            thead: {
              color: theme('colors.space.100'),
              fontWeight: '600',
              borderBottomWidth: '2px',
              borderBottomColor: theme('colors.space.700'),
            },
            'thead th': {
              verticalAlign: 'bottom',
              padding: '0.75em 1em',
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: theme('colors.space.800'),
            },
            'tbody tr:last-child': {
              borderBottomWidth: '0',
            },
            'tbody td': {
              verticalAlign: 'top',
              padding: '0.75em 1em',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.space.300'),
            '[class~="lead"]': {
              color: theme('colors.space.400'),
            },
            a: {
              color: theme('colors.neon.400'),
              '&:hover': {
                color: theme('colors.neon.300'),
              },
            },
            strong: {
              color: theme('colors.space.100'),
            },
            'ol > li::marker': {
              color: theme('colors.space.400'),
            },
            'ul > li::marker': {
              color: theme('colors.space.400'),
            },
            hr: {
              borderColor: theme('colors.space.700'),
            },
            blockquote: {
              color: theme('colors.space.100'),
              borderLeftColor: theme('colors.neon.500'),
              backgroundColor: theme('colors.space.800'),
            },
            h1: {
              color: theme('colors.space.100'),
            },
            h2: {
              color: theme('colors.space.100'),
            },
            h3: {
              color: theme('colors.space.100'),
            },
            h4: {
              color: theme('colors.space.100'),
            },
            code: {
              color: theme('colors.space.100'),
              backgroundColor: theme('colors.space.800'),
              borderColor: theme('colors.space.700'),
            },
            pre: {
              backgroundColor: theme('colors.space.900'),
            },
            thead: {
              color: theme('colors.space.100'),
              borderBottomColor: theme('colors.space.700'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.space.800'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}