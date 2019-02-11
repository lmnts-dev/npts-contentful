const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

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

  return Promise.all([ loadServices])
}
