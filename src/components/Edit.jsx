import React, { Component } from "react";
import * as UTILS from "../utils";
import { navigate } from "@reach/router";
import Axios from "axios";
import TopNav from "./TopNav";
import NavBar from "./NavBar";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = { items: {}, isLoaded: false, };
    // get handle on the DOM element
    this.myRef = React.createRef();
  }

  gotoProducts = (e) => {
    let temp = this.props.id;
    console.log(this.props.id);

    navigate(`/edit-details/${temp}`);
  };


  componentDidMount() {
    Axios.get(`${UTILS.show_items}/${this.props.id}`).then((res) => {
      // console.table(res.data);
      this.setState({ items: res.data[0], isLoaded: true });
    });
  }

  EditProduct = (e) => {
    console.log("EDIT");
    e.preventDefault();
    // grab reference to the form data
    var formData = new FormData(this.myRef.current);

    var settings = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    
    Axios.put(`${UTILS.update_item}/${this.props.id}`, formData, settings).then(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(`Error updating ${this.props.id}`);
      }
    );

  };

  render() {
    const {
      womens_category,
      mens_category,
      image,
      title,
      price,
      size,
      condition,
      description,
    } = this.state.items;

 const image_path = UTILS.assets_url + image;

    return (
      <React.Fragment>
        <TopNav />
        <div className="page">
          <h2 className="page-tile">Edit Item</h2>
          <form
            className="form-wrapper"
            onSubmit={this.EditProduct}
            ref={this.myRef}
          >
            <input
              type="text"
              placeholder="Title"
              className="text-input"
              name="title"
              defaultValue={title}
            ></input>
            <input
              type="text"
              placeholder="Price"
              className="text-input"
              name="price"
              defaultValue={price}
            ></input>
            <input
              type="text"
              placeholder="Size"
              className="text-input"
              name="size"
              defaultValue={size}
            ></input>
            <input
              type="text"
              placeholder="Condition"
              className="text-input"
              name="condition"
              defaultValue={condition}
            ></input>
            {/*  V IMP - input name should match model name on server */}
            <input
              type="textarea"
              placeholder="Description"
              className="textarea-input"
              name="description"
              defaultValue={description}
            ></input>
            <select className="category-options">
              <option
                value="women"
                className="option-style"
                name="womens_category"
                defaultValue={womens_category}
              >
                Women
              </option>
              <option
                value="men"
                className="option-style"
                name="mens_category"
                defaultValue={mens_category}
              >
                Men
              </option>
            </select>
            <div className="uploadimg-con">
              <input
                type="file"
                name="image"
                className="upload-img"
                defaultValue={image}
                onChange={this.uploadToExpress}
              ></input>
              <span>
                <p className="dark upload-frame grey">Upload Image</p>
              </span>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-wide"
              // onClick={this.gotoProducts}
            >
              Update Item
            </button>
          </form>
        </div>

        <NavBar />
      </React.Fragment>
    );
  }
}

export default Edit;
