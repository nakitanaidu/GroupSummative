import React, { Component } from "react";
import * as UTILS from "../utils";
import { navigate } from "@reach/router";
import Axios from "axios";
import TopNav from "./TopNav";
import NavBar from "./NavBar";

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = { items: {} };
    // get handle on the DOM element
    this.myRef = React.createRef();
  }

  gotoProducts = e => {
    let temp = this.props.id;
    console.log(this.props.id);
    navigate(`/edit-details/${temp}`);
  };

  componentDidMount() {
    Axios.get(`${UTILS.show_items}/${this.props.id}`).then(
      res => {
        // console.table(res.data);
        this.setState({ items: res.data });
      }
    );
  }

  EditProduct = e => {
    e.preventDefault();
    // grab reference to the form data
    var formData = new FormData(this.myRef.current);
    // transfer into temp obj, ready to send
    var dataToSend = {
      womens_category: formData.get("womens_category"),
      mens_category: formData.get("mens_category"),
      image: formData.get("image"),
      title: formData.get("title"),
      price: formData.get("price"),
      size: formData.get("size"),
      condition: formData.get("condition"),
      description: formData.get("description")
    };

    Axios.put(`${UTILS.show_items}/${this.props.id}`,
      dataToSend
    ).then(res => {
      console.log(res);
    });
  };



  render() {
    const { womens_category, mens_category, image, title, price, size, condition, description } = this.state.items;
    return (
      <React.Fragment>
        <TopNav />
        <div className="page">
          <h2 className="page-tile">Edit Item</h2>
          <form
          className="form-wrapper"
          onSubmit={this.EditProduct}
          ref={this.myRef}
        ></form>
          <input type="text" placeholder="Title" className="text-input" defaultValue={title}></input>
          <input type="text" placeholder="Price" className="text-input" defaultValue={price}></input>
          <input type="text" placeholder="Size" className="text-input" defaultValue={size}></input>
          <input
            type="text"
            placeholder="Condition"
            className="text-input"
            defaultValue={condition}
          ></input>

          <input
            type="textarea"
            placeholder="Description"
            className="textarea-input"
            defaultValue={description}
          ></input>

          <select className="category-options">
            <option value="women" className="option-style" defaultValue={womens_category}>
              Women
            </option>
            <option value="men" className="option-style" defaultValue={mens_category}>
              Men
            </option>
          </select>

          <div className="uploadimg-con">
            <input type="file" className="upload-img" defaultValue={image}></input>
            <span>
              <p className="dark upload-frame grey">Upload Image</p>
            </span>
          </div>

          <button type="submit" className="btn btn-primary btn-wide" onClick={this.gotoProducts}>Update Item</button>
        </div>

        <NavBar />
      </React.Fragment>
    );
  }
}

export default Edit;
