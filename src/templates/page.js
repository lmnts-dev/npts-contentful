import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import SEO from '../components/SEO'
import Footer from '../components/Footer'

const PageTemplate = ({ data, location }) => {
  const { title, slug, body } = data.contentfulPage
  const postNode = data.contentfulPage

  return (
    <main>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} pageSEO />

      <Container>
        <h1>{title}</h1>
        <PageBody body={body} />
      </Container>
      <Footer />
    </main>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default PageTemplate
