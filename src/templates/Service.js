import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import SEO from '../components/SEO'


console.log("service template");

const ServiceTemplate = ({ data, pageContext }) => {
  const {
    name,
    slug,
  } = data.contentfulService
  const postNode = data.contentfulService

  return (
    <Layout>
      <Helmet>
        <title>{`${name} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} postSEO />


      <Container>
        {name}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulService(slug: { eq: $slug }) {
      name
      slug
      description
    }
  }
`

export default ServiceTemplate
