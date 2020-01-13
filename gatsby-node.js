const path = require('path')
const { kebabCase } = require('lodash')

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
  
    //////////////////////////////////////////////////////////////////////////////////////
    // Daedalus API page generation

    // const DaedalusAPIModule = path.resolve("src/templates/mdxPosts.tsx");
    // allMdx( filter: { fileAbsolutePath: { regex: "/api/daedalus/" } })
    const allDaedalusAPIPAges = await graphql(`
      query {
        UE4Tutorial: allMdx(filter: {frontmatter: {draft: {ne: true}}}) {
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
        },
        DaedalusAPI: allMdx(filter: {frontmatter: {draft: {ne: true}}, fileAbsolutePath: {regex: "/daedalus/"}}) {
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
    if (allDaedalusAPIPAges.errors) {
      // reporter.panicOnBuild('Error loading "createPages" query', result.errors)
      return;
    }
  
    const { UE4Tutorial, DaedalusAPI } = allDaedalusAPIPAges.data;
    // const daedalusAPIPage = allDaedalusAPIPAges.data.allMdx.edges;
  
    UE4Tutorial.edges.forEach(({ node }, index) => {
      const { frontmatter, parent } = node
      const _path = frontmatter.path || `/${parent.sourceInstanceName}/${parent.name}`
      createPage({
        path: node.frontmatter.path,
        component: path.resolve("src/templates/mdxPosts.tsx"),
        /* Use context values in  page layout component*/ 
        context: {id: node.id}
      });
    });

    DaedalusAPI.edges.forEach(({ node }, index) => {
      const { frontmatter, parent } = node
      const _path = frontmatter.path || `/${parent.sourceInstanceName}/${parent.name}`
      createPage({
        path: node.frontmatter.path,
        component: path.resolve("src/templates/daedalusAPI.tsx"),
        /* Use context values in  page layout component*/ 
        context: {id: node.id}
      });
    });
  }