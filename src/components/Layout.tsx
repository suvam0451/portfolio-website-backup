import * as React from "react";
import { Link } from "gatsby";
import { Provider } from "react-redux";
import { store } from "../store";

export interface LayoutProps {
	children: any;
}

const Layout = (props: LayoutProps) => {
	return (
		<Provider store={store}>
			<div className="mt-10 overflow-hidden">{props.children}</div>
		</Provider>
	);
};

// Wrap. Pass props
export const WithLayout = <P extends object>(
	WrappedComponent: React.ComponentType<P>,
) => {
	class WithLayout extends React.Component<P & LayoutProps> {
		render() {
			return (
				<Layout>
					<WrappedComponent {...this.props} />
				</Layout>
			);
		}
	}
};
