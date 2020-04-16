import React, { Component } from "react";

class EditDropdown extends Component {
  constructor(props) {
<<<<<<< HEAD
    super(props)

    this.state = {
      value: "Women's clothing",
      name: "category",
    }
  }

  onCategoryChanged = (e) => {
    console.log("clicked");
    this.setState({ name: "category" });
=======
    super(props);
    this.state = { value: "" };
  }

  onCategoryChanged = (e) => {
    console.log("cate click");
    this.setState({ value: e.target.value });
>>>>>>> 2eb6068853851d54a5d553720f17c95d23541657
  };

  render() {
    // let {
    //   womens_category,
    //   mens_category,
    //   category
    // } = this.state.category;
    return (
      <React.Fragment>
<<<<<<< HEAD
        <select className="category-options" name={this.state.name} defaultValue={'DEFAULT'} onChange={this.onCategoryChanged}>
          <option value="DEFAULT" disabled>Choose...</option>
          <option className="option-style"  value="Women's clothing" >
          Women's clothing
          </option>
          <option className="option-style"  value="Men's clothing"  >
          Men's clothing
=======
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
>>>>>>> 2eb6068853851d54a5d553720f17c95d23541657
          </option>
        </select>
      </React.Fragment>
    )
  }
}

export default EditDropdown;
