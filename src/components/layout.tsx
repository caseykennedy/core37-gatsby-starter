import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import { readableColor } from 'polished'
import 'typeface-work-sans'
import theme from '../../config/theme'
import GlobalStyles from '../styles/global'

import Header from './Header'
import Footer from './Footer'
import { Box } from '../elements'

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

type LayoutProps = { children: React.ReactNode } & typeof defaultProps

// interface RenderData {
//   site: {
//     siteMetadata: {
//       title: string
//       description: string
//     }
//   }
// }

const defaultProps = {
  color: 'white'
}

const Layout = ({ children, color }: LayoutProps) => {
  const { title }: {title: string} = useSiteMetadata()
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Box>
          <Header title={title}/>
          <Box as='main'>{children}</Box>
          <Footer />
        </Box>
      </>
    </ThemeProvider>
  )
}

export default Layout

Layout.defaultProps = defaultProps


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
