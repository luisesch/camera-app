import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./UploadPage.css";

import Service from "../service";

// import React-bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import UploadForm from "./UploadForm";
import SendForm from "./SendForm";

function UploadPage(props) {
  const service = new Service();
  const [img, setImg] = useState("");
  const [uploaded, setUploaded] = useState(false);
  const navigate = useNavigate();

  const handleUpload = (file) => {
    service
      .uploadPhoto(file)
      .then((res) => {
        setImg(res);
        setUploaded(true);
      })
      .catch((err) => console.log(err));
  };

  const handleSend = () => {
    service
      .sendPhoto(img, props.user, props.email)
      .then(navigate("/thank-you"))
      .catch((err) => console.log(err));
  };

  return (
    <Container fluid className="container-welcome bg-white">
      <Row>
        <Col md={5} xs={12} className="pt-4 px-5 mb-5 pt-5">
          <h1>Alright, {props.user}.</h1>
          <h4 className="mb-4">Let's take a picture.</h4>
          <p />
          <UploadForm handleUpload={handleUpload} />
        </Col>
        <Col md={7} xs={12} className="p-0">
          <div className="gray upload-background w-100 h-100 p-5">
            {/* if picture has been uploaded, display uploaded picture and sendform, else display icon */}
            {uploaded ? (
              <div>
                <SendForm handleSend={handleSend} />
                <Image
                  src={img}
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

export default UploadPage;
