// Section:
// Box and Flex layout components using Styled System

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import * as React from 'react'
import styled from 'styled-components'
import { readableColor } from 'polished'

// Components
import Logo from '../Logo'

// Elements
import { Box, Flex, Text } from '../../elements'
import Section from '../../elements/Section'

// Config
import theme from '../../../config/theme'

// Begin Component
//////////////////////////////////////////////////////////////////////

interface Props {}

const Footer: React.SFC<Props> = () => {
  return (
    <Box as="footer" width={1} pt={1} pb={1}>
      <Flex flexWrap="wrap" width={1} px={[3, 4, 5]} m="0 auto">
        <Text>&copy; 2019</Text>
      </Flex>
    </Box>
  )
}

export default Footer
