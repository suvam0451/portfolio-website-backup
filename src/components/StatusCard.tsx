import { Link } from "gatsby";
import React, { Component } from "react";
import { Col } from "reactstrap";
import { Card } from "@blueprintjs/core";

function StatusCard() {
	return (
		<Col xs="12" sm="12" md="12" lg="12" xl="12">
			<Card>
				<h4>Git basics</h4>
				<li>Full references</li>
				<li>Discussions Available</li>
				<li>
					<b>Status</b>: not deployed
				</li>
			</Card>
		</Col>
	);
}

export { StatusCard };
