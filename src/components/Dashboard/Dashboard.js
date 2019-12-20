import React, {Component} from 'react';
import axios from 'axios';
import Product from '../Product/Product.js'

class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
        }
    }

    render(){
        return(
            <div>
                {/* {this.props.inventory.map(e => {
                    const {product_name, price, image_url}
                    return(
                        <div>
                            <div>{product_name}</div>
                            <div>{price}</div>
                            <div>{image_url}</div>
                            {() => this.props.deleteProduct(id)}
                        </div>
                    )
                })} */}


                <Product />

            </div>
        )
    }
}


export default Dashboard;