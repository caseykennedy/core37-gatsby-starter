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

const Section: React.SFC<Props> = ({
  children,
  bg,
  color,
  pt,
  pb
}) => (
  <Flex
    as="section"
    justifyContent="flex-start"
    alignItems="center"
    bg={bg}
    color={color}
    pt={pt}
    pb={pb}
  >
    <Box width={1} maxWidth={theme.maxWidth} px={[2, 3, 4]} m="0 auto">
      {children}
    </Box>
  </Flex>
)

Section.defaultProps = {
  bg: '',
  color: '',
  pt: [3, 5, 7],
  pb: [3, 5, 7]
}

// const PageWidth = styled(Box)`
//   width: ${p => p.pageWidth}px;
//   /* margin: 0 auto; */
// `

export default Section
