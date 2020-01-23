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

export default function PageTemplate(data: MdxProps) {
	return (
		<MainPage>
			<div className="relative xl:fixed w-full mt-16 z-30">
				<div className="-mt-16 z-20">
					<NavSection />
				</div>
				<div className="z-20">
					<Row className="z-20">
						<Col xs="12" sm="12" md="12" lg="12" xl="2">
							<Sidebar FrontMatter={data.data.mdx.frontmatter} />
						</Col>
						<Col xs="12" sm="12" md="12" lg="12" xl="7">
							<div className="bg-gray-400 px-4 py-2 border rounded-lg shadow-md list-disc mb-24 overflow-auto object-contain">
								<ScrollArea>
									<MDXRenderer>{data.data.mdx.body}</MDXRenderer>
									{/* <div className="ww-hide-in-mobile"> */}
									<MobileNavbar>
										<Footer />
									</MobileNavbar>
									{/* </div> */}
								</ScrollArea>
							</div>
						</Col>
					</Row>
				</div>
				<Row className="z-10">
					<Col xs="12" sm="12" md="12" lg="12" xl="2"></Col>
				</Row>
			</div>
		</MainPage>
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
