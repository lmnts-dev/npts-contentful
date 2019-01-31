import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import config from '../utils/siteConfig'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import { H3, P, HeaderText } from '../components/Headings'
import Fade from 'react-reveal/Fade'
import { Wrapper, HeaderBlock, Block } from '../components/Block'
import { TwoColRowWrapper } from '../components/TwoColRow'
import  Column  from '../components/Column'
import Button from '../components/Button'

const Row = styled(TwoColRowWrapper)`
    div, h3 {
        flex: 1 !important;
    }
    h3 {
        margin-right: 5vw;
    }
`

const Positions = styled.div`
  .react-reveal:nth-child(even) {
    div {
      background-color: #e1f2f8 !important;
    }
  }
`

const Careers = ( {data} ) => {
    const positions = data.allContentfulPosition.edges
    console.log( positions);
  return (
    <Layout noFooter>
      <Helmet>
        <title>{`Contact - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO
        postNode="Let's Talk - Noah's Park Tree Care Service"
        pagePath="contact"
        customTitle
      />

      <Fade duration={2000}>
        <HeaderBlock bgColor="#9DD5EA">
          <HeaderText as="h3" size="38" weight="700" color="#293536">
            Join our crew
          </HeaderText>
          <HeaderText as="h1" size="100" weight="700" color="#293536">
            Current Openings
          </HeaderText>
        </HeaderBlock>
      </Fade>
      <Positions>
        {positions.map(({ node: position }, index) => {
            return (
                        <Block className="position" bgColor="#FFFFFF" key={index}>
                            <Row>
                                <H3 align="right" color="#434343">{ position.positionTitle }</H3>
                                <Column>
                                    <P weight="700" color="#434343">Overview</P>
                                    <P
                                        color="#434343"
                                        dangerouslySetInnerHTML={{
                                            __html: position.overview.childMarkdownRemark.html,
                                        }}
                                    />
                                    {position.requirements !== null &&
                                            <div>
                                                <P weight="700" color="#434343">Requirements</P>
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
