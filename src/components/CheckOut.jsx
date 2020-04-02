import React, { Component } from "react";
import TopNav from "./TopNav";
import NavBar from "./NavBar";
import visa from "./images/visa.svg";
import mastercard from "./images/mastercard.svg";
import america from "./images/american-express.svg";
import discover from "./images/discover.svg";

class CheckOut extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <TopNav />
        <div className="page">
          <h2 className="page-tile">Your Cart</h2>
          <div className="section">
            <h3 className="grey">Payment method</h3>

            <div className="card-container">
              <div className="card ">
                <img src={visa} alt="visa" className="visa" />
              </div>

              <div className="card ">
                <img src={mastercard} alt="master" className="master" />
              </div>

              <div className="card ">
                <img src={america} alt="america" className="america" />
              </div>

              <div className="card ">
                <img src={discover} alt="discover" className="discover" />
              </div>
            </div>

            <input
              type="text"
              placeholder="Cardholder name"
              className="text-input"
            />

            <input
              type="number"
              className="text-input"
              placeholder="Card number"
            />

            <input type="date" className="text-input" placeholder="EXP" />

            <input type="number" className="text-input" placeholder="CVV" />
          </div>

          <div className="section">
            <h3 className="grey">Shipping address</h3>
            <input type="textarea" className="textarea-input" />
          </div>

          <div className="section">
            <h3 className="grey">Your bill</h3>

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
          </div>

          <button className="btn btn-primary btn-wide">Pay Now!</button>
        </div>

        <NavBar />
      </React.Fragment>
    );
  }
}

export default CheckOut;
