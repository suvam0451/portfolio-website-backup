import styled from "@emotion/styled";
import { Link } from "gatsby";
import React, { useEffect } from "react";

//#region Section definitions
export const Section1 = styled.div`
	width: 16%;
	z-index: 30;
	position: fixed;
	height: 100%;
	@media (max-width: 1080px) {
		position: relative;
		width: 100%;
		display: block;
		margin-top: 26px;
	}
`;

export const Section2 = styled.div``;

/** Style definitions for the component page */
export const PageStyle = styled("div")`
	max-width: 1920px;
	margin: 0 auto;
`;

export const DesktopSidebars = styled.div`
	display: flex;
	margin-top: 1rem;
	@media (max-width: 1080px) {
		display: block;
	}
`;

export const Background = styled.div`
	background-color: #222222;
`;
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
			<a
				href={props.link}
				className={props.className ? props.className : ""}
			>
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
