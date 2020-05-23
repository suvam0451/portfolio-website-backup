import React, { useState } from "react";
import { graphql } from "gatsby";
import axios from "axios";
import priceAPI from "../utils/priceAPI";
import Img from "gatsby-image";
import { NavSection } from "../components/NavBar";
import {
	Button,
	Intent,
	Breadcrumbs,
	IBreadcrumbProps,
	Icon,
	Card,
	Breadcrumb,
} from "@blueprintjs/core";
import { GW2_PriceTag } from "../components/Decorations";

interface GW2TP {
	data: {
		id: number;
		name: string;
		icon: string;
		buy_at: number;
		sell_at: number;
		tolerance: number;
	};
}

interface Response_Items {
	data: {
		name: string;
		description: string;
		type: string;
		level: number;
		rarity: string;
		vendor_value: number;
		game_types: Array<string>;
		flags: Array<string>;
		restrictions: Array<string>;
		id: number;
		chat_link: string;
		icon: string;
	};
}

const BREADCRUMBS: IBreadcrumbProps[] = [
	{ href: "/", icon: "folder-close", text: "Home" },
	{ href: "/Softwares", icon: "folder-close", text: "Webapps" },
	{ icon: "document", text: "SkrittKit" },
];

export const GET_REQ = (request: RequestInfo): Promise<any> => {
	return new Promise((resolve, reject) => {
		let response: Response;
		fetch(request)
			.then((res) => {
				response = res;
				return res.json();
			})
			.then((body) => {
				if (response.ok) {
					resolve(body);
				} else {
					reject(response);
				}
			});
	});
};
export default function SkrittKit(props: any) {
	// State variables
	// const myTable : JSX.Element = <></>;
	const [myTable, setTable] = useState(<></>);
	// const PriceData = null;
	const [PriceData, setPriceData] = useState(Object);
	const [MyString, setMyString] = useState("greatest");
	// Graphql resources
	const { Copper, Silver, Gold } = props.data;

	function handlePriceSubmit(event: any) {
		let ID = "24350";
		const retval: any = [];

		// const ImagePath : IItems = GET_REQ("https://api.guildwars2.com/v2/items?id=" + ID.toString()).then(
		// alert(ImagePath)
		// setMyString(ImagePath)
		// alert (ImagePath)
		// retval.push(ImagePath.length)
		// );

		axios
			.get("https://api.guildwars2.com/v2/items?id=" + ID.toString())
			.then((res) => {
				//  let onii = JSON.parse(res);
				// alert(res.data.icon);
				// setMyString(res["icon"]);
			});
		// setMyString(ImagePath);

		priceAPI.readAll().then((response: any) => {
			setPriceData(response);
			const updatedPrices = response.map(
				async (price: GW2TP, i: number) => {
					const buyprice: number = price.data.buy_at;
					const ID: number = price.data.id;

					retval.push(
						<>
							<tr>
								<td className="border">{price.data.id} </td>
								<td>
									<img
										className="w-8 h-8 inline"
										src={price.data.icon}
									/>
									{price.data.name}
								</td>
								<td>
									<GW2_PriceTag
										GoldValue={Math.floor(buyprice / 10000) % 100}
										SilverValue={Math.floor(buyprice / 100) % 100}
										CopperValue={Math.floor(buyprice / 100) % 100}
									/>
									{Math.floor(buyprice / 10000) % 100}
									<Img fixed={Gold.childImageSharp.fixed} />
									{Math.floor(buyprice / 100) % 100}
									<Img fixed={Silver.childImageSharp.fixed} />
									{buyprice % 100}
									<Img fixed={Copper.childImageSharp.fixed} />
								</td>
								<td>{Math.floor(buyprice / 100) % 100}</td>
								<td>{buyprice % 100}</td>
								<td>30</td>
							</tr>
						</>,
					);

					// alert("https://api.guildwars2.com/v2/items?id=" + ID.toString());
					// const MyImagePath : IItems = await GET_REQ("https://api.guildwars2.com/v2/items?id=" + ID.toString()).then(
					let ImageLink = "";
					if (ID !== 10) {
						axios
							.get(
								"https://api.guildwars2.com/v2/items?id=" +
									ID.toString(),
							)
							.then((res: Response_Items) => {
								ImageLink = res.data.icon;
							});
					}
				},
			);

			setTable(retval);
		});
	}

	return (
		<>
			<NavSection />
			{/* <Card elevation={0} style={{ width: `100%` }}>
					<Breadcrumbs
						currentBreadcrumbRenderer={this.renderCurrentBreadcrumb}
						items={BREADCRUMBS}
					/>
				</Card> */}
			<form>
				<input onChange={handlePriceSubmit} />
				<button>Submit</button>
			</form>
			<div className="mx-2">
				<table className="table-auto">
					<tr>
						<th className="justify-center">id</th>
						<th className="w-1/4">name</th>
						<th>sell offer</th>
						<th>sell price</th>
						<th>buying price</th>
						<th>Margin</th>
					</tr>
					{myTable}
				</table>
			</div>
		</>
	);

	// private renderCurrentBreadcrumb({
	// 	text,
	// 	...restProps
	// }: IBreadcrumbProps) {
	// 	// customize rendering of last breadcrumb
	// 	return (
	// 		<Breadcrumb {...restProps}>
	// 			{text}
	// 		</Breadcrumb>
	// 	);
	// }
}

// Gets copper, silver and gold coins
export const query = graphql`
	{
		Copper: file(
			relativeDirectory: { eq: "images/gw2" }
			name: { eq: "Copper_coin" }
		) {
			childImageSharp {
				fixed(width: 15, height: 15) {
					...GatsbyImageSharpFixed
				}
			}
		}
		Silver: file(
			relativeDirectory: { eq: "images/gw2" }
			name: { eq: "Silver_coin" }
		) {
			childImageSharp {
				fixed(width: 15, height: 15) {
					...GatsbyImageSharpFixed
				}
			}
		}
		Gold: file(
			relativeDirectory: { eq: "images/gw2" }
			name: { eq: "Gold_coin" }
		) {
			childImageSharp {
				fixed(width: 15, height: 15) {
					...GatsbyImageSharpFixed
				}
			}
		}
	}
`;
