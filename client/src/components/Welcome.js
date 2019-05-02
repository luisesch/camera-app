import React, { Component } from "react";

import WelcomeForm from "./WelcomeForm";

// import React-bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Welcome.css";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "kein",
      img: ""
    };
  }

  handleFormSubmit = (name, id) => {
    this.props.setUser(name, id);
  };

  render() {
    return (
      <Container fluid className="container-welcome bg-white">
        <Row>
          <Col md={5} xs={12} className="pt-4 px-5 mb-5 pt-5">
            <h1>Hi there!</h1>
            <h4 className="mb-4">Welcome to our camera app.</h4>
            <p />
            <WelcomeForm handleFormSubmit={this.handleFormSubmit} />
          </Col>
          <Col md={7} xs={12} className="p-0">
            <div className="blue home-background w-100 h-100" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Welcome;
