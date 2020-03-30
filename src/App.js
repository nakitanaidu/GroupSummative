import React, { Component } from "react";
import "./App.css";
import "./css/categories.css";
import "./css/buttons.css";
import "./css/navigation.css";
import Categories from "./components/Categories";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Categories />
      </React.Fragment>
    );
  }
}

export default App;
