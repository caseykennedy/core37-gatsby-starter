import React from 'react'
import Layout from '../components/Layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'
import { config, useSpring } from 'react-spring'
import Article from '../components/Article'

const Profile = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 }
  })

  return (
    <Layout>
      <SEO title='core37 Gatsby Starter' />
      <AnimatedBox style={pageAnimation}>
        <Article py={140}>
          <h2>My approach</h2>
          <p>
            You can visit my <a href='https://www.caseykennedy.me'>website</a> or
            my other{' '}
            <a href='#'>
              Gatsby projects
            </a>
            .
          </p>
        </Article>
      </AnimatedBox>
    </Layout>
  )
}

export default Profile