import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
//components
import Dashboard from './components/Dashboard/Dashboard.js';
import Form from './components/Form/Form.js'
import Header from './components/Header/Header.js'

class App extends Component {
  constructor(){
    super()
    this.state = {
      inventory: []
    }
  }

  makeNewProduct(newProduct){
    this.setState({inventory: newProduct})
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Dashboard makeNewProduct={this.makeNewProduct}/>
        <Form />
      </div>
    );
  }
}


export default App;
