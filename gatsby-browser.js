// require("./src/utils/tailwindstyles.css");
require("./src/utils/tailwind-base.css")
require("./src/utils/tailwind-components.css")
require("./src/utils/tailwind-utilities.css")
require("./src/utils/custom-injected.css")
require("./src/utils/internal-use.css")

require("@blueprintjs/core/lib/css/blueprint.css");
require("@blueprintjs/icons/lib/css/blueprint-icons.css");
exports.onInitialClientRender = () => {
	// require("typeface-nunito");
};


require(`prismjs/prism.js`)

require("prism-themes/themes/prism-darcula.css");
require("prismjs/plugins/line-numbers/prism-line-numbers.css");

require(`prismjs/components/prism-clike.js`);
require(`prismjs/components/prism-c.js`);
require(`prismjs/components/prism-cpp.js`);
require(`prismjs/components/prism-git.js`);
require(`prismjs/components/prism-batch.js`);