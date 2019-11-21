// Approach page:

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import React from 'react'

// Libraries
import { config, useSpring } from 'react-spring'

// Components
import Section from '../components/Section'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

// Elements
import { AnimatedBox, Box, Heading } from '../elements'

// Begin
//////////////////////////////////////////////////////////////////////

const Profile = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 }
  })

  return (
    <Layout>
      <SEO title="core37 Gatsby Starter" />
      <AnimatedBox style={pageAnimation}>
        <Section>
          <Box>
            <h2>My approach</h2>
            <p>
              You can visit my <a href="https://www.caseykennedy.me">website</a>{' '}
              or my other <a href="#">Gatsby projects</a>.
            </p>
          </Box>
        </Section>
      </AnimatedBox>
    </Layout>
  )
}

export default Profile

//////////////////////////////////////////////////////////////////////
// End
