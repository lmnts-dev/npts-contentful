import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import config from '../utils/siteConfig'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import { H3, H1, H2, P, HeaderText } from '../components/Headings'
import Summary from '../components/Summary'
import TestimonialSlider from '../components/TestimonialSlider'
import Fade from 'react-reveal/Fade'
import { Wrapper, HeaderBlock, Block } from '../components/Block'
import { TwoColRowWrapper } from '../components/TwoColRow'
import  Column  from '../components/Column'
import Button from '../components/Button'

const Row = styled(TwoColRowWrapper)`
    div, h3 {
        flex: 1 !important;
    }
    h3 {
        margin-right: 5vw;
    }
`

const Positions = styled.div`
  .react-reveal:nth-child(even) {
    div {
      background-color: #e1f2f8 !important;
    }
  }
`

const Woodchips = ( {data } ) => {
    const summary = data.allContentfulSummary.edges[0].node
    const testimonials = data.allContentfulTestimonial.edges
  return (
    <Layout noFooter>
      <Helmet>
        <title>{`Contact - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO
        postNode="Let's Talk - Noah's Park Tree Care Service"
        pagePath="contact"
        customTitle
      />

      <Fade duration={2000}>
        <HeaderBlock bgColor="#9F4300">
          <HeaderText as="h3" size="38" weight="700" color="#FFFFFF">
            Handling to all your tree care needs
          </HeaderText>
          <HeaderText as="h1" size="100" weight="700" color="#FFFFFF">
            Our Work
          </HeaderText>
        </HeaderBlock>
      </Fade>
      <Fade duration={2000}>
        <TestimonialSlider data={testimonials} />
      </Fade>
      <Block bgColor="#394343">
        <HeaderText as="h2" size="100" weight="700" color="#FFFFFF">Featured Projects</HeaderText>

      </Block>
      <Fade duration={2000}>
          <Summary
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

export default Woodchips
