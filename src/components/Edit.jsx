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
          <input
            type="file"
            placeholder="Upload Photo"
            id="img"
            name="img"
            accept="image/*"
            className="text-input"
          />

          <button className="btn btn-wide btn-primary">Update Item</button>
        </div>

        <NavBar />
      </React.Fragment>
    );
  }
}

export default Edit;
