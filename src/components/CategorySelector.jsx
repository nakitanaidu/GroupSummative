import React, { Component } from 'react'
import Axios from "axios";
import * as UTILS from "../utils";

export default class CategorySelector extends Component {

    constructor(props) {
        super(props);
        this.state = {category: [] }
        // get handle on the DOM element
        this.myRef = React.createRef();
        this.onCategoryUpdate = this.onCategoryUpdate.bind(this);
      }
    
      onCategoryUpdate(event) {
        this.setState({category: event.target.value});
      }

//
    componentDidMount() {
        Axios.get(UTILS.show_items).then(
          (res) => {
            console.table(res.data);
            this.setState({
              items: res.data,
            });
          },
          (error) => {
            console.log("error = ", error);
          }
        );
      }

      render() {
        let {
            womens_category,
            mens_category
          } = this.state.category;
        return (
          <React.Fragment>
            <select className="category-options" name={this.state.category} value={this.state.category} onChange={this.onCategoryUpdate}>
              <option
                // defaultValue={womens_category}
                value={womens_category}
                // name="womens_category"
                name={womens_category}
                className="option-style"
                // onChange={this.onWomenClicked}
              >
                Women's clothing
              </option>

              <option
                // defaultValue={mens_category}
                value={mens_category}
                // name="mens_category"
                name={mens_category}
                className="option-style"
                // onChange={this.onMenClicked}
              >
                Men's clothing
              </option>
            </select>
          </React.Fragment>
        );
      }
    }

