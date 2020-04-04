const proxy = require("http-proxy-middleware");
const path = require(`path`);
require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: `Gatsby Default Starter`,
		description: `Hey, I am Debashish Patra. I develops FOSS packages in Go and Typescript.  DevOps | gamedev | webdev.`,
		author: `@suvam0451`,
		siteUrl: `https://suvam0451.netlify.com/`,
	},
	// for avoiding CORS while developing Netlify Functions locally
	// read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
	// ignore: [process.env.IGNORE_POST_FOLDER],
	developMiddleware: app => {
		app.use(
			"/.netlify/functions/",
			proxy({
				target: "http://localhost:9000",
				pathRewrite: {
					"/.netlify/functions/": "",
				},
			}),
		);
	},
	plugins: [
		`gatsby-plugin-emotion`,
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-typescript`,
		`gatsby-plugin-postcss`,
		`gatsby-transformer-json`,
		`gatsby-transformer-sharp`,
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "content",
				path: `${__dirname}/content`,
				ignore: [process.env.IGNORE_POST_FOLDER],
			},
		},
		{
			resolve: "gatsby-plugin-mdx",
			options: {
				extensions: [".md", ".mdx"],
				gatsbyRemarkPlugins: [
					{
						resolve: "gatsby-remark-images",
						options: {
							maxWidth: 840,
							linkImagesToOriginal: false,
						},
					},
					{
						resolve: "gatsby-remark-autolink-headers",
						options: {
							offsetY: `0`,
							icon: `<svg aria-hidden="true" height="18" version="1.1" viewBox="0 0 16 16" width="18"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
							className: `inline-block mr-1 after`,
							maintainCase: true,
							removeAccents: true,
							isIconAfterHeader: false,
						},
					},
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: "language-",
							inlineCodeMarker: null,
							showLineNumbers: true,
							noInlineHighlight: false,
							aliases: {},
						},
					},
					{
						resolve: "gatsby-remark-copy-linked-files",
						options: {
							ignoreFileExtension: [`png`, `jpg`, `jpeg`],
						},
					},
				],
			},
		},
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-remark-rehype-images`,
			options: "rehype-images",
			sharpFunction: `fixed`,
			width: 480,
			height: 360,
		},
		`gatsby-plugin-transition-link`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		},
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				// Setting a color is optional.
				color: `tomato`,
				// Disable the loading spinner.
				showSpinner: true,
			},
		},
		`gatsby-plugin-sass`
	],
};
