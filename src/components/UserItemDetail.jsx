import React, { Component } from "react";
import * as UTILS from "../utils";
import { navigate } from "@reach/router";
import Axios from "axios";
import TopNav from "./TopNav";
import NavBar from "./NavBar";

class UserItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  gotoEdit = (e) => {
    let temp = this.props.id;
    console.log(this.props.id);
    navigate(`/edit-details/${temp}`);
  };

  componentDidMount() {
    Axios.get(`${UTILS.show_items}/${this.props.id}`).then((res) => {
      console.table(res.data);
      this.setState({
        items: res.data,
      });
    });
  }

  removeProduct = (evt) => {
    // var index = evt.target.getAttribute("data-uuid");
    console.table(this.state.items);
    Axios.delete(`${UTILS.show_items}/${this.props.id}`).then((res) => {
      console.log(res.data);
      navigate(`/user-items`);
    });
  };

  // state = {};
  render() {
    // how/where to display the changed image??
    // src={UTILS.assets_url + image}
    // const image_path = UTILS.assets_url + image;
    // http://localhost:4001/assets/24c6a5f3b9cde308c1381cbb12294ace.jpg

    return (
      <React.Fragment>
        <TopNav />
        <div className="item-detail page">
          {this.state.items.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <div className="detail-img-con">
                  <img
                    className="item-detail-img"
                    src={`${UTILS.images_folder}` + item.image}
                    alt="item-img"
                  />
                </div>

                <h2 className="dark">{item.title}</h2>

                <div className="price-size-con">
                  <h3 className="green">Price: {item.price}</h3>
                  <h3 className="green">Size: {item.size}</h3>
                  <h3 className="green">Con: {item.condition}</h3>
                </div>

                <p className="dark">{item.description}</p>
                <div className="seller-seemore">
                  <p className="grey">Seller: </p>
                  <p>
                    <a href="REPLACE THIS LINK" className="grey">
                      See more here
                    </a>
                  </p>
                </div>

                <div className="edit-delete">
                  <button
                    className="btn btn-narrow btn-secondary"
                    _id={item._id}
                    onClick={this.removeProduct}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-narrow  btn-primary"
                    onClick={this.gotoEdit}
                  >
                    Edit
                  </button>
                </div>
              </React.Fragment>
            );
          })}

          <div className="comment-con">
            <h3 className="dark">Leave a comment</h3>
            <input type="textarea" className="grey textarea-input"></input>

            <button className="btn btn-primary btn-narrow btn-right">
              Send
            </button>

            <div className="comment">
              <p className="grey">User's name goes here</p>
              <p className="dark">Comment goes here</p>
            </div>
          </div>
        </div>
        <NavBar />
      </React.Fragment>
    );
  }
}

export default UserItemDetail;
