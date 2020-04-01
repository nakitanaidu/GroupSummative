import React, { Component } from "react";
import TopNav from "./TopNav";
import NavBar from "./NavBar";

class Edit extends Component {
  render() {
    return (
      <React.Fragment>
        <TopNav />
        <div className="page">
          <h2 className="page-tile">Edit Item</h2>

          <input type="text" placeholder="Title" className="text-input"></input>
          <input type="text" placeholder="Price" className="text-input"></input>
          <input type="text" placeholder="Size" className="text-input"></input>
          <input
            type="text"
            placeholder="Condition"
            className="text-input"
          ></input>

          <input
            type="textarea"
            placeholder="Description"
            className="textarea-input"
          ></input>

          <div className="uploadimg-con">
            <input type="file" className="upload-img"></input>
            <span>
              <p className="dark upload-frame grey">Upload Image</p>
            </span>
          </div>

          <button className="btn btn-primary btn-wide">Update Item</button>
        </div>

        <NavBar />
      </React.Fragment>
    );
  }
}

export default Edit;
