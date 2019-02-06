import React from 'react'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.ico'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import config from '../utils/siteConfig'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

class Layout extends React.Component {

  render() {
    const { children } = this.props
    
    return (
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
          <div>
            <Menu id="navBar" shadow={this.props.shadow} dark={this.props.dark}/>
            
            
            {children}

            {this.props.altFooter? (
              <Footer alt />
                ) : (
              <Footer />
            )}
          </div>
        </ThemeProvider>
        <GlobalStyle />
      </>
    )
  }
}

export default Layout
