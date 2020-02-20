import React, { Component } from 'react';
import './App.css';
import data from './pages/countries.json'
import Nav from './components/Nav';
import List from './components/List';

export default class App extends Component {
  render(){
    return (
      <>
          <Nav />
          <div class="container">
              <div class="row">
                  <div class="col-5">
                      <List data={data}/>
                  </div>
              </div>
          </div>
      </>
    )
  } 
}

