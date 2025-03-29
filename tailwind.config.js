module.exports = {
  darkMode: ['class'],
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
        
        'dark-900': '#121212',
        'dark-800': '#1E1E1E',
        'dark-700': '#252525'
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
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          primary: '#666cff',
       
          'base-100': '#121212',
          'base-200': '#1E1E1E',
          'base-300': '#252525',
          'base-content': '#FFFFFF',
          'accent': '#4CAF50',
          'neutral': '#2A2A2A',
        
          '--rounded-box': '0.5rem',
          '--rounded-btn': '0.25rem'
        },
      },
    ],
  },
};
