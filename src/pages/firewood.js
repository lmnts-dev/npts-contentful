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
import ApplyForm from '../components/ApplyForm'

const Row = styled(TwoColRowWrapper)`
    div, h3 {
        flex: 1 !important;
    }
    h3 {
        margin-right: 5vw;
    }
`


const Firewood = ({ data }) => {
  const disclaimer = data.allContentfulDisclaimers.edges[0].node.firewoodDropDisclaimer.childMarkdownRemark.html 
  const postNode = {
    title: `Free Firewood - ${config.siteTitle}`,
  }
  return (
    <Layout>
      <Helmet>
        <title>{`Free Firewood - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />


      <Fade duration={2000}>
        <HeaderBlock bgColor="#65321F">
          <HeaderText as="h3" size="38" weight="700" color="#FFFFFF">
            Contact us
          </HeaderText>
          <HeaderText as="h1" padding="1vw 0 0 0" size="100" weight="700" color="#FFFFFF">
            Apply for free firewood
          </HeaderText>
        </HeaderBlock>
      </Fade>
      <Fade duration={2000}>
        <ApplyForm type="Firewood" disclaimer={disclaimer}/>
      </Fade>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulDisclaimers {
      edges {
        node {
          firewoodDropDisclaimer {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 320)
            }
          }
          woodchipDropDisclaimer {
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

export default Firewood
