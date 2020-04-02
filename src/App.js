import React, { Component } from "react";
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

import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CheckOut />
      </React.Fragment>
    );
  }
}

export default App;
