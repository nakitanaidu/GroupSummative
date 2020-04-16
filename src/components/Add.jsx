import React, { Component } from "react";
import * as UTILS from "../utils";
import { navigate } from "@reach/router";
import Axios from "axios";
import TopNav from "./TopNav";
import NavBar from "./NavBar";
import AddDropdown from "./dropdowns/AddDropdown";

class Add extends Component {
constructor(props) {
  super(props);
  this.formRef = React.createRef();
  this.state = { id: Date.now() };
}

addProduct = (e) => {
  e.preventDefault();
  var formData = new FormData(this.formRef.current);
  // FYI: form still works even if there is no image included
  // forms with images look a bit different - we need to add this line.
  var settings = {
    headers: { "Content-Type": "multipart/form-data" },
  };

  console.log(">>> FORMDATA ", formData);
  Axios.post(UTILS.show_items, formData, settings)
    .then((res) => {
      console.log(res);
      navigate(`/user-product-details/${res.data.id}`);
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

            <AddDropdown />
            <input id="id" type="hidden" name="id" value={this.state.id} />

            <div className="uploadimg-con">
              <input
                type="file"
                name="image"
                onChange={this.uploadToExpress}
                className="upload-img"
              ></input>
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