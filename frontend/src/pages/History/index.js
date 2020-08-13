import React, { useEffect, useRef, useState } from 'react';
import ReactDom from 'react-dom';
import { Container, Row, Col, Nav, Navbar, Card, Form, Button, FormControl, InputGroup } from 'react-bootstrap';
import Dashboard from '../Dashboard';

let ind = 0;

const History = () => {
    return (
        <>
            <div>
                <Row style={{ width: "100%", marginLeft: "0px", marginRight: "0px" }}>
                    <Col md={1}></Col>
                    <Col style={{ marginTop: 50 }} md={10}>
                        <Card><Dashboard /></Card>
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </div>
        </>
    )
}

export default History;