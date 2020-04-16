import React, { Component } from 'react'

export default class AddDropdown extends Component {
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



// export default AddDropdown;
// import React, { Component } from 'react'
// import Axios from "axios";
// import * as UTILS from "../utils";

// export default class CategorySelector extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       value: "Women's clothing",
//       name: "womens_category",
//     };
//   }

//   onCategoryUpdate = (e) => {
//     console.log("clicked");
//     this.setState({ name: "mens_category" });
//   };

// //
// componentDidMount() {
//     Axios.get(UTILS.show_items).then(
//       (res) => {
//         console.table(res.data);
//         this.setState({
//           items: res.data,
//         });
//       },
//       (error) => {
//         console.log("error = ", error);
//       }
//     );
//   }

//   render() {

//     return (
//       <React.Fragment>
//         <select className="category-options" name={this.state.name} defaultValue={'DEFAULT'} onChange={this.onCategoryUpdate}>
//         <option value="DEFAULT" disabled>Choose...</option>
//         <option className="option-style" value="Women's clothing">
//             Women
//           </option>
//           <option className="option-style" value="Men's clothing">
//             Men
//           </option>
//         </select>
//       </React.Fragment>
//     );
//   }
// }