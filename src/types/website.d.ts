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
	readonly children: [{ seriesIndex: number; title: string; link: string }];
}

export interface FrontMatterStruct {
	title: string;
	moduleID: number;
	submoduleID: number;
	seriesID: number;
	seriesIndex: number;
}

export interface SidebarProps {
	FrontMatter: {
		title: string;
		moduleID: number;
		submoduleID: number;
		seriesID: number;
		seriesIndex: number;
	};
	GatsbyState?: IGatsbyLocationProps;
}

export interface SiteMetadata {
	title: string;
	description: string;
	author: string;
	siteUrl: string;
	twitterusername: string;
}
