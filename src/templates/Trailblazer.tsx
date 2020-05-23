import * as React from "react";
import Link from "gatsby-link";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Footer, Alert, QuickLinks } from "../components/Decorations";
import { NavSection } from "../components/NavBar";
import styled from "@emotion/styled";
import { SideBar } from "../components/SideBars/DaedalusSidebar";
import { Helmet } from "react-helmet";
import { Button } from "@blueprintjs/core";
import { StatusCard } from "../components/SideBars/Trailblazer_StatusCard";
import {
	Section1,
	Section2,
	Section3,
	ReadContainer,
	DesktopSidebars,
	MdxProps,
	ReadArea,
	Background,
} from "./Common";
require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});
import { GatsbySeo } from "gatsby-plugin-next-seo";

const TitleText = styled.div`
	color: #c05621;
`;

export default function PageTemplate(data: MdxProps) {
	return (
		<>
			<GatsbySeo
				title="Sleeping Forest Documentation"
				description="Sleeping forest is a VSCode extension for Unreal Engine 4 developers and asset management enthusiasts."
				canonical="https://suvam0451.netlify.app/docs/sleeping-forest/getting-started/"
				openGraph={{
					description:
						"Sleeping forest is a VSCode extension for Unreal Engine 4 developers and asset management enthusiasts.",
					images: [
						{
							alt: "Sleeping Forest logo",
							height: 600,
							width: 800,
							url:
								"https://i.pinimg.com/originals/b0/d6/92/b0d692662cb25c1d245d8c94671fe93d.jpg",
						},
					],
					site_name: "WinterWildfire",
					title: "Sleeping Forest Documentation",
					url:
						"https://suvam0451.netlify.app/docs/sleeping-forest/getting-started/",
				}}
				twitter={{
					handle: "@suvam0451",
					site: "@suvam0451",
					cardType: "summary_large_image",
				}}
			/>
			{/* <Helmet>
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
			</Helmet> */}
			<Background>
				<div className="mt-10 overflow-hidden">
					<div className="fixed w-full -mt-10 z-40">
						<NavSection />
					</div>
					<DesktopSidebars>
						<Section1 className="shadow-2xl">
							<SideBar FrontMatter={data.data.mdx.frontmatter} />
							<StatusCard FrontMatter={data.data.mdx.frontmatter} />
						</Section1>
						<Section2 className="">
							<ReadContainer className="shadow-md bg-red-500">
								<div className="py-2 border rounded-lg shadow-md list-disc overflow-auto object-contain">
									<ReadArea className="">
										<h4 className="text-gray-800 mb-4 mt-3">
											<TitleText>
												{data.data.mdx.frontmatter.title}
											</TitleText>
										</h4>
										<MDXRenderer>{data.data.mdx.body}</MDXRenderer>
										<Footer />
									</ReadArea>
								</div>
							</ReadContainer>
						</Section2>
						<Section3>
							<div className="bg-gray-500 rounded-t-lg">
								<div className="bg-gray-500 p-4">
									<h4>Related Contents</h4>
									<p>
										User created content used in WW APIs completely
										free. If you develop something cool using the
										tools, you can send us to be showcased here.
									</p>
									<Button>Visit Archives</Button>
								</div>
								<QuickLinks />
							</div>
						</Section3>
					</DesktopSidebars>
				</div>
			</Background>
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
				submoduleID
				seriesID
				seriesIndex
			}
		}
	}
`;
