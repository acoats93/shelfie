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
            <div>Dashboard
                <Product />

            </div>
        )
    }
}


export default Dashboard;