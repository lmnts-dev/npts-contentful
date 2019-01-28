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
import { LargeTextBlock } from '../components/TextBlocks'
import IntroImage from '../images/intro.jpg'
import { H2, P, HeaderText } from '../components/Headings'
import PHC from '../images/phc.jpg'
import Leaf from '../images/leafTestimonial.png'
import { RightLeaf } from '../components/Leaves'
import Layout from '../components/Layout'
import Fade from 'react-reveal/Fade'

const Leaves = styled(RightLeaf)`
  bottom: -10%;
  @media (max-width: 600px) {
    bottom: -7%;
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
  console.log('here')
  console.log(data)
  const postNode = {
    title: `Home - ${config.siteTitle}`,
  }
  const identity = data.allContentfulIdentity.edges[0].node
  const about = data.allContentfulAbout.edges[0].node

  return (
    <Layout location={location}>
      <Helmet>
        <title>{`Contact - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />

      <Container>
        <Fade duration={2000}>
          <HeaderBlock bgColor="#293536">
            <HeaderText size="42" weight="700" color="#FFFFFF">
              Local, knowledgeable tree and shrub care
            </HeaderText>
            <HeaderText size="100" weight="700" color="#FFFFFF">
              About Us
            </HeaderText>
          </HeaderBlock>
        </Fade>
        <Fade duration={2000}>
          <TwoColRow>
            <Block padding="0" bgImage={IntroImage} />
            <MainBlock bgColor="#FFFFFF">
              <H2 color="#434343">{about.headerText}</H2>
              <P
                color="#434343"
                dangerouslySetInnerHTML={{
                  __html: about.paragraphText.childMarkdownRemark.html,
                }}
              />
            </MainBlock>
            <Leaves src={Leaf} />
          </TwoColRow>
        </Fade>
        <Fade duration={2000}>
          <TwoColRow smallReverse bias="left">
            <LargeTextBlock
              header={about.blockHeaderText}
              inlineText={about.blockParagraphText.childMarkdownRemark.html}
              bText={about.blockButtonText}
              dest={'/' + about.blockButtonDestination}
              theme="dark"
              bgColor="#C9EAEB"
            />
            <Block padding="0" bgImage={PHC} />
          </TwoColRow>
        </Fade>
      </Container>
      <Fade duration={2000}>
        <Summary
          bgColor="#394343"
          header={identity.headerText}
          text={identity.paragraphText.childMarkdownRemark.html}
          bText={identity.buttonText}
          dest={'/' + identity.buttonDestination}
        />
      </Fade>
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulAbout(limit: $limit, skip: $skip) {
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
  }
`

export default About
