import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import "./css/categories.css";
import "./css/buttons.css";
import "./css/navigation.css";
import "./css/itemsdisplay.css";
import DisplayItems from "./components/DisplayItems";
import Categories from "./components/Categories";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Categories path="/" />
          {/* Display items may require /display-items/:id if we use one component*/}
          <DisplayItems path="/display-items"/>
          <Home path="/login-signup"/>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
