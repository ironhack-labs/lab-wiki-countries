import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Country from './components/Country'
import CountryDetail from './components/CountryDetail'



class App extends Component {
  render() {

    return (
      <div className="App">

        <h1>Country List</h1>

        <Country/>
        {/* <CountryDetail/> */}
        <Route exact path="/country/:id" component={CountryDetail} />

      </div>
    );
  }
}

export default App;
