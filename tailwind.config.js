/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      primary:{
        300: '#AAB2F8',
        400: '#7888F5',
        500: '#3A5EEF',
        600: '#1C3EB1',
        700: '#0D236C',
      },
      secondary:{
        300: '#4DB3B6',
        400: '#1A9DA1',
        500: '#019296',
        600: '#018387',
        700: '#003A3C',
      }
    },
    fontSize:{
      'h1': '48px',
      'h2': '40px',
      'h3': '30px',
      'body': '16px',
    }
  },
  plugins: [],
}

