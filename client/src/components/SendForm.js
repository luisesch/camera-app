import React, { Component } from "react";

// import React-bootstrap components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class SendForm extends Component {
  handleSend = event => {
    event.preventDefault();
    this.props.handleSend();
  };

  render() {
    return (
      <Form onSubmit={this.handleSend}>
        <h4>All readable?</h4>
        <p>Then send us your picture by hitting:</p>
        <Button className="button-pink px-5 mb-2" type="submit">
          SEND
        </Button>
      </Form>
    );
  }
}

export default SendForm;
