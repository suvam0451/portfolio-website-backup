import * as React from "react";
import Link from "gatsby-link";
import { graphql }  from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Footer } from "../components/Footer"
import Header from "../components/Header"
import styles from "../components/container.module.css" 
import { Helmet } from "react-helmet"
import { 
  Row, Col,
  Alert, 
  Breadcrumb, 
  Button,
  BreadcrumbItem, 
  Nav, 
  NavbarBrand,
  NavItem,
  NavLink,
  Navbar,
  UncontrolledCollapse,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Dropdown,
  Jumbotron,
  TabPane,
  TabContent } from 'reactstrap'


export default function PageTemplate(data: mdxProps){
    return (
        <div className={styles.BasePage}>
            <Helmet>
              <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet"/>
            </Helmet>
            <Header/>
            <Breadcrumb bsPrefix={styles.DarkCard} listClassName={styles.DarkCard} dark>
                <BreadcrumbItem><Link to = "/">Home</Link></BreadcrumbItem>
                <BreadcrumbItem><Link to = "/">UE4</Link></BreadcrumbItem>
                <BreadcrumbItem active>tutorials</BreadcrumbItem>
                <BreadcrumbItem active>dllandlibs</BreadcrumbItem>
                {//<BreadcrumbItem active>{ this.MakeTutorialBoxes(edges, 2) }</BreadcrumbItem>
                }

            </Breadcrumb>
            <Row>
              <Col xs="2" sm="2" md="2" lg="2" xl="2">
                <h1>{data.data.mdx.frontmatter.title}</h1>
                <MDXRenderer>{data.data.mdx.body}</MDXRenderer>
              </Col>
              <Col xs="12" sm="12" md="12" lg="12" xl="7">
                <h1>{data.data.mdx.frontmatter.title}</h1>
                <MDXRenderer>{data.data.mdx.body}</MDXRenderer>
              </Col>
            </Row>

            <Footer/>
        </div>
    )
}

interface mdxProps {
  data: {
    mdx: {
      id: number,
      body: any,
      frontmatter: {
        title: string
      }
    }
  }
}

export const query = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`