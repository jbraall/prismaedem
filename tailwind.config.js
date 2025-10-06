/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'prisma': {
          'power': '#2A332A',    // Verde oscuro para elegancia y poder
          'energy': '#E5D5B5',   // Beige/dorado para energía y optimismo
          'dark': '#1A201A',     // Versión más oscura del verde
          'light': '#F0E5D0'     // Versión más clara del beige
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Montserrat', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [],
}
