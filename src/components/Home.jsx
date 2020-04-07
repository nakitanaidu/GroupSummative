import React, { Component } from "react";
import logo from "./images/logo.png";
import homephoto from "./images/main-illustration.png";
import { navigate } from "@reach/router";

class Home extends Component {

  gotologin = (e) => {
    navigate(`/login`);
  };

  gotosignup = (e) => {
    navigate(`/signup`);
  }; 
  render() {
    return (
      <div className="page">
        <img src={logo} alt="logo" className="logo" />
        <img src={homephoto} alt="home-illus" className="home-photo" />

        <button className="btn btn-primary btn-wide" onClick={this.gotologin}>Log in</button>
        <button className="btn btn-secondary btn-wide" onClick={this.gotosignup}>Sign up</button>
      </div>
    );
  }
}

export default Home;
