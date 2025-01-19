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
        active: 'var(--bg-active)',
      }
    },
  },
   plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                retro: {
                    // Определите цвета для темы "retro"
                    primary: '#ffcc00',
                    secondary: '#cc33ff',
                    accent: '#33ccff',
                    neutral: '#333333',
                    'base-100': '#ffffff',
                },
            },
            'light', // Включаем стандартные темы
            'dark',
        ],
    },
};

