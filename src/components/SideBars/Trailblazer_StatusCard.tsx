import { Link, useStaticQuery, graphql } from "gatsby";
import React, { useEffect, useState } from "react";
import { SidebarDataTree } from "../../types/website";

interface IFrontMatterProps {
	FrontMatter: {
		submoduleID: number;
		seriesID: number;
		description: string;
	};
}

type QStatusCard = {
	allDaedalusApiJson: SidebarDataTree;
};
/** Main export. StatusCard displayed on left for Trailblazer API */
function StatusCard(Props: IFrontMatterProps) {
	const [StatusContent, setStatusContent] = useState<JSX.Element[]>([]);
	const [CardTitle, setCardTitle] = useState<string>("");

	const RootQuery: QStatusCard = useStaticQuery(graphql`
		query Trailblazer_StatusCardQuery {
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

	useEffect(() => {
		const { nodes } = RootQuery.allDaedalusApiJson;
		const SidebarRender: JSX.Element[] = [];

		nodes.forEach((edge) => {
			if (edge.submoduleID === Props.FrontMatter.submoduleID) {
				edge.modules.forEach((moduleList) => {
					if (moduleList.seriesID === Props.FrontMatter.seriesID) {
						setCardTitle(moduleList.label);
						moduleList.children.forEach((child) => {
							SidebarRender.push(
								<li>
									<Link to={child.link}>{child.title}</Link>
								</li>,
							);
						});
					}
				});
			}
		});

		setStatusContent(SidebarRender);
		return () => {};
	}, []);
	return (
		// <Card className="border-t-4 border-orange-700 shadow-md">
		<div className="section_statuscard">
			<h5 className="title_statuscard">{CardTitle}</h5>
			<div className="border-orange-700 border-b-2 mb-2" />
			<ol className="statuscard_list">{StatusContent}</ol>

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
				<button className="w-6/12 bg-gray-400 hover:bg-gray-500 text-gray-800 font-bold px-2 py-1 rounded inline-flex items-center">
					<span className="bp3-icon-large bp3-icon-git-repo content-center mr-2 mt-1" />
					<span>Reference</span>
				</button>
			</div>
		</div>
	);
}

export { StatusCard };
