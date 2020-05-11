import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import Card from '../components/Card'
import CardList from '../components/CardList'
import SEO from '../components/SEO'
import { HeaderBlock } from '../components/Block'
import { HeaderText, Text } from '../components/Headings'
import ScrollWrapper from '../components/ScrollWrapper'
import Summary from '../components/Summary'
import Footer from '../components/Footer'
import styled from 'styled-components'
import SocialStrip from '../components/ShareSocialStrip'
import schemaGenerator from '../helpers/schemaGenerator';


const Author = styled(Text)`
 padding-bottom: 25px;
`

const BodyContainer = styled.div`
position: relative;
  width: 80%;
  margin: -20vh auto 0 auto;
  background-color: #FFFFFF;
  padding: 100px;
  @media (max-width: 800px){
      margin: 0 auto;
      padding: 50px 25px;
      width: 90%;
  }
  @media (max-width: 450px ){
      width: 100%;
      padding: 75px 0;
  }
`

const PostTemplate = ({ data, pageContext }) => {
    const {
        title,
        slug,
        heroImage,
        body,
        author,
        publishDate,
    } = data.contentfulPost
    const postNode = data.contentfulPost
    const posts = data.allContentfulPost.edges
    const identity = data.allContentfulIdentity.edges[0].node
    const location = "Reno, NV"
    const pageTitle = title
    const siteTitle = config.siteTitle + "- " + title 
    const siteUrl = config.siteUrl
    const canonical = config.siteUrl + "education/" + slug

    return (
        <ScrollWrapper darknav>
            <Helmet>
                <title>{`${title} - ${config.siteTitle}`}</title>
                <script type="application/ld+json">
                  {JSON.stringify(
                    schemaGenerator({
                      location,
                      canonical,
                      siteUrl,
                      pageTitle,
                      siteTitle,
                    })
                  )}
                </script>
            </Helmet>
            <SEO pagePath={slug} postNode={postNode} postSEO />
            <HeaderBlock bgColor="#FFFFFF">
                <HeaderText as="h3" size="38" weight="700" color="#293536">
                    {publishDate}
                </HeaderText>
                <HeaderText
                    as="h1"
                    padding="1vw 0 0 0"
                    size="100"
                    weight="700"
                    color="#000000"
                >
                    {title}
                </HeaderText>
            </HeaderBlock>

            <Hero image={heroImage} height={'50vh'} />
            

            <BodyContainer>
                <Author size="18" weight="600">By {author}</Author>
                <PageBody body={body} />
                <SocialStrip/>
            </BodyContainer>

            <HeaderText size="80" weight="700" color="#5C5C5C" align="center" padding="0 0 50px 0">
                More Articles
            </HeaderText>
            <Container>
                <CardList>
                    {posts.map(({ node: post }) => (
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
        </ScrollWrapper>
    )
}

export const query = graphql`
  query($slug: String!) {
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
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      author
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      heroImage {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
          width
          height
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

export default PostTemplate