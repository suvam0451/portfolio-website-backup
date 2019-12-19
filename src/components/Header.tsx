import React, { useState, memo } from "react";
import { Link } from "gatsby";
import styles from "../components/container.module.css";
import Logo from "../../content/images/ue4.png";
import {
	Alert,
	Breadcrumb,
	BreadcrumbItem,
	Collapse,
	Nav,
	NavbarBrand,
	NavItem,
	NavLink,
	Navbar,
	NavbarToggler,
	UncontrolledCollapse,
	UncontrolledDropdown,
	DropdownMenu,
	DropdownToggle,
	DropdownItem,
} from "reactstrap";

interface HeaderProps {
	readonly title: string;
}
const Header = React.memo(function myHeader(title: string = "N/A") {
	return (
		<div>
			<Navbar className={styles["NavBarCustom"]} dark expand="md">
				<NavbarBrand href="/">WinterWildfire</NavbarBrand>
				<NavbarToggler />
				<Collapse navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink href="https://gitlab.com/winterwildfire">
								Gitlab
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://gitlab.com/winterwildfire">
								Twitter
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://gitlab.com/winterwildfire">
								About
							</NavLink>
						</NavItem>

						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								Options
							</DropdownToggle>
							<DropdownMenu right>
								<DropdownItem>Option 1</DropdownItem>
								<DropdownItem>Option 2</DropdownItem>
								<DropdownItem divider />
								<DropdownItem>Reset</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
	// }
});

export default Header;
