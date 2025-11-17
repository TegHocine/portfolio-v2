/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      dark: '#01080E',
      blue: '#011627',
      darkblue: '#011221',
      gray: '#607B96',
      darkgray: '#1E2D3D',
      teal: '#43D9AD',
      darkteal: '#3C9D93',
      yellow: '#FEA55F',
      orange: '#E99287',
      purpel: '#4D5BCE',
      pink: '#C98BDF',
      react: '#61DAFB',
      ts: '#007acc',
      tailwind: '#07B6D5',
      sass: '#CB6699',
      redux: '#764abc',
      vite: '#FFEA83',
      firebase: '#FFC24A',
      token: '#0AA370'
    },
    extend: {
      gridTemplateColumns: {
        autoGrid: 'repeat(auto-fit, minmax(20rem, 20rem))'
      }
    }
  },
  plugins: []
}
