const proxy = require("http-proxy-middleware");
const path = require(`path`);

module.exports = {
	siteMetadata: {
		title: `Gatsby Default Starter`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@suvam0451`,
		siteUrl: `https://www.winterwildfire.netlify.com`,
	},
	// for avoiding CORS while developing Netlify Functions locally
	// read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
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
		"prismjs",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "content",
				path: `${__dirname}/content`,
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
							maxWidth: 1035,
							sizeByPixelDensity: true,
							showCaptions: true,
							linkImagesToOriginal: false,
						},
					},
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: "language-",
							inlineCodeMarker: null,
							showLineNumbers: true,
							aliases: {},
						},
					},
				],
			},
		},
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-remark-rehype-images`,
			options: 'rehype-images',
			sharpFunction: `fixed`,
			width: 480,
			height: 360
		},
		`gatsby-plugin-transition-link`
	],
};
