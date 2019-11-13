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
      <Box as="header" bg="background" py={[1, 2, 2]}>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          px={[2, 3, 4]}
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
    text-decoration: none;
    font-size: 1.1rem;
    line-height: 1;
    margin-left: 1rem;

    &:hover,
    &:focus,
    &.nav--active {
      color: ${props => props.theme.colors.primary};
    }

    @media (min-width: ${props => props.theme.breakpoints[1]}) {
      font-size: 1.3rem;
    }
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
