import React, { Component } from "react";
import { navigate } from "@reach/router";
// import * as UTILS from "../utils";
// import Axios from "axios";
// import TopNav from "./TopNav";
// import NavBar from "./NavBar";

export default class UserItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  usersProductDetail = (e) => {
    let temp = this.props._id;
    console.log(this.props._id);
    navigate(`/user-product-details/${temp}`);
  };

  render() {
    console.log(this.props);
 var image = this.props.image;
 if (image !== undefined && !image.startsWith("http"))
 image = `http://localhost:4001/assets/${image}`;

    return (
      <React.Fragment>
        <div className="item-con">
          <div className="img-con">
            <img
              src={image}
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
