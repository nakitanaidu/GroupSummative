import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import "./css/categories.css";
import "./css/buttons.css";
import "./css/navigation.css";
import "./css/itemsdisplay.css";
import "./css/itemdetail.css";

import Categories from "./components/Categories";
import Home from "./components/Home";
import ViewAll from "./components/ViewAll";
import ViewWomen from "./components/ViewWomen";
import ViewMen from "./components/ViewMen.jsx";
import ItemDetail from "./components/ItemDetail";
import "./css/userprofile.css";
import "./css/delete.css";
import UserProfile from "./components/UsersProfile";
import EditProfile from "./components/EditProfile";
import SignUpForm from './components/SignUpForm'
import DisplayItems from "./components/DisplayItems";
import Add from "./components/Add"
import Edit from "./components/Edit"
import Delete from "./components/Delete"
import "./css/inputs.css";
import "./css/cart.css";
import "./css/checkout.css";
import Cart from "./components/Cart";
import UserItemDetail from "./components/UserItemDetail";



// import CheckOut from "./components/CheckOut";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Categories path="/categories" />
          <UserProfile path="/profile" />
          <EditProfile path="/edit-profile" />
          <SignUpForm path="/signup" />
          <ViewAll path="/user-items" />
          <ViewWomen path="/view-women" />
          <ViewMen path="/view-men" />
          <DisplayItems path="/display-details/:id" />
          <ItemDetail path="/product-details/:id" />
          <UserItemDetail path="/user-product-details/:id" />
          <Edit path="/edit-details/:id" />
          <Delete path="delete-details/:id"/>
          <Home path="/" />
          <Add path="/add-user-item" />
          <Cart path="/cart" />
        </Router>

        {/* <CheckOut /> */}
      </React.Fragment>
    );
  }
}

export default App;
