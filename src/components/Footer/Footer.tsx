import * as React from 'react'
import styled from 'styled-components'
import { Flex } from 'rebass'
import { readableColor } from 'polished'

import Logo from '../logo'

interface Props {}

const Footer: React.SFC<Props> = () => {
  return (
    <Flex as='footer' px={[1, 2, 2, 3, 3]} py={[0, 1, 2, 2, 3]}>
      <p>&copy; 2019</p>
    </Flex>
  )
}

export default Footer
