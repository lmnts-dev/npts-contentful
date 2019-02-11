import React from 'react'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.ico'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import config from '../utils/siteConfig'
import Transition from '../components/transition'

const Layout = ({ children, location }) => (
  <>
    <Helmet>
      <title>{config.siteTitle}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={favicon} />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,700|Tinos:400,700"
        rel="stylesheet"
      />
    </Helmet>

    <ThemeProvider theme={theme}>
      <Transition location={location}>{children}</Transition>
    </ThemeProvider>
    <GlobalStyle />
  </>
)

export default Layout
