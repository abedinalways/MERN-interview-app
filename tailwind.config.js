/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'bangla': ['Hind Siliguri', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0fdfa',
          500: '#00F0B5',
          600: '#00E0F0',
          700: '#6200F0',
        }
      }
    },
  },
  plugins: [],
}