import React, { useEffect, useRef, useState } from 'react';
import ReactDom from 'react-dom';
import { Router } from 'react-router-dom'
import { Container, Row, Col, Nav, Navbar, Card, Form, Button, FormControl, InputGroup } from 'react-bootstrap';
import Header from '../Header';
import css from '../style.css'
import Dashboard from '../Dashboard';

let ind = 0;

const Home = () => {

    return (
        <>
            <div>
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