import styled from "@emotion/styled";

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

const Section2 = styled.div``;

/** Style definitions for the component page */
const PageStyle = styled("div")`
	max-width: 1920px;
	margin: 0 auto;
`;

const DesktopSidebars = styled.div`
	display: flex;
	margin-top: 1rem;
	@media (max-width: 1080px) {
		display: block;
	}
`;

const Background = styled.div`
	background-color: #222222;
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

export { Section2, PageStyle, DesktopSidebars, MdxProps, Background };
