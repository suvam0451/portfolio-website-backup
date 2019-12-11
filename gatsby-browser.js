require("prism-themes/themes/prism-atom-dark.css");
require("prismjs/plugins/line-numbers/prism-line-numbers.css");

require("@blueprintjs/core/lib/css/blueprint.css");
require("@blueprintjs/icons/lib/css/blueprint-icons.css");
exports.onInitialClientRender = () => {
	require("typeface-nunito");
};
require("./src/utils/tailwindstyles.css");
// require(`prismjs/prism.js`)
// require(`prismjs/components/prism-clike.js`)
// require(`prismjs/components/prism-c.js`)
// require(`prismjs/components/prism-cpp.js`)
// require(`prismjs/components/prism-git.js`)
