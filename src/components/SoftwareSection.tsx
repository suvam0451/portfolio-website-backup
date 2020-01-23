import React, { Component, useState } from "react";
import {
	CardGroup,
	Pagination,
	PaginationItem,
	PaginationLink,
	CardTitle,
	CardText,
	CardBody,
	CardHeader,
	FormGroup,
	Input,
	Label,
} from "reactstrap";
import { StaticQuery, graphql } from "gatsby";
import { Row, Col } from "reactstrap";
import Image from "gatsby-image";
import styled from "@emotion/styled";
import { Link, useStaticQuery } from "gatsby";
import {
	Button,
	Intent,
	Breadcrumbs,
	Breadcrumb,
	IBreadcrumbProps,
	Icon,
	Card,
	Elevation,
} from "@blueprintjs/core";
import { TutorialCard } from "../components/Boxes";
import { Alert } from "../components/Decorations";
import VSCodeSample_01 from "../../content/images/instanced-static-meshes/Promo01.gif";

export default function SoftwareSection() {
	return (
		<div className="mx-10">
			<div className="max-w-4xl items-center">
				<div className="flex justify-center mt-16">
					<div className="w-1/2 text-center">
						<h5>Daedalus Globalnode</h5>
						<p>Free. Convenient. Full Documentation.</p>
					</div>
					<img src={VSCodeSample_01} alt="boys" className="w-1/2" />
				</div>
			</div>
			<div className="max-w-4xl">
				<div className="flex justify-center mt-16">
					<img src={VSCodeSample_01} alt="boys" className="w-1/2" />
					<div className="w-1/2 text-center ml-4 pt-2">
						<h4 className="text-left">Snippet Library</h4>
						<p className="text-left font-normal">
							Provides empirical intellisense completion suggestions
							for various workflows with detailed documentation.
							Supported workflows are :
						</p>
						<div className="text-left">
							<ul>
								<li>Procedural Mesh assembly</li>
								<li>Material node creation</li>
								<li>
									<a href="/tutorials">And more...</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="max-w-4xl">
				<div className="flex justify-center mt-16">
					<div className="w-1/2 text-center ml-2 pt-2">
						<h4 className="text-left">Custom Command Pallete</h4>
						<p className="text-left font-normal">
							Provides empirical intellisense completion suggestions
							for various workflows with detailed documentation.
							Supported workflows are :
						</p>
						<div className="text-left">
							<ul>
								<li>Procedural Mesh assembly</li>
								<li>Material node creation</li>
								<li>
									<a href="/tutorials">And more...</a>
								</li>
							</ul>
						</div>
					</div>
					<img src={VSCodeSample_01} alt="boys" className="w-1/2" />
				</div>
			</div>
			<div className="max-w-4xl">
				<div className="flex justify-center mt-16">
					<div className="w-1/2 text-center">
						<h5 className="text-left">Daedalus Globalnode</h5>
						<p className="text-left font-normal">
							An empirical code-completion and utility tool designed
							for Unreal Engine programmers.
						</p>
					</div>
					<div className="w-1/2 text-center">Konnichiwa</div>
				</div>
			</div>
		</div>
	);
}
