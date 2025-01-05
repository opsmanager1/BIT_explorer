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
          primary: '#666cff',
        },
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          primary: '#666cff',
          'base-100': '#2a334c',
          'base-200': '#252d37',
        },
      },
    ],
  },
};

// Установка светлой темы по умолчанию
if (typeof window !== 'undefined') {
  // Проверяем, установлен ли атрибут темы
  const currentTheme = document.documentElement.getAttribute('data-theme');
  
  // Если тема еще не установлена, задаем "light"
  if (!currentTheme) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}
