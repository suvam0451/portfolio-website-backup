import React, {useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css' // Without this line, css breaks.
import { Alert } from 'react-bootstrap'
import styles from "../components/container.module.css"


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