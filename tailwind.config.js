
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
          black: '#000000',
          white: '#FFFFFF',
          darkestGray: '#121212',
          gray: '#282828',
          lighGray: '#B3B3B3'
        }
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ]
}
