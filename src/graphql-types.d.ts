export interface Query {
	allMarkdownRemark: MarkdownRemarkConnection | null;
}

export interface AllMarkdownRemarkQueryArgs {
	skip: number | null;
	limit: number | null;
	sort: markdownRemarkConnectionSort | null;
	filter: filterMarkdownRemark | null;
}

export interface FrontMatterProps {
	FrontMatter: FrontMatterStruct;
}

export interface FrontMatterStruct {
	title: string;
	moduleID: number;
	submoduleID: number;
	seriesID: number;
	seriesIndex: number;
}

/** Node Interface */
export type Node = {
	__typename?: "Node";
	id: Scalars["ID"];
	parent?: Maybe<Node>;
	children: Array<Node>;
	internal: Internal;
};

export type MarkdownRemark = Node & {
	__typename?: "MarkdownRemark";
	id: Scalars["ID"];
	parent?: Maybe<Node>;
	children: Array<Node>;
	internal: Internal;
	frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
	excerpt?: Maybe<Scalars["String"]>;
	rawMarkdownBody?: Maybe<Scalars["String"]>;
	fileAbsolutePath?: Maybe<Scalars["String"]>;
	fields?: Maybe<MarkdownRemarkFields>;
	html?: Maybe<Scalars["String"]>;
	htmlAst?: Maybe<Scalars["JSON"]>;
	excerptAst?: Maybe<Scalars["JSON"]>;
	headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
	timeToRead?: Maybe<Scalars["Int"]>;
	tableOfContents?: Maybe<Scalars["String"]>;
	wordCount?: Maybe<wordCount>;
};

export type MarkdownRemarkConnection = {
	__typename?: "MarkdownRemarkConnection";
	totalCount: Scalars["Int"];
	edges: Array<MarkdownRemarkEdge>;
	nodes: Array<MarkdownRemark>;
	pageInfo: PageInfo;
	distinct: Array<Scalars["String"]>;
	group: Array<MarkdownRemarkGroupConnection>;
};

export type ImageSharp = Node & {
	__typename?: "ImageSharp";
	id: Scalars["ID"];
	parent?: Maybe<Node>;
	children: Array<Node>;
	internal: Internal;
	fixed?: Maybe<ImageSharpFixed>;
	resolutions?: Maybe<ImageSharpResolutions>;
	fluid?: Maybe<ImageSharpFluid>;
	sizes?: Maybe<ImageSharpSizes>;
	original?: Maybe<ImageSharpOriginal>;
	resize?: Maybe<ImageSharpResize>;
};

export type ImageSharpfixedArgs = {
	width?: Maybe<Scalars["Int"]>;
	height?: Maybe<Scalars["Int"]>;
	base64Width?: Maybe<Scalars["Int"]>;
	jpegProgressive: Scalars["Boolean"];
	pngCompressionSpeed: Scalars["Int"];
	grayscale: Scalars["Boolean"];
	duotone?: Maybe<DuotoneGradient>;
	traceSVG?: Maybe<Potrace>;
	quality?: Maybe<Scalars["Int"]>;
	toFormat: ImageFormat;
	toFormatBase64: ImageFormat;
	cropFocus: ImageCropFocus;
	rotate: Scalars["Int"];
};
