interface ThemeShape {
  breakpoints: string[]
  mediaQueries: {
    [key: string]: string
  }
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
  // textStyles: {
  //   [key: string]: {
  //     [key: string]: any
  //   }
  // }
  // styles: {
  //   [key: string]: {
  //     [key: string]: any
  //   }
  // }
}

const breakpoints = ['376px', '769px', '1025px']
// aliases - FUTURE ENHANCEMENT
// breakpoints.xs = breakpoints[0];
// breakpoints.sm = breakpoints[1];
// breakpoints.md = breakpoints[2];
// breakpoints.lg = breakpoints[3];

const theme: ThemeShape = {
  breakpoints,
  mediaQueries: {
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    medium: `@media screen and (min-width: ${breakpoints[1]})`,
    large: `@media screen and (min-width: ${breakpoints[2]})`
  },
  colors: {
    body: '#ebebeb',
    background: '#f5f5f5',
    primary: '#CEB9A1',
    secondary: '#CEB9A1',
    accent: '#CEB9A1',
    black: 'black',
    white: 'white',
    grey: '#58545a',
    shade: '#f5f5f5'
  },

  space: [
    '0',
    '0.25rem',
    '0.5rem',
    '1rem',
    '2rem',
    '3rem',
    '4rem',
    '5rem',
    '6rem',
    '7rem',
    '8rem'
  ],

  fonts: {
    body: '"Aeonik", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },

  fontSizes: [
    '0.618em',
    '11.089em',
    '6.854em',
    '4.236em',
    '2.618em',
    '1.618em',
    '0.618em',
    '1.25em',
    '1em'
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
  maxWidth: 1620,

  transition: {
    string: 'all 0.37s ease'
  }

  // textStyles: {
  //   display: {
  //     variant: 'textStyles.heading',
  //     fontSize: [5, 6],
  //     fontWeight: 'display',
  //     letterSpacing: '-0.03em',
  //     mt: 3,
  //   },
  // },

  // styles: {
  //   root: {
  //     fontFamily: 'body',
  //     lineHeight: 'body',
  //     fontWeight: 'body',
  //   },
  //   h1: {
  //     variant: 'textStyles.display',
  //     fontSize: 7,
  //   },
  //   h2: {
  //     variant: 'textStyles.heading',
  //     fontSize: 5,
  //   },
  //   h3: {
  //     variant: 'textStyles.heading',
  //     fontSize: 4,
  //   },
  //   h4: {
  //     variant: 'textStyles.heading',
  //     fontSize: 3,
  //   },
  //   h5: {
  //     variant: 'textStyles.heading',
  //     fontSize: 2,
  //   },
  //   h6: {
  //     variant: 'textStyles.heading',
  //     fontSize: 1,
  //   },
  //   a: {
  //     color: 'primary',
  //     '&:hover': {
  //       color: 'secondary',
  //     },
  //   },
  // },
}

export default theme
