import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component{
    constructor(){
        super()
        this.state = {
            image: '',
            productName: '',
            price: ''
        }
        this.updateImage=this.updateImage.bind(this);
        this.updatePrice=this.updatePrice.bind(this);
        this.updateProductName=this.updateProductName.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }

    updateImage(e){
        this.setState({image: e.target.value})
    }

    updateProductName(e){
        this.setState({productName: e.target.value})
    }

    updatePrice(e){
        this.setState({price: e.target.value})
    }

    handleClick(){
        const {image,productName, price} =  this.state;

        let newProduct = {
            image,
            productName,
            price
        }
        axios.post('/api/inventory', newProduct).then(response => {
            this.props.makeNewCard(response.data)
        })
    }

    render(){
        return(
            <div>
                <input onChange={this.updateImage} placeholder='image'/>
                <input onChange={this.updateProductName} placeholder='product name'/>
                <input onChange={this.updatePrice} placeholder='price'/>    
                <button onClick={this.handleClick}>Add Product</button>
            </div>
        )
    }
}


export default Form;