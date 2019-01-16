import React from 'react'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.ico'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import config from '../utils/siteConfig'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const Template = ({ children }) => {
  return <div className="siteRoot">
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500|Tinos" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      </Helmet>

      <ThemeProvider theme={theme}>
        <>
          <div className="siteContent">
            <Menu />
              {children}
            <Footer />
          </div>
          
        </>
      </ThemeProvider>
      <GlobalStyle />
    </div>
}

export default Template

