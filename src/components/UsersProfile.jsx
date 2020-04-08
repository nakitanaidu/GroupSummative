import React, { Component } from "react";
import { navigate } from "@reach/router";
import TopNav from "./TopNav";
import NavBar from "./NavBar";
import replaceThisWithUserPhoto from "./images/background/women-item-02.jpg";

class UsersProfile extends Component {
  constructor() {
    super();

    // if its null set it to "User name"
    let u = window.localStorage.getItem("user") || "User name";
    let e = window.localStorage.getItem("email") || "Email";
    let p = window.localStorage.getItem("phone") || "Phone";

    this.state = {
      data: "",
      user: u,
      email: e,
      phone: p,
    };
  }

  gotoUserEdit = (e) => {
    navigate("/edit-profile");
  };

  usersItems = (e) => {
    navigate(`/user-items`);
  };

  addUserItem = (e) => {
    navigate(`/add-user-item`);
  };

  // state = {};
  render() {
    return (
      <React.Fragment>
        <TopNav />
        <div className="page">
          <h2 className="page-tile">Welcome!</h2>

          <div className="user-information">
            <div className="avatar">
              <img src={replaceThisWithUserPhoto} alt="user" />
            </div>

            <div className="user-detail">
              <h3 className="yellow">{this.state.user}</h3>
              <p className="dark">{this.state.email}</p>
              <p className="dark">{this.state.phone}</p>
            </div>
          </div>

          <button
            className="btn btn-secondary btn-wide"
            onClick={this.gotoUserEdit}
          >
            Edit Profile
          </button>

          <div className="wide-img-card showitem" onClick={this.usersItems}>
            <h2 className="img-card-title ">Your Items</h2>
          </div>

          <div className="wide-img-card additem" onClick={this.addUserItem}>
            <h2 className="img-card-title ">Add New Item</h2>
          </div>
        </div>

        <NavBar />
      </React.Fragment>
    );
  }
}

export default UsersProfile;
