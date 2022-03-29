import React from "react";
import { useNavigate } from "react-router-dom";

// import React-bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "./Checkout.css";

function Checkout(props) {
  const navigate = useNavigate();

  // redirect to upload page without refreshing
  const redirect = () => {
    navigate("/upload");
  };

  return (
    <Container fluid className="container-checkout bg-white p-5">
      <h1>Thank you, {props.user}!</h1>
      <h4>Your photo has been sent.</h4>
      <Row>
        <Col />
        <Col>
          <Button
            className="button-blue px-5 mt-4"
            type="submit"
            onClick={redirect}
          >
            Take another photo
          </Button>
        </Col>
        <Col />
      </Row>
    </Container>
  );
}

export default Checkout;
