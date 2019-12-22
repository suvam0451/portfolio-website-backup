import React, { useState } from "react";
import { Link } from "gatsby";
import ue4_icon from "../../content/images/ue4-icon.png";
import Image from "gatsby-image";
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

import {
	Col,
	Dropdown,
	DropdownItem,
	DropdownToggle,
	DropdownMenu,
	Pagination,
	PaginationItem,
	PaginationLink,
	Collapse,
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	Table,
	CardTitle,
	CardText,
	Progress,
	ListGroup,
	ListGroupItem,
	Badge,
	Jumbotron,
	CardLink,
	CardBody,
	CardHeader,
	CardGroup,
	UncontrolledCollapse,
} from "reactstrap";

interface BoxProps {
	readonly username: string;
	readonly label: string;
	readonly description: string;
}

interface TutorialCardProps {
	readonly title: string;
	readonly desc: string;
	readonly software: string;
	readonly date: string;
	readonly image: any;
}

enum EAlert {
	Success,
	Warning,
	Failure,
}

interface AlertProps {
	readonly head: string;
	readonly body: string;
	type?: EAlert;
}

// Alert component
function Alert(props: AlertProps) {
	return (
		<div
			className="bg-teal-200 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-1 shadow-md"
			role="alert"
		>
			<div className="flex">
				<div className="py-1">
					<svg
						className="fill-current h-6 w-6 text-teal-500 mr-4 mt-3"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
					>
						<path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
					</svg>
				</div>
				<div>
					<p className="font-bold mb-2">{props.head}</p>
					<p className="text-md p-0 mb-1">{props.body}</p>
				</div>
			</div>
		</div>
	);
}

// Default page footer
function Footer() {
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
}

function NavCard() {
	return (
		<Col xs="12" sm="12" md="12" lg="12" xl="12">
			<Card>
				<CardHeader tag="h5">Navigation Tab</CardHeader>
				<ListGroup>
					<ListGroupItem active tag="a" href="#" action color="dark">
						1. Motivation
					</ListGroupItem>
					<ListGroupItem tag="a" href="#" action color="dark">
						2. Working locally
					</ListGroupItem>
					<ListGroupItem tag="a" href="#" action color="dark">
						3. Working remotely
					</ListGroupItem>
					<ListGroupItem tag="a" href="#" action color="dark">
						4. gitignore
					</ListGroupItem>
					<ListGroupItem tag="a" href="#" action color="dark">
						5. gitattributes
					</ListGroupItem>
					<ListGroupItem tag="a" href="#" action color="dark">
						6. Discussions
					</ListGroupItem>
				</ListGroup>
			</Card>
		</Col>
	);
}

function QuickLinks() {
	return (
		<>
			<Card>
				<h4>Quick links</h4>
				<p>
					User created content used in WW APIs completely free. If you
					develop something cool using the tools, you can send us to
					be showcased here.
				</p>
				<Button>Visit Archives</Button>
			</Card>
			<Card>
				<CardHeader tag="h5">Quick Links</CardHeader>
				<CardBody>
					<Table responsive size="sm" hover bordered dark>
						<thead>
							<tr>
								<th>#</th>
								<th>To</th>
								<th>Link</th>
								<th>Link Description</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>Discord</td>
								<td>
									<a href="https://discord.gg/6KKX99g">Server</a>
								</td>
								<td>For extended discussions.</td>
							</tr>
							<tr>
								<th scope="row">2</th>
								<td>Sitemap</td>
								<td>N/A</td>
								<td>Not implemented yet</td>
							</tr>
							<tr>
								<th scope="row">3</th>
								<td>gitlab</td>
								<td>
									<a href="https://gitlab.com/winterwildfire">
										Group
									</a>
								</td>
								<td>source for select projects</td>
							</tr>
							<tr>
								<th scope="row">4</th>
								<td>Admin</td>
								<td>
									<a href="https://gitlab.com/suvam0451">Debashish</a>
								</td>
								<td>Direct contact for issues/bugs.</td>
							</tr>
						</tbody>
					</Table>
				</CardBody>
				{
					//<Button>Access Sitemap</Button>
				}
			</Card>
		</>
	);
}

export { Alert, Footer, QuickLinks, NavCard };
