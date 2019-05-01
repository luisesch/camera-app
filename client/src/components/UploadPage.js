import React, { Component } from "react";
import { withRouter } from "react-router";

import "./UploadPage.css";

import Service from "../service";

// import React-bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import UploadForm from "./UploadForm";
import SendForm from "./SendForm";

class UploadPage extends Component {
  constructor(props) {
    super(props);
    this.state = { img: "", uploaded: false };
    this.service = new Service();
  }

  handleUpload = file => {
    this.service
      .uploadPhoto(file)
      .then(res => this.setState({ img: res, uploaded: true }))
      .catch(err => console.log(err));
  };

  handleSend = () => {
    this.service
      .sendPhoto(this.state.img, this.props.user, this.props.email)
      .then(this.props.history.push("/thank-you"))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid className="container-welcome bg-white">
        <Row>
          <Col md={5} xs={12} className="pt-4 px-5 mb-5 pt-5">
            <h1>Alright, {this.props.user}.</h1>
            <h4 className="mb-4">Let's take a picture.</h4>
            <p />
            <UploadForm handleUpload={this.handleUpload} />
          </Col>
          <Col md={7} xs={12} className="p-0">
            <div className="gray upload-background w-100 h-100 p-5">
              {/* if picture has been uploaded, display uploaded picture and sendform, else display icon */}
              {this.state.uploaded ? (
                <div>
                  <SendForm handleSend={this.handleSend} />
                  <Image
                    src={this.state.img}
                    className="uploaded-image"
                    alt="uploaded"
                    fluid
                  />
                </div>
              ) : (
                <Image
                  src="/images/file_icon.png"
                  className="uploaded-image"
                  alt="uploaded"
                  fluid
                />
              )}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(UploadPage);
