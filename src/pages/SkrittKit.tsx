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
import GoldCoin from "../../content/images/gw2/GoldCoin"
import Img from "gatsby-image"
import { 
  Alert, 
  // Breadcrumb, 
  // Button,
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
import { Table } from 'react-bootstrap'
import { Button, Intent, Breadcrumbs, IBreadcrumbProps, Icon, Card, Breadcrumb } from "@blueprintjs/core";

interface GW2TP {
  data: {
    id: number,
    name: string,
    buy_at: number
    sell_at: number,
    tolerance: number
  }
}

const BREADCRUMBS: IBreadcrumbProps[] = [
  { href: "/users", icon: "folder-close", text: "Users" },
  { href: "/users/janet", icon: "folder-close", text: "Janet" },
  { icon: "document", text: "image.jpg" },
]

export class SkrittKit extends React.Component {
  // const [Table, setTable] = useState(<></>);
  // const [myTable, setTable] = useState(<></>);
  // const { Copper, Silver, Gold } = data.data;
  
  // State setters and getters
  // const [PriceData, setPriceData] = useState(Object);

// function ConstructTable(event: any) {
//   // const target = event.target;
//   // const value = target.value;
// 
//     // alert("raabta");
//     const retval : any = [];
// 
//     priceAPI.readAll().then((response: any) => {
//       setPriceData(response);
//       const updatedPrices = PriceData.map((price : GW2TP, i : number) => {
//         retval.push(
//           <>
//           <tbody>
//             <td>{price.data.id}</td>
//             <td>{price.data.name}<img src="https://render.guildwars2.com/file/943538394A94A491C8632FBEF6203C2013443555/102478.png"/></td>
//             <td>{Math.floor(price.data.buy_at/10000) % 100}<Img fixed={Gold.childImageSharp.fixed}/></td>
//             <td>{Math.floor(price.data.buy_at/100) % 100}<Img fixed={Silver.childImageSharp.fixed}/></td>
//             <td>{price.data.buy_at % 100}<Img fixed={Copper.childImageSharp.fixed}/></td>
//             <td>30</td>
//           </tbody>
//           </>
//         )
//         const id = priceAPI.getTodoId(price);
//         // alert("sell " + price.data.id + " at " + price.data.sell_at);
//         // alert(retval);        
//       }).then(setTable(retval));
//     });
//   }

  public render() {
    return (
    <>
      <Table striped bordered hover>
        <thead>
          <th>#</th>
          <th>id</th>
          <th>name</th>
          <th>Buying At</th>
          <th>Selling At</th>
          <th>Margin</th>
        </thead>
        <tbody>
          <td>10</td>
          <td>{/*20<Img fixed={Gold.childImageSharp.fixed}/>*/}</td>
          <td>20</td>
          <td>{/*20<Img fixed={Silver.childImageSharp.fixed}/>*/}</td>
          <td>30</td>
          <td>{/*20<Img fixed={Copper.childImageSharp.fixed}/>*/}</td>
        </tbody>
        {/*myTable*/}
      </Table>
      <Card elevation={0} style={{ width: `100%` }}>
        <Breadcrumbs
          currentBreadcrumbRenderer={this.renderCurrentBreadcrumb}
          items={BREADCRUMBS}
        />
      </Card>
      {/*<form>
        <input
          // placeholder= "Salesperson's name?"
          // name: 'name'
          // value = {this.state.name}
          // onChange={ConstructTable}
        />
        <button>Submit</button>
      </form>*/}
    </>
    );
  }

  private renderCurrentBreadcrumb({ text, ...restProps }: IBreadcrumbProps) {
    // customize rendering of last breadcrumb
    return <Breadcrumb {...restProps}>{text} <Icon icon="star" /></Breadcrumb>;
  };
}

// Gets copper, silver and gold coins
export const query = graphql
`
{
  Copper: file(relativeDirectory: {eq: "images/gw2"}, name: {eq: "Copper_coin"}) {
    childImageSharp {
      fixed(width: 15, height: 15) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  Silver: file(relativeDirectory: {eq: "images/gw2"}, name: {eq: "Silver_coin"}) {
    childImageSharp {
      fixed(width: 15, height: 15) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  Gold: file(relativeDirectory: {eq: "images/gw2"}, name: {eq: "Gold_coin"}) {
    childImageSharp {
      fixed(width: 15, height: 15) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}`

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "gw2/Copper_coin.png" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         fixed(width: 125, height: 125) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `

// export default SkrittKit;