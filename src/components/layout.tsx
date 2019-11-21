// Layout:

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

// Begin
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
}

const Layout = ({ children }: LayoutProps) => {
  const { title }: { title: string } = useSiteMetadata()
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <>
          <Header title={title} />
          <main>
            {children}
          </main>
          <Footer />
        </>
      </>
    </ThemeProvider>
  )
}

export default Layout

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
// End
