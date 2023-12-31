import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'girl-dog': "url('/images/girl-with-dog.jpg')",
        footer: "url('/images/illustration-footer-garde-chien.svg')",
      },
      colors: {
        'light-grey': '#F6F6F6',
        'light-green': '#4DB273',
        turquoise: '#00ACAD',
        'dark-yellow': '#EFB23C',
        'bright-orange': '#FF8F3A',
        'bright-red': '#FF2745',
        'dark-red': '#E01B3F',
        'header-red': '#E0193E',
        'footer-color': '#efeeee',
      },
      fontFamily: {
        doggo: ['doggo', 'sans-serif'],
        nunito: ['nunito', 'sans-serif'],
      },
      screens: {
        md: '883px',
      },
    },
  },
  plugins: [],
};
export default config;
