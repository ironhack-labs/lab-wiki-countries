import React, { Component } from 'react';
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDeatils'
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch />
          <Route exact path='/' component={CountriesList}/>
          <Route exact path='/:id' component={CountryDetails} />
      </div>
    );
  }
}

export default App;
