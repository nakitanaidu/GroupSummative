import React, { Component } from "react";
import { Link } from "@reach/router";
import logo from "./images/logo.png";
import homephoto from "./images/main-illustration.png";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <img src={logo} alt="logo" className="logo" />
        <img src={homephoto} alt="home-illus" className="home-photo" />

        <Link to="/">
        <button className="btn btn-primary btn-wide">Log in</button>
        </Link>
  
        <button className="btn btn-secondary btn-wide">Sign up</button>
      </React.Fragment>
    );
  }
}

export default Home;
