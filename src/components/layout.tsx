// Elements:
// Box and Flex layout components using Styled System

// Imports
//////////////////////////////////////////////////////////////////////

// Core
import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import { readableColor } from 'polished'
import 'typeface-work-sans'
import theme from '../../config/theme'
import GlobalStyles from '../styles/global'

// Componentns
import Header from './Header'
import Footer from './Footer'

// Elements
import { Box } from '../elements'

// Begin Component
//////////////////////////////////////////////////////////////////////

// interface RenderData {
//   site: {
//     siteMetadata: {
//       title: string
//       description: string
//     }
//   }
// }

type LayoutProps = {
  children: React.ReactNode
  color: string
}

const Layout = ({ children, color }: LayoutProps) => {
  const { title }: { title: string } = useSiteMetadata()
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Box>
          <Header title={title} />
          <Box as="main" color={color}>
            {children}
          </Box>
          <Footer />
        </Box>
      </>
    </ThemeProvider>
  )
}

export default Layout

Layout.defaultProps = {
  color: 'black'
}

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return site.siteMetadata
}

//////////////////////////////////////////////////////////////////////
// End Component

// const Footer = styled.footer<{ color: string }>`
//   position: fixed;
//   width: ${props => props.theme.sidebarWidth.big};
//   bottom: 0;

//   background: ${props => props.color};

//   color: ${props => readableColor(`${props.color}`, `${props.theme.colors.grey}`, '#c3c3c3')};

//   a {
//     color: ${props => readableColor(`${props.color}`)};
//     text-decoration: none;
//     &:hover {
//       color: ${props => props.theme.colors.primary};
//     }
//   }

//   @media (max-width: ${props => props.theme.breakpoints[4]}) {
//     width: ${props => props.theme.sidebarWidth.normal};
//   }

//   @media (max-width: ${props => props.theme.breakpoints[2]}) {
//     position: relative;
//     width: 100%;
//   }
// `

// const Wrapper = styled.div`
//   display: grid;
//   grid-template-columns: ${props => props.theme.sidebarWidth.big} 1fr;
//   @media (max-width: ${props => props.theme.breakpoints[4]}) {
//     grid-template-columns: ${props => props.theme.sidebarWidth.normal} 1fr;
//   }

//   @media (max-width: ${props => props.theme.breakpoints[2]}) {
//     grid-template-columns: 1fr;
//   }
// `

// const Main = styled.main`
//   @media (min-width: calc(${props => props.theme.breakpoints[2]} + 1px)) {
//     grid-column-start: 2;
//   }
// `
