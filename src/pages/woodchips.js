import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import SEO from '../components/SEO'
import { HeaderText } from '../components/Headings'
import Fade from 'react-reveal/Fade'
import { HeaderBlock } from '../components/Block'
import ApplyForm from '../components/ApplyForm'
import Footer from '../components/Footer'
import { graphql } from 'gatsby'
import ScrollWrapper from '../components/ScrollWrapper'

const Woodchips = ({ data }) => {
  const disclaimer =
    data.allContentfulWoodchips.edges[0].node.woodchipsDropDisclaimer
      .childMarkdownRemark.html
  const postNode = {
    title: `Chip Drop - ${config.siteTitle}`,
  }
  return (
    <ScrollWrapper>
      <Helmet>
        <title>{`Chip Drop - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />

      <Fade duration={2000}>
        <HeaderBlock bgColor="#F2D9B5">
          <HeaderText as="h3" size="38" weight="700" color="#293536">
            Contact us
          </HeaderText>
          <HeaderText
            as="h1"
            padding="1vw 0 0 0"
            size="100"
            weight="700"
            color="#293536"
          >
            Apply for free Woodchips
          </HeaderText>
        </HeaderBlock>
      </Fade>
      <Fade duration={2000}>
        <ApplyForm type="Woodchips" disclaimer={disclaimer} />
      </Fade>
      <Footer />
    </ScrollWrapper>
  )
}

export const query = graphql`
  query {
    allContentfulWoodchips {
      edges {
        node {
          woodchipsDropDisclaimer {
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

export default Woodchips
