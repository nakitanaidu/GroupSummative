import React, { Component } from "react";
import TopNav from "./TopNav";
import replaceThisWithPhoto from "./images/background/women-item-02.jpg";
import replaceThisWithPhoto2 from "./images/background/women-item-03.jpg";
import replaceThisWithPhoto3 from "./images/background/women-item-04.jpg";
import NavBar from "./NavBar";

class DisplayItems extends Component {
  render() {
    return (
      <div className="items-page page">
        <TopNav />
        <h2 className="page-tile">Hello Beauty!</h2>
        <div className="items-con">
          <div className="item-con">
            <div className="img-con">
              <img src={replaceThisWithPhoto} alt="item-img" />
            </div>
            <p className="item-title">Replace this with item title</p>
            <p className="item-price red">Replace 100$</p>
          </div>
        </div>

        <NavBar />
      </div>
    );
  }
}

export default DisplayItems;
