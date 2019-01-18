import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Summary from '../components/Summary'
import Container from '../components/Container'
import SimpleSlider from '../components/TestimonialSlider'
import SEO from '../components/SEO'
import { Wrapper, HeaderBlock, Block } from '../components/Block'
import TwoColRow from '../components/TwoColRow'
import Column from '../components/Column'
import { TextBlock, LargeTextBlock } from '../components/TextBlocks'
import IntroImage from '../images/intro.jpg'
import { H2, H3, P, PLarge, HeaderText } from '../components/Headings'
import PHC from '../images/phc.jpg'
import Leaf from "../images/leafTestimonial.png"
import { RightLeaf } from '../components/Leaves'

const Leaves = styled(RightLeaf)`
    bottom: -10%;
    @media ( max-width: 600px ){
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


const Home = ({ data }) => {
    const postNode = {
        title: `Home - ${config.siteTitle}`,
    }

    return <>
        <Helmet>
          <title>{`Contact - ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postNode={postNode} pagePath="contact" customTitle />

        <Container>
          <HeaderBlock bgColor="#293536">
            <HeaderText size="42" weight="700" color="#FFFFFF">
              Local, knowledgeable tree and shrub care
            </HeaderText>
            <HeaderText size="100" weight="700" color="#FFFFFF">
              About Us
            </HeaderText>
          </HeaderBlock>
          <TwoColRow>
            <Block padding="0" bgImage={IntroImage} />
            <MainBlock bgColor="#FFFFFF">
              <H2 color="#434343">Premier local tree service</H2>
              <P color="#434343">
                Noah’s Park Tree Care is owned and operated by Noah
                Chubb-Silverman, a second-generation Reno native. He started
                his career in Seattle working and learning tree care from
                some of Seattle’s best arborists. It was then that he
                learned the fundamental rules of Tree Care: be safe, and do
                what is best for the tree. While attending college he
                continued to work and study arboriculture during the summer
                in both Seattle and Reno. After graduating from Western
                Washington University in 2005 he moved back to Reno and
                started Noah’s Park Tree Care. Since then he has worked hard
                to make Noah’s Park one of Reno’s premier tree services,
                capable of handling almost any job. He is also an avid
                cyclist and the Co-Founder of the Reno Bike Project, a
                cycling advocacy group here in Reno.
              </P>
            </MainBlock>
            <Leaves src={Leaf}/>
          </TwoColRow>
          <TwoColRow smallReverse bias="left">
                <LargeTextBlock header="Professional and experienced tree care" text="Serving the Northern Nevada, we specialize in safe, considerate tree and shrub pruning, removal, trimming, and planting. " bText="Our Services" dest="/" theme="dark" bgColor="#C9EAEB" />
            <Block padding="0" bgImage={PHC} />
          </TwoColRow>
          <Summary bText="Get a free quote" dest="/"/>
        </Container>
      </>
}

export default Home