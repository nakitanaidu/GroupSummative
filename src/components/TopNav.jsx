import React, { Component } from "react";
import arrowLeft from "./images/arrow-left-solid.svg";
import hamburger from "./images/bars-solid.svg";

class TopNav extends Component {
  state = {};
  render() {
    return (
      <div className="top-nav">
        <img src={arrowLeft} alt="arrow" className="icon-nav"></img>
        <img src={hamburger} alt="hamburger" className="icon-nav"></img>
      </div>
    );
  }
}

export default TopNav;
