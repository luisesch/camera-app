import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

// import components
import Welcome from "./components/Welcome";
import NavbarComp from "./components/Navbar";
import UploadPage from "./components/UploadPage";
import Checkout from "./components/Checkout";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // set state with entered username and email
  const getUser = (name, email) => {
    setUsername(name);
    setEmail(email);
    navigate("/upload");
  };

  // make sure there is a username; if not, render homepage
  if (username.length === 0) {
    return (
      <div className="App">
        <NavbarComp />
        <Welcome setUser={getUser} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <NavbarComp />

        <Routes>
          <Route exact path={"/"} element={<Welcome setUser={getUser} />} />
          <Route
            exact
            path={"/upload"}
            element={<UploadPage user={username} email={email} />}
          />
          <Route
            exact
            path={"/thank-you"}
            element={<Checkout user={username} />}
          />
        </Routes>
      </div>
    );
  }
}

export default App;
