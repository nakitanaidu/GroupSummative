import React, { Component } from "react";
import TopNav from "./TopNav";
import NavBar from "./NavBar";
import replaceThisWithPhoto from "./images/background/women-item-02.jpg";

class ItemDetail extends Component {
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

          <div className="seller-seemore">
            <p className="grey">Seller: </p>
            <p>
              <a href="REPLACE THIS LINK" className="grey">
                See more here
              </a>
            </p>
          </div>

          <button className="btn btn-wide btn-primary">Add to Cart</button>

          <div className="comment-con">
            <h3 className="dark">Leave a comment</h3>
            <input type="textarea" className="grey textarea-input"></input>

            <button className="btn btn-primary btn-narrow btn-right">
              Send
            </button>

            <div className="comment">
              <p className="grey">User's name goes here</p>
              <p className="dark">Comment goes here</p>
            </div>
          </div>
        </div>
        <NavBar />
      </React.Fragment>
    );
  }
}

export default ItemDetail;
