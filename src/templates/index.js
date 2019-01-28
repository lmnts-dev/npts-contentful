import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import HeroSlider from '../components/HeroSlider'
import IntroBlocks from '../components/IntroBlocks'
import Services from '../components/ServicesSection'
import Summary from '../components/Summary'
import Container from '../components/Container'
import Layout from '../components/Layout'
import TestimonialSlider from '../components/TestimonialSlider'
import SEO from '../components/SEO'
import Video from '../components/Video'
import { graphql } from 'gatsby'
import Fade from 'react-reveal/Fade'

const Index = ({ data, location }) => {
  const postNode = {
    title: `Home - ${config.siteTitle}`,
  }
  const summary = data.allContentfulSummary.edges[0].node
  const services = data.allContentfulService
  const testimonials = data.allContentfulTestimonial.edges
  const introBlocks = data.allContentfulIntroduction
  const slider = data.allContentfulSlider.edges[0].node

  return (
    <Layout location={location}>
      <Helmet>
        <title>{`Contact - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />
      <Container>
        <HeroSlider data={slider} />
        <Fade duration={2000}>
          <IntroBlocks data={introBlocks} />
        </Fade>
        <Fade duration={2000}>
          <Video />
        </Fade>
        <Fade duration={2000}>
          <TestimonialSlider data={testimonials} />
        </Fade>
        <Services data={services} />
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
      </Container>
    </Layout>
  )
}

// GATSBY BUILD ERROR BELOW
export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulService(limit: $limit, skip: $skip) {
      edges {
        node {
          name
          slug
          image {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
            ogimg: resize(width: 1800) {
              src
              width
              height
            }
          }
          shortSummary {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 320)
            }
          }
          fullDescription {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 320)
            }
          }
        }
      }
    }
    allContentfulTestimonial(limit: $limit, skip: $skip) {
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
    allContentfulIntroduction(limit: $limit, skip: $skip) {
      edges {
        node {
          headerText1
          headerText2
          paragraphText1 {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 320)
            }
          }
          paragraphText2 {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 320)
            }
          }
          mainImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
            ogimg: resize(width: 1800) {
              src
              width
              height
            }
          }
          buttonText1
          buttonText2
          buttonDestination1
          buttonDestination2
        }
      }
    }
    allContentfulSlider(limit: $limit, skip: $skip) {
      edges {
        node {
          header
          paragraphText {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 320)
            }
          }
          disclaimerText {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 320)
            }
          }
          sliderImages {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
            ogimg: resize(width: 1800) {
              src
              width
              height
            }
          }
          buttonText
          buttonDestination
        }
      }
    }
    allContentfulIdentity(limit: $limit, skip: $skip) {
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
    allContentfulSummary(limit: 10, skip: 0) {
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
  }
`

export default Index

// export default props => (
//   <Layout location={props.location}>
//     <Index />
//   </Layout>
// )
