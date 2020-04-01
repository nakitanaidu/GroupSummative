import React, { Component } from "react";
import "./App.css";
import "./css/categories.css";
import "./css/buttons.css";
import "./css/navigation.css";
import "./css/itemsdisplay.css";
import "./css/itemdetail.css";
import "./css/userprofile.css";
import UserProfile from "./components/UsersProfile";
import DisplayItems from "./components/DisplayItems";
import UserItemDetail from "./components/UserItemDetail";
import Edit from "./components/Edit";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Edit />
      </React.Fragment>
    );
  }
}

export default App;
