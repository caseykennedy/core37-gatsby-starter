// Home page

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
import ImgMatch from '../components/ImgMatch'

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
        <Section pt={7} pb={7}>
          <Box width={[1, 1, 2 / 3]}>
            <Heading as="h1" fontSize={[3, 4, 4]} mb={0}>
              Drop the idea of becomng someone, because you are already a
              masterpiece. You cannot be improved.
            </Heading>
          </Box>
        </Section>
        <Box as="section" px={theme.gutter} py={4}>
          <Grid columns="repeat(auto-fit,minmax(120px,1fr))" gap="2rem">
            <Cell>
              <Box bg="black">
                <ImgMatch
                  src="brutalism-a.jpg"
                  altText="PlayWell program state coordinator"
                />
              </Box>
            </Cell>
            <Cell>
              <Box bg="black">
                <ImgMatch
                  src="brutalism-c.jpg"
                  altText="PlayWell program state coordinator"
                />
              </Box>
            </Cell>
          </Grid>
        </Box>
        <Section>
          <Box width={[1, 1, 1 / 2]}>
            <h4>
              Discover yourself, otherwise you have to depend on other people’s
              opinions who don’t know themselves.
            </h4>
            <p>Vague vision brings vague results.</p>
          </Box>
        </Section>
        <Section bg={theme.colors.shades[5]}>
          <Box width={1} mt={-4}>
            <h1>Think less, feel more.</h1>
            <h2>Think less, feel more.</h2>
            <h3>Think less, feel more.</h3>
            <Heading as="h4" mb={0}>Think less, feel more.</Heading>
          </Box>
        </Section>
        <Divider bg={['magenta', 'blue', 'yellow']} py={'6vh'} />
      </AnimatedBox>
    </Layout>
  )
}

export default IndexPage

//////////////////////////////////////////////////////////////////////
// End
