import React, { Component } from "react";
import * as UTILS from "../utils";
import { navigate } from "@reach/router";
import Axios from "axios";
import TopNav from "./TopNav";
import NavBar from "./NavBar";
import AddDropdown from "./dropdowns/AddDropdown";

const initialState = {
  title: "",
 price: "",
  size: "",
  condition: "",
 description: "",
  titleError: "",
  priceError: "",
 sizeError: "",
 conditionError: "",
 descriptionError: "",
}

class Add extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = { item_id: 0 };

      // init state - may be overwritten
      this.state = initialState;
    }
  
    onChangeTitle = (e) => {
      this.setState({ title: e.target.value });
      const isCheckbox = e.target.type === "checkbox";
      this.setState({
        [e.target.name]: isCheckbox
          ? e.target.checked
          : e.target.value
      });
    };
    
    onChangePrice = (e) => {
      this.setState({ price: e.target.value });
      const isCheckbox = e.target.type === "checkbox";
      this.setState({
        [e.target.name]: isCheckbox
          ? e.target.checked
          : e.target.value
      });
    };
    
    onChangeSize = (e) => {
      this.setState({ size: e.target.value });
      const isCheckbox = e.target.type === "checkbox";
      this.setState({
        [e.target.name]: isCheckbox
          ? e.target.checked
          : e.target.value
      });
    };
    
    
    onChangeCondition = (e) => {
      this.setState({ condition: e.target.value });
      const isCheckbox = e.target.type === "checkbox";
      this.setState({
        [e.target.name]: isCheckbox
          ? e.target.checked
          : e.target.value
      });
    };
    
    onChangeDescription = (e) => {
      this.setState({ description: e.target.value });
      const isCheckbox = e.target.type === "checkbox";
      this.setState({
        [e.target.name]: isCheckbox
          ? e.target.checked
          : e.target.value
      });
    };
    
    
    // Form info validation
    
    validate = () => {
      
     let titleError = "";
      let priceError = "";
      let sizeError = "";
     let conditionError = "";
     let descriptionError = "";
    
      if (!this.state.title) {
        titleError = "Invalid title";
      }
    
      if (!this.state.price) {
        priceError = "invalid price";
      }
    
      if (!this.state.size) {
        sizeError = "invalid size";
      }
    
      if (!this.state.condition) {
        conditionError = "invalid condition";
      }
    
      if (!this.state.description) {
        descriptionError = "Invalid description";
      }
    
      if (titleError || priceError || sizeError || conditionError || descriptionError) {
        this.setState({ titleError, priceError, sizeError, conditionError, descriptionError });
        return false;
    
      } return true;
    
    }


  

  gotoProducts = (e) => {
    let temp = this.props.id;
    console.log(this.props.id);

    navigate(`/user-items`);
  };

  addProduct = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState)
    var formData = new FormData(this.formRef.current);

    //lets see what we have in the form
    for (var p of formData.entries()) {
      console.log(p);
    }

    var settings = {
      headers: { "Content-Type": "multipart/form-data" },
    };

    Axios.post(UTILS.show_items, formData, settings)
      .then((res) => {
        console.log(res);
        navigate(`/user-product-details/${res.data._id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }
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




  render() {
    return (
      <React.Fragment>
        <TopNav />
        <div className="page">
          <h2 className="page-tile">Add your new item!</h2>
          <form onSubmit={this.addProduct} ref={this.formRef}>
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="text-input"
              onChange={this.onChangeTitle}
              value={this.state.title}
            ></input>
             <div style={{ fontSize: 12, color: "red" }}>{this.state.titleError}</div>
            <input
              type="text"
              placeholder="Price"
              name="price"
              className="text-input"
              onChange={this.onChangePrice}
              value={this.state.price}
            ></input>
             <div style={{ fontSize: 12, color: "red" }}>{this.state.priceError}</div>
            <input
              type="text"
              placeholder="Size"
              name="size"
              className="text-input"
              onChange={this.onChangeSize}
              value={this.state.size}
            ></input>
              <div style={{ fontSize: 12, color: "red" }}>{this.state.sizeError}</div>
            <input
              type="text"
              placeholder="Condition"
              name="condition"
              className="text-input"
              onChange={this.onChangeCondition}
              value={this.state.condition}
            ></input>
 <div style={{ fontSize: 12, color: "red" }}>{this.state.conditionError}</div>
            <input
              type="textarea"
              placeholder="Description"
              name="description"
              className="textarea-input"
              onChange={this.onChangeDescription}
              value={this.state.description}
            ></input>
 <div style={{ fontSize: 12, color: "red" }}>{this.state.descriptionError}</div>

            <AddDropdown />
            <input id="id" type="hidden" name="id" value={this.state.id} />

            <div className="uploadimg-con">
              <input
                type="file"
                name="image"
                onChange={this.uploadToExpress}
                className="upload-img"
              ></input>
              <span>
                <p className="dark upload-frame grey">Upload Image</p>
              </span>
            </div>

            <button
              className="btn btn-primary btn-wide"
              onClick={this.gotoItemDetail}
            >
              Add Item
            </button>
          </form>
        </div>

        <NavBar />
      </React.Fragment>
    );
  }
}

export default Add;
