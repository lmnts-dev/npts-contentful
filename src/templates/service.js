import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Button from '../components/Button'
import Summary from '../components/Summary'
import { Wrapper, HeaderBlock } from '../components/Block'
import styled from 'styled-components'
import { PLarge, HeaderText } from '../components/Headings'
import FirewoodBlock from '../components/FirewoodBlock'
import Fade from 'react-reveal/Fade'

const Block = styled(Wrapper)`
  padding: 160px 300px;
  @media (max-width: 2000px) {
    padding: 8vw 15vw;
  }
  @media (max-width: 500px) {
    padding: 10vw 10vw;
  }
`

const ServiceTemplate = ({ data, pageContext, location }) => {
  console.log('dog')
  console.log(data)
  const { name, fullDescription } = data.contentfulService
  const firewood = data.allContentfulFirewood.edges[0].node
  const summary = data.allContentfulSummary.edges[0].node

  return (
    <Layout location={location}>
      <Helmet>
        <title>{`${name} - ${config.siteTitle}`}</title>
      </Helmet>

      <Container>
        <Fade duration={2000}>
          <HeaderBlock bgColor="#9F4300">
            <HeaderText size="38" weight="700" color="#FFFFFF">
              Tree care services
            </HeaderText>
            <HeaderText size="100" weight="700" color="#FFFFFF">
              {name}
            </HeaderText>
          </HeaderBlock>
        </Fade>
        <Fade duration={2000}>
          <Block bgColor="#FFFFFF">
            <HeaderText size="72" color="#293536" weight="700">
              {name}
            </HeaderText>
            <PLarge
              color="#293536"
              dangerouslySetInnerHTML={{
                __html: fullDescription.childMarkdownRemark.html,
              }}
            />
            <Button to="/contact">Get a free quote</Button>
          </Block>
        </Fade>

        <Fade duration={2000}>
          <FirewoodBlock
            header={firewood.headerText}
            text={firewood.paragraphText.childMarkdownRemark.html}
          />
        </Fade>
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
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulService(slug: { eq: $slug }) {
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
    allContentfulFirewood(limit: 10, skip: 0) {
      edges {
        node {
          headerText
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

export default ServiceTemplate

/* FOR RICH TEXT 

    serviceContent {
      childContentfulRichText {
        html
      }
    }

*/
