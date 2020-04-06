import React, { Component } from "react";
import { navigate } from "@reach/router";
import TopNav from "./TopNav";
import NavBar from "./NavBar";
import replaceThisWithUserPhoto from "./images/background/women-item-02.jpg";

class UsersProfile extends Component {
  constructor()
  {
      super();
    this.state={
      data:'',
    }
  }
  
gotoUserEdit = e => {
  navigate('/edit-profile')
}
  
usersItems = e => {
  navigate(`/user-items`);
};

addUserItem = e => {
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
            <h3 className="yellow">User Name</h3>
            <p className="dark">User Email</p>
            <p className="dark">User Phone</p>
          </div>
        </div>

        <button className="btn btn-secondary btn-wide" onClick={this.gotoUserEdit}>Edit Profile</button>

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



