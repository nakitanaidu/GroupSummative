import React, { Component } from "react";

class EditDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  onCategoryChanged = (e) => {
    console.log("cate click");
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <select
          className="category-options"
          defaultValue={this.state.value}
          name="category"
          onChange={this.onCategoryChanged}
        >
          <option
            className="option-style"
            value="Women's clothing"
            onClick={this.onMenClick}
          >
            Women
          </option>
          <option
            className="option-style"
            value="Men's clothing"
            onClick={this.onWomenClick}
          >
            Men
          </option>
        </select>
      </React.Fragment>
    );
  }
}

export default EditDropdown;
