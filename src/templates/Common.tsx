import { Link } from "gatsby";
import React, { useEffect } from "react";

export interface MdxProps {
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
}

export interface IGatsbyLocationProps {
	isDarkMode: boolean | null;
	submoduleList: number[] | null;
	seriesList: number[] | null;
}

export interface IGatsbyLinkProps {
	label: string;
	link: string;
	internal?: boolean;
	className?: string;
	state?: IGatsbyLocationProps;
}

/** Resolves internal links to gatsby Link elements
 * 	@param label Label of the button
 * 	@param link internal/external link
 * 	@param internal if the link is external
 * 	@param state for passing page state
 */
export function GatsbyLink(props: IGatsbyLinkProps) {
	useEffect(() => {
		return () => {};
	}, []);

	if (typeof props.internal == "undefined") {
		return (
			<a href={props.link} className={props.className ? props.className : ""}>
				{props.label}
			</a>
		);
	} else {
		return (
			<Link
				to={props.link}
				className={props.className ? props.className : ""}
				state={props.state ? props.state : null}
			>
				{props.label}
			</Link>
		);
	}
}
