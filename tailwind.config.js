module.exports = {
  darkMode: ['class'], // Темный режим на основе класса
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
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
          primary: '#008000',
        },
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=forest]'],
          primary: '#008000',
          'base-100': '#000',
          'base-200': '#000',
        },
      },
    ],
  },
};
