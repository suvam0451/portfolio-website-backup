import React, {useState} from 'react'
import { graphql } from 'gatsby'
import { Layout } from "../components/Layout"
import { Link } from 'gatsby'
import { Helmet } from "react-helmet"
import { Footer } from "../components/Footer"
import Header from "../components/Header"
import styles from "../components/container.module.css" 
import classnames from 'classnames';
import TutorialSection from "../components/TutorialSection"
import axios from "axios"
import priceAPI from '../utils/priceAPI.js'
import { 
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
import { Segment, Container } from "semantic-ui-react"
import { Table } from 'react-bootstrap'

function SkrittKit() {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <th>#</th>
          <th>id</th>
          <th>name</th>
          <th>Buying At</th>
          <th>Selling At</th>
          <th>Margin</th>
        </thead>
        <tbody>
          <td>Lonely</td>
          <td>Lonely</td>
          <td>Lonely</td>
          <td>Lonely</td>
          <td>Lonely</td>
          <td>Lonely</td>
        </tbody>
      </Table>
    </div>
  )
}

export default SkrittKit;