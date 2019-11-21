// Elements:
// Box and Flex layout components using Styled System

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

// Tools
import Headroom from 'react-headroom'
// import { readableColor } from 'polished'

// Elements
import { Box, Flex } from '../../elements'

// Config
import theme from '../../../config/theme'

// Begin Component
//////////////////////////////////////////////////////////////////////

interface Props {
  title: string
}

interface QueryResult {
  navigation: {
    edges: {
      node: {
        name: string
        link: string
      }
    }[]
  }
}

const Header: React.SFC<Props> = ({ title }) => {
  const data: QueryResult = useStaticQuery(query)
  return (
    <Headroom
      onPin={() => console.log('pinned')}
      onUnpin={() => console.log('unpinned')}
    >
      <Box as="header" py={[1, 2, 3]}>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          px={theme.gutter}
          m="0 auto"
          maxWidth={theme.maxWidth}
        >
          <Box>
            <Link to="/">{title}</Link>
          </Box>
          <Nav>
            {data.navigation.edges.map(({ node: item }) => (
              <Link
                to={item.link}
                key={item.name}
                activeClassName="nav--active"
              >
                {item.name}
              </Link>
            ))}
          </Nav>
        </Flex>
      </Box>
    </Headroom>
  )
}

const Nav = styled.nav`
  a {
    color: ${theme.colors.shades[1]};
    text-decoration: none;
    line-height: 1;
    margin-left: 1rem;

    &:hover,
    &:focus,
    &.nav--active {
      color: ${theme.colors.text};
    }

    /* ${theme.mq.medium} {
      font-size: ${theme.fontSizes[5]};
    } */
  }
`

export default Header

const query = graphql`
  query LayoutQuery {
    navigation: allNavigationYaml {
      edges {
        node {
          name
          link
        }
      }
    }
  }
`

// const isPartiallyActive = ({
//   isPartiallyCurrent
// }: {
//   isPartiallyCurrent: boolean
// }) => {
//   return isPartiallyCurrent
//     ? { className: 'navlink-active navlink' }
//     : { className: 'navlink' }
// }

// const PartialNavLink = (props: any) => (
//   <Link getProps={isPartiallyActive} {...props}>
//     {props.children}
//   </Link>
// )
