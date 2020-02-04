import * as React from "react";
import Link from "gatsby-link";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Footer, Alert, QuickLinks } from "../components/Decorations";
import { NavSection } from "../components/NavBar";
import styled from "@emotion/styled";
import Sidebar from "../components/SideBars/DaedalusSidebar";
import { Helmet } from "react-helmet";
import { Button } from "@blueprintjs/core";
import { StatusCard } from "../components/StatusCard";
import {
	Section1,
	Section2,
	Section3,
	ReadContainer,
	DesktopSidebars,
	MdxProps,
} from "./Common";

const TitleText = styled.div`
	color: #c05621;
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
				<div className="fixed w-full -mt-10 z-40">
					<NavSection />
				</div>
				<DesktopSidebars>
					<Section1 className="shadow-2xl">
						<Sidebar FrontMatter={data.data.mdx.frontmatter} />
						<StatusCard FrontMatter={data.data.mdx.frontmatter} />
					</Section1>
					<Section2>
						<ReadContainer className="shadow-md">
							<div className="px-4 py-2 border rounded-lg shadow-md list-disc mb-24 overflow-auto object-contain">
								<h4 className="text-gray-600 mb-4 mt-3">
									<TitleText>
										{data.data.mdx.frontmatter.title}
									</TitleText>
								</h4>
								<MDXRenderer>{data.data.mdx.body}</MDXRenderer>
								<div className="ww-hide-in-mobile">
									<Footer />
								</div>
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
			</div>
		</>
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
