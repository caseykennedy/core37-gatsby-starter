import { createGlobalStyle } from 'styled-components'
import reset from './reset'
import theme from '../../config/theme'

// Aeonik Regular
import AeonikRegularEot from './fonts/AeonikRegular.eot'
import AeonikRegularWoff2 from './fonts/AeonikRegular.woff2'
import AeonikRegularWoff from './fonts/AeonikRegular.woff'
import AeonikRegularOtf from './fonts/AeonikRegular.otf'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Aeonik';
    src: url('${AeonikRegularEot}');
    src: url('${AeonikRegularWoff2}') format('woff2'),
        url('${AeonikRegularWoff}') format('woff'),
        url('${AeonikRegularOtf}') format('opentype'),
        url('${AeonikRegularEot}?#iefix') format('embedded-opentype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  ::selection {
    color: white;
    background-color: ${theme.colors.primary};
  }
  
  body {
    font-size: 14px;
    border: 0;
    margin: 0;
    padding: 0;
    color: black;
    font-family: 'Aeonik', '-apple-system', 'Roboto', 'Helvetica', 'Arial', sans-serif;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: geometricPrecision;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
    background: ${theme.colors.body};
  }

  html {
    box-sizing: border-box;
    border: 0;
    margin: 0;
  }

  /* Headings */
    
  h1, h2, h3, h4, h5, h6 {
    font-weight: ${theme.fontWeights.normal};
    line-height: 1;
    margin: ${theme.space[1]} 0 ${theme.space[2]};
    transition: ${theme.transition.string};
  }
  
  h1 {
    font-size: ${theme.fontSizes[5]};
  }
  h2 {
    font-size: ${theme.fontSizes[4]};
  }
  h3 {
    font-size: ${theme.fontSizes[3]};
  }
  h4 {
    font-size: ${theme.fontSizes[2]};
  }
  h5 {
    font-size: ${theme.fontSizes[1]};
  }
  h6 {
    font-size: ${theme.fontSizes[0]};
  }

  /* Paragraph */

  p {
    font-size: ${theme.fontSizes[0]};
    font-weight: ${theme.fontWeights.normal};
    line-height: 1.1;
    margin: ${theme.space[1]} 0 ${theme.space[3]};
    letter-spacing: 0.03rem;
  }

  a {
    transition: all 0.137s;
    color: black;
    text-decoration: underline;
    &:hover,
    &:focus {
      color: ${theme.colors.background};
    }
  }
  
  @media (min-width: 769px) {
    /* font-size: 16px; */

    body {
      font-size: 16px;
    }
    
    h1 {
      font-size: ${theme.fontSizes[7]};
    }
    h2 {
      font-size: ${theme.fontSizes[6]};
    }
    h3 {
      font-size: ${theme.fontSizes[5]};
    }
    h4 {
      font-size: ${theme.fontSizes[4]};
    }
    h5 {
      font-size: ${theme.fontSizes[3]};
    }
    h6 {
      font-size: ${theme.fontSizes[2]};
    }
    p {
      font-size: ${theme.fontSizes[0]};
    }
  }
  
  ${reset}
`

export default GlobalStyles
