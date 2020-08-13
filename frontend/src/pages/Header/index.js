import React, { useEffect, useRef, useState } from 'react';
import ReactDom from 'react-dom';
import { Router, Link } from 'react-router-dom'
import { Container, Row, Col, Nav, Navbar, Card, Form, Button, FormControl, InputGroup } from 'react-bootstrap';

import logo from './AI-LGO LOGO2.png'

const Header = () => {
    return (
        <div>
            <Row style={{ backgroundColor: "#343a40", width: "100%", marginLeft: "0px", marginRight: "0px" }}>
                <Col md={2}>
                    <div><img src={logo} width="100%" style={{ marginTop: "15px", height: 40, width: 125 }} /></div>
                </Col>
                <Col md={2}></Col>
                <Col md={8}>
                    <Navbar bg="dark" variant="dark">
                        {/* <Navbar.Brand href="#home"><img src="AI-LGO LOGO2.png" width="100%" style={{ marginTop: "30px" }} /></Navbar.Brand> */}
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-auto" style={{ marginLeft: 200 }} />
                        <Nav className="mr-auto" style={{ fontSize: "20px" }}>
                            <Nav.Link to="/Home" href="/Home"> <Button variant="dark">Home</Button></Nav.Link>
                            <Nav.Link to="/History" href="/History" ><Button variant="dark">Histroy</Button></Nav.Link>
                            <Nav.Link to="/RealTime"><Button variant="dark">RealTime</Button></Nav.Link>
                            <Nav.Link to="/Contact US"><Button variant="dark">Contact Us</Button></Nav.Link>
                            <Nav.Link to="/Login"><Button variant="dark">Login</Button></Nav.Link>
                        </Nav>
                        <Form inline>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Search"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <Button variant="light"><i className="fa fa-search fa-fw"></i></Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form>
                    </Navbar>
                </Col>
            </Row>
            <Row style={{ backgroundColor: "#2196f3", width: "100%", marginLeft: "0px", marginRight: "0px" }}>
                <Col md={1}></Col>
                <Col md={10}>
                    <div>
                        <h1 className="header-title">AI-LGO</h1>
                    </div>
                    <div className="header-content">
                        <b>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.kjwqh dkjhk jsahd
                            kjashdk jashd kjashd kjashd kjashd kjashd lasjdh asokdjhla sjdh alkjsdh laskdjhaslkjdh laksdjh alskjdh laksdhaljdshlkasjd lkajsdhl asjdhlkajshd
                            lkajsdh kjlashd lkjashd lkjashdlkjashd lasjdh lkjashd lakjshd lkjasdh ljadh laksjdhipwuehef iuweh hakljh akdfjh kjsdfh lskdjhf lsdkjfh lsdfhjkldf lk
                            </b>
                    </div>
                </Col>
                <Col md={1}></Col>
            </Row>
        </div>
    )
}

export default Header;