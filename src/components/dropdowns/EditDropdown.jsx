import React, { Component } from "react";

class EditDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "Women's clothing",
    };
  }

  onCategoryChanged = (e) => {
    console.log("clicked");
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <select
          className="category-options"
          name="category"
          defaultValue={"DEFAULT"}
          onChange={this.onCategoryChanged}
        >
          <option value="DEFAULT" disabled>
            Choose...
          </option>
          <option className="option-style" value="Women's clothing">
            Women's clothing
          </option>
          <option className="option-style" value="Men's clothing">
            Men's clothing
          </option>
        </select>
      </React.Fragment>
    );
  }
}

export default EditDropdown;
