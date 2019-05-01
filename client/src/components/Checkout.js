import React, { Component } from "react";
import { withRouter } from "react-router";

// import React-bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "./Checkout.css";

class Checkout extends Component {
  // redirect to upload page without refreshing
  redirect = () => {
    this.props.history.push("/upload");
  };

  render() {
    return (
      <Container fluid className="container-checkout bg-white p-5">
        <h1>Thank you, {this.props.user}!</h1>
        <h4>Your photo has been sent.</h4>
        <Row>
          <Col />
          <Col>
            <Button
              className="button-pink px-5 mt-4"
              type="submit"
              onClick={this.redirect}
            >
              TAKE ANOTHER PHOTO
            </Button>
          </Col>
          <Col />
        </Row>
      </Container>
    );
  }
}

export default withRouter(Checkout);
