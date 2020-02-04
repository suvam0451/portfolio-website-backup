import * as React from "react";
import Link from "gatsby-link";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Footer, Alert, QuickLinks } from "../components/Decorations";
import { Helmet } from "react-helmet";
import { StatusCard } from "../components/StatusCard";
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
import { NavSection } from "../components/NavBar";
import styled from "@emotion/styled";
import { SideBar } from "../components/SideBars/UE4TutorialSidebar";

//#region Section definitions
const Section1 = styled.div`
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

const Section2 = styled.div`
	position: relative;
	width: 60%;
	z-index: 0;
	left: 16%;
	overflow-x: hidden;
	@media (max-width: 1080px) {
		position: relative;
		width: 100%;
		display: block;
		margin-top: 1rem;
		left: 0%;
	}
`;

const Section3 = styled.div`
	position: fixed;
	width: 24%;
	z-index: 30;
	left: 76%;
	margin-left: 1rem;
	padding-right: 1rem;
	@media (max-width: 1080px) {
		position: relative;
		width: 100%;
		display: block;
		margin-top: 1rem;
		margin-left: 0rem;
		margin-right: 0rem;
		padding-right: 0rem;
		left: 0%;
	}
`;
//#endregion

/** Style definitions for the component page */
const PageStyle = styled("div")`
	max-width: 1920px;
	margin: 0 auto;
`;

// Container in which our blog posts lie
const ReadContainer = styled("div")`
	/* height: 92vh; */
	padding-left: 0rem;
	padding-right: 0rem;
	margin-bottom: 0rem;
	/* width: 58.333333%; */
	margin-left: 1rem;
	z-index: 10;
	background-color: #a0aec0;
	border-width: 1px;
	border-radius: 0.5rem;
	/* overflow: auto; */
	object-fit: contain;
	@media (max-width: 1200px) {
		/* height: auto; */
		padding-left: 0rem;
		padding-right: 0rem;
		margin-bottom: 1rem;
		width: 100%;
		margin-left: 0rem;
	}
`;

const DesktopSidebars = styled.div`
	display: flex;
	margin-top: 1rem;
	@media (max-width: 1080px) {
		display: block;
	}
`;

const ReadArea = styled.div`
	padding-left: 1rem;
	padding-right: 1rem;
	@media (max-width: 1080px) {
		padding-left: 0.25rem;
		padding-right: 0.25rem;
	}
`;

interface MdxProps {
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

export {
	Section1,
	Section2,
	Section3,
	PageStyle,
	ReadContainer,
	DesktopSidebars,
	MdxProps,
	ReadArea,
};
