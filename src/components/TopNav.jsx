import React, { Component } from "react";
import arrowLeft from "./images/arrow-left-solid.svg";
import hamburger from "./images/bars-solid.svg";
import { navigate } from "@reach/router";

class TopNav extends Component {
  state = {};
  render() {
    return (
      <div className="top-nav">
        <img src={arrowLeft} alt="arrow" className="icon-nav" onClick={this.back}></img>
        <img src={hamburger} alt="hamburger" className="icon-nav"></img>
      </div>
    );
  }
back = (e) => {
  navigate(`/categories`);
};

}
export default TopNav;
