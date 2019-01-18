import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import config from '../utils/siteConfig'
import Summary from '../components/Summary'
import Container from '../components/Container'
import SEO from '../components/SEO'
import { Wrapper, HeaderBlock, Block } from '../components/Block'
import { TwoColRowWrapper } from '../components/TwoColRow'
import ServiceBlock from '../components/ServiceBlock'
import { H2, H3, P, PLarge, HeaderText } from '../components/Headings'
import FirewoodBlock from '../components/FirewoodBlock'

const TwoColRow = styled(TwoColRowWrapper)`
    @media (max-width: 700px){
        flex-direction: column;
    }
`

const ServiceList = styled(Wrapper)`
  padding: 0 100px 200px 100px;
  @media (max-width: 2000px) {
    padding: 0 5vw 10vw 5vw;
  }
  @media (max-width: 500px) {
    padding: 0 0 10vw 0;
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
            <HeaderBlock bgColor="#C9EAEB">
                <HeaderText size="42" weight="700" color="#312B2B">
                Do what's right for the tree
                </HeaderText>
                <HeaderText size="100" weight="700" color="#312B2B">
                Tree Care Services
                </HeaderText>
            </HeaderBlock>
            <ServiceList bgColor="#FFFFFF">
                <TwoColRow>
                    <ServiceBlock header="Removal" text="We pride ourselves on our ability to extricate such very large and dangerous trees while doing no damage to the fine surroundings." bText="Learn More" dest="/removal" />
                    <ServiceBlock header="Planting" text="One tree or a hundred trees, no job is too big or small. There are few things better than watching a properly planted tree grow and thrive …" bText="Learn More" dest="/planting" />
                </TwoColRow>
                <TwoColRow>
                    <ServiceBlock header="Trimming" text="As a premier local tree service, we strive to offer the highest quality pruning or trimming possible. All our pruning is done to ISA…" bText="Learn More" dest="/trimming" />
                    <ServiceBlock header="Surgery" text="Supplemental structural support for trees and branches. We’re experts in the cabling and bracing procedures that are the current industry…" bText="Learn More" dest="/surgery" />
                </TwoColRow>
                <TwoColRow>
                    <ServiceBlock header="Plant Health Care (PHC)" text="Our team will do everything possible to improve and maintain a tree’s health. We’ll do what is right for every tree." bText="Learn More" dest="/plant-health-care-phc" />
                </TwoColRow>
            </ServiceList>
            <FirewoodBlock />
            <Summary bText="Get a free quote" dest="/"/>
        </Container>
      </>
}

export default Home