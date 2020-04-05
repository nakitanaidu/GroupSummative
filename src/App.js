import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import "./css/categories.css";
import "./css/buttons.css";
import "./css/navigation.css";
import "./css/itemsdisplay.css";
import "./css/itemdetail.css";
import ItemDetail from "./components/ItemDetail";
import Categories from "./components/Categories";
import Home from "./components/Home";
import ViewWomen from "./components/ViewWomen";
import ViewMen from "./components/ViewMen";
import ViewBoth from "./components/ViewBoth"
import "./css/userprofile.css";
import "./css/delete.css";
import UserProfile from "./components/UsersProfile";
import UserItemDetail from "./components/UserItemDetail"
import SignUpForm from './components/SignUpForm'
import DisplayItems from "./components/DisplayItems";
import Add from "./components/Add"
import Edit from "./components/Edit"
import Delete from "./components/Delete"
import "./css/inputs.css";
import "./css/cart.css";
import "./css/checkout.css";
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Categories path="/categories" />
          {/* Display items may require /display-items/:id if we use one component*/}
          {/* <DisplayItems path=""/> */}
          <ItemDetail path="/item-details"/>
          <DisplayItems path= "/display-items" />
          <ViewMen path= "/view-men" />
          <ViewWomen path= "/view-women" />
          <ViewBoth path= "/view-both" />
          <Add path="/add-items" />
          <Edit path="/edit-items" />
          <Delete path="/delete-items" />
          <UserProfile path="/user-profile" />
          <UserItemDetail path= "/user-items" />
          <SignUpForm path="/signup-form" />
          <Home path="/login-signup"/>
          <Cart path= "/view-cart" />
          <CheckOut path= "/view-checkout" />
        </Router>
        
      </React.Fragment>
    );
  }
}

export default App;
