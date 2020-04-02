import React, { Component } from "react";
import { navigate } from "@reach/router";
import * as UTILS from "../utils";
import Axios from "axios";
import TopNav from "./TopNav";
import replaceThisWithPhoto from "./images/background/women-item-02.jpg";
import NavBar from "./NavBar";

class DisplayItems extends Component {

  productDisplay = e => {
    let temp = this.props._id;
    console.log(this.props._id);
    navigate(`/itemdetails/${temp}`, { state: { uid: temp } });
  };

  render() {
    return (
      <React.Fragment>
        <TopNav />
        <div className="items-page page">
          <h2 className="page-tile">Hello Beauty!</h2>
          <div className="items-con">
            <div className="item-con">
              <div className="img-con">
                <img src={this.props.image} alt="item-img" onClick={this.productDisplay}/>
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
