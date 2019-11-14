import { createGlobalStyle } from 'styled-components'
import reset from './reset'
import theme from '../../config/theme'

// Aeonik Regular
import AeonikRegularEot from './fonts/AeonikRegular.eot'
import AeonikRegularWoff2 from './fonts/AeonikRegular.woff2'
import AeonikRegularWoff from './fonts/AeonikRegular.woff'
import AeonikRegularOtf from './fonts/AeonikRegular.otf'

const GlobalStyles = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'Aeonik';
    src: url(${AeonikRegularEot});
    src: url(${AeonikRegularWoff2}) format('woff2'),
        url(${AeonikRegularWoff}) format('woff'),
        url(${AeonikRegularOtf}) format('opentype'),
        url(${AeonikRegularEot}?#iefix) format('embedded-opentype');
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
  html {
    font-size: 16px;
    box-sizing: border-box;
    border: 0;
    margin: 0;
  }
  body {
    font-weight: ${theme.fontWeights.normal};
    line-height: 1.45;
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
  h1, h2, h3, h4, h5, h6 {
    font-weight: ${theme.fontWeights.normal};
    line-height: 1;
    letter-spacing: 0.5px;
    margin: 0 0 1.75rem;
    transition: ${theme.transition.string};
  }
  h1 {
    font-size: ${theme.fontSizes[2]};
    margin-top: 0;
  }
  h2 {
    font-size: ${theme.fontSizes[3]};
  }
  h3 {
    font-size: ${theme.fontSizes[4]};
  }
  h4 {
    font-size: ${theme.fontSizes[5]};
  }
  h5 {
    font-size: ${theme.fontSizes[6]};
  }
  h6 {
    font-size: ${theme.fontSizes[7]};
  }
  p {
    font-size: ${theme.fontSizes[8]};
    letter-spacing: 0.5px;
    margin-bottom: 1.25em;

    &:last-child {
      margin-bottom: 0;
    }
  }
  a {
    transition: ${theme.transition.string};
    color: black;
    text-decoration: underline;
    &:hover,
    &:focus {
      color: ${theme.colors.background};
    }
  }
  @media screen and (min-width: ${theme.breakpoints[1]}) {
    h1 {
      font-size: ${theme.fontSizes[1]};
    }
    h2 {
      font-size: ${theme.fontSizes[2]};
    }
    h3 {
      font-size: ${theme.fontSizes[3]};
    }
    h4 {
      font-size: ${theme.fontSizes[4]};
    }
    h5 {
      font-size: ${theme.fontSizes[5]};
    }
    h6 {
      font-size: ${theme.fontSizes[6]};
    }
    p {
      font-size: ${theme.fontSizes[7]};
    }
  }
`

export default GlobalStyles
