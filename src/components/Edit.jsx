import React, { Component } from 'react'
import * as UTILS from "../utils";
import { navigate } from "@reach/router";
import Axios from "axios";
import TopNav from "./TopNav";
import NavBar from "./NavBar";
import EditDropdown from "./dropdowns/EditDropdown";

export default class Edit extends Component {
 
constructor(props) {
super(props);
this.state = { items: {}, isLoaded: false};
// get handle on the DOM element
this.myRef = React.createRef();
}



gotoProducts = (e) => {
  
  console.log(this.state);
let temp = this.props.id;
console.log(this.props.id);

navigate(`/user-product-details/${temp}`);
  
};

checkForURL = (s = "") => {
console.log("s = ", s);
if (s.startsWith("http")) {
return true;
}

if (s.startsWith("httsp")) {
  return true;
}

if (s.startsWith("//")) {
  return true;
}

return false;
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
  //lets see what we have in the form
  for (var p of formData.entries()) {
    console.log(p);
  }

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
let {
image,
title,
price,
size,
condition,
description,
} = this.state.items;

// only append server url to images that are not external
if (typeof image === "string" && this.checkForURL(image) === false) {
  image = UTILS.images_folder + image;
}

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
          onChange={this.onChangeTitle}
          defaultValue={title}
        ></input>

        <input
          type="text"
          placeholder="Price"
          className="text-input"
          name="price"
          onChange={this.onChangePrice}
          defaultValue={price}
        ></input>

        <input
          type="text"
          placeholder="Size"
          className="text-input"
          name="size"
          onChange={this.onChangeSize}
          defaultValue={size}
        ></input>
   
        <input
          type="text"
          placeholder="Condition"
          className="text-input"
          name="condition"
          onChange={this.onChangeCondition}
          defaultValue={condition}
        ></input>

        {/*  V IMP - input name should match model name on server */}
        <input
          type="textarea"
          placeholder="Description"
          className="textarea-input"
          name="description"
          onChange={this.onChangeDescription}
          defaultValue={description}
        ></input>
  
        <EditDropdown/>
        
        <div className="uploadimg-con">
          <figure>
            <img
              src={image}
              width="100px"
              height="100px"
              alt="current choice"
            />
            <figcaption>Name: {image}</figcaption>
          </figure>
          <input
            type="file"
            name="image"
            src={image}
            className="upload-img"
            className="dark upload-frame grey"
            defaultValue={image}
          ></input>

          <span>
            <p className="dark upload-frame grey">Upload Image</p>
          </span>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-wide"
          onClick={this.gotoProducts}
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


