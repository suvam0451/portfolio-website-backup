import React, { useState, useEffect, useContext } from "react";
import Link from "gatsby-link";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Footer, Alert, QuickLinks } from "../components/Decorations";
import { NavSection } from "../components/NavBar";
import { SideBar } from "../components/SideBars/DaedalusSidebar";
import { Button, Switch } from "@blueprintjs/core";
import { StatusCard } from "../components/SideBars/Trailblazer_StatusCard";
import { GatsbyLink } from "./Common";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import { IGatsbyLocationProps } from "../templates/Common";
import { SidebarContext } from "./Contexts";

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
		state: IGatsbyLocationProps;
	};
}
export default function PageTemplate(data: IGatsbyPageProps) {
	const [IsDarkMode, setIsDarkMode] = useState(true);
	const [LightModeCSS, setLightModeCSS] = useState("root--dark");
	const [MountState, setMountState] = useState(true); //  To run effect only once
	const [SidebarState, setSidebarState] = useState<IGatsbyLocationProps>({
		isDarkMode: IsDarkMode,
		submoduleList: [0, 1, 2],
		seriesList: [],
	});

	// Sidebar states...
	const [SubmoduleList, setSubmoduleList] = useState<number[]>([]); //  To run effect only once
	const [SeriesList, setSeriesList] = useState<number[]>([]); //  To run effect only once

	// Rendered once...
	useEffect(() => {
		if (MountState && data.location.state != null) {
			setLightModeCSS("root--dark");
			setIsDarkMode(true);

			// Set states
			setSubmoduleList(data.location.state.submoduleList!);
			setSeriesList(data.location.state.seriesList!);
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
			<SidebarContext.Provider value={SidebarState}>
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
						url: "https://suvam0451.netlify.app/docs/sleeping-forest/getting-started/",
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
								<SideBar
									FrontMatter={data.data.mdx.frontmatter}
									GatsbyState={SidebarState}
								/>
								<GatsbyLink
									label="Example"
									link="/docs/sleeping-forest/background/"
									state={SidebarState}
								/>
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
										<p className="markdown_title">{data.data.mdx.frontmatter.title}</p>
										<h3>Announcement</h3>
										<blockquote>
											Hey guys ! Just wanted to let you know that I need to run some
											maintenance on the website because of the recent domain name changes
											from netlify. So, some pages will appear like this for a few days...
											but guess what's coming new to the pages ?{" "}
											<b>A Dark theme switch</b> !!!
										</blockquote>
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
											User created content used in WW APIs completely free. If you develop
											something cool using the tools, you can send us to be showcased
											here.
										</p>
										<Button>Visit Archives</Button>
									</div>
									<QuickLinks />
								</div>
							</div>
						</div>
					</div>
				</div>
			</SidebarContext.Provider>
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
