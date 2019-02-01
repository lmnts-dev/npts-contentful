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
import { TwoColRow, TwoColRowWrapper } from '../components/TwoColRow'
import { RowWrapper, Row } from '../components/Row'
import  Column  from '../components/Column'
import leafService from '../images/leaf1.png'
import leafEstimates from '../images/leaf4.png'
import leafCare from '../images/leaf5.png'
import { TextBlock } from '../components/TextBlocks'
import { RightToMidLeaf, LeftTopLeaf } from '../components/Leaves'
import pine from '../images/leaf3.png'
import pine2 from '../images/leaf6.png'

const FeaturedBlock = styled(Wrapper)`
  padding: 50px 200px 200px 200px;
`

const Image = styled.img`
 height: 15vw;
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
  }
`

const WorkRow = styled(RowWrapper)`
  div {
    flex: 1;
    margin-right: 9%;
    &:last-of-type {
      margin-right: 0;
    }
  }
`

const HeaderRow = styled(RowWrapper)`
  p {
    margin: 50px 5% 0 0;
  }
`

const Woodchips = ( {data } ) => {
    const summary = data.allContentfulSummary.edges[0].node
    const testimonials = data.allContentfulTestimonial.edges
    const work = data.allContentfulWork.edges[0].node
    console.log(work);
    const postNode = {
      title: `Our Work - ${config.siteTitle}`,
    }

  return (
    <Layout noFooter>
      <Helmet>
        <title>{`Our Work - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />


      <Fade duration={2000}>
        <HeaderBlock bgColor="#9F4300">
          <HeaderText as="h3" size="38" color="#FFFFFF">
            {work.subHeaderText}
          </HeaderText>
          <HeaderText as="h1" size="100" weight="700" color="#FFFFFF">
            {work.headerText}
          </HeaderText>
          <HeaderRow>
            {work.qualifications.map(({ node: qualification }, index) => {
              return (
                    <P color="#FFFFFF">{work.qualifications[index]}</P>
                  )
                }
              )
            }
          </HeaderRow>
        </HeaderBlock>
      </Fade>
      <Fade duration={2000}>
        <TwoColRow bias="left">
          <Block bgColor="transparent" padding="0" bgImage={work.image1.ogimg.src}/>
          <TextBlock bgColor="#FFFFFF" hideButton theme="dark" header={work.secondaryHeader1} inlineText={work.paragraphText1.childMarkdownRemark.html}/>
        </TwoColRow>
      </Fade>
      <Fade duration={2000}>
        <TwoColRow bias="right">
          <TextBlock pushUp bgColor="#FFFFFF" bText={work.buttonText} dest={'/' + work.buttonDestination.replace(/[^a-z0-9]/gi, '-').toLowerCase()} theme="dark" header={work.secondaryHeader2} inlineText={work.paragraphText2.childMarkdownRemark.html} />
          <Block bgColor="transparent" padding="0" bgImage={work.image2.ogimg.src} />
        </TwoColRow>
      </Fade>
      <Fade duration={2000}>
        <Block bgColor="#C9EAEB">
          <WorkRow>
            <Column className="work">
              <Image src={leafService}/>
              <HeaderText as="h6" size="30" weight="700" color="#434343">{work.highlightTitle1}</HeaderText>
              <P color="#293536" dangerouslySetInnerHTML={{ __html: work.highlightParagraph1.childMarkdownRemark.html }}/>
            </Column>
            <Column>
              <Image src={leafCare} />
              <HeaderText as="h6"size="30" weight="700" color="#434343">{work.highlightTitle2}</HeaderText>
              <P color="#293536" dangerouslySetInnerHTML={{ __html: work.highlightParagraph2.childMarkdownRemark.html }} />            </Column>
            <Column>
              <Image src={leafEstimates} />
              <HeaderText as="h6" size="30" weight="700" color="#434343">{work.highlightTitle3}</HeaderText>
              <P color="#293536" dangerouslySetInnerHTML={{ __html: work.highlightParagraph3.childMarkdownRemark.html }} />            </Column>
          </WorkRow>
        </Block>
      </Fade>
      <Fade duration={2000}>
        <TestimonialSlider data={testimonials} />
      </Fade>
      <FeaturedBlock bgColor="#394343">
        <HeaderText padding="5vw 0 5vw 0" align="center" as="h2" size="72" weight="700" color="#FFFFFF">Featured Projects</HeaderText>
        <FeaturedRow>
          {work.workImages.map(({ node: image }, index) => {
                return (
                  <img src={work.workImages[index].ogimg.src}/>
                )
              }
            )
          }
        </FeaturedRow>
        <RightToMidLeaf src={pine} />
        <LeftTopLeaf src={pine2} />
      </FeaturedBlock>
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

export default Woodchips
