import { Link, useStaticQuery, graphql } from "gatsby";
import React, { Component } from "react";
import {
	Card,
	Classes,
} from "@blueprintjs/core";
import { FrontMatterProps } from "../graphql-types";
import { SidebarDataTree} from "../SideBars/SidebarCommon"

interface allUe4TutsMapJsonType {
	readonly edges: Array<Tier0_Props>;
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

function StatusCard(Props: FrontMatterProps) {
	const RootQuery = useStaticQuery(graphql`
		query Trailblazer_StatysCardQuery {
			allDaedalusApiJson {
				nodes {
					id
					submoduleID
					description
					label
					modules {
						label
						seriesID
						children {
							link
							seriesIndex
							title
						}
					}
				}
			}
		}
	`);
	const allUe4TutsMapJson: SidebarDataTree =
		RootQuery.allDaedalusApiJson;
	const SidebarRender: any = [];
	let StatusCardTitle: string = "";
	allUe4TutsMapJson.nodes.forEach(edge => {
		if (edge.submoduleID === Props.FrontMatter.submoduleID) {
			edge.modules.forEach(moduleList => {
				if (moduleList.seriesID === Props.FrontMatter.seriesID) {
					StatusCardTitle = moduleList.label;
					moduleList.children.forEach(child => {
						SidebarRender.push(
							<li>
								<Link to={child.link}>{child.title}</Link>
							</li>,
						);
					});
				}
				// SidebarRender.push(<h4>{moduleList.}</h4>);
			});
		}
	});
	return (
		<Card className="border-t-4 border-orange-700 shadow-md">
			<h5 className="mb-1">{StatusCardTitle}</h5>
			<div className="border-orange-700 border-b-2 mb-2" />
			<ul className="ml-8 mb-0">{SidebarRender}</ul>

			<div className="flex mt-3">
				<button className="w-6/12 bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold px-2 py-1 rounded inline-flex items-center mr-1 -ml-1">
					<svg
						className="fill-current w-4 h-4 mr-2"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
					>
						<path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
					</svg>
					<span>Download</span>
				</button>
				<button className="w-6/12 bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold px-2 py-1 rounded inline-flex items-center ml-1 -mr-1">
					<span className="bp3-icon-large bp3-icon-git-repo content-center mr-2 mt-1" />
					<span>Reference</span>
				</button>
			</div>
		</Card>
	);
}

export { StatusCard };