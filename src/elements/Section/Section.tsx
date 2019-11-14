// Section:
// Box and Flex layout components using Styled System

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import * as React from 'react'
import { Box, Flex } from '../'
import styled from 'styled-components'

// Config
import theme from '../../../config/theme'

// Begin Component
//////////////////////////////////////////////////////////////////////

// Types

interface Props {
  bg: string
  color?: string
  pt?: any
  pb?: any
}

const Section: React.SFC<Props> = ({ children, bg, color, pt, pb }) => (
  <Box as="section" width={1} bg={bg} color={color} pt={pt} pb={pb}>
    <Flex
      flexWrap="wrap"
      width={1}
      maxWidth={theme.maxWidth}
      px={[2, 3, 4]}
      m="0 auto"
    >
      {children}
    </Flex>
  </Box>
)

Section.defaultProps = {
  bg: '',
  color: '',
  pt: [2, 4, 5],
  pb: [2, 4, 5]
}

// const PageWidth = styled(Box)`
//   width: ${p => p.pageWidth}px;
//   /* margin: 0 auto; */
// `

export default Section
