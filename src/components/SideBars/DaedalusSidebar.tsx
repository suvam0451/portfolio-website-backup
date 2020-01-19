import React, { useState, useRef, useEffect } from "react";
import ue4_icon from "../../content/images/ue4-icon.png";
import Image from "gatsby-image";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Icon } from "@blueprintjs/core";
import styled from "@emotion/styled";
import { TweenMax, Power3 } from "gsap";
import TransitionLink from "gatsby-plugin-transition-link";

interface allDaedalusAPIJSONType {
	readonly edges: Tier0_Props[];
}

interface FrontMatterStruct {
	title: string;
	moduleID: number;
	submoduleID: number;
	seriesID: number;
	seriesIndex: number;
}

interface SidebarProps {
	FrontMatter: FrontMatterStruct;
}

export default function SideBar(Props: SidebarProps) {
	const RootQuery = useStaticQuery(graphql`
		query DaedalusSidebarQuery {
			allDaedalusApiJson {
				nodes {
					modules {
						label
						seriesID
						children {
							link
							seriesIndex
							title
						}
					}
					submoduleID
				}
			}
		}
	`);

	return <>Okay then</>;
}
