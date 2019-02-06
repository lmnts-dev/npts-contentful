import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import config from '../utils/siteConfig'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import { P, HeaderText } from '../components/Headings'
import Fade from 'react-reveal/Fade'
import { Wrapper } from '../components/Block'
import TestimonialSlider from '../components/TestimonialSlider'
import Summary from '../components/Summary'

const Block = styled(Wrapper)`
  padding: 12vw 10vw;
  @media ( max-width: 900px){
    padding: 200px 10vw 150px 10vw;
  }
  @media ( max-width: 600px){
    padding: 200px 25px 150px 25px;
  }
`

const Success = ({ data } ) => {
  const postNode = {
    title: `${config.siteTitle}`,
  }
  const testimonials = data.allContentfulTestimonial.edges
  const summary = data.allContentfulSummary.edges[0].node
  const identity = data.allContentfulIdentity.edges[0].node
  return (
    <Layout dark>
      <Helmet>
        <title>{`${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="success" customTitle />

      <Block bgColor="#FFFFFF">
        <HeaderText size="100" color="#9F4300" align="center" weight="700" >
          Got it, thanks!
        </HeaderText>
      </Block>
      <Fade duration={2000}>
          <TestimonialSlider data={testimonials} />
      </Fade>
      <Fade duration={2000}>
        <Summary
          noLeaf
          bgColor="#394343"
          header={identity.headerText}
          text={identity.paragraphText.childMarkdownRemark.html}
          bText={identity.buttonText}
          dest={'/' + identity.buttonDestination}
        />
      </Fade>
      <Fade duration={2000}>
        <Summary
          hideButton
          bgColor="#9F4300"
          subhead={summary.subHeaderText}
          header={summary.headerText}
          text={summary.paragraphText.childMarkdownRemark.html}
          bText={summary.buttonText}
          dest={'/' + summary.buttonDestination}
        />
      </Fade>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulIdentity(limit: 10, skip: 0) {
      edges {
        node {
          headerText
          buttonText
          buttonDestination
          paragraphText {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 320)
            }
          }
        }
      }
    }
    allContentfulSummary {
      edges {
        node {
          headerText
          subHeaderText
          buttonText
          buttonDestination
          paragraphText {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 320)
            }
          }
        }
      }
    }
    allContentfulTestimonial {
      edges {
        node {
          firstName
          lastInitial
          city
          state
          customerReview {
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

export default Success
