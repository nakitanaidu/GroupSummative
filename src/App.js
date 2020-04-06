import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import "./css/categories.css";
import "./css/buttons.css";
import "./css/navigation.css";
import "./css/itemsdisplay.css";
import "./css/itemdetail.css";
import "./css/userprofile.css";
import "./css/inputs.css";
import "./css/cart.css";
import "./css/checkout.css";

import Categories from "./components/Categories";
import UsersProfile from "./components/UsersProfile";
import Home from "./components/Home";
import ViewAll from "./components/ViewAll";
import ViewWomen from "./components/ViewWomen";
import ViewMen from "./components/ViewMen.jsx";
import ItemDetail from "./components/ItemDetail";
import Add from "./components/Add";
import Cart from "./components/Cart";
import UserItemDetail from "./components/UserItemDetail";
import Edit from "./components/Edit";

// import CheckOut from "./components/CheckOut";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Categories path="/categories" />
          <UsersProfile path="/profile" />
          <ViewAll path="/user-items" />
          <ViewWomen path="/view-women" />
          <ViewMen path="/view-men" />
          <ItemDetail path="/product-details/:id" />
          <UserItemDetail path="/user-product-details/:id" />
          <Edit path="/edit-details/:id" />
          <Home path="/login-signup" />
          <Add path="/add-user-item" />
          <Cart path="/cart" />
        </Router>

        {/* <CheckOut /> */}
      </React.Fragment>
    );
  }
}

export default App;
