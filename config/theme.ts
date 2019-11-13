interface ThemeShape {
  breakpoints: string[]
  colors: {
    [key: string]: string
  }
  space: string[]
  fonts: {
    [key: string]: string
  }
  fontSizes: string[]
  Heading: {
    [key: string]: string
  }
  fontWeights: {
    [key: string]: number
  }
  maxWidth: number
  transition: {
    [key: string]: string
  }
}

const theme: ThemeShape = {
  breakpoints: ['376px', '769px', '1025px'],
  // mediaQueries: {
  //   small: `@media screen and (min-width: ${breakpoints[0]})`,
  //   medium: `@media screen and (min-width: ${breakpoints[1]})`,
  //   large: `@media screen and (min-width: ${breakpoints[2]})`
  // },
  colors: {
    body: '#ebebeb',
    background: '#f5f5f5',
    primary: '#CEB9A1',
    secondary: '#CEB9A1',
    accent: '#CEB9A1',
    black: 'black',
    white: 'white',
    grey: '#58545a',
    shade: '#f5f5f5',
  },

  space: [
    '0',
    '0.5rem',
    '1rem',
    '1.5rem',
    '2rem',
    '2.5rem',
    '3rem',
    '4rem',
    '5rem',
    '6rem',
    '7rem'
  ],

  fonts: {
    body: '"Aeonik", sans-serif',
    header: '"Aeonik", sans-serif'
  },

  fontSizes: [
    '1.3rem',
    '1.6rem',
    '2rem',
    '2.6rem',
    '3rem',
    '4rem',
    '5rem',
    '6rem'
  ],

  Heading: {
    fontWeight: '400'
  },

  fontWeights: {
    body: 400,
    heading: 700,
    normal: 400,
    bold: 700
  },

  // Constants
  maxWidth: 1600,

  transition: {
    string: 'all 0.37s ease',
  }
}

export default theme
