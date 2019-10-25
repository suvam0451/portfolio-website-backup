import React, {useState} from 'react'
import { graphql } from 'gatsby'
import { Layout } from "../components/Layout"
import { Link } from 'gatsby'
import { Helmet } from "react-helmet"
import { Footer } from "../components/Footer"
import Header from "../components/Header"
import styles from "../components/container.module.css" 
import classnames from 'classnames';
import TutorialSection from "../components/TutorialSection"
import { 
  Alert, 
  Breadcrumb, 
  Button,
  BreadcrumbItem, 
  Nav, 
  NavbarBrand,
  NavItem,
  NavLink,
  Navbar,
  UncontrolledCollapse,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Dropdown,
  Jumbotron,
  TabPane,
  TabContent } from 'reactstrap'
import { Segment, Container } from "semantic-ui-react"


interface LunarSearchProps {
  readonly limit: number
}

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        author: string
      }
    }
  }
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
`
enum ActivePage {
  "Featured" = 0, "Tutorials", "Softwares", "About", "Suggestions"
}

class IndexPages extends React.Component<IndexPageProps> {
  readonly hello = `doomo`
  public render() {
    const {
      title,
      author
    } = this.props.data.site.siteMetadata
    return (
      <Layout>
        <h1>{this.hello} TypeScript world!</h1>
        <p>This site is named <strong>{author}</strong></p>
        <h1>Hello world, from {author}!!</h1>
        <p>Konichiwa desu and {this.hello}, to {title}</p>
      </Layout>
    )
  }
}

function Index(props: IndexPageProps) {
  // Bindings
  const hello = `doomo`
  const [isVisible, setIsVisible] = useState(false);
  const [Counter, setCounter] = useState(1);
  const [ActiveTab, setActiveTab] = useState(ActivePage.Featured)
  const [MenuDropdownState, setMenuDropdownState] = useState(false);
  // Toggle functions
  const toggleVisibile = () => { setIsVisible(!isVisible); } 
  const ToggleMainMenuDrop = () => { setMenuDropdownState(!MenuDropdownState); } 
  const CounterUpdate = () => { setCounter(Counter + 1); } 
  const ChangeActiveTab = (_SelectedTab : ActivePage) => { setActiveTab(_SelectedTab); }
  // Fetching graphql data
  const { title, author } = props.data.site.siteMetadata


  return (
    <div className={styles.BasePage}>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>WinterWildfire - Advanced gamedev tutorials and toolkits</title>
        <meta name="description" content="Learn Unreal Engine 4 programming with free tutorials and sample projects. Explore productive extension and scripting solutions brought to you by @suvam0451."/>
        <meta name="robots" content="index, follow"/>
        <link rel="canonical" href="https://winterwildfire.gitlab.io"/>
        <meta name="google-site-verification" content="UpQOVR-GDQR8BBe7XafsQYt2TeI7G_xP-3SrFoAy7L0" />
      </Helmet>

      <Header title={"WinterWildfire"}/>
      <Breadcrumb bsPrefix={styles.DarkCard} listClassName={styles.DarkCard} dark>
          <BreadcrumbItem active>Home</BreadcrumbItem>
      </Breadcrumb>
    <div>
        <Nav tabs className={styles.ModifiedNav}>
          <NavItem>
            <NavLink className={classnames({ active: ActiveTab === ActivePage.Featured })} 
                      onClick={ () => { ChangeActiveTab(ActivePage.Featured); }} >
                Main Hub
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: ActiveTab === ActivePage.Tutorials })}
                      onClick={ () => { ChangeActiveTab(ActivePage.Tutorials); }}>
                Tutorials
          </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: ActiveTab === ActivePage.Softwares })}
                      onClick={ () => { ChangeActiveTab(ActivePage.Softwares); }}>
                Softwares/APIs
          </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: ActiveTab === ActivePage.About })}
                      onClick={ () => { ChangeActiveTab(ActivePage.About); }}>
                About Me
          </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: ActiveTab === ActivePage.Suggestions })}
                      onClick={ () => { ChangeActiveTab(ActivePage.Suggestions); }}>
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
              <DropdownItem disabled>Free Content</DropdownItem>
              <DropdownItem disabled>Paid Content</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
        <TabContent activeTab={ActiveTab}>
          <TabPane tabId={ActivePage.Featured}>
            <Jumbotron className={styles.DarkCardBody}>
              <h1 className="display-5">Hey, I am Debashish Patra!</h1>
              <p><b>App</b>(C++/VBA) | <b>Game</b>(UE4/CryEngine) | <b>Web</b>(React) | <b>DevOps</b></p>
              <hr className="my-2" /> 
              <p className="lead">This is where I share my <b>tutorials, APIs and plugins.</b></p>
              {
              <p className="lead">
                <Button className={styles.ShowCodeButton} color="dark" href="https://gitlab.com/suvam0451">GitLab</Button>
                <Button className={styles.ShowCodeButton} color="dark" href="https://gitlab.com/suvam0451">Discord</Button>
              </p>
              }
            </Jumbotron>
          </TabPane>
          <TabPane tabId={ActivePage.Tutorials}>
            <TutorialSection/>
          </TabPane>
          <TabPane tabId={ActivePage.About}>
            <Segment vertical inverted textAlign="center" className="masthead">
              <Container text>
                Hello there
              </Container>
            </Segment>
              <h1>{hello} TypeScript world!</h1>
              <p>This site is named <strong>{author}</strong></p>
              <h1>Hello world, from {author}!!</h1>
              <button onClick={()=>CounterUpdate()}>Kiss Me</button>
              <p>Konichiwa desu and {Counter}, to {title}</p>
          </TabPane>
        </TabContent>
      <Footer/>
    </div>
    </div>
  )
}

export default Index;