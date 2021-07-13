import React, { useState, useRef, useEffect } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { CollapsibleModule, BranchComponent } from "./SidebarCommon";
import { SidebarDataTree, Tier1, SidebarProps } from "../../types/website";

function SideBar(Props: SidebarProps) {
	const RootQuery = useStaticQuery(graphql`
		query MyQuery {
			allUe4TutsMapJson {
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
							title
							link
						}
					}
				}
			}
		}
	`);
	const allUe4TutsMapJson: SidebarDataTree = RootQuery.allUe4TutsMapJson;

	const PopulateSeries = (Props: Tier1[]): JSX.Element[] => {
		return Props.map((seriesList) => {
			let CollapsibleSection = seriesList.children.map((leafpost) => {
				return (
					<Link to={leafpost.link} className="ml-3">
						<span className="bp3-icon-large bp3-icon-small-plus bp3-intent-success content-center mr-1" />
						{leafpost.title}
					</Link>
				);
			});
			return (
				<CollapsibleModule label={seriesList.label} isCollapsed={true}>
					<ul>{CollapsibleSection}</ul>
				</CollapsibleModule>
			);
		});
	};
	const PopulateSubmodule = (): JSX.Element[] => {
		let { submoduleID } = Props.FrontMatter;
		return allUe4TutsMapJson.nodes.map((node) => {
			const ModuleRender: any = PopulateSeries(node.modules);
			// Checing if submoduleID is a match
			const CollapseSwitch = node.submoduleID === submoduleID ? false : true;
			return (
				<BranchComponent label={node.label} isCollapsed={CollapseSwitch}>
					<a>{ModuleRender}</a>
				</BranchComponent>
			);
		});
	};

	return (
		<div className="shadow border-t-4 rounded-t border-red-500 p-2 bg-white mb-2">
			{PopulateSubmodule()}
		</div>
	);
}

export { SideBar };
