import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Row, Col, Nav, Navbar, Card, Form, Button, FormControl, InputGroup } from 'react-bootstrap';

import logo from './AI-LGO LOGO2.png'

import "./styles/index.scss";
import Home from './pages/Home';
import History from './pages/History';
import RealTimeCard from './pages/RealTimeCard';

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
}

const App = () => {
  const getActiveNav = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <>
      <RealTimeCard/>
      <Router>
        <div>
          <Row style={{ backgroundColor: "#343a40", width: "100%", marginLeft: "0px", marginRight: "0px" }}>
            <Col md={2}>
              <div><img src={logo} width="100%" style={{ marginTop: "15px", height: 40, width: 125 }} /></div>
            </Col>
            <Col md={2}></Col>
            <Col md={8}>
              <Navbar bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-auto" style={{ marginLeft: 200 }} />
                <Nav className="mr-auto" style={{ fontSize: "20px" }} onSelect={getActiveNav}>
                  <Nav.Item><Link to="/"> <Button variant="dark">Home</Button></Link></Nav.Item>&nbsp;
                  <Nav.Item><Link to="/History"> <Button variant="dark">History</Button></Link></Nav.Item>&nbsp;
                  <Nav.Item><Link to="/RealTime"> <Button variant="dark">RealTime</Button></Link></Nav.Item>&nbsp;
                  <Nav.Item><Link to="/Contact US"> <Button variant="dark">Contact US</Button></Link></Nav.Item>&nbsp;
                  <Nav.Item><Link to="/Login"> <Button variant="dark">Login</Button></Link></Nav.Item>&nbsp;
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/History" component={History} />
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
