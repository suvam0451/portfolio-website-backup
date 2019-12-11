import React, { useState } from "react";
import { graphql } from "gatsby";
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

// Navigation section always visible on top.
function NavSection() {
	return (
		<div>
			<Navbar>
				<div className="bp3-navbar-group bp3-align-left">
					<NavbarHeading>WinterWildfire</NavbarHeading>
					<span className="bp3-navbar-divider" />
					<button className="bp3-button bp3-minimal bp3-icon-home">
						Home
					</button>
					<div className="sm:invisible md:visible lg:visible xl:visible">
						<button className="bp3-button bp3-minimal bp3-icon-document">
							Tutorials
						</button>
						<button className="bp3-button bp3-minimal bp3-icon-build">
							Tools
						</button>
						<button className="bp3-button bp3-minimal bp3-icon-git-branch">
							Repositories
						</button>
					</div>
				</div>
				<div className="sm:visible md:invisible lg:invisible xl:invisible">
					<button className="p-2 bp3-navbar-group bp3-align-right bp3-button bp3-minimal">
						<img className="h-6 content-center" src={Hamburger}></img>
					</button>
				</div>
			</Navbar>
			<div className="sm:visible md:invisible lg:invisible xl:invisible md:h-0 lg:h-0 xl:h-0">
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
			</div>
		</div>
	);
}

export { NavSection };
