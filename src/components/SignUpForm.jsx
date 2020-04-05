import React, { Component } from "react";
import logo from "./images/logo.png";
import homephoto from "./images/main-illustration.png";

class SignUpForm extends Component {



  clicked() {
    console.log('it was clicked')
  }

  render() {
    return <React.Fragment>
      <img src={logo} alt="logo" className="logo" />
      <img src={homephoto} alt="home-illus" className="home-photo" />

      <div className="page">

        <input ref="textBox" type="text" placeholder="Email" className="text-input"></input>
        <input type="text" placeholder="Password" className="text-input"></input>
        <input type="text" placeholder="Confirm Password" className="text-input"></input>

        <button onClick={(e) => { this.clicked() }} className="btn btn-primary btn-lesswide">Sign up</button>

      </div>



    </React.Fragment>;
  }
}

export default SignUpForm;
