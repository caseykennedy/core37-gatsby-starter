// Index page:
// This is the home page

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react'

// Libraries
import { animated, useSpring, config } from 'react-spring'
import { Grid, Cell } from 'styled-css-grid'

// Components
import Layout from '../components/Layout'
import Section from '../components/Section'
import SEO from '../components/SEO'
import Divider from '../components/Divider'

// Elements
import { AnimatedBox, Box, Heading } from '../elements'

// Constants
import theme from '../../config/theme'

// Begin
//////////////////////////////////////////////////////////////////////

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
        <Section pt={10} pb={10}>
          <Box width={[1, 1, 2 / 3]}>
            <Heading as="h1" fontSize={[2, 3, 4]} mb={0}>
              Drop the idea of becoming someone, because you are already a
              masterpiece. You cannot be improved. You have only to come to it,
              to know it, to realize it.
            </Heading>
          </Box>
        </Section>
        <Divider bg={['black', 'blue', 'magenta']} py={'3vh'} />
        <Box px={theme.gutter} py={4}>
          <Grid columns="repeat(auto-fit,minmax(120px,1fr))" gap="2rem">
            <Cell>
              <Box bg="black" py={10} />
            </Cell>
            <Cell>
              <Box bg="black" py={10} />
            </Cell>
            <Cell>
              <Box bg="black" py={10} />
            </Cell>
          </Grid>
        </Box>
        <Section>
          <Box width={[1, 1, 1 / 2]}>
            <h4>Think less, feel more.</h4>
            <p>
              Discover yourself, otherwise you have to depend on other people’s
              opinions who don’t know themselves.
            </p>
            <p>
              We buy things to please others. We even stay as a sheep and never
              answer the lion(ess) that lives within us. But when we give our
              power away, our greatness is lost. Self-awareness is important to
              know what you want to do. Vague vision brings vague results.
            </p>
          </Box>
        </Section>
        <Section>
          <Box width={1}>
            <h1>Think less, feel more.</h1>
            <h2>Think less, feel more.</h2>
            <h3>Think less, feel more.</h3>
            <h4>Think less, feel more.</h4>
          </Box>
        </Section>
        <Divider bg={['black', 'blue', 'magenta']} py={'10vh'} />
      </AnimatedBox>
    </Layout>
  )
}

export default IndexPage

//////////////////////////////////////////////////////////////////////
// End
