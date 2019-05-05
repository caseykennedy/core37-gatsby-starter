interface ThemeShape {
  breakpoints: string[]
  fontSizes: string[]
  colors: {
    [key: string]: string
  }
  space: string[]
  fonts: {
    [key: string]: string
  }
  Heading: {
    [key: string]: string
  }
  fontWeights: {
    [key: string]: number
  }
  sidebarWidth: {
    [key: string]: string
  }
}

const theme: ThemeShape = {
  breakpoints: ['320px', '464px', '1024px', '1367px', '1440px'],
  fontSizes: ['0.7rem', '0.9rem', '1rem', '1.4rem', '1.8rem', '2rem', '3rem', '4rem'],
  colors: {
    body:             '#ebebeb',
    primary:          '#CEB9A1',
    secondary:        '#CEB9A1',
    accent:           '#CEB9A1',
    black:            'black',
    white:            'white',
    grey:             '#58545a',
    shade:            '#f5f5f5',
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
    '7rem',
  ],
  fonts: {
    Aeonik: '"Aeonik", sans-serif',
  },
  Heading: {
    fontWeight: '400'
  },
  fontWeights: {
    normal: 400,
  },
  sidebarWidth: {
    big: '375px',
    normal: '320px',
  },
}

export default theme
