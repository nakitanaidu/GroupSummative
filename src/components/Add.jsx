import React, { Component } from "react";
import * as UTILS from "../utils";
import { navigate } from "@reach/router";
import Axios from "axios";
import TopNav from "./TopNav";
import NavBar from "./NavBar";

class Add extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = { id: Date.now() };
  }

  addProduct = (e) => {
    e.preventDefault();
    var formData = new FormData(this.formRef.current);

    //lets see what we have in the form
    for (var p of formData.entries()) {
      console.log(p);
    }

    var settings = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    Axios.post(UTILS.show_items, formData, settings)
      .then((res) => {
        console.log(res);
        navigate(`/user-product-details/${res.data._id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  checkForURL = (s = "") => {
    console.log("s = ", s);
    if (s.startsWith("http")) {
      return true;
    }

    if (s.startsWith("httsp")) {
      return true;
    }

    if (s.startsWith("//")) {
      return true;
    }

    return false;
  };

  render() {
    return (
      <React.Fragment>
        <TopNav />
        <div className="page">
          <h2 className="page-tile">Add your new item!</h2>
          <form onSubmit={this.addProduct} ref={this.formRef}>
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="text-input"
            ></input>
            <input
              type="text"
              placeholder="Price"
              name="price"
              className="text-input"
            ></input>
            <input
              type="text"
              placeholder="Size"
              name="size"
              className="text-input"
            ></input>
            <input
              type="text"
              placeholder="Condition"
              name="condition"
              className="text-input"
            ></input>

            <input
              type="textarea"
              placeholder="Description"
              name="description"
              className="textarea-input"
            ></input>

            <select className="category-options">
              <option
                value="women"
                name="womens_category"
                className="option-style"
              >
                Women
              </option>
              <option value="men" name="mens_category" className="option-style">
                Men
              </option>
            </select>
            <input id="id" type="hidden" name="id" value={this.state.id} />

            <div className="uploadimg-con">
              <input type="file" name="image" className="upload-img"></input>
              <span>
                <p className="dark upload-frame grey">Upload Image</p>
              </span>
            </div>

            <button className="btn btn-primary btn-wide">Add Item</button>
          </form>
        </div>

        <NavBar />
      </React.Fragment>
    );
  }
}

export default Add;
