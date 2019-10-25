import * as React from "react";
import { Link } from "gatsby";
import {
    Button,
    Segment,
    Container,
    Grid,
    Header,
    Icon,
  } from "semantic-ui-react";

export default function IndexPage(){
    return (
        <>
      <Segment vertical inverted textAlign="center" className="masthead">
        <Container text>
          <Header inverted as="h1">Gatsby 2.0 - Starter kit</Header>
          <Header inverted as="h2">Typescript - Jest - Semantic UI</Header>
          <Button primary size="huge">Get started!</Button>
        </Container>
      </Segment>

    <Segment vertical className="stripe">
    <Grid stackable verticalAlign="middle" className="container">
      <Grid.Row>
        <Grid.Column width="8">
          <Header>Lorem ipsum</Header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Porro laudantium ad, quae, perspiciatis ipsa distinctio.
              </p>
          <Header>Dolor sit amet</Header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Porro laudantium ad, quae, perspiciatis ipsa distinctio.
              </p>
        </Grid.Column>
        <Grid.Column width="6" floated="right">
          {/* TODO replace with a pretty GIF */}
          <Header>Lorem ipsum</Header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Porro laudantium ad, quae, perspiciatis ipsa distinctio.
              </p>
          <Header>Dolor sit amet</Header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Porro laudantium ad, quae, perspiciatis ipsa distinctio.
              </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  </>
)}