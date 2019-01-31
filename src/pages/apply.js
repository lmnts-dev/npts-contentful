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

const Apply = ( ) => {
  const postNode = {
    title: `Apply - ${config.siteTitle}`,
  }
  return (
    <Layout noFooter>
      <Helmet>
        <title>{`Apply - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />
  
      <Fade duration={2000}>
        <HeaderBlock bgColor="#25503B">
          <HeaderText as="h3" size="38" weight="700" color="#FFFFFF">
            Work with us
          </HeaderText>
          <HeaderText as="h1" size="100" weight="700" color="#FFFFFF">
            Apply
          </HeaderText>
        </HeaderBlock>
      </Fade>
    </Layout>
  )
}

export default Apply