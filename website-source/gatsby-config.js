/* eslint-disable @typescript-eslint/camelcase */
const gatsbyRemarkPlugins = [
  {
    resolve: `gatsby-remark-prismjs`,
    options: {
      classPrefix: "language-",
      inlineCodeMarker: '>',
      aliases: {},
      showLineNumbers: false,
      noInlineHighlight: false,
    },
  },
  {
    resolve: `gatsby-remark-images`,
    options: {
      maxWidth: 512,
      linkImagesToOriginal: false,
      showCaptions: false,
      backgroundColor: 111111,
      tracedSVG: false,
    },
  }
]

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@suvam0451`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sharp`,
    'gatsby-transformer-typescript-css-modules',
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    'prismjs',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/content/images`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        commonmark: true,
        plugins: gatsbyRemarkPlugins
      }
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins
      }
    },
    {
      resolve: 'gatsby-plugin-lunr',
      options: {
        languages: [
          {
            name: 'en',
            filterNodes: node => !node.frontmatter || node.frontmatter.draft !== true,
            customEntries: [
              {
                title: 'Another Page',
                content: 'Welcome to page 2',
                path: '/another-page/'
              }
            ]
          }
        ],
        fields: [
          {name: 'title', store: true, attributes: {boost: 20}},
          {name: 'path', store: true},
          {name: 'content'},
          {name: 'tags'}
        ],
        resolver: {
          Mdx: {
            title: node => node.frontmatter.title,
            path: node => node.frontmatter.path,
            content: node => node.rawBody,
            tags: node => node.frontmatter.tags
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
        omitGoogleFont: true
      }
    },
  ],
}