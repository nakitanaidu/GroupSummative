import React, { Component } from "react";

class EditDropdown extends Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state = { value: "" };
  }

  onCategoryChanged = (e) => {
    console.log("cate click");
    this.setState({ value: e.target.value });
  };

  render() {
    // let {
    //   womens_category,
    //   mens_category,
    //   category
    // } = this.state.category;
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
    )
  }
}
=======
    
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
>>>>>>> d780f3a2cb69eb298a2c596926d82982613b3ef1

export default EditDropdown;
