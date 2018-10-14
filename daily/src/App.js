import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PaisContainer from './components/PaisContainer';


import paises from './countries.json';

class App extends Component {


  state={
    paises
  }


  render() {
    return (
      <div className="App">
        <PaisContainer info={this.state.paises} />
      </div>
    );
  }
}

export default App;
