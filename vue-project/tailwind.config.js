/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular']
      },
      colors: {
        ink: '#07111f',
        plasma: '#7c3aed',
        mint: '#37f0b3',
        skybeam: '#3abff8'
      }
    }
  },
  plugins: []
};
