import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
//components
import Dashboard from './components/Dashboard/Dashboard.js';
import Form from './components/Form/Form.js'
import Header from './components/Header/Header.js'
import axios from 'axios';



class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: []
    }
    this.deleteProduct=this.deleteProduct.bind(this);
    this.makeNewProduct=this.makeNewProduct.bind(this);
  }

  componentDidMount(){
    axios.get('/api/inventory').then(response => {
      this.setState({inventory: response.data})
    })
  }

  makeNewProduct(newProduct){
    this.setState({inventory: newProduct})
  }

  deleteProduct(id){
    axios.delete(`/api/inventory/${id}`).then(response => {
      this.setState({inventory: response.data})
    })
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Dashboard 
          inventory={this.state.inventory}
          makeNewProduct={this.makeNewProduct}/>
        <Form 
              deleteProduct={this.deleteProduct}
              inventory={this.state.inventory}/>
      </div>
    );
  }
}


export default App;
