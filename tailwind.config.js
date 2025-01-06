// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors:{
//         'my-primary': '#262521',
//         'my-secondary': '#403F3C',
//         'my-terciary': '#21CECC',
//         'my-quartenary': '#F2F2F2',
//         'my-quintenary': '#BFBFBF',
//       },
//       fontFamily:{
//         montserrat: ['Montserrat', 'sans-serif']
//       }
//     },
//   },
//   plugins: [
//     require('tailwind-scrollbar'),
//   ],
// }

import { defineConfig } from 'tailwindcss';

export default defineConfig({
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        'my-primary': '#262521',
        'my-secondary': '#403F3C',
        'my-terciary': '#21CECC',
        'my-quartenary': '#F2F2F2',
        'my-quintenary': '#BFBFBF',
      },
      fontFamily:{
        montserrat: ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
});
