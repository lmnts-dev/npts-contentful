import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import config from '../utils/siteConfig'
import { graphql } from 'gatsby'
import Summary from '../components/Summary'
import Container from '../components/Container'
import SEO from '../components/SEO'
import { Wrapper, HeaderBlock, Block } from '../components/Block'
import TwoColRow from '../components/TwoColRow'
import { TextBlock } from '../components/TextBlocks'
import { H2, P, HeaderText } from '../components/Headings'
import Leaf from '../images/leafTestimonial.png'
import { RightLeaf } from '../components/Leaves'
import Footer from '../components/Footer'
import ScrollWrapper from '../components/ScrollWrapper'

const AboutLeaf = styled(RightLeaf)`
  top: -20%;
  @media (max-width: 600px) {
    top: -7%;
  }
`

const MainBlock = styled(Wrapper)`
  padding: 115px 144px;
  @media (max-width: 1440px) {
    padding: 8vw 10vw;
  }
  @media (max-width: 700px) {
    padding: 64px 80px;
  }
  @media (max-width: 450px) {
    padding: 64px 25px;
  }
`

const About = ({ data, location }) => {
  const postNode = {
    title: `About - ${config.siteTitle}`,
  }
  const identity = data.allContentfulIdentity.edges[0].node
  const about = data.allContentfulAbout.edges[0].node

  return (
    <ScrollWrapper>
      <Helmet>
        <title>{`About - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />

      <Container>
          <HeaderBlock bgColor="#293536">
            <HeaderText as="h3" size="38" weight="700" color="#FFFFFF">
              Local, knowledgeable tree and shrub care
            </HeaderText>
            <HeaderText
              as="h1"
              padding="1vw 0 0 0"
              size="100"
              weight="700"
              color="#FFFFFF"
            >
              About Us
            </HeaderText>
          </HeaderBlock>
          <TwoColRow>
            <Block padding="0" bgImage={about.image1.ogimg.src} />
            <MainBlock bgColor="#FFFFFF">
              <H2 color="#434343">{about.headerText}</H2>
              <P
                color="#434343"
                dangerouslySetInnerHTML={{
                  __html: about.paragraphText.childMarkdownRemark.html,
                }}
              />
            </MainBlock>
          </TwoColRow>
          <TwoColRow smallReverse bias="right">
            <TextBlock
              header={about.blockHeaderText}
              inlineText={about.blockParagraphText.childMarkdownRemark.html}
              bText={about.blockButtonText}
              dest={'/' + about.blockButtonDestination}
              theme="dark"
              bgColor="#C9EAEB"
            />
            <Block padding="0" bgImage={about.image2.ogimg.src} />
            <AboutLeaf src={Leaf} />
          </TwoColRow>
      </Container>
        <Summary
          bgColor="#394343"
          header={identity.headerText}
          text={identity.paragraphText.childMarkdownRemark.html}
          bText={identity.buttonText}
          dest={'/' + identity.buttonDestination}
        />
      <Footer />
    </ScrollWrapper>
  )
}

export const query = graphql`
  query {
    allContentfulAbout {
      edges {
        node {
          headerText
          paragraphText {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 320)
            }
          }
          blockHeaderText
          blockParagraphText {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 320)
            }
          }
          blockButtonText
          blockButtonDestination
          image1 {
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
          image2 {
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
    allContentfulIdentity {
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
  }
`

export default About
