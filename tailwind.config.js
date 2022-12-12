/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
        'black': '#000000',
        'white': '#FFFFFF',
        'blue': {
            100: '',
            200: '',
            300: '',
            400: '',
            500: '',
            600: '',
            700: '',
            800: '',
            900: '#1C315E',
        },
        'zinc': {
            300: '#d4d4d8',
        }
    }
  },
  plugins: [],
}
