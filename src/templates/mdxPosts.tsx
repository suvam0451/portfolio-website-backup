import * as React from "react";
import Link from "gatsby-link";
import { graphql }  from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Footer } from "../components/Footer"
import Header from "../components/Header"
// import styles from "../components/container.module.css" 
import { Helmet } from "react-helmet"
import { QuickLinks } from "../components/QuickLinks"
import { NavCard } from "../components/NavCard"
import { StatusCard } from "../components/StatusCard"
import _Alert from "../components/Alert"
import { 
  Row, Col,
  Card, CardTitle, CardText, CardBody, CardHeader,
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

import styled from "@emotion/styled"
import "./mdxPosts.css"

// const MyH1 = props => <h1 style={{color: "tomato"}} {...props}/>
// const MyParagraph = props => <p style={{ fontSize: "18px", lineHeight: 1.6 }} />

const Content = styled.div`
  margin: 0 auto;
  padding: 0.1rem 0.1rem;
`

const comps = {
  // h1: MyH1,
  // p: MyParagraph,
  Alert: _Alert,
}

// export const wrapRootElement = ({ element }) => (
//   <MDXProvider components={components}>{element}</MDXProvider>
// )

export default function PageTemplate(data: mdxProps){
// export default function PageTemplate({data: {mdx}}){
    return (
        <Content>
            <Helmet>
              {/*<link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet"/>*/}
            </Helmet>
            <Header/>
            <Breadcrumb dark>
                <BreadcrumbItem><Link to = "/">Home</Link></BreadcrumbItem>
                <BreadcrumbItem><Link to = "/">UE4</Link></BreadcrumbItem>
                <BreadcrumbItem active>tutorials</BreadcrumbItem>
                <BreadcrumbItem active>dllandlibs</BreadcrumbItem>
                {//<BreadcrumbItem active>{ this.MakeTutorialBoxes(edges, 2) }</BreadcrumbItem>
                }
            </Breadcrumb>
            <MDXRenderer>{data.data.mdx.body}</MDXRenderer>
            <Row>
              {/** List of all available tutorials + Skip to section(optional) */}
              <Col xs ="12" sm="12" md="12" lg="12" xl="2">
                <Row>
                  <StatusCard/>
                  <NavCard/>
                </Row>
              </Col>
              {/** Main body of mdx post */ }
              <Col xs="12" sm="12" md="12" lg="12" xl="7">
                {/*<h1>{data.data.mdx.frontmatter.title}</h1>*/}
                <Card body>
                  <CardHeader tag="h4">{data.data.mdx.frontmatter.title}</CardHeader>
                  <CardBody>
                    
                  </CardBody>
                  
                </Card>
                <MDXRenderer>{data.data.mdx.body}</MDXRenderer>
              </Col>
              <Col xs="12" sm="12" md="12" lg="6" xl="3">
                <Row>
                <Col xs="12" sm="6" md="12" lg="6" xl="12">
                <Card body xs="auto" xl="100">
                    <CardHeader tag="h5">Related Contents</CardHeader>
                    <CardBody>
                    <CardText>User created content used in WW APIs completely free. If you develop something cool using the tools, you can send us to be showcased here.</CardText>
                    </CardBody>
                    <Button>Visit Archives</Button>
                </Card>
                </Col>
                <Col xs="12" sm="6" md="12" lg="6" xl="12">
                <Card body xs="12" xl="12">
                  {/* Used persistent quicklinks from components/persistent*/}
                  <QuickLinks/>
                </Card>
                </Col>
                </Row>
              </Col>
            </Row>

            <Footer/>
        </Content>
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
