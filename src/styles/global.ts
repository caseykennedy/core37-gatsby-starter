// Global styles

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import { createGlobalStyle } from 'styled-components'

import RootVariables from './root'
import Reset from './reset'
import Typography from './typography'

import theme from '../../config/theme'

// Aeonik Regular
import AeonikRegularEot from './fonts/AeonikRegular.eot'
import AeonikRegularWoff2 from './fonts/AeonikRegular.woff2'
import AeonikRegularWoff from './fonts/AeonikRegular.woff'
import AeonikRegularOtf from './fonts/AeonikRegular.otf'

const GlobalStyles = createGlobalStyle`
  ${RootVariables}
  ${Reset}
  ${Typography}
`

export default GlobalStyles
