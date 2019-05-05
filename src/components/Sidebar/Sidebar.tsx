import * as React from 'react'
import styled from 'styled-components'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { readableColor } from 'polished'
import { Box, Flex } from '../../elements'
import Logo from '../logo'
import Layout from '../Layout'

const isPartiallyActive = ({
  isPartiallyCurrent
}: {
  isPartiallyCurrent: boolean
}) => {
  return isPartiallyCurrent
    ? { className: 'navlink-active navlink' }
    : { className: 'navlink' }
}

const PartialNavLink = (props: any) => (
  <Link getProps={isPartiallyActive} {...props}>
    {props.children}
  </Link>
)

const SidebarInner = styled(Box)<{ bg: string }>`
  position: fixed;
  height: 100%;
  width: ${props => props.theme.sidebarWidth.big};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  background: ${props => props.bg};

  @media (max-width: ${props => props.theme.breakpoints[4]}) {
    width: ${props => props.theme.sidebarWidth.normal};
  }

  @media (max-width: ${props => props.theme.breakpoints[2]}) {
    position: relative;
    width: 100%;
  }

  svg {
    fill: ${props => readableColor(`${props.bg}`)};
  }
`

const Nav = styled(Flex)<{ color: string }>`
  a {
    text-decoration: none;
    color: ${props => readableColor(`${props.color}`)};
    font-size: ${props => props.theme.fontSizes[3]};
    line-height: 1.5;
    &:hover,
    &:focus,
    &.navlink-active {
      color: ${props => props.theme.colors.primary};
    }

    @media (max-width: ${props => props.theme.breakpoints[2]}) {
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
    }
  }
`

const defaultProps = {
  color: 'white',
}

interface Props {
  color: string
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

const Sidebar: React.SFC<Props> = ({ color }) => {
  const data: QueryResult = useStaticQuery(query)
  return (
    <SidebarInner bg={color} as='aside' p={[6, 6, 8]}>
      <Flex
        flexWrap='nowrap'
        flexDirection={['row', 'row', 'row', 'column']}
        alignItems={['center', 'center', 'center', 'flex-start']}
        justifyContent='space-between'
      >
        <Box width={['3rem', '4rem', '5rem', '6rem']}>
          <Link to='/' aria-label='LekoArts, Back to Home'>
            <Logo />
          </Link>
        </Box>
        <Nav
          color={color}
          mt={[0, 0, 0, 10]}
          as='nav'
          flexWrap='nowrap'
          flexDirection={['row', 'row', 'row', 'column']}
          alignItems='flex-start'
        >
          {data.navigation.edges.map(({ node: item }) => (
            <PartialNavLink to={item.link} key={item.name}>
              {item.name}
            </PartialNavLink>
          ))}
        </Nav>
      </Flex>
    </SidebarInner>
  )
}

export default Sidebar

Layout.defaultProps = defaultProps

// const query = graphql`
//   query LayoutQuery {
//     navigation: allNavigationYaml {
//       edges {
//         node {
//           name
//           link
//         }
//       }
//     }
//   }
// `
