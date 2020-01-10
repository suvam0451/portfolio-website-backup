import { Link } from "gatsby";
import React, { Component } from "react";
import { Col } from "reactstrap";
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

function StatusCard() {
	return (
			<Card className="w-full">
				<h4>Git basics</h4>
				<li>Full references</li>
				<li>Discussions Available</li>
				<li>
					<b>Status</b>: not deployed
				</li>
			</Card>
	);
}

export { StatusCard };
