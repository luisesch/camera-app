import React, { Component } from "react";
import { withRouter } from "react-router";
import Service from "./service";
import { Switch, Route } from "react-router-dom";

// import components
import Welcome from "./components/Welcome";
import NavbarComp from "./components/Navbar";
import UploadPage from "./components/UploadPage";
import Checkout from "./components/Checkout";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      file: "",
      img: ""
    };
    this.service = new Service();
  }

  // set state with entered username and email
  getUser = (name, email) => {
    this.setState({ username: name, email: email });
    this.props.history.push("/upload");
  };

  render() {
    // make sure there is a username; if not, render homepage
    if (this.state.username.length === 0) {
      return (
        <div className="App">
          <NavbarComp />
          <Welcome setUser={this.getUser} />
        </div>
      );
    } else {
      return (
        <div className="App">
          <NavbarComp />

          <Switch>
            <Route
              exact
              path={"/"}
              component={() => <Welcome setUser={this.getUser} />}
            />
            <Route
              exact
              path={"/upload"}
              component={() => (
                <UploadPage
                  user={this.state.username}
                  email={this.state.email}
                />
              )}
            />
            <Route
              exact
              path={"/thank-you"}
              component={() => <Checkout user={this.state.username} />}
            />
          </Switch>
        </div>
      );
    }
  }
}

export default withRouter(App);
