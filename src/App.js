import React, { Component } from "react";
import "./App.css";
import "./css/categories.css";
import "./css/buttons.css";
import "./css/navigation.css";
import "./css/itemsdisplay.css";
import "./css/itemdetail.css";
import ItemDetail from "./components/ItemDetail";
import DisplayItems from "./components/DisplayItems";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ItemDetail />
      </React.Fragment>
    );
  }
}

export default App;
