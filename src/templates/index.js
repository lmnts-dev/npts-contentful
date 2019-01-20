import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import HeroSlider from '../components/HeroSlider'
import IntroBlocks from '../components/IntroBlocks'
import Services from '../components/ServicesSection'
import Summary from '../components/Summary'
import Container from '../components/Container'
import SimpleSlider from '../components/TestimonialSlider'
import SEO from '../components/SEO'


const Home = ({ data }) => {
    const postNode = {
        title: `Home - ${config.siteTitle}`,
    }
    const summary = data.allContentfulSummary.edges[0].node
    const services = data.allContentfulService

    return (
        <>
            <Helmet>
                <title>{`Contact - ${config.siteTitle}`}</title>
            </Helmet>
            <SEO postNode={postNode} pagePath="contact" customTitle />

            <Container>
                <HeroSlider />
                <IntroBlocks />
                <SimpleSlider />
                <Services data={services}/>
                <Summary hideButton bgColor="#9F4300" subhead={summary.subHeaderText} header={summary.headerText} text={summary.paragraphText.childMarkdownRemark.html} bText={summary.buttonText} dest={"/" + summary.buttonDestination}/>
            </Container>
        </>
    )
}

export const query = graphql`
         query($skip: Int!, $limit: Int!) {
           allContentfulService(
            limit: $limit
            skip: $skip
            ) {
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
        allContentfulIdentity(
            limit: $limit
            skip: $skip
          ) {
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
          allContentfulSummary(
            limit: 10
            skip: 0
            ) {
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
       
export default Home