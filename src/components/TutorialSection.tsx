import React, { Component } from "react";
import {
	CardGroup,
	Pagination,
	PaginationItem,
	PaginationLink,
	Alert,
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
import { Link } from "gatsby";
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

export default function Index(data: JsonTS.Element) {
	const MakeTutorialBoxes = (data: any) => {
		const arr: any = [];
		data.allTutorialCardsJson.edges.forEach(function(
			it: JsonTS.Element,
		) {
			arr.push(
				<Col xs="12" sm="12" md="6" lg="6" xl="4">
					<TutorialCard
						title={it.node.label}
						desc={it.node.desc}
						date=""
						software=""
						image={it.node.frontimg.img1.childImageSharp.fluid}
					/>
					<Link to={it.node.RelativeLink}>Click here</Link>
				</Col>,
			);
		});
		return arr;
	};
	return (
		<div>
			<hr className="my-2" />
			{/* <div className="bg-red-300 h-16">
				<h4 className="content-center">
					You are in Tutorials section.
				</h4>
			</div> */}
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
						<p className="font-bold mb-2">
							You are in tutorial section
						</p>
						<p className="text-md p-0 mb-1">
							This page showcases popular/new content. For complete
							list go here.
						</p>
					</div>
				</div>
			</div>
			{/* <CardGroup>
				<Card className={styles.DarkCard}>
					<Row>
						<Col>
							<FormGroup>
								<Input
									type="textarea"
									name="text"
									id="exampleText"
									className={styles.DarkCardHead}
								/>
							</FormGroup>
						</Col>
						<Col>
							<Button>Go somewhere</Button>
						</Col>
					</Row>
				</Card>
				<Card
					className={styles.DarkCard}
					interactive={true}
					elevation={Elevation.FOUR}
				>
					<CardBody>
						<p>
							<li>
								Use <b>search</b> features to lock on-to content.
							</li>
							<li>
								Request for features to be covered in <b>Request</b>.
							</li>
							<li>
								Dedicated discussion page available for queries{" "}
								<b>per page</b>.
							</li>
						</p>
					</CardBody>
				</Card>
			</CardGroup> */}
			<hr className="my-2" />
			<StaticQuery
				query={graphql`
					query TutorialCardsQuery($section: String) {
						allTutorialCardsJson(
							filter: { label: { eq: $section } }
						) {
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
						}
					}
				`}
				render={data => (
					<>
						<div className="mx-1">
							<Row>
								{/*A GraphQL query to fill in rows.*/}
								{MakeTutorialBoxes(data)}
							</Row>
							<ul className="flex list-reset border border-grey-light rounded w-auto font-sans">
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
							</ul>
						</div>
						{/* <Pagination aria-label="Page navigation example">
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
						</Pagination> */}
					</>
				)}
			/>
		</div>
	);
}
