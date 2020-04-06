import React, { Component } from "react";
import { Link } from "@reach/router";
import user from "./images/user-solid.svg";
import home from "./images/home-solid.svg";
import bag from "./images/shopping-bag-solid.svg";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="nav-bar">
        <Link to="/profile">
          <img src={user} alt="user" className="icon-nav" />
        </Link>

        <Link to="/categories">
          <img src={home} alt="home" className="icon-nav" />
        </Link>

        <Link to="/cart">
          <img src={bag} alt="shopping-bag" className="icon-nav" />
        </Link>
      </div>
    );
  }
}

export default NavBar;
