import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Button from '../components/Button'
import Summary from '../components/Summary'
import { Wrapper } from '../components/Block'
import Column from '../components/Column'
import { RowWrapper } from '../components/Row'
import styled from 'styled-components'
import chip from "../images/chip.png"
import { PLarge, HeaderText } from '../components/Headings'
import { LargeTextBlock } from '../components/TextBlocks'
import SEO from '../components/SEO'

const HeaderBlock = styled(Wrapper)`
  padding: 150px 120px 120px 120px;
  @media (max-width: 2000px){
    padding: 150px 6vw 6vw 6vw;
  }
  
`

const Block = styled(Wrapper)`
  padding: 160px 300px;
  @media (max-width: 2000px){
    padding: 8vw 15vw;
  }
`

const Row = styled( RowWrapper )`
  a {
    margin: 0 10px;
  }
`

const Chip = styled.img`
  position: absolute;
  z-index: 4;
  height: 250px;
  right: -2%;
  top: -5%;
  @media (max-width: 2000px) {
    height: 16vw;
  }
  @media (max-width: 600px) {
    height: 100px;
  }
`

const ServiceTemplate = ({ data, pageContext }) => {
  const {
    name,
    slug,
    serviceContent,
  } = data.contentfulService
  const postNode = data.contentfulService
  const description = serviceContent.childContentfulRichText.html

  return <Layout>
      <Helmet>
        <title>{`${name} - ${config.siteTitle}`}</title>
      </Helmet>

      <Container>
        <HeaderBlock bgColor="#9F4300">
          <HeaderText size="42" weight="700" color="#FFFFFF">
              Tree care services
          </HeaderText>
          <HeaderText size="100" weight="700" color="#FFFFFF">
            {name}
          </HeaderText>
        </HeaderBlock>
        <Block bgColor="#FFFFFF">
          <HeaderText size="80" color="#293536" weight="700">
            {name}
          </HeaderText>
          <PLarge color="#293536">
            {description}
          </PLarge>
          <Button to="/">
            Get a free quote
          </Button>
        </Block>
        <Block bgColor="#9DD5EA">
          <Column align="center">
            <HeaderText size="100" color="#293536" weight="700" align="center">
              Free Firewood &amp; Woodchips
            </HeaderText>
            <PLarge color="#293536" align="center">
                Need a bunch of firewood or wood chips? We got you covered. We have stockpiles of several trees native to Northern Nevada, including cottonwood, maple, spruce, and pine trees.
                  
                Looking for wood chips for free mulch or a landscaping project? We are registered with Chip Drop! If you are looking for wood chips, please sign up at chipdrop.in or contact us and we’ll reach out to you as soon as possible to confirm a delivery time and place.       
            </PLarge>
            <Row>
              <Button to="/">
                Free firewood
              </Button>
              <Button to="/">
                Free wood chips
              </Button>
              <Chip src={chip} alt="leaf"/>
            </Row>
          </Column>
        </Block>
        <Summary bText="About Us" dest="/about" />
        
      </Container>
    </Layout>
}

export const query = graphql`
         query($slug: String!) {
           contentfulService(slug: { eq: $slug }) {
             name
             slug
             serviceContent {
               childContentfulRichText {
                 html
               }
             }
           }
         }
       `

export default ServiceTemplate
