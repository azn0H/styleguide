/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}', // uprav dle struktury tvého projektu
  ],
  theme: {
    extend: {
      fontFamily: {
        'bitcount': ['"Bitcount Prop Single Ink"', 'sans-serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
        'red_hat_display': ['"Red Hat Display"', 'sans-serif'],
      },
    },
  },
}
