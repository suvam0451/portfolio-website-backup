import * as React from 'react'
import { graphql } from 'gatsby'
import { Layout } from "../components/Layout"
import { Link } from 'gatsby'


interface LunarSearchProps {
  readonly limit: number
}

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        author: string
      }
    }
  }
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`


class IndexPages extends React.Component<IndexPageProps> {
  readonly hello = `doomo`
  public render() {
    const {
      title,
      author
    } = this.props.data.site.siteMetadata
    return (
      <Layout>
        <h1>{this.hello} TypeScript world!</h1>
        <p>This site is named <strong>{author}</strong></p>
        <h1>Hello world, from {author}!!</h1>
        <p>Konichiwa desu and {this.hello}, to {title}</p>
      </Layout>
    )
  }
}

export const IndexPage = () => (
  <>
    <h2>Hi people</h2>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>
      <Link to="/another-page/">Go to another page</Link>
    </p>
    <p>
      <Link to="/all/">See content generated from Markdown files</Link>
    </p>
  </>
)

const LayoutIndexPage = () => (
  <Layout>
    <IndexPage />
  </Layout>
)

export default LayoutIndexPage;

// import { Link } from "gatsby"
/*


*/
// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )

// export default IndexPage
// More like, track the ID when one tries to post in collabs. 
// If it's a link, let the ID have access for a few hours and then block access for 2 weeks.
// That way no reposting and spammers can be dealth with immediately. 