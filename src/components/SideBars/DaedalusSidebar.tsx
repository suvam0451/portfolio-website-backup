import React, { useState, useRef, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Icon } from "@blueprintjs/core";
import styled from "@emotion/styled";
import { TweenMax, Power3 } from "gsap";
import {
	SidebarDataTree,
	SidebarProps,
	Tier1,
	CollapsibleModule,
} from "./SidebarCommon";
import { BranchComponent } from "./UE4TutorialSidebar";

/** Main export */
function SideBar(Props: SidebarProps) {
	const RootQuery = useStaticQuery(graphql`
		query DaedalusSidebarQuery {
			allDaedalusApiJson {
				nodes {
					id
					submoduleID
					label
					description
					modules {
						seriesID
						label
						children {
							seriesIndex
							link
							title
						}
					}
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
			seriesList.children.forEach(leafpost => {
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
					HeaderSection={seriesList.label}
					InitiallyCollapsed={true}
				/>,
			);
		});
		return retval;
	};
	/** Called for every module */
	const PopulateSidebar = () => {
		const retval: any = [];
		queryData.nodes.forEach(node => {
			const ModuleRender: any = PopulateSeries(node.modules);
			// Checing if submoduleID is a match
			const CollapseSwitch: boolean =
				node.submoduleID === Props.FrontMatter.submoduleID
					? false // false
					: true; // true
			// This should push one entire section...
			retval.push(
				<BranchComponent
					label={node.label}
					CollapsedSection={ModuleRender}
					hasChildren={false}
					IsCollapsed={CollapseSwitch} // CollapseSwitch
				/>,
			);
		});

		return retval;
	};
	return (
		<>
			<div className="overflow-y-auto shadow border-t-4 rounded-t border-red-500 p-2 bg-white mb-2 w-full">
				{PopulateSidebar()}
			</div>
		</>
	);
}

export { SideBar };
