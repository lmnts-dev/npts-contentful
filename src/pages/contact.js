import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import config from '../utils/siteConfig'
import SEO from '../components/SEO'
import { Wrapper } from '../components/Block'
import Footer from '../components/Footer'
import Contact from '../components/ContactForm'
import ScrollWrapper from '../components/ScrollWrapper'

const Center = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Block = styled(Wrapper)`
  padding: 10vh 4vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  form {
    margin-top: 0;
  }
`

const LetsTalk = location => {
  const postNode = {
    title: `Contact - ${config.siteTitle}`,
  }

  return (
    <ScrollWrapper>
      <Helmet>
        <title>{`Contact - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />

      <Block bgColor="#272929">
        <Center>
          <Contact />
        </Center>
      </Block>
      <Footer alt />
    </ScrollWrapper>
  )
}

export default LetsTalk
