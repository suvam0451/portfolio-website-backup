const path = require("path");
const { kebabCase } = require("lodash");

// gatsby-node.js
exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		node: {
			fs: "empty",
			net: "empty",
		},
	});
};

exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions;

	//////////////////////////////////////////////////////////////////////////////////////
	// Daedalus API page generation

	// const DaedalusAPIModule = path.resolve("src/templates/mdxPosts.tsx");
	// allMdx( filter: { fileAbsolutePath: { regex: "/api/daedalus/" } })
	const allDaedalusAPIPAges = await graphql(`
		query {
			UE4Tutorial: allMdx(
				filter: {
					frontmatter: { draft: { ne: true } }
					fileAbsolutePath: { regex: "/ue4-tutorials/" }
				}
			) {
				nodes {
					id
					parent {
						... on File {
							name
							sourceInstanceName
						}
					}
					frontmatter {
						path
						title
						date
						submoduleID
						seriesID
						seriesIndex
					}
				}
			}
			DaedalusAPI: allMdx(
				filter: {
					frontmatter: { draft: { ne: true } }
					fileAbsolutePath: { regex: "/sleeping-forest/" }
				}
			) {
				nodes {
					id
					parent {
						... on File {
							name
							sourceInstanceName
						}
					}
					frontmatter {
						path
						title
						date
						submoduleID
						seriesID
						seriesIndex
					}
				}
			}
		}
	`);
	if (allDaedalusAPIPAges.errors) {
		// reporter.panicOnBuild('Error loading "createPages" query', result.errors)
		return;
	}

	const { UE4Tutorial, DaedalusAPI } = allDaedalusAPIPAges.data;
	// const daedalusAPIPage = allDaedalusAPIPAges.data.allMdx.edges;

	UE4Tutorial.nodes.forEach(node => {
		const { frontmatter, parent } = node;
		// const _path = frontmatter.path || `/${parent.sourceInstanceName}/${parent.name}`;
		createPage({
			path: node.frontmatter.path,
			component: path.resolve("src/templates/mdxPosts.tsx"),
			/* Use context values in  page layout component*/

			context: { id: node.id },
		});
	});

	DaedalusAPI.nodes.forEach(node => {
		const { frontmatter, parent } = node;
		// const _path =frontmatter.path || `/${parent.sourceInstanceName}/${parent.name}`;
		createPage({
			path: node.frontmatter.path,
			component: path.resolve("src/templates/Trailblazer.tsx"),
			/* Use context values in  page layout component*/

			context: { id: node.id },
		});
	});
};

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  // Only update the `/app` page.
  if (page.path.match(/^\/app/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/app/*"
    // Update the page.
    createPage(page)
  }
}
