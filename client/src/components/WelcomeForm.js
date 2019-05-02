import React, { Component } from "react";

// import React-bootstrap components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./Welcome.css";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    };
  }

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.name, this.state.email);
  };

  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <Form.Group>
          <Form.Label>
            In order to get started please tell us your name
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Your first and last name"
            name="name"
            onChange={this.handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>... and your email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your email"
            name="email"
            onChange={this.handleChange}
            required
          />
        </Form.Group>
        <Button className="button-blue px-5" type="submit">
          NEXT STEP
        </Button>
      </Form>
    );
  }
}

export default Welcome;
