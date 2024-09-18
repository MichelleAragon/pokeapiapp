module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F22539',
        secondary: '#ECA539',
        pressed: '#C00E20',
        dark: '#353535',
        gray: '#5E5E5E',
        disabled: '#BFBFBF',
        lightGray: '#E8E8E8',
        darkWhite: '#F5F5F5',
        customWhite: '#F9F9F9',
        white: '#FFFFFF'
      },
      fontFamily: {
        sans: ['Lato']
      },
      fontSize: {
        sm: '16px',
        base: '18px',
        xl: '20px',
        '2xl': '22px',
        '3xl': '36px',
      },
      spacing: {
        'paddingButtons': '11px 20px',  // Corrección del nombre de la clase
      },
    },
  },
  plugins: [],
}

