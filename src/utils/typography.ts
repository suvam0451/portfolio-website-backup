import Typography from "typography";
import Theme from "typography-theme-ocean-beach";
import VerticalRhythm from "compass-vertical-rhythm";
import { MOBILE_MEDIA_QUERY } from "typography-breakpoint-constants";
import gray from "gray-percentage";

const typography = new Typography(Theme);

const mytype = new Typography({
	baseFontSize: "18px",
	baseLineHeight: 1.0,
	bodyColor: "hsla(0,0%,0%,0.73)",
	bodyFontFamily: ["Roboto", "serif"],
	bodyWeight: 400,
	boldWeight: 700,
	googleFonts: [
		{
			name: "Roboto Slab",
			styles: ["700"],
		},
		{
			name: "Roboto",
			styles: ["400", "400i", "700"],
		},
	],
	headerColor: "hsla(0,0%,0%,0.9)",
	headerFontFamily: ["Roboto Slab", "sans-serif"],
	headerWeight: 700,
	overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
		const linkColor = "#950451";
		const vr = VerticalRhythm({
			baseFontSize: "10px",
			baseLineHeight: "10px", // 28px
		});
		return {
			a: {
				// backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${linkColor} 1px, ${linkColor} 2px, rgba(0, 0, 0, 0) 2px)`, // eslint-disable-line
				color: linkColor,
				textDecoration: "none",
			},
			// Blockquote styles.
			blockquote: {
				...scale(1 / 5),
				borderLeft: `${rhythm(6 / 16)} solid ${linkColor}`,
				color: gray(35),
				fontStyle: "italic",
				marginLeft: 0,
				marginRight: 0,
				paddingLeft: rhythm(10 / 16),
			},
			"a:hover,a:active": {
				backgroundImage: "none",
				textShadow: "none",
			},
			"h1,h2,h3,h4,h5,h6": {
				marginTop: rhythm(10), // 2
			},
			// children ol, ul
			"li>ol,li>ul": {
				marginBottom: 0,
				marginLeft: "4rem",
				marginTop: 0,
			},

			"blockquote > :last-child": {
				marginBottom: 0,
			},
			"blockquote cite": {
				...adjustFontSizeTo(options.baseFontSize),
				color: options.bodyColor,
				fontStyle: "normal",
				fontWeight: options.bodyWeight,
			},
			"blockquote cite:before": {
				content: '"— "',
			},
			[MOBILE_MEDIA_QUERY]: {
				blockquote: {
					borderLeft: `${rhythm(3 / 16)} solid ${linkColor}`,
					color: gray(41),
					fontStyle: "italic",
					marginLeft: rhythm(-3 / 4),
					marginRight: 0,
					paddingLeft: rhythm(9 / 16),
				},
				html: {
					...vr.establishBaseline(),
				},
			},
		};
	},
});

export default mytype;
// export default typography;

// export default typography;
// const mytype = new Typography({
//     title: "Ocean Beach",
//     baseFontSize: "19px",
//     baseLineHeight: 1.58,
//     googleFonts: [
//         {
//             name: "Roboto Slab",
//             styles: ["700"],
//         },
//         {
//             name: "Roboto",
//             styles: ["400", "400i", "700"],
//         },
//     ],
//     headerFontFamily: ["Roboto Slab", "sans-serif"],
//     bodyFontFamily: ["Roboto", "serif"],
//     headerColor: "hsla(0,0%,0%,0.9)",
//     bodyColor: "hsla(0,0%,0%,0.73)",
//     headerWeight: 700,
//     bodyWeight: 400,
//     boldWeight: 700,
//     overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
//         const linkColor = "#950451"
//         const vr = verticalRhythm({
//             baseFontSize: "17px",
//             baseLineHeight: "28px",
//         })
//         return {
//             a: {
//                 color: linkColor,
//                 textDecoration: "none",
//                 textShadow:
//                     ".03em 0 #fff,-.03em 0 #fff,0 .03em #fff,0 -.03em #fff,.06em 0 #fff,-.06em 0 #fff,.09em 0 #fff,-.09em 0 #fff,.12em 0 #fff,-.12em 0 #fff,.15em 0 #fff,-.15em 0 #fff", // eslint-disable-line
//                 backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${linkColor} 1px, ${linkColor} 2px, rgba(0, 0, 0, 0) 2px)`, // eslint-disable-line
//             },
//             "a:hover,a:active": {
//                 textShadow: "none",
//                 backgroundImage: "none",
//             },
//             "h1,h2,h3,h4,h5,h6": {
//                 marginTop: rhythm(2),
//             },
//             // children ol, ul
//             "li>ol,li>ul": {
//                 marginLeft: "20px",
//                 marginBottom: 0,
//             },
//             // Blockquote styles.
//             blockquote: {
//                 ...scale(1 / 5),
//                 borderLeft: `${rhythm(6 / 16)} solid ${linkColor}`,
//                 color: gray(35),
//                 paddingLeft: rhythm(10 / 16),
//                 fontStyle: "italic",
//                 marginLeft: 0,
//                 marginRight: 0,
//             },
//             "blockquote > :last-child": {
//                 marginBottom: 0,
//             },
//             "blockquote cite": {
//                 ...adjustFontSizeTo(options.baseFontSize),
//                 color: options.bodyColor,
//                 fontStyle: "normal",
//                 fontWeight: options.bodyWeight,
//             },
//             "blockquote cite:before": {
//                 content: '"— "',
//             },
//             [MOBILE_MEDIA_QUERY]: {
//                 html: {
//                     ...vr.establishBaseline(),
//                 },
//                 blockquote: {
//                     borderLeft: `${rhythm(3 / 16)} solid ${linkColor}`,
//                     color: gray(41),
//                     paddingLeft: rhythm(9 / 16),
//                     fontStyle: "italic",
//                     marginLeft: rhythm(-3 / 4),
//                     marginRight: 0,
//                 },
//             },
//         }
//     },
// });
