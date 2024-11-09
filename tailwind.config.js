/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'button': '32px',
        'modal': '20px',
        'route': '8px'
      }
    },
    colors:{
      primary:{
        100: '#BDE5E7',
        200: '#80C9CB',
        300: '#4DB3B6',
        400: '#1A9DA1',
        500: '#019296',
        600: '#018387',
        700: '#003A3C',
      },
      secondary:{
        200: '#DADDFC',
        300: '#AAB2F8',
        400: '#7888F5',
        500: '#3A5EEF',
        600: '#1C3EB1',
        700: '#0D236C',
      },
      status:{
        success: '#83C45B',
        warning: '#FCEA49',
        error: '#FF5146'
      },
      neutral:{
        black: '#000000',
        900: '#212529',
        800: '#343A40',
        700: '#495057',
        600: '#6C757D',
        500: '#ADB5BD',
        400: '#CED4DA',
        300: '#DEE2E6',
        200: '#E9ECEF',
        100: '#F8F9FA',

      },
      white: '#FFFFFF'
    },
    fontSize:{
      'h1': ['48px', '140%'],
      'h2': ['40px', '120%'],
      'h3': ['30px', '110%'],
      'body': ['16px', '110%'],
    },
    fontFamily: {
      'sans': 'Albert Sans'
    }
  },
  plugins: [
    function ({addUtilities}) {
      const newUtilities = {
        /* Hide scrollbar for Chrome, Safari and Opera */
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none"
        },
        /* Hide scrollbar for IE, Edge and Firefox */
        ".no-scrollbar": {
          "-ms-overflow-style": "none",  /* IE and Edge */
          "scrollbar-width": "none"  /* Firefox */
        }
      };

      addUtilities(newUtilities)
    }
  ],
}

