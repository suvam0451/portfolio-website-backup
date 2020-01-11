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
import {
	Row,
	Col,
} from "reactstrap";
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
import { SideBar } from "../components/SideBars/ue4-tuts";

const Content = styled.div`
	margin: 0 auto;
	padding: 0.1rem 0.1rem;
`;

const MyH1 = (props: any) => <h1 className="p-20" {...props}/> 
const MyH2 = (props: any) => <h2 className="p-20" {...props}/> 
const MyH3 = (props: any) => <h3 className="p-20" {...props}/> 
const MyH4 = (props: any) => <h4 className="p-20" {...props}/> 
const MyH5 = (props: any) => <h5 className="p-20" {...props}/> 

const components = {
	h1: MyH1,
	h2: MyH2,
	h3: MyH3,
	h4: MyH4,
	h5: MyH5,
}

// Visible: {}, Hidden: {}
const ScrollArea = styled.div`
	height: 88vh;
	@media (max-width: 1200px) {
		height: auto;
	}
`

// Visible: {}, Hidden: {}
const GoodbyeSection = styled.div`
	height: 0;
	@media (max-width: 1200px) {
		height: auto;
	}
`
// background-color: #2B2B2B
const MainPage = styled.div`
	background-color: #B1A296
`

const TitleText = styled.div`
	color: #BC986A
`


export default function PageTemplate(data: mdxProps) {
	return (
		<MainPage>
		<div className="mt-16 z-20">
			<Helmet>
				<title>{data.data.mdx.frontmatter.seotitle}</title>
				<meta name="description" content={data.data.mdx.frontmatter.description}></meta>
				{/*<link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet"/>*/}
				<meta name="og:title" property="og:title" content={data.data.mdx.frontmatter.seotitle}/>
				<meta name="twitter:card" content={data.data.mdx.frontmatter.description}/>
				<link rel="canonical" href="https://winterwildfire.netlify.com/"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
			</Helmet>
			<div className="relative xl:fixed w-full -mt-16">
				<MainPage>
				<div className="z-20">
					<NavSection/>
				</div>
				<div className="p-2 pt-8 z-0 mb-24">
					<Row>
						<Col xs="12" sm="12" md="12" lg="12" xl="2">
							<Row>
								<SideBar FrontMatter={data.data.mdx.frontmatter}/>
								<StatusCard FrontMatter={data.data.mdx.frontmatter}/>
							</Row>
						</Col>
						<Col xs="12" sm="12" md="12" lg="12" xl="7">
						<div className="bg-gray-400 px-4 py-4 border rounded-lg shadow-md list-disc overflow-auto object-contain mb-24">
							<ScrollArea>
									<h4 className="text-gray-600 mb-4">
										<TitleText>
											{data.data.mdx.frontmatter.title}
										</TitleText>
									</h4>
									<MDXRenderer components={components}>{data.data.mdx.body}</MDXRenderer>
									<Footer />
							</ScrollArea>
						</div>
						</Col>
						<Col xs="12" sm="12" md="12" lg="6" xl="3">
							<Row>
								<Col xs="12" sm="6" md="12" lg="6" xl="12">
									<Card>
										<h4>Related Contents</h4>
										<p>
											User created content used in WW APIs completely
											free. If you develop something cool using the
											tools, you can send us to be showcased here.
										</p>
										<Button>Visit Archives</Button>
									</Card>
									<QuickLinks />
								</Col>
							</Row>
						</Col>
					</Row>
					
				</div>
				</MainPage>
			</div>	
			<GoodbyeSection>
				<Footer></Footer>
			</GoodbyeSection>
		</div>
		</MainPage>
	);
}

interface mdxProps {
	data: {
		mdx: {
			id: number;
			body: any;
			frontmatter: {
				title: string;
				description: string;
				seotitle: string;
			};
		};
	};
}

export const query = graphql`
	query BlogPostQuery($id: String) {
		mdx(id: { eq: $id }) {
			id
			body
			frontmatter {
				title
				description
				seotitle
				moduleID
				submoduleID
				seriesID
				seriesIndex
			}
		}
	}
`;
