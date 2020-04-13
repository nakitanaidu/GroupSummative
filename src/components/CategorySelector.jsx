import React, { Component } from 'react'
import Axios from "axios";
import * as UTILS from "../utils";

export default class CategorySelector extends Component {

    constructor(props) {
        super(props);
        this.state = {
          items: [], selected_id:null
        };
        this.items_id=null
      }

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
        return (
          <React.Fragment>
            <select className="category-options" onChange={this.onCategoryUpdated}>
            <option value="">Select Category:</option>
                {this.state.items.map((category, i)=>{
                    let menClothing = `${category.mens_categories}`
                    let womenClothing = `${category.womens_category}`
                return(
                    <option key={i} value={category.id}>
                        {menClothing},
                        {womenClothing}  
                    </option>
                )
                })}
             
            </select>
            {/* <p>{this.state.value}</p> */}
          </React.Fragment>
        );
      }
    }
    
   