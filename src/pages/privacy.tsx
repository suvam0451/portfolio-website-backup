import React from "react";
import { Helmet } from "react-helmet";
import { NavSection } from "../components/NavBar";

export default function Privacy() {
	return (
		<>
			<div>
				<Helmet>
					<meta charSet="utf-8" />
					<title>
						WinterWildfire - Advanced gamedev tutorials and toolkits
					</title>
					<meta
						name="description"
						content="Learn Unreal Engine 4 programming with free tutorials and sample projects."
					/>
					<meta name="robots" content="index, follow" />
					<link
						rel="canonical"
						href="https://winterwildfire.netlify.com"
					/>
					<meta
						name="google-site-verification"
						content="qHPn-iP9IEBZyHkA-06dYHzGCYAtUrsg2QINFSnFuVA"
					/>
				</Helmet>
				<NavSection />
				<div>
					<h3 className="text-center">
						Privacy Policy for this website
					</h3>
					<p className="w-2/4 text-center">
						One of my main priority is the privacy of my visitors.
						This Privacy Policy document contains types of information
						that is collected during various transactions and how it
						is stored and used. If you have additional questions or
						require more information about our Privacy Policy, do not
						hesitate to contact us through email at Email@Website.com
					</p>
				</div>
			</div>
		</>
	);
}
