/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        primary: {
          50: '#e8effd',
          100: '#d2e0fa',
          200: '#a5c0f5',
          300: '#77a1f0',
          400: '#4a81eb',
          500: '#1d62e6',
          600: '#174eb8',
          700: '#113b8a',
          800: '#0c275c',
          900: '#06142e'
        },
        secondary: {
          50: '#eae9e9',
          100: '#d4d3d3',
          200: '#a9a7a8',
          300: '#7e7c7c',
          400: '#535051',
          500: '#282425',
          600: '#201d1e',
          700: '#181616',
          800: '#100e0f',
          900: '#080707'
        }
      },
      fontFamily: {
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif']
      }
    }
  },
  plugins: []
};
