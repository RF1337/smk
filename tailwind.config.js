/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
      'basic': '#323332',
      'second-page': '#093017',
      'third-page': '#6F9AAA',
      'fourth-page': '#01417F',
      'fifth-page': '#63AB9E',
      'sixth-page': '#7BC4C4',
      'seventh-page': '#155058',
      'eigth-page': '#13575F',
      'ninth-page': '#3D3C3C',
      'tenth-page': '#A44243',
      'eleventh-page': '#6F9AAA',
      'custom-gray': '#959495',
      },
      fontFamily:{
        headings:[
          'Hill',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen-Sans',
          'Ubuntu',
          'Cantarell',
          '"Helvetica Neue"',
          'sans-serif'
        ],
        body:[
          'Hill',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen-Sans',
          'Ubuntu',
          'Cantarell',
          '"Helvetica Neue"',
          'sans-serif'
        ]
      }
    },
  },
  plugins: [],
}