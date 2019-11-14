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
import { AnimatedBox, Box, Flex, Heading } from '../elements'
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
        <Section bg="primary" color="white" pt={10} pb={10}>
          <Box width={[1, 1, 1 / 2]}>
            <Heading as="h1" color="accent">
              core37 °°
            </Heading>
            <p>
              Alright, alright, okay McFly, get a grip on yourself. It's all a
              dream. Just a very intense dream. Woh, hey, listen, you gotta help
              me. You'll find out. Yeah, exactly. He's a peeping tom. Dad. Let's
              get you into a radiation suit, we must prepare to reload.
            </p>
          </Box>
        </Section>
        <Section bg="white" color="black">
          <Box width={[1, 1, 1 / 2]}>
            <h3>Einstein, is he with you?</h3>
            <p>
              Anyway, Grandpa hit him with the car and brought him into the
              house. He seemed so helpless, like a little lost puppy, my heart
              just went out for him.
            </p>
            <p>
              Right, I got it. I know, and all I could say is I'm sorry. What?
              Cause, George, she wants to go to the dance with you, she just
              doesn't know it yet. That's why we got to show her that you,
              George McFly, are a fighter. You're somebody who's gonna stand up
              for yourself, someone who's gonna protect her.
            </p>
          </Box>
        </Section>
        <Flex flexWrap="wrap">
          <Box width={[1, 1, 1 / 2]} p={5} bg="highlight">
            <h3>Einstein, is he with you?</h3>
            <p>
              Anyway, Grandpa hit him with the car and brought him into the
              house. He seemed so helpless, like a little lost puppy, my heart
              just went out for him.
            </p>
          </Box>
          <Box width={[1, 1, 1 / 2]} p={5} bg="text" color="body">
            <h3>Einstein, is he with you?</h3>
            <p>
              Anyway, Grandpa hit him with the car and brought him into the
              house. He seemed so helpless, like a little lost puppy, my heart
              just went out for him.
            </p>
          </Box>
        </Flex>
        <Divider bg={['primary', 'secondary', 'accent']} py={'40vh'} />
      </AnimatedBox>
    </Layout>
  )
}

export default IndexPage
