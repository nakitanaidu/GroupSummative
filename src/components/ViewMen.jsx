import React, { Component } from 'react'
import Axios from "axios";
import * as UTILS from "../utils";
import DisplayItems from './DisplayItems';

export default class 
 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
    }


// need to find a way to filter
//ItemDetail.find({ mens_category: "Men's clothing" })

componentDidMount(){
    this.getData()
}

    getData = e => {
        Axios.get(UTILS.show_men).then(
            res => {
                console.table(res.data)
                this.setState({
                    items: res.data
                })
            },
            error => {
                console.log("error = ", error);
            }
        );
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <ul>
                        {console.log(this.state.items)}
                        {this.state.items.map((items, i) => {
                            return (
                                <DisplayItems
                                key={i}
                                womens_category={items.womens_category}
                                mens_category={items.mens_category}
                                image={items.image}
                                title={items.title}
                                price={items.price}
                                size={items.size}
                                condition={items.condition}
                                description={items.description}
                                _id={items._id}

                                />
                            );
                        })}
                    </ul>
                </div>


            </React.Fragment>
        )
    }
}
