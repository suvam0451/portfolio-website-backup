import React, { useState } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
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
import BackgroundImage from "gatsby-background-image";

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
			className="bg-teal-200 border-teal-500 rounded-b text-teal-900 shadow-md ww-alert"
			role="alert"
		>
			<div className="flex py-1">
				<div className="py-1">
					<svg
						className="fill-current h-6 w-6 text-teal-500 mr-4 mt-3"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
					>
						<path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
					</svg>
				</div>
				<div className="ww-alert-core">
					<p className="font-bold mb-2 ww-alert-head">{props.head}</p>
					<p className="text-md p-0 mb-1 ww-alert-body">
						{props.body}
					</p>
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
			<p>
				I upload weekly and revamp bi-monthly. You can support my work
				at <b>Patreon</b> | <b>Paypal</b> | <b>Marketplace</b> |{" "}
				<b>Gumroad</b>
			</p>
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
			<div className="bg-gray-400">
				<Card>
					<div className="bg-gray-400 p-4 border-2 border-gray-600 rounded-lg">
						<h4>Community</h4>
						<div className="border-orange-300 border-4 rounded-sm">
							<img
								src="https://discordapp.com/assets/f8389ca1a741a115313bede9ac02e2c0.svg"
								className="h-16 w-16 inline"
							/>
							<img
								src="https://www.stickpng.com/assets/images/5847f997cef1014c0b5e48c1.png"
								className="h-12 w-12 inline border-orange-300 border-b-4"
							/>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Microsoft_Office_OneNote_%282018%E2%80%93present%29.svg"
								className="h-12 w-12 inline ml-2"
							/>
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg/1200px-Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg.png"
								className="h-12 w-12 inline ml-1"
							/>
							<img
								src="https://image.flaticon.com/icons/svg/25/25231.svg"
								className="h-12 w-12 inline ml-1"
							/>
						</div>
						<div className="border-orange-300 border-b-4 border-l-4 border-r-4 rounded-sm">
							The content in this section should change with selection
							of logo above. Currently gitlab is selected.
						</div>
					</div>
				</Card>
			</div>
		</>
	);
}

interface AlertProps {
	readonly head: string;
	readonly body: string;
	type?: EAlert;
}

interface GW2_PriceTag {
	readonly gold: string;
	readonly silver: string;
	readonly copper: string;
}
const Copper = styled.div`
	background-image: url(https://render.guildwars2.com/file/94DCAE59215C0096449906A81F202B0201FBA85B/631486.png);
	background-repeat: no-repeat;
	height: 24px;
	width: 24px;
	padding-left: 16px;
	display: inline-block;
	margin-bottom: -6px;
`;

/*CopperCoin: any*/
interface PriceTagProps {
	GoldValue?: number;
	SilverValue?: number;
	CopperValue?: number;
}
function GW2_PriceTag(Val: PriceTagProps) {
	// query hook
	const { GoldCoin, SilverCoin, CopperCoin } = useStaticQuery(graphql`
		{
			CopperCoin: file(
				relativeDirectory: { eq: "images/gw2" }
				name: { eq: "Copper_coin" }
			) {
				childImageSharp {
					fixed(width: 18, height: 18) {
						...GatsbyImageSharpFixed
					}
				}
			}
			SilverCoin: file(
				relativeDirectory: { eq: "images/gw2" }
				name: { eq: "Silver_coin" }
			) {
				childImageSharp {
					fixed(width: 18, height: 18) {
						...GatsbyImageSharpFixed
					}
				}
			}
			GoldCoin: file(
				relativeDirectory: { eq: "images/gw2" }
				name: { eq: "Gold_coin" }
			) {
				childImageSharp {
					fixed(width: 18, height: 18) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`);

	return (
		<div>
			<div className="inline-block">{Val.GoldValue}</div>
			<BackgroundImage
				className="-mb-1 mr-1"
				fixed={GoldCoin.childImageSharp.fixed}
			/>
			<div className="inline-block">{Val.SilverValue}</div>
			<BackgroundImage
				className="-mb-1 mr-1"
				fixed={SilverCoin.childImageSharp.fixed}
			/>
			<div className="inline-block">{Val.CopperValue}</div>
			<BackgroundImage
				className="-mb-1 mr-1"
				fixed={CopperCoin.childImageSharp.fixed}
			/>
			{/* <Copper></Copper>3  className="w-8 h-8 bg-no-repeat pl-16 inline-block"*/}
		</div>
	);
}

/*CopperCoin: any*/
interface CollapsibleDefinitionProps {
	GoldValue?: number;
	SilverValue?: number;
	CopperValue?: number;
}
function CollapsibleDefinition() {
	return <div></div>;
}

function GifOverlay(props: any) {
	const fucker: any = [];
	const onii = React.Children.map(props.children, function() {
		fucker.push(props.children);
		return "yamete";
	});

	return <div>{fucker}</div>;
}
export {
	Alert,
	Footer,
	QuickLinks,
	NavCard,
	GW2_PriceTag,
	GifOverlay,
	CollapsibleDefinition,
};

// Gets copper, silver and gold coins
// export const query = graphql`
// 	{
// 		Copper: file(
// 			relativeDirectory: { eq: "images/gw2" }
// 			name: { eq: "Copper_coin" }
// 		) {
// 			childImageSharp {
// 				fixed(width: 15, height: 15) {
// 					...GatsbyImageSharpFixed
// 				}
// 			}
// 		}
// 		Silver: file(
// 			relativeDirectory: { eq: "images/gw2" }
// 			name: { eq: "Silver_coin" }
// 		) {
// 			childImageSharp {
// 				fixed(width: 15, height: 15) {
// 					...GatsbyImageSharpFixed
// 				}
// 			}
// 		}
// 		Gold: file(
// 			relativeDirectory: { eq: "images/gw2" }
// 			name: { eq: "Gold_coin" }
// 		) {
// 			childImageSharp {
// 				fixed(width: 15, height: 15) {
// 					...GatsbyImageSharpFixed
// 				}
// 			}
// 		}
// 	}
// `;
