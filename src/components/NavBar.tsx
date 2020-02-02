import React, { useState } from "react";
import { graphql, Link } from "gatsby";
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
import Image from "gatsby-image";
import Hamburger from "../../content/images/hamburger-menu.png";
import styled from "@emotion/styled";
import { Collapse } from "reactstrap";

const MobileNavbar = styled("div")`
	display: block;
	@media (min-width: 540px) {
		display: none;
	}
`;

const DesktopNavbarSection = styled("div")`
	display: none;
	@media (min-width: 540px) {
		display: block;
	}
`;

const ComponentStyle = styled("div")`
	max-width: 1920px;
	margin: 0 auto;
`;

// Navigation section always visible on top.
function NavSection() {
	// State variables
	const [Collapsed, setCollapsed] = useState(true);

	// switched css
	const CollapsibleDiv = styled("div")`
		display: ${props => (Collapsed ? `none` : "block")};
	`;

	function MobileMenuToggle() {
		setCollapsed(!Collapsed);
	}
	return (
		<ComponentStyle>
			<Navbar>
				<div className="bp3-navbar-group bp3-align-left">
					<NavbarHeading>WinterWildfire</NavbarHeading>
					<DesktopNavbarSection>
						<span className="bp3-navbar-divider" />
						<Link to="/">
							<button className="bp3-button bp3-minimal bp3-icon-home">
								Home
							</button>
						</Link>
						<button className="bp3-button bp3-minimal bp3-icon-document">
							Tutorials
						</button>

						<button className="bp3-button bp3-minimal bp3-icon-build">
							Tools
						</button>
						<a href="https://gitlab.com/winterwildfire">
							{/* git-repo */}
							<button className="bp3-button bp3-minimal bp3-icon-git-branch">
								Repositories
							</button>
						</a>
					</DesktopNavbarSection>
				</div>
				<MobileNavbar>
					<button
						className="p-2 bp3-navbar-group bp3-align-right bp3-button bp3-minimal"
						onClick={MobileMenuToggle}
					>
						<img className="h-6 content-center" src={Hamburger} />
					</button>
				</MobileNavbar>
			</Navbar>
			<MobileNavbar>
				<CollapsibleDiv>
					<div>
						<Link to="/">
							<button className="bp3-fill bp3-button bp3-icon-home">
								Home
							</button>
						</Link>
					</div>
					<div>
						<button className="bp3-button bp3-icon-document bp3-fill">
							Tutorials
						</button>
					</div>
					<div>
						<button className="bp3-button bp3-icon-build bp3-fill">
							Tools
						</button>
					</div>
				</CollapsibleDiv>
			</MobileNavbar>
		</ComponentStyle>
	);
}

export { NavSection };
