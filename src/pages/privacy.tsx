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
import SoftwareSection from "../components/SoftwareSection";
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

export default function Privacy() {
	return (
		<>
			<div>
				<Helmet>
					<meta charSet="utf-8" />
					<title>
						WinterWildfire - Advanced gamedev tutorials and toolkits
					</title>
					<meta
						name="description"
						content="Learn Unreal Engine 4 programming with free tutorials and sample projects."
					/>
					<meta name="robots" content="index, follow" />
					<link
						rel="canonical"
						href="https://winterwildfire.netlify.com"
					/>
					<meta
						name="google-site-verification"
						content="qHPn-iP9IEBZyHkA-06dYHzGCYAtUrsg2QINFSnFuVA"
					/>
				</Helmet>
				<NavSection />
				<div>
					<h3 className="text-center">
						Privacy Policy for this website
					</h3>
					<p className="w-2/4 text-center">
						One of my main priority is the privacy of my visitors.
						This Privacy Policy document contains types of information
						that is collected during various transactions and how it
						is stored and used. If you have additional questions or
						require more information about our Privacy Policy, do not
						hesitate to contact us through email at Email@Website.com
					</p>
				</div>
			</div>
		</>
	);
}
