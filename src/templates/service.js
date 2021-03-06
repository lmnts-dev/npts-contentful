import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Footer from '../components/Footer'
import Container from '../components/Container'
import GuidanceBlock from '../components/GuidanceBlock'
import { ButtonStyle } from '../components/Button'
import { ColumnWrapper } from '../components/Column'
import Summary from '../components/Summary'
import { Block, Wrapper, HeaderBlock } from '../components/Block'
import styled from 'styled-components'
import { PLarge, HeaderText } from '../components/Headings'
import DropsBlock from '../components/DropsBlock'
import ScrollWrapper from '../components/ScrollWrapper'
import { TwoColRowWrapper } from '../components/TwoColRow'

const Header = styled(HeaderBlock)`
  @media (max-width: 900px ){
    padding-bottom: 100px;
  }
  @media (max-width: 600px ){
    padding-bottom: 60px;
  }
`

const Button = styled(ButtonStyle)`
  position: absolute;
  top: -25px;
  left: 8vw;
  @media (max-width: 1000px ){
    left: 50px;
  }
  @media (max-width: 500px ){
    left: 25px;
  }
`

const Column = styled(ColumnWrapper)`
  padding: 8vw;
  @media (max-width: 1000px ){
    padding: 60px 50px;
  }
  @media (max-width: 500px ){
    padding: 60px 25px;
  }
`
const TwoColRow = styled( TwoColRowWrapper )`
  position: relative;
  @media ( max-width: 750px){
    flex-direction: column;
  }
  @media (max-width: 750px) {
    flex-direction: ${props => (props.reverse ? 'column-reverse' : 'column')};
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
  const guidance = data.allContentfulGuidance.edges[0].node
  const color = pageContext.index

  return (
    <ScrollWrapper darknav>
      <Helmet>
        <title>{`${name} - ${config.siteTitle}`}</title>
        <meta itemProp="name" content={name} />
      </Helmet>

      <Container>
        <article itemScope itemType="http://schema.org/LiveBlogPosting">
          <time itemProp="datePublished" content="2018-02-011T11:30:00-07:00" />
          <div itemProp="author" content="Chubb-Silverman" />
          <>
            <Header
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
            </Header>
          </>
          <>
            <Block bgColor="#FFFFFF" padding="0">
              <Button to="/contact">Get a free quote</Button>
              <TwoColRow bias="left">
                <Column>
                  <HeaderText as="h2" size="42" color="#293536" weight="700">
                    {firstAspectHeader}
                  </HeaderText>
                  <PLarge
                    as="div"
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
          </>
          <>
            <Block bgColor="#FFFFFF" padding="0">
              <TwoColRow reverse bias="right">
                <ImageBlock padding="0" bgImage={secondAspectImage.ogimg.src} />
                <Column>
                  <HeaderText as="h2" size="42" color="#293536" weight="700">
                    {secondAspectHeader}
                  </HeaderText>
                  <PLarge
                    as="div"
                    itemProp="articleBody"
                    color="#293536"
                    dangerouslySetInnerHTML={{
                      __html: secondAspectText.childMarkdownRemark.html,
                    }}
                  />
                </Column>
              </TwoColRow>
            </Block>
          </>
          {thirdAspectHeader && thirdAspectText && thirdAspectImage &&
            <>
            <Block bgColor="#FFFFFF" padding="0">
              <TwoColRow bias="left">
                  <Column>
                    <HeaderText as="h2" size="42" color="#293536" weight="700">
                      {thirdAspectHeader}
                    </HeaderText>
                    <PLarge
                      as="div"
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
            </>
          }
        </article>
        <GuidanceBlock guidance={guidance}/>
        <>
          <DropsBlock
            header={drops.headerText}
            text={drops.paragraphText.childMarkdownRemark.html}
          />
        </>
        <>
          <Summary
            bgColor="#9F4300"
            subhead={summary.subHeaderText}
            header={summary.headerText}
            text={summary.paragraphText.childMarkdownRemark.html}
            bText={summary.buttonText}
            dest={'/' + summary.buttonDestination}
          />
        </>
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
    allContentfulGuidance {
      edges {
        node {
          header
          points
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