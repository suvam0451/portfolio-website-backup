import React, {useState} from 'react'
import { Breadcrumbs, Breadcrumb, IBreadcrumbProps, Icon, Button,
    Card, Elevation,
    Tab, Tabs, TabId,
    Navbar,
    Alignment,  } from "@blueprintjs/core";
import TutorialSection from "../components/TutorialSection"


const BREADCRUMBS: IBreadcrumbProps[] = [
    { href: "/users", icon: "folder-close", text: "Users" },
    { href: "/users/janet", icon: "folder-close", text: "Janet" },
    { icon: "document", text: "image.jpg" },
];
 
export default class BreadcrumbsExample extends React.Component {
    public render() {
        return (
            <>
            <Navbar>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>Blueprint</Navbar.Heading>
                </Navbar.Group>
            </Navbar>
            <hr/>
            <Breadcrumbs
                currentBreadcrumbRenderer={this.renderCurrentBreadcrumb} 
                items={BREADCRUMBS}/>
            <Tabs id="TabsExample" selectedTabId="rx">
            <Tab id="ng" title="Angular" panel={<TutorialSection />} />
                <Tab id="mb" title="Ember" panel={<TutorialSection />} panelClassName="ember-panel" />
                <Tab id="rx" title="React" panel={<TutorialSection />} />
                <Tab id="bb" disabled title="Backbone" panel={<TutorialSection />} />
                <Tabs.Expander />
                <input className="bp3-input" type="text" placeholder="Search..." />
            </Tabs>
            <Card interactive={true} elevation={Elevation.TWO}>
                <h5><a href="#">Card heading</a></h5>
                <p>Card content</p>
                <Button>Submit</Button>
            </Card>
            </>
        );
    }
    private MainTabChanged(newTabId: TabId, prevTabId: TabId, event: MouseEvent<HTMLElement>){
        
    }

    private renderCurrentBreadcrumb = ({ text, ...restProps }: IBreadcrumbProps) => {
        // customize rendering of last breadcrumb
        return <Breadcrumb {...restProps}>{text} <Icon icon="star" /></Breadcrumb>;
    };
}