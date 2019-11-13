// Index page:
// This is the home page

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react'
import { animated, useSpring, config } from 'react-spring'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Divider from '../components/Divider'

// Elements
import { AnimatedBox, Box, Flex } from '../elements'
import Section from '../elements/Section'

// Config
import theme from '../../config/theme'

// Types
interface Props {}

const IndexPage: React.FunctionComponent<Props> = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 }
  })
  return (
    <Layout>
      <SEO />
      <AnimatedBox style={pageAnimation}>
        <Section bg="black" color="white" pt={10} pb={10}>
          <Box width={[1, 1, 1 / 2]}>
            <h2>Hero</h2>
            <p>
              Our working language is English, and you should strive to use it
              around the office, at lunch and in meetings as well to include
              everyone that doesn’t speak the local tongue.
            </p>
          </Box>
        </Section>
        <Section bg="white" color="black">
          <Box width={[1, 1, 1 / 2]}>
            <h3>Header</h3>
            <p>
              Our working language is English, and you should strive to use it
              around the office, at lunch and in meetings as well to include
              everyone that doesn’t speak the local tongue.
            </p>
          </Box>
        </Section>
        <Divider bg={['yellow', 'blue', 'orange']} py={60} />
      </AnimatedBox>
    </Layout>
  )
}

export default IndexPage
