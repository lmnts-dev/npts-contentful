import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Footer from '../components/Footer'
import Container from '../components/Container'
import Button from '../components/Button'
import Summary from '../components/Summary'
import { Wrapper, HeaderBlock } from '../components/Block'
import styled from 'styled-components'
import { PLarge, HeaderText } from '../components/Headings'
import DropsBlock from '../components/DropsBlock'
import Fade from 'react-reveal/Fade'
import ScrollWrapper from '../components/ScrollWrapper'

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
  const { name, fullDescription } = data.contentfulService
  const drops = data.allContentfulDrops.edges[0].node
  const summary = data.allContentfulSummary.edges[0].node
  const color = pageContext.index

  return (
    <ScrollWrapper>
      <Helmet>
        <title>{`${name} - ${config.siteTitle}`}</title>
        <meta itemprop="name" content={name} />
      </Helmet>

      <Container>
        <article itemscope itemtype="http://schema.org/LiveBlogPosting">
          <time itemprop="datePublished" content="2018-02-011T11:30:00-07:00" />
          <div itemprop="author" content="Chubb-Silverman" />
          <Fade duration={2000}>
            <HeaderBlock
              // make upt to 5 different colors for each services header up to 15
              bgColor={
                color === 0 || color === 5 || color === 10
                  ? '#CAD5E8'
                  : color === 1 || color === 6 || color === 11
                  ? '#CEE0CA'
                  : color === 2 || color === 7 || color === 12
                  ? '#F7F2D9'
                  : color === 3 || color === 8 || color === 13
                  ? '#DFEFC8'
                  : '#D2EFE1'
              }
            >
              <HeaderText
                as="h3"
                size="38"
                weight="700"
                color="#293536"
                itemprop="description"
              >
                Tree care services
              </HeaderText>
              <HeaderText
                as="h1"
                padding="1vw 0 0 0"
                size="100"
                weight="700"
                color="#293536"
                itemprop="headline"
              >
                {name}
              </HeaderText>
            </HeaderBlock>
          </Fade>
          <Fade duration={2000}>
            <Block bgColor="#FFFFFF">
              <HeaderText as="h2" size="72" color="#293536" weight="700">
                {name}
              </HeaderText>
              <PLarge
                itemprop="articleBody"
                color="#293536"
                dangerouslySetInnerHTML={{
                  __html: fullDescription.childMarkdownRemark.html,
                }}
              />
              <Button to="/contact">Get a free quote</Button>
            </Block>
          </Fade>
        </article>

        <Fade duration={2000}>
          <DropsBlock
            header={drops.headerText}
            text={drops.paragraphText.childMarkdownRemark.html}
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
      <Footer />
    </ScrollWrapper>
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
    allContentfulDrops(limit: 10, skip: 0) {
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
