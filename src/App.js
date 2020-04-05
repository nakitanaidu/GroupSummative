import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import "./css/categories.css";
import "./css/buttons.css";
import "./css/navigation.css";
import "./css/itemsdisplay.css";
import "./css/itemdetail.css";

import Categories from "./components/Categories";
import UsersProfile from "./components/UsersProfile";
import Home from "./components/Home";
import ViewAll from "./components/ViewAll";
import ViewWomen from "./components/ViewWomen";
<<<<<<< HEAD
import ViewMen from "./components/ViewMen";
import ViewBoth from "./components/ViewBoth"
=======
import ViewMen from "./components/ViewMen.jsx";
import ItemDetail from "./components/ItemDetail";
import Add from "./components/Add";
>>>>>>> cad222764f8095010c50ddc3071f3d066d314b9b
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
<<<<<<< HEAD
import CheckOut from "./components/CheckOut";
=======
import UserItemDetail from "./components/UserItemDetail";
import Edit from "./components/Edit";

// import CheckOut from "./components/CheckOut";
>>>>>>> cad222764f8095010c50ddc3071f3d066d314b9b

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Categories path="/categories" />
<<<<<<< HEAD
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
        
=======
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
>>>>>>> cad222764f8095010c50ddc3071f3d066d314b9b
      </React.Fragment>
    );
  }
}

export default App;
