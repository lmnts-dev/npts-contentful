import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import config from '../utils/siteConfig'
import SEO from '../components/SEO'
import { Wrapper } from '../components/Block'
import Layout from '../components/Layout'

import Contact from '../components/ContactForm'

const Center = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Block = styled(Wrapper)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 999;
  padding: 0 4vw;
  margin: 0 auto;
  form {
    margin-top: 0;
  }
`

const LetsTalk = ( location ) => {
  return (
    <Layout location={ location }>
      <Helmet>
        <title>{`Contact - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO
        postNode="Let's Talk - Noah's Park Tree Care Service"
        pagePath="contact"
        customTitle
      />

      <Block bgColor="#272929">
        <Center>
          <Contact />
        </Center>
      </Block>
    </Layout>
  )
}

export default LetsTalk
