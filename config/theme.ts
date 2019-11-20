// Theme / Design system:

// Types
//////////////////////////////////////////////////////////////////////

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
  root: {
    font: {
      [key: string]: string
    }
  }
}

// Begin theme
//////////////////////////////////////////////////////////////////////

const breakpoints: string[] = ['376px', '769px', '1025px']
// aliases - FUTURE ENHANCEMENT
// breakpoints.xs = breakpoints[0];
// breakpoints.sm = breakpoints[1];
// breakpoints.md = breakpoints[2];
// breakpoints.lg = breakpoints[3];

const theme: ThemeShape = {
  // Breakpoints
  ////////////////////////////////////////////////////////////////////

  breakpoints,
  mediaQueries: {
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    medium: `@media screen and (min-width: ${breakpoints[1]})`,
    large: `@media screen and (min-width: ${breakpoints[2]})`
  },

  // Color palette
  ////////////////////////////////////////////////////////////////////

  colors: {
    body: '#ebebeb',
    text: 'hsl(10, 20%, 20%)',
    background: 'hsl(10, 10%, 98%)',
    primary: 'hsl(10, 80%, 50%)',
    secondary: 'hsl(10, 60%, 50%)',
    highlight: 'hsl(10, 40%, 90%)',
    accent: 'hsl(250, 60%, 30%)',
    muted: 'hsl(10, 20%, 94%)',
    gray: 'hsl(10, 20%, 50%)'
  },

  // Space
  ////////////////////////////////////////////////////////////////////

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

  // Typography
  ////////////////////////////////////////////////////////////////////

  fonts: {
    body: `"Aeonik", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    heading: `"inherit", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    code: `"Menlo", Consolas, "Liberation Mono", Menlo, Courier, monospace`
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
    normal: 400,
  },

  // Base
  ////////////////////////////////////////////////////////////////////

  maxWidth: 1680,

  transition: {
    string: 'all 0.37s ease'
  },

  root: {
    font: {
      // Base sizing
      baseSize: 'var(--text-base-size)',
      scaleRatio: 'var(--text-scale-ratio)',
      baseLetterSpacing: 'var(--text-base-letter-spacing)',
  
      // Type scale
      xs: 'var(--text-xs)',
      sm: 'var(--text-sm)',
      md: 'var(--text-md)',
      lg: 'var(--text-lg)',
      xl: 'var(--text-xl)',
      xxl: 'var(--text-xxl)',
      xxxl: 'var(--text-xxxl)',
  
      // Line height
      headingLineHeight: 'var(--heading-line-height)',
      bodyLineHeight: 'var(--body-line-height)'
    }
  }
}

export default theme

// End component
//////////////////////////////////////////////////////////////////////
