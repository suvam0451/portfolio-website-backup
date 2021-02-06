import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";
import { Alert, Footer } from "../components/Decorations";
import styles from "../components/container.module.css";
import classnames from "classnames";
import TutorialSection from "../components/TutorialSection";
import axios from "axios";
import priceAPI from "../utils/priceAPI";
import SoftwareSection from "../components/SoftwareSection";
import { GatsbySeo } from "gatsby-plugin-next-seo";
import {
	Nav,
	NavItem,
	NavLink,
	DropdownMenu,
	DropdownToggle,
	DropdownItem,
	Dropdown,
	Jumbotron,
	TabPane,
	TabContent,
} from "reactstrap";

import {
	Alignment,
	Button,
	Intent,
	Breadcrumbs,
	Breadcrumb,
	IBreadcrumbProps,
	Icon,
	Card,
	Navbar,
	NavbarHeading,
	NavbarDivider,
	NavbarGroup,
	Classes,
} from "@blueprintjs/core";
import { NavSection } from "../components/NavBar";

const BREADCRUMBS: IBreadcrumbProps[] = [
	{ href: "/users", icon: "folder-close", text: "Users" },
	{ href: "/users/janet", icon: "folder-close", text: "Janet" },
	{ icon: "document", text: "image.jpg" },
];
export interface IButtonsExampleState {
	active: boolean;
	disabled: boolean;
	iconOnly: boolean;
	intent: Intent;
	loading: boolean;
	large: boolean;
	minimal: boolean;
	wiggling: boolean;
}

interface GW2TP {
	data: {
		id: number;
		name: string;
		buy_at: number;
		sell_at: number;
		tolerance: number;
	};
}

interface LunarSearchProps {
	readonly limit: number;
}

interface IndexPageProps {
	data: {
		site: {
			siteMetadata: {
				title: string;
				author: string;
			};
		};
	};
}

export const indexPageQuery = graphql`
	query IndexPageQuery {
		site {
			siteMetadata {
				title
				author
			}
		}
	}
`;
enum ActivePage {
	"Featured" = 0,
	"Tutorials",
	"Softwares",
	"About",
	"Suggestions",
}

