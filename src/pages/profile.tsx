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
      <SEO
        title='Profile | Casey Kennedy'
        desc='Welcome to my site, bitches.'
      />
      <AnimatedBox style={pageAnimation}>
        <Article py={140}>
          <h1>Hi. I'm Casey Kennedy!</h1>
          <p>
            You can visit my <a href='https://www.lekoarts.de/en'>website</a> or
            my other{' '}
            <a href='https://gatsby-starter-portfolio.netlify.com'>
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
