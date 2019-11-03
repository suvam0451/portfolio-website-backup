import React, { Component } from 'react';
import { CardGroup, Pagination, PaginationItem, PaginationLink, Alert, Card, Button, CardTitle, CardText, CardBody, CardHeader, FormGroup,Input,Label } from 'reactstrap';
import { StaticQuery, graphql } from "gatsby";
import { Row, Col } from 'reactstrap';
import Image from 'gatsby-image'
import styles from "../components/container.module.css"
import { Link } from "gatsby";

declare module JsonTS {
    export interface Image {
        name: string;
        img1: any;
    }
    export interface Element {
        node: {
            date: string;
            label: string;
            desc: string;
            RelativeLink: string;
            frontimg: Image;
            category: string;
            tags: string;
        }
    }
}

export default function Index(data : JsonTS.Element) {
    const MakeTutorialBoxes = (data : any) => {
       const arr :any = [];
       data.allTutorialCardsJson.edges.forEach(
        function (it : JsonTS.Element) {  
         arr.push(
          <Col xs="12" sm="12" md="6" lg="6" xl="4">
              <div className={styles.boxbody}>
                  <Card className={styles.DarkCard}>
                      <Row>
                          <Col xs="6" sm="6" md="6" lg="6" xl="6">
                              <Card className={styles.DarkCard}>
                                  <CardHeader className={styles.DarkCardHead}>
                                  <h2 className = {styles.username}>{it.node.label}</h2>
                                  </CardHeader>  
                                  <CardBody>
                                  <p className = {styles.excerpt}>{it.node.desc}</p>
                                  <hr className="my-2"/>
                                  <Link to = {it.node.RelativeLink}>Link</Link>
                                  </CardBody>
                              </Card>
                          </Col>
                          <Col xs="6" sm="6" md="6" lg="6" xl="6">
                              <CardBody>
                                  <Image fluid = {it.node.frontimg.img1.childImageSharp.fluid} alt="GifGallery"/>
                              </CardBody>
                          </Col>
                      </Row>
                  </Card>
              </div>
          </Col>
        )  
         });
       return arr;
    }
    return(
        <div>
            <hr className="my-2"/>
            <Alert className={styles.DarkCardBody} color="secondary">
              <h4>You are in Tutorials section.</h4>
            </Alert> 
            <CardGroup>
                <Card className={styles.DarkCard} body>
                  <Row>
                    <Col>
                    <FormGroup>
                      <Input type="textarea" name="text" id="exampleText" className={styles.DarkCardHead}/>
                    </FormGroup>
                    </Col>
                    <Col>
                      <Button>Go somewhere</Button>
                    </Col>
                  </Row>
                </Card>       
                <Card className={styles.DarkCard} body>
                  <CardBody>
                    <p>
                      <li>Use <b>search</b> features to lock on-to content.</li>
                      <li>Request for features to be covered in <b>Request</b>.</li>
                      <li>Dedicated discussion page available for queries <b>per page</b>.</li>
                    </p> 
                  </CardBody>
                </Card>
            </CardGroup>
            <hr className="my-2"/>
            <StaticQuery
          query = {graphql`
            query TutorialCardsQuery($section: String) {
              allTutorialCardsJson(
                filter: {
                  label: {eq: $section }
                }
              ) {
                edges{
                  node {
                    date
                    label
                    desc
                    RelativeLink
                    frontimg {
                      name
                      img1 {
                        childImageSharp {
                          fluid(maxWidth: 512) {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                    }
                    category
                    tags
                  }
                }
              }
            }
          `}
          render = {data => (
          <>
            <Row>
              {/*A GraphQL query to fill in rows.*/}
              {MakeTutorialBoxes(data)}
            </Row>
            <Pagination aria-label="Page navigation example">
              <PaginationItem disabled>
                <PaginationLink first href="#" />
              </PaginationItem>
              <PaginationItem disabled>
                <PaginationLink previous href="#" />
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink href="#">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink last href="#" />
              </PaginationItem>
          </Pagination>
          </>
          )}
        />
        </div>
    )
}