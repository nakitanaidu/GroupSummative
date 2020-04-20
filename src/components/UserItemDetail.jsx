import React, { Component } from "react";
import * as UTILS from "../utils";
import { navigate } from "@reach/router";
import Axios from "axios";
import TopNav from "./TopNav";
import NavBar from "./NavBar";

class UserItemDetail extends Component {
  constructor(props) {
    super(props);
    let u = window.localStorage.getItem("user") || "User name";
    this.state = {
      items: [],
      comments: [],
      user: u,
    };
    this.commentsField = React.createRef();
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    if (this.props.id === "undefined") {
      alert("no id supplied");
    } else {
      Axios.get(`${UTILS.show_items}/${this.props.id}`).then((res) => {
        this.setState({
          items: res.data,
          comments: res.data[0].comments,
        });
      });
    };
  }

    updateComments = (e) => {
      // get the content of the textarea
      let comment = this.commentsField.current.value;
      // the id we need will be stored in state by this point
      let id = this.state.items[0].id;

      // creating a new comment
      Axios.post(`${UTILS.post_comment}`, {
        comment: comment,
        id: id,
      }).then(
        (res) => {
          console.log(res);
          // on success reload the item to see comments
          this.getData();
        },
        (error) => {
          console.log("error for ", this.props.id);
        }
      );
    };

    updateImagePath = (p) => {
      if (p.startsWith("http")) {
        // we have an absolute path, don't touch it
        return p;
      } else {
        // we have a path that relates to our server, pre-pend it
        return UTILS.images_folder + p;
      }
    };

    gotoEdit = (e) => {
      let temp = this.props.id;
      console.log(this.props.id);
      navigate(`/edit-details/${temp}`);
    };

    removeProduct = (evt) => {
      var index = evt.target.getAttribute("data-uuid");
      console.table(this.state.items);
      Axios.delete(`${UTILS.show_items}/${this.props.id}`).then((res) => {
        console.log(res.data);
        navigate(`/user-items`);
      });
    };

    
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
                    src={this.updateImagePath(item.image)}
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
                  <div className="seller-seemore">
                    <p className="grey">{this.state.user}: </p>
                    <p>
                      <a href="REPLACE THIS LINK" className="grey">
                        See more here
                    </a>
                    </p>
                  </div>

                  <div className="edit-delete">
                    <button
                      className="btn btn-narrow btn-secondary"
                      _id={item._id}
                      onClick={this.removeProduct}
                    >
                      Delete
                  </button>
                    <button
                      className="btn btn-narrow  btn-primary"
                      onClick={this.gotoEdit}
                    >
                      Edit
                  </button>
                  </div>
                </React.Fragment>
              );
            })}

          {/* comment section */}
          <div className="comment-con">
            <h3 className="dark">Leave a comment</h3>

            <input
              type="textarea"
              ref={this.commentsField}
              className="grey textarea-input"
            ></input>

            <button
              onClick={this.updateComments}
              className="btn btn-primary btn-narrow btn-right"
            >
              Send
            </button>

            <div className="comment">
              <p className="grey">{this.state.user}</p>
              {this.state.comments.map((item, i) => {
                return (
                  <p key={i} className="dark">
                    {item.comment}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <NavBar />
      </React.Fragment>
      );
    }
  }

  export default UserItemDetail;