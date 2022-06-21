/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./asset/*.html"],
  theme: {
    extend: {
      gridTemplateRows: {      
        '7' : 'repeat(7, minmax(0, 1fr)',
        '8' : 'repeat(8, minmax(0, 1fr))',
        '9' : 'repeat(9, minmax(0, 1fr))',
        '10' : 'repeat(10, minmax(0, 1fr))',
        '11' : 'repeat(11, minmax(0,1fr))',
        '12' : 'repeat(12, minmax(0,1fr))',
        '13' : 'repeat(13, minmax(0,1fr))'
      },
      gridRowStart: {
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',      
        '13': '13'    
      },
      gridRowEnd: {
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',  
        '13': '13',  
        // 14 HARUS ADA KARENA END DARI 13   
        '14': '14'
      }
    }
  },
  plugins: [],
}
