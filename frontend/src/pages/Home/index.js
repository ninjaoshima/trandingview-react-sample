import React, { useEffect, useRef, useState } from 'react';
import ReactDom from 'react-dom';
import { Router } from 'react-router-dom'
import { Container, Row, Col, Nav, Navbar, Card, Form, Button, FormControl, InputGroup } from 'react-bootstrap';
import Header from '../Header';
import css from '../style.css'
import Dashboard from '../Dashboard';
import {Helmet} from "react-helmet";
import TradingViewWidget from 'react-tradingview-widget';
let ind = 0;

const Home = () => {

    
    return (
        <>
            <div>
                <Row style={{ backgroundColor: "#00007f", width: "100%", marginLeft: "0px", marginRight: "0px", paddingTop: 25}}>
                    <Col md={1}></Col>
                    <Col md={10}>
                        <div>
                            <h1 className="header-title">AI-LGO</h1>
                        </div>
                        <div className="header-content">
                            <b>
                               AI-LGO Systems Ltd developed algo-trading robots based on advanced machine learning models that were successffuly deployed in medical data-mining and mortality prediction models.
                               These models can provide accurate prediction on assets trends on daily trading. The algo-trading signals are sent to the trading strategy robots for long/short buy/sell instructions. 
                               The model are optimized for low-risk trading policies.
                            </b>
                        </div>
                    </Col>
                    <Col md={1}></Col>
                </Row>
                <Row style={{ width: "100%", marginLeft: "0px", marginRight: "0px", backgroundColor: "#00007f" }}>
                    <Col md={1}></Col>
                    <Col style={{ marginTop: 25 }} md={10}>
                    <TradingViewWidget symbol="NASDAQ:AAPL" 
                        interval = "1"
                        hide_side_toolbar = "false"
                        allow_symbol_change = "true"
                        details = "true"
                        theme = "light"
                        width = "100%"
                        backgroundColor = "white"
                        withdateranges = "true"
                        

                    />
                    <div class="tradingview-widget-copyright">
         by Ai-Lgo</div>
        

                   


                        {/* <Card><Dashboard /></Card> */}
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </div>
        </>
    )
}
export default Home