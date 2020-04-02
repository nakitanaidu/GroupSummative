import React, { Component } from "react";
import TopNav from "./TopNav";
import NavBar from "./NavBar";

class Add extends Component {
  render() {
    return (
      <React.Fragment>
        <TopNav />
        <div className="page">
          <h2 className="page-tile">Add your new item!</h2>

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

          <select className="category-options">
            <option value="women" className="option-style">
              Women
            </option>
            <option value="men" className="option-style">
              Men
            </option>
          </select>

          <div className="uploadimg-con">
            <input type="file" className="upload-img"></input>
            <span>
              <p className="dark upload-frame grey">Upload Image</p>
            </span>
          </div>

          <button className="btn btn-primary btn-wide">Add Item</button>
        </div>

        <NavBar />
      </React.Fragment>
    );
  }
}

export default Add;
