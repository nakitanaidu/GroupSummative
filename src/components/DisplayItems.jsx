import React, { Component } from "react";
import TopNav from "./TopNav";
import replaceThisWithPhoto from "./images/background/women-item-02.jpg";
import NavBar from "./NavBar";

class DisplayItems extends Component {
  render() {
    return (
      <React.Fragment>
        <TopNav />
        <div className="items-page page">
          <h2 className="page-tile">Hello Beauty!</h2>
          <div className="items-con">
            <div className="item-con">
              <div className="img-con">
                <img src={this.props.image} alt="item-img" />
              </div>
              <p className="item-title">{this.props.title}</p>
              <p className="item-price red">{this.props.price}</p>
            </div>
          </div>
        </div>
        <NavBar />
      </React.Fragment>
    );
  }
}

export default DisplayItems;
