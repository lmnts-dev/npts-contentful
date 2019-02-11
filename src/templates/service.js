import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Footer from '../components/Footer'
import Container from '../components/Container'
import Button from '../components/Button'
import { ColumnWrapper } from '../components/Column'
import Summary from '../components/Summary'
import { Block, Wrapper, HeaderBlock } from '../components/Block'
import styled from 'styled-components'
import { PLarge, HeaderText } from '../components/Headings'
import DropsBlock from '../components/DropsBlock'
import Fade from 'react-reveal/Fade'
import ScrollWrapper from '../components/ScrollWrapper'
import { TwoColRowWrapper } from '../components/TwoColRow'

const Column = styled(ColumnWrapper)`
  padding: 5vw 8vw;
  @media (max-width: 1000px ){
    padding: 40px 50px;
  }
`
const TwoColRow = styled( TwoColRowWrapper )`
  @media ( max-width: 750px){
    flex-direction: column;
  }
  @media (max-width: 750px) {
    flex-direction: ${props => (props.reverse ? 'column' : 'column-reverse')};
  }
`

const ImageBlock = styled(Wrapper)`
  @media ( max-width: 750px){
    height: 30vh;
    min-height: 300px;
    max-height: 500px;
  }
`

const ServiceTemplate = ({ data, pageContext, location }) => {
  const { name, firstAspectHeader, secondAspectHeader, thirdAspectHeader, firstAspectText, secondAspectText, thirdAspectText, firstAspectImage, secondAspectImage, thirdAspectImage, } = data.contentfulService
  const drops = data.allContentfulDrops.edges[0].node
  const summary = data.allContentfulSummary.edges[0].node
  const color = pageContext.index

  return (
    <ScrollWrapper>
      <Helmet>
        <title>{`${name} - ${config.siteTitle}`}</title>
        <meta itemProp="name" content={name} />
      </Helmet>

      <Container>
        <article itemScope itemType="http://schema.org/LiveBlogPosting">
          <time itemProp="datePublished" content="2018-02-011T11:30:00-07:00" />
          <div itemProp="author" content="Chubb-Silverman" />
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
                itemProp="description"
              >
                Tree care services
              </HeaderText>
              <HeaderText
                as="h1"
                padding="1vw 0 0 0"
                size="100"
                weight="700"
                color="#293536"
                itemProp="headline"
              >
                {name}
              </HeaderText>
            </HeaderBlock>
            <Button to="/contact">Get a free quote</Button>
          </Fade>
          <Fade duration={2000}>
            <Block bgColor="#FFFFFF" padding="0">
              <TwoColRow bias="left">
                <Column>
                  <HeaderText as="h2" size="42" color="#293536" weight="700">
                    {firstAspectHeader}
                  </HeaderText>
                  <PLarge
                    itemProp="articleBody"
                    color="#293536"
                    dangerouslySetInnerHTML={{
                      __html: firstAspectText.childMarkdownRemark.html,
                    }}
                  />
                </Column>
                <ImageBlock padding="0" bgImage={firstAspectImage.ogimg.src} />
              </TwoColRow>
            </Block>
          </Fade>
          <Fade duration={2000}>
            <Block bgColor="#FFFFFF" padding="0">
              <TwoColRow smallReverse bias="right">
                <ImageBlock padding="0" bgImage={secondAspectImage.ogimg.src} />
                <Column>
                  <HeaderText as="h2" size="42" color="#293536" weight="700">
                    {secondAspectHeader}
                  </HeaderText>
                  <PLarge
                    itemProp="articleBody"
                    color="#293536"
                    dangerouslySetInnerHTML={{
                      __html: secondAspectText.childMarkdownRemark.html,
                    }}
                  />
                </Column>
              </TwoColRow>
            </Block>
          </Fade>
          {thirdAspectHeader && thirdAspectText && thirdAspectImage &&
            <Fade duration={2000}>
            <Block bgColor="#FFFFFF" padding="0">
              <TwoColRow bias="left">
                  <Column>
                    <HeaderText as="h2" size="42" color="#293536" weight="700">
                      {thirdAspectHeader}
                    </HeaderText>
                    <PLarge
                      itemProp="articleBody"
                      color="#293536"
                      dangerouslySetInnerHTML={{
                        __html: thirdAspectText.childMarkdownRemark.html,
                      }}
                    />
                  </Column>
                  <ImageBlock padding="0" bgImage={thirdAspectImage.ogimg.src} />
                </TwoColRow>
              </Block>
            </Fade>
          }
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
      shortSummary {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
      firstAspectHeader
      secondAspectHeader
      thirdAspectHeader
      firstAspectImage {
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
      secondAspectImage {
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
      thirdAspectImage {
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
      firstAspectText {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
      secondAspectText {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
      thirdAspectText {
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
