
import { graphql } from 'gatsby'
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

const Services = ({ data }) => {
    console.log("here4");
    console.log( data);
    const services = data.allContentfulService.edges
    const firewood = data.allContentfulFirewood.edges[0].node
    const identity = data.allContentfulIdentity.edges[0].node
    const postNode = {
        title: `Home - ${config.siteTitle}`,
    }

    return (
       <>
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
                {services.map( ({ node: service }, index) => {
                  if ( index % 2 == 0 && (index + 1) != services.length)
                  return (
                    <>
                      <TwoColRow>
                        <ServiceBlock src={service.image.ogimg.src} header={service.name} text={service.shortSummary} bText="Learn More" dest={"/" + service.slug} />
                        <ServiceBlock src={services[index + 1].node.image.ogimg.src} header={services[index + 1].node.name} text={services[index + 1].node.shortSummary} bText="Learn More" dest={"/" + services[index + 1].node.slug} />
                      </TwoColRow>
                    </>
                  )
                  if ( index % 2 == 0 && (index + 1) == services.length )
                  return (
                    <>
                    <TwoColRow>
                      <ServiceBlock src={service.image.ogimg.src} header={service.name} text={service.shortSummary} bText="Learn More" dest={"/" + service.slug} />
                    </TwoColRow>
                  </>     
                  )
                })}
            </ServiceList>
            <FirewoodBlock header={firewood.headerText} text={firewood.paragraphText.childMarkdownRemark.html} />
            <Summary bgColor="#394343" header={identity.headerText} text={identity.paragraphText.childMarkdownRemark.html} bText={identity.buttonText} dest={"/" + identity.buttonDestination}/>
        </Container>
      </>
    )
}

export const query = graphql`
         query($skip: Int!, $limit: Int!) {
           allContentfulService(
            limit: $limit
            skip: $skip
            ) {
              edges {
                node {
                name
                slug
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
                shortSummary {
                  childMarkdownRemark {
                    html
                    excerpt(pruneLength: 320)
                  }
                }
                fullDescription {
                  childMarkdownRemark {
                    html
                    excerpt(pruneLength: 320)
                  }
                }
              }
            }
          }
          allContentfulFirewood(
            limit: $limit
            skip: $skip
            ) {
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
        allContentfulIdentity(
            limit: $limit
            skip: $skip
          ) {
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

export default Services