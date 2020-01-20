import React, { useState, useRef, useEffect } from "react";
import ue4_icon from "../../content/images/ue4-icon.png";
import Image from "gatsby-image";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Icon } from "@blueprintjs/core";
import styled from "@emotion/styled";
import { TweenMax, Power3 } from "gsap";
import TransitionLink from "gatsby-plugin-transition-link";
import {
	SidebarDataTree,
	SidebarProps,
	Tier1,
} from "./SidebarCommon";
import { BranchComponent } from "./UE4TutorialSidebar";

interface CollapsibleModule {
	readonly CollapsedSection: any;
	readonly HeaderSection: string;
}

export function CollapsibleModule(Props: CollapsibleModule) {
	const [Collapsed, setCollapsed] = useState(true);
	const CollapsibleDiv = styled("div")`
		display: ${props => (Collapsed ? `none` : "block")};
	`;
	const [IconSection, setIconSection] = useState(
		"bp3-icon-standard bp3-icon-chevron-right bp3-intent-success content-center mt-1",
	);
	let logoItem: any = useRef(null);

	// Show in effect
	useEffect(() => {
		logoItem.opacity = 0;
		TweenMax.from(logoItem, 0, { opacity: 0, ease: Power3.easeOut });
		TweenMax.to(logoItem, 0.8, { opacity: 1, ease: Power3.easeOut });
	});

	function ToggleCollapse() {
		if (Collapsed === true) {
			setIconSection(
				"bp3-icon-standard bp3-icon-chevron-down bp3-intent-success content-center mt-1",
			);
		} else {
			setIconSection(
				"bp3-icon-standard bp3-icon-chevron-right bp3-intent-success content-center mt-1",
			);
		}
		setCollapsed(!Collapsed);
	}

	return (
		<>
			<div
				ref={el => {
					logoItem = el;
				}}
				className="flex hover:bg-teal-200 mt-1 ml-1 rounded-sm select-none"
				onClick={ToggleCollapse}
			>
				{/* <span className={IconSection} /> */}
				<span className={IconSection} />
				<div className="ml-2">{Props.HeaderSection}</div>
			</div>
			<CollapsibleDiv>{Props.CollapsedSection}</CollapsibleDiv>
		</>
	);
}

export default function SideBar(Props: SidebarProps) {
	const RootQuery = useStaticQuery(graphql`
		query DaedalusSidebarQuery {
			allDaedalusApiJson {
				nodes {
					modules {
						label
						seriesID
						children {
							link
							seriesIndex
							title
						}
					}
					submoduleID
					label
					desc
				}
			}
		}
	`);

	const queryData: SidebarDataTree = RootQuery.allDaedalusApiJson;
	/** Takes in the list of modules in a section. */
	const PopulateSeries = (data: Tier1[]) => {
		const retval: any = [];
		data.forEach(seriesList => {
			const CollapsibleSection: any = [];
			seriesList.children.forEach(post => {
				CollapsibleSection.push(
					<div>
						<Link to={post.link} className="ml-3">
							<span className="bp3-icon-large bp3-icon-small-plus bp3-intent-success content-center mr-1" />
							{post.title}
						</Link>
					</div>,
				);
			});
			retval.push(
				<CollapsibleModule
					CollapsedSection={CollapsibleSection}
					HeaderSection={seriesList.label}
				/>,
			);
		});
		// for (let i = 0; i < data.length; i++) {
		// 	const SeriesList: Tier1 = data[i];
		// }
		return retval;
	};
	/** CAlled from template with a request to populate sidebar. */
	const PopulateSidebar = () => {
		const retval: any = [];
		queryData.nodes.forEach(node => {
			const ModuleRender: any = PopulateSeries(node.modules);
			// Checing if submoduleID is a match
			const CollapseSwitch: boolean =
				node.submoduleID === Props.FrontMatter.submoduleID
					? false
					: true;
			// This should push one entire section...
			retval.push(
				<BranchComponent
					label={node.label}
					CollapsedSection={ModuleRender}
					hasChildren={false}
					IsCollapsed={CollapseSwitch}
				/>,
			);
		});

		return retval;
	};
	return (
		<>
			<div className="overflow-y-auto shadow border-t-4 rounded-t border-red-500 w-full p-2 ml-2 bg-white mb-2 h-full">
				{PopulateSidebar()}
			</div>
		</>
	);
}
