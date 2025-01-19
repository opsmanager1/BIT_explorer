/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
  './index.html',
  './src/**/*.{vue,js,ts,jsx,tsx}',
  './components/**/*.{vue,js,ts,jsx,tsx}', // Пример для папки "components"
  './pages/**/*.{vue,js,ts,jsx,tsx}', // Пример для папки "pages"
],
  theme: {
    extend: {
      colors: {
        yes: '#3fb68b',
        no: '#ff5353',
        info: '#00b2ff',
        main: 'var(--text-main)',
        secondary: 'var(--text-secondary)',
        active: '#000000',
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          primary: '#666cff',
        },
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=luxury]'],
          primary: '#666cff',
          'base-100': '#2a334c',
          'base-200': '#000000'
        },
      },
    ],
  },
};

