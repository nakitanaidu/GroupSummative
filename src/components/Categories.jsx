import React, { Component } from "react";
import { Link } from "@reach/router";
import NavBar from "./NavBar";
import TopNav from "./TopNav";

class Categories extends Component {
  render() {
    return (
      <div className="categories-page page">
        <TopNav />
        <h2 className="page-tile">Explore!</h2>
        <div className="categories men-cate">
          <Link to="/display-items">
          <h2 className="categories-title">Shop for men</h2>
          </Link>
        </div>
        <div className="categories women-cate">
          <Link to="display-items">
          <h2 className="categories-title">Shop for women</h2>
          </Link>
        </div>
        <NavBar />
      </div>
    );
  }
}

export default Categories;
