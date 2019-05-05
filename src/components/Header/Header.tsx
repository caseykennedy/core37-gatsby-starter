import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
// import { readableColor } from 'polished'
import { Box, Flex } from '../../elements'

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
    <Flex
      as='header'
      bg=''
      alignItems='center'
      justifyContent='space-between'
      px={[1, 2, 2, 3, 3]}
      py={[0, 1, 2, 2, 3]}
    >
      <Box>
        <Link to='/'>{title}</Link>
      </Box>
      <Nav>
        {data.navigation.edges.map(({ node: item }) => (
          <Link to={item.link} key={item.name} activeClassName='nav--active'>
            {item.name}
          </Link>
        ))}
      </Nav>
    </Flex>
  )
}

const Nav = styled.nav`
  .nav--active {
    color: ${props => props.theme.colors.primary};
  }
  a {
    text-decoration: none;
    font-size: ${props => props.theme.fontSizes[1]};
    line-height: 1.5;
    padding-left: 1rem;
    &:hover,
    &:focus,
    &.navlink-active {
      color: ${props => props.theme.colors.primary};
    }
    /* @media (max-width: ${props => props.theme.breakpoints[2]}) {
      font-size: ${props => props.theme.fontSizes[2]};
      margin-left: ${props => props.theme.space[4]};
    }
    @media (max-width: ${props => props.theme.breakpoints[1]}) {
      font-size: ${props => props.theme.fontSizes[1]};
      margin-left: ${props => props.theme.space[3]};
    }
    @media (max-width: ${props => props.theme.breakpoints[0]}) {
      font-size: ${props => props.theme.fontSizes[0]};
      margin-left: ${props => props.theme.space[2]};
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