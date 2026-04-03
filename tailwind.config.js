/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          100: '#fef6d6',
          300: '#f3d37c',
          500: '#d4af37',
          700: '#9f7a1f'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Inter"', 'sans-serif']
      },
      boxShadow: {
        premium: '0 20px 40px rgba(0, 0, 0, 0.18)'
      },
      backgroundImage: {
        'gold-premium': 'linear-gradient(145deg, #0c0c0c 0%, #1d1a12 45%, #d4af37 100%)'
      }
    }
  },
  plugins: []
};
