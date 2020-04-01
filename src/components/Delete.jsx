import React, { Component } from "react";
import TopNav from "./TopNav";
import NavBar from "./NavBar";
import replaceThisWithPhoto from "./images/background/women-item-02.jpg";


class Delete extends Component {
  render() {
    return (
      <React.Fragment>
        <TopNav />
        <div className="item-detail page">
          <div className="detail-img-con">
            <img src={replaceThisWithPhoto} alt="item-img" />
          </div>

          <h2 className="dark">Replace this title</h2>

          <div className="price-size-con">
            <h3 className="green">Price: </h3>
            <h3 className="green">Size: </h3>
            <h3 className="green">Con: </h3>
          </div>

          <p className="dark">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          </p>

            <div className="spacer">
            </div>
          <button className="btn btn-wide btn-primary">Delete?</button>

        
         
          
        </div>
        <NavBar />
      </React.Fragment>
    );
  }
}

export default Delete;
