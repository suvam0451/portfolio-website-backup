import React, { Component, useState } from "react";
import { DownloadButton } from "../components/Decorations";
import VSCodeSample_01 from "../../content/images/instanced-static-meshes/Promo01.gif";

export default function SoftwareSection() {
	return (
		<div className="container_software">
			<div className="mx-10">
				<div className="mitems-center">
					<div className="flex justify-center">
						<div className="w-1/2">
							<p>SLEEPING FOREST</p>
							<p>Gamedev multitool for UE4</p>
							<p>
								Faciliate and automate your game development pipelines for Unreal Engine
								4.
							</p>
							<DownloadButton icon="box" label="Downloads" link="" />
							<DownloadButton
								icon="git-repo"
								label="Documentation"
								link="/docs/sleeping-forest/getting-started/"
							/>
						</div>
						<img src={VSCodeSample_01} alt="boys" className="w-1/2 shadow-2xl" />
					</div>
				</div>
				<div className="mjustify-center mt-8">
					<div className="flex">
						<div className="flex-1 text-center mx-2">
							<div className="bp3-icon-large bp3-icon-clipboard bp3-intent-success mr-2 mb-4 icon_bp" />
							<p className="inline">UTILITY FIRST</p>
							<p className="text-left">
								Comes with features like File/asset management, function injection,
								code/shader compilation, hand-crafted auto-completion, better intellisense
								and many more.
							</p>
						</div>
						<div className="flex-1 text-center mx-2">
							<span className="bp3-icon-large bp3-icon-heart bp3-intent-warning inline mr-2 mb-4" />
							<p className="inline">BUILT WITH YOU</p>
							<p className="text-left">
								The community matters the most to me. The plug-in will always be free for
								everyone. Don't like a feature ? Have a better implementation ? Drop by
								and say hello and it will be updated.
							</p>
						</div>
						<div className="flex-1 text-center mx-2">
							<span className="bp3-icon-large bp3-icon-automatic-updates bp3-intent-success inline mr-2 mb-4" />
							<p className="inline">CUSTOMIZABLE</p>
							<p className="text-left">
								Most features are exposed to be modifiable by the end-user, you can also
								drop by our Discord and suggest additions. You also have the option to
								request for custom functionalities.
							</p>
						</div>
					</div>
				</div>
				<hr />
				<div className="flex mt-16">
					<img src={VSCodeSample_01} alt="boys" className="w-1/2 shadow-md" />
					<div className="w-1/2 text-center ml-4 pt-2">
						<h4 className="text-left">Snippet Library</h4>
						<p className="text-left font-normal">
							Hand-crafted intellisense suggestions based on personal dev experience,
							community feedback and ue4 macro relevance :
						</p>
						<div className="text-left">
							<ul>
								<li>Ever-expanding library of snippets</li>
								<li>Automatic header management</li>
								<li>Extendible build templates for engine classes</li>
								<li>Add common functions with single click</li>
								<li>
									<a href="/tutorials">And more...</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="flex mt-10">
					<div className="w-1/2 text-center ml-2 pt-2">
						<h4 className="text-left">Custom Command Palette</h4>
						<p className="text-left font-normal">
							Provides special code actions for an ever-expanding list of workflows with
							detailed documentation. Some examples :
						</p>
						<div className="text-left">
							<ul>
								<li>Setup asset streams</li>
								<li>Compile code/shaders/game</li>
								<li>One-click improved Intellisense</li>
								<li>Class/Plugin creation without editor</li>
								<li>
									<a href="/tutorials">And more...</a>
								</li>
							</ul>
						</div>
					</div>
					<img src={VSCodeSample_01} alt="boys" className="w-1/2 shadow-md" />
				</div>
				<div className="flex mt-8 mb-16">
					<img src={VSCodeSample_01} alt="boys" className="w-1/2 shadow-md" />
					<div className="w-1/2 text-center ml-4 pt-2">
						<h4 className="text-left">Asset streams</h4>
						<p className="text-left font-normal">
							A unique take on automatic asset management between your source files and
							engine(.uasset) files
						</p>
						<ul className="text-left">
							<li>Configure your import settings per folder</li>
							<li>Uses ue4 vanilla Python API</li>
							<li>Full control, right from the IDE</li>
							<li>
								Asset indexing reports and extensibility <i>[WIP]</i>
							</li>
							<li>
								<a href="/tutorials">Suggest features...</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