function Index(props: IndexPageProps) {
	// Bindings
	const hello = `doomo`;
	const [textInput, setTextInput] = useState("arigato");
	const [isVisible, setIsVisible] = useState(false);
	const [Counter, setCounter] = useState(1);
	const [ActiveTab, setActiveTab] = useState(ActivePage.Featured);
	const [MenuDropdownState, setMenuDropdownState] = useState(false);
	const [currentID, setcurrentID] = useState(0);
	const [currentBuyAt, setCurrentBuy] = useState(0);
	const [currentSellAt, setCurrentSell] = useState(0);
	const [PriceData, setPriceData] = useState(Object);
	// Toggle functions
	const toggleVisibile = () => {
		setIsVisible(!isVisible);
	};
	const ToggleMainMenuDrop = () => {
		// console.log("reimuuuuuu");
		setTextInput("reimuuuu");
		setMenuDropdownState(!MenuDropdownState);
	};
	const CounterUpdate = () => {
		setCounter(Counter + 1);
	};
	const ChangeActiveTab = (_SelectedTab: ActivePage) => {
		setActiveTab(_SelectedTab);
	};
	// Fetching graphql data
	const { title, author } = props.data.site.siteMetadata;

	async function prepare() {
		const response = await axios.get(
			"https://api.guildwars2.com/v2/commerce/prices/19684",
		);
		setTextInput(response.statusText);
		setTextInput(response.data["id"]);
	}

	function renderCurrentBreadcrumb({ text, ...restProps }: IBreadcrumbProps) {
		// customize rendering of last breadcrumb
		return (
			<Breadcrumb {...restProps}>
				{text} <Icon icon="star" />
			</Breadcrumb>
		);
	}

	function handleInputChange(event: any) {
		const target = event.target;
		const value = target.value;
		// const name = target.name
		console.log("value found to be: " + value);
		setcurrentID(value);
		setCurrentBuy(value);
		setCurrentSell(value);
	}

	function handlePriceSubmit(event: any) {
		event.preventDefault();
		// alert("Don't tell no lies, la la la");

		const todoInfo = {
			id: currentID,
			buy_at: currentBuyAt,
			sell_at: currentSellAt,
		};

		priceAPI.readAll().then((response: any) => {
			setPriceData(response);
			const updatedPrices = PriceData.map((price: GW2TP, i: number) => {
				const id = priceAPI.getTodoId(price);
				alert("sell " + price.data.id + " at " + price.data.sell_at);
			});
		});
	}

	return (
		<div>
			<GatsbySeo
				twitter={{
					handle: "@suvam0451",
					site: "@suvam0451",
					cardType: "summary_large_image",
				}}
				metaTags={[]}
				canonical="https://suvam0451.netlify.app"
				title="WinterWildfire - Advanced gamedev tutorials and toolkits"
				description="Learn Unreal Engine 4 programming with free tutorials and sample projects."
			/>
			<Helmet>
				<meta charSet="utf-8" />
				<meta name="robots" content="index, follow" />
				<meta
					property="twitter:image"
					content="https://i.pinimg.com/originals/b0/d6/92/b0d692662cb25c1d245d8c94671fe93d.jpg"
				/>
				<meta
					property="og:image"
					content="https://i.pinimg.com/originals/b0/d6/92/b0d692662cb25c1d245d8c94671fe93d.jpg"
				/>
				<meta property="og:image:alt" content="Faulty URL" />
			</Helmet>

			<div>
				<div className="shadow-md">
					<NavSection />
					<Nav tabs>
						<NavItem>
							<NavLink
								className={classnames({
									active: ActiveTab === ActivePage.Featured,
								})}
								onClick={() => {
									ChangeActiveTab(ActivePage.Featured);
								}}
							>
								Main Hub
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className={classnames({
									active: ActiveTab === ActivePage.Tutorials,
								})}
								onClick={() => {
									ChangeActiveTab(ActivePage.Tutorials);
								}}
							>
								Tutorials
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className={classnames({
									active: ActiveTab === ActivePage.Softwares,
								})}
								onClick={() => {
									ChangeActiveTab(ActivePage.Softwares);
								}}
							>
								Sleeping Forest
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className={classnames({
									active: ActiveTab === ActivePage.About,
								})}
								onClick={() => {
									ChangeActiveTab(ActivePage.About);
								}}
							>
								About
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink
								className={classnames({
									active: ActiveTab === ActivePage.Suggestions,
								})}
								onClick={() => {
									ChangeActiveTab(ActivePage.Suggestions);
								}}
							>
								Suggestion
							</NavLink>
						</NavItem>
						<Dropdown nav isOpen={MenuDropdownState} toggle={ToggleMainMenuDrop}>
							<DropdownToggle nav caret>
								Resources
							</DropdownToggle>
							<DropdownMenu>
								<DropdownItem disabled>Advanced sitemap</DropdownItem>
								<DropdownItem divider />
								<DropdownItem disabled>UE4 Projects</DropdownItem>
								<DropdownItem disabled>Blender Scripts</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</Nav>
				</div>
				<TabContent activeTab={ActiveTab}>
					<TabPane tabId={ActivePage.Featured}>
						<Jumbotron>
							<h1 className="display-5">Welcome to WinterWildfire</h1>
							<p>
								<b>App</b>(C++/VBA) | <b>Game</b>(UE4/CryEngine) | <b>Web</b>(React) |{" "}
								<b>DevOps</b>
							</p>
							<hr className="my-2" />
							<p className="lead">
								Home to gamedev <b>tutorials, APIs and plugins.</b>
							</p>
							{
								<p className="lead">
									<Button icon="refresh" color="dark">
										<a href="https://gitlab.com/suvam0451">Gitlab</a>
									</Button>
									<Button className={styles.ShowCodeButton} color="dark">
										<a href="https://gitlab.com/suvam0451">Gitlab</a>
									</Button>
									<Button className={styles.ShowCodeButton} color="dark">
										<a href="https://gitlab.com/suvam0451">Discord</a>
									</Button>
								</p>
							}
						</Jumbotron>
					</TabPane>
					<TabPane tabId={ActivePage.Tutorials}>
						<TutorialSection />
					</TabPane>
					<TabPane tabId={ActivePage.Softwares}>
						<SoftwareSection />
					</TabPane>
					<TabPane tabId={ActivePage.About}>
						<form onSubmit={handlePriceSubmit}>
							<label>
								Item ID
								<input
									type="number"
									name="id"
									value={currentID}
									onChange={handleInputChange}
								/>
							</label>
							<label>
								Buying at
								<input type="number" name="buy_at" value={currentBuyAt} />
							</label>
							<label>
								Selling at
								<input type="number" name="sell_at" value={currentSellAt} />
							</label>
							<button type="submit">Submit</button>
						</form>
					</TabPane>
				</TabContent>
				<Footer />
			</div>
		</div>
	);
}

export default Index;
