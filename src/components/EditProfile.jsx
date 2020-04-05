import React, { Component } from "react";
import { navigate } from "@reach/router";
import TopNav from "./TopNav";
import NavBar from "./NavBar";
import logo from "./images/logo.png";



class EditProfile extends Component {


// state = {};
render() {
  return (
    <React.Fragment>
      <TopNav />
    
      <img src={logo} alt="logo" className="logo" />
      <div className="page">
          <h2 className="page-tile">Edit Profile</h2>

          <input type="text" placeholder="Name" className="text-input"></input>
          <input type="text" placeholder="email" className="text-input"></input>
          <input type="text" placeholder="Phone" className="text-input"></input>
         
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

export default EditProfile;
