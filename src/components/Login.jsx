import React, { Component } from "react";
import logo from "./images/logo.png";
import homephoto from "./images/main-illustration.png";
import { navigate } from "@reach/router";

const initialState = {
  Username: "",
  Password: "",
  UsernameError:"",
  PasswordError: "",
}

class Login extends Component {


    
    state = initialState;
    
    handleChange = event => {
        const isCheckbox = event.target.tyoe === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
            ? event.target.checked
            : event.target.value
        });
    };

    validate =() => {
       let UsernameError="";
       let  PasswordError= "";

       if(!this.state.Username) {
        UsernameError = "Username cannot be blank"}
    
    
        if(!this.state.Password) {
          PasswordError = "Password cannot be blank"}
      
       

        if(UsernameError || PasswordError){
          this.setState({UsernameError, PasswordError});
          return false;
        } 
        return true;
};


    handleSubmit = event => {
        const isValid = this.validate();
       event.preventDefault();
      if (isValid){
         console.log(this.state) ;
         this.setState(initialState);
      }
       
        };
     
gotoHome = () => {
  navigate("/")
}

  render() {
    return <React.Fragment>
      <img src={logo} alt="logo" className="logo" />
      <img src={homephoto} alt="home-illus" className="home-photo" />

      <div className="page">
        <form onSubmit={this.handleSubmit}>
       
        <input type="text" placeholder="User" className="text-input" name="Username" value={this.state.Username} onChange={this.handleChange}></input>
        <div style={{fontSize: 12, color: "red"}}>{this.state.UsernameError}</div>
       
        <input type="password" placeholder="Confirm Password" className="text-input" name="Password"  value={this.state.Password} onChange={this.handleChange}></input>
        <div style={{fontSize: 12, color: "red"}}>{this.state.PasswordError}</div>
      
        <button type="submit" className="btn btn-primary btn-lesswide" onClick={this.gotoHome}>Login</button>
</form>
      </div>



    </React.Fragment>;
  }
}

export default Login;
