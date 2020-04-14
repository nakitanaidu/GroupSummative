import React, { Component } from "react";
import { navigate } from "@reach/router";
import * as UTILS from "../utils";
import Axios from "axios";
// import TopNav from "./TopNav";
// import NavBar from "./NavBar";

export default class UserItem extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       items:[]
    }
  }

  refreshData = () => {
    Axios.get(`${UTILS.update_item}`).then(
    (res) => {
    this.setState({ cars: res.data });
    },
    (error) => {
    console.log("error = ", error);
    }
    );
    };
    
    //we getting info from json through server
    componentDidMount() {
    this.refreshData();
    }
  

  usersProductDetail = (e) => {
    let temp = this.props._id;
    console.log(this.props._id);
    navigate(`/user-product-details/${temp}`);
  };

  render() {

    // how/where to display the changed image??
    // src={UTILS.assets_url + item.image}
    // const image_path = UTILS.assets_url + image;
    // http://localhost:4001/assets/24c6a5f3b9cde308c1381cbb12294ace.jpg
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


