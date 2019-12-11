import { Link } from "gatsby";
import React, { Component } from 'react';
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Pagination, PaginationItem, PaginationLink, Alert, Collapse, TabContent, TabPane, Nav, NavItem, NavLink, Table, Card, Button, CardTitle, CardText, Progress, ListGroup, ListGroupItem, Badge, Jumbotron, CardLink, CardBody, CardHeader, CardGroup, UncontrolledCollapse } from 'reactstrap';
import styles from "./container.module.css"


function QuickLinks() {
    return (
        <>
        <Card className ={styles.DarkCard} body xs="12" xl="12">
              <CardHeader tag="h5" className={styles.DarkCardHead}>Quick Links</CardHeader>
              <CardBody className={styles.DarkCardBody}>
              <Table responsive size="sm" hover bordered className={styles.DarkCardTable} dark>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>To</th>
                    <th>Link</th>
                    <th>Link Description</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Discord</td>
                    <td><a href = "https://discord.gg/6KKX99g">Server</a></td>
                    <td>For extended discussions.</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Sitemap</td>
                    <td>N/A</td>
                    <td>Not implemented yet</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>gitlab</td>
                    <td><a href ="https://gitlab.com/winterwildfire">Group</a></td>
                    <td>source for select projects</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Admin</td>
                    <td><a href ="https://gitlab.com/suvam0451">Debashish</a></td>
                    <td>Direct contact for issues/bugs.</td>
                  </tr>
                </tbody>
              </Table>
              </CardBody>
              {
                //<Button>Access Sitemap</Button>
              }
            </Card>
        </>
    )
}

export { QuickLinks }