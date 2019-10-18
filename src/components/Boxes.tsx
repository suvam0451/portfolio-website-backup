import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./container.module.css" 

interface BoxProps {
    readonly username: string
    readonly label: string
    readonly description: string
}

export function Boxes(props: BoxProps) {
    return (
    <div className={styles.boxbody}>
        <div>
            <h2 className = {styles.username}>{props.label}</h2>
            <hr className = {styles.CustomHorizontalRule}></hr>
            <p className = {styles.excerpt}>{props.description}</p>
        </div>
        <div className={styles.boximage}>     
        </div>
    </div> 
    )
}