import React, {useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap'
import styles from "../components/container.module.css"
// import styled from '@emotion/styled'


// const TitleLink = styled(Link)`
// color: #fff;
// 
// &:active,
// &:hover {
//   color: #fff;
// }
// `
// const DarkAlert = styled(Alert)`{
//     background-color: #202020;
//     border-color: #202020;
//     color: #969696;
//     border-bottom: 5px;
//     margin-bottom: 5px;
//     margin-top: 5px;
//     margin-right: 0px;
//     margin-left: 0px;
//     border-right: 0px;
//     border-left: 0px;
//     box-shadow: 2px 2px 1px 1px rgba(32,32,32,0.5);
// }`

export const Footer = () => {
    return (
        <Alert className = {styles.DarkCard}  color="secondary">
            <h4 className="alert-heading">Thank you for visiting!</h4>
            <p>Hope you got the resources you needed. Come visit again :)</p>
            <hr className="my-2"/>
            <p>I upload weekly and revamp bi-monthly.  You can support my work at <b>Patreon</b> | <b>Paypal</b> | <b>Marketplace</b> | <b>gumroad</b>.</p>
        </Alert>
    )
}