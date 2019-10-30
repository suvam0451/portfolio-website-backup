require('dotenv').config()
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
import axios from "axios"
import priceAPI from '../utils/priceAPI.js'
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

async function prepare() {
  console.log("sweet little lies")
  axios.get('https://api.github.com/users/maecapozzi')
  .then(response => console.log(response))
}

function Index(props: IndexPageProps) {
  // Bindings
  const hello = `doomo`
  const [textInput, setTextInput] = useState("arigato");
  const [isVisible, setIsVisible] = useState(false);
  const [Counter, setCounter] = useState(1);
  const [ActiveTab, setActiveTab] = useState(ActivePage.Featured)
  const [MenuDropdownState, setMenuDropdownState] = useState(false);
  const [currentID, setcurrentID] = useState(0);
  const [currentBuyAt, setCurrentBuy] = useState(0);
  const [currentSellAt, setCurrentSell] = useState(0);

  // Toggle functions
  const toggleVisibile = () => { setIsVisible(!isVisible); } 
  const ToggleMainMenuDrop = () => { 
    // console.log("reimuuuuuu");
    setTextInput("reimuuuu");
    setMenuDropdownState(!MenuDropdownState); } 
  const CounterUpdate = () => { setCounter(Counter + 1); } 
  const ChangeActiveTab = (_SelectedTab : ActivePage) => { setActiveTab(_SelectedTab); }
  // Fetching graphql data
  const { title, author } = props.data.site.siteMetadata

  async function prepare() {
    // console.log("sweet little lies")
    const response = await axios.get('https://api.guildwars2.com/v2/commerce/prices/19684');
    setTextInput(response.statusText);
    setTextInput(response.data["id"]);
    // .then(response => setTextInput(response.data))
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

  function handlePriceSubmit(event: any){
    event.preventDefault();
    // alert("Don't tell no lies, la la la");

    const todoInfo = {
      id: currentID,
      buy_at: currentBuyAt,
      sell_at: currentSellAt
    }
    // alert(todoInfo);

    alert("API key is: " + process.env.FAUNADB_SERVER_SECRET);
    priceAPI.netlifyFunc(todoInfo).then((response: any) => {
      console.log(response);
    }).catch((e: any) => {
      console.log('An API error occurred', e);
    });
    // priceAPI.CreateTable(todoInfo).then((response: any) => {
// 
    // }).catch((e : any) =>{
    //   // In case of error, fallback to cached previous values
    // });
  }


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
            <Button onClick={prepare}>spifire: {textInput}</Button>
            <TutorialSection/>
          </TabPane>
          <TabPane tabId={ActivePage.About}>
            <form onSubmit={handlePriceSubmit}>
              <label>
                Item ID
                <input type="number" name="id" value={currentID} onChange={handleInputChange}/>
              </label>
              <label>
                Buying at
                <input type="number" name="buy_at" value={currentBuyAt}/>
              </label>
              <label>
                Selling at
                <input type="number" name="sell_at" value={currentSellAt}/>
              </label>
              <button type="submit">Submit</button>
            </form>
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