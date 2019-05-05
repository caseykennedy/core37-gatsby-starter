import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { animated, useSpring, config } from 'react-spring'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

import { Text } from 'rebass'
import { AnimatedBox } from '../elements'
import Article from '../components/Article'

interface Props {}

const Index: React.FunctionComponent<Props> = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 }
  })
  return (
    <Layout>
      <SEO />
      <AnimatedBox style={pageAnimation}>
        <Article py={140}>
          <Text fontSize={7}>core37 Gatsby Starter</Text>
        </Article>
      </AnimatedBox>
    </Layout>
  )
}

export default Index
