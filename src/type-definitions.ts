import { graphql } from "gatsby";

export interface mdxProps {
	data: {
		mdx: {
			id: number;
			body: any;
			frontmatter: FrontMatterStruct;
		};
	};
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
