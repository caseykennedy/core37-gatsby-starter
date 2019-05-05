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
  html {
    box-sizing: border-box;
    border: 0;
    margin: 0;
    font-size: 20px;
    
    h1, h2, h3, h4, h5, h6 {
      font-weight: ${theme.fontWeights.normal};
      margin: 0;
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
    
    @media (max-width: 600px) {
      /* font-size: 16px; */
      
      h1 {
        font-size: ${theme.fontSizes[4]};
      }
      h2 {
        font-size: ${theme.fontSizes[3]};
      }
      h3 {
        font-size: ${theme.fontSizes[2]};
      }
      h4 {
        font-size: ${theme.fontSizes[1]};
      }
      h5 {
        font-size: ${theme.fontSizes[0]};
      }
      h6 {
        font-size: ${theme.fontSizes[0]};
      }
    }
  }
  body {
    border: 0;
    margin: 0;
    padding: 0;
    color: black;
    font-family: 'Aeonik', '-apple-system', 'Roboto', 'Helvetica', 'Arial', sans-serif;
    background: ${theme.colors.body};
  }
  a {
    transition: all 0.137s;
    color: black;
    text-decoration: underline;
    &:hover,
    &:focus {
      color: ${theme.colors.primary};
    }
  }
  
  ${reset}
`

export default GlobalStyles
