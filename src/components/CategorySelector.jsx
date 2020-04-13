import React, { Component } from 'react'
import Axios from "axios";
import * as UTILS from "../utils";

export default class CategorySelector extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    onWomenClicked = (e) => {
        e.preventDefault();
        var womens_category = e.target.elements("women");
        var formData = new FormData(this.formRef.current);
        Axios.post(UTILS.show_women, formData, womens_category).then((res) => {
        console.log(res);
         });
    };
         
        onMenClicked = (e) => {
        e.preventDefault();
        var mens_category = e.target.elements("men");
        var formData = new FormData(this);
        Axios.post(UTILS.show_men, formData, mens_category).then((res) => {
        console.log(res);
         });
    }

    render() {
        return (
           <React.Fragment>
                <select className="category-options">
                    <option
                    value="women"
                    name="women"
                    className="option-style"
                    onChange={this.onWomenClicked}
                    >
                    Women
                    </option>
                    <option
                    value="men"
                    name="men"
                    className="option-style"
                    onChange={this.onMenClicked}
                    >
                    Men
                    </option>
                </select>
           </React.Fragment>
        )
    }
}







    




