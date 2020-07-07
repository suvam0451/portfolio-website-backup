// Copyright here

import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import { IGatsbyLocationProps } from "../../templates/Common";

//#endregion
interface CollapsibleModule {
	readonly HeaderSection: string;
	readonly isCollapsed: boolean;
	children: any;
}

/**  */
export function CollapsibleModule(props: CollapsibleModule) {
	const [Collapsed, setCollapsed] = useState(props.isCollapsed);
	const CollapsibleDiv = styled("div")`
		display: ${Collapsed ? `none` : "block"};
	`;
	const [IconSection, setIconSection] = useState(
		"bp3-icon-standard bp3-icon-chevron-right bp3-intent-success content-center mt-1",
	);
	let logoItem: any = useRef(null);

	// Show in effect
	useEffect(() => {
		logoItem.opacity = 0;
	});

	function ToggleCollapse() {
		let str = Collapsed === true ? "bp3-icon-chevron-down" : "bp3-icon-chevron-right";
		setIconSection(`bp3-icon-standard ${str} bp3-intent-success content-center mt-1`);
		setCollapsed(!Collapsed);
	}

	return (
		<>
			<div
				ref={(el) => {
					logoItem = el;
				}}
				className="flex hover:bg-teal-200 mt-1 ml-1 rounded-sm select-none"
				onClick={ToggleCollapse}
			>
				{/* <span className={IconSection} /> */}
				<span className={IconSection} />
				<div className="ml-2">{props.HeaderSection}</div>
			</div>
			<CollapsibleDiv>{props.children}</CollapsibleDiv>
		</>
	);
}
