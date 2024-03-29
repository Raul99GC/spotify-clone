
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        spoify: {
          green: '#1DB954 ',
          lightGreen: '#1ed760',
          black: '#000000',
          white: '#FFFFFF',
          darkestGray: '#121212',
          gray: '#282828',
          lighGray: '#B3B3B3',
          hoverGray: '#3e3e3e',
          cardsBackground: '#171717'
        }
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ]
}
