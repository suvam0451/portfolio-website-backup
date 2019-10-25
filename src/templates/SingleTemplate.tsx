import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { SinglePageQuery } from 'generated/types/gatsby'
import { Layout } from '../components/Layout'


// eslint-disable-next-line @typescript-eslint/no-var-requires
const MDXRenderer = require('gatsby-plugin-mdx/mdx-renderer')
// import { MDXProvider } from '@mdx-js/react'

interface ContentTemplateProps {
    readonly data: SinglePageQuery
}

const components = {
  pre: props => <div {...props}/>,
  code: props => <pre style={{color: 'tomato'}}{...props}/>
}

const ContentTemplate = ({data}: ContentTemplateProps, props : any) => {
    const {
        mdx: {frontmatter, body}
    } = data

    return (
        <Layout>
            <Helmet title={`${frontmatter.title}`}/>
            <h3>{frontmatter.title}</h3>
            <h3>{frontmatter.date}</h3>
            <MDXRenderer>{body}
            </MDXRenderer>
        </Layout>
    )
}

// export default props => (
//   <MDXProvider components={components}>
//     <main {...props}>
//     </main>
//   </MDXProvider>
// )

// export default ContentTemplate

// export const query = graphql`
//   query SinglePage($path: String!) {
//     mdx(frontmatter: { draft: { ne: true }, path: { eq: $path } }) {
//       body
//       frontmatter {
//         date(formatString: "MMMM D, YYYY")
//         path
//         title
//       }
//     }
//   }
// `