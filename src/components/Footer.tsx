<<<<<<< HEAD
import React, {useState} from "react"
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap'
import styles from "../components/container.module.css"
// import styled from '@emotion/styled'


// const TitleLink = styled(Link)`
// color: #fff;
// 
// &:active,
// &:hover {
//   color: #fff;
// }
// `
// const DarkAlert = styled(Alert)`{
//     background-color: #202020;
//     border-color: #202020;
//     color: #969696;
//     border-bottom: 5px;
//     margin-bottom: 5px;
//     margin-top: 5px;
//     margin-right: 0px;
//     margin-left: 0px;
//     border-right: 0px;
//     border-left: 0px;
//     box-shadow: 2px 2px 1px 1px rgba(32,32,32,0.5);
// }`

=======
import 'bootstrap/dist/css/bootstrap.min.css' // Without this line, css breaks.
import { Alert } from 'react-bootstrap'
import styles from "../components/container.module.css"


>>>>>>> development
=======
import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css"; // Without this line, css breaks.
import { Alert } from "react-bootstrap";
// import styles from "../components/container.module.css";
import ue4_icon from "../../content/images/ue4-icon.png";
import styled from "@emotion/styled";
import {
	Button,
	Intent,
	Breadcrumbs,
	Breadcrumb,
	IBreadcrumbProps,
	Icon,
	Card,
	Elevation,
} from "@blueprintjs/core";

const MyFooter = styled.div`
	color: turquise;
`;
>>>>>>> production
export const Footer = () => {
	return (
		<div className="bg-gray-600 px-4 py-2">
			<h3>Thank you for visiting!</h3>
			<h6>
				Hope you got the resources you needed. Come visit again :)
			</h6>
			<h6>
				I upload weekly and revamp bi-monthly. You can support my work
				at <b>Patreon</b> | <b>Paypal</b> | <b>Marketplace</b> |{" "}
				<b>gumroad</b>.
			</h6>
			{/* <input
				className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
				type="email"
				placeholder="jane@example.com"
			></input> */}
		</div>
	);
};
