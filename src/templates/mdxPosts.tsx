import * as React from "react";
import Link from "gatsby-link";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { Footer, Alert, QuickLinks } from "../components/Decorations";
import Header from "../components/Header";
import { Helmet } from "react-helmet";
import { NavCard } from "../components/NavCard";
import { StatusCard } from "../components/StatusCard";
import { Row, Col } from "reactstrap";
import {
	Alignment,
	Button,
	Intent,
	Breadcrumbs,
	IBreadcrumbProps,
	Icon,
	Card,
	NavbarHeading,
	NavbarDivider,
	NavbarGroup,
	Classes,
} from "@blueprintjs/core";
import { NavSection } from "../components/NavBar";
import styled from "@emotion/styled";
import { SideBar } from "../components/SideBars/UE4TutorialSidebar";

const Content = styled.div`
	margin: 0 auto;
	padding: 0.1rem 0.1rem;
`;

const MyH1 = (props: any) => <h1 className="p-20" {...props} />;
const MyH2 = (props: any) => <h2 className="p-20" {...props} />;
const MyH3 = (props: any) => <h3 className="p-20" {...props} />;
const MyH4 = (props: any) => <h4 className="p-20" {...props} />;
const MyH5 = (props: any) => <h5 className="p-20" {...props} />;

const components = {
	h1: MyH1,
	h2: MyH2,
	h3: MyH3,
	h4: MyH4,
	h5: MyH5,
};

const ReadContainer = styled("div")`
	/* height: 92vh; */
	padding-left: 0rem;
	padding-right: 0rem;
	margin-bottom: 6rem;
	/* width: 58.333333%; */
	margin-left: 1rem;
	z-index: 10;
	background-color: #a0aec0;
	border-width: 1px;
	border-radius: 0.5rem;
	/* overflow: auto; */
	object-fit: contain;
	@media (max-width: 1200px) {
		/* height: auto; */
		padding-left: 0rem;
		padding-right: 0rem;
		margin-bottom: 1rem;
		width: 100%;
		margin-left: 0rem;
	}
`;

const ReadArea = styled.div`
	@media (max-width: 1200px) {
		/* height: auto; */
		padding-left: 0rem;
		padding-right: 0rem;
		margin-bottom: 1rem;
		width: 100%;
		margin-left: 0rem;
	}
`;
// Visible: {}, Hidden: {}
const GoodbyeSection = styled.div`
	height: 0;
	@media (max-width: 1200px) {
		height: auto;
	}
`;
// background-color: #2B2B2B
// background-color: #b1a296;
// previous background-color: #3e3e3e;
const MainPage = styled("div")`
	background-color: #2b2b2b;
`;

const MobileNavbar = styled("div")`
	display: block;
	@media (max-width: 540px) {
		display: none;
	}
`;
// color: #bc986a;
// color: #cc7832;
const TitleText = styled.div`
	color: #c05621;
`;

const DesktopSidebars = styled.div`
	display: flex;
	margin-top: 1rem;
	@media (max-width: 1080px) {
		display: block;
	}
`;

const Section1Back = styled.div`
	width: 15%;
	z-index: 0;
`;

const Section1 = styled.div`
	width: 16%;
	z-index: 30;
	position: fixed;
	height: 100%;
	@media (max-width: 1080px) {
		position: relative;
		width: 100%;
		display: block;
	}
`;

const Section2 = styled.div`
	position: relative;
	width: 60%;
	z-index: 0;
	pointer-events: none;
	left: 16%;
	overflow-x: hidden;
	@media (max-width: 1080px) {
		position: relative;
		width: 100%;
		display: block;
		margin-top: 1rem;
		left: 0%;
	}
`;

const Section3 = styled.div`
	position: fixed;
	width: 24%;
	z-index: 30;
	left: 76%;
	margin-left: 1rem;
	padding-right: 10px;
	@media (max-width: 1080px) {
		position: relative;
		width: 100%;
		display: block;
		margin-top: 1rem;
		left: 0%;
	}
`;

export default function PageTemplate(data: MdxProps) {
	return (
		<>
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
				<link rel="canonical" href={data.data.mdx.frontmatter.path} />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Helmet>

			<div className="mt-10 overflow-hidden">
				{/* Main menu area... */}
				<div className="fixed w-full -mt-10 z-40">
					<NavSection />
				</div>
				<DesktopSidebars>
					<Section1 className="shadow-2xl">
						<SideBar FrontMatter={data.data.mdx.frontmatter} />
						<StatusCard FrontMatter={data.data.mdx.frontmatter} />
					</Section1>
					<Section2>
						<ReadContainer className="shadow-md">
							<div className="py-2 px-4 list-disc">
								<h4 className="text-gray-600 mb-4 mt-3">
									<TitleText>
										{data.data.mdx.frontmatter.title}
									</TitleText>
								</h4>
								<MDXRenderer>{data.data.mdx.body}</MDXRenderer>
								<div className="ww-hide-in-mobile">
									<Footer />
								</div>{" "}
							</div>
						</ReadContainer>
					</Section2>
					<Section3>
						<div className="bg-gray-500 rounded-t-lg">
							<div className="bg-gray-500 p-4">
								<h4>Related Contents</h4>
								<p>
									User created content used in WW APIs completely
									free. If you develop something cool using the tools,
									you can send us to be showcased here.
								</p>
								<Button>Visit Archives</Button>
							</div>
							<QuickLinks />
						</div>
					</Section3>
				</DesktopSidebars>
				<GoodbyeSection>
					<Footer />
				</GoodbyeSection>
			</div>
		</>
	);
}

export const query = graphql`
	query UE4TutorialPostQuery($id: String) {
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
				date: string;
				moduleID: number;
				submoduleID: number;
				seriesID: number;
				seriesIndex: number;
				description: string;
				seotitle: string;
			};
		};
	};
}
