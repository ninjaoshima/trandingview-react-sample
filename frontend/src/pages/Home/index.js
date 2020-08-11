import React, { useEffect, useRef, useState } from 'react';
import ReactDom from 'react-dom';
import { Router } from 'react-router-dom'
import { Container, Row, Col, Nav, Navbar, Card, Form, Button, FormControl, ButtonGroup } from 'react-bootstrap';
import Dashboard from '../Dashboard';
let ind = 0;

const Home = () => {
    const [ checkValue, setcheckValue ] = useState(null);

    const onRadioChange = (e) => {
        ind++
        if(ind>1) ind = 0;
        setcheckValue(ind);
        console.log(ind);
        console.log(e.currentTarget.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    return (
        <div className="top_container">
            <Row style={{width:"100%"}}>
                <Col md={3}>
                    <div><img src="#" /></div>
                </Col>
                <Col md={9}>
                    <Navbar bg="light" expand="lg" style={{ marginTop: 50 }}>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#History">History</Nav.Link>
                                <Nav.Link href="#RealTime">RealTime</Nav.Link>
                                <Nav.Link href="#Contact US">Contact US</Nav.Link>
                                <Nav.Link href="#Login">Login</Nav.Link>
                                <Nav.Link href="#Blink">Blink</Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
            <Row style={{width:"100%"}}>
                <Col md={5}></Col>
                <Col md={2}>
                    <div style={{ marginTop: 50 }}><h3>AI-LGO</h3></div>
                </Col>
                <Col md={5}></Col>
            </Row>
            <Row style={{width:"100%"}}>
                <Col md={1}></Col>
                <Col md={9}>
                    <div style={{ marginTop: 50, textAlign: "justify" }}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.kjwqh dkjhk jsahd
                            kjashdk jashd kjashd kjashd kjashd kjashd lasjdh asokdjhla sjdh alkjsdh laskdjhaslkjdh laksdjh alskjdh laksdhaljdshlkasjd lkajsdhl asjdhlkajshd
                            lkajsdh kjlashd lkjashd lkjashdlkjashd lasjdh lkjashd lakjshd lkjasdh ljadh laksjdhipwuehef iuweh hakljh akdfjh kjsdfh lskdjhf lsdkjfh lsdfhjkldf lk
                        </p>
                    </div>
                </Col>
                <Col md={2}>
                    <Card>
                        <Card.Body>
                            <div>
                                <ul>
                                    <li>
                                        <label>
                                            <input
                                                type="radio"
                                                value="1"
                                                // checked={ checkValue }
                                                onChange={ onRadioChange }
                                            />&nbsp;
                                            <span>1min</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input
                                                type="radio"
                                                value="5"
                                                // checked={ checkValue }
                                                onChange={ onRadioChange }
                                            />&nbsp;
                                            <span>5min</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input
                                                type="radio"
                                                value="30"
                                                // checked={ checkValue }
                                                onChange={ onRadioChange }
                                            />&nbsp;
                                            <span>10min</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input
                                                type="radio"
                                                value="60"
                                                // checked={ checkValue }
                                                onChange={ onRadioChange }
                                            />&nbsp;
                                            <span>60min</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row style={{width:"100%"}}>
                <Col style={{ marginTop: 50 }}>
                    <Dashboard />
                </Col>
            </Row>
        </div>
    )
}
export default Home