const visit = require("unist-util-visit")
const toString = require("mdast-util-to-string")

// markdownAST : Destructured markdown object
// pluginOptions : Obtained from gatsby config
module.exports = ({ markdownAST }, pluginOptions) => {
    visit(markdownAST, "heading", node => {
        let depth = {node};
        let text = toString(node);
        const  html = `
            <h1 style="color: rebeccapurple">
                ${text}
            </h1>
        `
        node.type = "html"
        node.children = undefined
        node.value = html
        // Do stuff with nodes
    });
    // Manipulate AST
    return markdownAST;
}