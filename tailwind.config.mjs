// tailwind.config.mjs
import {heroui} from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Layout Colors
        background: {
          DEFAULT: 'rgb(var(--color-background) / <alpha-value>)',
        },
        foreground: {
          DEFAULT: 'rgb(var(--color-foreground) / <alpha-value>)',
        },
        divider: {
          DEFAULT: 'rgb(var(--color-divider) / var(--color-divider-opacity))',
        },
        focus: {
          DEFAULT: 'rgb(var(--color-focus) / <alpha-value>)',
        },

        // Content Colors
        content1: 'rgb(var(--color-content-1) / <alpha-value>)',
        content2: 'rgb(var(--color-content-2) / <alpha-value>)',
        content3: 'rgb(var(--color-content-3) / <alpha-value>)',
        content4: 'rgb(var(--color-content-4) / <alpha-value>)',

        // Default Color Scale
        default: {
          DEFAULT: 'rgb(var(--color-default) / <alpha-value>)',
          50: 'rgb(var(--color-default-50) / <alpha-value>)',
          100: 'rgb(var(--color-default-100) / <alpha-value>)',
          200: 'rgb(var(--color-default-200) / <alpha-value>)',
          300: 'rgb(var(--color-default-300) / <alpha-value>)',
          400: 'rgb(var(--color-default-400) / <alpha-value>)',
          500: 'rgb(var(--color-default-500) / <alpha-value>)',
          600: 'rgb(var(--color-default-600) / <alpha-value>)',
          700: 'rgb(var(--color-default-700) / <alpha-value>)',
          800: 'rgb(var(--color-default-800) / <alpha-value>)',
          900: 'rgb(var(--color-default-900) / <alpha-value>)',
          foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        },

        // Primary Color Scale
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          50: 'rgb(var(--color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--color-primary-900) / <alpha-value>)',
          foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        },

        // Secondary Color Scale
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary) / <alpha-value>)',
          50: 'rgb(var(--color-secondary-50) / <alpha-value>)',
          100: 'rgb(var(--color-secondary-100) / <alpha-value>)',
          200: 'rgb(var(--color-secondary-200) / <alpha-value>)',
          300: 'rgb(var(--color-secondary-300) / <alpha-value>)',
          400: 'rgb(var(--color-secondary-400) / <alpha-value>)',
          500: 'rgb(var(--color-secondary-500) / <alpha-value>)',
          600: 'rgb(var(--color-secondary-600) / <alpha-value>)',
          700: 'rgb(var(--color-secondary-700) / <alpha-value>)',
          800: 'rgb(var(--color-secondary-800) / <alpha-value>)',
          900: 'rgb(var(--color-secondary-900) / <alpha-value>)',
          foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        },

        // Success Color Scale
        success: {
          DEFAULT: 'rgb(var(--color-success) / <alpha-value>)',
          50: 'rgb(var(--color-success-50) / <alpha-value>)',
          100: 'rgb(var(--color-success-100) / <alpha-value>)',
          200: 'rgb(var(--color-success-200) / <alpha-value>)',
          300: 'rgb(var(--color-success-300) / <alpha-value>)',
          400: 'rgb(var(--color-success-400) / <alpha-value>)',
          500: 'rgb(var(--color-success-500) / <alpha-value>)',
          600: 'rgb(var(--color-success-600) / <alpha-value>)',
          700: 'rgb(var(--color-success-700) / <alpha-value>)',
          800: 'rgb(var(--color-success-800) / <alpha-value>)',
          900: 'rgb(var(--color-success-900) / <alpha-value>)',
          foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        },

        // Warning Color Scale
        warning: {
          DEFAULT: 'rgb(var(--color-warning) / <alpha-value>)',
          50: 'rgb(var(--color-warning-50) / <alpha-value>)',
          100: 'rgb(var(--color-warning-100) / <alpha-value>)',
          200: 'rgb(var(--color-warning-200) / <alpha-value>)',
          300: 'rgb(var(--color-warning-300) / <alpha-value>)',
          400: 'rgb(var(--color-warning-400) / <alpha-value>)',
          500: 'rgb(var(--color-warning-500) / <alpha-value>)',
          600: 'rgb(var(--color-warning-600) / <alpha-value>)',
          700: 'rgb(var(--color-warning-700) / <alpha-value>)',
          800: 'rgb(var(--color-warning-800) / <alpha-value>)',
          900: 'rgb(var(--color-warning-900) / <alpha-value>)',
          foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        },

        // Danger Color Scale
        danger: {
          DEFAULT: 'rgb(var(--color-danger) / <alpha-value>)',
          50: 'rgb(var(--color-danger-50) / <alpha-value>)',
          100: 'rgb(var(--color-danger-100) / <alpha-value>)',
          200: 'rgb(var(--color-danger-200) / <alpha-value>)',
          300: 'rgb(var(--color-danger-300) / <alpha-value>)',
          400: 'rgb(var(--color-danger-400) / <alpha-value>)',
          500: 'rgb(var(--color-danger-500) / <alpha-value>)',
          600: 'rgb(var(--color-danger-600) / <alpha-value>)',
          700: 'rgb(var(--color-danger-700) / <alpha-value>)',
          800: 'rgb(var(--color-danger-800) / <alpha-value>)',
          900: 'rgb(var(--color-danger-900) / <alpha-value>)',
          foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        },
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
        'primary-gradient': 'linear-gradient(to left, rgb(var(--color-primary-200)), rgb(var(--color-primary)))',
        'primary-gradient-reverse': 'linear-gradient(to left, rgb(var(--color-primary)), rgb(var(--color-primary-200)))',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            // Layout
            background: 'rgb(var(--color-background))',
            foreground: 'rgb(var(--color-foreground))',
            divider: 'rgb(var(--color-divider) / var(--color-divider-opacity))',
            focus: 'rgb(var(--color-focus))',

            // Content
            content1: 'rgb(var(--color-content-1))',
            content2: 'rgb(var(--color-content-2))',
            content3: 'rgb(var(--color-content-3))',
            content4: 'rgb(var(--color-content-4))',

            // Default
            default: {
              DEFAULT: 'rgb(var(--color-default))',
              50: 'rgb(var(--color-default-50))',
              100: 'rgb(var(--color-default-100))',
              200: 'rgb(var(--color-default-200))',
              300: 'rgb(var(--color-default-300))',
              400: 'rgb(var(--color-default-400))',
              500: 'rgb(var(--color-default-500))',
              600: 'rgb(var(--color-default-600))',
              700: 'rgb(var(--color-default-700))',
              800: 'rgb(var(--color-default-800))',
              900: 'rgb(var(--color-default-900))',
              foreground: 'rgb(var(--color-foreground))',
            },

            // Primary
            primary: {
              DEFAULT: 'rgb(var(--color-primary))',
              50: 'rgb(var(--color-primary-50))',
              100: 'rgb(var(--color-primary-100))',
              200: 'rgb(var(--color-primary-200))',
              300: 'rgb(var(--color-primary-300))',
              400: 'rgb(var(--color-primary-400))',
              500: 'rgb(var(--color-primary-500))',
              600: 'rgb(var(--color-primary-600))',
              700: 'rgb(var(--color-primary-700))',
              800: 'rgb(var(--color-primary-800))',
              900: 'rgb(var(--color-primary-900))',
              foreground: 'rgb(var(--color-foreground))',
            },

            // Secondary
            secondary: {
              DEFAULT: 'rgb(var(--color-secondary))',
              50: 'rgb(var(--color-secondary-50))',
              100: 'rgb(var(--color-secondary-100))',
              200: 'rgb(var(--color-secondary-200))',
              300: 'rgb(var(--color-secondary-300))',
              400: 'rgb(var(--color-secondary-400))',
              500: 'rgb(var(--color-secondary-500))',
              600: 'rgb(var(--color-secondary-600))',
              700: 'rgb(var(--color-secondary-700))',
              800: 'rgb(var(--color-secondary-800))',
              900: 'rgb(var(--color-secondary-900))',
              foreground: 'rgb(var(--color-foreground))',
            },

            // Success
            success: {
              DEFAULT: 'rgb(var(--color-success))',
              50: 'rgb(var(--color-success-50))',
              100: 'rgb(var(--color-success-100))',
              200: 'rgb(var(--color-success-200))',
              300: 'rgb(var(--color-success-300))',
              400: 'rgb(var(--color-success-400))',
              500: 'rgb(var(--color-success-500))',
              600: 'rgb(var(--color-success-600))',
              700: 'rgb(var(--color-success-700))',
              800: 'rgb(var(--color-success-800))',
              900: 'rgb(var(--color-success-900))',
              foreground: 'rgb(var(--color-foreground))',
            },

            // Warning
            warning: {
              DEFAULT: 'rgb(var(--color-warning))',
              50: 'rgb(var(--color-warning-50))',
              100: 'rgb(var(--color-warning-100))',
              200: 'rgb(var(--color-warning-200))',
              300: 'rgb(var(--color-warning-300))',
              400: 'rgb(var(--color-warning-400))',
              500: 'rgb(var(--color-warning-500))',
              600: 'rgb(var(--color-warning-600))',
              700: 'rgb(var(--color-warning-700))',
              800: 'rgb(var(--color-warning-800))',
              900: 'rgb(var(--color-warning-900))',
              foreground: 'rgb(var(--color-foreground))',
            },

            // Danger
            danger: {
              DEFAULT: 'rgb(var(--color-danger))',
              50: 'rgb(var(--color-danger-50))',
              100: 'rgb(var(--color-danger-100))',
              200: 'rgb(var(--color-danger-200))',
              300: 'rgb(var(--color-danger-300))',
              400: 'rgb(var(--color-danger-400))',
              500: 'rgb(var(--color-danger-500))',
              600: 'rgb(var(--color-danger-600))',
              700: 'rgb(var(--color-danger-700))',
              800: 'rgb(var(--color-danger-800))',
              900: 'rgb(var(--color-danger-900))',
              foreground: 'rgb(var(--color-foreground))',
            },
          },
        },
        dark: {
          colors: {
            // Layout
            background: 'rgb(var(--color-background))',
            foreground: 'rgb(var(--color-foreground))',
            divider: 'rgb(var(--color-divider) / var(--color-divider-opacity))',
            focus: 'rgb(var(--color-focus))',

            // Content
            content1: 'rgb(var(--color-content-1))',
            content2: 'rgb(var(--color-content-2))',
            content3: 'rgb(var(--color-content-3))',
            content4: 'rgb(var(--color-content-4))',

            // Default
            default: {
              DEFAULT: 'rgb(var(--color-default))',
              50: 'rgb(var(--color-default-50))',
              100: 'rgb(var(--color-default-100))',
              200: 'rgb(var(--color-default-200))',
              300: 'rgb(var(--color-default-300))',
              400: 'rgb(var(--color-default-400))',
              500: 'rgb(var(--color-default-500))',
              600: 'rgb(var(--color-default-600))',
              700: 'rgb(var(--color-default-700))',
              800: 'rgb(var(--color-default-800))',
              900: 'rgb(var(--color-default-900))',
              foreground: 'rgb(var(--color-foreground))',
            },

            // Primary
            primary: {
              DEFAULT: 'rgb(var(--color-primary))',
              50: 'rgb(var(--color-primary-50))',
              100: 'rgb(var(--color-primary-100))',
              200: 'rgb(var(--color-primary-200))',
              300: 'rgb(var(--color-primary-300))',
              400: 'rgb(var(--color-primary-400))',
              500: 'rgb(var(--color-primary-500))',
              600: 'rgb(var(--color-primary-600))',
              700: 'rgb(var(--color-primary-700))',
              800: 'rgb(var(--color-primary-800))',
              900: 'rgb(var(--color-primary-900))',
              foreground: 'rgb(var(--color-foreground))',
            },

            // Secondary
            secondary: {
              DEFAULT: 'rgb(var(--color-secondary))',
              50: 'rgb(var(--color-secondary-50))',
              100: 'rgb(var(--color-secondary-100))',
              200: 'rgb(var(--color-secondary-200))',
              300: 'rgb(var(--color-secondary-300))',
              400: 'rgb(var(--color-secondary-400))',
              500: 'rgb(var(--color-secondary-500))',
              600: 'rgb(var(--color-secondary-600))',
              700: 'rgb(var(--color-secondary-700))',
              800: 'rgb(var(--color-secondary-800))',
              900: 'rgb(var(--color-secondary-900))',
              foreground: 'rgb(var(--color-foreground))',
            },

            // Success
            success: {
              DEFAULT: 'rgb(var(--color-success))',
              50: 'rgb(var(--color-success-50))',
              100: 'rgb(var(--color-success-100))',
              200: 'rgb(var(--color-success-200))',
              300: 'rgb(var(--color-success-300))',
              400: 'rgb(var(--color-success-400))',
              500: 'rgb(var(--color-success-500))',
              600: 'rgb(var(--color-success-600))',
              700: 'rgb(var(--color-success-700))',
              800: 'rgb(var(--color-success-800))',
              900: 'rgb(var(--color-success-900))',
              foreground: 'rgb(var(--color-foreground))',
            },

            // Warning
            warning: {
              DEFAULT: 'rgb(var(--color-warning))',
              50: 'rgb(var(--color-warning-50))',
              100: 'rgb(var(--color-warning-100))',
              200: 'rgb(var(--color-warning-200))',
              300: 'rgb(var(--color-warning-300))',
              400: 'rgb(var(--color-warning-400))',
              500: 'rgb(var(--color-warning-500))',
              600: 'rgb(var(--color-warning-600))',
              700: 'rgb(var(--color-warning-700))',
              800: 'rgb(var(--color-warning-800))',
              900: 'rgb(var(--color-warning-900))',
              foreground: 'rgb(var(--color-foreground))',
            },

            // Danger
            danger: {
              DEFAULT: 'rgb(var(--color-danger))',
              50: 'rgb(var(--color-danger-50))',
              100: 'rgb(var(--color-danger-100))',
              200: 'rgb(var(--color-danger-200))',
              300: 'rgb(var(--color-danger-300))',
              400: 'rgb(var(--color-danger-400))',
              500: 'rgb(var(--color-danger-500))',
              600: 'rgb(var(--color-danger-600))',
              700: 'rgb(var(--color-danger-700))',
              800: 'rgb(var(--color-danger-800))',
              900: 'rgb(var(--color-danger-900))',
              foreground: 'rgb(var(--color-foreground))',
            },
          },
        },
      },
    }),
  ],
};

export default config;
