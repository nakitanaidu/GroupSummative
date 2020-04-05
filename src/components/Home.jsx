import React, { Component } from "react";
import logo from "./images/logo.png";
import homephoto from "./images/main-illustration.png";

class Home extends Component {
  render() {
    return (
      <div className="page">
        <img src={logo} alt="logo" className="logo" />
        <img src={homephoto} alt="home-illus" className="home-photo" />

        <button className="btn btn-primary btn-wide">Log in</button>
        <button className="btn btn-secondary btn-wide">Sign up</button>
      </div>
    );
  }
}

export default Home;
