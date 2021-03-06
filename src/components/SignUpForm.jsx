import React, { Component } from "react";
import logo from "./images/logo.png";
import homephoto from "./images/main-illustration.png";
import { navigate, redirectTo } from "@reach/router";


const initialState = {
  User: "",
  Email: "",
  Phone: "",
  Password: "",
  UserError: "",
  EmailError: "",
  PhoneError: "",
  PasswordError: "",
}


class SignUpForm extends Component {
  // Saving user Info to profile page

  constructor(props) {
    super(props);

    // init state - may be overwritten
    this.state = initialState;
  }

  toLogin = (e) => {
   navigate(`/`)
   
  };

  onChangeUser = (e) => {
    this.setState({ User: e.target.value });
    localStorage.setItem("user", e.target.value);
    const isCheckbox = e.target.type === "checkbox";
    this.setState({
      [e.target.name]: isCheckbox
        ? e.target.checked
        : e.target.value
    });
  };

  onChangeEmail = (e) => {
    this.setState({ Email: e.target.value });
    localStorage.setItem("email", e.target.value);
    const isCheckbox = e.target.type === "checkbox";
    this.setState({
      [e.target.name]: isCheckbox
        ? e.target.checked
        : e.target.value
    });

  };

  onChangePhone = (e) => {
    this.setState({ Phone: e.target.value });
    localStorage.setItem("phone", e.target.value);
    const isCheckbox = e.target.type === "checkbox";
    this.setState({
      [e.target.name]: isCheckbox
        ? e.target.checked
        : e.target.value
    });
  };

  onChangePassword = (e) => {
    this.setState({ Password: e.target.value });
    localStorage.setItem("password", e.target.value);
    const isCheckbox = e.target.type === "checkbox";
    this.setState({
      [e.target.name]: isCheckbox
        ? e.target.checked
        : e.target.value
    });
  };

  // Form info validation

  validate = () => {
    let UserError = "";
    let EmailError = "";
    let PhoneError = "";
    let PasswordError = "";

    if (!this.state.User) {
      UserError = "Invalid name";
    }

    if (!this.state.Email.includes("@")) {
      EmailError = "invalid email must inlcude @";
    }

    if (!this.state.Email) {
      EmailError = "invalid email";
    }

    if (!this.state.Phone > 9) {
      PhoneError = "Invalid phone number should by 9 digits";
    }

    if (!this.state.Phone) {
      PhoneError = "invalid phone number";
    }

    if (!this.state.Password) {
      PasswordError = "Invalid password";
    }

    if (EmailError || UserError || PhoneError || PasswordError) {
      this.setState({ EmailError, UserError, PhoneError, PasswordError });
      return false;

    } return true;

  }

  onSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState)
      navigate("/categories")
      
    }

  };

  // Placing information to profile
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
      
        <div className="page">
          <form onSubmit={this.onSubmit}>  
          <img src={logo} alt="logo" className="logo" />
        <img src={homephoto} alt="home-illus" className="home-photo" onClick={this.toLogin}/>

            <input
              type="text"
              placeholder="User"
              className="text-input"
              value={this.state.User}
              onChange={this.onChangeUser}
            ></input>
            <div style={{ fontSize: 12, color: "red" }}>{this.state.UserError}</div>
            <input
              type="text"
              placeholder="Email"
              className="text-input"
              value={this.state.Email}
              onChange={this.onChangeEmail}
            ></input>
            <div style={{ fontSize: 12, color: "red" }}>{this.state.EmailError}</div>
            <input
              type="number"
              placeholder="Phone"
              className="text-input"
              value={this.state.Phone}
              onChange={this.onChangePhone}
            ></input>
            <div style={{ fontSize: 12, color: "red" }}>{this.state.PhoneError}</div>
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              value={this.state.Password}
              onChange={this.onChangePassword}
            ></input>
            <div style={{ fontSize: 12, color: "red" }}>{this.state.PasswordError}</div>
          
            <button type="submit" className="btn btn-primary btn-lesswide">
              Sign up
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}



class Validation extends Component {

}

































export default SignUpForm;
