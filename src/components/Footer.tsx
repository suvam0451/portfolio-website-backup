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
