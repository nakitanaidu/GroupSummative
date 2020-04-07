import React, { Component } from "react";
import { navigate } from "@reach/router";
import * as UTILS from "../utils";
import Axios from "axios";
// import TopNav from "./TopNav";
// import NavBar from "./NavBar";

export default class UserItem extends Component {
  usersProductDetail = (e) => {
    let temp = this.props._id;
    console.log(this.props._id);
    navigate(`/user-product-details/${temp}`);
  };

  render() {

    // how/where to display the changed image??
    // src={UTILS.assets_url + image}
    // const image_path = UTILS.assets_url + image;
    // http://localhost:4001/assets/24c6a5f3b9cde308c1381cbb12294ace.jpg

    return (
      <React.Fragment>
        <div className="item-con">
          <div className="img-con">
            {/* 
                  Trying to retrieve and display this data
                  http://localhost:4001/assets/24c6a5f3b9cde308c1381cbb12294ace.jpg 
            */}
            <img
              src={this.props.image}
              alt="item-img"
              onClick={this.usersProductDetail}
            />
          </div>
          <p className="item-title">{this.props.title}</p>
          <p className="item-price red">{this.props.price}</p>
        </div>
      </React.Fragment>
    );
  }
}
