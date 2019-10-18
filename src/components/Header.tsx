import React from 'react'
// import styled from '@emotion/styled'
// import { css } from '@emotion/core'
import { Link } from 'gatsby'
import { LunrSearch } from './LunrSearch'
import styles from "../components/container.module.css"
import Logo from "../../content/images/ue4.png"
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
  DropdownItem } from 'reactstrap'


// const style = {
//     container: css`
//       background: #ff5700;
//       margin-bottom: 1.45rem;
//     `,
//     wrapper: css`
//       display: grid;
//       grid-template-columns: auto 10rem;
//       grid-template-rows: auto;
//       margin: 0 auto;
//       max-width: 960px;
//       padding: 1.45rem 1.0875rem;
//     `,
//     title: css`
//       margin: 0;
//       display: inline-block;
//     `
//   }
  
// const TitleLink = styled(Link)`
//   color: #fff;
// 
//   &:active,
//   &:hover {
//     color: #fff;
//   }
// `
interface HeaderProps {
    readonly title: string
}
// This line is giving me errors... 
// <Navbar className={styles.NavBarCustom} dark expand="md"></Navbar>
const Header = ({title}: HeaderProps) => (
    <div>
      <Navbar className={styles.NavBarCustom} dark expand="md">
        <img src={Logo} alt="logo" className={styles.SpecialLogo}/>
          <NavbarBrand href="/">WinterWildfire</NavbarBrand>
          <NavbarToggler/>
          <Collapse navbar>
          <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://gitlab.com/winterwildfire">Gitlab</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://gitlab.com/winterwildfire">Twitter</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://gitlab.com/winterwildfire">About</NavLink>
              </NavItem>
              
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            </Collapse>
          </Navbar>
    </div>
)

export default Header;

// <div css={style.wrapper}>
// <h1 css={style.title}>
//     <TitleLink to="/">{title}</TitleLink>
// </h1>
// <LunrSearch limit={10}/>
// </div>