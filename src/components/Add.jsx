import React, { Component } from "react";
import * as UTILS from "../utils";
import { navigate } from "@reach/router";
import Axios from "axios";
import TopNav from "./TopNav";
import NavBar from "./NavBar";
import CategorySelector from "./CategorySelector";


const initialState = {
  Title: "",
  Price: "",
  Size: "",
  Condition: "",
  Description: "",
  TitleError: "",
  PriceError: "",
  SizeError: "",
  ConditionError: "",
  DescriptionError: "",
}


class Add extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = { item_id: 0 };
    this.state = initialState;

  }


  onChangeTitle = (e) => {
    this.setState({ Title: e.target.value });
    const isCheckbox = e.target.type === "checkbox";
    this.setState({
      [e.target.name]: isCheckbox
        ? e.target.checked
        : e.target.value
    });
  };

  onChangePrice = (e) => {
    this.setState({ Price: e.target.value });
    const isCheckbox = e.target.type === "checkbox";
    this.setState({
      [e.target.name]: isCheckbox
        ? e.target.checked
        : e.target.value
    });
  };

  onChangeSize = (e) => {
    this.setState({ Size: e.target.value });
    const isCheckbox = e.target.type === "checkbox";
    this.setState({
      [e.target.name]: isCheckbox
        ? e.target.checked
        : e.target.value
    });
  };


  onChangeCondition = (e) => {
    this.setState({ Condition: e.target.value });
    const isCheckbox = e.target.type === "checkbox";
    this.setState({
      [e.target.name]: isCheckbox
        ? e.target.checked
        : e.target.value
    });
  };

  onChangeDescription = (e) => {
    this.setState({ Description: e.target.value });
    const isCheckbox = e.target.type === "checkbox";
    this.setState({
      [e.target.name]: isCheckbox
        ? e.target.checked
        : e.target.value
    });
  };


  // Form info validation

  validate = () => {
    
   let TitleError = "";
    let PriceError = "";
    let SizeError = "";
   let ConditionError = "";
   let DescriptionError = "";

    if (!this.state.Title) {
      TitleError = "Invalid title";
    }

    if (!this.state.Price) {
      PriceError = "invalid price";
    }

    if (!this.state.Size) {
      SizeError = "invalid size";
    }

    if (!this.state.Condition) {
      ConditionError = "invalid condition";
    }

    if (!this.state.Description) {
      DescriptionError = "Invalid description";
    }

    if (TitleError || PriceError || SizeError || ConditionError || DescriptionError) {
      this.setState({ TitleError, PriceError, SizeError, ConditionError, DescriptionError });
      return false;

    } return true;

  }





















  addProduct = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
    console.log(this.state);
    this.setState(initialState)

    {var formData = new FormData(this.formRef.current);

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
  }
  };

  // uploadToExpress = (e) => {
  //   e.preventDefault();
  //   // grab reference to the form data
  //   var formData = new FormData(this.formRef.current);
  //   var settings = { headers: { "Content-Type": "multipart/form-data" } };
  //   console.log(">>>+ FORMDATA ", formData);
  //   Axios.post(UTILS.show_items, formData, settings).then((res) => {
  //     console.log(res);
  //   });
  // };

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
              value={this.state.Title}
              onChange={this.onChangeTitle}
            ></input>
              <div style={{ fontSize: 12, color: "red" }}>{this.state.TitleError}</div>
            <input
              type="text"
              placeholder="Price"
              name="price"
              className="text-input"
              value={this.state.Price}
              onChange={this.onChangePrice}
            ></input>
               <div style={{ fontSize: 12, color: "red" }}>{this.state.PriceError}</div>
            <input
              type="text"
              placeholder="Size"
              name="size"
              className="text-input"
              value={this.state.Size}
              onChange={this.onChangeSize}
            ></input>
               <div style={{ fontSize: 12, color: "red" }}>{this.state.SizeError}</div>
            <input
              type="text"
              placeholder="Condition"
              name="condition"
              className="text-input"
              value={this.state.Condition}
              onChange={this.onChangeCondition}
            ></input>
   <div style={{ fontSize: 12, color: "red" }}>{this.state.ConditionError}</div>
            <input
              type="textarea"
              placeholder="Description"
              name="description"
              className="textarea-input"
              value={this.state.Description}
              onChange={this.onChangeDescription}
            ></input>

            <CategoryDropdown />
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

            <button className="btn btn-primary btn-wide">Add Item</button>
          </form>
        </div>

        <NavBar />
      </React.Fragment>
    );
  }
}

export default Add;

// onMenClicked = (e) => {
//   var formData = new FormData(this.formRef.current);
//   var mens_category = { mens_category: "men" };
//   Axios.post(UTILS.show_items, formData, mens_category).then((res) => {
//     console.log(res.data);
//   });
// };

// onChangeCategory = (e) => {
//   e.preventDefault();
//   var formData = new FormData(this.formRef.current);
//   var women = e.target.elements["women"].value;
//   var men = e.target.elements["men"].value;
//   Axios.post(UTILS.show_items, formData, {
//     womens_category: women,
//     mens_category: men,
//   }).then((res) => {
//     console.log(res);
//   });
// };
