import React, { Component } from "react";
import * as UTILS from "../utils";
import Axios from "axios";
import TopNav from "./TopNav";
import NavBar from "./NavBar";
import replaceThisWithPhoto from "./images/background/women-item-02.jpg";

const crimsonStyle = { color: "crimson" };

class ItemDetail extends Component {

  constructor(props) {
    super(props);
   console.log(">>> ", this.props.id);
  }
  
  componentDidMount () {
    Axios.get(`${UTILS.show_items}/${this.props.id}`).then (
      res => {
        console.table(res.data)
        this.setState({
        items: res.data
        })
      }
    )
  }

  render() {
    return (
      <React.Fragment>
        <TopNav />
        <div className="item-detail page">
          <div className="detail-img-con">

            {/* props not dispalying */}
            <img src={this.props.image} alt="item-img" />
          </div>

          <h2 className="dark">{this.props.title}</h2>

          <div className="price-size-con">
            <h3 className="green">Price: {this.props.price}</h3>
            <h3 className="green">Size: {this.props.size}</h3>
            <h3 className="green">Con: {this.props.condition}</h3>
          </div>

          <p className="dark">
           {this.props.description}
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
