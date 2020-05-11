
import React from 'react'
import { graphql } from 'gatsby'
import CardList from '../components/CardList'
import Summary from '../components/Summary'
import Card from '../components/Card'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'
import Footer from '../components/Footer'
import ScrollWrapper from '../components/ScrollWrapper'


const Index = ({ data, pageContext }) => {
    const posts = data.allContentfulPost.edges
    const featuredPost = posts[0].node
    const { currentPage } = pageContext
    const isFirstPage = currentPage === 1
    const identity = data.allContentfulIdentity.edges[0].node
    console.log( isFirstPage );
    return (
        <ScrollWrapper lightnav>
                <SEO />
                <Helmet>
                    <title>{`${config.siteTitle} - Page ${currentPage}`}</title>
                </Helmet>
                <Container>
                    <CardList>
                        <Card {...featuredPost} featured />
                        {posts.slice(1).map(({ node: post }) => (
                            <Card key={post.id} {...post} />
                        ))}
                    </CardList>
                </Container>
                <Summary
                    bgColor="#394343"
                    header={identity.headerText}
                    text={identity.paragraphText.childMarkdownRemark.html}
                    bText={identity.buttonText}
                    dest={'/' + identity.buttonDestination}
                />
            <Footer />
        </ScrollWrapper >    
    )
}
export const query = graphql`
  query {
    allContentfulPost(
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          title
          id
          slug
          author
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          body {
            childMarkdownRemark {
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
    allContentfulIdentity {
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
export default Index