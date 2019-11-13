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
import { AnimatedBox, Heading } from '../elements'
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
        <Section bg="black" color="white">
          {/* <Text fontSize={7}>core37 Gatsby Starter</Text> */}
          <h1>Header</h1>
          <h2>Header</h2>
          <h3>Header</h3>
          <h4>Header</h4>
          <h5>Header</h5>
          <h6>Header</h6>
          <p>What the heck man What the heck man What the heck man What the heck man What the heck man What the heck man What the heck man</p>
          <h1>Header</h1>
          <h2>Header</h2>
          <h3>Header</h3>
          <h4>Header</h4>
          <h5>Header</h5>
          <h6>Header</h6>
          <p>What the heck man What the heck man What the heck man What the heck man What the heck man What the heck man What the heck man</p>
          <h1>Header</h1>
          <h2>Header</h2>
          <h3>Header</h3>
          <h4>Header</h4>
          <h5>Header</h5>
          <h6>Header</h6>
          <p>What the heck man What the heck man What the heck man What the heck man What the heck man What the heck man What the heck man</p>
          <h1>Header</h1>
          <h2>Header</h2>
          <h3>Header</h3>
          <h4>Header</h4>
          <h5>Header</h5>
          <h6>Header</h6>
          <p>What the heck man What the heck man What the heck man What the heck man What the heck man What the heck man What the heck man</p>
        </Section>
        <Divider bg={['yellow', 'black', 'magenta']} py={60} />
      </AnimatedBox>
    </Layout>
  )
}

export default IndexPage
