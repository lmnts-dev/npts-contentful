import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import config from '../utils/siteConfig'
import SEO from '../components/SEO'
import Footer from '../components/Footer'
import { P, HeaderText } from '../components/Headings'
import Summary from '../components/Summary'
import TestimonialSlider from '../components/TestimonialSlider'
import { Wrapper, HeaderBlock, Block } from '../components/Block'
import { TwoColRow } from '../components/TwoColRow'
import { RowWrapper } from '../components/Row'
import Column from '../components/Column'
import leafService from '../images/leaf1.png'
import leafEstimates from '../images/leaf4.png'
import leafCare from '../images/leaf5.png'
import { TextBlock } from '../components/TextBlocks'
import { RightToMidLeaf, LeftTopLeaf } from '../components/Leaves'
import pine from '../images/leaf3.png'
import pine2 from '../images/leaf6.png'
import { graphql } from 'gatsby'
import ScrollWrapper from '../components/ScrollWrapper'

const LeftLeaf = styled(LeftTopLeaf)`
  left: -60px;
  @media (max-width: 600px) {
    bottom: auto;
    top: -10%;
    left: -25%;
  }
`

const RightLeaf = styled(RightToMidLeaf)`
  right: -2%;
  bottom: 0;
  @media (max-width: 1100px) {
    right: -5%;
  }
  @media (max-width: 800px) {
    right: -4%;
    height: 22vw;
  }
  @media (max-width: 600px) {
    bottom: 0;
    height: 150px;
    left: auto;
    right: -10%;
  }
`

const FeaturedBlock = styled(Wrapper)`
  padding: 50px 200px 200px 200px;
  @media (max-width: 1200px) {
    padding: 50px 10vw 10vw 10vw;
  }
`

const Image = styled.img`
  height: 12vw;
  @media (max-width: 1700px) {
    height: 15vw;
  }
  @media (max-width: 800px) {
    height: 20vw;
  }
`

const FeaturedRow = styled(RowWrapper)`
  flex-wrap: wrap;
  img {
    width: 32%;
    margin-right: 1%;
    margin-bottom: 1%;
    &:last-of-type {
      margin-right: 0;
    }
    @media (max-width: 800px) {
      width: 48.5%;
    }
  }
`

const WorkRow = styled(RowWrapper)`
  padding: 100px 200px;
  div {
    flex: 1;
    margin-right: 9%;
    &:last-of-type {
      margin-right: 0;
    }
  }
  @media (max-width: 1200px) {
    padding: 10vw 10vw 6vw 10vw;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    div {
      margin-right: 0;
      margin-top: 5vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      &:first-of-type {
        margin-top: 0;
      }
      p {
        text-align: center;
      }
    }
  }
`

const HeaderRow = styled(RowWrapper)`
  p {
    margin: 50px 5% 0 0;
  }
  @media (max-width: 750px) {
    flex-direction: column;
    margin-top: 50px;
    p {
      margin: 0;
    }
  }
`

const Work = ({ data }) => {
  const summary = data.allContentfulSummary.edges[0].node
  const testimonials = data.allContentfulTestimonial.edges
  const work = data.allContentfulWork.edges[0].node
  const postNode = {
    title: `Our Work - ${config.siteTitle}`,
  }

  return (
    <ScrollWrapper>
      <Helmet>
        <title>{`Our Work - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />

      <HeaderBlock bgColor="#9F4300">
        <HeaderText as="h3" size="38" color="#FFFFFF">
          {work.subHeaderText}
        </HeaderText>
        <HeaderText
          as="h1"
          padding="1vw 0 0 0"
          size="100"
          weight="700"
          color="#FFFFFF"
        >
          {work.headerText}
        </HeaderText>
        <HeaderRow>
          {work.qualifications.map(({ node: qualification }, index) => {
            return (
              <P key={index + ''} color="#FFFFFF">
                {work.qualifications[index]}
              </P>
            )
          })}
        </HeaderRow>
      </HeaderBlock>
      <TwoColRow bias="left">
        <Block
          bgColor="transparent"
          padding="0"
          bgImage={work.firstImage.ogimg.src}
        />
        <TextBlock
          bgColor="#FFFFFF"
          hideButton
          dest="/"
          theme="dark"
          header={work.secondaryHeader1}
          inlineText={work.paragraphText1.childMarkdownRemark.html}
        />
      </TwoColRow>
      <TwoColRow bias="right" smallReverse>
        <TextBlock
          pushUp
          bgColor="#FFFFFF"
          bText={work.buttonText}
          dest={
            '/' +
            work.buttonDestination.replace(/[^a-z0-9]/gi, '-').toLowerCase()
          }
          theme="dark"
          header={work.secondaryHeader2}
          inlineText={work.paragraphText2.childMarkdownRemark.html}
        />
        <Block
          bgColor="transparent"
          padding="0"
          bgImage={work.secondImage.ogimg.src}
        />
      </TwoColRow>
      <Block bgColor="#C9EAEB" padding="0">
        <WorkRow>
          <Column className="work">
            <Image src={leafService} />
            <HeaderText as="h6" size="30" weight="700" color="#434343">
              {work.highlightTitle1}
            </HeaderText>
            <P
              color="#293536"
              dangerouslySetInnerHTML={{
                __html: work.highlightParagraph1.childMarkdownRemark.html,
              }}
            />
          </Column>
          <Column>
            <Image src={leafCare} />
            <HeaderText as="h6" size="30" weight="700" color="#434343">
              {work.highlightTitle2}
            </HeaderText>
            <P
              color="#293536"
              dangerouslySetInnerHTML={{
                __html: work.highlightParagraph2.childMarkdownRemark.html,
              }}
            />{' '}
          </Column>
          <Column>
            <Image src={leafEstimates} />
            <HeaderText as="h6" size="30" weight="700" color="#434343">
              {work.highlightTitle3}
            </HeaderText>
            <P
              color="#293536"
              dangerouslySetInnerHTML={{
                __html: work.highlightParagraph3.childMarkdownRemark.html,
              }}
            />{' '}
          </Column>
        </WorkRow>
      </Block>
      <TestimonialSlider data={testimonials} />
      <FeaturedBlock bgColor="#394343">
        <HeaderText
          padding="5vw 0 5vw 0"
          align="center"
          as="h2"
          size="72"
          weight="700"
          color="#FFFFFF"
        >
          Featured Projects
        </HeaderText>
        <FeaturedRow>
          {work.workImages.map(({ node: image }, index) => {
            return (
              <img key={index + ''} src={work.workImages[index].ogimg.src} />
            )
          })}
        </FeaturedRow>
        <RightLeaf src={pine} />
        <LeftLeaf src={pine2} />
      </FeaturedBlock>
      <Summary
        bgColor="#9F4300"
        subhead={summary.subHeaderText}
        header={summary.headerText}
        text={summary.paragraphText.childMarkdownRemark.html}
        bText={summary.buttonText}
        dest={'/' + summary.buttonDestination}
      />
      <Footer />
    </ScrollWrapper>
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
    allContentfulWork {
      edges {
        node {
          headerText
          subHeaderText
          secondaryHeader1
          secondaryHeader2
          buttonText
          buttonDestination
          highlightTitle1
          highlightTitle2
          highlightTitle3
          firstImage {
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
          secondImage {
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
          highlightParagraph1 {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 320)
            }
          }
          highlightParagraph2 {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 320)
            }
          }
          highlightParagraph3 {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 320)
            }
          }
          workImages {
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
          qualifications
        }
      }
    }
  }
`

export default Work
