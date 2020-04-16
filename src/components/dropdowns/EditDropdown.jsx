import React, { Component } from "react";

class EditDropdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: "Women's clothing",
      name: "category",
    }
  }

  onCategoryChanged = (e) => {
    console.log("clicked");
    this.setState({ name: "category" });
  };

  render() {
    // let {
    //   womens_category,
    //   mens_category,
    //   category
    // } = this.state.category;
    return (
      <React.Fragment>
        <select className="category-options" name={this.state.name} defaultValue={'DEFAULT'} onChange={this.onCategoryChanged}>
          <option value="DEFAULT" disabled>Choose...</option>
          <option className="option-style"  value="Women's clothing" >
          Women's clothing
          </option>
          <option className="option-style"  value="Men's clothing"  >
          Men's clothing
          </option>
        </select>
      </React.Fragment>
    )
  }
}

export default EditDropdown;
