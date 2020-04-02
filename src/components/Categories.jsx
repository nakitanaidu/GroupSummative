import React, { Component } from "react";
import { navigate } from "@reach/router";
import NavBar from "./NavBar";
import TopNav from "./TopNav";

class Categories extends Component {

  menDisplay = e => {
    navigate(`/view-men`);
  };

  womenDisplay = e => {
    navigate(`/view-women`);
  };


  render() {
    return (
      <div className="categories-page page">
        <TopNav />
        <h2 className="page-tile">Explore!</h2>
        <div className="categories men-cate" onClick={this.menDisplay}>
          
          <h2 className="categories-title">Shop for men</h2>
   
        </div>
        <div className="categories women-cate" onClick={this.womenDisplay}>
        
          <h2 className="categories-title">Shop for women</h2>
         
        </div>
        <NavBar />
      </div>
    );
  }
}

export default Categories;
