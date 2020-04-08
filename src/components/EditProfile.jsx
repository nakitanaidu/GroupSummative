import React, { Component } from "react";
import { navigate } from "@reach/router";
import TopNav from "./TopNav";
import NavBar from "./NavBar";
import logo from "./images/logo.png";



class EditProfile extends Component {


  // Saving user Info to profile page

  constructor(props) {
    super(props);

    // init state - may be overwritten
    this.state = {
      User: "",
      Email: "",
      Phone: "",
    };
  }

  goBack = (e) => {
    navigate("/profile")
   }
   
   
  onChangeUser = (e) => {
    this.setState({ User: e.target.value });
    localStorage.setItem("user", e.target.value);
    
  };

  onChangeEmail = (e) => {
    this.setState({ Email: e.target.value });
    localStorage.setItem("email", e.target.value);
  };

  onChangePhone = (e) => {
    this.setState({ Phone: e.target.value });
    localStorage.setItem("phone", e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  componentDidMount() {
    if (localStorage.getItem("user")) {
      this.setState({
        User: localStorage.getItem("user"),
      });
    }

    if (localStorage.getItem("email")) {
      this.setState({
        Email: localStorage.getItem("email"),
      });
    }

    if (localStorage.getItem("phone")) {
      this.setState({
        Phone: localStorage.getItem("phone"),
      });
    }
  }
  render() {
    return (
      <React.Fragment>
        <TopNav />

        <img src={logo} alt="logo" className="logo" />
        <div className="page">
          <h2 className="page-tile">Edit Profile</h2>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="User"
              className="text-input"
              value={this.state.User}
              onChange={this.onChangeUser}
            ></input>
            <input
              type="text"
              placeholder="Email"
              className="text-input"
              value={this.state.Email}
              onChange={this.onChangeEmail}
            ></input>
            <input
              type="text"
              placeholder="Phone"
              className="text-input"
              value={this.state.Phone}
              onChange={this.onChangePhone}
            ></input>
            <input
              type="password"
              placeholder="Password"
              className="text-input"
            ></input>
            <input
              type="password"
              placeholder="Confirm Password"
              className="text-input"
            ></input>



            <div className="uploadimg-con">
              <input type="file" className="upload-img"></input>
              <span>
                <p className="dark upload-frame grey">Upload Image</p>
              </span>
            </div>

            <button type="submit" className="btn btn-primary btn-lesswide" onClick={this.goBack}>
              Sign up
            </button>
          </form>


        </div>

        <NavBar />
      </React.Fragment>
    );
  }
}

export default EditProfile;
