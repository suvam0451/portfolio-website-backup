import React from "react";
import { Navbar, NavbarHeading } from "@blueprintjs/core";
import Hamburger from "../../content/images/hamburger-menu.png";

// Navigation section always visible on top.
function TitleBar() {
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
						<img className="h-6 content-center" src={Hamburger} />
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

export { TitleBar };
