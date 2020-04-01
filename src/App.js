import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import "./css/categories.css";
import "./css/buttons.css";
import "./css/navigation.css";
import "./css/itemsdisplay.css";
import "./css/itemdetail.css";
import "./css/userprofile.css";
import "./css/delete.css";
import UserProfile from "./components/UsersProfile";
import UserItemDetail from "./components/UserItemDetail"
import SignUpForm from './components/SignUpForm'
import DisplayItems from "./components/DisplayItems";
import Categories from "./components/Categories";
import Home from "./components/Home";
import ViewItems from "./components/ViewItems";
import ItemDetail from "./components/ItemDetail"
import Add from "./components/Add"
import Edit from "./components/Edit"
import Delete from "./components/Delete"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Categories path="/categories" />
          <ViewItems path="/view-items" />
          <DisplayItems path= "/display-items" />
          <Add path="/add-items" />
          <Edit path="/edit-items" />
          <Delete path="/delete-items" />
          {/* Display items may require /display-items/:id if we use one component*/}
          {/* <DisplayItems path=""/> */}
          <UserProfile path="/user-profile" />
          <UserItemDetail path= "/user-items" />
          <SignUpForm path="/signup-form" />
          <Home path="/login-signup"/>
        </Router>
        <ItemDetail path="/item-details"/>
      </React.Fragment>
    );
  }
}

export default App;
