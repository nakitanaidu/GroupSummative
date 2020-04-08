import React, { Component } from "react";
import TopNav from "./TopNav";
import NavBar from "./NavBar";
import replaceThisWithPhoto from "./images/background/women-item-02.jpg";
import trash from "./images/trash-solid.svg";

class Cart extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <TopNav />
        <div className="page">
          <h2 className="page-tile">Your Cart</h2>

          <div className="cart-item">
            <div className="cart-item-img">
              <img src={replaceThisWithPhoto} alt="item-img" />
            </div>

            <div className="cart-item-info">
              <h3 className="dark">Replace this</h3>
              <h3 className="dark">Price: </h3>

              <div className="detail-delete">
                <p className="grey">Size:</p>
                <img src={trash} alt="trash-icon" />
              </div>
            </div>
          </div>

          <hr />

          <div className="bill-item">
            <p className="grey">Sub Total</p>
            <p className="dark">300$</p>
          </div>

          <div className="bill-item">
            <p className="grey">Shipping</p>
            <p className="dark">300$</p>
          </div>

          <div className="bill-item">
            <p className="grey">Tax (10%)</p>
            <p className="dark">300$</p>
          </div>

          <hr />
          <div className="bill-item">
            <p className="grey">Tax (10%)</p>
            <h3 className="dark">300$</h3>
          </div>

          <button className="btn btn-primary btn-wide">Confirm</button>
        </div>

        <NavBar />
      </React.Fragment>
    );
  }
}

export default Cart;
