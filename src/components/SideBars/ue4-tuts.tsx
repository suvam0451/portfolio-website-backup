import React, { useState } from "react";
import ue4_icon from "../../content/images/ue4-icon.png";
import Image from "gatsby-image";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Icon } from "@blueprintjs/core";
import {
	FrontMatterStruct,
	SidebarProps,
} from "../../type-definitions";
import styled from "@emotion/styled";

interface allUe4TutsMapJsonType {
	readonly edges: Array<Tier0_Props>;
}
interface Tier0_Props {
	readonly node: Tier1_Prop;
}
interface Tier1_Prop {
	readonly category: string;
	readonly description: string;
	readonly moduleID: number;
	readonly modules: Array<Tier2_Props>;
}

interface Tier2_Props {
	readonly title: string;
	readonly hasChildren: boolean;
	readonly Link: string;
	readonly Children: Array<LeafNode>;
}

interface LeafNode {
	readonly title: string;
	readonly link: string;
}

interface BranchComponentProps {
	readonly label: string;
	readonly hasChildren: boolean;
	readonly ExternalLink?: string;
	readonly CollapsedSection: any;
	readonly FrontMatter: FrontMatterStruct;
}

interface CollapsibleModule {
	readonly CollapsedSection: any;
	readonly HeaderSection: string;
	readonly IsCollapsed: boolean;
}

function CollapsibleModule(Props: CollapsibleModule) {

	const [Collapsed, setCollapsed] = useState(Props.IsCollapsed);
	const [IconSection, setIconSection] = useState(
		"bp3-icon-standard bp3-icon-chevron-right bp3-intent-success content-center mt-1",
	);
	const CollapsibleDiv = styled("div")`
		display: ${props => Collapsed ? `none` : 'block'};
	`;

	function ToggleCollapse() {
		if (Collapsed === true) {
			setCollapsed(false);
			setIconSection(
				"bp3-icon-standard bp3-icon-chevron-down bp3-intent-success content-center mt-1",
			);
		} else {
			setCollapsed(true);
			setIconSection(
				"bp3-icon-standard bp3-icon-chevron-right bp3-intent-success content-center mt-1",
			);
		}
	}

	return (
		<>
			<div
				className="flex hover:bg-teal-200 mt-1 ml-1 rounded-sm select-none"
				onClick={ToggleCollapse}
			>
				<span className={IconSection} />
				<div className="ml-2">{Props.HeaderSection}</div>
			</div>

			<CollapsibleDiv>
				{Props.CollapsedSection}
			</CollapsibleDiv>
		</>
	);
}

function BranchComponent(Props: BranchComponentProps) {
	const [Collapsed, setCollapsed] = useState(false);
	// const [CollapsedSection, setCollapsedSection] = useState(<></>);
	const CollapsibleDiv = styled("div")`
		display: ${props => Collapsed ? `none` : 'block'};
	`;

	function ToggleCollapse() {
		if (Collapsed === true) {
			// setCollapsedSection(Props.CollapsedSection);
			setCollapsed(false);
		} else {
			// setCollapsedSection(<></>);
			setCollapsed(true);
		}
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
						< CollapsibleDiv>{Props.CollapsedSection}</CollapsibleDiv>
					</div>
				</div>
			</div>
		</>
	);
}

function SideBar(props: SidebarProps) {
	// const RootQuery = useStaticQuery(graphql`
	// 	query MyQuery {
	// 		allUe4TutsMapJson {
	// 			edges {
	// 				node {
	// 					id
	// 					submoduleID
	// 					category
	// 					description
	// 					modules {
	// 						seriesID
	// 						title
	// 						hasChildren
	// 						Link
	// 						Children {
	// 							seriesIndex
	// 							title
	// 							link
	// 						}
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// `);
	const RootQuery = useStaticQuery(graphql`
		query MyQuery {
			allUe4TutsMapJson {
				edges {
					node {
						id
						category
						description
						modules {
							title
							hasChildren
							Link
							Children {
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

	const Populate_Tier2 = (Props: Array<Tier2_Props>) => {
		let retval: any = [];
		for (let i = 0; i < Props.length; i++) {
			let CollapsibleSection: any = [];
			let Children = Props[i];
			if (Children.hasChildren) {
				Children.Children.forEach(function (leafpost: LeafNode) {
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
						CollapsedSection={CollapsibleSection}
						HeaderSection={Children.title}
						IsCollapsed={true}
					/>,
				);
			} else {
				retval.push(
					<div className="block ml-3 hover:invisible hover:bg-teal-400">
						&#9658; Not a series
					</div>,
				);
			}
		}
		return retval;
	};

	// Programming, DevOps etc.
	const Populate_Tier1 = (props: FrontMatterStruct) => {
		var retval: any = [];
		allUe4TutsMapJson.edges.forEach(function (it) {
			var module_render: any = Populate_Tier2(it.node.modules);
			let ShouldCollapse: boolean = false;
			retval.push(
				<div>matched{it.node.moduleID}with{props.moduleID}</div>,
			);
			if (it.node.moduleID === props.moduleID) {

				ShouldCollapse = true;
			}
			retval.push(
				<BranchComponent
					label={it.node.category}
					CollapsedSection={module_render}
					hasChildren={ShouldCollapse}
					FrontMatter={props}
				/>,
			);
		});
		return retval;
	};

	// Sidebar rendering
	return (
		<>
			<div>{props.FrontMatter.moduleID}</div>
			<div className="overflow-y-auto shadow border-t-4 rounded-t border-red-500 w-full p-2 ml-2 bg-white mb-2 h-full">
				{Populate_Tier1(props.FrontMatter)}
			</div>
		</>
	);
}

export { SideBar };
