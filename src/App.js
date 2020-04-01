import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import "./css/categories.css";
import "./css/buttons.css";
import "./css/navigation.css";
import "./css/itemsdisplay.css";
import "./css/itemdetail.css";
import "./css/userprofile.css";
import UserProfile from "./components/UsersProfile";
import DisplayItems from "./components/DisplayItems";
import Categories from "./components/Categories";
import Home from "./components/Home";
import ViewItems from "./components/ViewItems";
import ItemDetail from "./components/ItemDetail"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Categories path="/categories" />
          <ViewItems path="/view-items" />
          {/* Display items may require /display-items/:id if we use one component*/}
          {/* <DisplayItems path=""/> */}
          <Home path="/login-signup"/>
        </Router>
        <ItemDetail />
      </React.Fragment>
    );
  }
}

export default App;
