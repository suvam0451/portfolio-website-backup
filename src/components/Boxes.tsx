import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ue4_icon from "../../content/images/ue4-icon.png";
import Image from "gatsby-image";

interface BoxProps {
	readonly username: string;
	readonly label: string;
	readonly description: string;
}

interface TutorialCardProps {
	readonly title: string;
	readonly desc: string;
	readonly software: string;
	readonly date: string;
	readonly image: any;
}

function TutorialCard(props: TutorialCardProps) {
	return (
		<div className="border-gray-600 border-2 border-solid rounded-lg my-2">
			<div className="bg-gray-500 hover:bg-gray-600 flex-1 p-2 rounded-lg overflow-hidden border flex h-40 mx-1 my-1 shadow-md">
				<div className="flex-1 pl-2 pr-3 pt-2">
					<h5 className="font-bold mb-3">{props.title}</h5>
					<div className="bg-teal-600 h-1 rounded-lg mb-1" />
					<h6 className="text-sm font-hairline leading-snug">
						{props.desc}
					</h6>
					<div className="flex align-bottom mt-6">
						<img
							src={ue4_icon}
							alt=""
							className="h-6 w-6 mr-2 object-cover"
						/>
						<h4 className="text-sm font-light text-teal-600 mt-1">
							&bull; Tutorial
						</h4>
					</div>
				</div>
				<div className="flex-initial">
					{/* Must modify pb later. The image is rendered relativeto the div at given absolute position. */}
					<div className="relative pb-3/5 w-56">
						{/* <img
						className="absolute top=0 h-full w-full object-cover"
						src="https://steamcdn-a.akamaihd.net/steam/apps/238010/header.jpg?t=1563796563"
						alt=""
					/> */}
						<Image
							className="shadow-lg"
							fluid={props.image}
							alt="GifGallery"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
export { TutorialCard };
