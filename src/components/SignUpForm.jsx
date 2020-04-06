import React, { Component } from "react";
import logo from "./images/logo.png";
import homephoto from "./images/main-illustration.png";
import { navigate } from "@reach/router";

class SignUpForm extends Component {
constructor()
{
    super();
  this.state={
    data:'',
  }
}

handle(event)
{
  this.setState({
    data:event.target.value
  })
}

  clicked() {
    console.log('it was clicked')
    navigate(`/categories`); 
  }

  render() {
    return <React.Fragment>
      <img src={logo} alt="logo" className="logo" />
      <img src={homephoto} alt="home-illus" className="home-photo" />

      <div className="page">
        <form>
        <input type="text" placeholder="User" className="text-input" onChange={this.handle.bind(this)}></input>
        <input type="text" placeholder="Email" className="text-input"></input>
        <input type="text" placeholder="Phone" className="text-input"></input>
        <input type="text" placeholder="Password" className="text-input"></input>
        <input type="text" placeholder="Confirm Password" className="text-input"></input>

        <button onClick={(e) => { this.clicked() }} className="btn btn-primary btn-lesswide">Sign up</button>
</form>
      </div>



    </React.Fragment>;
  }
}

export default SignUpForm;
