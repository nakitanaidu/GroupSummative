import React, { Component } from "react";
import logo from "./images/logo.png";
import homephoto from "./images/main-illustration.png";



class Login extends Component {

    state = {
       Username: "",
       Password: "",
       UsernameError:"name is empty",
       PasswordError: "",

    };

    handleChange = event => {
        const isCheckbox = event.target.tyoe === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
            ? event.target.checked
            : event.target.value
        });
    };

    
    handleSubmit = event => {
       event.preventDefault();
       console.log(this.state)
        };
    


  render() {
    return <React.Fragment>
      <img src={logo} alt="logo" className="logo" />
      <img src={homephoto} alt="home-illus" className="home-photo" />

      <div className="page">
        <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="User" className="text-input" name="Username" value={this.state.Username} onChange={this.handleChange}></input>
        <div style={{fontSize: 12, color: "red"}}>{this.state.UsernameError}</div>
        <input type="password" placeholder="Confirm Password" className="text-input" name="Password"  value={this.state.Password} onChange={this.handleChange}></input>

        <button type="submit" className="btn btn-primary btn-lesswide">Login</button>
</form>
      </div>



    </React.Fragment>;
  }
}

export default Login;
