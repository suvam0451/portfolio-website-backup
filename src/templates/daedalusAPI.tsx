import * as React from "react";
import Link from "gatsby-link";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Footer, Alert, QuickLinks } from "../components/Decorations";
import Header from "../components/Header";
import { Row, Col } from "reactstrap";
import { NavSection } from "../components/NavBar";
import styled from "@emotion/styled";
import Sidebar from "../components/SideBars/DaedalusSidebar";
import { Helmet } from "react-helmet";
import { Button } from "@blueprintjs/core";
import { StatusCard } from "../components/StatusCard";

const Content = styled.div`
	margin: 0 auto;
	padding: 0.1rem 0.1rem;
`;

// Visible: {}, Hidden: {}
const ScrollArea = styled.div`
	height: 92vh;
	@media (max-width: 1200px) {
		height: auto;
	}
`;
// background-color: #2B2B2B
// background-color: #b1a296;
const MainPage = styled.div`
	background-color: #3e3e3e;
`;

const MobileNavbar = styled("div")`
	display: block;
	@media (max-width: 540px) {
		display: none;
	}
`;

const TitleText = styled.div`
	color: #c05621;
`;

/** Style definitions for the component page */
const ContainerStyle = styled("div")`
	max-width: 1920px;
	margin: 0 auto;
`;

export default function PageTemplate(data: MdxProps) {
	return (
		<ContainerStyle>
			<MainPage>
				<div className="mt-16 z-20">
					<Helmet>
						<title>{data.data.mdx.frontmatter.seotitle}</title>
						<meta
							name="description"
							content={data.data.mdx.frontmatter.description}
						/>
						<meta
							name="og:title"
							property="og:title"
							content={data.data.mdx.frontmatter.seotitle}
						/>
						<meta
							name="twitter:card"
							content={data.data.mdx.frontmatter.description}
						/>
						<link
							rel="canonical"
							href={data.data.mdx.frontmatter.path}
						/>
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1"
						/>
					</Helmet>
					<div className="relative xl:fixed w-full -mt-16">
						<MainPage>
							<div className="z-20">
								<NavSection />
							</div>
							<div className="p-2 pt-8 z-0 mb-24">
								<Row>
									<Col xs="12" sm="12" md="12" lg="12" xl="2">
										<Sidebar
											FrontMatter={data.data.mdx.frontmatter}
										/>
										<StatusCard
											FrontMatter={data.data.mdx.frontmatter}
										/>
									</Col>
									<Col xs="12" sm="12" md="12" lg="12" xl="7">
										<div className="bg-gray-400 px-4 py-2 border rounded-lg shadow-md list-disc mb-24 overflow-auto object-contain">
											<ScrollArea>
												<h4 className="text-gray-600 mb-4 mt-3">
													<TitleText>
														{data.data.mdx.frontmatter.title}
													</TitleText>
												</h4>
												<MDXRenderer>
													{data.data.mdx.body}
												</MDXRenderer>
												<div className="ww-hide-in-mobile">
													<Footer />
												</div>
											</ScrollArea>
										</div>
									</Col>
									<Col xs="12" sm="12" md="12" lg="6" xl="3">
										<Row>
											<Col xs="12" sm="6" md="12" lg="6" xl="12">
												<div className="bg-gray-500 rounded-t-lg">
													<div className="bg-gray-500 p-4">
														<h4>Related Contents</h4>
														<p>
															User created content used in WW APIs
															completely free. If you develop
															something cool using the tools, you can
															send us to be showcased here.
														</p>
														<Button>Visit Archives</Button>
													</div>
													<QuickLinks />
												</div>
											</Col>
										</Row>
									</Col>
								</Row>
							</div>
						</MainPage>
					</div>
				</div>
			</MainPage>
		</ContainerStyle>
	);
}

export const query = graphql`
	query DaedalusAPIPostQuery($id: String) {
		mdx(id: { eq: $id }) {
			id
			body
			frontmatter {
				path
				title
				date
				moduleID
				submoduleID
				seriesID
				seriesIndex
			}
		}
	}
`;

interface MdxProps {
	data: {
		mdx: {
			id: number;
			body: any;
			frontmatter: {
				path: string;
				title: string;
				description: string;
				seotitle: string;
				moduleID: number;
				submoduleID: number;
				seriesID: number;
				seriesIndex: number;
			};
		};
	};
}
