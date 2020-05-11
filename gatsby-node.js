const path = require(`path`)
const config = require('./src/utils/siteConfig')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  /// /// crete blog page ////////////////////////////
  const loadPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPost(
          sort: { fields: [publishDate], order: DESC }
          limit: 10000
        ) {
          edges {
            node {
              slug
              publishDate
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allContentfulPost.edges
      const postsPerFirstPage = config.postsPerHomePage
      const postsPerPage = config.postsPerPage
      const numPages = Math.ceil(
        posts.slice(postsPerFirstPage).length / postsPerPage
      )

      // Create blog
      createPage({
        path: `/education/`,
        component: path.resolve(`./src/pages/education.js`),
        context: {
          limit: postsPerFirstPage,
          skip: 0,
          numPages: numPages + 1,
          currentPage: 1,
        },
      })

      // Create additional pagination on blog page if needed
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: `/${i + 2}/`,
          component: path.resolve(`./src/pages/education.js`),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage + postsPerFirstPage,
            numPages: numPages + 1,
            currentPage: i + 2,
          },
        })
      })

      // Create each individual post page
      posts.forEach((edge, i) => {
        const prev = i === 0 ? null : posts[i - 1].node
        const next = i === posts.length - 1 ? null : posts[i + 1].node
        createPage({
          path: `education/${edge.node.slug}/`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: edge.node.slug,
            prev,
            next,
          },
        })
      })
      resolve()
    })
  })
  /// ////////////////////end create blog page //////////////

  /// /// create service pages ///////////////////////
  const loadServices = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulService {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      const services = result.data.allContentfulService.edges
      services.map(({ node }, index) => {
        createPage({
          path: `services/${node.slug}/`,
          component: path.resolve(`./src/templates/service.js`),
          context: {
            slug: node.slug,
            index: index,
          },
        })
      })
      resolve()
    })
  })

  return Promise.all([ loadPosts, loadServices])
}
