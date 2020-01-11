import { Link, useStaticQuery, graphql } from "gatsby";
import React, { Component } from "react";
import { Col } from "reactstrap";
import {
	Alignment,
	Button,
	Intent,
	Breadcrumbs,
	IBreadcrumbProps,
	Icon,
	Card,
	NavbarHeading,
	NavbarDivider,
	NavbarGroup,
	Classes,
} from "@blueprintjs/core";
import {FrontMatterProps} from "../graphql-types";
import { CardTitle } from "react-bootstrap/Card";

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
	query MyStatusCardQuery {
		allUe4TutsMapJson {
			edges {
				node {
					id
					submoduleID
					category
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
	const allUe4TutsMapJson: allUe4TutsMapJsonType = RootQuery.allUe4TutsMapJson;
	const SidebarRender: any = [];
	let StatusCardTitle: string = "";
	allUe4TutsMapJson.edges.forEach( edge => {
		if(edge.node.submoduleID === Props.FrontMatter.submoduleID){
			edge.node.modules.forEach(moduleList => {
				if(moduleList.seriesID === Props.FrontMatter.seriesID){
					StatusCardTitle = moduleList.title;	
					moduleList.Children.forEach(child => {
						SidebarRender.push(<li>{child.title}</li>)
					});
				}
				// SidebarRender.push(<h4>{moduleList.}</h4>);
			});
		}
	});
	return (
		<Card className="ml-2 w-full border-t-4 border-orange-700 shadow-md">
			<h5 className="mb-1">{StatusCardTitle}</h5>
			<div className="border-orange-700 border-b-2 mb-2"></div>
			<ol className="-ml-2">
				{SidebarRender}
			</ol>
		</Card>
	);
}

export { StatusCard };
