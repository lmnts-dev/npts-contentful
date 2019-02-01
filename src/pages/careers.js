import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import config from '../utils/siteConfig'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import { H3, P, HeaderText } from '../components/Headings'
import Fade from 'react-reveal/Fade'
import { Wrapper, HeaderBlock } from '../components/Block'
import { TwoColRowWrapper } from '../components/TwoColRow'
import  Column  from '../components/Column'
import Button from '../components/Button'

const Block = styled(Wrapper)`
  padding: 100px 200px;
  @media (max-width: 1100px){
    padding: 5vw 10vw;
  }
  @media (max-width: 700px){
    padding: 50px 25px;
  }
`

const Row = styled(TwoColRowWrapper)`
    div, h3 {
        flex: 1 !important;
    }
    h3 {
        margin-right: 5vw;
    }
    @media ( max-width: 600px ){
      flex-direction: column;
    }
`

const Positions = styled.div`
  .react-reveal:nth-child(even) {
    div {
      background-color: #e1f2f8 !important;
    }
  }
  .react-reveal {
    &:last-of-type {
      padding-bottom: 100px;
      @media (max-width: 600px) {
        padding-bottom: 25px;
      }
    }
  }
`

const Title = styled(H3)`
  @media (max-width: 600px) {
    text-align: left;
    margin-bottom: 20px;
  }
`

const Careers = ( {data} ) => {
    const positions = data.allContentfulPosition.edges
    const postNode = {
      title: `Careers - ${config.siteTitle}`,
    }
  return (
    <Layout noFooter>
    <Helmet>
      <title>{`Careers - ${config.siteTitle}`}</title>
    </Helmet>
    <SEO postNode={postNode} pagePath="contact" customTitle />


      <Fade duration={2000}>
        <HeaderBlock bgColor="#9DD5EA">
          <HeaderText as="h3" size="38" weight="700" color="#293536">
            Join our crew
          </HeaderText>
          <HeaderText as="h1" padding="1vw 0 0 0" size="100" weight="700" color="#293536">
            Current Openings
          </HeaderText>
        </HeaderBlock>
      </Fade>
      <Positions>
        {positions.map(({ node: position }, index) => {
            return (
                    <Fade key={index + ""} duration={2000}>
                        <Block className="position" bgColor="#FFFFFF" key={index}>
                            <Row>
                                <Title align="right" weight="700" color="#434343">{ position.positionTitle }</Title>
                                <Column>
                                    <P weight="700" margin="0" color="#434343">Overview</P>
                                    <P
                                        color="#434343"
                                        dangerouslySetInnerHTML={{
                                            __html: position.overview.childMarkdownRemark.html,
                                        }}
                                    />
                                    {position.requirements !== null &&
                                            <div>
                                                <P weight="700" margin="0" color="#434343">Requirements</P>
                                                <P
                                                    color="#434343"
                                                    dangerouslySetInnerHTML={{
                                                        __html: position.requirements.childMarkdownRemark.html,
                                                    }}
                                                />
                                            </div>
                                    }
                                    <Button to="/apply">Apply</Button>
                                </Column>
                            </Row>
                        </Block>
                      </Fade>
                    ) 
                }
            )
        }
      </Positions>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulPosition {
      edges {
        node {
          positionTitle
          overview {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 320)
            }
          }
          requirements {
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

export default Careers
