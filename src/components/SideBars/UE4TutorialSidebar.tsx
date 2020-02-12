import React, { useState, useRef, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Icon } from "@blueprintjs/core";
import styled from "@emotion/styled";
import { TweenMax, Power3 } from "gsap";
import TransitionLink from "gatsby-plugin-transition-link";
import { CollapsibleModule } from "./SidebarCommon";

interface allUe4TutsMapJsonType {
	readonly edges: Tier0_Props[];
}
interface Tier0_Props {
	readonly node: Tier1_Prop;
}
interface Tier1_Prop {
	readonly submoduleID: number;
	readonly category: string;
	readonly description: string;
	readonly modules: Array<SeriesProps>;
}

interface SeriesProps {
	readonly seriesID: number;
	readonly title: string;
	readonly Children: Array<LeafNode>;
}

interface LeafNode {
	readonly seriesIndex: number;
	readonly title: string;
	readonly link: string;
}

interface BranchComponentProps {
	readonly label: string;
	readonly hasChildren: boolean;
	readonly ExternalLink?: string;
	readonly CollapsedSection: any;
	readonly IsCollapsed: boolean;
}

interface CollapsibleModule {
	readonly collapsible: any;
	readonly label: string;
}

interface FrontMatterStruct {
	title: string;
	moduleID: number;
	submoduleID: number;
	seriesID: number;
	seriesIndex: number;
}

interface SidebarProps {
	FrontMatter: FrontMatterStruct;
}

export function BranchComponent(Props: BranchComponentProps) {
	const [Collapsed, setCollapsed] = useState(Props.IsCollapsed);
	const CollapsibleDiv = styled("div")`
		display: ${props => (Collapsed ? `none` : "block")};
	`;

	function ToggleCollapse() {
		setCollapsed(!Collapsed);
	}
	return (
		<>
			<div>
				<div className="border">
					<div className="px-3 py-2 border-l-4 border-teal-500 bg-teal-100">
						<div
							className="flex hover:bg-gray-300"
							onClick={ToggleCollapse}
						>
							<div className="border-l-4 border-teal-500 -ml-3 absolute"></div>
							<svg
								width="18"
								height="18"
								viewBox="0 0 1792 1792"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M960 256q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm832 928v352q0 22-20 30-8 2-12 2-12 0-23-9l-93-93q-119 143-318.5 226.5t-429.5 83.5-429.5-83.5-318.5-226.5l-93 93q-9 9-23 9-4 0-12-2-20-8-20-30v-352q0-14 9-23t23-9h352q22 0 30 20 8 19-7 35l-100 100q67 91 189.5 153.5t271.5 82.5v-647h-192q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h192v-163q-58-34-93-92.5t-35-128.5q0-106 75-181t181-75 181 75 75 181q0 70-35 128.5t-93 92.5v163h192q26 0 45 19t19 45v128q0 26-19 45t-45 19h-192v647q149-20 271.5-82.5t189.5-153.5l-100-100q-15-16-7-35 8-20 30-20h352q14 0 23 9t9 23z" />
							</svg>
							<div className="pl-2 font-semibold select-none">
								{Props.label}
							</div>
						</div>
						<CollapsibleDiv>{Props.CollapsedSection}</CollapsibleDiv>
					</div>
				</div>
			</div>
		</>
	);
}

function SideBar(Props: SidebarProps) {
	const RootQuery = useStaticQuery(graphql`
		query MyQuery {
			allUe4TutsMapJson {
				edges {
					node {
						id
						submoduleID
						label
						description
						modules {
							seriesID
							title
							Children {
								seriesIndex
								title
								link
							}
						}
					}
				}
			}
		}
	`);
	const allUe4TutsMapJson: allUe4TutsMapJsonType =
		RootQuery.allUe4TutsMapJson;

	const PopulateSeries = (Props: SeriesProps[]) => {
		const retval: any = [];
		Props.forEach(seriesList => {
			const CollapsibleSection: any = [];
			const Children = seriesList;
			Children.Children.forEach(leafpost => {
				CollapsibleSection.push(
					<div>
						<Link to={leafpost.link} className="ml-3">
							<span className="bp3-icon-large bp3-icon-small-plus bp3-intent-success content-center mr-1" />
							{leafpost.title}
						</Link>
					</div>,
				);
			});
			retval.push(
				<CollapsibleModule
					collapsible={CollapsibleSection}
					label={Children.title}
				/>,
			);
		});
		return retval;
	};
	const PopulateSubmodule = () => {
		const retval: any = [];
		allUe4TutsMapJson.edges.forEach(it => {
			const ModuleRender: any = PopulateSeries(it.node.modules);
			// Checing if submoduleID is a match
			const CollapseSwitch: boolean =
				it.node.submoduleID === Props.FrontMatter.submoduleID
					? false
					: true;
			retval.push(
				<BranchComponent
					label={it.node.category}
					CollapsedSection={ModuleRender}
					hasChildren={false}
					IsCollapsed={CollapseSwitch}
				/>,
			);
		});
		return retval;
	};

	// Sidebar rendering
	return (
		<div className="shadow border-t-4 rounded-t border-red-500 p-2 bg-white mb-2">
			{PopulateSubmodule()}
		</div>
	);
}

export { SideBar };
