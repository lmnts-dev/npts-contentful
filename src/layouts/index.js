import React from 'react'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import config from '../utils/siteConfig'
import Transition from '../components/Transition'
import faviconApple from '../images/apple-touch-icon.png'
import favicon32 from '../images/favicon-32x32.png'
import favicon16 from '../images/favicon-16x16.png'
import faviconSafari from '../images/safari-pinned-tab.svg'
import favicon from '../images/favicon.ico'
import opengraph from '../images/opengraph.jpg'
import ReactGA from 'react-ga';

const Layout = ({ children, location }) => (
  <>
    <Helmet>

      <title>{config.siteTitle}</title>
      <meta charSet="utf-8" />
      <meta name='description' content='Dedicated to handling all your tree care needs, our experienced and knowledgeable team of arborists are committed to ensure the longevity of all your trees and shrubs.'/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel='canonical' href='https://www.noahsparktreecare.com' />
      <link rel='alternate' href='noahsparktreecare.com' hrefLang='en' />
      <link rel="apple-touch-icon" sizes="180x180" href={faviconApple} />
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
      <link rel="mask-icon" href={faviconSafari}  color="#9dd5ea" />
      <link rel="shortcut icon" href={favicon} />
      <meta name="msapplication-TileColor" content="#00aba9" />
      <meta name="theme-col</meta>or" content="#ffffff" />
      <meta property="og:type" content="business.business" />
      <meta property="og:title" content="Noah's Park Tree Care" />
      <meta property="og:url" content="noahsparktreecare.com" />
      <meta property="og:image" content={opengraph} />
      <meta property="business:contact_data:locality" content="Reno" />
      <meta property="business:contact_data:region" content="Nevada" />
      <meta property="business:contact_data:postal_code" content="89509" />
      <meta property="business:contact_data:country_name" content="United States" />
      <meta name="google-site-verification" content="cF_jFvHTL4hKRsCijexqN6fKe3MJ4lSuFWhck5kEtWQ" />
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
