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
import Button from '../components/Button'
import leafService from '../images/leaf1.png'
import leafEstimates from '../images/leaf4.png'
import leafCare from '../images/leaf5.png'
import { TextBlock } from '../components/TextBlocks'

const Image = styled.img`
 height: 15vw;
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
            <P color="#FFFFFF">Professional &amp; Trustworthy</P>
            <P color="#FFFFFF">ISA Certified &amp; Fully Insured</P>
            <P color="#FFFFFF">Owner-Operated</P>
          </HeaderRow>
        </HeaderBlock>
      </Fade>
      <Fade duration={2000}>
        <TwoColRow bias="right">
          <Block bgColor="transparent" padding="0" bgImage={leafService}/>
          <TextBlock bgColor="#FFFFFF" hideButton theme="dark" header={work.secondaryHeader1} inlineText="With a team of ISA Certified Arborists, Noah’s Park Tree Care is proud to be the premier tree care service in the Truckee Meadows area. We work closely with homeowners and business owners to ensure that their trees and shrubs are safe, beautiful, and healthy."/>
        </TwoColRow>
      </Fade>
      <Fade duration={2000}>
        <TwoColRow bias="right">
          <TextBlock pushUp bgColor="#FFFFFF" bText={work.buttonText} dest={'/' + work.buttonDestination.replace(/[^a-z0-9]/gi, '-').toLowerCase()} theme="dark" header={work.secondaryHeader2} inlineText="We’ll work and guide you through the consultation and tree care process, and answer all your questions along the way. We offer free estimates on-site, ensuring you get the the best care for your trees in a timely and efficient manner." />
          <Block bgColor="transparent" padding="0" bgImage={leafService} />
        </TwoColRow>
      </Fade>
      <Fade duration={2000}>
        <Block bgColor="#C9EAEB">
          <WorkRow>
            <Column className="work">
              <Image src={leafService}/>
              <HeaderText as="h6" size="30" weight="700" color="#434343">{work.highlightTitle1}</HeaderText>
              <P color="#293536">We work year-round and specialize in safe, considerate tree and shrub pruning, removal, and planting.</P>
            </Column>
            <Column>
              <Image src={leafCare} />
              <HeaderText as="h6"size="30" weight="700" color="#434343">{work.highlightTitle2}</HeaderText>
              <P color="#293536">We’ll get detailed proposals to you quickly and on-site. Our in-depth consultations ensure your trees will be treated with respect and safety by our team.</P>
            </Column>
            <Column>
              <Image src={leafEstimates} />
              <HeaderText as="h6" size="30" weight="700" color="#434343">{work.highlightTitle3}</HeaderText>
              <P color="#293536">We provide dependable, premier tree services, capable of handling any job of any size.</P>
            </Column>
          </WorkRow>
        </Block>
      </Fade>
      <Fade duration={2000}>
        <TestimonialSlider data={testimonials} />
      </Fade>
      <Block bgColor="#394343">
        <HeaderText as="h2" size="100" weight="700" color="#FFFFFF">Featured Projects</HeaderText>

      </Block>
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
        }
      }
    }
  }
`

export default Woodchips
