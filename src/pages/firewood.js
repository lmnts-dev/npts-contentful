import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
import { HeaderText } from '../components/Headings'
import { graphql } from 'gatsby'
import Fade from 'react-reveal/Fade'
import { HeaderBlock } from '../components/Block'
import ApplyForm from '../components/ApplyForm'
import ScrollWrapper from '../components/ScrollWrapper'

const Firewood = ({ data }) => {
  const disclaimer =
    data.allContentfulFirewood.edges[0].node.firewoodDropDisclaimer
      .childMarkdownRemark.html
  const postNode = {
    title: `Free Firewood - ${config.siteTitle}`,
  }
  return (
    <ScrollWrapper>
      <Helmet>
        <title>{`Free Firewood - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />

      <Fade duration={2000}>
        <HeaderBlock bgColor="#65321F">
          <HeaderText as="h3" size="38" weight="700" color="#FFFFFF">
            Contact us
          </HeaderText>
          <HeaderText
            as="h1"
            padding="1vw 0 0 0"
            size="100"
            weight="700"
            color="#FFFFFF"
          >
            Apply for free firewood
          </HeaderText>
        </HeaderBlock>
      </Fade>
      <Fade duration={2000}>
        <ApplyForm type="Firewood" disclaimer={disclaimer} />
      </Fade>
      <Footer />
    </ScrollWrapper>
  )
}

export const query = graphql`
  query {
    allContentfulFirewood {
      edges {
        node {
          firewoodDropDisclaimer {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 320)
            }
          }
        }
      }
    }
  }
`

export default Firewood
