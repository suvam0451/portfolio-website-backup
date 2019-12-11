import { Link } from "gatsby";
import React, { Component } from 'react';
import { Col, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Pagination, PaginationItem, PaginationLink, Alert, Collapse, TabContent, TabPane, Nav, NavItem, NavLink, Table, Card, Button, CardTitle, CardText, Progress, ListGroup, ListGroupItem, Badge, Jumbotron, CardLink, CardBody, CardHeader, CardGroup, UncontrolledCollapse } from 'reactstrap';
import styles from "./container.module.css"


function NavCard() {
    return(
    <Col xs ="12" sm="12" md="12" lg="12" xl="12">
        <Card className ={styles.DarkCard} body>
            <CardHeader tag="h5">Navigation Tab</CardHeader>     
            <ListGroup>
                <ListGroupItem active tag="a" href="#" action color="dark">1. Motivation</ListGroupItem>
                <ListGroupItem tag="a" href="#" action color="dark">2. Working locally</ListGroupItem>
                <ListGroupItem tag="a" href="#" action color="dark">3. Working remotely</ListGroupItem>
                <ListGroupItem tag="a" href="#" action color="dark">4. gitignore</ListGroupItem>
                <ListGroupItem tag="a" href="#" action color="dark">5. gitattributes</ListGroupItem>
                <ListGroupItem tag="a" href="#" action color="dark">6. Discussions</ListGroupItem>
            </ListGroup>
        </Card>
    </Col>
    )
}

export { NavCard};