import React, { useState, useRef, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { CollapsibleModule } from "./SidebarCommon";
import { SidebarDataTree, Tier1, SidebarProps } from "../../types/website";
import { BranchComponent } from "./SidebarCommon";
import _ from "lodash";

/** Main export */
function SideBar(Props: SidebarProps) {
	// Variables
	let _submoduleID = Props.FrontMatter.submoduleID;
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
	const PopulateSeries = (data: Tier1[]): JSX.Element[] => {
		return data.map((seriesList) => {
			const CollapsibleSection = seriesList.children.map((leafpost) => {
				return (
					<div>
						<Link to={leafpost.link} className="ml-3">
							<span className="bp3-icon-large bp3-icon-small-plus bp3-intent-success content-center mr-1" />
							{leafpost.title}
						</Link>
					</div>
				);
			});
			return (
				<CollapsibleModule label={seriesList.label} isCollapsed={true}>
					{CollapsibleSection}
				</CollapsibleModule>
			);
		});
	};

	/** Called for every module */
	const PopulateSidebar = (): JSX.Element[] => {
		return queryData.nodes.map((node) => {
			let idx = _.findIndex(Props.GatsbyState?.submoduleList, _submoduleID);
			let doCollapse = true;
			if (node.submoduleID === _submoduleID || idx != -1) {
				doCollapse = false;
			}
			return (
				<BranchComponent label={node.label} isCollapsed={doCollapse}>
					{PopulateSeries(node.modules)}
				</BranchComponent>
			);
		});
	};
	return (
		// <div className="overflow-y-auto shadow border-t-4 rounded-t border-red-500 p-2 bg-white mb-2 w-full">
		<div className="container_sidebar">{PopulateSidebar()}</div>
	);
}

export { SideBar };
