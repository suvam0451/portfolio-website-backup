import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "gatsby";
import React, { Component } from 'react';
import styles from "../../components/container.module.css"
import { Row, Col } from 'reactstrap';
import { StaticQuery, graphql } from "gatsby";
import { Card, Button, CardText, CardBody, CardHeader } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import rehypeReact from "rehype-react"


// declare module MarkdownTS {
//     export interface Image {
//         name: string;
//         img1: any;
//     }
//     export interface Post {
//         node: {
//             htmlAst: any;
//             frontmatter: {
//                 title: string;
//                 path: string;
//                 date: string;
//                 post: string;
//                 index: string
//             }
//         }
//     }
// }
// 
// export const secondMarkDownQuery = graphql`
//    query {
//    allMarkdownRemark(
//        filter: { frontmatter: {post: {eq: "gitlabsetup" }}}
//        sort: { order: ASC, fields: [frontmatter___index] }
//        limit: 1000 )
//        {
//        edges {
//            node {
//            htmlAst
//            frontmatter {
//                title
//                path
//                date(formatString: "MMMM DD, YYYY")
//                post
//                index
//            }
//            }
//        }
//        }
//    }`
// 
// function Tutorials {
//     const constGetDocs(edges, number){
//         const arr = [];
//         var index = 0;
//         const renderAst = new rehypeReact({
//           createElement: React.createElement,
//           components: { "vssource": VSSource,
//                         "dllentrypoint": DllEntrypoint }
//         }).Compiler
//         edges.forEach(it =>
//           {
//             if ( it.node.frontmatter.post == "gitlabsetup"){
//               index = index + 1;
//             }
//             if (index == number){
//               arr.push(
//                 <>
//                   <Card className ={styles.DarkCard} body>
//                     <CardHeader tag="h4">{it.node.frontmatter.title}</CardHeader>
//                     <CardBody className={styles.DarkCardBody}>
//                       <div>
//                         { /*Previously, dangerouslySetInnerHTML={{ __html: it.node.html }}*/ }
//                         {renderAst(it.node.htmlAst)}
//                       </div>
//                     </CardBody>
//                   </Card>
//                 </> 
//               )
//             }
//           }
//         );
//         //console.log(arr);
//         return arr;
//     }
//     return(
//         <>
//         <div className={styles.BasePage}>
//             <Header/>
//             <Breadcrumb bsPrefix={styles.DarkCard} listClassName={styles.DarkCard} dark>
//                 <BreadcrumbItem><Link to = "/">Home</Link></BreadcrumbItem>
//                 <BreadcrumbItem><Link to = "/">UE4</Link></BreadcrumbItem>
//                 <BreadcrumbItem active>tutorials</BreadcrumbItem>
//                 <BreadcrumbItem active>dllandlibs</BreadcrumbItem>
//                 {//<BreadcrumbItem active>{ this.MakeTutorialBoxes(edges, 2) }</BreadcrumbItem>
//                 }
// 
//             </Breadcrumb>
//         <Row>
//           <Col xs ="12" sm="12" md="12" lg="12" xl="2">
//           <Row>
//             <StatusCard/>
//             <Col xs ="12" sm="12" md="12" lg="12" xl="12">
//               <NavCard/>
//             </Col>
//             </Row>
//             </Col>
//             <Col xs="12" sm="12" md="12" lg="12" xl="7">
//                 { this.GetDocs(edges, 1) }
//                 { this.GetDocs(edges, 2) }
//                 { this.GetDocs(edges, 3) }
//                 { this.GetDocs(edges, 4) }
//                 { this.GetDocs(edges, 5) }
//               <p/>
//               <hr calss="my-2"/>
//             </Col>
//             <Col xs="12" sm="12" md="12" lg="6" xl="3">
//                 <Row>
//                 <Col xs="12" sm="6" md="12" lg="6" xl="12">
//                 <Card className ={styles.DarkCard} body xs="auto" xl="100">
//                     <CardHeader tag="h5">Related Contents</CardHeader>
//                     <CardBody>
//                     <CardText>User created content used in WW APIs completely free. If you develop something cool using the tools, you can send us to be showcased here.</CardText>
//                     </CardBody>
//                     <Button>Visit Archives</Button>
//                 </Card>
//                 </Col>
//                 <Col xs="12" sm="6" md="12" lg="6" xl="12">
//                 <Card className ={styles.DarkCard} body xs="12" xl="12">
//                   {/* Used persistent quicklinks from components/persistent*/}
//                 </Card>
//                 </Col>
//                 </Row>
//             </Col>
//             </Row>
//         </div>
//         </>
//     )
// }