// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: [
        'Poppins', ['sans-serif']
      ],
      colors: {
        'RoxoPrincipal': '#8A05BE',
        'RoxoSecundário': '#A128C4',
        'RoxoClaro': '#D3BCE6',
        'Preto': '#000000',
        'CinzaEscuro': '#333333',
        'CinzaClaro': '#F0F1F5'
      },
      spacing: {
        "9pc": '90%',
        "8pc": '80%',
        "7pc": '70%',
        "6pc": '60%',
        "5pc": '50%',
        "4pc": '40%',
        "33pc": '33,3%',
        "3pc": '30%',
        "2-5pc": '25%',
        "2pc": '20%',
        "1-5pc": '15%',
        "1pc": '10%',
        '02pc': '2%',
        '126': '504px'
      },
  },
  plugins: [],
}}
