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

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Categories path="/categories" />
          <ViewWomen path="/view-women" />
          <ViewMen path="/view-men" />
          <ItemDetail path="/itemdetails/:id" />
          <Home path="/login-signup"/>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
