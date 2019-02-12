import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
import { HeaderText } from '../components/Headings'
import Fade from 'react-reveal/Fade'
import { HeaderBlock } from '../components/Block'
import CareersForm from '../components/CareersForm'
import ScrollWrapper from '../components/ScrollWrapper'

class Apply extends React.Component {
  render () {
    const postNode = {
      title: `Apply - ${config.siteTitle}`,
    }
    return (
      <ScrollWrapper darkNav>
        <Helmet>
          <title>{`Apply - ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postNode={postNode} pagePath="contact" customTitle />
  
        <Fade duration={2000}>
          <HeaderBlock bgColor="#25503B">
            <HeaderText as="h3" size="38" weight="700" color="#FFFFFF">
              Work with us
            </HeaderText>
            <HeaderText
              as="h1"
              padding="1vw 0 0 0"
              size="100"
              weight="700"
              color="#FFFFFF"
            >
              Apply
            </HeaderText>
          </HeaderBlock>
        </Fade>
        <Fade duration={2000}>
          <CareersForm />
        </Fade>
        <Footer />
      </ScrollWrapper>
    )
  }
}

export default Apply
