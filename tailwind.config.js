/** @type {import('tailwindcss').Config} */
module.exports = {
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
        active: 'var(--bg-active)',
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
          'primary-content': '#000000'
        },
      },
    ],
  },
};

