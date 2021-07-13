import React, { useState } from "react";
import Link from "gatsby-link";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Footer, Alert, QuickLinks } from "../components/Decorations";
import { Helmet } from "react-helmet";
import { StatusCard } from "../components/StatusCard";
import { Button } from "@blueprintjs/core";
import { NavSection } from "../components/NavBar";
import { SideBar } from "../components/SideBars/UE4TutorialSidebar";
import { MdxProps } from "./Common";

export default function PageTemplate(data: MdxProps) {
	const [IsDarkMode, setIsDarkMode] = useState(true);
	const [LightModeCSS, setLightModeCSS] = useState("root--dark");
	const [MountState, setMountState] = useState(true); //  To run effect only once

	return (
		<>
			<Helmet>
				<title>{data.data.mdx.frontmatter.seotitle}</title>
				<meta name="description" content={data.data.mdx.frontmatter.description} />
				<meta
					name="og:title"
					property="og:title"
					content={data.data.mdx.frontmatter.seotitle}
				/>
				<meta name="twitter:card" content={data.data.mdx.frontmatter.description} />
				<link rel="canonical" href={data.data.mdx.frontmatter.path} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Helmet>

			<div className="mt-10 overflow-hidden">
				{/* Main menu area... */}
				<div className="fixed w-full -mt-10 z-40">
					<NavSection />
				</div>
				<div className="container_mdtemplate">
					<div className="sidebar_left">
						<SideBar FrontMatter={data.data.mdx.frontmatter} />
						<StatusCard FrontMatter={data.data.mdx.frontmatter} />
					</div>
					<div className="layout_mainpage">
						<div className="py-2 border rounded-lg shadow-md list-disc overflow-auto object-contain">
							<div className="reading_area">
								<div className="py-2 px-4 list-disc">
									<h4 className="text-gray-600 mb-4 mt-3">
										<div>{data.data.mdx.frontmatter.title}</div>
									</h4>
									<MDXRenderer>{data.data.mdx.body}</MDXRenderer>
									<div className="ww-hide-in-mobile">
										<Footer />
									</div>{" "}
								</div>
							</div>
						</div>
					</div>
					<div className="sidebar_right">
						<div className="bg-gray-500 rounded-t-lg">
							<div className="bg-gray-500 p-4">
								<h4>Related Contents</h4>
								<p>
									User created content used in WW APIs completely free. If you develop
									something cool using the tools, you can send us to be showcased here.
								</p>
								<Button>Visit Archives</Button>
							</div>
							<QuickLinks />
						</div>
					</div>
				</div>
				<Footer />
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
				submoduleID
				seriesID
				seriesIndex
			}
		}
	}
`;
