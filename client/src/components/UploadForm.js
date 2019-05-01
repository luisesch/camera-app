import React, { Component } from "react";

// import React-bootstrap components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./UploadForm.css";

class UploadForm extends Component {
  constructor(props) {
    super(props);
    this.state = { file: "" };
  }

  handleChange(e) {
    this.setState({
      file: e.target.files[0]
    });
  }

  handleUpload = event => {
    event.preventDefault();
    this.props.handleUpload(this.state.file);
  };

  render() {
    return (
      <Form onSubmit={this.handleUpload}>
        <Form.Group className="text-left pl-3">
          <Form.Label className="mb-4">
            You can either upload an existing picture or take one with your
            phone.
          </Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={e => this.handleChange(e)}
            required
          />
        </Form.Group>

        <Button className="button-pink px-5 mt-4" type="submit">
          UPLOAD
        </Button>
      </Form>
    );
  }
}

export default UploadForm;
