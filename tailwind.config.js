module.exports = {
	theme: {
		extend: {
			spacing: {
				"1/2": "50%",
				"1/3": "33.333333%",
				"2/3": "66.666667%",
				"1/4": "25%",
				"2/4": "50%",
				"3/4": "75%",
				"1/5": "20%",
				"2/5": "40%",
				"3/5": "60%",
				"4/5": "80%",
			},
		},
		container: {
			padding: "2rem",
		},
		flex: {
			"1": "1 1 0%",
		},
	},
	variants: {
		textColor: ["responsive", "hover", "focus", "group-hover"],
		backgroundColor: [
			"active",
			"responsive",
			"hover",
			"focus",
			"group-hover",
		],
		// invisible: ["focus", "group-hover"],
		visibility: ["focus", "group-hover"],
	},
	plugins: [],
};
