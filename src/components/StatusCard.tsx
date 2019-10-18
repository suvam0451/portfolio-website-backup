import { Link } from "gatsby";
import React, { Component } from 'react';
import { Col, Card, CardBody, CardHeader } from 'reactstrap';
import styles from "./container.module.css"

function StatusCard() {
    return (
    <Col xs ="12" sm="12" md="12" lg="12" xl="12">
        <Card className ={styles.DarkCard} body>
            <CardHeader tag="h4">Git basics</CardHeader>
            <CardBody className={styles.DarkCardBody}>
                <li>Full references</li>
                <li>Discussions Available</li>
                <li><b>Status</b>: not deployed</li>
            </CardBody>
        </Card>
    </Col>
    )
}

export { StatusCard };