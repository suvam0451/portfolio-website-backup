const path = require('path')
const { kebabCase } = require('lodash')

// function groupCountBy(field, edges) {
//     const groupCounts = edges.reduce((acc, { node }) => {
//         const groups = node.frontmatter[field] || []
//         groups.forEach(group => {
//           acc[group] = (acc[group] || 0) + 1
//         })
//         return acc
//       }, {})
//     
//       return Object.entries(groupCounts)
// }

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
  
    // function createContentListPages({ itemTotal, prefix, component, context, limit = 10 }) {
    //   const pageTotal = Math.ceil(itemTotal / limit)
    // 
    //   for (let page = 1; page <= pageTotal; page++) {
    //     const path = page > 1 ? `${prefix}/${page}` : `${prefix}`
    //     const skip = (page - 1) * limit
    // 
    //     createPage({
    //       path,
    //       component,
    //       context: {
    //         ...context,
    //         itemTotal,
    //         limit,
    //         page,
    //         pageTotal,
    //         prefix,
    //         skip
    //       }
    //     })
    //   }
    // }
  
    const IndexTemplate = path.resolve('src/templates/IndexTemplate.tsx')
    const TagTemplate = path.resolve('src/templates/TagTemplate.tsx')
    const SingleTemplate = path.resolve('src/templates/mdxPosts.tsx')

    const result = await graphql(`
      query {
        allMdx(filter: { frontmatter: { draft: { ne: true } } }) {
          edges {
            node {
              id
              parent {
                ... on File {
                  name
                  sourceInstanceName
                }
              }
              frontmatter {
                path
                tags
              }
            }
          }
        }
      }
    `)
  
    if (result.errors) {
      reporter.panicOnBuild('Error loading "createPages" query', result.errors)
      return
    }
  
    const edges = result.data.allMdx.edges
  
    edges.forEach(({ node }, index) => {
      const { frontmatter, parent } = node
      const _path = frontmatter.path || `/${parent.sourceInstanceName}/${parent.name}`
      createPage({
        path: node.frontmatter.path,
        component: SingleTemplate,
        /* Use context values in  page layout component*/ 
        context: {id: node.id}
      })
    })
  
    // reporter.info(`Articles (${edges.length})`)
  
    // createContentListPages({
    //   itemTotal: edges.length,
    //   prefix: '/all',
    //   component: IndexTemplate
    // })
  
    // reporter.info(`Index (${Math.ceil(edges.length / 10)})`)
    // 
    // groupCountBy('tags', edges).forEach(([tag, itemTotal]) => {
    //   createContentListPages({
    //     itemTotal,
    //     prefix: `/tags/${kebabCase(tag)}`,
    //     component: TagTemplate,
    //     context: { tag }
    //   })
    // 
    //   reporter.info(`Tag: ${tag} (${Math.ceil(itemTotal / 10)})`)
    // })
  }  