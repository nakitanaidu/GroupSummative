import React, { Component } from "react";

class CategoryDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Women's clothing",
      name: "womens_category",
    };
  }

  onCategoryChanged = (e) => {
    console.log("clicked");
    this.setState({ name: "mens_category" });
  };

  render() {
    return (
      <React.Fragment>
        <select
          className="category-options"
          defaultValue={this.state.value}
          name={this.state.name}
          onChange={this.onCategoryChanged}
        >
          <option className="option-style" value="Women's clothing">
            Women
          </option>
          <option className="option-style" value="Men's clothing">
            Men
          </option>
        </select>
      </React.Fragment>
    );
  }
}

export default CategoryDropdown;
