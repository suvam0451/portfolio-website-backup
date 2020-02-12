// Copyright here

import React, { useState, useRef, useEffect } from "react";
import Styled from "@emotion/styled";
import { TweenMax, Power3 } from "gsap";

//#region Common Interfaces
export interface SidebarDataTree {
	readonly nodes: Tier0[];
}
export interface Tier0 {
	readonly submoduleID: number;
	readonly category: string;
	readonly description: string;
	readonly modules: Tier1[];
	readonly label: string;
}

export interface Tier1 {
	readonly seriesID: number;
	readonly label: string;
	readonly children: [
		{ seriesIndex: number; title: string; link: string },
	];
}

export interface FrontMatterStruct {
	title: string;
	moduleID: number;
	submoduleID: number;
	seriesID: number;
	seriesIndex: number;
}

export interface SidebarProps {
	FrontMatter: FrontMatterStruct;
}

export interface FrontMatterStruct {
	title: string;
	moduleID: number;
	submoduleID: number;
	seriesID: number;
	seriesIndex: number;
}

export interface SidebarProps {
	FrontMatter: FrontMatterStruct;
}

interface CollapsibleModule {
	readonly collapsible: any;
	readonly label: string;
}

//#endregion

/**  */
export function CollapsibleModule(section: any, label: string) {
	const [Collapsed, setCollapsed] = useState(true);
	// display: ${props => (Collapsed ? `none` : "block")};
	const CollapsibleDiv = Styled("div")`		
		display: ${props => (Collapsed ? `none` : "block")};
	`;
	const [IconSection, setIconSection] = useState(
		"bp3-icon-standard bp3-icon-chevron-right bp3-intent-success content-center mt-1",
	);

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
				className="flex hover:bg-teal-200 mt-1 ml-1 rounded-sm select-none"
				onClick={ToggleCollapse}
			>
				<span className={IconSection} />
				<div className="ml-2">{label}</div>
			</div>
			<CollapsibleDiv>{section}</CollapsibleDiv>
		</>
	);
}
