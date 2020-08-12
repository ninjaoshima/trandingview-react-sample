import React, { useEffect, useRef, useState } from 'react';
import ReactDom from 'react-dom';
import { Router } from 'react-router-dom'
import { Container, Row, Col, Nav, Navbar, Card, Form, Button, FormControl, InputGroup } from 'react-bootstrap';
import css from './style.css'
import Dashboard from '../Dashboard';

import logo from './AI-LGO LOGO2.png'

let ind = 0;

const Home = () => {
    const makeStatusCard = () => {
        let table = []
        for (let i = 0; i < 12; i++) {
            table.push(<a className="tv-item">
                {
                    <div className="tv-item-container">
                        <div className="tv-item-div">
                            <span className="tv-item-top-right-value">S&amp;P 500</span>
                            <span className="tv-item-top-left-value">3344.1</span>
                        </div>
                        <div style={{marginTop:"8px"}}>
                            <span class="tv-item-direction">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 8">
                                    <path fill="none" stroke="currentcolor" stroke-linecap="round" stroke-width="2" d="m1 6 5-4 5 4"></path>
                                </svg>
                            </span>
                            <span className="tv-item-value-lg">0.54%</span>
                            <span className="tv-item-value-sm">18.1</span>
                        </div>
                    </div>
                }
            </a>)
        }
        return table
    }

    return (
        <>
            <div className="tv-header">
                {makeStatusCard()}
            </div>
            <div>
                <Row style={{ backgroundColor: "#343a40", width: "100%", marginLeft: "0px", marginRight: "0px" }}>
                    <Col md={2}>
                        <div><img src={logo} width="100%" style={{ marginTop: "15px", height: 40, width: 125 }} /></div>
                    </Col>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <Navbar bg="dark" variant="dark">
                            {/* <Navbar.Brand href="#home"><img src="AI-LGO LOGO2.png" width="100%" style={{ marginTop: "30px" }} /></Navbar.Brand> */}
                            <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-auto" style={{marginLeft:200}} />
                            <Nav className="mr-auto" style={{ fontSize: "20px" }}>
                                <Nav.Link href="#home" > <Button variant="dark">Home</Button></Nav.Link>
                                <Nav.Link href="#History"><Button variant="dark">Histroy</Button></Nav.Link>
                                <Nav.Link href="#RealTime"><Button variant="dark">RealTime</Button></Nav.Link>
                                <Nav.Link href="#Contact US"><Button variant="dark">Contact Us</Button></Nav.Link>
                                <Nav.Link href="#Login"><Button variant="dark">Login</Button></Nav.Link>
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
export default Home