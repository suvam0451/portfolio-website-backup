import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import { Navbar, NavbarHeading } from "@blueprintjs/core";
import Hamburger from "../../content/images/hamburger-menu.png";

// const MobileNavbar = styled("div")`
// 	display: block;
// 	@media (min-width: 540px) {
// 		display: none;
// 	}
// `;

// const DesktopNavbarSection = styled("div")`
// 	display: none;
// 	@media (min-width: 540px) {
// 		display: block;
// 	}
// `;

// const ComponentStyle = styled("div")`
// 	max-width: 1920px;
// 	margin: 0 auto;
// 	z-index: 40;
// `;

// Navigation section always visible on top.
function NavSection() {
	// State variables
	const [Collapsed, setCollapsed] = useState(true);

	function MobileMenuToggle() {
		setCollapsed(!Collapsed);
	}
	return (
		/* // FIXME: ComponentStyle */
		<div>
			<Navbar>
				<div className="bp3-navbar-group bp3-align-left">
					<NavbarHeading>WinterWildfire</NavbarHeading>
					{/* // FIXME: DesktopNavbarSection */}
					<div>
						<span className="bp3-navbar-divider" />
						<Link to="/">
							<button className="bp3-button bp3-minimal bp3-icon-home">Home</button>
						</Link>
						<button className="bp3-button bp3-minimal bp3-icon-document">
							Tutorials
						</button>

						<button className="bp3-button bp3-minimal bp3-icon-build">Tools</button>
						<a href="https://gitlab.com/winterwildfire">
							{/* git-repo */}
							<button className="bp3-button bp3-minimal bp3-icon-git-branch">
								Repositories
							</button>
						</a>
					</div>
				</div>
				{/* // FIXME: */}
				<div>
					<button
						className="p-2 bp3-navbar-group bp3-align-right bp3-button bp3-minimal"
						onClick={MobileMenuToggle}
					>
						<img className="h-6 content-center" src={Hamburger} />
					</button>
				</div>
			</Navbar>
			{/* FIXME: MobileNavbar */}
			<div>
				<div className={Collapsed ? `hidden` : "viisble"}>
					<div>
						<Link to="/">
							<button className="bp3-fill bp3-button bp3-icon-home">Home</button>
						</Link>
					</div>
					<div>
						<button className="bp3-button bp3-icon-document bp3-fill">Tutorials</button>
					</div>
					<div>
						<button className="bp3-button bp3-icon-build bp3-fill">Tools</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export { NavSection };
