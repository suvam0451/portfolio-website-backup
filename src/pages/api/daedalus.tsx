import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";
import { Alert, Footer } from "../components/Decorations";
import Header from "../components/Header";
import styles from "../components/container.module.css";
import classnames from "classnames";
import TutorialSection from "../components/TutorialSection";
import axios from "axios";
import priceAPI from "../utils/priceAPI";
import {
	Nav,
	NavbarBrand,
	NavItem,
	NavLink,
	// Navbar,
	UncontrolledCollapse,
	UncontrolledDropdown,
	DropdownMenu,
	DropdownToggle,
	DropdownItem,
	Dropdown,
	Jumbotron,
	TabPane,
	TabContent,
} from "reactstrap";

import {
	Alignment,
	Button,
	Intent,
	Breadcrumbs,
	Breadcrumb,
	IBreadcrumbProps,
	Icon,
	Card,
	Navbar,
	NavbarHeading,
	NavbarDivider,
	NavbarGroup,
	Classes,
} from "@blueprintjs/core";
import { NavSection } from "../components/NavBar";

function Daedalus(props: any) {
	return <>Hello there</>;
}

export default Daedalus;
