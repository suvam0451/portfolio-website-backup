import React, { useState, useEffect } from "react";
import Link from "gatsby-link";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Footer, Alert, QuickLinks } from "../components/Decorations";
import { NavSection } from "../components/NavBar";
import styled from "@emotion/styled";
import { SideBar } from "../components/SideBars/DaedalusSidebar";
import { Helmet } from "react-helmet";
import { Button, Switch } from "@blueprintjs/core";
import { StatusCard } from "../components/SideBars/Trailblazer_StatusCard";
import {
	Section2,
	DesktopSidebars,
	MdxProps,
	Background,
} from "./Common";
require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
});
import { GatsbySeo } from "gatsby-plugin-next-seo";

import "../styles/gatsby-custom.scss";
import "../styles/fonts.scss";
import "../styles/display.scss";
import "../styles/globaloverride.scss";

const TitleText = styled.div`
	color: #c05621;
`;

interface IGatsbyPageProps {
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
	location: {
		state: {
			isDarkMode: boolean | undefined;
		};
	};
}
export default function PageTemplate(data: IGatsbyPageProps) {
	const [IsDarkMode, setIsDarkMode] = useState(true);
	const [LightModeCSS, setLightModeCSS] = useState("root--dark");
	const [MountState, setMountState] = useState(true); //  To run effect only once

	// Rendered once...
	useEffect(() => {
		if (data.location.state != null && MountState) {
			setLightModeCSS("root--dark");
			setIsDarkMode(true);
		} else {
			if (IsDarkMode) {
				setLightModeCSS("root--dark");
				setIsDarkMode(true);
			} else {
				setLightModeCSS("root--light");
				setIsDarkMode(false);
			}
		}
		console.log(IsDarkMode);
		return () => {};
	}, [IsDarkMode]);

	function switchDarkMode() {
		console.log("Initially", IsDarkMode);
		setIsDarkMode(!IsDarkMode);
		console.log("Finally", IsDarkMode);
	}
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
			<div className={LightModeCSS}>
				<div className="mt-10 overflow-hidden">
					<div className="fixed w-full -mt-10 z-40">
						<NavSection />
					</div>
					<div className="container_mdtemplate">
						<div className="sidebar_left">
							<SideBar FrontMatter={data.data.mdx.frontmatter} />
							<Link to="/" state={{ isDarkMode: IsDarkMode }}>
								Tunuk Tunuk
							</Link>
							<Switch
								checked={IsDarkMode}
								onChange={() => {
									switchDarkMode();
								}}
								label="Toggle darkmode"
							/>
							<StatusCard FrontMatter={data.data.mdx.frontmatter} />
						</div>
						<div className="layout_mainpage">
							<div className="py-2 border rounded-lg shadow-md list-disc overflow-auto object-contain">
								<div className="reading_area">
									<p className="markdown_title">
										{data.data.mdx.frontmatter.title}
									</p>
									<MDXRenderer>{data.data.mdx.body}</MDXRenderer>
									<Footer />
								</div>
							</div>
						</div>
						<div className="sidebar_right">
							<div>
								<div className="related_contents">
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
						</div>
					</div>
				</div>
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
				submoduleID
				seriesID
				seriesIndex
			}
		}
	}
`;
