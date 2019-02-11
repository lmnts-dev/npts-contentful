import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Footer from '../components/Footer'
import ScrollWrapper from '../components/ScrollWrapper'

const Text = styled.p`
  text-align: center;
  line-height: 1.6;
  a {
    color: #121212;
  }
`

const NotFoundPage = location => (
  <ScrollWrapper>
    <Helmet>
      <title>404 - Page Not Found</title>
      <meta name="description" content="Page not found" />
    </Helmet>

    <Container>
      <h1>Page Not Found</h1>
      <Text>
        Please return <Link to="/">home</Link> or use the menu to navigate to a
        different page.
      </Text>
    </Container>
    <Footer />
  </ScrollWrapper>
)

export default NotFoundPage
