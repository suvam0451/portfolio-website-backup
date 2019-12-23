import React, { useState } from "react";
import { graphql, navigate } from "gatsby";
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

const MobileNavbar = styled("div")`
	display: block;
	@media (min-width: 540px) {
		display: none;
	}
`

const DesktopNavbarSection = styled("div")`
	display: none;
	@media (min-width: 540px) {
		display: block;
	}
`

// Navigation section always visible on top.
function NavSection() {
	function ButtonNavigation(e: Event) {
		navigate("/");
	}

	return (
		<div>
			<Navbar>
				<div className="bp3-navbar-group bp3-align-left">
					<NavbarHeading>WinterWildfire</NavbarHeading>

					<DesktopNavbarSection>
						<span className="bp3-navbar-divider" />
						<button className="bp3-button bp3-minimal bp3-icon-home" onClick={ButtonNavigation}>
							Home
						</button>
						<button className="bp3-button bp3-minimal bp3-icon-document">
							Tutorials
						</button>
						<button className="bp3-button bp3-minimal bp3-icon-build">
							Tools
						</button>
						<button className="bp3-button bp3-minimal bp3-icon-git-branch">
							Repositories
						</button>
					</DesktopNavbarSection>
				</div>
				<div className="sm:visible md:invisible lg:invisible xl:invisible">
					<button className="p-2 bp3-navbar-group bp3-align-right bp3-button bp3-minimal">
						<img className="h-6 content-center" src={Hamburger}></img>
					</button>
				</div>
			</Navbar>
			<MobileNavbar>
				<div>
					<button className="bp3-fill bp3-button bp3-icon-home">
						Home
					</button>
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
			</MobileNavbar>
			{/* <div className="sm:visible md:invisible lg:invisible xl:invisible md:h-0 lg:h-0 xl:h-0">

			</div> */}
		</div>
	);
}

export { NavSection };
