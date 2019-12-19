import React, { Component, useState } from "react";
import {
	CardGroup,
	Pagination,
	PaginationItem,
	PaginationLink,
	// Alert,
	// Card,
	// Button,
	CardTitle,
	CardText,
	CardBody,
	CardHeader,
	FormGroup,
	Input,
	Label,
} from "reactstrap";
import { StaticQuery, graphql } from "gatsby";
import { Row, Col } from "reactstrap";
import Image from "gatsby-image";
// import styles from "../components/container.module.css";
import styled from "@emotion/styled";
import { Link, useStaticQuery } from "gatsby";
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
import { TutorialCard } from "../components/Boxes";
import { Alert } from "../components/Decorations";

declare module JsonTS {
	export interface Image {
		name: string;
		img1: any;
	}
	export interface Element {
		node: {
			date: string;
			label: string;
			desc: string;
			RelativeLink: string;
			frontimg: Image;
			category: string;
			tags: string;
		};
	}
}
const MyLink = styled(props => <Link {...props} />)`
	box-shadow: 0px;
	color: #000;
	text-decoration: none;

	&:hover {
		text-decoration: none;
		color: #111;
	}
	&:focus,
	&:visited,
	&:link,
	&:active {
		text-decoration: none;
	}
`;
export default function Index() {
	const [CardsPerPage, setCardsPerPage] = useState(12); // Number of cards to display per page
	const { allTutorialCardsJson } = useStaticQuery(graphql`
		query TutorialCardsQuery($section: String) {
			allTutorialCardsJson(filter: { label: { eq: $section } }) {
				edges {
					node {
						date
						label
						desc
						RelativeLink
						frontimg {
							name
							img1 {
								childImageSharp {
									fluid(maxWidth: 512) {
										...GatsbyImageSharpFluid
									}
								}
							}
						}
						category
						tags
					}
				}
				totalCount
			}
		}
	`);

	const MakeTutorialBoxes = () => {
		const arr: any = [];
		let n = CardsPerPage;
		for (let i = 0; i < allTutorialCardsJson.totalCount; i++) {
			let it = allTutorialCardsJson.edges[i];
			if (true) {
				arr.push(
					<Col xs="12" sm="12" md="6" lg="6" xl="4">
						<MyLink to={it.node.RelativeLink} dark>
							<TutorialCard
								title={it.node.label}
								desc={it.node.desc}
								date=""
								software=""
								image={it.node.frontimg.img1.childImageSharp.fluid}
							/>
						</MyLink>
						{/* <Link to={it.node.RelativeLink}>Click here</Link> */}
					</Col>,
				);
				n--;
			} else {
			}
			if (n == 0) {
				break;
			}
		}
		return arr;
	};
	return (
		<div>
			<Alert
				head="You are in tutorial section"
				body="This page showcases popular/new content. For complete list go here."
			/>
			<hr className="my-2" />
			<div className="mx-1">
				<Row>{MakeTutorialBoxes()}</Row>
			</div>
			{/* <ul className="flex list-reset border border-grey-light rounded w-auto font-sans">
								<li>
									<a
										className="block hover:text-white hover:bg-blue text-blue border-r border-grey-light px-3 py-2"
										href="#"
									>
										Previous
									</a>
								</li>
								<li>
									<a
										className="block hover:text-white hover:bg-blue text-blue border-r border-grey-light px-3 py-2"
										href="#"
									>
										1
									</a>
								</li>
								<li>
									<a
										className="block hover:text-white hover:bg-blue text-blue border-r border-grey-light px-3 py-2"
										href="#"
									>
										2
									</a>
								</li>
								<li>
									<a
										className="block text-white bg-blue border-r border-blue px-3 py-2"
										href="#"
									>
										3
									</a>
								</li>
								<li>
									<a
										className="block hover:text-white hover:bg-blue text-blue px-3 py-2"
										href="#"
									>
										Next
									</a>
								</li>
							</ul> */}

			<Pagination aria-label="Page navigation example">
				<PaginationItem disabled>
					<PaginationLink first href="#" />
				</PaginationItem>
				<PaginationItem disabled>
					<PaginationLink previous href="#" />
				</PaginationItem>
				<PaginationItem active>
					<PaginationLink href="#">1</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink next href="#" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink last href="#" />
				</PaginationItem>
			</Pagination>
			{/* </>
				)} */}
			{/* /> */}
			{/* </div> */}
		</div>
	);
}
