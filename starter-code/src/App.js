import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Countries from './countries.json';
import Menu from './components/Menu';
import Detail from './components/Detail';
import { Route } from "react-router-dom";

class App extends Component {
  
  render() {
 
    return (
      <div className="App">
        <NavBar/>

        <div className="container">
        <div className="row">
          <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            <div className="list-group text-left">
            {Countries.map((i,index) => <Menu key = {index} {...i} /> )}
            </div>
            </div>
            <Route exact path="/:id" component={Detail} />
            </div>
            </div>


      </div>
    );
  }
}

export default App;
