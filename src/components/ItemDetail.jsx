import React, { Component } from "react";
import * as UTILS from "../utils";
import Axios from "axios";
import TopNav from "./TopNav";
import NavBar from "./NavBar";

class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    Axios.get(`${UTILS.show_items}/${this.props.id}`).then((res) => {
      console.table(res.data);
      this.setState({
        items: res.data,
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <TopNav />
        <div className="item-detail page">
          {/* props not dispalying */}
          {this.state.items.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <div className="detail-img-con">
                  <img
                    src={item.image}
                    alt="item-img"
                    className="item-detail-img"
                  />
                </div>

                <h2 className="dark">{item.title}</h2>

                <div className="price-size-con">
                  <h3 className="green">Price: {item.price}</h3>
                  <h3 className="green">Size: {item.size}</h3>
                  <h3 className="green">Con: {item.condition}</h3>
                </div>

                <p className="dark">{item.description}</p>
              </React.Fragment>
            );
          })}

          <div className="seller-seemore">
            <p className="grey">Seller: </p>
            <p>
              <a href="REPLACE THIS LINK" className="grey">
                See more here
              </a>
            </p>
          </div>

          <button className="btn btn-wide btn-primary">Add to Cart</button>

          {/* comment section */}
          <div className="comment-con">
            <h3 className="dark">Leave a comment</h3>
            {/* <form action="" ref={this.formRef}> */}
              <input type="textarea" className="grey textarea-input"></input>
            {/* </form> */}
            <button  className="btn btn-primary btn-narrow btn-right">
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
