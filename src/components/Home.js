import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import image from 'images/icons.png'

function Home() {
  return (
    <Container
      style={{ height: "100vh", backgroundColor: "black" }}
      className="d-flex flex-column align-items-center justify-content-center"
      fluid
    >
      <home-container>
      
        <Row>
          <Col>
          
            <h1 className="heda" style={{ fontSize: "6em", color: "#d6d1d1" }}>Janta</h1>
            <h5 className="heda5">For all your project management needs</h5>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <NavLink className="btn btn-primary" to="/update-costs">
              Project  Costs
            </NavLink>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <NavLink className="btn btn-primary" to="/schedule">
              Project Schedule
            </NavLink>
          </Col>
        </Row>
        <br></br>
      </home-container>
    </Container>
  );
}

export default Home;
