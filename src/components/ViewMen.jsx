import React, { Component } from "react";
import Axios from "axios";
import * as UTILS from "../utils";
import DisplayItems from "./DisplayItems";
import TopNav from "./TopNav";
import NavBar from "./NavBar";
import Comments from "./Comments";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount(){
    this.getData()
  }

  // commentAdded = (e) => {
  //   this.getData();
  // };

  getData() {
    Axios.get(UTILS.show_men).then(
      (res) => {
        console.table(res.data);
        this.setState({
          items: res.data,
        });
      },
      (error) => {
        console.log("error = ", error);
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <TopNav />
        <div className="page">
          <h2 className="page-tile">Hello Gentlement!</h2>
          <div className="items-con">
            {console.log(this.state.items)}
            {this.state.items.map((items, i) => {
              return (
                // <div key={Date.now()}>
                <DisplayItems
                  key={i}
                  // womens_category={items.womens_category}
                  mens_category={items.mens_category}
                  image={items.image}
                  title={items.title}
                  price={items.price}
                  size={items.size}
                  condition={items.condition}
                  description={items.description}
                  _id={items._id}
                  // commentAdded={this.commentAdded}
                />
                // {/* <Comments comment={items.comment}/> */}
                // </div>
              );
            })}
          </div>
        </div>
        <NavBar />
      </React.Fragment>
    );
  }
}

