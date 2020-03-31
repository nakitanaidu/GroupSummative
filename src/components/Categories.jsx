import React, { Component } from "react";
import NavBar from "./NavBar";
import TopNav from "./TopNav";

class Categories extends Component {
  render() {
    return (
      <div className="categories-page page">
        <TopNav />
        <h2 className="page-tile">Explore!</h2>
        <div className="categories men-cate">
          <h2 className="categories-title">Shop for men</h2>
        </div>
        <div className="categories women-cate">
          <h2 className="categories-title">Shop for women</h2>
        </div>
        <NavBar />
      </div>
    );
  }
}

export default Categories;
