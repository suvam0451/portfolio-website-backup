import "./src/utils/tailwind-base.css";
import "./src/utils/tailwind-components.css";
import "./src/utils/tailwind-utilities.css";

import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import "prismjs/prism.js";

import "prism-themes/themes/prism-darcula.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

import "prismjs/components/prism-clike.js";
import "prismjs/components/prism-c.js";
import "prismjs/components/prism-cpp.js";
import "prismjs/components/prism-git.js";
import "prismjs/components/prism-batch.js";
import "./src/styles/containers.scss";
import "./src/utils/internal-use.css";

import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";

// Wrap states around page
export const wrapRootElement = ({ element }) => (
	<Provider store={store}>{element}</Provider>
);
