import React, { Component } from "react";
import { navigate } from "@reach/router";
// import TopNav from "./TopNav";
// import NavBar from "./NavBar";

export default class UserItem extends Component {
  usersProductDetail = (e) => {
    let temp = this.props._id;
    console.log(this.props._id);
    navigate(`/user-product-details/${temp}`);
  };

  render() {
    return (
      <React.Fragment>
        <div className="item-con">
          <div className="img-con">
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
